"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[779],{779:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r,a=n(439),c=n(791),u=n(689),o=n(550),s=n(168),i=n(934).Z.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: space-between;\n  list-style: none;\n  padding: 10px;\n"]))),p=n(184),f=function(){var t=(0,c.useState)([]),e=(0,a.Z)(t,2),n=e[0],r=e[1],s=(0,u.UO)().movieId;return(0,c.useEffect)((function(){(0,o.Bt)(s).then((function(t){r(t.results)}))}),[s]),(0,p.jsx)(p.Fragment,{children:n.length>0?n.map((function(t){var e=t.id,n=t.author,r=t.content;return(0,p.jsxs)(i,{children:[(0,p.jsx)("li",{style:{width:500},children:(0,p.jsxs)("b",{children:[" Author: ",n]})}),(0,p.jsx)("li",{children:r})]},e)})):(0,p.jsx)("p",{children:"Sorry, we don`t have any review for this movie!"})})}},550:function(t,e,n){n.d(e,{Bt:function(){return v},Tg:function(){return p},bI:function(){return i},jC:function(){return f},y:function(){return l}});var r=n(861),a=n(687),c=n.n(a),u=n(243),o="https://api.themoviedb.org/3",s="178b07d62e47484c1918df64bd242568",i=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(o,"/search/movie?api_key=").concat(s,"&query=").concat(e,"&page=1&language=en-US&include_adult=false"));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.statusText);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(o,"/trending/movie/week?api_key=").concat(s,"&page=1"));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.statusText);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(o,"/movie/").concat(e,"?api_key=").concat(s,"&page=1&language=en-US"));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.statusText);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.statusText);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.statusText);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=779.ad046ecc.chunk.js.map