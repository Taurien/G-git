(this["webpackJsonpgithub-api"]=this["webpackJsonpgithub-api"]||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(10),s=n.n(r),l=n(7),a=(n(16),n(2)),o=n(0),i=function(e){var t=e.children;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"bg-Oxford_Blue w-full inline-flex justify-between",children:[Object(o.jsx)("h1",{children:"Lo que muestre"}),Object(o.jsx)("h1",{children:"logo o algo"})]}),Object(o.jsx)(o.Fragment,{children:t})]})},j=n(4),u=n.n(j),b=n(6),f=n(3),h=function(){return Object(o.jsx)("div",{children:"Loading..."})},x=(n(19),function(e){var t=e.handleUser,n=e.handleSearchUser;return Object(o.jsxs)("form",{action:"",onSubmit:function(e){return n(e)},className:"self-center grid",children:[Object(o.jsx)("input",{type:"text",placeholder:"Name",onChange:function(e){var n=e.target;return t(n)}}),Object(o.jsx)("input",{type:"submit",value:"\xa1Search!"})]})}),p=(n(20),function(e){var t=Object(a.f)(),n=e.login,c=(e.repos_url,e.name),r=e.avatar,s=e.location,l=(e.url,e.followers),i=e.following,j=e.public_repos,u=e.created_at,b=function(){t({pathname:"/user/".concat(n,"/repos")})},f=function(){t({pathname:"/user/".concat(n,"/following")})},h=function(){t({pathname:"/user/".concat(n,"/followers")})};return Object(o.jsx)("div",{className:"usercard self-center flex flex-col items-center",children:u?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("p",{children:['Meet "',n,'" ',c&&Object(o.jsxs)(o.Fragment,{children:["AKA ",Object(o.jsx)("i",{children:c})]})]}),Object(o.jsx)("img",{src:r,alt:c}),Object(o.jsx)("p",{children:s}),Object(o.jsxs)("div",{className:"numbers inline-flex justify-between",children:[Object(o.jsxs)("span",{onClick:b,className:"flex flex-col items-center",children:[Object(o.jsx)("p",{children:"Repos"}),Object(o.jsx)("p",{children:j})]}),Object(o.jsxs)("span",{onClick:f,className:"flex flex-col items-center",children:[Object(o.jsx)("p",{children:"Following"}),Object(o.jsx)("p",{children:i})]}),Object(o.jsxs)("span",{onClick:h,className:"flex flex-col items-center",children:[Object(o.jsx)("p",{children:"Followers"}),Object(o.jsx)("p",{children:l})]})]}),Object(o.jsx)("p",{children:u})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{children:n}),Object(o.jsx)("img",{src:r,alt:c}),Object(o.jsx)("p",{children:s}),Object(o.jsxs)("div",{className:"numbers inline-flex justify-between",children:[Object(o.jsxs)("span",{onClick:b,className:"flex flex-col items-center",children:[Object(o.jsx)("p",{children:"Repos"}),j&&Object(o.jsx)("p",{children:j})]}),Object(o.jsxs)("span",{onClick:f,className:"flex flex-col items-center",children:[Object(o.jsx)("p",{children:"Following"}),i&&Object(o.jsx)("p",{children:i})]}),Object(o.jsxs)("span",{onClick:h,className:"flex flex-col items-center",children:[Object(o.jsx)("p",{children:"Followers"}),l&&Object(o.jsx)("p",{children:l})]})]}),Object(o.jsx)("button",{onClick:function(){t({pathname:"/user/".concat(n)})},children:"See more"})]})})}),O=function(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(null),l=Object(f.a)(s,2),a=l[0],i=l[1],j=Object(c.useState)(!1),O=Object(f.a)(j,2),d=O[0],m=O[1],g=function(){var e=Object(b.a)(u.a.mark((function e(t){var c,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),i(null),m(!0),c="https://api.github.com/users/".concat(n),e.next=6,fetch(c);case 6:return r=e.sent,e.next=9,r.json();case 9:s=e.sent,i(s),m(!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"home flex flex-col w-full",children:[Object(o.jsx)(x,{handleUser:function(e){var t=e.value;r(t)},handleSearchUser:g}),d&&Object(o.jsx)(h,{}),a&&Object(o.jsx)(p,{login:a.login,name:a.name,avatar:a.avatar_url,location:a.location,public_repos:a.public_repos,followers:a.followers,following:a.following})]})},d=function(){var e=Object(a.f)(),t=Object(a.g)().login,n=Object(c.useState)(null),r=Object(f.a)(n,2),s=r[0],l=r[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(b.a)(u.a.mark((function e(){var n,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(null),n="https://api.github.com/users/".concat(t),e.next=4,fetch(n);case 4:return c=e.sent,e.next=7,c.json();case 7:r=e.sent,l(r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),Object(o.jsxs)("div",{className:"userDisplay",children:[s&&Object(o.jsx)(p,{login:s.login,name:s.name,repos_url:s.repos_url,avatar:s.avatar_url,location:s.location,followers:s.followers,following:s.following,public_repos:s.public_repos,created_at:s.created_at}),Object(o.jsx)("button",{onClick:function(){return e(-1)},children:"Go back"})]})},m=function(e){var t=e.name,n=e.full_name,c=e.html_url,r=e.created_at,s=e.updated_at;return Object(o.jsxs)("div",{className:"reposcard",children:[Object(o.jsx)("p",{children:t}),Object(o.jsx)("p",{children:n}),Object(o.jsx)("p",{children:c}),Object(o.jsx)("p",{children:r}),Object(o.jsx)("p",{children:s})]})},g=function(){var e=Object(a.f)(),t=Object(a.g)().login,n=Object(c.useState)(null),r=Object(f.a)(n,2),s=r[0],l=r[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(b.a)(u.a.mark((function e(){var n,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(null),n="https://api.github.com/users/".concat(t,"/repos"),e.next=4,fetch(n);case 4:return c=e.sent,e.next=7,c.json();case 7:r=e.sent,l(r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),Object(o.jsxs)("div",{className:"repos",children:[s&&s.length>0?s.map((function(e,t){return Object(o.jsx)(m,{name:e.name,full_name:e.full_name,html_url:e.html_url,created_at:e.created_at,updated_at:e.updated_at},t)})):Object(o.jsx)("p",{children:"no hubo"}),Object(o.jsx)("button",{onClick:function(){return e(-1)},children:"Go back"})]})},v=function(){var e=Object(a.f)(),t=Object(a.g)().login,n=Object(c.useState)([]),r=Object(f.a)(n,2),s=r[0],l=r[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(b.a)(u.a.mark((function e(){var n,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(null),n="https://api.github.com/users/".concat(t,"/following"),e.next=4,fetch(n);case 4:return c=e.sent,e.next=7,c.json();case 7:r=e.sent,l(r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),Object(o.jsxs)("div",{children:[s&&s.length>0?s.map((function(e,t){return Object(o.jsx)(p,{login:e.login,avatar:e.avatar_url,url:e.html_url,followers:e.followers,following:e.following,repos_url:e.repos_url},t)})):Object(o.jsx)("p",{children:"no hubo"}),Object(o.jsx)("button",{onClick:function(){return e(-1)},children:"Go back"})]})},w=function(){var e=Object(a.f)(),t=Object(a.g)().login,n=Object(c.useState)(null),r=Object(f.a)(n,2),s=r[0],l=r[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(b.a)(u.a.mark((function e(){var n,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(null),n="https://api.github.com/users/".concat(t,"/followers"),e.next=4,fetch(n);case 4:return c=e.sent,e.next=7,c.json();case 7:r=e.sent,l(r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),Object(o.jsxs)("div",{children:[s&&s.length>0?s.map((function(e,t){return Object(o.jsx)(p,{login:e.login,avatar:e.avatar_url,url:e.html_url,followers:e.followers,following:e.following,repos_url:e.repos_url},t)})):Object(o.jsx)("p",{children:"no hubo"}),Object(o.jsx)("button",{onClick:function(){return e(-1)},children:"Go back"})]})},_=(n(21),n(11));var k=function(){return Object(o.jsx)(_.a,{children:Object(o.jsx)(i,{children:Object(o.jsxs)(a.c,{children:[Object(o.jsx)(a.a,{exact:!0,path:"/G-git",element:Object(o.jsx)(O,{})}),Object(o.jsx)(a.a,{exact:!0,path:"/user/:login",element:Object(o.jsx)(d,{})}),Object(o.jsx)(a.a,{exact:!0,path:"/user/:login/repos",element:Object(o.jsx)(g,{})}),Object(o.jsx)(a.a,{exact:!0,path:"/user/:login/following",element:Object(o.jsx)(v,{})}),Object(o.jsx)(a.a,{exact:!0,path:"/user/:login/followers",element:Object(o.jsx)(w,{})}),Object(o.jsx)(a.a,{path:"*",element:Object(o.jsx)("p",{children:"Holi 404"})})]})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),c(e),r(e),s(e),l(e)}))};s.a.render(Object(o.jsx)(l.a,{children:Object(o.jsx)(k,{})}),document.getElementById("root")),N()}},[[22,1,2]]]);
//# sourceMappingURL=main.3d26fb39.chunk.js.map