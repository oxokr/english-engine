import json,statistics
from collections import Counter
src=open('curriculum.js').read()
src=src[src.index('{'):src.rindex('}')+1]
data=json.loads(src)
alll=[]
pd={}
for d in data['days']:
    L=[len(i['en'].split()) for i in d['items']]
    alll+=L
    pd[d['day']]=(d['verb'],statistics.mean(L),min(L),max(L))
print('DIST',dict(sorted(Counter(alll).items())))
print('mean',round(statistics.mean(alll),2),'median',statistics.median(alll),'max',max(alll),'n',len(alll))
for k in sorted(pd):
    v,m,mn,mx=pd[k]
    print('Day%2d %-8s mean=%.1f min=%d max=%d'%(k,v,m,mn,mx))
print('--- LONGEST ---')
items=[(len(i['en'].split()),i['id'],i['en']) for d in data['days'] for i in d['items']]
items.sort(reverse=True)
for w,i,e in items[:12]: print(w,i,e)
print('--- DAY19-22 ---')
for d in data['days']:
    if d['day'] in (19,20,21,22):
        print('Day',d['day'],d['verb'])
        for i in d['items']: print(' ',len(i['en'].split()),i['id'],i['en'])
