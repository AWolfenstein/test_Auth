(this.webpackJsonpozi_auth=this.webpackJsonpozi_auth||[]).push([[0],{41:function(e,t,a){e.exports=a(57)},46:function(e,t,a){},47:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},48:function(e,t,a){},51:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(21),c=a.n(r),l=(a(46),a(19)),s=a(5),i=(a(47),a(48),a(39)),u=a(58),m=a(59),d=a(36),h=a(60),p=a(62),g=(a(51),a(18));var f=Object(g.b)((function(e){return{isLoggedIn:e.auth.isLoggedIn}}))((function(e){var t=e.isLoggedIn,a=Object(g.c)(),r=Object(s.f)(),c=Object(i.a)({initialValues:{clientId:"1",email:"",password:""},onSubmit:function(e){var t;a((t=JSON.stringify(e,null,2),function(e){return fetch("https://tager.dev.ozitag.com/api/auth/user",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Methods":"*"},body:t,mode:"no-cors"}).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(t){localStorage.setItem("accessToken",t.data.accessToken),e(function(e){return{type:"LOGIN_SUCCESS",payload:{token:e}}}(t.data))})).catch((function(e){console.log(e)}))})),console.log(JSON.stringify(e))}});return Object(n.useEffect)((function(){t?r.push("/user"):localStorage.removeItem("accessToken")})),o.a.createElement(u.a,{fluid:"md"},o.a.createElement(m.a,null,o.a.createElement(d.a,{className:"colForm"},o.a.createElement(h.a,{onSubmit:c.handleSubmit},o.a.createElement(h.a.Group,{controlId:"formBasicEmail"},o.a.createElement(h.a.Label,null,"Email address"),o.a.createElement(h.a.Control,{type:"email",name:"email",placeholder:"Enter email",onChange:c.handleChange,value:c.values.email}),o.a.createElement(h.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),o.a.createElement(h.a.Group,{controlId:"formBasicPassword"},o.a.createElement(h.a.Label,null,"Password"),o.a.createElement(h.a.Control,{type:"password",name:"password",onChange:c.handleChange,value:c.values.password,placeholder:"Password"})),o.a.createElement(p.a,{variant:"primary",type:"submit"},"Submit"),o.a.createElement("br",null)))))})),E=a(61);var O=Object(g.b)((function(e){var t=e.auth;return{isLoggedIn:t.isLoggedIn,user:t.user}}))((function(e){var t=e.user,a=e.isLoggedIn,r=Object(g.c)(),c=Object(s.f)();Object(n.useEffect)((function(){a?r((function(e){var t=localStorage.getItem("accessToken");return fetch("https://tager.dev.ozitag.com/api/user/profile",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Methods":"*",Authorization:"Bearer ".concat(t)},mode:"no-cors"}).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(t){e({type:"GET_PROFILE",payload:t.data})})).catch((function(e){console.log(e)}))})):c.push("/")}),[a]);return o.a.createElement(u.a,{fluid:"md"},o.a.createElement(m.a,null,o.a.createElement(d.a,{style:{margin:"20%"}},o.a.createElement(E.a,null,o.a.createElement(E.a.Header,{as:"h5"},"Profile"),o.a.createElement(E.a.Body,null,o.a.createElement(E.a.Title,null,t&&t.name),o.a.createElement(E.a.Text,null,t&&t.email),o.a.createElement(p.a,{variant:"primary",onClick:function(){r((function(e){var t=localStorage.getItem("accessToken");return fetch("https://tager.dev.ozitag.com/api/user/profile",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Methods":"*",Authorization:"Bearer ".concat(t)},mode:"no-cors"}).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(t){console.log(t.data),localStorage.removeItem("accessToken"),e({type:"USER_LOGOUT",payload:t.data})})).catch((function(e){console.log(e)}))}))}},"Logout"))))))})),b=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"404 - Not Found!"),o.a.createElement(l.b,{to:"/"},"Go Home"))};var v=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(l.a,null,o.a.createElement(s.c,null,o.a.createElement(s.a,{exact:!0,path:"/"},o.a.createElement(f,null)),o.a.createElement(s.a,{path:"/user"},o.a.createElement(O,null)),o.a.createElement(s.a,{component:b}))))};a(56),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=a(16),j=a(37),I=a(38),y=a(15),A=JSON.parse(localStorage.getItem("token")),C=A?{isLoggedIn:!0,token:A}:{isLoggedIn:!1,token:null},S=Object(w.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"LOGIN_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{isLoggedIn:!0,token:n.token});case"GET_PROFILE":return Object(y.a)(Object(y.a)({},e),{},{isLoggedIn:!0,user:n});case"LOGIN_FAIL":case"USER_LOGOUT":return Object(y.a)(Object(y.a)({},e),{},{isLoggedIn:!1,user:null});default:return e}}}),T=Object(w.createStore)(S,Object(j.composeWithDevTools)(Object(w.applyMiddleware)(I.a)));c.a.render(o.a.createElement(g.a,{store:T},o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.91d0caa2.chunk.js.map