(this["webpackJsonpreact-todo-exercise"]=this["webpackJsonpreact-todo-exercise"]||[]).push([[0],{14:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),r=n(8),s=n.n(r),d=(n(14),n(3)),c=n(4),u=n(2),o=n(6),l=n(5),j=n(0),b=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsx)("ul",{children:this.props.tasks.map((function(e,n){return Object(j.jsxs)("li",{children:[Object(j.jsx)("b",{children:++n})," -",e.showEdit?Object(j.jsxs)("form",{onSubmit:function(n){return t.props.editHandler(n,e.id)},children:[Object(j.jsx)("input",{defaultValue:e.description,type:"text",required:!0}),Object(j.jsx)("button",{type:"submit",children:"Save"})]}):Object(j.jsxs)("span",{children:[e.description,Object(j.jsx)("button",{onClick:function(n){return t.props.editToggler(n,e.id)},children:"Edit"})]}),Object(j.jsx)("button",{onClick:function(n){return t.props.removeHandler(n,e.id)},children:"Delete"})]},e.id)}))})}}]),n}(a.a.Component),h=n(9),p=n.n(h),O=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(t){var i;return Object(d.a)(this,n),(i=e.call(this,t)).state={tasks:[],inputValue:""},i.inputHandler=i.inputHandler.bind(Object(u.a)(i)),i.addHandler=i.addHandler.bind(Object(u.a)(i)),i.removeHandler=i.removeHandler.bind(Object(u.a)(i)),i.editHandler=i.editHandler.bind(Object(u.a)(i)),i.editToggler=i.editToggler.bind(Object(u.a)(i)),i}return Object(c.a)(n,[{key:"inputHandler",value:function(t){this.setState({inputValue:t.target.value})}},{key:"addHandler",value:function(t){t.preventDefault(),this.setState({tasks:this.state.tasks.concat({id:p.a.time(),description:this.state.inputValue,showEdit:!1}),inputValue:""})}},{key:"editHandler",value:function(t,e){t.preventDefault(),this.setState({tasks:this.state.tasks.map((function(n){return n.id===e&&(n.description=t.target[0].value,n.showEdit=!1),n}))})}},{key:"editToggler",value:function(t,e){this.setState({tasks:this.state.tasks.map((function(t){return t.id===e&&(t.showEdit=!0),t}))})}},{key:"removeHandler",value:function(t,e){t.preventDefault(),this.setState({tasks:this.state.tasks.filter((function(t){return t.id!==e}))})}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"React TODO exercise"}),Object(j.jsxs)("form",{className:"mainForm",onSubmit:this.addHandler,children:[Object(j.jsx)("input",{type:"text",onChange:this.inputHandler,value:this.state.inputValue,required:!0}),Object(j.jsx)("button",{type:"submit",children:"Add"})]}),Object(j.jsx)(b,{tasks:this.state.tasks,removeHandler:this.removeHandler,editHandler:this.editHandler,editToggler:this.editToggler})]})}}]),n}(a.a.Component);s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.6d42c925.chunk.js.map