"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{387:function(t,n,e){e.r(n),e.d(n,{default:function(){return w}});var r,a,c,u=e(439),i=e(791),o=e(689),s=e(550),p=e(820),f=e(168),d=e(934),h=d.Z.div(r||(r=(0,f.Z)(["\n  padding-top: 30px;\n  padding-bottom: 50px;\n  text-align: center;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n\n  @media (max-width: 600px) {\n    just\u03c0ify-content: center;\n  }\n"]))),l=d.Z.div(a||(a=(0,f.Z)(["\n  width: 180px;\n  margin-bottom: 5px;\n  border: 1px solid;\n  padding: 10px;\n  justify-content: space-between;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid;\n  @media (max-width: 600px) {\n    zoom: 1.5;\n    // scale 1.5;\n    // width: 350px;\n    // height: 600px;\n  }\n"]))),x=d.Z.p(c||(c=(0,f.Z)(["\n  margin: 5px;\n"]))),v=e(184),w=function(){var t=(0,i.useState)([]),n=(0,u.Z)(t,2),e=n[0],r=n[1],a=(0,o.UO)().movieId;return(0,i.useEffect)((function(){(0,s.y)(a).then((function(t){r(t.cast)}))}),[a]),(0,v.jsx)(h,{children:e.length>0?e.map((function(t){var n=t.id,e=t.profile_path,r=t.character,a=t.name;return(0,v.jsxs)(l,{children:[e?(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e),alt:a}):(0,v.jsx)(p.ofX,{size:200}),(0,v.jsx)(x,{children:(0,v.jsx)("b",{children:a})}),(0,v.jsxs)(x,{children:["Character",(0,v.jsx)("br",{})," ",r.substr(0,9)]})]},n)})):(0,v.jsx)(x,{children:" Sorry, there isn't any info"})})}},550:function(t,n,e){e.d(n,{Bt:function(){return h},Tg:function(){return p},bI:function(){return s},jC:function(){return f},y:function(){return d}});var r=e(861),a=e(687),c=e.n(a),u=e(243),i="https://api.themoviedb.org/3",o="178b07d62e47484c1918df64bd242568",s=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(n,"&page=1&language=en-US&include_adult=false"));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.statusText);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(i,"/trending/movie/week?api_key=").concat(o,"&page=1"));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.statusText);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(i,"/movie/").concat(n,"?api_key=").concat(o,"&page=1&language=en-US"));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.statusText);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.statusText);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US"));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.statusText);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.07969d78.chunk.js.map