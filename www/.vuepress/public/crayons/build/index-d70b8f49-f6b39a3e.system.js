System.register(["./index-e1f984e1-e2bc9b59.system.js","./index-dc611d24-4c9389ae.system.js"],(function(e){"use strict";var t,a,r,m;return{setters:[function(e){t=e.f;a=e.l;r=e.m},function(e){m=e.b}],execute:function(){var i={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd.MM.y"};var s={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"};var d={full:"{{date}} 'à' {{time}}",long:"{{date}} 'à' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};var o={date:m({formats:i,defaultWidth:"full"}),time:m({formats:s,defaultWidth:"full"}),dateTime:m({formats:d,defaultWidth:"full"})};var n={lastWeek:"eeee 'la semaine dernière à' p",yesterday:"'hier à' p",today:"'aujourd’hui à' p",tomorrow:"'demain à' p'",nextWeek:"eeee 'la semaine prochaine à' p",other:"P"};var l=function e(t,a,r,m){return n[t]};var f=e("default",{code:"fr-CH",formatDistance:t,formatLong:o,formatRelative:l,localize:a,match:r,options:{weekStartsOn:1,firstWeekContainsDate:4}})}}}));