(this["webpackJsonpgithub-api"]=this["webpackJsonpgithub-api"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(11),s=n.n(r),l=n(6),a=(n(17),n(2)),i=n(3),j=n(0),o=Object(c.createContext)(),u=function(e){var t=e.children,n=Object(c.useState)(!1),r=Object(i.a)(n,2),s=r[0],l=r[1],a={darkMode:s,handleDarkMode:function(){return l(!s)}};return Object(j.jsx)(o.Provider,{value:a,children:t})},b=Object(c.createContext)(),f=function(e){var t=e.children,n=Object(c.useState)("G-git"),r=Object(i.a)(n,2),s=r[0],l=r[1],a={infoHeader:s,handleInfoHeader:function(e){return l(e)}};return Object(j.jsx)(b.Provider,{value:a,children:t})},x=b,d=n(12),h=n.p+"static/media/g-git.c6305904.svg",O=n.p+"static/media/arrow.1762776f.svg",p=(n(19),function(){var e=Object(a.f)(),t=Object(a.e)().pathname;console.log(t);var n=Object(c.useContext)(x).infoHeader;return Object(j.jsxs)("div",{className:"head  w-full inline-flex justify-between items-center bg-True_Blue",children:[Object(j.jsxs)("span",{className:"int inline-flex items-center",children:["/G-git"!==t&&"/taurien.github.io/G-git/"!==t&&Object(j.jsx)("img",{className:"h-7",onClick:function(){return e(-1)},src:O,alt:"Arrow"}),Object(j.jsx)("h1",{children:"/G-git"===t?"G-git":t==="/user/".concat(n,"/repos")?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{children:n})," Repos"]}):t==="/user/".concat(n,"/following")?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{children:n})," follows"]}):t==="/user/".concat(n,"/followers")?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{children:n}),"'s followers"]}):"G-git"})]}),Object(j.jsx)(l.b,{to:"/G-git",children:Object(j.jsx)("img",{src:h,alt:"Logo"})})]})}),m=function(e){var t=e.children;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{}),t]})},g=(n(20),function(){return Object(j.jsx)("div",{className:"self-center loader"})}),v=(n(21),function(e){var t=e.handleUser,n=e.handleFetchData;return Object(j.jsxs)("form",{action:"",onSubmit:function(e){return n(e)},className:"self-center grid",children:[Object(j.jsx)("input",{type:"text",placeholder:"Name",onChange:function(e){var n=e.target;return t(n)}}),Object(j.jsx)("input",{type:"submit",value:"\xa1Search!"})]})}),w=(n(22),function(e){var t=Object(a.f)(),n=e.home,c=e.login,r=(e.repos_url,e.name),s=e.avatar,l=e.location,i=e.hireable,o=e.html_url,u=(e.url,e.followers),b=e.following,f=e.public_repos,x=e.created_at,d=e.errormsg,h=e.follow,O=function(){t({pathname:"/user/".concat(c)})},p=function(){t({pathname:"/user/".concat(c,"/repos")})},m=function(){t({pathname:"/user/".concat(c,"/following")})},g=function(){t({pathname:"/user/".concat(c,"/followers")})};return Object(j.jsx)("div",{className:"usercard self-center flex flex-col items-center ".concat(n?"test789 cardEffect":""," ").concat(x?"test456 cardEffect":""," ").concat(h&&"test123"),children:x?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("span",{children:['Meet "',Object(j.jsx)("b",{children:c}),'" ',r&&Object(j.jsxs)(j.Fragment,{children:["AKA ",Object(j.jsx)("b",{children:Object(j.jsx)("i",{children:r})})]})]}),Object(j.jsx)("img",{src:s,alt:r}),Object(j.jsx)("p",{children:l}),Object(j.jsx)("span",{className:i?"greenDot":"redDot",children:"Hireable"}),Object(j.jsxs)("div",{className:"numbers inline-flex justify-between",children:[Object(j.jsxs)("span",{onClick:p,className:"flex flex-col items-center",children:[Object(j.jsx)("p",{children:Object(j.jsx)("b",{children:"Repos"})}),Object(j.jsx)("p",{children:f})]}),Object(j.jsxs)("span",{onClick:m,className:"flex flex-col items-center",children:[Object(j.jsx)("p",{children:Object(j.jsx)("b",{children:"Following"})}),Object(j.jsx)("p",{children:b})]}),Object(j.jsxs)("span",{onClick:g,className:"flex flex-col items-center",children:[Object(j.jsx)("p",{children:Object(j.jsx)("b",{children:"Followers"})}),Object(j.jsx)("p",{children:u})]})]}),Object(j.jsxs)("span",{className:"flex flex-col items-center",children:[Object(j.jsx)("p",{children:Object(j.jsx)("b",{children:"Created at:"})}),Object(j.jsx)("p",{children:x})]}),Object(j.jsx)("a",{href:o,target:"_blank",rel:"noreferrer",children:"See on Github"})]}):d?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("p",{children:"Invalid. User not found"})}):h?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:c}),Object(j.jsx)("img",{src:s,alt:r}),Object(j.jsx)("div",{className:"numbers inline-flex justify-center",children:Object(j.jsx)("span",{onClick:p,className:"",children:Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{}),"Repos"]})})}),Object(j.jsx)("button",{onClick:O,children:"See more"})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{children:Object(j.jsx)("b",{children:c})}),Object(j.jsx)("img",{src:s,alt:r}),Object(j.jsx)("span",{children:Object(j.jsx)("i",{children:l})}),Object(j.jsxs)("div",{className:"numbers inline-flex justify-between",children:[Object(j.jsxs)("span",{onClick:p,className:"flex flex-col items-center",children:[Object(j.jsx)("p",{children:Object(j.jsx)("b",{children:"Repos"})}),f&&Object(j.jsx)("p",{children:f})]}),Object(j.jsxs)("span",{onClick:m,className:"flex flex-col items-center",children:[Object(j.jsx)("p",{children:Object(j.jsx)("b",{children:"Following"})}),b&&Object(j.jsx)("p",{children:b})]}),Object(j.jsxs)("span",{onClick:g,className:"flex flex-col items-center",children:[Object(j.jsx)("p",{children:Object(j.jsx)("b",{children:"Followers"})}),u&&Object(j.jsx)("p",{children:u})]})]}),Object(j.jsx)("button",{onClick:O,children:"See more"})]})})}),_=(n(23),n(4)),N=n.n(_),y=n(7),C=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],s=function(e){var t=Object(c.useState)(null),n=Object(i.a)(t,2),r=n[0],s=n[1],l=Object(c.useState)(!1),a=Object(i.a)(l,2),j=a[0],o=a[1],u=function(){var t=Object(y.a)(N.a.mark((function t(n){var c,r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),s(null),o(!0),t.next=5,fetch(e);case 5:return c=t.sent,t.next=8,c.json();case 8:r=t.sent,s(r),o(!1);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{data:r,loader:j,handleFetchData:u}}("https://api.github.com/users/".concat(n)),l=s.data,a=s.loader,o=s.handleFetchData;return Object(j.jsxs)("div",{className:"home flex flex-col w-full",children:[Object(j.jsx)(v,{handleUser:function(e){var t=e.value;r(t)},userName:n,handleFetchData:o}),a&&Object(j.jsx)(g,{}),l&&Object(j.jsx)(w,{home:!0,login:l.login,name:l.name,avatar:l.avatar_url,location:l.location,public_repos:l.public_repos,followers:l.followers,following:l.following,errormsg:null===l||void 0===l?void 0:l.message})]})},k=(n(25),function(){Object(a.f)();var e=Object(a.g)().login,t=Object(c.useState)(null),n=Object(i.a)(t,2),r=n[0],s=n[1],l=Object(c.useState)(!1),o=Object(i.a)(l,2),u=o[0],b=o[1],f=Object(c.useContext)(x).handleInfoHeader;return Object(c.useEffect)((function(){var t=function(){var t=Object(y.a)(N.a.mark((function t(){var n,c,r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(e),s(null),b(!0),n="https://api.github.com/users/".concat(e),t.next=6,fetch(n);case 6:return c=t.sent,t.next=9,c.json();case 9:r=t.sent,s(r),b(!1);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e,f]),Object(j.jsxs)("div",{className:"userDisplay flex flex-col",children:[u&&Object(j.jsx)(g,{}),r&&Object(j.jsx)(w,{login:r.login,name:r.name,repos_url:r.repos_url,avatar:r.avatar_url,location:r.location,hireable:r.hireable,html_url:r.html_url,followers:r.followers,following:r.following,public_repos:r.public_repos,created_at:r.created_at})]})}),F=(n(26),function(e){e.name;var t=e.full_name,n=e.html_url,c=e.created_at,r=e.updated_at;return Object(j.jsx)("a",{className:"repolink",href:n,target:"_blank",rel:"noreferrer",children:Object(j.jsxs)("div",{className:"reposcard flex flex-col items-center",children:[Object(j.jsx)("p",{children:Object(j.jsx)("b",{children:t})}),Object(j.jsx)("p",{children:Object(j.jsx)("b",{children:"Created:"})}),Object(j.jsx)("p",{children:c}),Object(j.jsx)("p",{children:Object(j.jsx)("b",{children:"Updated:"})}),Object(j.jsx)("p",{children:r})]})})}),S=(n(27),function(){Object(a.f)();var e=Object(a.g)().login,t=Object(c.useState)(null),n=Object(i.a)(t,2),r=n[0],s=n[1],l=Object(c.useState)(!1),o=Object(i.a)(l,2),u=o[0],b=o[1],f=Object(c.useContext)(x).handleInfoHeader;return Object(c.useEffect)((function(){var t=function(){var t=Object(y.a)(N.a.mark((function t(){var n,c,r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(e),s(null),b(!0),n="https://api.github.com/users/".concat(e,"/repos"),t.next=6,fetch(n);case 6:return c=t.sent,t.next=9,c.json();case 9:r=t.sent,s(r),b(!1);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e,f]),Object(j.jsx)("div",{className:"repos flex flex-col justify-evenly",children:Object(j.jsx)("div",{className:"reposCtn self-center ".concat(u?"flex justify-center":(null===r||void 0===r?void 0:r.length)>0?"grid":"flex justify-center"),children:r&&r.length>0?r.map((function(e,t){return Object(j.jsx)(F,{name:e.name,full_name:e.full_name,html_url:e.html_url,created_at:e.created_at,updated_at:e.updated_at},t)})):u?Object(j.jsx)(g,{}):Object(j.jsx)("p",{className:"self-center",children:"no hubo"})})})}),D=(n(10),function(){Object(a.f)();var e=Object(a.g)().login,t=Object(c.useState)(null),n=Object(i.a)(t,2),r=n[0],s=n[1],l=Object(c.useState)(!1),o=Object(i.a)(l,2),u=o[0],b=o[1],f=Object(c.useContext)(x).handleInfoHeader;return Object(c.useEffect)((function(){var t=function(){var t=Object(y.a)(N.a.mark((function t(){var n,c,r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(e),s(null),b(!0),n="https://api.github.com/users/".concat(e,"/following"),t.next=6,fetch(n);case 6:return c=t.sent,t.next=9,c.json();case 9:r=t.sent,s(r),b(!1);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e,f]),Object(j.jsx)("div",{className:"follow flex flex-col justify-evenly",children:Object(j.jsx)("div",{className:"usersCtn self-center ".concat(u?"flex justify-center":(null===r||void 0===r?void 0:r.length)>0?"grid justify-items-center":"flex justify-center"),children:r&&r.length>0?r.map((function(e,t){return Object(j.jsx)(w,{follow:!0,login:e.login,avatar:e.avatar_url,url:e.html_url,repos_url:e.repos_url},t)})):u?Object(j.jsx)(g,{}):Object(j.jsx)("p",{className:"self-center",children:"no hubo"})})})}),G=function(){Object(a.f)();var e=Object(a.g)().login,t=Object(c.useState)(null),n=Object(i.a)(t,2),r=n[0],s=n[1],l=Object(c.useState)(!1),o=Object(i.a)(l,2),u=o[0],b=o[1],f=Object(c.useContext)(x).handleInfoHeader;return Object(c.useEffect)((function(){var t=function(){var t=Object(y.a)(N.a.mark((function t(){var n,c,r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(e),s(null),b(!0),n="https://api.github.com/users/".concat(e,"/followers"),t.next=6,fetch(n);case 6:return c=t.sent,t.next=9,c.json();case 9:r=t.sent,s(r),b(!1);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e,f]),Object(j.jsx)("div",{className:"follow flex flex-col justify-evenly",children:Object(j.jsx)("div",{className:"usersCtn self-center ".concat(u?"flex justify-center":(null===r||void 0===r?void 0:r.length)>0?"grid justify-items-center":"flex justify-center"),children:r&&r.length>0?r.map((function(e,t){return Object(j.jsx)(w,{follow:!0,login:e.login,avatar:e.avatar_url,url:e.html_url,repos_url:e.repos_url},t)})):u?Object(j.jsx)(g,{}):Object(j.jsx)("p",{className:"self-center",children:"no hubo"})})})};n(28);var H=function(){return Object(j.jsx)(d.a,{className:"flex flex-col",children:Object(j.jsx)(f,{children:Object(j.jsx)(u,{children:Object(j.jsx)(m,{children:Object(j.jsxs)(a.c,{children:[Object(j.jsx)(a.a,{exact:!0,path:"/G-git",element:Object(j.jsx)(C,{})}),Object(j.jsx)(a.a,{path:"user/:login",element:Object(j.jsx)(k,{})}),Object(j.jsx)(a.a,{path:"user/:login/repos",element:Object(j.jsx)(S,{})}),Object(j.jsx)(a.a,{path:"user/:login/following",element:Object(j.jsx)(D,{})}),Object(j.jsx)(a.a,{path:"user/:login/followers",element:Object(j.jsx)(G,{})}),Object(j.jsx)(a.a,{path:"*",element:Object(j.jsx)("p",{children:"Holi 404!!"})})]})})})})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),c(e),r(e),s(e),l(e)}))};s.a.render(Object(j.jsx)(l.a,{children:Object(j.jsx)(H,{})}),document.getElementById("root")),I()}],[[29,1,2]]]);
//# sourceMappingURL=main.43f1a90a.chunk.js.map