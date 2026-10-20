// Mijn Left of the Dial 2026-route. Pas hier artiesten, tijden en zalen aan;
// zowel route.html als de kaart (index.html) lezen deze gegevens.
// slot: {walk:"tekst", cls:"lose|bad", choice:true, tag:"Kies één", sets:[[tijd, artiest, zaal, noot, "bad"]]}
window.DATA={
"Donderdag 22 oktober":[
 {sets:[["19:50–20:30","Nina Winder-Lind","Paradijskerk"]]},
 {walk:"12 min lopen",sets:[["20:50–21:30","La Flemme","WORM 1"]]},
 {walk:"13 min lopen",sets:[["21:40–22:20","Child of Prague","TR Up"]]},
 {walk:"2 min, zelfde gebouw",sets:[["22:20–23:00","Daufødt","TR Foyer"]]},
 {walk:"2 min, zelfde gebouw",cls:"lose",sets:[["22:50–23:30","Wesley & The Boys","TR Down","Overlapt 10 min met Daufødt."]]},
 {walk:"11 min lopen",cls:"lose",sets:[["23:20–00:00","The Jump Cuts","Stalles","Om 23:09 weg bij Wesley voor het begin, anders mis je ±20 min."]]},
 {walk:"4 min lopen",cls:"lose",sets:[["23:50–00:30","Lttl Mort","Uniek","Jump Cuts loopt tot 00:00: ±14 min eerder weg, of het begin van Lttl Mort missen."]]}
],
"Vrijdag 23 oktober":[
 {sets:[["19:50–20:30","Newhvn","De Doelen WBH"]]},
 {walk:"4 min lopen",cls:"lose",sets:[["20:20–21:00","Alien Boy","TR Foyer","Om 20:16 weg bij Newhvn, anders mis je ±14 min."]]},
 {choice:true,tag:"Kies één",walk:"13–15 min lopen",cls:"lose",sets:[
   ["21:10–21:50","Gardens","WORM 1","13 min lopen, mist ±3 min."],
   ["21:10–21:50","Family Stereo","Arminius Up","15 min lopen, mist ±5 min."]]},
 {choice:true,tag:"Kies één",walk:"vanaf WORM 16 min · vanaf Arminius 19 min",cls:"bad",sets:[
   ["22:00–22:40","Rageflower","De Doelen WBH","Mist 6 (WORM) tot 9 (Arminius) min.","bad"],
   ["22:20–23:00","Mindsigh","De Doelen Up","Op tijd. Botst wel met Oslo Twins."]]},
 {choice:true,tag:"Opvuller · kies één",walk:"",sets:[
   ["22:40–23:20","Oslo Twins","TR Up","4 min vanaf De Doelen. Na Rageflower: mist ±4 min."],
   ["22:50–23:30","Juni Habel","Paradijskerk","19 min vanaf De Doelen, mist ±9 min.","bad"]]},
 {choice:true,tag:"Afsluiter · kies één",walk:"",sets:[
   ["23:20–00:00","Tooth","TR Down","2 min na Oslo Twins. Past het best."],
   ["23:30–00:10","Black Nylon","TR Foyer","2 min na Oslo Twins."],
   ["23:30–00:10","Babe Haven","De Doelen WBH","4 min na Oslo Twins."],
   ["23:30–00:10","The Guest List","Rotown","10 min na Oslo Twins, 9 min na Juni Habel. Beste keus als je naar Juni Habel gaat."]]}
],
"Zaterdag 24 oktober":[
 {sets:[["18:50–19:30","Babe Haven","Reijngoud"]]},
 {walk:"3 min lopen",sets:[["19:50–20:30","Flowers for the Dead","Mono"]]},
 {walk:"3 min lopen",cls:"lose",sets:[["20:30–21:10","Curiosity Shop","Bird","Mist ±3 min."]]},
 {walk:"3 min lopen",sets:[["21:20–22:00","Lawn Chair","Mono"]]},
 {walk:"3 min lopen",sets:[["22:00–22:40","Mindsigh","Reijngoud","Mist ±3 min."]]},
 {walk:"14 min lopen",cls:"lose",sets:[["22:40–23:20","Twenty One Children","Annabel Down","Mindsigh eindigt om 22:40: om 22:26 weg, of ±14 min missen."]]},
 {walk:"3 min lopen",sets:[["23:30–00:00","Omertà","Salsability"]]}
]};
window.GENRE={"Nina Winder-Lind":"Singer-songwriter","La Flemme":"Garage-pop","Child of Prague":"Emo / Ierse folk-pop","Daufødt":"Noise / hardcore punk","Wesley & The Boys":"Punk & rock-'n-roll","The Jump Cuts":"Energieke indierock","Lttl Mort":"Donkere industrial-synth","Newhvn":"Shoegaze","Alien Boy":"Catchy indierock","Gardens":"Rauwe indierock","Family Stereo":"Filmische folk","Rageflower":"Indiepop met punkrandje","Mindsigh":"Emo / grunge","Oslo Twins":"Synth / alt-pop","Juni Habel":"Rustige folk","Tooth":"Slacker-emo","Black Nylon":"Noisy indierock","Babe Haven":"Queer punk","The Guest List":"Indiepop","Flowers for the Dead":"90s indierock","Curiosity Shop":"Alt-folk","Lawn Chair":"Synth-punk","Twenty One Children":"Punk","Omertà":"Garage / art-punk"};
window.LIKE={"Nina Winder-Lind":"Patti Smith, Aldous Harding, PJ Harvey","La Flemme":"Weezer, Hinds, Snail Mail","Child of Prague":"Geese, American Football, Black Country, New Road","Daufødt":"The Germs, Wax Head","Wesley & The Boys":"The Ramones, MC5","The Jump Cuts":"The Strokes, The Walkmen","Lttl Mort":"Nine Inch Nails, Sisters of Mercy","Newhvn":"Slow Crush, DIIV","Alien Boy":"Fountains of Wayne, Third Eye Blind","Gardens":"Best Coast, Wednesday","Family Stereo":"Neutral Milk Hotel, Elliott Smith","Rageflower":"Garbage, Wolf Alice, St. Vincent","Mindsigh":"Nirvana, Bleech, Ditz","Oslo Twins":"Moloko, Yeah Yeah Yeahs","Juni Habel":"Iron & Wine, Sufjan Stevens","Tooth":"Dinosaur Jr, The Get Up Kids, Alvvays","Black Nylon":"The Jesus and Mary Chain, Deftones","Babe Haven":"Lambrini Girls, Die Spitz","The Guest List":"The Stone Roses, The Kooks","Flowers for the Dead":"PJ Harvey, Sonic Youth, The Breeders","Curiosity Shop":"James Taylor, Whitney","Lawn Chair":"Wet Leg, Le Tigre, Lime Garden","Twenty One Children":"Black Flag, The Germs","Omertà":"Amyl and The Sniffers, Soft Play"};
