(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{13:function(e,a,t){e.exports=t(32)},30:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(7),l=t(2),c=t(3),s=t(5),i=t(4),r=t(1),o=t(6),m=t(0),d=t.n(m),u=t(11),p=t.n(u),h=t(12),g=t.n(h),v=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return d.a.createElement(d.a.Fragment,null,this.props.employees&&this.props.employees.length>0&&this.props.employees.map((function(e,a){return e.isHide?null:d.a.createElement("div",{className:"employee-details col-sm-6 col-md-4 col-lg-3",key:"employee-list-".concat(a)},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"position-relative"},d.a.createElement("img",{className:"card-img-top",alt:e.name,src:e.image}),d.a.createElement("div",{className:"basic-info"},d.a.createElement("div",{className:""},d.a.createElement("span",{className:"employee-name"},e.name),d.a.createElement("span",{className:"employee-gender"},"(",e.gender,")")),d.a.createElement("div",null,d.a.createElement("span",{className:"employee-id"},"Id: ",e.id," - "),d.a.createElement("span",{className:"employee-created"},g()(e.created).fromNow())))),d.a.createElement("div",{className:"employee-status"},d.a.createElement("label",null,"Status:"),d.a.createElement("span",null,e.status)),d.a.createElement("div",{className:"employee-species"},d.a.createElement("label",null,"Species:"),d.a.createElement("span",null,e.species)),d.a.createElement("div",{className:"employee-origin"},d.a.createElement("label",null,"Origin:"),d.a.createElement("span",null,e.origin&&e.origin.name)),d.a.createElement("div",{className:"employee-location"},d.a.createElement("label",null,"Last Location:"),d.a.createElement("span",null,e.location&&e.location.name))))})))}}]),a}(d.a.Component),E=t(8),y=t.n(E),b=(t(29),t(30),t(31),{species:[{display:"Human",value:"Human"},{display:"Alien",value:"Alien"},{display:"Other",value:"Other"}],gender:[{display:"Male",value:"Male"},{display:"Female",value:"Female"}],origin:[{display:"Earth (C-137)",value:"Earth (C-137)"},{display:"Earth (Replacement Dimension)",value:"Earth (Replacement Dimension)"},{display:"Abadango",value:"Abadango"},{display:"unknown",value:"unknown"}],sort:[{display:"Ascending",value:"ascending"},{display:"Descending",value:"descending"}]}),f=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(s.a)(this,Object(i.a)(a).call(this))).state={employees:[],species:b.species,gender:b.gender,origin:b.origin,sort:b.sort,sortOrder:"",textToSearch:"",selectedSpices:[],selectedGender:[],selectedOrigin:[]},e._handleInputChange=e._handleInputChange.bind(Object(r.a)(e)),e._handleFilterData=e._handleFilterData.bind(Object(r.a)(e)),e}return Object(o.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(a){console.log("Data",a),e.setState({employees:a.results})})).catch((function(e){console.log("error",e)}))}},{key:"_handleInputChange",value:function(e){var a=this,t=e.target.name,l="checkbox"===e.target.type?e.target.checked:e.target.value;this.setState(Object(n.a)({},t,l),(function(){a._handleFilterData()}))}},{key:"_handleFilterChange",value:function(e,a,t){var l=this,c=this.state[e];("checkbox"===t.target.type?t.target.checked:t.target.value)?c.push(a):c.splice(c.indexOf(a),1),this.setState(Object(n.a)({},e,c),(function(){l._handleFilterData()}))}},{key:"_handleRemoveFilter",value:function(e,a){var t=this;console.log("");var l=this.state[e];l.splice(l.indexOf(a),1),this.setState(Object(n.a)({},e,l),(function(){t._handleFilterData()}))}},{key:"_handleFilterData",value:function(){var e=this.state,a=e.textToSearch,t=e.employees,n=e.sortOrder,l=e.selectedSpices,c=e.selectedGender,s=e.selectedOrigin,i=new RegExp(a,"i");(t=t.map((function(e){return e.isHide=!1,a&&(e.isHide=!i.test(e.name)),l.length>0&&!e.isHide&&(e.isHide=-1===l.indexOf(e.species)),c.length>0&&!e.isHide&&(e.isHide=-1===c.indexOf(e.gender)),s.length>0&&!e.isHide&&(e.isHide=-1===s.indexOf(e.origin&&e.origin.name)),e}))).sort((function(e,a){return"descending"===n?a.id-e.id:e.id-a.id})),this.setState({employees:t})}},{key:"render",value:function(){var e=this,a=this.state,t=a.species,n=a.gender,l=a.origin,c=a.sort,s=a.selectedSpices,i=a.selectedGender,r=a.selectedOrigin;return d.a.createElement("div",{className:"container-fluid company-employees"},d.a.createElement("div",{className:"sidebar"},d.a.createElement(y.a,{onSelect:function(e){}},d.a.createElement(y.a.Toggle,null,d.a.createElement("span",{className:"filters-open"},"Filters")),d.a.createElement("div",{className:"filter-options"},d.a.createElement("div",{className:"filter-species"},d.a.createElement("h6",null,"Species"),d.a.createElement("div",{className:"styled-checkbox"},t&&t.length>0&&t.map((function(a,t){return d.a.createElement(d.a.Fragment,{key:"species-key-".concat(t)},d.a.createElement("input",{id:"species-".concat(t),type:"checkbox",value:a.value,checked:-1!==s.indexOf(a.value),onChange:e._handleFilterChange.bind(e,"selectedSpices",a.value)}),d.a.createElement("label",{htmlFor:"species-".concat(t)},a.display))})))),d.a.createElement("div",{className:"filter-gender"},d.a.createElement("h6",null,"Gender"),d.a.createElement("div",{className:"styled-checkbox"},n&&n.length>0&&n.map((function(a,t){return d.a.createElement(d.a.Fragment,{key:"gender-key-".concat(t)},d.a.createElement("input",{id:"gender-".concat(t),type:"checkbox",value:a.value,checked:-1!==i.indexOf(a.value),onChange:e._handleFilterChange.bind(e,"selectedGender",a.value)}),d.a.createElement("label",{htmlFor:"gender-".concat(t)},a.display," "))})))),d.a.createElement("div",{className:"filter-origin"},d.a.createElement("h6",null,"Origin"),d.a.createElement("div",{className:"styled-checkbox"},l&&l.length>0&&l.map((function(a,t){return d.a.createElement(d.a.Fragment,{key:"origin-key-".concat(t)},d.a.createElement("input",{id:"origin-".concat(t),type:"checkbox",value:a.value,checked:-1!==r.indexOf(a.value),onChange:e._handleFilterChange.bind(e,"selectedOrigin",a.value)}),d.a.createElement("label",{htmlFor:"origin-".concat(t)},a.display))}))))))),d.a.createElement("div",{className:"selected-filters py-3"},d.a.createElement("h5",null,"Selected Filters"),d.a.createElement("div",{className:"col"},d.a.createElement("div",{className:"row"},s&&s.length>0&&s.map((function(a,t){return d.a.createElement("span",{className:"badge badge-pill badge-success",key:"selcted-spices-".concat(t)},a,d.a.createElement("i",{className:"close-filter",onClick:e._handleRemoveFilter.bind(e,"selectedSpices",a)},d.a.createElement("img",{src:"cancel.svg",alt:"Remove Icon"})))})),r&&r.length>0&&r.map((function(a,t){return d.a.createElement("span",{className:"badge badge-pill badge-success",key:"selcted-origin-".concat(t)},a,d.a.createElement("i",{className:"close-filter",onClick:e._handleRemoveFilter.bind(e,"selectedOrigin",a)},d.a.createElement("img",{src:"cancel.svg",alt:"Remove Icon"})))})),i&&i.length>0&&i.map((function(a,t){return d.a.createElement("span",{className:"badge badge-pill badge-success",key:"selcted-gender-".concat(t)},a,d.a.createElement("i",{className:"close-filter",onClick:e._handleRemoveFilter.bind(e,"selectedGender",a)},d.a.createElement("img",{src:"cancel.svg",alt:"Remove Icon"})))}))))),d.a.createElement("div",{className:"search-name"},d.a.createElement("h6",null,"Search By Name"),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col"},d.a.createElement("input",{className:"form-control",placeholder:"Name",type:"text",name:"textToSearch",value:this.state.textToSearch,onChange:this._handleInputChange}),d.a.createElement("button",{className:"btn btn-primary"},"Search")),d.a.createElement("div",{className:"col-auto ml-auto"},d.a.createElement("select",{className:"form-control",value:this.state.sortOrder,onChange:this._handleInputChange,name:"sortOrder"},d.a.createElement("option",{disabled:!0},"Sort By Id"),c&&c.length>0&&c.map((function(e,a){return d.a.createElement("option",{value:e.value,key:"sort-".concat(a)},e.display)})))))),d.a.createElement("div",{className:"row"},d.a.createElement(v,{employees:this.state.employees})))}}]),a}(m.Component);p.a.render(d.a.createElement(f,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.7d1df2a1.chunk.js.map