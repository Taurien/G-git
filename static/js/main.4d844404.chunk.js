(this["webpackJsonpgithub-api"]=this["webpackJsonpgithub-api"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(10),a=n.n(r),s=n(6),i=(n(15),n(2)),o=n(5),l=n.n(o),j=n(7),u=n(4),b=n(1),h=function(){return Object(b.jsx)("div",{children:"Loading..."})},p=function(e){var t=e.handleUser,n=e.handleSearchUser;return Object(b.jsxs)("form",{action:"",onSubmit:function(e){return n(e)},children:[Object(b.jsx)("input",{type:"text",placeholder:"Name",onChange:function(e){var n=e.target;return t(n)}}),Object(b.jsx)("input",{type:"submit",value:"\xa1Search!"})]})},O=function(e){var t=Object(i.f)(),n=e.login,c=(e.repos_url,e.name),r=e.avatar,a=e.location,s=e.followers,o=e.following,l=e.public_repos,j=e.created_at;return Object(b.jsx)("div",{children:l?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{children:["Say hi to: ",n]}),Object(b.jsx)("img",{src:r,alt:c}),Object(b.jsx)("p",{children:a}),Object(b.jsx)("p",{children:s}),Object(b.jsx)("p",{children:o}),Object(b.jsx)("p",{children:l}),Object(b.jsx)("p",{children:j})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{children:n}),Object(b.jsx)("img",{src:r,alt:c}),Object(b.jsx)("p",{children:a}),Object(b.jsx)("p",{children:s}),Object(b.jsx)("p",{children:o}),Object(b.jsx)("button",{onClick:function(){t({pathname:"/user/".concat(n)})},children:"See more"})]})})},f=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),s=Object(u.a)(a,2),i=s[0],o=s[1],f=Object(c.useState)(!1),x=Object(u.a)(f,2),d=x[0],g=x[1],v=function(){var e=Object(j.a)(l.a.mark((function e(t){var c,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),o(null),g(!0),c="https://api.github.com/users/".concat(n),e.next=6,fetch(c);case 6:return r=e.sent,e.next=9,r.json();case 9:a=e.sent,o(a),g(!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"xxx",children:[Object(b.jsx)(p,{handleUser:function(e){var t=e.value;r(t)},handleSearchUser:v}),d&&Object(b.jsx)(h,{}),i&&Object(b.jsx)(O,{login:i.login,name:i.name,avatar:i.avatar_url,location:i.location,followers:i.followers,following:i.following})]})},x=function(){var e=Object(i.f)(),t=Object(i.g)().login,n=Object(c.useState)(null),r=Object(u.a)(n,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(j.a)(l.a.mark((function e(){var n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(null),n="https://api.github.com/users/".concat(t),e.next=4,fetch(n);case 4:return c=e.sent,e.next=7,c.json();case 7:r=e.sent,s(r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),Object(b.jsxs)("div",{children:[a&&Object(b.jsx)(O,{login:a.login,name:a.name,repos_url:a.repos_url,avatar:a.avatar_url,location:a.location,followers:a.followers,following:a.following,public_repos:a.public_repos,created_at:a.created_at}),Object(b.jsx)("button",{onClick:function(){return e(-1)},children:"Go back"})]})};var d=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{path:"/G-git",element:Object(b.jsx)(f,{})}),Object(b.jsx)(i.a,{path:"/user/:login",element:Object(b.jsx)(x,{})})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};a.a.render(Object(b.jsx)(s.a,{children:Object(b.jsx)(d,{})}),document.getElementById("root")),g()}},[[18,1,2]]]);
//# sourceMappingURL=main.4d844404.chunk.js.map