// Zelf toegevoegde acts (per browser) samenvoegen met de route in route-data.js.
(function(){
  "use strict";
  var KEY="extra";
  function load(){try{return JSON.parse(localStorage.getItem(KEY)||"[]")}catch(e){return []}}
  function save(l){try{localStorage.setItem(KEY,JSON.stringify(l))}catch(e){}}
  var places=(window.PLACES||[]).map(function(r){return {name:r[0],stages:r[2].toLowerCase().split("; ")}});
  function placeOf(st){st=String(st).toLowerCase();for(var i=0;i<places.length;i++)if(places[i].stages.indexOf(st)>=0)return places[i];return null}
  function walk(s1,s2){var C=window.COORDS||{},a=placeOf(s1),b=placeOf(s2);if(!a||!b)return null;if(a.name===b.name)return 2;var p=C[a.name],q=C[b.name];if(!p||!q)return null;
    var R=6371,dl=(q[0]-p[0])*Math.PI/180,dn=(q[1]-p[1])*Math.PI/180,x=Math.pow(Math.sin(dl/2),2)+Math.cos(p[0]*Math.PI/180)*Math.cos(q[0]*Math.PI/180)*Math.pow(Math.sin(dn/2),2);
    return Math.max(3,Math.round(2*R*Math.asin(Math.sqrt(x))*1.3/5*60))}
  function mins(t){var p=t.split("–")[0].split(":").map(Number);var m=p[0]*60+p[1];if(p[0]<6)m+=1440;return m}
  var D=window.DATA||{};
  var list=load();
  list.forEach(function(e){
    var slots=D[e.day];if(!slots)return;
    if(slots.some(function(sl){return sl.sets.some(function(x){return x[1]===e.a})}))return;
    var slot={sets:[[e.t,e.a,e.v,"Zelf toegevoegd"]],extra:true};
    var i=0;while(i<slots.length&&mins(slots[i].sets[0][0])<=mins(e.t))i++;
    slots.splice(i,0,slot);
    var fix=function(k){if(k<=0||k>=slots.length)return;var prev=slots[k-1].sets[0][2],cur=slots[k].sets[0][2];var w=walk(prev,cur);if(w!=null){slots[k].walk="± "+w+" min lopen";slots[k].cls=w>15?"bad":""}};
    fix(i);fix(i+1);
  });
  window.EXTRA={
    has:function(day,a){return load().some(function(e){return e.day===day&&e.a===a})},
    inRoute:function(day,a){return (D[day]||[]).some(function(sl){return sl.sets.some(function(x){return x[1]===a})})},
    add:function(day,t,a,v){var l=load();if(!l.some(function(e){return e.day===day&&e.a===a&&e.t===t}))l.push({day:day,t:t,a:a,v:v});save(l)},
    remove:function(day,a){save(load().filter(function(e){return !(e.day===day&&e.a===a)}))},
    fullDay:function(short){var k=Object.keys(D);for(var i=0;i<k.length;i++)if(k[i].split(" ")[0]===short)return k[i];return null}
  };
})();
