(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var c=t(15),r=t.n(c),a=t(6),o=t(3),u=t(1),i=t(0),l=function(e){var n=e.filterValue,t=e.handleFilterChange;return Object(i.jsxs)("div",{children:["filter shown with: ",Object(i.jsx)("input",{value:n,onChange:t})]})},s=function(e){return Object(i.jsxs)("form",{onSubmit:e.addPerson,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("label",{children:[e.name," ",e.number]}),Object(i.jsx)("button",{onClick:e.handleDelete,children:"delete"})]})},b=t(4),h=t.n(b),j="/api/persons",f={getAll:function(){return h.a.get(j).then((function(e){return e.data}))},create:function(e){return h.a.post(j,e).then((function(e){return e.data}))},update:function(e,n){return h.a.put("".concat(j,"/").concat(e),n).then((function(e){return e.data}))},remove:function(e){return h.a.delete("".concat(j,"/").concat(e)).then((function(e){return e.data}))}},m={color:"green",fontStyle:"italic",fontSize:16},O={color:"red",fontStyle:"italic",fontSize:16},v=function(e){var n=e.message,t=e.isError;return null===n?null:Object(i.jsx)("div",{style:t?O:m,children:n})},p=function(){var e=Object(u.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],r=Object(u.useState)(""),b=Object(o.a)(r,2),h=b[0],j=b[1],m=Object(u.useState)(""),O=Object(o.a)(m,2),p=O[0],g=O[1],x=Object(u.useState)(""),w=Object(o.a)(x,2),C=w[0],S=w[1],N=Object(u.useState)(null),k=Object(o.a)(N,2),y=k[0],D=k[1],E=Object(u.useState)(null),A=Object(o.a)(E,2),P=A[0],z=A[1],F=function(e,n){!0===n?z(e):D(e),setTimeout((function(){z(null),D(null)}),5e3)},I=t.filter((function(e){return C.length<=0||e.name.toLowerCase().includes(C)}));return Object(u.useEffect)((function(){f.getAll().then((function(e){c(e)})).catch((function(e){console.log(e)}))}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(v,{message:null===y?P:y,isError:null!==P}),Object(i.jsx)(l,{filterValue:C,handleFilterChange:function(e){S(e.target.value)}}),Object(i.jsx)(s,{addPerson:function(e){e.preventDefault();var n=t.find((function(e,n){return e.name===h}));if(void 0!==n){if(window.confirm("".concat(h," is already added to phonebook, replace the old number with a new one?"))){var r=Object(a.a)(Object(a.a)({},n),{},{number:p});f.update(n.id,r).then((function(e){c(t.map((function(t){return t.id!==n.id?t:e}))),F("Updated '".concat(h,"'"),!1)})).catch((function(e){e.response&&404===e.response.status?F("Information of ".concat(h," has already been removed from server"),!0):F(e.response.data.error,!0)}))}}else{var o={name:h,number:p};f.create(o).then((function(e){c(t.concat(e)),F("Added '".concat(e.name,"'"),!1)})).catch((function(e){F(e.response.data.error,!0)}))}j(""),g("")},newName:h,handleNameChange:function(e){j(e.target.value)},newNumber:p,handleNumberChange:function(e){g(e.target.value)}}),Object(i.jsx)("h3",{children:"Numbers"}),I.map((function(e){return Object(i.jsx)(d,{name:e.name,number:e.number,handleDelete:function(){return n=e.name,r=e.id,void(window.confirm("Delete ".concat(n," ?"))&&f.remove(r).then((function(e){c(t.filter((function(e){return e.id!==r})))})).catch((function(e){console.log(e)})));var n,r}},e.name)}))]})};r.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.38b04846.chunk.js.map