(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(43)},35:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(24),o=a.n(r),m=(a(35),a(6)),c=a(17),s=a(5),i=a(45),u=a(0),p=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(u.l)(),p=function(e){r(Object(c.a)({},a,Object(m.a)({},e.target.name,e.target.value)))};return l.a.createElement("div",{className:"container row mt-4"},l.a.createElement("form",{className:"col-md-6 m-auto",onSubmit:function(e){e.preventDefault(),i.a.post("http://localhost:4000/api/user",a).then(function(e){console.log(e.data),alert("Sign up Success"),o("/home")}).catch(function(e){return console.log(e.message)})}},l.a.createElement("h1",null,"Sign Up"),l.a.createElement("div",{className:"form-group mt-2"},l.a.createElement("label",{htmlFor:"full-name"},"Full Name"),l.a.createElement("input",{onChange:p,name:"fullName",type:"text",className:"form-control",id:"full-name",placeholder:"Enter Your Full Name"})),l.a.createElement("div",{className:"form-group mt-2"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{onChange:p,name:"email",type:"email",className:"form-control",id:"email",placeholder:"Enter A Valid Email"})),l.a.createElement("div",{className:"form-group mt-2"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{onChange:p,name:"password",type:"text",className:"form-control",id:"password",placeholder:"Enter A Strong Password"})),l.a.createElement("div",{className:"form-group mt-2"},l.a.createElement("label",{htmlFor:"mobile"},"Mobile"),l.a.createElement("input",{onChange:p,name:"mobile",type:"Number",className:"form-control",id:"mobile",placeholder:"Enter Your Mobile Number"})),l.a.createElement("div",{className:"form-group mt-2"},l.a.createElement("label",{htmlFor:"address"},"Address"),l.a.createElement("input",{onChange:p,name:"address",type:"text",className:"form-control",id:"address",placeholder:"Enter Your Address"})),l.a.createElement("button",{type:"submit",className:"btn btn-primary mt-2"},"Submit")))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,44)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),r(e),o(e)})},E=(a(41),a(23)),b=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],r=t[1],o=function(e){r(Object(c.a)({},a,Object(m.a)({},e.target.name,e.target.value)))};return l.a.createElement("div",{className:"container row mt-4"},l.a.createElement("form",{className:"col-md-6 m-auto",onSubmit:function(e){e.preventDefault(),i.a.post("http://localhost:4000/api/notes",a).then(function(e){console.log(e.data),alert("Notes Created")}).catch(function(e){return console.log(e.message)})}},l.a.createElement("h1",null,"Notes"),l.a.createElement("div",{className:"form-group mt-2"},l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{onChange:o,name:"title",type:"text",className:"form-control",id:"title",placeholder:"Enter Your Note Titel"})),l.a.createElement("div",{className:"form-group mt-2"},l.a.createElement("label",{htmlFor:"description"},"Description"),l.a.createElement("input",{onChange:o,name:"description",type:"text",className:"form-control",id:"description",placeholder:"Enter Your Note Description"})),l.a.createElement("div",{className:"form-group mt-2"},l.a.createElement("label",{htmlFor:"tag"},"Tag"),l.a.createElement("input",{onChange:o,name:"tag",type:"text",className:"form-control",id:"tag",placeholder:"Enter Your Note Tag"})),l.a.createElement("button",{type:"submit",className:"btn btn-primary mt-2"},"Submit")))},h=Object(E.a)([{path:"/",element:l.a.createElement(p,null)},{path:"/home",element:l.a.createElement(b,null)}]);o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u.b,{router:h}))),d()}},[[26,3,2]]]);
//# sourceMappingURL=main.a8374bd4.chunk.js.map