(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{24:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var i=n(1),r=n.n(i),c=n(16),s=n.n(c),a=(n(24),n(9)),o=n(2),l=n(0),d=function(){return Object(l.jsxs)("div",{className:"header-wrapper",children:[Object(l.jsx)("h1",{children:"Math Magicians"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)(a.b,{to:"/",children:Object(l.jsx)("li",{children:"Home"})}),Object(l.jsx)(a.b,{to:"/Calculator",children:Object(l.jsx)("li",{children:"Calculator"})}),Object(l.jsx)(a.b,{to:"/Quote",children:Object(l.jsx)("li",{children:"Quote"})})]})]})},j=function(){return Object(l.jsxs)("div",{className:"home-wrapper",children:[Object(l.jsx)("h1",{children:"Welcome to our page !"}),Object(l.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. the industry's standard dummy text ever since the 1500s, when an unknown. It has survived not only five centuries, but also the leap into It was popularised in the 1960s with the release of Letraset and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}),Object(l.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. the industry's standard dummy text ever since the 1500s, when an unknown. It has survived not only five centuries, but also the leap into It was popularised in the 1960s with the release of Letraset and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"})]})},h=n(19),u=function(t){return Object(l.jsx)("thead",{children:Object(l.jsx)("tr",{children:Object(l.jsx)("th",{colspan:"4",children:function(){var e=t.calculateResult;return e.next?e.next:e.total?e.total:0}()})})})},x=function(t){return Object(l.jsxs)("tbody",{onClick:function(e){t.eventHandler(e.target.id)},children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{id:"AC",children:"AC"}),Object(l.jsx)("td",{id:"+/-",children:"+/-"}),Object(l.jsx)("td",{id:"%",children:"%"}),Object(l.jsx)("th",{id:"\xf7",children:"\xf7"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{id:"7",children:"7"}),Object(l.jsx)("td",{id:"8",children:"8"}),Object(l.jsx)("td",{id:"9",children:"9"}),Object(l.jsx)("th",{id:"x",children:"x"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{id:"4",children:"4"}),Object(l.jsx)("td",{id:"5",children:"5"}),Object(l.jsx)("td",{id:"6",children:"6"}),Object(l.jsx)("th",{id:"-",children:"-"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{id:"1",children:"1"}),Object(l.jsx)("td",{id:"2",children:"2"}),Object(l.jsx)("td",{id:"3",children:"3"}),Object(l.jsx)("th",{id:"+",children:"+"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{colspan:"2",children:"0"}),Object(l.jsx)("td",{id:".",children:"."}),Object(l.jsx)("th",{id:"=",children:"="})]})]})},b=n(4),O=n(14),p=n.n(O);function m(t,e,n){var i=p()(t),r=p()(e);if("+"===n)return i.plus(r).toString();if("-"===n)return i.minus(r).toString();if("x"===n)return i.times(r).toString();if("\xf7"===n)try{return i.div(r).toString()}catch(c){return"Can't divide by 0."}if("%"===n)return i.mod(r).toString();throw Error("Unknown operation '".concat(n,"'"))}var f=function(){var t=Object(i.useState)({total:0,next:0,operation:""}),e=Object(h.a)(t,2),n=e[0],r=e[1];return Object(l.jsxs)("div",{className:"table-wrapper",children:[Object(l.jsx)("h1",{children:"Let's do some Math !"}),Object(l.jsxs)("table",{children:[Object(l.jsx)(u,{calculateResult:n}),Object(l.jsx)(x,{eventHandler:function(t){var e,i,c=(e=n,"AC"===(i=t)?{total:null,next:null,operation:null}:i.match(/[0-9]+/)?"0"===i&&"0"===e.next?{}:e.operation?e.next?Object(b.a)(Object(b.a)({},e),{},{next:e.next+i}):Object(b.a)(Object(b.a)({},e),{},{next:i}):e.next?{next:e.next+i,total:null}:{next:i,total:null}:"."===i?e.next?e.next.includes(".")?Object(b.a)({},e):Object(b.a)(Object(b.a)({},e),{},{next:"".concat(e.next,".")}):e.operation?{next:"0."}:e.total?e.total.includes(".")?{}:{total:"".concat(e.total,".")}:{total:"0."}:"="===i?e.next&&e.operation?{total:m(e.total,e.next,e.operation),next:null,operation:null}:{}:"+/-"===i?e.next?Object(b.a)(Object(b.a)({},e),{},{next:(-1*parseFloat(e.next)).toString()}):e.total?Object(b.a)(Object(b.a)({},e),{},{total:(-1*parseFloat(e.total)).toString()}):{}:e.next||!e.total||e.operation?e.operation?e.total&&!e.next?Object(b.a)(Object(b.a)({},e),{},{operation:i}):{total:m(e.total,e.next,e.operation),next:null,operation:i}:e.next?{total:e.next,next:null,operation:i}:{operation:i}:Object(b.a)(Object(b.a)({},e),{},{operation:i}));r(c)}})]})]})},v=function(){return Object(l.jsx)("div",{className:"home-wrapper",children:Object(l.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. the industry's standard dummy text ever since the 1500s, when an unknown. It has survived not only five centuries, but also the leap into It was popularised in the 1960s with the release of Letraset and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"})})},y=function(){return Object(l.jsx)(a.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(d,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:j}),Object(l.jsx)(o.a,{exact:!0,path:"/Calculator",component:f}),Object(l.jsx)(o.a,{exact:!0,path:"/Quote",component:v})]})]})})},g=function(){return Object(l.jsx)(y,{})};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.728935cf.chunk.js.map