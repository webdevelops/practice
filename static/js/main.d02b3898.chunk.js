(this["webpackJsonpquick-shop"]=this["webpackJsonpquick-shop"]||[]).push([[0],{110:function(e,t,a){e.exports=a(122)},122:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),l=a(31),i=a(80),s=a(81),u=a(14),m=a(190),p=a(191),d=a(192),f=a(8),E=a(16),b={token:null},h=a(17),g=[],v={ids:[],value:""},y={id:null},k=[],O=[],S=Object(l.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"AUTH_SUCCESS":return Object(E.a)({},e,{token:n});case"AUTH_LOGOUT":return Object(E.a)({},e,{token:null});default:return e}},phones:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"FETCH_PHONES_SUCCESS":return n;case"LOAD_MORE_PHONES_SUCCESS":return[].concat(Object(h.a)(e),Object(h.a)(n));case"FETCH_PHONE_BY_ID_SUCCESS":var r=e.find((function(e){return e.id===n.id}));return r?[].concat(Object(h.a)(e),[r]):[n];default:return e}},phonesPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"FETCH_PHONES_SUCCESS":var r=n.map((function(e){return e.id}));return Object(E.a)({},e,{ids:r});case"LOAD_MORE_PHONES_SUCCESS":var o=n.map((function(e){return e.id})),c=[].concat(Object(h.a)(e.ids),Object(h.a)(o));return Object(E.a)({},e,{ids:c});case"SEARCH_PHONE":return Object(E.a)({},e,{value:n});default:return e}},phonePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"FETCH_PHONE_BY_ID_SUCCESS":return Object(E.a)({},e,{id:n.id});default:return e}},basket:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ADD_PHONE_TO_BASKET":return[].concat(Object(h.a)(e),[n]);case"DELETE_PHONE_FROM_BASKET":return e.filter((function(e){return e!==n}));case"CLEAN_BASKET":return k;default:return e}},categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"FETCH_CATEGORIES_SUCCESS":return n;default:return e}}}),j=a(98),x=a(196),_=a(163),C=a(61),w=Object(j.a)({palette:{primary:{main:_.a[800]},secondary:{main:C.a[500]}}}),N=w=Object(x.a)(w),T=a(7),P=a(20),I=a(174),B=a(175),A=a(53),D=a(172),H=a(90),U=a.n(H),R=a(38),L=a(99),M=a(173),F=a(91),W=a.n(F),z=a(124),q=Object(z.a)((function(e){var t,a;return{root:{flexGrow:1,"& header > div":{maxWidth:1920,minWidth:320,left:"50%",transform:"translateX(-50%)"}},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},list:{width:250},link:{display:"flex",alignItems:"center",textDecoration:"none",color:"#0277bd","& span":{fontSize:"1.3rem"}},linkIcon:{justifyContent:"center"},linkSignUp:{textDecoration:"none",color:"white",fontSize:"1rem"},sectionDeskTop:Object(T.a)({display:"none"},e.breakpoints.up("sm"),{display:"flex",alignItems:"center"}),sectionMobile:(t={display:"flex"},Object(T.a)(t,e.breakpoints.up("sm"),{display:"none"}),Object(T.a)(t,"& button",{color:"white"}),t),mobileMenu:(a={},Object(T.a)(a,e.breakpoints.up("sm"),{display:"none"}),Object(T.a)(a,"& a",{textDecoration:"none",color:"#0277bd"}),a)}})),G=a(195),K=a(166),Q=a(169),Y=a(123),$=a(167),J=a(168),V=a(69),Z=a.n(V),X=a(70),ee=a.n(X),te=a(87),ae=a.n(te),ne=a(88),re=a.n(ne),oe=a(86),ce=a.n(oe),le=Object(u.b)((function(e){return{isAuthenticated:Boolean(e.auth.token)}}))((function(e){var t,a=e.open,n=e.toggleDrawer,o=e.isAuthenticated,c=q(),l=o?[{to:"/",label:"Phones",icon:r.a.createElement(Z.a,{style:{color:"orange"}})},{to:"/basket",label:"Basket",icon:r.a.createElement(ee.a,{style:{color:"green"}})},{to:"/logout",label:"Logout",icon:r.a.createElement(ce.a,{style:{color:"#0277bd"}})}]:[{to:"/",label:"Phones",icon:r.a.createElement(Z.a,{style:{color:"orange"}})},{to:"/basket",label:"Basket",icon:r.a.createElement(ee.a,{style:{color:"green"}})},{to:"/sign-in",label:"Sign In",icon:r.a.createElement(ae.a,{style:{color:"#0277bd"}})},{to:"/sign-up",label:"Sign Up",icon:r.a.createElement(re.a,{style:{color:"#0277bd"}})}];return r.a.createElement("div",null,r.a.createElement(G.a,{anchor:"left",open:a,onClose:n("left",!1)},(t="left",r.a.createElement("div",{className:c.list,role:"presentation",onClick:n(t,!1),onKeyDown:n(t,!1)},r.a.createElement(K.a,null,l.map((function(e){return r.a.createElement(f.b,{to:e.to,className:c.link,key:e.label},r.a.createElement(Y.a,{button:!0},r.a.createElement($.a,{className:c.linkIcon},e.icon),r.a.createElement(J.a,{primary:e.label})))}))),r.a.createElement(Q.a,null)))))})),ie=a(170),se=a(171),ue=a(197),me=function(e){var t=e.signIn,a=e.handleChange;return r.a.createElement(ie.a,null,r.a.createElement(se.a,{control:r.a.createElement(ue.a,{checked:t,onChange:a,"aria-label":"lofin switch"}),label:t?"Logout":"Login"}))},pe=(Object(l.compose)(R.g,Object(u.b)((function(e){return{isAuthenticated:Boolean(e.auth.token)}})))((function(e){var t=q(),a=Object(n.useState)({left:!1}),o=Object(P.a)(a,2),c=o[0],l=o[1],i=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&l(Object(E.a)({},c,Object(T.a)({},e,t)))}},s=Object(n.useState)(!1),u=Object(P.a)(s,2),m=u[0],p=u[1],d=Object(n.useState)(null),b=Object(P.a)(d,2),h=b[0],g=b[1],v=e.isAuthenticated?[{to:"/logout",label:"Logout"}]:[{to:"/sign-in",label:"Sign In"},{to:"/sign-up",label:"Sign Up"}],y=function(){e.isAuthenticated||g(null)},k=r.a.createElement(L.a,{id:"mobile-menu",anchorEl:h,keepMounted:!0,open:Boolean(h),onClose:y,className:t.mobileMenu},v.map((function(e){return r.a.createElement(M.a,{key:e.label},r.a.createElement(f.b,{to:e.to,onClick:y},e.label))})));return r.a.createElement("div",{className:t.root},r.a.createElement(I.a,null,r.a.createElement(B.a,null,r.a.createElement(D.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:i("left",!0)},r.a.createElement(U.a,null)),r.a.createElement(A.a,{variant:"h6",className:t.title},"Quick Shop"),r.a.createElement(le,{open:c.left,toggleDrawer:i}),r.a.createElement("div",{className:t.sectionDeskTop},r.a.createElement(me,{signIn:m,handleChange:function(t){m?e.history.push("/"):e.history.push("/sign-in"),p(t.target.checked)}}),r.a.createElement(f.b,{to:"/sign-up",className:t.linkSignUp},"Sign Up")),r.a.createElement("div",{className:t.sectionMobile},r.a.createElement(D.a,{"aria-label":"more","aria-controls":"mobile-menu","aria-haspopup":"true",onClick:function(e){return g(e.currentTarget)}},r.a.createElement(W.a,null))))),k)})),a(177)),de=a(193),fe=a(101),Ee=a(178),be=a(46),he=a.n(be),ge=a(59),ve=a.n(ge),ye=(a(67),a(176)),ke=Object(ye.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"#63bdf1",position:"fixed",left:0,right:0},form:{display:"flex",flexDirection:"column",background:"white",padding:25,borderRadius:5,minWidth:250},header:{marginBottom:20,"& h4":{fontWeight:"bold"}},formControl:{display:"flex",alignItems:"center",marginBottom:10,"& svg":{marginTop:20,marginRight:10,opacity:.5}},button:{marginTop:30},recovery:{marginTop:10}}})),Oe=a(13),Se=a.n(Oe),je=a(22),xe="https://my-project-1559841200510.firebaseio.com/phones/.json",_e="https://my-project-1559841200510.firebaseio.com/categories/.json",Ce="AIzaSyCpUApD9K5SMQxiiDCLUIvnbclYf1yiyVc",we="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat(Ce),Ne="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat(Ce),Te=function(){var e=Object(je.a)(Se.a.mark((function e(t,a,n){var r,o,c,l,i;return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n?Ne:we,o={email:t,password:a,returnSecureToken:!0},e.next=4,fetch(r,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/josn"}});case 4:return c=e.sent,e.next=7,c.json();case 7:if(l=e.sent,console.log("TCL: authApi!!! -> data",l),i=new Date((new Date).getTime()+5*l.expiresIn),localStorage.setItem("token",l.idToken),localStorage.setItem("user",l.localId),localStorage.setItem("expirationDate",i),!l.error){e.next=15;break}return e.abrupt("return",l);case 15:return e.abrupt("return",{idToken:l.idToken,expiresIn:l.expiresIn});case 16:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),Pe=function(){var e=Object(je.a)(Se.a.mark((function e(t){var a,n;return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",Object.values(n)[0]);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ie=function(){var e=Object(je.a)(Se.a.mark((function e(){return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Pe(xe);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Be=function(){var e=Object(je.a)(Se.a.mark((function e(){return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Pe(xe);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(je.a)(Se.a.mark((function e(){return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Pe(_e);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),De=function(){var e=Object(je.a)(Se.a.mark((function e(t){var a;return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Pe(xe);case 2:return a=e.sent,e.abrupt("return",a.find((function(e){return e.id===t})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),He=function(e,t,a){return function(){var n=Object(je.a)(Se.a.mark((function n(r){var o;return Se.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:"AUTH_REQUEST"}),n.prev=1,n.next=4,Te(e,t,a);case 4:(o=n.sent).error&&alert(o.error.message),r(Ue(o.idToken)),r(Re(5*o.expiresIn)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),r({type:"AUTH_FAILURE",payload:n.t0,error:!0});case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}()},Ue=function(e){return{type:"AUTH_SUCCESS",payload:e}},Re=function(e){return function(t){var a=setTimeout((function(){t(Le()),clearTimeout(a)}),e)}},Le=function(){return localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}},Me=function(e,t,a){if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),t.email&&(n=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.toString().toLowerCase())&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.samePassword&&(n=e===a&&n),n},Fe=function(e,t){return e.phones.find((function(e){return e.id===t}))},We=function(e,t){var a=t.match.params.id||void 0;return e.phonesPage.ids.map((function(t){return Fe(e,t)})).filter((function(t){return t.name.toLowerCase().indexOf(e.phonesPage.value.toLowerCase())>-1})).filter((function(e){return void 0===a||a===e.categoryId}))},ze=function(e){return e.basket.length},qe=function(e){return e.basket.map((function(t){return Fe(e,t)})).map((function(e){return e.price})).reduce((function(e,t){return e+t}),0)},Ge=function(e){var t=Object(h.a)(new Set(e.basket));return t.map((function(t){return Fe(e,t)})).map((function(t){return Object(E.a)({},t,{count:(a=t.id,e.basket.filter((function(e){return e===a})).length)});var a}))},Ke={auth:He},Qe=Object(u.b)(null,Ke)((function(e){var t=e.auth,a=ke(),o=Object(n.useState)({email:{type:"email",label:"Email",value:"",valid:!1,touched:!1,errorMessage:"Enter correct email.",validation:{required:!0,email:!0}},password:{type:"password",label:"Password",value:"",valid:!1,touched:!1,errorMessage:"At least 6 characters.",validation:{required:!0,minLength:6}}}),c=Object(P.a)(o,2),l=c[0],i=c[1],s=function(e){return function(t){var a=Object(E.a)({},l),n=a[e];n.value=t.target.value,n.touched=!0,n.valid=Me(n.value,n.validation),i(a)}},u=r.a.createElement("div",{className:a.header},r.a.createElement(A.a,{variant:"h4",color:"primary"},"Sign In"),r.a.createElement(A.a,{variant:"h4",color:"secondary"},"Sign Up"));return r.a.createElement("div",{className:a.root},r.a.createElement(fe.a,{elevation:3},r.a.createElement("form",{className:a.form},u,Object.keys(l).map((function(e,t){var n=l[e],o=!n.valid&&n.touched,c=o?n.errorMessage||"Incorrect entry.":"",i=null;switch(e){case"email":i=r.a.createElement(he.a,{fontSize:"small"});break;case"password":i=r.a.createElement(ve.a,{fontSize:"small"});break;default:i=null}return r.a.createElement(pe.a,{container:!0,key:t,className:a.formControl},r.a.createElement(pe.a,{item:!0},i),r.a.createElement(pe.a,{item:!0},r.a.createElement(de.a,{id:e+t,type:n.type,label:n.label,value:n.value,error:o,helperText:c,className:a.textField,onChange:s(e)})))})),r.a.createElement(f.b,{to:"/recovery",className:"form__link"},"Forgot password?"),r.a.createElement(Ee.a,{variant:"contained",color:"primary",className:a.button,onClick:function(){return t(l.email.value,l.password.value,!0)}},"Sign In"),r.a.createElement(f.b,{to:"/sign-in",className:"form__link form__link_policy"},"Privacy Policy"),r.a.createElement(f.b,{to:"/",className:"form__link form__link_cancel"},"Cancel"))))})),Ye=a(92),$e=a.n(Ye),Je={auth:He},Ve=Object(u.b)(null,Je)((function(e){var t=e.auth,a=ke(),o=Object(n.useState)({email:{type:"email",label:"Email",value:"",valid:!1,touched:!1,errorMessage:"Enter correct email.",validation:{required:!0,email:!0}},password:{type:"password",label:"Password",value:"",valid:!1,touched:!1,errorMessage:"At least 6 characters.",validation:{required:!0,minLength:6}},verifyPassword:{type:"password",label:"Verify Password",value:"",valid:!1,touched:!1,errorMessage:"Enter correct password.",validation:{required:!0,samePassword:!0}}}),c=Object(P.a)(o,2),l=c[0],i=c[1],s=function(e){return function(t){var a=Object(E.a)({},l),n=a[e];n.value=t.target.value,n.touched=!0,n.valid=Me(n.value,n.validation,l.password.value),i(a)}},u=r.a.createElement("div",{className:a.header},r.a.createElement(A.a,{variant:"h4",color:"secondary"},"Sign In"),r.a.createElement(A.a,{variant:"h4",color:"primary"},"Sign Up"));return r.a.createElement("div",{className:a.root},r.a.createElement(fe.a,{elevation:3},r.a.createElement("form",{className:a.form},u,Object.keys(l).map((function(e,t){var n=l[e],o=!n.valid&&n.touched,c=o?n.errorMessage||"Incorrect entry.":"",i=null;switch(e){case"email":i=r.a.createElement(he.a,{fontSize:"small"});break;case"password":i=r.a.createElement(ve.a,{fontSize:"small"});break;case"verifyPassword":i=r.a.createElement($e.a,{fontSize:"small"});break;default:i=null}return r.a.createElement(pe.a,{container:!0,key:t,className:a.formControl},r.a.createElement(pe.a,{item:!0},i),r.a.createElement(pe.a,{item:!0},r.a.createElement(de.a,{id:e+t,type:n.type,label:n.label,value:n.value,error:o,helperText:c,className:a.textField,onChange:s(e)})))})),r.a.createElement(Ee.a,{variant:"contained",color:"primary",className:a.button,onClick:function(){return t(l.email.value,l.password.value,!1)}},"Sign Up"),r.a.createElement(f.b,{to:"/sign-up",className:"form__link form__link_policy"},"Privacy Policy"),r.a.createElement(f.b,{to:"/",className:"form__link form__link_cancel"},"Cancel"))))})),Ze=function(){var e=ke(),t=Object(n.useState)({email:{type:"email",label:"Email",value:"",valid:!1,touched:!1,errorMessage:"Enter correct email.",validation:{required:!0,email:!0}}}),a=Object(P.a)(t,2),o=a[0],c=a[1],l=function(e){return function(t){var a=Object(E.a)({},o),n=a[e];n.value=t.target.value,n.touched=!0,n.valid=Me(n.value,n.validation),c(a)}};return r.a.createElement("div",{className:e.root},r.a.createElement(fe.a,{elevation:3},r.a.createElement("form",{className:e.form},r.a.createElement("div",{className:e.header},r.a.createElement(A.a,{variant:"h4",color:"primary"},"Recovery")),Object.keys(o).map((function(t,a){var n=o[t],c=!n.valid&&n.touched,i=c?n.errorMessage||"Incorrect entry.":"";return r.a.createElement(pe.a,{container:!0,className:e.formControl},r.a.createElement(pe.a,{item:!0},r.a.createElement(he.a,{fontSize:"small"})),r.a.createElement(pe.a,{item:!0},r.a.createElement(de.a,{key:a,id:t+a,type:n.type,label:n.label,value:n.value,error:c,helperText:i,className:e.textField,onChange:l(t)})))})),r.a.createElement(Ee.a,{variant:"contained",color:"primary",className:e.recovery},"Recovery"),r.a.createElement(f.b,{to:"/",className:"form__link form__link_cancel"},"Cancel"))))},Xe=Object(u.b)(null,(function(e){return{logout:function(){return e(Le())}}}))((function(e){var t=e.logout;return Object(n.useEffect)((function(){t()})),r.a.createElement(R.a,{to:"/"})})),et=Object(z.a)((function(e){var t;return{root:(t={marginTop:20},Object(T.a)(t,e.breakpoints.up("sm"),{marginTop:30}),Object(T.a)(t,e.breakpoints.up("lg"),{marginTop:35}),t),"& .MuiGrid-spacing-xs-4":{},sidebar:Object(T.a)({display:"block"},e.breakpoints.down("lg"),{marginBottom:30}),card:Object(T.a)({},e.breakpoints.down("xs"),{margin:"0 auto"}),loadMore:{display:"flex",justifyContent:"flex-end",width:"100%",margin:"30px 0 50px"}}})),tt=a(179),at=a(180),nt=a(183),rt=a(182),ot=a(181),ct=Object(z.a)((function(e){return{root:{marginTop:95},title:{display:"flex",justifyContent:"space-between",alignItems:"baseline","& a":{color:"#007bff",textDecoration:"none","&:hover":{textDecoration:"underline"}},"& span":{fontSize:"1.2rem",fontWeight:"bold"}},link:{color:"#0277bd",textDecoration:"none"}}})),lt=function(e){return function(t){t({type:"ADD_PHONE_TO_BASKET",payload:e})}},it={addPhoneToBasket:lt},st=Object(u.b)(null,it)((function(e){var t,a=e.phone,n=e.addPhoneToBasket,o=ct(),c="".concat(a.description.slice(0,61),"...");return r.a.createElement(tt.a,{raised:!0},r.a.createElement(at.a,null,r.a.createElement(ot.a,{component:"img",alt:a.name,src:a.image}),r.a.createElement(rt.a,null,r.a.createElement(A.a,{gutterBottom:!0,variant:"h5",componnet:"h2",className:o.title},r.a.createElement(f.b,{to:"/phones/".concat(a.id)},a.name),r.a.createElement("span",null,"$",a.price)),r.a.createElement(A.a,{variant:"body2",color:"textSecondary",component:"p"},c))),r.a.createElement(nt.a,null,r.a.createElement(Ee.a,{color:"primary",onClick:(t=a.id,function(){return n(t)})},"Buy now!"),r.a.createElement(f.b,{to:"/phones/".concat(a.id),className:o.link},r.a.createElement(Ee.a,{color:"primary"},"Learn More"))))})),ut=Object(ye.a)({link:{textDecoration:"none",width:"100%","& button":{textTransform:"none"}}}),mt=Object(u.b)((function(e){return{totalBasketCount:ze(e),totalBasketPrice:qe(e)}}))((function(e){var t=e.totalBasketCount,a=e.totalBasketPrice,n=ut();return r.a.createElement(f.b,{to:"/basket",className:n.link},r.a.createElement(Ee.a,{variant:"contained",color:"primary",fullWidth:!0},t," item(s) - $ ",a))})),pt=a(93),dt=a.n(pt),ft=Object(ye.a)({root:{padding:"60px 25px",background:"#eee",marginBottom:30,"& form":{display:"flex",position:"relative","& > div":{width:"100%"}},"& input":{background:"white"},"& button":{position:"absolute",top:5,right:5}}}),Et={searchPhone:function(e){return function(t){t({type:"SEARCH_PHONE",payload:e})}}},bt=Object(u.b)(null,Et)((function(e){var t=e.searchPhone,a=ft(),o=Object(n.useState)(""),c=Object(P.a)(o,2),l=c[0],i=c[1];return r.a.createElement("div",{className:a.root},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(l)}},r.a.createElement(de.a,{id:"search",variant:"outlined",label:"Search",onChange:function(e){return i(e.target.value)}}),r.a.createElement(D.a,{type:"submit","aria-label":"search"},r.a.createElement(dt.a,null))))})),ht=Object(ye.a)((function(e){return{root:{padding:"50px 25px 60px",background:"#eee","& nav":{background:"white",padding:0}},category:{padding:0,"& a":{width:"100%",padding:"8px 16px",textDecoration:"none",color:"inherit"},"& span":{fontSize:"1.3rem"},"&.Mui-selected":{background:[e.palette.primary.main],color:"white",trnasition:"0.3s","&:hover":{background:[e.palette.primary.main]}}}}})),gt=Object(R.g)((function(e){var t=e.categories,a=e.match,n=ht(),o=a.params.id||void 0;return r.a.createElement("div",{className:n.root},r.a.createElement(A.a,{gutterBottom:!0,variant:"h4"},"Brand"),r.a.createElement(K.a,{component:"nav"},r.a.createElement(Y.a,{button:!0,divider:!0,selected:void 0===o,className:n.category},r.a.createElement(f.b,{to:""},r.a.createElement(J.a,{primary:"All"}))),t.map((function(e){return r.a.createElement(Y.a,{button:!0,divider:!0,key:e.id,selected:e.id===o,className:n.category},r.a.createElement(f.b,{to:"/categories/".concat(e.id)},r.a.createElement(J.a,{primary:e.name})))}))))})),vt={fetchPhones:function(){return function(){var e=Object(je.a)(Se.a.mark((function e(t){var a;return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_PHONES_REQUEST"}),e.prev=1,e.next=4,Ie();case 4:a=e.sent,t({type:"FETCH_PHONES_SUCCESS",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"FETCH_PHONES_FAILURE",payload:e.t0,error:!0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},loadMorePhones:function(){return function(){var e=Object(je.a)(Se.a.mark((function e(t){var a;return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOAD_MORE_PHONES_REQUEST"}),e.prev=1,e.next=4,Be();case 4:a=e.sent,t({type:"LOAD_MORE_PHONES_SUCCESS",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"LOAD_MORE_PHONES_FAILURE",payload:e.t0,error:!0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},fetchCategories:function(){return function(){var e=Object(je.a)(Se.a.mark((function e(t){var a;return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_CATEGORIES_REQUEST"}),e.prev=1,e.next=4,Ae();case 4:a=e.sent,t({type:"FETCH_CATEGORIES_SUCCESS",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"FETCH_CATEGORIES_FAILURE",payload:e.t0,error:!0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}},yt=Object(u.b)((function(e,t){return{phones:We(e,t),categories:e.categories}}),vt)((function(e){var t=e.fetchPhones,a=e.phones,o=e.loadMorePhones,c=e.fetchCategories,l=e.categories,i=et();Object(n.useEffect)((function(){t(),c()}),[t,c]);return r.a.createElement("div",{className:i.root},r.a.createElement(pe.a,{container:!0,justify:"space-between"},r.a.createElement(pe.a,{container:!0,item:!0,md:4,lg:3,className:i.sidebar},r.a.createElement(mt,null),r.a.createElement(bt,null),r.a.createElement(gt,{categories:l})),r.a.createElement(n.Fragment,null,r.a.createElement(pe.a,{container:!0,item:!0,md:8,lg:9,spacing:4,className:i.content},a.map((function(e,t){return function(e,t){return r.a.createElement(pe.a,{item:!0,xs:10,sm:6,md:6,lg:4,key:t,className:i.card},r.a.createElement(st,{phone:e}))}(e,t)}))),r.a.createElement("div",{className:i.loadMore},r.a.createElement(Ee.a,{variant:"contained",color:"primary",onClick:function(){return o()}},"Load More")))))})),kt=Object(z.a)((function(e){var t;return{root:(t={marginTop:20},Object(T.a)(t,e.breakpoints.up("sm"),{marginTop:35}),Object(T.a)(t,e.breakpoints.up("lg"),{marginTop:45}),t),info:{marginBottom:20},image:{maxWidth:300,marginBottom:30},title:{display:"flex",justifyContent:"space-between",alignItems:"baseline","& span":{fontSize:"1.3rem",fontWeight:"bold"}},field:{display:"flex",alignItems:"center",padding:"10px 0",borderBottom:"1px dotted #ccc","& h6":{marginRight:10}},sidebarTitle:{marginTop:20},backToStore:{margin:"15px 0",display:"block",textDecoration:"none","& button":{color:"white",background:e.palette.info.main,trnasition:"0.3s","&:hover":{background:e.palette.info.dark}}},addToBasket:{color:"white",background:e.palette.success.main,"&:hover":{background:e.palette.success.dark}}}})),Ot={fetchPhoneById:function(e){return function(){var t=Object(je.a)(Se.a.mark((function t(a){var n;return Se.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"FETCH_PHONE_BY_ID_REQUEST"}),t.prev=1,t.next=4,De(e);case 4:n=t.sent,a({type:"FETCH_PHONE_BY_ID_SUCCESS",payload:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:"FETCH_PHONE_BY_ID_FAILURE",payload:t.t0,error:!0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},addPhoneToBasket:lt},St=Object(u.b)((function(e){return{phone:Fe(e,e.phonePage.id)}}),Ot)((function(e){var t=e.fetchPhoneById,a=e.match,o=e.phone,c=e.addPhoneToBasket,l=kt();Object(n.useEffect)((function(){t(a.params.id)}));return r.a.createElement("div",{className:l.root},r.a.createElement(pe.a,{container:!0,spacing:5},r.a.createElement(pe.a,{item:!0,xs:12,md:8,lg:9,className:l.contect},o&&r.a.createElement(tt.a,{raised:!0},r.a.createElement(rt.a,null,r.a.createElement(pe.a,{container:!0,className:l.info},r.a.createElement(pe.a,{item:!0,xs:12,md:6},r.a.createElement(ot.a,{component:"img",src:o.image,alt:o.name,className:l.image})),r.a.createElement(pe.a,{item:!0,xs:12,md:6},Object.keys(o).filter((function(e){return"cpu"===e||"size"===e||"weight"===e||"display"===e||"memory"===e||"battery"===e})).map((function(e){return r.a.createElement("div",{className:l.field,key:e},r.a.createElement(A.a,{variant:"h6"},e),r.a.createElement(A.a,{variant:"body2"},o[e]))})))),r.a.createElement("div",{className:l.title},r.a.createElement(A.a,{gutterBottom:!0,variant:"h4"},o.name),r.a.createElement("span",null,"$",o.price)),r.a.createElement(A.a,{variant:"body1"},o.description)))),r.a.createElement(pe.a,{item:!0,xs:12,md:4,lg:3,className:l.sidebar},o&&function(){return r.a.createElement("div",null,r.a.createElement(A.a,{gutterBottom:!0,variant:"h5"},"Quick Shop"),r.a.createElement(mt,null),r.a.createElement(A.a,{variant:"h4",className:l.sidebarTitle},o.name),r.a.createElement(A.a,{variant:"h4"},"$",o.price),r.a.createElement(f.b,{to:"/",className:l.backToStore},r.a.createElement(Ee.a,{variant:"contained",fullWidth:!0},"Back to Store")),r.a.createElement(Ee.a,{variant:"contained",className:l.addToBasket,fullWidth:!0,onClick:(e=o.id,function(){return c(e)})},"Add to Cart"));var e}())))})),jt=a(97),xt=a.n(jt),_t=a(95),Ct=a.n(_t),wt=a(96),Nt=a.n(wt),Tt=Object(ye.a)((function(e){var t;return{root:(t={marginTop:20},Object(T.a)(t,e.breakpoints.up("sm"),{marginTop:35}),Object(T.a)(t,e.breakpoints.up("lg"),{marginTop:45}),Object(T.a)(t,"& table tr:nth-of-type(even)",{background:"#eee"}),Object(T.a)(t,"& table td",{padding:5,border:"1px solid #ccc"}),Object(T.a)(t,"& table td:last-child",{width:"12%"}),t),image:{width:"12%","& img":{maxWidth:100}},deletePhone:{"&:hover":{color:[e.palette.error.main]}},totalPrice:{display:"flex",justifyContent:"flex-end",margin:"15px 0","& b":{marginRight:5}},continueShopping:{display:"block",textDecoration:"none",borderRadius:5,marginBottom:10,background:[e.palette.info.main],"&:hover":{background:[e.palette.info.dark]},"& span":{color:"white"}},cleanBasket:{background:[e.palette.error.main],"&:hover":{background:[e.palette.error.dark]},color:"white",marginBottom:10},checkout:{background:[e.palette.success.main],"&:hover":{background:[e.palette.success.dark]},color:"white"}}})),Pt=a(184),It=a(185),Bt=a(186),At=a(187),Dt=a(188),Ht=a(189),Ut=a(94),Rt=a.n(Ut),Lt=function(e){var t=e.phones,a=e.handleRemovePhone,n=Tt();return r.a.createElement(Pt.a,{component:fe.a},r.a.createElement(It.a,{"aria-label":"basket table"},r.a.createElement(Bt.a,null),r.a.createElement(At.a,null,t.map((function(e){return r.a.createElement(Dt.a,{key:e.name},r.a.createElement(Ht.a,{align:"center",className:n.image},r.a.createElement("img",{src:e.image,alt:e.name})),r.a.createElement(Ht.a,{align:"center"},e.name),r.a.createElement(Ht.a,{align:"center"},"$",e.price),r.a.createElement(Ht.a,{align:"center"},e.count),r.a.createElement(Ht.a,{align:"center"},r.a.createElement(D.a,{className:n.deletePhone,onClick:function(){return a(e.id)}},r.a.createElement(Rt.a,null))))})))))},Mt={handleRemovePhone:function(e){return function(t){t({type:"DELETE_PHONE_FROM_BASKET",payload:e})}},handleCleanBasket:function(){return function(e){e({type:"CLEAN_BASKET"})}},handleCheckout:function(e){return function(){return function(){return alert(JSON.stringify(e))}}}},Ft=Object(u.b)((function(e){return{phones:Ge(e),totalBasketPrice:qe(e)}}),Mt)((function(e){var t=e.phones,a=e.totalBasketPrice,o=e.handleRemovePhone,c=e.handleCleanBasket,l=e.handleCheckout,i=Tt(),s=r.a.createElement(A.a,{variant:"h4"},"Your shopping cart is empty."),u=r.a.createElement("div",{className:i.totalPrice},r.a.createElement("b",null,"Total:"),"$",a),m=r.a.createElement(n.Fragment,null,r.a.createElement(Ee.a,{fullWidth:!0,startIcon:r.a.createElement(Ct.a,null),className:i.cleanBasket,onClick:c},"Clean Basket"),r.a.createElement(Ee.a,{fullWidth:!0,startIcon:r.a.createElement(Nt.a,null),className:i.checkout,onClick:l(t)},"Checkout"));return r.a.createElement("div",{className:i.root},r.a.createElement(pe.a,{container:!0,spacing:4},r.a.createElement(pe.a,{item:!0,xs:12,md:8,lg:9},0===t.length&&s,r.a.createElement(Lt,{phones:t,handleRemovePhone:o}),t.length>0&&u),r.a.createElement(pe.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(f.b,{to:"/",className:i.continueShopping},r.a.createElement(Ee.a,{fullWidth:!0,startIcon:r.a.createElement(xt.a,null)},"Continue shopping!")),t.length>0&&m)))})),Wt={autoLogin:function(){return function(e){var t=localStorage.getItem("token");if(t){var a=new Date(localStorage.getItem("expirationDate"));if(a<=new Date)e(Le());else{var n=a.getTime()-(new Date).getTime();e(Ue(t)),e(Re(n))}}else e(Le())}}},zt=Object(u.b)((function(e){return{isAuthenticated:!!e.auth.token}}),Wt)((function(e){var t=e.isAuthenticated,a=e.autoLogin;return Object(n.useEffect)((function(){a()})),t?r.a.createElement(R.d,null,r.a.createElement(R.b,{path:"/logout",component:Xe}),r.a.createElement(R.b,{exact:!0,path:"/",component:yt}),r.a.createElement(R.b,{path:"/phones/:id",component:St}),r.a.createElement(R.b,{path:"/categories/:id",component:yt}),r.a.createElement(R.b,{path:"/basket",component:Ft}),r.a.createElement(R.a,{to:"/"})):r.a.createElement(R.d,null,r.a.createElement(R.b,{path:"/sign-in",component:Qe}),r.a.createElement(R.b,{path:"/sign-up",component:Ve}),r.a.createElement(R.b,{path:"/recovery",component:Ze}),r.a.createElement(R.b,{exact:!0,path:"/",component:yt}),r.a.createElement(R.b,{path:"/phones/:id",component:St}),r.a.createElement(R.b,{path:"/categories/:id",component:yt}),r.a.createElement(R.b,{path:"/basket",component:Ft}),r.a.createElement(R.a,{to:"/"}))})),qt=[i.a],Gt=Object(l.createStore)(S,Object(s.composeWithDevTools)(l.applyMiddleware.apply(void 0,qt)));c.a.render(r.a.createElement(u.a,{store:Gt},r.a.createElement(f.a,null,r.a.createElement(m.a,{theme:N},r.a.createElement(p.a,null),r.a.createElement(d.a,{style:{minWidth:320},fixed:!0},r.a.createElement(zt,null))))),document.getElementById("root"))},67:function(e,t,a){}},[[110,1,2]]]);
//# sourceMappingURL=main.d02b3898.chunk.js.map