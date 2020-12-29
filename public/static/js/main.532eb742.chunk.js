(this["webpackJsonpmobx-react-ts"]=this["webpackJsonpmobx-react-ts"]||[]).push([[0],{30:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r,c,a,o,i,u,s,l,d=n(1),f=n(0),b=n.n(f),j=n(9),p=n.n(j),h=(n(30),n(8)),O=n(3),v=n.n(O),m=n(6),x=n(10),N=n(11),g=n(13),w=document.createRange(),y=window.getSelection(),k=function(e){var t=e.addNote,n=e.editNote,r=e.currNote,c=Object(f.useState)({title:"",text:""}),a=Object(g.a)(c,2),o=a[0],i=a[1],u=Object(f.useState)(!1),s=Object(g.a)(u,2),l=s[0],b=s[1],j=Object(f.useRef)(),p=Object(f.useRef)(),h=Object(f.useRef)();Object(f.useEffect)((function(){return document.addEventListener("mousedown",O),function(){return document.removeEventListener("mousedown",O)}}),[]),Object(f.useEffect)((function(){r&&(i(r),p.current.innerText=r.title,h.current.innerText=r.text,h.current.focus())}),[r]);var O=function(e){j.current.contains(e.target)||C()},k=function(e){var t=e.target.dataset.name||"",n=e.target.innerText;i((function(e){return Object(N.a)(Object(N.a)({},e),{},Object(x.a)({},t,n))}))},C=function(){var e=Object(m.a)(v.a.mark((function e(){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i((function(e){return r=Object(N.a)({},e),e}));case 2:if(b(!1),!r||r.title||r.text){e.next=5;break}return e.abrupt("return");case 5:r&&r._id?n(r):r&&t(r),i({title:"",text:""}),p.current.innerText="",h.current.innerText="";case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"add-note-container flex column justify-center",children:[Object(d.jsx)("div",{className:"screen ".concat(l?"display":"")}),Object(d.jsxs)("form",{ref:j,className:"flex column ".concat(l?"focused":""),onFocus:function(){return b(!0)},onSubmit:function(e){return e.preventDefault()},children:[Object(d.jsx)("div",{contentEditable:!0,ref:p,className:"title-input ".concat(o.title?"":"empty"," ").concat(l?"focused":""),"data-name":"title",onInput:k,onKeyDown:function(e){13===e.keyCode&&(e.preventDefault(),h.current.focus())},spellCheck:"false"}),Object(d.jsx)("div",{contentEditable:!0,ref:h,className:"text-input ".concat(o.text?"":"empty"),"data-name":"text",onInput:k,spellCheck:"false",onFocus:function(){var e,t=null===(e=h.current.childNodes)||void 0===e?void 0:e.length;if(t){var n=h.current.childNodes[t-1].length;w.setStart(h.current.childNodes[t-1],n),w.collapse(!0),y.removeAllRanges(),y.addRange(w)}}})]})]})},C=Object(h.a)((function(e){var t=e.note,n=e.setNote,r=e.removeNote;return Object(d.jsxs)("div",{className:"note",children:[Object(d.jsx)("h3",{className:"note-title",children:t.title}),Object(d.jsx)("div",{className:"note-text",children:t.text}),Object(d.jsxs)("div",{className:"manage-buttons",children:[Object(d.jsx)("button",{className:"edit-button",onClick:function(){return n(t._id)},children:"Edit"}),Object(d.jsx)("button",{className:"delete-button",onClick:function(){return r(t._id||"")},children:"Delete"})]})]})})),E=Object(h.a)((function(e){var t=e.notes,n=e.setNote,r=e.removeNote;return Object(d.jsx)("div",{className:"note-list-container",children:Object(d.jsx)("div",{className:"note-list-wrapper",children:t.map((function(e){return Object(d.jsx)(C,{note:e,setNote:n,removeNote:r},e._id)}))})})})),S=n(7),_=n(22),z=n(23),L=n(5),T=(n(33),n(2)),D=n(24),F=n.n(D).a.create({withCredentials:!0}),I="/api/note",R=function(e){return F.get("".concat(I,"/").concat(e)).then((function(e){return e.data}))},P=function(e){return F.post(I,e).then((function(e){return e.data}))},B=function(e){return F.put("".concat(I,"/").concat(e._id),e).then((function(e){return e.data}))},J=function(e){return F.delete("".concat(I,"/").concat(e))},A=(r=function(){function e(){Object(_.a)(this,e),Object(S.a)(this,"notes",c,this),Object(S.a)(this,"currNote",a,this),Object(S.a)(this,"loadNotes",o,this),Object(S.a)(this,"loadNote",i,this),Object(S.a)(this,"addNote",u,this),Object(S.a)(this,"editNote",s,this),Object(S.a)(this,"removeNote",l,this),Object(T.f)(this)}return Object(z.a)(e,[{key:"noteLength",get:function(){return this.notes.length}}]),e}(),c=Object(L.a)(r.prototype,"notes",[T.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),a=Object(L.a)(r.prototype,"currNote",[T.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),o=Object(L.a)(r.prototype,"loadNotes",[T.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(m.a)(v.a.mark((function t(){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F.get(I).then((function(e){return e.data}));case 2:(n=t.sent).reverse(),e.notes=n;case 5:case"end":return t.stop()}}),t)})))}}),i=Object(L.a)(r.prototype,"loadNote",[T.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(m.a)(v.a.mark((function t(n){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R(n);case 2:r=t.sent,e.currNote=r;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),u=Object(L.a)(r.prototype,"addNote",[T.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(m.a)(v.a.mark((function t(n){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(n);case 2:r=t.sent,e.notes.unshift(r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),s=Object(L.a)(r.prototype,"editNote",[T.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(m.a)(v.a.mark((function t(n){var r,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(n);case 2:r=t.sent,c=e.notes.findIndex((function(e){return e._id===n._id})),e.notes.splice(c,1,r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),l=Object(L.a)(r.prototype,"removeNote",[T.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(m.a)(v.a.mark((function t(n){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J(n);case 2:r=e.notes.findIndex((function(e){return e._id===n})),e.notes.splice(r,1);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),Object(L.a)(r.prototype,"noteLength",[T.c],Object.getOwnPropertyDescriptor(r.prototype,"noteLength"),r.prototype),r),K=Object(f.createContext)({}),M=new A,q=function(e){var t=e.children;return Object(d.jsx)(K.Provider,{value:{noteStore:M},children:t})},G=Object(h.a)((function(){var e=Object(f.useContext)(K).noteStore;return Object(f.useEffect)((function(){e.loadNotes()}),[]),Object(d.jsxs)("div",{className:"note-main-container flex column",children:[Object(d.jsxs)("div",{className:"header-wrapper flex",children:[Object(d.jsx)("div",{className:"logo"}),Object(d.jsx)(k,{addNote:e.addNote,editNote:e.editNote,currNote:e.currNote})]}),Object(d.jsx)(E,{notes:e.notes,setNote:e.loadNote,removeNote:e.removeNote})]})}));var H=function(){return Object(d.jsx)("div",{className:"main-container",children:Object(d.jsx)(G,{})})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};p.a.render(Object(d.jsx)(b.a.StrictMode,{children:Object(d.jsx)(q,{children:Object(d.jsx)(H,{})})}),document.getElementById("root")),Q()}},[[51,1,2]]]);
//# sourceMappingURL=main.532eb742.chunk.js.map