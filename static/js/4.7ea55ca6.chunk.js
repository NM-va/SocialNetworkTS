(this["webpackJsonpsocial-network-ts"]=this["webpackJsonpsocial-network-ts"]||[]).push([[4],{144:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__3nsRY",posts:"MyPosts_posts__36phs"}},145:function(t,e,s){t.exports={item:"Post_item__32K6z",avatarItem:"Post_avatarItem__MhnT5"}},248:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__dl1lZ"}},250:function(t,e,s){"use strict";s.r(e);var a=s(2),o=s(22),c=s(23),i=s(24),r=s(25),n=s(0),u=s.n(n),p=s(48),j=s(144),d=s.n(j),l=s(145),b=s.n(l),h=s(1),O=function(t){return Object(h.jsxs)("div",{className:b.a.item,children:[Object(h.jsx)("div",{className:b.a.avatarItem,children:Object(h.jsx)("img",{src:"https://uxwing.com/wp-content/themes/uxwing/download/12-people-gesture/avatar.png",alt:""})}),t.message,Object(h.jsx)("div",{children:Object(h.jsx)("div",{children:t.like})})]})},x=s(50),f=s(143),m=f.a().shape({textPost:f.b().max(30,"Too Long!").required("Required")}),v=function(t){var e=Object(x.a)({initialValues:{textPost:""},validationSchema:m,onSubmit:function(e){t.addPost(e.textPost)}}),s=e.touched.textPost&&e.errors.textPost;return Object(h.jsxs)("form",{onSubmit:function(t){e.handleSubmit(t)},children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("textarea",Object(a.a)({},e.getFieldProps("textPost"))),s?Object(h.jsx)("div",{className:"error-message",children:e.errors.textPost}):null]}),Object(h.jsx)("button",{type:"submit",children:"Add post"}),Object(h.jsx)("button",{type:"button",children:"Remove"})]})},g=u.a.memo((function(t){var e=t.posts.map((function(t){return Object(h.jsx)(O,{message:t.message,like:t.likesCount},t.id)}));return Object(h.jsxs)("div",{className:d.a.postsBlock,children:[Object(h.jsx)("h2",{children:"My Posts"}),Object(h.jsx)(v,{addPost:t.addPost}),Object(h.jsx)("div",{className:d.a.posts,children:e})]})})),P=s(14),S=Object(P.b)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(e){t(Object(p.a)(e))}}}))(g),k=s(27),_=s(248),y=s.n(_),I=s(29),N=s(47),w=function(t){var e=Object(n.useState)(!1),s=Object(N.a)(e,2),a=s[0],o=s[1],c=Object(n.useState)(t.status),i=Object(N.a)(c,2),r=i[0],u=i[1];Object(n.useEffect)((function(){u(t.status)}),[t.status]);return Object(h.jsxs)("div",{children:[!a&&Object(h.jsx)("div",{children:Object(h.jsx)("span",{onDoubleClick:function(){o(!0)},children:r||"----"})}),a&&Object(h.jsx)("div",{children:Object(h.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),t.updateStatus(r)},value:r})})]})},B=function(t){var e=t.profile,s=t.status,a=t.updateStatus;Object(k.a)(t,["profile","status","updateStatus"]);return e?Object(h.jsx)("div",{className:y.a.content,children:Object(h.jsxs)("div",{className:y.a.descriptionBlock,children:[Object(h.jsx)("div",{className:y.a.avatar,children:Object(h.jsx)("img",{src:e.photos.large,alt:""})}),Object(h.jsx)(w,{status:s,updateStatus:a}),Object(h.jsx)("div",{className:y.a.description,children:"Description"})]})}):Object(h.jsx)(I.a,{})},U=function(t){return Object(h.jsxs)("div",{children:[Object(h.jsx)(B,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(h.jsx)(S,{})]})},M=s(4),z=s(18),C=function(t){Object(i.a)(s,t);var e=Object(r.a)(s);function s(){return Object(o.a)(this,s),e.apply(this,arguments)}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(this.props.authorizedUserId?t=this.props.authorizedUserId:this.props.history.push("/login")),this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"render",value:function(){return Object(h.jsx)(U,Object(a.a)(Object(a.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(u.a.Component);e.default=Object(z.c)(Object(P.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:p.b,getUserStatus:p.c,updateStatus:p.e}),M.f)(C)}}]);
//# sourceMappingURL=4.7ea55ca6.chunk.js.map