(this.webpackJsonpozi_auth=this.webpackJsonpozi_auth||[]).push([[0],{56:function(e,t,a){e.exports=a(72)},61:function(e,t,a){},62:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},63:function(e,t,a){},68:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(16),c=a.n(r),s=(a(61),a(24)),l=a(6),i=(a(62),a(63),a(42)),u=a(55),m=a(76),d=a(78);var p=a(17),E=function(e){var t=e.show,a=e.setShow,n=e.message,r=e.setErrorM,c=Object(p.c)(),s=function(){r(""),c({type:"CLEAR_MESSAGE"}),a(!1)};return o.a.createElement(m.a,{show:t,onHide:s},o.a.createElement(m.a.Header,{closeButton:!0},o.a.createElement(m.a.Title,null,"Error!")),o.a.createElement(m.a.Body,null,n),o.a.createElement(m.a.Footer,null,o.a.createElement(d.a,{variant:"secondary",onClick:s},"Close")))},g=a(74),h=a(75),f=a(52),b=a(77);a(68);var O=Object(p.b)((function(e){var t=e.auth;return{isLoggedIn:t.isLoggedIn,message:t.message}}))((function(e){var t=e.isLoggedIn,a=e.message,r=Object(p.c)(),c=Object(n.useState)(!1),s=Object(i.a)(c,2),m=s[0],O=s[1],v=Object(n.useState)(""),j=Object(i.a)(v,2),w=j[0],I=j[1],y=Object(l.f)(),S=Object(u.a)({initialValues:{clientId:"1",email:"",password:""},validate:function(){var e={};return A.email&&!L.email?e.email="Required":/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(L.email)||(e.email="Invalid email address"),A.password&&!L.password?e.password="Required":L.password.length<=3&&(e.password="Must be more than 3 characters"),e},onSubmit:function(e){var t;r((t=JSON.stringify(e,null,2),function(e){return fetch("https://tager.dev.ozitag.com/api/auth/user",{method:"POST",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},body:t}).then((function(t){if(!t.ok)throw t.json().then((function(t){e({type:"LOGIN_FAIL",payload:t.errors.email||t.errors})})),Error(t.statusText);return t.json()})).then((function(t){localStorage.setItem("accessToken",t.data.accessToken),e(function(e){return{type:"LOGIN_SUCCESS",payload:{token:e}}}(t.data))})).catch((function(e){console.log(e)}))}))}}),L=S.values,T=S.handleSubmit,k=(S.submitCount,S.getFieldProps),A=(S.setValues,S.touched),C=S.errors;S.setFieldValue;Object(n.useEffect)((function(){t?y.push("/user"):localStorage.removeItem("accessToken")})),Object(n.useEffect)((function(){if(a){var e=a&&a.message||a.password.message;I(e),O(!0)}}),[a]);var _=o.a.createElement(g.a,{fluid:"md"},o.a.createElement(h.a,null,o.a.createElement(f.a,{className:"colForm"},o.a.createElement(b.a,{onSubmit:T},o.a.createElement(b.a.Group,{controlId:"formBasicEmail"},o.a.createElement(b.a.Label,null,"Email address"),o.a.createElement(b.a.Control,Object.assign({type:"email",name:"email",placeholder:"Enter email"},k("email"),{required:!0,isValid:A.email&&!C.email,isInvalid:!!C.email})),o.a.createElement(b.a.Control.Feedback,{type:"invalid"},C.email),o.a.createElement(b.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),o.a.createElement(b.a.Group,{controlId:"formBasicPassword"},o.a.createElement(b.a.Label,null,"Password"),o.a.createElement(b.a.Control,Object.assign({type:"password",name:"password"},k("password"),{placeholder:"Password",isValid:A.password&&!C.password,isInvalid:!!C.password||a&&a.password})),o.a.createElement(b.a.Control.Feedback,{type:"invalid"},C.password)),o.a.createElement(d.a,{variant:"primary",type:"submit"},"Submit"),o.a.createElement("br",null)))));return o.a.createElement(o.a.Fragment,null,_,o.a.createElement(E,{show:m,setShow:O,message:w,setErrorM:I}))})),v=a(79);var j=Object(p.b)((function(e){var t=e.auth;return{isLoggedIn:t.isLoggedIn,user:t.user}}))((function(e){var t=e.user,a=e.isLoggedIn,r=Object(p.c)(),c=Object(l.f)();Object(n.useEffect)((function(){a?r((function(e){var t=localStorage.getItem("accessToken");return fetch("https://tager.dev.ozitag.com/api/user/profile",{method:"GET",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(t){e({type:"GET_PROFILE",payload:t.data})})).catch((function(e){console.log(e)}))})):c.push("/test_Auth")}),[a]);return o.a.createElement(g.a,{fluid:"md"},o.a.createElement(h.a,null,o.a.createElement(f.a,{style:{margin:"20%"}},o.a.createElement(v.a,null,o.a.createElement(v.a.Header,{as:"h5"},"Profile"),o.a.createElement(v.a.Body,null,o.a.createElement(v.a.Title,null,t&&t.name),o.a.createElement(v.a.Text,null,t&&t.email),o.a.createElement(d.a,{variant:"primary",onClick:function(){r((function(e){var t=localStorage.getItem("accessToken");return fetch("https://tager.dev.ozitag.com/api/user/profile/logout",{method:"POST",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(t){localStorage.removeItem("accessToken"),e({type:"USER_LOGOUT",payload:t.data})})).catch((function(e){console.log(e)}))}))}},"Logout"))))))})),w=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"404 - Not Found!"),o.a.createElement(s.b,{to:"/test_Auth"},"Go Home"))};var I=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(s.a,null,o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/test_Auth"},o.a.createElement(O,null)),o.a.createElement(l.a,{path:"/user"},o.a.createElement(j,null)),o.a.createElement(l.a,{component:w}))))};a(71),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=a(20),S=a(53),L=a(54),T=a(15),k=JSON.parse(localStorage.getItem("token")),A=k?{isLoggedIn:!0,token:k}:{isLoggedIn:!1,token:null},C=Object(y.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"LOGIN_SUCCESS":return Object(T.a)(Object(T.a)({},e),{},{isLoggedIn:!0,token:n.token});case"GET_PROFILE":return Object(T.a)(Object(T.a)({},e),{},{isLoggedIn:!0,user:n});case"LOGIN_FAIL":return Object(T.a)(Object(T.a)({},e),{},{isLoggedIn:!1,message:n});case"CLEAR_MESSAGE":return Object(T.a)(Object(T.a)({},e),{},{isLoggedIn:!1,message:""});case"USER_LOGOUT":return Object(T.a)(Object(T.a)({},e),{},{isLoggedIn:!1,user:null});default:return e}}}),_=Object(y.createStore)(C,Object(S.composeWithDevTools)(Object(y.applyMiddleware)(L.a)));c.a.render(o.a.createElement(p.a,{store:_},o.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.5b2460f9.chunk.js.map