(this["webpackJsonpgithub-api"]=this["webpackJsonpgithub-api"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(11),s=n.n(r),l=n(6),a=(n(17),n(2)),i=n(3),o=n(0),j=Object(c.createContext)(),u=function(e){var t=e.children,n=Object(c.useState)(!1),r=Object(i.a)(n,2),s=r[0],l=r[1],a={darkMode:s,handleDarkMode:function(){return l(!s)}};return Object(o.jsx)(j.Provider,{value:a,children:t})},b=Object(c.createContext)(),f=function(e){var t=e.children,n=Object(c.useState)("G-git"),r=Object(i.a)(n,2),s=r[0],l=r[1],a={infoHeader:s,handleInfoHeader:function(e){return l(e)}};return Object(o.jsx)(b.Provider,{value:a,children:t})},x=b,d=n(12),h=n.p+"static/media/g-git.c6305904.svg",O=(n(19),function(){var e=Object(a.e)().pathname,t=Object(c.useContext)(x).infoHeader;return Object(o.jsxs)("div",{className:"head  w-full inline-flex justify-between items-center bg-True_Blue",children:[Object(o.jsx)("h1",{children:"/G-git"===e?"G-git":e==="/user/".concat(t,"/repos")?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("span",{children:t})," Repos"]}):e==="/user/".concat(t,"/following")?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("span",{children:t})," follows"]}):e==="/user/".concat(t,"/followers")?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("span",{children:t}),"'s followers"]}):"G-git"}),Object(o.jsx)(l.b,{to:"/G-git",children:Object(o.jsx)("img",{src:h,alt:"Logo"})})]})}),p=function(e){var t=e.children;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(O,{}),t]})},m=(n(20),function(){return Object(o.jsx)("div",{className:"self-center loader"})}),g=(n(21),function(e){var t=e.handleUser,n=e.handleFetchData;return Object(o.jsxs)("form",{action:"",onSubmit:function(e){return n(e)},className:"self-center grid",children:[Object(o.jsx)("input",{type:"text",placeholder:"Name",onChange:function(e){var n=e.target;return t(n)}}),Object(o.jsx)("input",{type:"submit",value:"\xa1Search!"})]})}),v=(n(22),function(e){var t=Object(a.f)(),n=e.home,c=e.login,r=(e.repos_url,e.name),s=e.avatar,l=e.location,i=e.hireable,j=e.html_url,u=(e.url,e.followers),b=e.following,f=e.public_repos,x=e.created_at,d=e.errormsg,h=e.follow,O=function(){t({pathname:"/user/".concat(c)})},p=function(){t({pathname:"/user/".concat(c,"/repos")})},m=function(){t({pathname:"/user/".concat(c,"/following")})},g=function(){t({pathname:"/user/".concat(c,"/followers")})};return Object(o.jsx)("div",{className:"usercard bg-True_Blue bg-opacity-30 self-center flex flex-col items-center ".concat(n?"test789 cardEffect":""," ").concat(x?"test456 cardEffect":""," ").concat(h&&"test123"),children:x?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("span",{children:['Meet "',Object(o.jsx)("b",{children:c}),'" ',r&&Object(o.jsxs)(o.Fragment,{children:["AKA ",Object(o.jsx)("b",{children:Object(o.jsx)("i",{children:r})})]})]}),Object(o.jsx)("img",{src:s,alt:r}),Object(o.jsx)("p",{children:l}),Object(o.jsx)("span",{className:i?"greenDot":"redDot",children:"Hireable"}),Object(o.jsxs)("div",{className:"numbers inline-flex justify-between",children:[Object(o.jsxs)("span",{onClick:p,className:"flex flex-col items-center",children:[Object(o.jsx)("p",{children:"Repos"}),Object(o.jsx)("p",{children:f})]}),Object(o.jsxs)("span",{onClick:m,className:"flex flex-col items-center",children:[Object(o.jsx)("p",{children:"Following"}),Object(o.jsx)("p",{children:b})]}),Object(o.jsxs)("span",{onClick:g,className:"flex flex-col items-center",children:[Object(o.jsx)("p",{children:"Followers"}),Object(o.jsx)("p",{children:u})]})]}),Object(o.jsxs)("span",{className:"flex flex-col items-center",children:[Object(o.jsx)("p",{children:"Created at:"}),Object(o.jsx)("p",{children:x})]}),Object(o.jsx)("a",{href:j,target:"_blank",rel:"noreferrer",children:Object(o.jsx)("p",{children:"See on Github"})})]}):d?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("p",{children:"Invalid. User not found"})}):h?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{children:c}),Object(o.jsx)("img",{src:s,alt:r}),Object(o.jsx)("div",{className:"numbers inline-flex justify-center",children:Object(o.jsx)("span",{onClick:p,className:"",children:Object(o.jsx)("p",{children:"Repos"})})}),Object(o.jsx)("button",{onClick:O,children:"See more"})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("span",{children:Object(o.jsx)("b",{children:c})}),Object(o.jsx)("img",{src:s,alt:r}),Object(o.jsx)("span",{children:Object(o.jsx)("i",{children:l})}),Object(o.jsxs)("div",{className:"numbers inline-flex justify-between",children:[Object(o.jsxs)("span",{onClick:p,className:"flex flex-col items-center",children:[Object(o.jsx)("p",{children:"Repos"}),f&&Object(o.jsx)("p",{children:f})]}),Object(o.jsxs)("span",{onClick:m,className:"flex flex-col items-center",children:[Object(o.jsx)("p",{children:"Following"}),b&&Object(o.jsx)("p",{children:b})]}),Object(o.jsxs)("span",{onClick:g,className:"flex flex-col items-center",children:[Object(o.jsx)("p",{children:"Followers"}),u&&Object(o.jsx)("p",{children:u})]})]}),Object(o.jsx)("button",{onClick:O,children:"See more"})]})})}),w=(n(23),n(4)),_=n.n(w),N=n(7),k=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],s=function(e){var t=Object(c.useState)(null),n=Object(i.a)(t,2),r=n[0],s=n[1],l=Object(c.useState)(!1),a=Object(i.a)(l,2),o=a[0],j=a[1],u=function(){var t=Object(N.a)(_.a.mark((function t(n){var c,r;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),s(null),j(!0),t.next=5,fetch(e);case 5:return c=t.sent,t.next=8,c.json();case 8:r=t.sent,s(r),j(!1);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{data:r,loader:o,handleFetchData:u}}("https://api.github.com/users/".concat(n)),l=s.data,a=s.loader,j=s.handleFetchData;return Object(o.jsxs)("div",{className:"home flex flex-col w-full",children:[Object(o.jsx)(g,{handleUser:function(e){var t=e.value;r(t)},userName:n,handleFetchData:j}),a&&Object(o.jsx)(m,{}),l&&Object(o.jsx)(v,{home:!0,login:l.login,name:l.name,avatar:l.avatar_url,location:l.location,public_repos:l.public_repos,followers:l.followers,following:l.following,errormsg:null===l||void 0===l?void 0:l.message})]})},C=(n(25),function(){var e=Object(a.f)(),t=Object(a.g)().login,n=Object(c.useState)(null),r=Object(i.a)(n,2),s=r[0],l=r[1],j=Object(c.useState)(!1),u=Object(i.a)(j,2),b=u[0],f=u[1],d=Object(c.useContext)(x).handleInfoHeader;return Object(c.useEffect)((function(){var e=function(){var e=Object(N.a)(_.a.mark((function e(){var n,c,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(t),l(null),f(!0),n="https://api.github.com/users/".concat(t),e.next=6,fetch(n);case 6:return c=e.sent,e.next=9,c.json();case 9:r=e.sent,l(r),f(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t,d]),Object(o.jsxs)("div",{className:"userDisplay flex flex-col",children:[b&&Object(o.jsx)(m,{}),s&&Object(o.jsx)(v,{login:s.login,name:s.name,repos_url:s.repos_url,avatar:s.avatar_url,location:s.location,hireable:s.hireable,html_url:s.html_url,followers:s.followers,following:s.following,public_repos:s.public_repos,created_at:s.created_at}),Object(o.jsx)("button",{className:"self-center",onClick:function(){return e(-1)},children:"Go back"})]})}),y=(n(26),function(e){e.name;var t=e.full_name,n=e.html_url,c=e.created_at,r=e.updated_at;return Object(o.jsx)("a",{className:"repolink",href:n,target:"_blank",rel:"noreferrer",children:Object(o.jsxs)("div",{className:"reposcard flex flex-col items-center",children:[Object(o.jsx)("p",{children:t}),Object(o.jsx)("p",{children:"Created:"}),Object(o.jsx)("p",{children:c}),Object(o.jsx)("p",{children:"Updated:"}),Object(o.jsx)("p",{children:r})]})})}),F=(n(27),function(){var e=Object(a.f)(),t=Object(a.g)().login,n=Object(c.useState)(null),r=Object(i.a)(n,2),s=r[0],l=r[1],j=Object(c.useState)(!1),u=Object(i.a)(j,2),b=u[0],f=u[1],d=Object(c.useContext)(x).handleInfoHeader;return Object(c.useEffect)((function(){var e=function(){var e=Object(N.a)(_.a.mark((function e(){var n,c,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(t),l(null),f(!0),n="https://api.github.com/users/".concat(t,"/repos"),e.next=6,fetch(n);case 6:return c=e.sent,e.next=9,c.json();case 9:r=e.sent,l(r),f(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t,d]),Object(o.jsxs)("div",{className:"repos flex flex-col justify-evenly",children:[Object(o.jsx)("div",{className:"reposCtn self-center ".concat(b?"flex justify-center":(null===s||void 0===s?void 0:s.length)>0?"grid":"flex justify-center"),children:s&&s.length>0?s.map((function(e,t){return Object(o.jsx)(y,{name:e.name,full_name:e.full_name,html_url:e.html_url,created_at:e.created_at,updated_at:e.updated_at},t)})):b?Object(o.jsx)(m,{}):Object(o.jsx)("p",{className:"self-center",children:"no hubo"})}),Object(o.jsx)("button",{className:"self-center",onClick:function(){return e(-1)},children:"Go back"})]})}),S=(n(10),function(){var e=Object(a.f)(),t=Object(a.g)().login,n=Object(c.useState)(null),r=Object(i.a)(n,2),s=r[0],l=r[1],j=Object(c.useState)(!1),u=Object(i.a)(j,2),b=u[0],f=u[1],d=Object(c.useContext)(x).handleInfoHeader;return Object(c.useEffect)((function(){var e=function(){var e=Object(N.a)(_.a.mark((function e(){var n,c,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(t),l(null),f(!0),n="https://api.github.com/users/".concat(t,"/following"),e.next=6,fetch(n);case 6:return c=e.sent,e.next=9,c.json();case 9:r=e.sent,l(r),f(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t,d]),Object(o.jsxs)("div",{className:"follow flex flex-col justify-evenly",children:[Object(o.jsx)("div",{className:"usersCtn self-center ".concat(b?"flex justify-center":(null===s||void 0===s?void 0:s.length)>0?"grid justify-items-center":"flex justify-center"),children:s&&s.length>0?s.map((function(e,t){return Object(o.jsx)(v,{follow:!0,login:e.login,avatar:e.avatar_url,url:e.html_url,repos_url:e.repos_url},t)})):b?Object(o.jsx)(m,{}):Object(o.jsx)("p",{className:"self-center",children:"no hubo"})}),Object(o.jsx)("button",{className:"self-center",onClick:function(){return e(-1)},children:"Go back"})]})}),G=function(){var e=Object(a.f)(),t=Object(a.g)().login,n=Object(c.useState)(null),r=Object(i.a)(n,2),s=r[0],l=r[1],j=Object(c.useState)(!1),u=Object(i.a)(j,2),b=u[0],f=u[1],d=Object(c.useContext)(x).handleInfoHeader;return Object(c.useEffect)((function(){var e=function(){var e=Object(N.a)(_.a.mark((function e(){var n,c,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(t),l(null),f(!0),n="https://api.github.com/users/".concat(t,"/followers"),e.next=6,fetch(n);case 6:return c=e.sent,e.next=9,c.json();case 9:r=e.sent,l(r),f(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t,d]),Object(o.jsxs)("div",{className:"follow flex flex-col justify-evenly",children:[Object(o.jsx)("div",{className:"usersCtn self-center ".concat(b?"flex justify-center":(null===s||void 0===s?void 0:s.length)>0?"grid justify-items-center":"flex justify-center"),children:s&&s.length>0?s.map((function(e,t){return Object(o.jsx)(v,{follow:!0,login:e.login,avatar:e.avatar_url,url:e.html_url,repos_url:e.repos_url},t)})):b?Object(o.jsx)(m,{}):Object(o.jsx)("p",{className:"self-center",children:"no hubo"})}),Object(o.jsx)("button",{className:"self-center",onClick:function(){return e(-1)},children:"Go back"})]})};n(28);var D=function(){return Object(o.jsx)(d.a,{className:"flex flex-col",children:Object(o.jsx)(f,{children:Object(o.jsx)(u,{children:Object(o.jsx)(p,{children:Object(o.jsxs)(a.c,{children:[Object(o.jsx)(a.a,{exact:!0,path:"/G-git",element:Object(o.jsx)(k,{})}),Object(o.jsx)(a.a,{path:"user/:login",element:Object(o.jsx)(C,{})}),Object(o.jsx)(a.a,{path:"user/:login/repos",element:Object(o.jsx)(F,{})}),Object(o.jsx)(a.a,{path:"user/:login/following",element:Object(o.jsx)(S,{})}),Object(o.jsx)(a.a,{path:"user/:login/followers",element:Object(o.jsx)(G,{})}),Object(o.jsx)(a.a,{path:"*",element:Object(o.jsx)("p",{children:"Holi 404!!"})})]})})})})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),c(e),r(e),s(e),l(e)}))};s.a.render(Object(o.jsx)(l.a,{children:Object(o.jsx)(D,{})}),document.getElementById("root")),H()}],[[29,1,2]]]);
//# sourceMappingURL=main.7c926081.chunk.js.map