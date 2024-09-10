System.register(["./index-dc611d24-4c9389ae.system.js","./index-d2a6c100-e71a69ec.system.js","./_rollupPluginBabelHelpers-ef57da83-3e4652f5.system.js"],(function(i){"use strict";var n,e,t,a,r,u;return{setters:[function(i){n=i.b;e=i.a;t=i.c;a=i.d},function(i){r=i.t;u=i.i},function(){}],execute:function(){function o(i,n){if(i.one!==undefined&&n===1){return i.one}var e=n%10;var t=n%100;if(e===1&&t!==11){return i.singularNominative.replace("{{count}}",String(n))}else if(e>=2&&e<=4&&(t<10||t>20)){return i.singularGenitive.replace("{{count}}",String(n))}else{return i.pluralGenitive.replace("{{count}}",String(n))}}function l(i){return function(n,e){if(e&&e.addSuffix){if(e.comparison&&e.comparison>0){if(i.future){return o(i.future,n)}else{return"праз "+o(i.regular,n)}}else{if(i.past){return o(i.past,n)}else{return o(i.regular,n)+" таму"}}}else{return o(i.regular,n)}}}var s=function i(n,e){if(e&&e.addSuffix){if(e.comparison&&e.comparison>0){return"праз паўхвіліны"}else{return"паўхвіліны таму"}}return"паўхвіліны"};var v={lessThanXSeconds:l({regular:{one:"менш за секунду",singularNominative:"менш за {{count}} секунду",singularGenitive:"менш за {{count}} секунды",pluralGenitive:"менш за {{count}} секунд"},future:{one:"менш, чым праз секунду",singularNominative:"менш, чым праз {{count}} секунду",singularGenitive:"менш, чым праз {{count}} секунды",pluralGenitive:"менш, чым праз {{count}} секунд"}}),xSeconds:l({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунды",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду таму",singularGenitive:"{{count}} секунды таму",pluralGenitive:"{{count}} секунд таму"},future:{singularNominative:"праз {{count}} секунду",singularGenitive:"праз {{count}} секунды",pluralGenitive:"праз {{count}} секунд"}}),halfAMinute:s,lessThanXMinutes:l({regular:{one:"менш за хвіліну",singularNominative:"менш за {{count}} хвіліну",singularGenitive:"менш за {{count}} хвіліны",pluralGenitive:"менш за {{count}} хвілін"},future:{one:"менш, чым праз хвіліну",singularNominative:"менш, чым праз {{count}} хвіліну",singularGenitive:"менш, чым праз {{count}} хвіліны",pluralGenitive:"менш, чым праз {{count}} хвілін"}}),xMinutes:l({regular:{singularNominative:"{{count}} хвіліна",singularGenitive:"{{count}} хвіліны",pluralGenitive:"{{count}} хвілін"},past:{singularNominative:"{{count}} хвіліну таму",singularGenitive:"{{count}} хвіліны таму",pluralGenitive:"{{count}} хвілін таму"},future:{singularNominative:"праз {{count}} хвіліну",singularGenitive:"праз {{count}} хвіліны",pluralGenitive:"праз {{count}} хвілін"}}),aboutXHours:l({regular:{singularNominative:"каля {{count}} гадзіны",singularGenitive:"каля {{count}} гадзін",pluralGenitive:"каля {{count}} гадзін"},future:{singularNominative:"прыблізна праз {{count}} гадзіну",singularGenitive:"прыблізна праз {{count}} гадзіны",pluralGenitive:"прыблізна праз {{count}} гадзін"}}),xHours:l({regular:{singularNominative:"{{count}} гадзіна",singularGenitive:"{{count}} гадзіны",pluralGenitive:"{{count}} гадзін"},past:{singularNominative:"{{count}} гадзіну таму",singularGenitive:"{{count}} гадзіны таму",pluralGenitive:"{{count}} гадзін таму"},future:{singularNominative:"праз {{count}} гадзіну",singularGenitive:"праз {{count}} гадзіны",pluralGenitive:"праз {{count}} гадзін"}}),xDays:l({regular:{singularNominative:"{{count}} дзень",singularGenitive:"{{count}} дні",pluralGenitive:"{{count}} дзён"}}),aboutXWeeks:l({regular:{singularNominative:"каля {{count}} месяца",singularGenitive:"каля {{count}} месяцаў",pluralGenitive:"каля {{count}} месяцаў"},future:{singularNominative:"прыблізна праз {{count}} месяц",singularGenitive:"прыблізна праз {{count}} месяцы",pluralGenitive:"прыблізна праз {{count}} месяцаў"}}),xWeeks:l({regular:{singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяцы",pluralGenitive:"{{count}} месяцаў"}}),aboutXMonths:l({regular:{singularNominative:"каля {{count}} месяца",singularGenitive:"каля {{count}} месяцаў",pluralGenitive:"каля {{count}} месяцаў"},future:{singularNominative:"прыблізна праз {{count}} месяц",singularGenitive:"прыблізна праз {{count}} месяцы",pluralGenitive:"прыблізна праз {{count}} месяцаў"}}),xMonths:l({regular:{singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяцы",pluralGenitive:"{{count}} месяцаў"}}),aboutXYears:l({regular:{singularNominative:"каля {{count}} года",singularGenitive:"каля {{count}} гадоў",pluralGenitive:"каля {{count}} гадоў"},future:{singularNominative:"прыблізна праз {{count}} год",singularGenitive:"прыблізна праз {{count}} гады",pluralGenitive:"прыблізна праз {{count}} гадоў"}}),xYears:l({regular:{singularNominative:"{{count}} год",singularGenitive:"{{count}} гады",pluralGenitive:"{{count}} гадоў"}}),overXYears:l({regular:{singularNominative:"больш за {{count}} год",singularGenitive:"больш за {{count}} гады",pluralGenitive:"больш за {{count}} гадоў"},future:{singularNominative:"больш, чым праз {{count}} год",singularGenitive:"больш, чым праз {{count}} гады",pluralGenitive:"больш, чым праз {{count}} гадоў"}}),almostXYears:l({regular:{singularNominative:"амаль {{count}} год",singularGenitive:"амаль {{count}} гады",pluralGenitive:"амаль {{count}} гадоў"},future:{singularNominative:"амаль праз {{count}} год",singularGenitive:"амаль праз {{count}} гады",pluralGenitive:"амаль праз {{count}} гадоў"}})};var c=function i(n,e,t){t=t||{};return v[n](e,t)};var d={full:"EEEE, d MMMM y 'г.'",long:"d MMMM y 'г.'",medium:"d MMM y 'г.'",short:"dd.MM.y"};var g={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"};var m={any:"{{date}}, {{time}}"};var f={date:n({formats:d,defaultWidth:"full"}),time:n({formats:g,defaultWidth:"full"}),dateTime:n({formats:m,defaultWidth:"any"})};var p=["нядзелю","панядзелак","аўторак","сераду","чацвер","пятніцу","суботу"];function h(i){var n=p[i];switch(i){case 0:case 3:case 5:case 6:return"'у мінулую "+n+" а' p";case 1:case 2:case 4:return"'у мінулы "+n+" а' p"}}function G(i){var n=p[i];return"'у "+n+" а' p"}function w(i){var n=p[i];switch(i){case 0:case 3:case 5:case 6:return"'у наступную "+n+" а' p";case 1:case 2:case 4:return"'у наступны "+n+" а' p"}}var b=function i(n,e,t){var a=r(n);var o=a.getUTCDay();if(u(a,e,t)){return G(o)}else{return h(o)}};var N=function i(n,e,t){var a=r(n);var o=a.getUTCDay();if(u(a,e,t)){return G(o)}else{return w(o)}};var y={lastWeek:b,yesterday:"'учора а' p",today:"'сёння а' p",tomorrow:"'заўтра а' p",nextWeek:N,other:"P"};var W=function i(n,e,t,a){var r=y[n];if(typeof r==="function"){return r(e,t,a)}return r};var M={narrow:["да н.э.","н.э."],abbreviated:["да н. э.","н. э."],wide:["да нашай эры","нашай эры"]};var P={narrow:["1","2","3","4"],abbreviated:["1-ы кв.","2-і кв.","3-і кв.","4-ы кв."],wide:["1-ы квартал","2-і квартал","3-і квартал","4-ы квартал"]};var x={narrow:["С","Л","С","К","М","Ч","Л","Ж","В","К","Л","С"],abbreviated:["студз.","лют.","сак.","крас.","май","чэрв.","ліп.","жн.","вер.","кастр.","ліст.","снеж."],wide:["студзень","люты","сакавік","красавік","май","чэрвень","ліпень","жнівень","верасень","кастрычнік","лістапад","снежань"]};var S={narrow:["С","Л","С","К","М","Ч","Л","Ж","В","К","Л","С"],abbreviated:["студз.","лют.","сак.","крас.","мая","чэрв.","ліп.","жн.","вер.","кастр.","ліст.","снеж."],wide:["студзеня","лютага","сакавіка","красавіка","мая","чэрвеня","ліпеня","жніўня","верасня","кастрычніка","лістапада","снежня"]};var k={narrow:["Н","П","А","С","Ч","П","С"],short:["нд","пн","аў","ср","чц","пт","сб"],abbreviated:["нядз","пан","аўт","сер","чац","пят","суб"],wide:["нядзеля","панядзелак","аўторак","серада","чацвер","пятніца","субота"]};var X={narrow:{am:"ДП",pm:"ПП",midnight:"поўн.",noon:"поўд.",morning:"ран.",afternoon:"дзень",evening:"веч.",night:"ноч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"поўн.",noon:"поўд.",morning:"ран.",afternoon:"дзень",evening:"веч.",night:"ноч"},wide:{am:"ДП",pm:"ПП",midnight:"поўнач",noon:"поўдзень",morning:"раніца",afternoon:"дзень",evening:"вечар",night:"ноч"}};var H={narrow:{am:"ДП",pm:"ПП",midnight:"поўн.",noon:"поўд.",morning:"ран.",afternoon:"дня",evening:"веч.",night:"ночы"},abbreviated:{am:"ДП",pm:"ПП",midnight:"поўн.",noon:"поўд.",morning:"ран.",afternoon:"дня",evening:"веч.",night:"ночы"},wide:{am:"ДП",pm:"ПП",midnight:"поўнач",noon:"поўдзень",morning:"раніцы",afternoon:"дня",evening:"вечара",night:"ночы"}};var z=function i(n,e){var t=e||{};var a=String(t.unit);var r=Number(n);var u;if(a==="date"){u="-га"}else if(a==="hour"||a==="minute"||a==="second"){u="-я"}else{u=(r%10===2||r%10===3)&&r%100!==12&&r%100!==13?"-і":"-ы"}return r+u};var C={ordinalNumber:z,era:e({values:M,defaultWidth:"wide"}),quarter:e({values:P,defaultWidth:"wide",argumentCallback:function i(n){return Number(n)-1}}),month:e({values:x,defaultWidth:"wide",formattingValues:S,defaultFormattingWidth:"wide"}),day:e({values:k,defaultWidth:"wide"}),dayPeriod:e({values:X,defaultWidth:"any",formattingValues:H,defaultFormattingWidth:"wide"})};var D=/^(\d+)(-?(е|я|га|і|ы|ае|ая|яя|шы|гі|ці|ты|мы))?/i;var T=/\d+/i;var E={narrow:/^((да )?н\.?\s?э\.?)/i,abbreviated:/^((да )?н\.?\s?э\.?)/i,wide:/^(да нашай эры|нашай эры|наша эра)/i};var Y={any:[/^д/i,/^н/i]};var j={narrow:/^[1234]/i,abbreviated:/^[1234](-?[ыі]?)? кв.?/i,wide:/^[1234](-?[ыі]?)? квартал/i};var q={any:[/1/i,/2/i,/3/i,/4/i]};var F={narrow:/^[слкмчжв]/i,abbreviated:/^(студз|лют|сак|крас|ма[йя]|чэрв|ліп|жн|вер|кастр|ліст|снеж)\.?/i,wide:/^(студзен[ья]|лют(ы|ага)|сакавіка?|красавіка?|ма[йя]|чэрвен[ья]|ліпен[ья]|жні(вень|ўня)|верас(ень|ня)|кастрычніка?|лістапада?|снеж(ань|ня))/i};var U={narrow:[/^с/i,/^л/i,/^с/i,/^к/i,/^м/i,/^ч/i,/^л/i,/^ж/i,/^в/i,/^к/i,/^л/i,/^с/i],any:[/^ст/i,/^лю/i,/^са/i,/^кр/i,/^ма/i,/^ч/i,/^ліп/i,/^ж/i,/^в/i,/^ка/i,/^ліс/i,/^сн/i]};var V={narrow:/^[нпасч]/i,short:/^(нд|ня|пн|па|аў|ат|ср|се|чц|ча|пт|пя|сб|су)\.?/i,abbreviated:/^(нядз?|ндз|пнд|пан|аўт|срд|сер|чцв|чац|птн|пят|суб).?/i,wide:/^(нядзел[яі]|панядзел(ак|ка)|аўтор(ак|ка)|серад[аы]|чацв(ер|ярга)|пятніц[аы]|субот[аы])/i};var A={narrow:[/^н/i,/^п/i,/^а/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[ан]/i,/^а/i,/^с[ер]/i,/^ч/i,/^п[ят]/i,/^с[уб]/i]};var B={narrow:/^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i,abbreviated:/^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i,wide:/^([дп]п|поўнач|поўдзень|раніц[аы]|дзень|дня|вечара?|ночы?)/i};var I={any:{am:/^дп/i,pm:/^пп/i,midnight:/^поўн/i,noon:/^поўд/i,morning:/^р/i,afternoon:/^д[зн]/i,evening:/^в/i,night:/^н/i}};var L={ordinalNumber:t({matchPattern:D,parsePattern:T,valueCallback:function i(n){return parseInt(n,10)}}),era:a({matchPatterns:E,defaultMatchWidth:"wide",parsePatterns:Y,defaultParseWidth:"any"}),quarter:a({matchPatterns:j,defaultMatchWidth:"wide",parsePatterns:q,defaultParseWidth:"any",valueCallback:function i(n){return Number(n)+1}}),month:a({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:U,defaultParseWidth:"any"}),day:a({matchPatterns:V,defaultMatchWidth:"wide",parsePatterns:A,defaultParseWidth:"any"}),dayPeriod:a({matchPatterns:B,defaultMatchWidth:"wide",parsePatterns:I,defaultParseWidth:"any"})};var O=i("default",{code:"be",formatDistance:c,formatLong:f,formatRelative:W,localize:C,match:L,options:{weekStartsOn:1,firstWeekContainsDate:1}})}}}));