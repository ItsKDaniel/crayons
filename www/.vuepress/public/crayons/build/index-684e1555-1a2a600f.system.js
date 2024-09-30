System.register(["./index-dc611d24-4c9389ae.system.js"],(function(e){"use strict";var a,t,i,r;return{setters:[function(e){a=e.b;t=e.a;i=e.c;r=e.d}],execute:function(){var n={lessThanXSeconds:{one:"menys d'un segon",eleven:"menys d'onze segons",other:"menys de {{count}} segons"},xSeconds:{one:"1 segon",other:"{{count}} segons"},halfAMinute:"mig minut",lessThanXMinutes:{one:"menys d'un minut",eleven:"menys d'onze minuts",other:"menys de {{count}} minuts"},xMinutes:{one:"1 minut",other:"{{count}} minuts"},aboutXHours:{one:"aproximadament una hora",other:"aproximadament {{count}} hores"},xHours:{one:"1 hora",other:"{{count}} hores"},xDays:{one:"1 dia",other:"{{count}} dies"},aboutXWeeks:{one:"aproximadament una setmana",other:"aproximadament {{count}} setmanes"},xWeeks:{one:"1 setmana",other:"{{count}} setmanes"},aboutXMonths:{one:"aproximadament un mes",other:"aproximadament {{count}} mesos"},xMonths:{one:"1 mes",other:"{{count}} mesos"},aboutXYears:{one:"aproximadament un any",other:"aproximadament {{count}} anys"},xYears:{one:"1 any",other:"{{count}} anys"},overXYears:{one:"més d'un any",eleven:"més d'onze anys",other:"més de {{count}} anys"},almostXYears:{one:"gairebé un any",other:"gairebé {{count}} anys"}};function d(e,a,t){t=t||{};var i;if(typeof n[e]==="string"){i=n[e]}else if(a===1){i=n[e].one}else if(a===11&&n[e].eleven){i=n[e].eleven}else{i=n[e].other.replace("{{count}}",a)}if(t.addSuffix){if(t.comparison>0){return"en "+i}else{return"fa "+i}}return i}var s={full:"EEEE, d 'de' MMMM y",long:"d 'de' MMMM y",medium:"d MMM y",short:"dd/MM/y"};var m={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"};var o={full:"{{date}} 'a les' {{time}}",long:"{{date}} 'a les' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};var u={date:a({formats:s,defaultWidth:"full"}),time:a({formats:m,defaultWidth:"full"}),dateTime:a({formats:o,defaultWidth:"full"})};var l={lastWeek:"'el' eeee 'passat a la' LT",yesterday:"'ahir a la' p",today:"'avui a la' p",tomorrow:"'demà a la' p",nextWeek:"eeee 'a la' p",other:"P"};var v={lastWeek:"'el' eeee 'passat a les' p",yesterday:"'ahir a les' p",today:"'avui a les' p",tomorrow:"'demà a les' p",nextWeek:"eeee 'a les' p",other:"P"};function g(e,a,t,i){if(a.getUTCHours()!==1){return v[e]}return l[e]}var h={narrow:["aC","dC"],abbreviated:["a. de C.","d. de C."],wide:["abans de Crist","després de Crist"]};var b={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1r trimestre","2n trimestre","3r trimestre","4t trimestre"]};var f={narrow:["GN","FB","MÇ","AB","MG","JN","JL","AG","ST","OC","NV","DS"],abbreviated:["gen.","febr.","març","abr.","maig","juny","jul.","ag.","set.","oct.","nov.","des."],wide:["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre"]};var c={narrow:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],short:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],abbreviated:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],wide:["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"]};var p={narrow:{am:"am",pm:"pm",midnight:"mitjanit",noon:"migdia",morning:"matí",afternoon:"tarda",evening:"vespre",night:"nit"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"mitjanit",noon:"migdia",morning:"matí",afternoon:"tarda",evening:"vespre",night:"nit"},wide:{am:"ante meridiem",pm:"post meridiem",midnight:"mitjanit",noon:"migdia",morning:"matí",afternoon:"tarda",evening:"vespre",night:"nit"}};var y={narrow:{am:"am",pm:"pm",midnight:"de la mitjanit",noon:"del migdia",morning:"del matí",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"},abbreviated:{am:"AM",pm:"PM",midnight:"de la mitjanit",noon:"del migdia",morning:"del matí",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"},wide:{am:"ante meridiem",pm:"post meridiem",midnight:"de la mitjanit",noon:"del migdia",morning:"del matí",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"}};function w(e,a){var t=Number(e);var i=t%100;if(i>20||i<10){switch(i%10){case 1:return t+"r";case 2:return t+"n";case 3:return t+"r";case 4:return t+"t"}}return t+"è"}var j={ordinalNumber:w,era:t({values:h,defaultWidth:"wide"}),quarter:t({values:b,defaultWidth:"wide",argumentCallback:function e(a){return Number(a)-1}}),month:t({values:f,defaultWidth:"wide"}),day:t({values:c,defaultWidth:"wide"}),dayPeriod:t({values:p,defaultWidth:"wide",formattingValues:y,defaultFormattingWidth:"wide"})};var M=/^(\d+)(è|r|n|r|t)?/i;var C=/\d+/i;var W={narrow:/^(aC|dC)/i,abbreviated:/^(a. de C.|d. de C.)/i,wide:/^(abans de Crist|despr[eé]s de Crist)/i};var P={narrow:[/^aC/i,/^dC/i],abbreviated:[/^(a. de C.)/i,/^(d. de C.)/i],wide:[/^(abans de Crist)/i,/^(despr[eé]s de Crist)/i]};var x={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](è|r|n|r|t)? trimestre/i};var N={any:[/1/i,/2/i,/3/i,/4/i]};var T={narrow:/^(GN|FB|MÇ|AB|MG|JN|JL|AG|ST|OC|NV|DS)/i,abbreviated:/^(gen.|febr.|març|abr.|maig|juny|jul.|ag.|set.|oct.|nov.|des.)/i,wide:/^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i};var k={narrow:[/^GN/i,/^FB/i,/^MÇ/i,/^AB/i,/^MG/i,/^JN/i,/^JL/i,/^AG/i,/^ST/i,/^OC/i,/^NV/i,/^DS/i],abbreviated:[/^gen./i,/^febr./i,/^març/i,/^abr./i,/^maig/i,/^juny/i,/^jul./i,/^ag./i,/^set./i,/^oct./i,/^nov./i,/^des./i],wide:[/^gener/i,/^febrer/i,/^març/i,/^abril/i,/^maig/i,/^juny/i,/^juliol/i,/^agost/i,/^setembre/i,/^octubre/i,/^novembre/i,/^desembre/i]};var H={narrow:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,short:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,abbreviated:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,wide:/^(diumenge|dilluns|dimarts|dimecres|dijous|divendres|dissabte)/i};var S={narrow:[/^dg./i,/^dl./i,/^dt./i,/^dm./i,/^dj./i,/^dv./i,/^ds./i],abbreviated:[/^dg./i,/^dl./i,/^dt./i,/^dm./i,/^dj./i,/^dv./i,/^ds./i],wide:[/^diumenge/i,/^dilluns/i,/^dimarts/i,/^dimecres/i,/^dijous/i,/^divendres/i,/^disssabte/i]};var z={narrow:/^(a|p|mn|md|(del|de la) (matí|tarda|vespre|nit))/i,abbreviated:/^([ap]\.?\s?m\.?|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i,wide:/^(ante meridiem|post meridiem|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i};var G={any:{am:/^a/i,pm:/^p/i,midnight:/^mitjanit/i,noon:/^migdia/i,morning:/matí/i,afternoon:/tarda/i,evening:/vespre/i,night:/nit/i}};var A={ordinalNumber:i({matchPattern:M,parsePattern:C,valueCallback:function e(a){return parseInt(a,10)}}),era:r({matchPatterns:W,defaultMatchWidth:"wide",parsePatterns:P,defaultParseWidth:"any"}),quarter:r({matchPatterns:x,defaultMatchWidth:"wide",parsePatterns:N,defaultParseWidth:"any",valueCallback:function e(a){return a+1}}),month:r({matchPatterns:T,defaultMatchWidth:"wide",parsePatterns:k,defaultParseWidth:"any"}),day:r({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:S,defaultParseWidth:"any"}),dayPeriod:r({matchPatterns:z,defaultMatchWidth:"any",parsePatterns:G,defaultParseWidth:"any"})};var X=e("default",{code:"ca",formatDistance:d,formatLong:u,formatRelative:g,localize:j,match:A,options:{weekStartsOn:1,firstWeekContainsDate:4}})}}}));