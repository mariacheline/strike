(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{18:function(n,e,t){n.exports=t.p+"static/media/close.19314b5f.svg"},23:function(n,e,t){n.exports=t(35)},35:function(n,e,t){"use strict";t.r(e);var o=t(1),a=t(0),i=t.n(a),r=t(6),l=t.n(r),c=t(7),d=t(8),u=t(2),s=t(19),p=t(5),m=0,f={notes:[]},h=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_NOTE":var t={note:e.payload.note,id:e.payload.id};return Object(p.a)({},n,{notes:[].concat(Object(s.a)(n.notes),[t])});case"COMPLETE_NOTE":var o=n.notes.map((function(n){return n.id===e.payload.id?Object(p.a)({},n,{isCompleted:!n.isCompleted}):n}));return Object(p.a)({},n,{notes:o});case"DELETE_NOTE":return Object(p.a)({},n,{notes:n.notes.filter((function(n){return n.id!==e.payload.id}))});default:return n}},b=t(12),g=t(13),E=t(20),y=t(14),v=t(21);function C(){var n=Object(o.a)(["\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: flex-end;\n  margin-bottom: 2rem;\n\n  input {\n    flex: 1 0 80%;\n    padding-bottom: 0.3rem;\n    border: none;\n\n    font-family: inherit;\n    font-size: inherit;\n\n    &:focus {\n      outline: none;\n    }\n  }\n\n  button {\n    flex: 1 0 20%;\n    padding: 0.5rem 0;\n    border: none;\n\n    background-color: #eee;\n    color: #666;\n\n    font-size: inherit;\n    font-family: inherit;\n\n    outline: none;\n    cursor: pointer;\n    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;\n\n    &:hover {\n      background-color: #fff;\n    }\n\n    &:active {\n      color: ",";\n    }\n  }\n"]);return C=function(){return n},n}var O=u.b.div(C(),(function(n){return n.disabled?"#000":"inherit"})),x=function(n){var e=n.disabled,t=n.onChange,o=n.value;return i.a.createElement(O,{disabled:e},i.a.createElement("input",{type:"text",onChange:t,value:o,placeholder:"...add a task"}),i.a.createElement("button",{type:"submit",disabled:e},"add"))},j=t(18),w=t.n(j);function D(){var n=Object(o.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  margin: 0.5rem 0;\n  font-family: inherit;\n  font-style: ",";\n\n  &:hover {\n    button {\n      opacity: 1;\n    }\n  }\n\n  label {\n    display: flex;\n    align-items: center;\n  }\n\n  .note-text {\n    display: inline-block;\n    margin-left: 1rem;\n    text-decoration: ",";\n  }\n\n  button {\n    width: 10px;\n    height: 10px;\n    margin-left: auto;\n    margin-right: 2rem;\n    border: none;\n    outline: none;\n    opacity: 0;\n    transition: opacity 0.3s ease-in-out;\n    cursor: pointer;\n\n    img {\n      width: 100%;\n    }\n  }\n"]);return D=function(){return n},n}var k=u.b.li(D(),(function(n){return n.isCompleted?"italic":"normal"}),(function(n){return n.isCompleted?"line-through":"none"})),_=function(n){var e=n.id,t=n.note,o=n.isCompleted,a=n.handleDelete,r=n.handleCompletion;return i.a.createElement(k,{isCompleted:o},i.a.createElement("label",null,i.a.createElement("input",{name:"note",type:"checkbox",onChange:function(){return r(e)},checked:o}),i.a.createElement("span",{className:"note-text"},t)),i.a.createElement("button",{onClick:function(){return a(e)}},i.a.createElement("img",{src:w.a,alt:"close_icon"})))};function T(){var n=Object(o.a)(["\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n\n  .completed-list {\n    margin-top: 2rem;\n  }\n"]);return T=function(){return n},n}var N=u.b.ul(T()),L=function(n){var e=n.notesList,t=n.handleDelete,o=n.handleCompletion,a=e.filter((function(n){return!n.isCompleted})),r=e.filter((function(n){return n.isCompleted}));return console.log(a),i.a.createElement(N,null,a.length>0&&i.a.createElement("li",null,i.a.createElement("h4",null,"To do:"),a.map((function(n){return i.a.createElement(_,{key:n.id,note:n.note,id:n.id,handleDelete:t,handleCompletion:o,isCompleted:n.isCompleted})}))),r.length>0&&i.a.createElement("li",{className:"completed-list"},i.a.createElement("h4",null,"Completed:"),r.map((function(n){return i.a.createElement(_,{key:n.id,note:n.note,id:n.id,handleDelete:t,handleCompletion:o,isCompleted:n.isCompleted})}))))},S=function(n){function e(){var n,t;Object(b.a)(this,e);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(t=Object(E.a)(this,(n=Object(y.a)(e)).call.apply(n,[this].concat(a)))).state={note:"",disabled:!0},t.handleChange=function(n){var e=t.state,o=e.note,a=e.disabled;t.setState({note:n.target.value},(function(){o||o.length||t.setState({disabled:!a})}))},t.handleSubmit=function(n){var e=t.state,o=e.note,a=e.disabled,i=t.props.add_note;t.setState({note:"",disabled:!a}),n.preventDefault(),console.log(o),i(o)},t.handleDelete=function(n){(0,t.props.delete_note)(n)},t.handleCompletion=function(n){(0,t.props.complete_note)(n)},t}return Object(v.a)(e,n),Object(g.a)(e,[{key:"render",value:function(){var n=this.state,e=n.note,t=n.disabled,o=this.props.notes;return i.a.createElement("div",{className:"app"},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement(x,{onChange:this.handleChange,value:e,disabled:t})),i.a.createElement(L,{notesList:o,handleDelete:this.handleDelete,handleCompletion:this.handleCompletion}))}}]),e}(i.a.Component),z=Object(d.b)((function(n){return{notes:n.notes}}),(function(n){return{add_note:function(e){n(function(n){return{type:"ADD_NOTE",payload:{note:n,id:m++}}}(e))},delete_note:function(e){n(function(n){return{type:"DELETE_NOTE",payload:{id:n}}}(e))},complete_note:function(e){n(function(n){return{type:"COMPLETE_NOTE",payload:{id:n}}}(e))}}}))(S);function A(){var n=Object(o.a)(["\n * {\n   margin: 0;\n   padding: 0;\n   box-sizing: border-box;\n }\n\n html {\n   height: 100%;\n   font-size: 100%;\n }\n\n body {\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   font-family: 'Nunito', Arial, Helvetica, sans-serif;\n   font-size: 14px;\n }\n\n .app {\n   width: 360px;\n   margin-top: 5rem;\n }\n"]);return A=function(){return n},n}var J=Object(u.a)(A()),M=Object(c.b)(h);l.a.render(i.a.createElement(d.a,{store:M},i.a.createElement(J,null),i.a.createElement(z,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.bc7ea984.chunk.js.map