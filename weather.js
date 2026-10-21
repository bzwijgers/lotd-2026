// Weer voor Rotterdam centrum via Open-Meteo (gratis, geen sleutel). Eén uur bewaard in de browser.
(function(){
  "use strict";
  var URL="https://api.open-meteo.com/v1/forecast?latitude=51.92&longitude=4.48&current=temperature_2m,weather_code,is_day&hourly=temperature_2m,precipitation_probability,precipitation,weather_code&timezone=Europe%2FAmsterdam&forecast_days=7";
  window.BUIENRADAR="https://www.buienradar.nl/weer/rotterdam/nl/2747891";
  function icon(c,day){if(c==null)return"🌡";if(c===0)return day===0?"🌙":"☀️";if(c<=2)return day===0?"☁️":"🌤";if(c===3)return"☁️";if(c===45||c===48)return"🌫";if(c>=51&&c<=67)return"🌧";if(c>=71&&c<=77)return"❄️";if(c>=80&&c<=82)return"🌦";if(c>=95)return"⛈";return"☁️"}
  function load(){
    try{var c=JSON.parse(localStorage.getItem("wx")||"null");if(c&&Date.now()-c.t<3600000)return Promise.resolve(c.d)}catch(e){}
    var ctl=window.AbortController?new AbortController():null;var to=setTimeout(function(){if(ctl)ctl.abort()},6000);
    return fetch(URL,ctl?{signal:ctl.signal}:{}).then(function(r){clearTimeout(to);if(!r.ok)throw 0;return r.json()}).then(function(d){try{localStorage.setItem("wx",JSON.stringify({t:Date.now(),d:d}))}catch(e){}return d})
      .catch(function(){try{var c=JSON.parse(localStorage.getItem("wx")||"null");if(c)return c.d}catch(e){}return null})}
  function hrs(d){var h=d.hourly,o=[];for(var i=0;i<h.time.length;i++)o.push({t:new Date(h.time[i]),temp:h.temperature_2m[i],p:h.precipitation_probability[i],mm:h.precipitation[i],c:h.weather_code[i]});return o}
  // regen in de komende uren: eerste uur met kans >= 50% of >= 0.3 mm
  function nextRain(d,hours){var now=Date.now(),l=hrs(d).filter(function(x){return x.t.getTime()>now-3600000&&x.t.getTime()<now+hours*3600000});for(var i=0;i<l.length;i++)if(l[i].p>=50||l[i].mm>=0.3)return l[i];return null}
  var hm=function(t){return String(t.getHours()).padStart(2,"0")+":00"};
  window.WX={
    load:load,icon:icon,
    now:function(d){if(!d||!d.current)return null;var r=nextRain(d,4);return {icon:icon(d.current.weather_code,d.current.is_day),temp:Math.round(d.current.temperature_2m),rain:r?(r.t.getTime()<=Date.now()?"nu regen":"regen rond "+hm(r.t)):"droog"}},
    // avond van een festivaldag (18:00 tot 01:00), isoDate = "2026-10-23"
    evening:function(d,iso){if(!d)return null;var a=new Date(iso+"T18:00:00").getTime(),b=a+7*3600000;var l=hrs(d).filter(function(x){var t=x.t.getTime();return t>=a&&t<b});if(!l.length)return null;
      var temps=l.map(function(x){return x.temp}),wet=l.filter(function(x){return x.p>=50||x.mm>=0.3});var codes=l.map(function(x){return x.c}).sort(function(p,q){return q-p});
      var lo=Math.round(Math.min.apply(null,temps)),hi=Math.round(Math.max.apply(null,temps));var txt=(lo===hi?lo:lo+"–"+hi)+"°";
      txt+=wet.length?" · kans op regen "+hm(wet[0].t)+"–"+hm(new Date(wet[wet.length-1].t.getTime()+3600000)):" · waarschijnlijk droog";
      return {icon:icon(codes[0],0),text:txt,wet:wet.length>0}}
  };
})();
