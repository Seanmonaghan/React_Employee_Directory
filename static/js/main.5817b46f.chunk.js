(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{25:function(e,t,n){},30:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),c=n(15),s=n.n(c),o=n(16),i=n(17),l=n(20),u=n(19),d=(n(25),n(0));var j=function(){return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/f/f0/5b289489146c704a86b3a130-large_%281%29.jpg",alt:"wayne enterprises"}),Object(d.jsx)("h1",{children:"Employee Directory"})]})},b=n(2),p=n(4),h=n(53),m=[{Header:"Name",Footer:"Name",columns:[{Header:"First Name",Footer:"First Name",accessor:"first_name"},{Header:"Last Name",Footer:"Last Name",accessor:"last_name"}]},{Header:"Info",Footer:"Info",columns:[{Header:"Date of Birth",Footer:"Date of Birth",accessor:"date_of_birth",Cell:function(e){var t=e.value;return Object(h.a)(new Date(t),"MM/dd/yyyy")}},{Header:"Email",Footer:"Email",accessor:"email"},{Header:"Phone",Footer:"Phone",accessor:"phone"}]}],g=(n(6),n(30),function(e){var t=e.filter,n=e.setFilter;return Object(d.jsxs)("div",{id:"globalFilter",className:"input-group mb3 justify-content-md-center",children:[Object(d.jsx)("div",{class:"input-group-prepend",children:Object(d.jsx)("span",{class:"input-group-text",id:"basic-addon1",children:"Search"})}),Object(d.jsx)("input",{value:t||"",onChange:function(e){return n(e.target.value)}})]})}),O=function(e){var t=Object(a.useMemo)((function(){return m}),[]),n=e.data,r=Object(p.useTable)({columns:t,data:n,initialState:{pageIndex:0}},p.useGlobalFilter,p.useSortBy,p.usePagination),c=r.getTableProps,s=r.setPageSize,o=r.gotoPage,i=r.state,l=r.setGlobalFilter,u=r.getTableBodyProps,j=r.canNextPage,h=r.canPreviousPage,O=r.headerGroups,f=r.page,x=r.nextPage,v=r.previousPage,y=r.pageOptions,P=r.pageCount,N=r.prepareRow,F=i.globalFilter,C=i.pageSize,w=i.pageIndex;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(g,{filter:F,setFilter:l}),Object(d.jsxs)("table",Object(b.a)(Object(b.a)({},c()),{},{children:[Object(d.jsx)("thead",{children:O.map((function(e){return Object(d.jsx)("tr",Object(b.a)(Object(b.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(d.jsxs)("th",Object(b.a)(Object(b.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(d.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(d.jsx)("img",{src:"https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-512.png",alt:"desc"}):Object(d.jsx)("img",{src:"https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png",alt:"asc"}):""})]}))}))}))}))}),Object(d.jsx)("tbody",Object(b.a)(Object(b.a)({},u()),{},{children:f.map((function(e){return N(e),Object(d.jsx)("tr",Object(b.a)(Object(b.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(d.jsxs)("td",Object(b.a)(Object(b.a)({},e.getCellProps()),{},{children:[" ",e.render("Cell")]}))}))}))}))}))]})),Object(d.jsxs)("div",{className:"pagination",children:[Object(d.jsxs)("div",{className:"page",children:[Object(d.jsxs)("span",{children:["Page"," ",Object(d.jsxs)("strong",{children:[w+1," of ",y.length]})," "]}),Object(d.jsx)("select",{value:C,onChange:function(e){return s(Number(e.target.value))},children:[10,25,50].map((function(e){return Object(d.jsxs)("option",{value:e,children:["Show ",e]},e)}))}),Object(d.jsxs)("span",{children:[" ","Go To Page: "," ",Object(d.jsx)("input",{type:"number",defaultValue:w+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;o(t)},style:{width:"50px"}})]})]}),Object(d.jsxs)("div",{className:"nextPrevious",children:[Object(d.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){return o(0)},disabled:!h,children:"<<"}),Object(d.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){return v()},disabled:!h,children:"Previous"}),Object(d.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){return x()},disabled:!j,children:"Next"}),Object(d.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){return o(P-1)},disabled:!j,children:">>"})]})]})]})},f=n(18),x=n.n(f),v=function(){return x.a.get("https://randomuser.me/api/?results=200&nat=us")},y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={users:[]},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;v().then((function(t){var n=t.data.results.map((function(e){return{id:e.id.value||"N/A",first_name:e.name.first,last_name:e.name.last,date_of_birth:e.dob.date,email:e.email,phone:e.phone}}));e.setState({users:n})}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)(j,{}),Object(d.jsx)(O,{data:this.state.users})]})}}]),n}(a.Component),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};n(49),n(50);s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),P()},6:function(e,t,n){}},[[51,1,2]]]);
//# sourceMappingURL=main.5817b46f.chunk.js.map