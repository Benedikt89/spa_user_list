(this.webpackJsonpspa_user_list=this.webpackJsonpspa_user_list||[]).push([[0],{142:function(e,t,r){},143:function(e,t,r){},166:function(e,t,r){},173:function(e,t,r){},242:function(e,t,r){},244:function(e,t,r){"use strict";r.r(t);var n=r(0),s=r.n(n),a=r(32),c=r.n(a),u=(r(166),r(87)),i=r(42),o=r(80),l=r(145),d=r(65),j=r(24),f=r(27),b=r.n(f),p=r(40),h="app/SET_IS_FETCHING",O="app/SET_ERROR",x=function(e,t){return{type:h,key:e,status:t}},v=function(e,t){return{type:O,key:e,message:t}},m={isFetching:{},error:{}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:if(e.isFetching[t.key]&&!t.status){var r=Object(j.a)({},e);return delete r.isFetching[t.key],r}return!e.isFetching[t.key]&&t.status?Object(j.a)(Object(j.a)({},e),{},{isFetching:Object(j.a)(Object(j.a)({},e.isFetching),{},Object(d.a)({},t.key,t.status))}):e;case O:if(e.error[t.key]&&!t.message){var n=Object(j.a)({},e);return delete n.error[t.key],n}return t.message?Object(j.a)(Object(j.a)({},e),{},{error:Object(j.a)(Object(j.a)({},e.error),{},Object(d.a)({},t.key,{message:t.message}))}):e;default:return e}},y=r(157),k=r(127);r(172),k.a.initializeApp({apiKey:"AIzaSyCgj4ixMcBf3GkAKxEgc9nl3io8g0nVGEI",authDomain:"testing-fb-server.firebaseapp.com",projectId:"testing-fb-server"});var w=k.a.firestore(),I={getUsers:function(){var e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,w.collection("users").get();case 3:return e.sent.forEach((function(e){var r=e.id,n=e.data();t.push(Object(j.a)(Object(j.a)({},n),{},{id:r}))})),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),addUser:function(e){return Object(p.a)(b.a.mark((function t(){var r,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={name:e.name,phone:e.phone,surname:"surname"},t.next=3,w.collection("users").add(r);case 3:if(!(n=t.sent)||!n.id){t.next=6;break}return t.abrupt("return",Object(j.a)(Object(j.a)({},r),{},{id:n.id}));case 6:case"end":return t.stop()}}),t)})))()},updateUser:function(e){return Object(p.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.collection("users").doc(e.id).set(e);case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})))()},deleteUser:function(e){return Object(p.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.collection("users").doc(e).delete();case 2:return t.abrupt("return",!0);case 3:case"end":return t.stop()}}),t)})))()}},E=function(e,t){return!!e.app.isFetching[t]},S=function(e,t){return e.app.error[t]?e.app.error[t]:null},U=r(156);function C(e,t){return function(){var r=Object(p.a)(b.a.mark((function r(n,s){var a,c,u,o;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,E(s(),e)){r.next=8;break}return Object(i.b)((function(){n(v(e,null)),n(x(e,!0))})),r.next=6,t(n,s);case 6:a=r.sent,Object(i.b)((function(){n(x(e,!1)),a||n(v(e,"Nothing Found"))}));case 8:r.next=16;break;case 10:r.prev=10,r.t0=r.catch(0),console.log(r.t0),o=(null===(c=r.t0.data)||void 0===c?void 0:c.message)?null===(u=r.t0.data)||void 0===u?void 0:u.message:"Something went wrong. Try again later.",U.b.error(o),Object(i.b)((function(){n(v(e,o)),n(x(e,!1))}));case 16:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(e,t){return r.apply(this,arguments)}}()}var F="users/SET_FETCHED_USERS",N="users/SET_EDITING_USER",_="users/UPDATE_USER_SUCCESS",T="users/DELETE_USER_SUCCESS",P=function(e){return{type:T,userId:e}},R="_NEW_USER",D={id:R,name:"",surname:"",phone:""},M={users:Object(d.a)({},R,D),usersIds:[],editingUserId:null},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:var r=Object(j.a)({},e),n=[];return t.data.forEach((function(e){r.users[e.id]=e,n.push(e.id)})),r.usersIds=n,r;case _:var s=Object(j.a)({},e);return e.users[t.data.id]?s.users[t.data.id]=Object(j.a)(Object(j.a)({},s.users[t.data.id]),t.data):(s.usersIds=[].concat(Object(y.a)(s.usersIds),[t.data.id]),s.users[t.data.id]=t.data),e.editingUserId&&(s.editingUserId=null),s;case T:var a=Object(j.a)({},e);return delete a.users[t.userId],a.usersIds=a.usersIds.filter((function(e){return e!==t.userId})),a;case N:return Object(j.a)(Object(j.a)({},e),{},{editingUserId:t.data});default:return e}},B=Object(o.c)({app:g,users:A}),G=Object(o.d)(B,Object(o.a)(l.a)),L=r(103),V=r(104),W=r(108),q=r(107),z=r(22),H=r(161),J=r(251),K=r(252),X=function(e,t){return e.users.users[t]?e.users.users[t]:null},Y=function(e,t){return e.users.editingUserId===t},$=r(158),Q=r(248),Z=r(249),ee=r(250),te=r(82),re=(r(173),r(8)),ne=function(e){var t=e.user,r=Object(i.d)(),n=Object(i.e)((function(e){return{loading:E(e,"user")}})).loading,s="86",a=Object(re.jsx)(Q.a.Item,{name:"prefix",noStyle:!0,children:Object(re.jsxs)(Z.a,{style:{width:70},defaultValue:s,children:[Object(re.jsx)(Z.a.Option,{value:"86",children:"+86"}),Object(re.jsx)(Z.a.Option,{value:"87",children:"+87"})]})}),c=t?Object(j.a)(Object(j.a)({},t),function(e){var t=e.split("-"),r=Object($.a)(t),n=r[0],a=r.slice(1),c=3===n.length;return c||a.unshift(n),{prefix:c?n:s,phone:a.join("")}}(t.phone)):{};return Object(re.jsxs)(Q.a,{className:"row",name:"user",initialValues:c,onFinish:function(e){r(function(e){return C("user",function(){var t=Object(p.a)(b.a.mark((function t(r){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.id!==R){t.next=6;break}return t.next=3,I.addUser(e);case 3:n=t.sent,t.next=9;break;case 6:return t.next=8,I.updateUser(e);case 8:n=t.sent;case 9:if(!n){t.next=12;break}return r({type:_,data:n}),t.abrupt("return",!0);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}(Object(j.a)(Object(j.a)({},e),{},{id:t?t.id:R,phone:"+".concat(e.prefix?e.prefix:s,"-").concat(e.phone)}))),console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(re.jsx)(Q.a.Item,{name:"name",rules:[{required:!0,message:"Please input your username!"}],children:Object(re.jsx)(ee.a,{placeholder:"Username"})}),Object(re.jsx)(Q.a.Item,{name:"phone",rules:[{required:!0,message:"Please input your phone!"},{pattern:/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,message:"Please enter a valid Phone *** *** ****"}],children:Object(re.jsx)(ee.a,{addonBefore:a,style:{width:"100%"},placeholder:"Phone"})}),Object(re.jsx)(Q.a.Item,{children:Object(re.jsx)(te.a,{type:"primary",htmlType:"submit",loading:n,children:"Submit"})})]})},se=(r(142),function(e){var t=e.userId,r=Object(i.e)((function(e){return{user:X(e,t),isEditing:Y(e,t)}})),s=r.user,a=r.isEditing,c=Object(i.d)(),u=Object(n.useCallback)((function(){c({type:N,data:a?null:t})}),[a]),o=Object(n.useCallback)((function(){c(function(e){return C("user",function(){var t=Object(p.a)(b.a.mark((function t(r){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.deleteUser(e);case 2:if(!t.sent){t.next=6;break}return r(P(e)),t.abrupt("return",!0);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}(t))}),[a]);return s?a?Object(re.jsxs)("div",{className:"user-item-wrapper",children:[Object(re.jsx)(ne,{user:s}),Object(re.jsx)(H.a,{onClick:u,className:"fixed-delete-button"})]}):Object(re.jsxs)("div",{className:"user-item-wrapper",children:[Object(re.jsx)(J.a,{className:"user-info-icon"}),Object(re.jsxs)("div",{className:"row user-info",onDoubleClick:u,children:[Object(re.jsxs)("span",{children:[Object(re.jsx)("small",{style:{margin:"0 1rem"},children:"Name:"}),s.name]}),Object(re.jsxs)("span",{children:[Object(re.jsx)("small",{style:{margin:"0 1rem"},children:"Phone:"}),s.phone]})]}),Object(re.jsx)(K.a,{style:{color:"#ff0000"},onClick:o,className:"fixed-delete-button"})]}):null}),ae=function(e){var t=e.userIds;return Object(re.jsxs)("div",{className:"user-list-page",children:[Object(re.jsxs)("div",{style:{padding:"20px"},children:[Object(re.jsx)("h2",{children:"Add new user."}),Object(re.jsx)(ne,{})]}),Object(re.jsx)("div",{className:"user-list-wrapper",children:t.map((function(e){return Object(re.jsx)(se,{userId:e})}))})]})},ce=r(247),ue=(r(242),function(e){Object(W.a)(r,e);var t=Object(q.a)(r);function r(){return Object(L.a)(this,r),t.apply(this,arguments)}return Object(V.a)(r,[{key:"render",value:function(){return Object(re.jsx)(ce.a,{className:"site-page-header-responsive",extra:[Object(re.jsx)(u.b,{to:"/users",children:Object(re.jsx)(te.a,{type:"text",style:{color:"#fff"},children:"Users"})},"1"),Object(re.jsx)(u.b,{to:"/stars",children:Object(re.jsx)(te.a,{type:"text",style:{color:"#fff"},children:"Stars"})},"1")],style:{backgroundColor:"#00334E"}})}}]),r}(n.Component)),ie=function(){var e=n.createRef(),t=n.createRef(),r=Object(n.useRef)(null),s=Object(n.useRef)(null),a=Object(n.useRef)(null),c=["red","blue","green","yellow","black"],u=[{x:0,y:0},{x:1,y:0},{x:.5,y:.5},{x:0,y:1},{x:1,y:1}],i=600;Object(n.useEffect)((function(){var e=function(e){return e*i+(.5===e?-25:e>0?-60:60)},t=c.map((function(t,r){var n=u[r],s=n.x,a=n.y;return function(e,t,r,n,s){var a=[],c=Math.PI/2*3,u=e,i=t,o=Math.PI/r;a.push({x:e,y:t-n});for(var l=0;l<r;l++)u=e+Math.cos(c)*n,i=t+Math.sin(c)*n,a.push({x:u,y:i}),c+=o,u=e+Math.cos(c)*s,i=t+Math.sin(c)*s,a.push({x:u,y:i}),c+=o;return a.push({x:e,y:t-n}),a}(e(s),e(a),5,50,30)}));a.current=t}),[]),Object(n.useEffect)((function(){if(e&&e.current){r.current=e.current.getContext("2d"),s.current=t.current.getContext("2d");var n=r.current;n.canvas.width=i,n.canvas.height=i,s.current.canvas.width=i,s.current.canvas.height=50,c.forEach((function(e,t){d(a.current[t],c[t])})),o("white")}}),[]);var o=function(e){var t=s.current;t&&(t.rect(0,0,i,50),t.fillStyle=e,t.fill(),t.lineWidth=5,t.strokeStyle="grey",t.stroke())},l=function(e){var t=new Path2D;return e.forEach((function(e,r){var n=e.x,s=e.y;0===r?t.moveTo(n,s):t.lineTo(n,s)})),t.closePath(),t},d=function(e,t){var n=r.current,s=l(e);n.lineWidth=5,n.strokeStyle=t,n.stroke(s),n.fillStyle=t,n.fill(s)};return Object(re.jsxs)("div",{className:"col",children:[Object(re.jsx)("canvas",{ref:e,onClick:function(t){if(a&&e.current){var n={x:t.pageX-t.target.offsetLeft,y:t.clientY-t.target.offsetTop},s=r.current,u="white";a.current.forEach((function(e,t){var r=l(e);s.isPointInPath(r,n.x,n.y)&&(u=c[t])})),o(u)}}}),Object(re.jsx)("canvas",{ref:t})]})},oe=function(e){Object(W.a)(r,e);var t=Object(q.a)(r);function r(e){var n;return Object(L.a)(this,r),(n=t.call(this,e)).state={mounted:!1},n}return Object(V.a)(r,[{key:"componentDidMount",value:function(){this.props.fetchUsers()}},{key:"render",value:function(){var e=this.props.usersIds;return Object(re.jsx)("div",{className:"main-wrapper",children:Object(re.jsxs)("main",{children:[Object(re.jsx)(ue,{}),Object(re.jsx)("div",{className:"content-wrapper",children:Object(re.jsxs)(z.d,{children:[Object(re.jsx)(z.b,{exact:!0,path:"/",render:function(){return Object(re.jsx)(z.a,{to:"/users"})}}),Object(re.jsx)(z.b,{path:"/users",component:function(){return Object(re.jsx)(ae,{userIds:e})}}),Object(re.jsx)(z.b,{path:"/stars",component:function(){return Object(re.jsx)(ie,{})}}),Object(re.jsx)(z.b,{path:"*",render:function(){return Object(re.jsx)("div",{children:"Error 404"})}})]})})]})})}}]),r}(n.Component),le=Object(i.c)((function(e){return{usersIds:e.users.usersIds,error:S(e,"fetchUsers"),isFetching:E(e,"fetchUsers")}}),{fetchUsers:function(){return C("fetchUsers",function(){var e=Object(p.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.getUsers();case 2:if(!(r=e.sent)){e.next=6;break}return t({type:F,data:r}),e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}})(oe),de=Object(z.g)(le);r(143);var je=function(){return Object(re.jsx)(u.a,{children:Object(re.jsx)(i.a,{store:G,children:Object(re.jsx)(de,{})})})},fe=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,253)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;r(e),n(e),s(e),a(e),c(e)}))};r(143),c.a.render(Object(re.jsx)(s.a.StrictMode,{children:Object(re.jsx)(je,{})}),document.getElementById("root")),fe()}},[[244,1,2]]]);
//# sourceMappingURL=main.0cb83e83.chunk.js.map