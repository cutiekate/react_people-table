(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{18:function(e,t,a){e.exports=a(29)},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a.n(r),m=a(6),o=a(1),s=(a(23),a(17)),u=a(12),i=function(e){var t=e.person;return l.a.createElement(m.b,{to:"/people/".concat(t.slug)},t.name)},p=function(e){var t=e.person,a="m"===t.sex?"blue":"red",n=Object(o.g)().slug;return l.a.createElement("tr",{className:t.slug===n?"table__row is-selected":"table__row",key:t.slug},l.a.createElement("td",{className:"table__data"},l.a.createElement(i,{person:t})),l.a.createElement("td",{className:"table__data ".concat("m"===t.sex||"f"===t.sex?a:"")},t.sex),l.a.createElement("td",{className:"table__data"},t.born),l.a.createElement("td",{className:"table__data"},t.died),l.a.createElement("td",{className:"table__data"},void 0!==t.mother?l.a.createElement(i,{person:t.mother}):t.motherName),l.a.createElement("td",{className:"table__data"},void 0!==t.father?l.a.createElement(i,{person:t.father}):t.fatherName))},E=function(e){var t=e.people;return l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:""},l.a.createElement("tr",null,["Name","Sex","Born","Died","Mother","Father"].map((function(e){return l.a.createElement("th",null,e)})))),l.a.createElement("tbody",null,t&&t.map((function(e){return l.a.createElement(p,{person:e})}))))};var d=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then((function(e){var t=e.map((function(t){return function(e,t){return Object(u.a)(Object(u.a)({},e),{},{mother:t.find((function(t){return t.name===e.motherName})),father:t.find((function(t){return t.name===e.fatherName}))})}(t,e)}));r(t)}))})),l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",{className:"title is-2 is-spaced header"},"People page"),a&&l.a.createElement(E,{people:a}))},f=function(){return l.a.createElement("h3",{className:"title is-2 is-spaced header"},"Home")},h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"menu"},l.a.createElement("ul",{className:"menu-list"},l.a.createElement("li",null,l.a.createElement(m.c,{to:"/",exact:!0,className:"nav__link"},"Home")),l.a.createElement("li",null,l.a.createElement(m.c,{to:"/people",className:"nav__link"},"PeoplePage")))),l.a.createElement(o.d,null,l.a.createElement(o.b,{path:"/",exact:!0,component:f}),l.a.createElement(o.a,{from:"/home",to:"/"}),l.a.createElement(o.b,{path:"/people/:slug?",component:d}),l.a.createElement(o.b,{component:function(){return l.a.createElement("h3",{className:"title is-2 is-spaced header"},"Page not found")}})))};c.a.render(l.a.createElement(m.a,null,l.a.createElement(h,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4ec49db9.chunk.js.map