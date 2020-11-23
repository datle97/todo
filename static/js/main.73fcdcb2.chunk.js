(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{223:function(e,t,c){"use strict";c.r(t);var n=c(8),a=c(0),i=c(12),r=c.n(i),o=c(39),d=c(63),j=c(251),s=c(252),b=c(250),l=c(196),O=c(227),u=c(239),h=c(240),x=c(241),f="ADD_TODO",p="REMOVE_TODO",m="CHECK_TODO",g="SELECT_TODO",v="UNSELECT_TODO",k="EDIT_TODO",T=function(){return{type:v}},L=c(253),y=Object(l.a)((function(e){return{root:{paddingRight:0,display:"flex",alignItems:"center",margin:e.spacing(3,0)},input:{marginLeft:e.spacing(1),flex:1},divider:{height:28},button:{textTransform:"none",borderRadius:"0 4px 4px 0"}}})),w=function(){var e=y(),t=Object(a.useState)(""),c=Object(d.a)(t,2),i=c[0],r=c[1],j=Object(o.b)();return Object(n.jsxs)(O.a,{component:"form",className:e.root,onSubmit:function(e){if(e.preventDefault(),i){var t={id:Object(L.a)(),text:i,checked:!1};j(function(e){return{type:f,newTodo:e}}(t)),r("")}},children:[Object(n.jsx)(u.a,{className:e.input,autoFocus:!0,placeholder:"Enter new todo",value:i,onChange:function(e){r(e.target.value)}}),Object(n.jsx)(h.a,{className:e.divider,orientation:"vertical"}),Object(n.jsx)(x.a,{color:"primary",type:"submit",className:e.button,children:"Add"})]})},C=c(244),D=c(245),N=c(246),E=c(247),F=c(248),I=c(87),M=c(242),S=c(243),_=c(254),R=c(229),A=c(199),B=c.n(A),W=c(198),G=c.n(W),J=c(200),H=c.n(J),K=c(201),U=c.n(K),V=c(2),q=Object(l.a)((function(e){return{input:{marginLeft:e.spacing(1),flex:1},completed:{textDecoration:"line-through"}}})),z=function(e){var t=e.todo,c=q(),i=Object(a.useState)(""),r=Object(d.a)(i,2),j=r[0],s=r[1],b=Object(o.c)((function(e){return e.reducer})).editId,l=Object(o.b)();return Object(n.jsxs)(M.a,{children:[Object(n.jsx)(S.a,{padding:"checkbox",children:Object(n.jsx)(_.a,{color:"primary",checked:t.checked,onChange:function(){return l((e=t.id,{type:m,id:e}));var e}})}),b!==t.id?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(S.a,{align:"left",padding:"none",className:Object(V.a)(Object(I.a)({},c.completed,t.checked)),children:t.text}),Object(n.jsx)(S.a,{align:"right",padding:"checkbox",children:Object(n.jsx)(R.a,{onClick:function(){var e;s(t.text),l((e=t.id,{type:g,id:e}))},children:Object(n.jsx)(G.a,{})})}),Object(n.jsx)(S.a,{align:"right",padding:"checkbox",children:Object(n.jsx)(R.a,{onClick:function(){return l((e=t.id,{type:p,id:e}));var e},children:Object(n.jsx)(B.a,{color:"error"})})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(S.a,{align:"left",padding:"none",children:Object(n.jsx)("form",{id:"editForm",onSubmit:function(e){var c;e.preventDefault(),l((c=t.id,{type:k,id:c,newText:j})),l(T())},children:Object(n.jsx)(u.a,{className:c.input,value:j,autoFocus:!0,onFocus:function(e){e.target.select()},fullWidth:!0,onChange:function(e){s(e.target.value)}})})}),Object(n.jsx)(S.a,{align:"right",padding:"checkbox",children:Object(n.jsx)("div",{children:Object(n.jsx)(R.a,{type:"submit",form:"editForm",children:Object(n.jsx)(H.a,{})})})}),Object(n.jsx)(S.a,{align:"right",padding:"checkbox",children:Object(n.jsx)(R.a,{onClick:function(){return l(T())},children:Object(n.jsx)(U.a,{color:"error"})})})]})]})},P=Object(l.a)((function(e){return{toolbar:{paddingLeft:e.spacing(2)},title:{flexGrow:1}}})),Q=function(){var e=P(),t=Object(o.c)((function(e){return e.reducer})).todoList;return Object(n.jsxs)(O.a,{children:[Object(n.jsxs)(C.a,{variant:"dense",className:e.toolbar,children:[Object(n.jsx)(D.a,{className:e.title,children:"Todo List"}),Object(n.jsxs)(D.a,{children:["Completed: ",t.filter((function(e){return e.checked})).length]})]}),Object(n.jsx)(N.a,{children:Object(n.jsx)(E.a,{children:Object(n.jsx)(F.a,{children:t.map((function(e){return Object(n.jsx)(z,{todo:e},e.id)}))})})})]})},X=c(249),Y=c(202),Z=c.n(Y),$=c(203),ee=c.n($),te=Object(l.a)((function(e){return{title:{flexGrow:1},icon:{color:"#fff"}}})),ce=function(e){var t=e.darkMode,c=e.switchTheme,a=te();return Object(n.jsx)(X.a,{position:"static",children:Object(n.jsxs)(C.a,{component:b.a,maxWidth:"md",children:[Object(n.jsx)(D.a,{variant:"h4",className:a.title,children:"Todo App"}),Object(n.jsx)(R.a,{onClick:c,children:t?Object(n.jsx)(Z.a,{className:a.icon}):Object(n.jsx)(ee.a,{className:a.icon})})]})})},ne=c(18),ae=c(51).createMuiTheme,ie={overrides:{MuiTableRow:{root:{"&:last-child td":{borderBottom:0}}}}},re=ae(Object(ne.a)(Object(ne.a)({},ie),{},{palette:{type:"light"}})),oe=ae(Object(ne.a)(Object(ne.a)({},ie),{},{palette:{type:"dark",primary:{main:"#90caf9"},error:{main:"#f48fb1"}}})),de=function(){var e=Object(a.useState)(!0),t=Object(d.a)(e,2),c=t[0],i=t[1];return Object(n.jsxs)(j.a,{theme:c?oe:re,children:[Object(n.jsx)(s.a,{}),Object(n.jsx)(ce,{darkMode:c,switchTheme:function(){i(!c)}}),Object(n.jsxs)(b.a,{maxWidth:"md",component:"main",children:[Object(n.jsx)(w,{}),Object(n.jsx)(Q,{})]})]})},je=c(53),se=c(72),be={todoList:[{id:Object(L.a)(),text:"Learn the MERN stack",checked:!0},{id:Object(L.a)(),text:"Build a TMDb Clone",checked:!0},{id:Object(L.a)(),text:"Find a job",checked:!1}],editId:null},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(ne.a)(Object(ne.a)({},e),{},{todoList:[t.newTodo].concat(Object(se.a)(e.todoList))});case p:return Object(ne.a)(Object(ne.a)({},e),{},{todoList:Object(se.a)(e.todoList.filter((function(e){return e.id!==t.id})))});case m:return Object(ne.a)(Object(ne.a)({},e),{},{todoList:Object(se.a)(e.todoList.map((function(e){return e.id===t.id?Object(ne.a)(Object(ne.a)({},e),{},{checked:!e.checked}):Object(ne.a)({},e)})))});case g:return Object(ne.a)(Object(ne.a)({},e),{},{editId:t.id});case v:return Object(ne.a)(Object(ne.a)({},e),{},{editId:null});case k:var c=Object(se.a)(e.todoList),n=c.findIndex((function(e){return e.id===t.id}));return c[n].text=t.newText,Object(ne.a)(Object(ne.a)({},e),{},{todoList:c});default:return e}},Oe=Object(je.b)({reducer:le}),ue=Object(je.c)(Oe);r.a.render(Object(n.jsx)(o.a,{store:ue,children:Object(n.jsx)(de,{})}),document.getElementById("root"))}},[[223,1,2]]]);
//# sourceMappingURL=main.73fcdcb2.chunk.js.map