(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{21:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t.n(c),o=t(16),u=t.n(o),a=(t(21),t(3)),i=t(0),s=function(e){var n=e.filter,t=e.filterHandler;return Object(i.jsxs)("div",{children:["filter show with : ",Object(i.jsx)("input",{value:n,onChange:t})]})},l=function(e){var n=e.newName,t=e.setNewName,c=e.newNumber,r=e.setNewNumber,o=e.clickHandler;return Object(i.jsxs)("form",{children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:n,onChange:function(e){return t(e.target.value)}})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:c,onChange:function(e){return r(e.target.value)}})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",onClick:o,children:"add"})})]})},d=function(e){var n=e.persons,t=e.filter,c=e.deleteHandler;return Object(i.jsx)("div",{children:n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(i.jsxs)("div",{children:[e.name," ",e.number," ",Object(i.jsx)("button",{onClick:function(){return c(e.id,e.name)},children:"delete"})]},e.name)}))})},j=t(4),b=t.n(j),f="http://localhost:3001/api/persons",h=function(){return b.a.get(f).then((function(e){return e.data}))},m=function(e){return b.a.post(f,e).then((function(e){return e.data}))},O=function(e){return b.a.delete("".concat(f,"/").concat(e)).then((function(e){return e}))},v=function(e,n){return b.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},x=function(){var e=Object(c.useState)([]),n=Object(a.a)(e,2),t=n[0],r=n[1],o=Object(c.useState)(""),u=Object(a.a)(o,2),j=u[0],b=u[1],f=Object(c.useState)(""),x=Object(a.a)(f,2),p=x[0],w=x[1],N=Object(c.useState)(""),g=Object(a.a)(N,2),k=g[0],C=g[1],S=Object(c.useState)(null),H=Object(a.a)(S,2),y=H[0],E=H[1],T=Object(c.useState)(null),A=Object(a.a)(T,2),D=A[0],I=A[1];Object(c.useEffect)((function(){console.log("effect"),h().then((function(e){r(e)}))}),[]);var J=function(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{className:"success",children:n})},L=function(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{className:"error",children:n})};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(J,{message:y}),Object(i.jsx)(L,{message:D}),Object(i.jsx)(s,{filter:k,filterHandler:function(e){C(e.target.value)}}),Object(i.jsx)("h2",{children:"Add a new"}),Object(i.jsx)(l,{newName:j,setNewName:b,newNumber:p,setNewNumber:w,clickHandler:function(e){e.preventDefault();var n=t.find((function(e){return e.name===j}));n?window.confirm("".concat(j," is already added to phonebook, replace the old numbeer with new one?"))&&(v(n.id,{name:j,number:p}).then((function(e){r(t.map((function(n){return n.name!==j?n:e}))),E("Edited ".concat(j," with new number ").concat(p)),setTimeout((function(){E(null)}),5e3)})).catch((function(e){console.log(e.response),I("Information of '".concat(j,"' was already removed from server")),setTimeout((function(){I(null)}),5e3)})),b(""),w("")):(m({name:j,number:p}).then((function(e){r(t.concat(e)),E("Added ".concat(j)),setTimeout((function(){E(null)}),5e3)})),b(""),w(""))}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(d,{persons:t,filter:k,deleteHandler:function(e,n){window.confirm("Delete ".concat(n,"?"))&&O(e).then((function(){r(t.filter((function(n){return n.id!==e})))}))}})]})};u.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.1e7046db.chunk.js.map