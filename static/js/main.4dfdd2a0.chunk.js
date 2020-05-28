(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{18:function(e,a,t){e.exports=t(29)},23:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),o=t.n(r),c=t(6),s=t(1),i=(t(23),t(9)),u=t(13),m=function(e){var a=e.person;return l.a.createElement(c.b,{to:"/people/".concat(a.slug)},a.name)},d=function(e){var a=e.person,t="m"===a.sex?"blue":"red",n=Object(s.i)().slug;return l.a.createElement("tr",{className:a.slug===n?"table__row is-selected":"table__row",key:a.slug},l.a.createElement("td",{className:"table__data"},l.a.createElement(m,{person:a})),l.a.createElement("td",{className:"table__data ".concat("m"===a.sex||"f"===a.sex?t:"")},a.sex),l.a.createElement("td",{className:"table__data"},a.born),l.a.createElement("td",{className:"table__data"},a.died),l.a.createElement("td",{className:"table__data"},void 0!==a.mother?l.a.createElement(m,{person:a.mother}):a.motherName),l.a.createElement("td",{className:"table__data"},void 0!==a.father?l.a.createElement(m,{person:a.father}):a.fatherName))},v=function(e){var a=e.people,t=["Born","Died","Name","Sex"],r=Object(n.useState)([]),o=Object(i.a)(r,2),c=o[0],u=o[1],m=Object(s.g)(),v=Object(s.h)(),p=new URLSearchParams(v.search),h=p.get("sortBy")||"",E=p.get("sortOrder")||"";return Object(n.useMemo)((function(){""!==h&&a.sort((function(e,a){var t,n,l,r;switch(h){case"Sex":return"asc"===E?null===e||void 0===e||null===(t=e.sex)||void 0===t?void 0:t.localeCompare(null===a||void 0===a?void 0:a.sex):null===a||void 0===a||null===(n=a.sex)||void 0===n?void 0:n.localeCompare(null===e||void 0===e?void 0:e.sex);case"Born":return"asc"===E?+(null===e||void 0===e?void 0:e.born)-+(null===a||void 0===a?void 0:a.born):+(null===a||void 0===a?void 0:a.born)-+(null===e||void 0===e?void 0:e.born);case"Died":return"asc"===E?+(null===a||void 0===a?void 0:a.died)-+(null===e||void 0===e?void 0:e.died):(null===e||void 0===e?void 0:e.died)-+(null===a||void 0===a?void 0:a.died);case"Name":return"asc"===E?null===e||void 0===e||null===(l=e.name)||void 0===l?void 0:l.localeCompare(null===a||void 0===a?void 0:a.name):null===a||void 0===a||null===(r=a.name)||void 0===r?void 0:r.localeCompare(null===e||void 0===e?void 0:e.name);default:return 0}})),u(a)}),[a,E,h]),l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:""},l.a.createElement("tr",null,["Name","Sex","Born","Died","Mother","Father"].map((function(e){return l.a.createElement("th",{key:e,onClick:function(){t.includes(e)&&(p.set("sortBy",e),p.set("sortOrder","asc"===E?"desc":"asc"),m.push({search:p.toString()}))}},e,h===e&&l.a.createElement("span",null,"*"))})))),l.a.createElement("tbody",null,c&&c.map((function(e){return l.a.createElement(d,{key:e.slug,person:e})}))))};var p=function(){var e,a=Object(n.useState)([]),t=Object(i.a)(a,2),r=t[0],o=t[1];Object(n.useEffect)((function(){fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then((function(e){var a=e.map((function(a){return function(e,a){return Object(u.a)(Object(u.a)({},e),{},{mother:a.find((function(a){return a.name===e.motherName})),father:a.find((function(a){return a.name===e.fatherName}))})}(a,e)}));o(a)}))}));var c=Object(s.g)(),m=Object(s.h)(),d=(null===(e=new URLSearchParams(m.search).get("query"))||void 0===e?void 0:e.toLocaleLowerCase())||"",p=r.filter((function(e){var a,t;return e.name.toLowerCase().includes(d)||(null===(a=e.fatherName)||void 0===a?void 0:a.toLowerCase().includes(d))||(null===(t=e.motherName)||void 0===t?void 0:t.toLowerCase().includes(d))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",{className:"title is-2 is-spaced header"},"People page"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"text",placeholder:"enter person name",value:d,onChange:function(e){c.push({search:"?query=".concat(e.target.value)})}})),r&&l.a.createElement(v,{people:p}))},h=function(){return l.a.createElement("h3",{className:"title is-2 is-spaced header"},"Home")},E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"menu"},l.a.createElement("ul",{className:"menu-list"},l.a.createElement("li",null,l.a.createElement(c.c,{to:"/",exact:!0,className:"nav__link"},"Home")),l.a.createElement("li",null,l.a.createElement(c.c,{to:"/people",className:"nav__link"},"PeoplePage")))),l.a.createElement(s.d,null,l.a.createElement(s.b,{path:"/",exact:!0,component:h}),l.a.createElement(s.a,{from:"/home",to:"/"}),l.a.createElement(s.b,{path:"/people/:slug?",component:p}),l.a.createElement(s.b,{component:function(){return l.a.createElement("h3",{className:"title is-2 is-spaced header"},"Page not found")}})))};o.a.render(l.a.createElement(c.a,null,l.a.createElement(E,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4dfdd2a0.chunk.js.map