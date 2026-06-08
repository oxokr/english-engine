// 영어 엔진 서비스워커 — 첫 방문 때 앱 + 모든 음성을 캐시해서 오프라인(터널/비행기)에서도 작동.
// 커리큘럼이 바뀌면 CACHE 버전을 올려서 새로 캐시한다.
const CACHE = "eng-engine-v27";
const CORE = ["./", "index.html", "curriculum.js", "manifest.json", "icon-192.png", "icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(CORE).catch(() => {});
    // curriculum.js에서 음성 파일 목록을 뽑아 전부 캐시
    try {
      const txt = await (await fetch("curriculum.js", { cache: "no-cache" })).text();
      const C = JSON.parse(txt.slice(txt.indexOf("{"), txt.lastIndexOf("}") + 1));
      const urls = [];
      for (const d of C.days) {
        if (d.concept) urls.push("audio/d" + d.day + "_intro.mp3");
        for (const it of (d.items || [])) {
          urls.push("audio/" + it.id + "_ko.mp3", "audio/" + it.id + "_en.mp3");
          if (it.scene) urls.push("audio/" + it.id + "_scene.mp3");
        }
      }
      // 50개씩 나눠 캐시, 일부 실패해도 계속
      for (let i = 0; i < urls.length; i += 50) {
        await Promise.allSettled(urls.slice(i, i + 50).map((u) => cache.add(u)));
      }
    } catch (err) {}
    self.skipWaiting();
  })());
});

self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

// 캐시 우선(오프라인), 없으면 네트워크 → 받아오면 캐시에 저장
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith((async () => {
    const cached = await caches.match(e.request);
    if (cached) return cached;
    try {
      const res = await fetch(e.request);
      const cache = await caches.open(CACHE);
      cache.put(e.request, res.clone()).catch(() => {});
      return res;
    } catch (err) {
      return cached || new Response("", { status: 504 });
    }
  })());
});
