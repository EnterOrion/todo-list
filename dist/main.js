(()=>{"use strict";const t=function(){const t=document.getElementById("inbox");t.innerHTML=" ";const e=document.createElement("p");e.innerText="Welcome to your to-do list! To get started, add a task or a project from the sidebar!",t.appendChild(e)},e=document.getElementById("projectInfo");function n(){document.getElementById("projectForm").style.display="block"}const r=function(t){const e=document.createElement("div"),n=document.getElementById("inbox");e.setAttribute("id","project-div"),null===n.querySelector("#project-div")&&n.appendChild(e);const r=document.createElement("div");r.setAttribute("class","project-box");for(let n=0;n<t;n++)e.appendChild(r.cloneNode(!0))},a=document.getElementById("taskInfo");function o(){document.getElementById("taskForm").style.display="block"}const i=function(t){const e=document.createElement("div"),n=document.getElementById("inbox");e.setAttribute("id","task-div"),null===n.querySelector("#task-div")&&n.appendChild(e);const r=document.createElement("div");r.setAttribute("class","task-box");for(let n=0;n<t;n++)e.appendChild(r.cloneNode(!0))};function u(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t){return u(1,arguments),t instanceof Date||"object"===s(t)&&"[object Date]"===Object.prototype.toString.call(t)}function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function c(t){u(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===d(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function m(t){if(u(1,arguments),!l(t)&&"number"!=typeof t)return!1;var e=c(t);return!isNaN(Number(e))}function f(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function h(t,e){u(2,arguments);var n=c(t).getTime(),r=f(e);return new Date(n+r)}function g(t,e){u(2,arguments);var n=f(e);return h(t,-n)}var v=864e5;function y(t){u(1,arguments);var e=1,n=c(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function p(t){u(1,arguments);var e=c(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=y(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=y(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function w(t){u(1,arguments);var e=p(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=y(n);return r}var b=6048e5,T={};function k(){return T}function M(t,e){var n,r,a,o,i,s,l,d;u(1,arguments);var m=k(),h=f(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.weekStartsOn)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(s=i.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==a?a:m.weekStartsOn)&&void 0!==r?r:null===(l=m.locale)||void 0===l||null===(d=l.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==n?n:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=c(t),v=g.getUTCDay(),y=(v<h?7:0)+v-h;return g.setUTCDate(g.getUTCDate()-y),g.setUTCHours(0,0,0,0),g}function C(t,e){var n,r,a,o,i,s,l,d;u(1,arguments);var m=c(t),h=m.getUTCFullYear(),g=k(),v=f(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(s=i.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==a?a:g.firstWeekContainsDate)&&void 0!==r?r:null===(l=g.locale)||void 0===l||null===(d=l.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==n?n:1);if(!(v>=1&&v<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(h+1,0,v),y.setUTCHours(0,0,0,0);var p=M(y,e),w=new Date(0);w.setUTCFullYear(h,0,v),w.setUTCHours(0,0,0,0);var b=M(w,e);return m.getTime()>=p.getTime()?h+1:m.getTime()>=b.getTime()?h:h-1}function S(t,e){var n,r,a,o,i,s,l,d;u(1,arguments);var c=k(),m=f(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(s=i.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==a?a:c.firstWeekContainsDate)&&void 0!==r?r:null===(l=c.locale)||void 0===l||null===(d=l.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==n?n:1),h=C(t,e),g=new Date(0);g.setUTCFullYear(h,0,m),g.setUTCHours(0,0,0,0);var v=M(g,e);return v}var E=6048e5;function D(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const x=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return D("yy"===e?r%100:r,e.length)},P=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):D(n+1,2)},j=function(t,e){return D(t.getUTCDate(),e.length)},U=function(t,e){return D(t.getUTCHours()%12||12,e.length)},N=function(t,e){return D(t.getUTCHours(),e.length)},W=function(t,e){return D(t.getUTCMinutes(),e.length)},L=function(t,e){return D(t.getUTCSeconds(),e.length)},I=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return D(Math.floor(r*Math.pow(10,n-3)),e.length)};function B(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+D(o,2)}function O(t,e){return t%60==0?(t>0?"-":"+")+D(Math.abs(t)/60,2):Y(t,e)}function Y(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+D(Math.floor(a/60),2)+n+D(a%60,2)}const q={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return x(t,e)},Y:function(t,e,n,r){var a=C(t,r),o=a>0?a:1-a;return"YY"===e?D(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):D(o,e.length)},R:function(t,e){return D(p(t),e.length)},u:function(t,e){return D(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return D(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return D(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return P(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return D(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){u(1,arguments);var n=c(t),r=M(n,e).getTime()-S(n,e).getTime();return Math.round(r/E)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):D(a,e.length)},I:function(t,e,n){var r=function(t){u(1,arguments);var e=c(t),n=y(e).getTime()-w(e).getTime();return Math.round(n/b)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):D(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):j(t,e)},D:function(t,e,n){var r=function(t){u(1,arguments);var e=c(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/v)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):D(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return D(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return D(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return D(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return U(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):N(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):D(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):D(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):W(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):L(t,e)},S:function(t,e){return I(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return O(a);case"XXXX":case"XX":return Y(a);default:return Y(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return O(a);case"xxxx":case"xx":return Y(a);default:return Y(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+B(a,":");default:return"GMT"+Y(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+B(a,":");default:return"GMT"+Y(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return D(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return D((r._originalDate||t).getTime(),e.length)}};var H=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},F=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},$={p:F,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return H(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",H(a,e)).replace("{{time}}",F(o,e))}};const z=$;function A(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var J=["D","DD"],Q=["YY","YYYY"];function G(t){return-1!==J.indexOf(t)}function X(t){return-1!==Q.indexOf(t)}function R(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var _={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function V(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var K,Z={date:V({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:V({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:V({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},tt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function et(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function nt(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(s)?at(s,(function(t){return t.test(u)})):rt(s,(function(t){return t.test(u)}));i=t.valueCallback?t.valueCallback(l):l,i=n.valueCallback?n.valueCallback(i):i;var d=e.slice(u.length);return{value:i,rest:d}}}function rt(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function at(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const ot={code:"en-US",formatDistance:function(t,e,n){var r,a=_[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:Z,formatRelative:function(t,e,n,r){return tt[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:et({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:et({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:et({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:et({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:et({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(K={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(K.matchPattern);if(!n)return null;var r=n[0],a=t.match(K.parsePattern);if(!a)return null;var o=K.valueCallback?K.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(r.length);return{value:o,rest:i}}),era:nt({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:nt({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:nt({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:nt({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:nt({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var it=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ut=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,st=/^'([^]*?)'?$/,lt=/''/g,dt=/[a-zA-Z]/;function ct(t,e,n){var r,a,o,i,s,l,d,h,v,y,p,w,b,T,M,C,S,E;u(2,arguments);var D=String(e),x=k(),P=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:x.locale)&&void 0!==r?r:ot,j=f(null!==(o=null!==(i=null!==(s=null!==(l=null==n?void 0:n.firstWeekContainsDate)&&void 0!==l?l:null==n||null===(d=n.locale)||void 0===d||null===(h=d.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==s?s:x.firstWeekContainsDate)&&void 0!==i?i:null===(v=x.locale)||void 0===v||null===(y=v.options)||void 0===y?void 0:y.firstWeekContainsDate)&&void 0!==o?o:1);if(!(j>=1&&j<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var U=f(null!==(p=null!==(w=null!==(b=null!==(T=null==n?void 0:n.weekStartsOn)&&void 0!==T?T:null==n||null===(M=n.locale)||void 0===M||null===(C=M.options)||void 0===C?void 0:C.weekStartsOn)&&void 0!==b?b:x.weekStartsOn)&&void 0!==w?w:null===(S=x.locale)||void 0===S||null===(E=S.options)||void 0===E?void 0:E.weekStartsOn)&&void 0!==p?p:0);if(!(U>=0&&U<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!P.localize)throw new RangeError("locale must contain localize property");if(!P.formatLong)throw new RangeError("locale must contain formatLong property");var N=c(t);if(!m(N))throw new RangeError("Invalid time value");var W=A(N),L=g(N,W),I={firstWeekContainsDate:j,weekStartsOn:U,locale:P,_originalDate:N},B=D.match(ut).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,z[e])(t,P.formatLong):t})).join("").match(it).map((function(r){if("''"===r)return"'";var a=r[0];if("'"===a)return mt(r);var o=q[a];if(o)return null!=n&&n.useAdditionalWeekYearTokens||!X(r)||R(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!G(r)||R(r,e,String(t)),o(L,r,P.localize,I);if(a.match(dt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("");return B}function mt(t){var e=t.match(st);return e?e[1].replace(lt,"'"):t}let ft=[],ht=[];const gt=document.getElementById("taskInfo"),vt=document.getElementById("projectInfo"),yt=function(t){let e=document.getElementById("inbox"),n=e.classList[0];1==e.classList.length&&e.classList.remove(n),e.classList.add(t)},pt=function(){document.getElementById("taskForm").style.display="none";let t=[],e=document.getElementById("inbox").classList[0];const n=document.getElementById("inbox");for(let e=0;e<ft.length;e++)t.push(ft[e]);let r=JSON.stringify(t);localStorage.setItem("tasks",r),"home"==e?n.innerHTML="":"today"==e&&bt();let a=JSON.parse(localStorage.getItem("tasks"));for(let t=0;t<a.length;t++){let n=a[t].title,r=a[t].description,o=a[t].dueDate,u=a[t].projectName,s=a[t].priority,l=new Date(o);const d=`${ct(l,"MMM")}. ${ct(l,"do")}, ${ct(l,"yyyy")}`;"home"==e&&(i(a.length),document.getElementById("task-div").children.item(t).innerHTML+=`\n            <button class="close-task">Delete</button>\n            <p><strong>Task title:</strong> <span class="task-title">${n}</span></p>\n            <p><strong>Details:</strong> ${r}</p>\n            <p><strong>Due date:</strong> <em>${d}</em></p>\n            <p><strong>Project:</strong> ${u}</p>\n            <p><strong>Priority</strong> <div id=${s}>${s}</div></p>\n        `)}const o=document.getElementsByClassName("close-task");for(let t=0;t<o.length;t++)o[t].addEventListener("click",(e=>{Tt(o[t])}))},wt=function(){document.getElementById("projectForm").style.display="none";let t=[],e=document.getElementById("inbox").classList[0];const n=document.getElementById("projectCategory"),a=document.getElementById("inbox");"projects"==e&&(a.innerHTML="");for(let e=0;e<ht.length;e++)t.push(ht[e]);for(let t=n.length-1;t>0;t--)n.remove(t);let o=JSON.stringify(t);localStorage.setItem("projects",o);let i=JSON.parse(localStorage.getItem("projects"));for(let t=0;t<i.length;t++){let a=i[t].projectName,o=document.createElement("option");o.text=a,n.add(o),"projects"==e&&(r(i.length),document.getElementById("project-div").children.item(t).innerHTML+=`\n        <button class="close-project">Delete</button>\n        <p><strong>Project title:</strong> <span class="project-title">${a}</span></p>\n        `)}const u=document.getElementsByClassName("close-project");for(let t=0;t<u.length;t++)u[t].addEventListener("click",(e=>{kt(u[t])}))},bt=function(){let t=[];const e=document.getElementById("inbox");"today"==e.classList[0]&&(e.innerHTML="");let n=new Date;const r=ct(n,"MM"),a=ct(n,"dd"),o=`${ct(n,"yyyy")}-${r}-${a}`;let u=JSON.parse(localStorage.getItem("tasks"));console.log(u);for(let e=0;e<u.length;e++)u[e].dueDate==o&&t.push(u[e]);for(let e=0;e<t.length;e++){let n=t[e].title,r=t[e].description,a=t[e].dueDate,o=t[e].projectName,u=t[e].priority,s=new Date(a);const l=`${ct(s,"MMM")}. ${ct(s,"do")}, ${ct(s,"yyyy")}`;i(t.length),document.getElementById("task-div").children.item(e).innerHTML+=`\n            <button class="close-task">Delete</button>\n            <p><strong>Task title:</strong> <span class="task-title">${n}</span></p>\n            <p><strong>Details:</strong> ${r}</p>\n            <p><strong>Due date:</strong> <em>${l}</em></p>\n            <p><strong>Project:</strong> ${o}</p>\n            <p><strong>Priority</strong> <div id=${u}>${u}</div></p>\n        `}const s=document.getElementsByClassName("close-task");for(let t=0;t<s.length;t++)s[t].addEventListener("click",(e=>{Mt(s[t])}))},Tt=function(t){let e=[],n=t.parentElement.querySelector(".task-title").innerHTML;ft=JSON.parse(localStorage.getItem("tasks"));for(let t=0;t<ft.length;t++)ft[t].title==n&&e.push(ft.splice(t,1));let r=JSON.stringify(ft);localStorage.setItem("tasks",r),pt()},kt=function(t){let e=[],n=t.parentElement.querySelector(".project-title").innerHTML;ht=JSON.parse(localStorage.getItem("projects"));for(let t=0;t<ht.length;t++)ht[t].projectName==n&&e.push(ht.splice(t,1));let r=JSON.stringify(ht);localStorage.setItem("projects",r),wt()},Mt=function(t){let e=[],n=t.parentElement.querySelector(".task-title").innerHTML;ft=JSON.parse(localStorage.getItem("tasks"));for(let t=0;t<ft.length;t++)ft[t].title==n&&e.push(ft.splice(t,1));let r=JSON.stringify(ft);localStorage.setItem("tasks",r),bt()},Ct=function(){yt("home"),t(),pt()},St=function(){yt("projects"),function(){const t=document.getElementById("inbox");t.innerHTML=" ";const e=document.createElement("p");e.innerText="So many projects",t.appendChild(e)}(),wt()},Et=function(){yt("today"),function(){const t=document.getElementById("inbox");t.innerHTML=" ";const e=document.createElement("p");e.innerText="Today",t.appendChild(e)}(),bt()};yt("home"),document.getElementById("today").addEventListener("click",Et),document.getElementById("home").addEventListener("click",Ct),document.getElementById("projects").addEventListener("click",St),document.getElementById("newTask").addEventListener("click",o),document.getElementById("btn cancel").addEventListener("click",pt),document.getElementById("newProject").addEventListener("click",n),document.getElementById("btn cancel proj").addEventListener("click",wt),t(),gt.addEventListener("submit",(t=>{t.preventDefault();const e=gt.elements.title,n=gt.elements.description,r=gt.elements.dueDate,o=gt.elements.projectCategory,i=gt.elements.priority,u={title:e.value,description:n.value,dueDate:r.value,projectName:o.value,priority:i.value};!function(){const t=a.elements.title,e=a.elements.description,n=a.elements.dueDate,r=a.elements.projectCategory,o=a.elements.priority;t.value="",e.value="",n.value="",r.value="None",o.value="Low"}(),ft.push(u)})),vt.addEventListener("submit",(t=>{t.preventDefault();const n={projectName:vt.elements.titleProj.value};e.elements.titleProj.value="",ht.push(n)}))})();