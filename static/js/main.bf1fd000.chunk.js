(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{11:function(e,a,t){e.exports=t(28)},27:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t(2),c=t(4),r=t(3),s=t(5),m=t(0),o=t.n(m),i=t(7),u=t.n(i),p=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return console.log("eee",this.props.employees),o.a.createElement(o.a.Fragment,null,this.props.employees&&this.props.employees.length>0&&this.props.employees.map((function(e,a){return o.a.createElement("div",{className:"employee-details col-6 col-lg-4 col-xl-3"},o.a.createElement("div",{className:"card"},o.a.createElement("img",{className:"card-img-top",src:e.image}),o.a.createElement("div",{className:"employee-name"},e.name," ",o.a.createElement("span",null,e.gender)),o.a.createElement("div",{className:"employee-id"},e.id),o.a.createElement("div",{className:"employee-created"},e.created),o.a.createElement("div",{className:"employee-status"},o.a.createElement("label",null,"Status"),o.a.createElement("span",null,e.status)),o.a.createElement("div",{className:"employee-species"},o.a.createElement("label",null,"Species"),o.a.createElement("span",null,e.species)),o.a.createElement("div",{className:"employee-gender"},o.a.createElement("label",null,"Gender"),o.a.createElement("span",null,e.gender)),o.a.createElement("div",{className:"employee-origin"},o.a.createElement("label",null,"Origin"),o.a.createElement("span",null,e.origin&&e.origin.name)),o.a.createElement("div",{className:"employee-location"},o.a.createElement("label",null,"Last Location"),o.a.createElement("span",null,e.location&&e.location.name))))})))}}]),a}(o.a.Component),E=t(6),d=t.n(E),b=(t(10),function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"sidebar"},o.a.createElement(d.a,{onSelect:function(e){}},o.a.createElement(d.a.Toggle,null,o.a.createElement("span",{className:"filters-open"},"Filters")),o.a.createElement("div",{className:"filter-option"},o.a.createElement("hr",null),o.a.createElement("h6",null,"Species"),o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",value:"Human"}),o.a.createElement("span",null,"Human")),o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",value:"Alien"}),o.a.createElement("span",null,"Alien")),o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",value:"Other"}),o.a.createElement("span",null,"Other")),o.a.createElement("hr",null),o.a.createElement("h6",null,"Gender"),o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",value:"Male"}),o.a.createElement("span",null,"Male")),o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",value:"Female"}),o.a.createElement("span",null,"Female"))))),o.a.createElement("div",{className:"selected-filters"},o.a.createElement("h5",null,"Selected Filters"),o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{class:"alert alert-success alert-dismissible mr-3"},o.a.createElement("button",{type:"button",class:"close","data-dismiss":"alert"},"\xd7"),o.a.createElement("strong",null,"Success!")),o.a.createElement("div",{class:"alert alert-success alert-dismissible mr-3"},o.a.createElement("button",{type:"button",class:"close","data-dismiss":"alert"},"\xd7"),o.a.createElement("strong",null,"Success!"))))),o.a.createElement("div",{className:"search-name"},o.a.createElement("h6",null,"Search By Name"),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("input",{className:"form-control",placeholder:"Name",type:"text"}),o.a.createElement("button",{className:"btn btn-primary"},"Search")),o.a.createElement("div",{className:"col-auto ml-auto"},o.a.createElement("select",{className:"form-control"},o.a.createElement("option",{selected:!0,disabled:!0},"Sort By Id"),o.a.createElement("option",null,"Ascending"),o.a.createElement("option",null,"Descending"))))))}}]),a}(m.Component)),h=(t(26),t(27),function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(c.a)(this,Object(r.a)(a).call(this))).state={employees:[]},e}return Object(s.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(a){console.log("Data",a),e.setState({employees:a.results})})).catch((function(e){console.log("error",e)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"container-fluid company-employees"},o.a.createElement(b,null),o.a.createElement("div",{className:"row"},o.a.createElement(p,{employees:this.state.employees})))}}]),a}(m.Component));u.a.render(o.a.createElement(h,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.bf1fd000.chunk.js.map