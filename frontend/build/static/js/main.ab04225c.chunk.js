(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(52)},42:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a.n(n),l=a(29),r=a.n(l),c=(a(42),a(8)),m=a(16),s=a(6),i=a(60),u=a(0),p=a(14),d=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),d=Object(s.a)(r,2),E=d[0],b=d[1],f=Object(u.l)(),g=function(e){l(Object(m.a)({},a,Object(c.a)({},e.target.name,e.target.value)))};return o.a.createElement("div",{className:"container"},o.a.createElement(p.a,{color:"info",style:{position:"fixed",top:"0",width:"80%",margin:"auto"},isOpen:E},"Sign up Success"),o.a.createElement("form",{className:"my-box m-auto",onSubmit:function(e){e.preventDefault(),i.a.post("http://localhost:4000/api/user",a).then(function(e){console.log(e.data),b(!0),setTimeout(function(){b(!1)},2e3),f("/")}).catch(function(e){return console.log(e.message)})}},o.a.createElement("h1",null,"Sign Up"),o.a.createElement("div",{className:"form-group mt-2"},o.a.createElement("label",{htmlFor:"full-name"},"Full Name"),o.a.createElement("input",{onChange:g,name:"fullName",type:"text",className:"form-control",id:"full-name",placeholder:"Enter Your Full Name"})),o.a.createElement("div",{className:"form-group mt-2"},o.a.createElement("label",{htmlFor:"email"},"Email"),o.a.createElement("input",{onChange:g,name:"email",type:"email",className:"form-control",id:"email",placeholder:"Enter A Valid Email"})),o.a.createElement("div",{className:"form-group mt-2"},o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement("input",{onChange:g,name:"password",type:"text",className:"form-control",id:"password",placeholder:"Enter A Strong Password"})),o.a.createElement("div",{className:"form-group mt-2"},o.a.createElement("label",{htmlFor:"mobile"},"Mobile"),o.a.createElement("input",{onChange:g,name:"mobile",type:"Number",className:"form-control",id:"mobile",placeholder:"Enter Your Mobile Number"})),o.a.createElement("div",{className:"form-group mt-2"},o.a.createElement("label",{htmlFor:"address"},"Address"),o.a.createElement("input",{onChange:g,name:"address",type:"text",className:"form-control",id:"address",placeholder:"Enter Your Address"})),o.a.createElement("button",{type:"submit",className:"btn btn-primary mt-2"},"Submit")))},E=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,59)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),o(e),l(e),r(e)})},b=(a(50),a(22)),f=function(e){return o.a.createElement("div",{className:"col-md-4"},o.a.createElement("div",{className:"card mt-3 mx-2"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},e.note.title),o.a.createElement("p",{className:"card-text"},e.note.description),o.a.createElement("p",{className:"card-text"},e.note.tag))))},g=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)([]),u=Object(s.a)(r,2),d=u[0],E=u[1],b=Object(n.useState)(!1),g=Object(s.a)(b,2),h=g[0],N=g[1],O=Object(n.useState)(!1),j=Object(s.a)(O,2),v=j[0],y=j[1],S=Object(n.useState)(0),w=Object(s.a)(S,2),x=w[0],F=w[1],C=function(e){l(Object(m.a)({},a,Object(c.a)({},e.target.name,e.target.value)))};return Object(n.useEffect)(function(){i.a.get("http://localhost:4000/api/notes",a).then(function(e){console.log(e.data),E(e.data.notes)}).catch(function(e){return console.log(e.message)})},[x]),o.a.createElement("div",{className:"container mb-2"},o.a.createElement(p.a,{color:"info",style:{position:"fixed",top:"0",width:"80%",margin:"auto"},isOpen:h},"Note Created"),o.a.createElement(p.a,{color:"info",style:{position:"fixed",top:"0",width:"80%",margin:"auto"},isOpen:v},"Processing..."),o.a.createElement("form",{className:"my-box m-auto",onSubmit:function(e){e.preventDefault(),y(!0),setTimeout(function(){y(!1)},2e3),i.a.post("http://localhost:4000/api/notes",a).then(function(e){console.log(e.data),N(!0),setTimeout(function(){N(!1)},2e3),F(x+1)}).catch(function(e){return console.log(e.message)})}},o.a.createElement("h1",null,"Notes"),o.a.createElement("div",{className:"form-group mt-2"},o.a.createElement("label",{htmlFor:"title"},"Title"),o.a.createElement("input",{onChange:C,name:"title",type:"text",className:"form-control",id:"title",placeholder:"Enter Your Note Titel"})),o.a.createElement("div",{className:"form-group mt-2"},o.a.createElement("label",{htmlFor:"description"},"Description"),o.a.createElement("input",{onChange:C,name:"description",type:"text",className:"form-control",id:"description",placeholder:"Enter Your Note Description"})),o.a.createElement("div",{className:"form-group mt-2"},o.a.createElement("label",{htmlFor:"tag"},"Tag"),o.a.createElement("input",{onChange:C,name:"tag",type:"text",className:"form-control",id:"tag",placeholder:"Enter Your Note Tag"})),o.a.createElement("button",{type:"submit",className:"btn btn-primary mt-2"},"Submit")),o.a.createElement("div",{className:"row"},d.map(function(e,t){return o.a.createElement(f,{key:t,note:e})})))},h=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),d=Object(s.a)(r,2),E=d[0],b=d[1],f=Object(n.useState)(!1),g=Object(s.a)(f,2),h=g[0],N=g[1],O=Object(u.l)(),j=function(e){l(Object(m.a)({},a,Object(c.a)({},e.target.name,e.target.value)))};return o.a.createElement("div",{className:"container"},o.a.createElement(p.a,{color:"info",style:{position:"fixed",top:"0",width:"80%",margin:"auto"},isOpen:E},"Log In success"),o.a.createElement(p.a,{color:"danger",style:{position:"fixed",top:"0",width:"80%",margin:"auto"},isOpen:h},"Please Provide valid Credentials"),o.a.createElement("form",{className:"my-box m-auto",onSubmit:function(e){e.preventDefault(),console.log(a),i.a.post("http://localhost:4000/api/user/login",a).then(function(e){console.log(e.data),!0===e.data.success?(b(!0),setTimeout(function(){b(!1),O("/")},2e3)):(N(!0),setTimeout(function(){N(!1)},2e3))}).catch(function(e){return console.log(e.message)})}},o.a.createElement("h1",null,"Log In"),o.a.createElement("div",{className:"form-group mt-2"},o.a.createElement("label",{htmlFor:"email"},"Email"),o.a.createElement("input",{onChange:j,name:"email",type:"email",className:"form-control",id:"email",placeholder:"Enter A Valid Email"})),o.a.createElement("div",{className:"form-group mt-2"},o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement("input",{onChange:j,name:"password",type:"text",className:"form-control",id:"password",placeholder:"Enter A Strong Password"})),o.a.createElement("button",{type:"submit",className:"btn btn-primary mt-2"},"Submit")))},N=Object(b.a)([{path:"/signUp",element:o.a.createElement(d,null)},{path:"/",element:o.a.createElement(g,null)},{path:"/logIn",element:o.a.createElement(h,null)}]);r.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u.b,{router:N}))),E()}},[[34,3,2]]]);
//# sourceMappingURL=main.ab04225c.chunk.js.map