"use strict";(self.webpackChunkloud_6_castle=self.webpackChunkloud_6_castle||[]).push([[79],{4079:(G,f,r)=>{r.r(f),r.d(f,{FilmModule:()=>B});var u=r(8583),c=r(3679),v=r(4996),g=r(9124),s=r(4655),t=r(7716),d=r(5257),U=r(8002),T=r(1841),A=r(4807);let m=(()=>{class e{constructor(n,o){this.http=n,this.converter=o,this.resource="/films"}findAll(n){return this.http.get(this.resource,{params:n}).pipe((0,d.q)(1),(0,U.U)(o=>this.converter.convert(o)))}findById(n){return this.http.get(`${this.resource}/${n}`).pipe((0,d.q)(1),(0,U.U)(o=>(o.id=this.converter.extractId(o.url),o)))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(T.eN),t.LFG(A.$))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var _=r(7109),x=r(3338);const y=function(e){return[e,"edit"]};function q(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"tr"),t._uU(1,"\n            "),t.TgZ(2,"td"),t._uU(3),t.qZA(),t._uU(4,"\n            "),t.TgZ(5,"td"),t._uU(6),t.qZA(),t._uU(7,"\n            "),t.TgZ(8,"td"),t._uU(9),t.qZA(),t._uU(10,"\n            "),t.TgZ(11,"td"),t._uU(12),t.qZA(),t._uU(13,"\n            "),t.TgZ(14,"td"),t._uU(15),t.qZA(),t._uU(16,"\n            "),t.TgZ(17,"td"),t._uU(18),t.qZA(),t._uU(19,"\n            "),t.TgZ(20,"td"),t._uU(21,"\n              "),t.TgZ(22,"a",11),t._uU(23,"\n                "),t._UZ(24,"i",12),t._uU(25,"\n                View\n              "),t.qZA(),t._uU(26,"\n              "),t.TgZ(27,"a",13),t._uU(28,"\n                "),t._UZ(29,"i",14),t._uU(30,"\n              "),t.qZA(),t._uU(31,"\n              "),t.TgZ(32,"button",15),t.NdJ("click",function(a){const F=t.CHM(n).$implicit;return t.oxw(2).delete(F,a)}),t._uU(33,"\n                "),t._UZ(34,"i",16),t._uU(35,"\n              "),t.qZA(),t._uU(36,"\n            "),t.qZA(),t._uU(37,"\n          "),t.qZA()}if(2&e){const n=i.$implicit;t.xp6(3),t.Oqu(n.id),t.xp6(3),t.Oqu(n.title),t.xp6(3),t.Oqu(n.episode_id),t.xp6(3),t.Oqu(n.director),t.xp6(3),t.Oqu(n.producer),t.xp6(3),t.Oqu(n.release_date),t.xp6(4),t.Q6J("routerLink",n.id),t.xp6(5),t.Q6J("routerLink",t.VKq(8,y,n.id))}}function C(e,i){if(1&e&&(t.TgZ(0,"div"),t._uU(1,"\n    "),t.TgZ(2,"app-grid",4),t._uU(3,"\n      "),t.ynx(4,5),t._uU(5,"\n        "),t.TgZ(6,"div",6),t._uU(7,"\n          "),t._UZ(8,"input",7),t._uU(9,"\n        "),t.qZA(),t._uU(10,"\n      "),t.BQk(),t._uU(11,"\n\n      "),t.TgZ(12,"table",8),t._uU(13,"\n        "),t.TgZ(14,"thead"),t._uU(15,"\n          "),t.TgZ(16,"tr"),t._uU(17,"\n            "),t.TgZ(18,"th",9),t._uU(19,"#"),t.qZA(),t._uU(20,"\n            "),t.TgZ(21,"th",9),t._uU(22,"Title"),t.qZA(),t._uU(23,"\n            "),t.TgZ(24,"th",9),t._uU(25,"Episode"),t.qZA(),t._uU(26,"\n            "),t.TgZ(27,"th",9),t._uU(28,"Director"),t.qZA(),t._uU(29,"\n            "),t.TgZ(30,"th",9),t._uU(31,"Producer"),t.qZA(),t._uU(32,"\n            "),t.TgZ(33,"th",9),t._uU(34,"Release date"),t.qZA(),t._uU(35,"\n            "),t.TgZ(36,"th",9),t._uU(37,"Actions"),t.qZA(),t._uU(38,"\n          "),t.qZA(),t._uU(39,"\n        "),t.qZA(),t._uU(40,"\n        "),t.TgZ(41,"tbody"),t._uU(42,"\n          "),t.YNc(43,q,38,10,"tr",10),t._uU(44,"\n        "),t.qZA(),t._uU(45,"\n      "),t.qZA(),t._uU(46,"\n    "),t.qZA(),t._uU(47,"\n  "),t.qZA()),2&e){const n=i.ngIf;t.xp6(2),t.Q6J("data",n)("searchBar",!0),t.xp6(41),t.Q6J("ngForOf",n.items)}}let b=(()=>{class e{constructor(n,o,a,l){this.route=n,this.router=o,this.renderer=a,this.service=l}ngOnInit(){this.data$=this.route.data}changePage(n,o){this.navigate({page:o})}delete(n,o){if(!confirm(`Are you sure to delete ${n.title}?`))return;let l=o.currentTarget.parentElement;for(;!l.classList.contains("stn-item");)l=l.parentElement}navigate(n){this.router.navigate([],{relativeTo:this.route,queryParams:n})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(s.gz),t.Y36(s.F0),t.Y36(t.Qsj),t.Y36(m))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-film-list"]],decls:14,vars:3,consts:[["page-title",""],["page-action-bar","","role","button","routerLink","new",1,"btn","btn-primary"],[1,"fas","fa-plus","fa-fw"],[4,"ngIf"],[3,"data","searchBar"],["search-fields",""],[1,"col-auto"],["id","title","name","title","placeholder","Title","type","text",1,"form-control"],["grid-view","",1,"table","table-striped","table-hover"],["scope","col"],[4,"ngFor","ngForOf"],["role","button",1,"btn","btn-outline-primary","btn-sm",3,"routerLink"],[1,"far","fa-eye","fa-tw"],["role","button",1,"btn","btn-outline-info","btn-sm",3,"routerLink"],[1,"fas","fa-pencil-alt","fa-fw"],["type","button",1,"btn","btn-outline-danger","btn-sm",3,"click"],[1,"far","fa-trash-alt","fa-fw"]],template:function(n,o){if(1&n&&(t.TgZ(0,"app-page"),t._uU(1,"\n  "),t.TgZ(2,"span",0),t._uU(3,"Films"),t.qZA(),t._uU(4,"\n  "),t.TgZ(5,"a",1),t._uU(6,"\n    "),t._UZ(7,"i",2),t._uU(8," New Film\n  "),t.qZA(),t._uU(9,"\n\n  "),t.YNc(10,C,48,3,"div",3),t.ALo(11,"async"),t._uU(12,"\n"),t.qZA(),t._uU(13,"\n")),2&n){let a;t.xp6(10),t.Q6J("ngIf",null==(a=t.lcZ(11,1,o.data$))?null:a.page)}},directives:[_.I,s.yS,u.O5,x.M,u.sg],pipes:[u.Ov],encapsulation:2}),e})(),Z=(()=>{class e{constructor(n){this.service=n}resolve(n){const o=n.paramMap.get("id");return this.service.findById(o)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(m))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var I=r(4762),h=r(6857),L=r(4854),O=r(3993);function D(e,i){if(1&e&&(t.TgZ(0,"span",8),t._uU(1),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.hij("Editing: ",n.pristineData.title,"")}}function M(e,i){1&e&&(t._uU(0,"\n    "),t.TgZ(1,"h4"),t._uU(2,"Add new person"),t.qZA(),t._uU(3,"\n  "))}function J(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"app-page"),t._uU(1,"\n  "),t.YNc(2,D,2,1,"span",1),t._uU(3,"\n  "),t.YNc(4,M,4,0,"ng-template",null,2,t.W1O),t._uU(6,"\n\n  "),t.TgZ(7,"app-form",3,4),t._uU(9,"\n    "),t.TgZ(10,"div",5),t._uU(11,"\n      "),t.TgZ(12,"label",6),t._uU(13,"Title"),t.qZA(),t._uU(14,"\n      "),t.TgZ(15,"input",7),t.NdJ("ngModelChange",function(a){return t.CHM(n),t.oxw().formData.title=a}),t.qZA(),t._uU(16,"\n    "),t.qZA(),t._uU(17,"\n  "),t.qZA(),t._uU(18,"\n"),t.qZA()}if(2&e){const n=t.MAs(5),o=t.oxw();t.xp6(2),t.Q6J("ngIf",null==o.pristineData?null:o.pristineData.id)("ngIfElse",n),t.xp6(5),t.Q6J("edit",!0),t.xp6(8),t.Q6J("ngModel",o.formData.title)}}let p=class{constructor(i){this.route=i,this.formData={}}ngOnInit(){this.route.data.pipe((0,h.t)(this)).subscribe(i=>{this.pristineData=i.data,this.formData=Object.assign({},this.pristineData)})}};function Q(e,i){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Oqu(n.value)}}function Y(e,i){if(1&e&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&e){const n=i.$implicit;t.xp6(1),t.Oqu(n)}}function N(e,i){if(1&e&&(t.TgZ(0,"ul"),t._uU(1,"\n        "),t.YNc(2,Y,2,1,"li",8),t._uU(3,"\n      "),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(2),t.Q6J("ngForOf",n.value)}}function w(e,i){if(1&e&&(t.TgZ(0,"li"),t._uU(1,"\n      "),t.TgZ(2,"b"),t._uU(3),t.qZA(),t._uU(4," "),t.YNc(5,Q,2,1,"span",0),t._uU(6,"\n      "),t.YNc(7,N,4,1,"ul",0),t._uU(8,"\n    "),t.qZA()),2&e){const n=i.$implicit,o=t.oxw(2);t.xp6(3),t.hij("",n.key,":"),t.xp6(2),t.Q6J("ngIf",!o.isArray(n.value)),t.xp6(2),t.Q6J("ngIf",o.isArray(n.value))}}p.\u0275fac=function(i){return new(i||p)(t.Y36(s.gz))},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-film-form"]],viewQuery:function(i,n){if(1&i&&t.Gf(g.Ur,5),2&i){let o;t.iGM(o=t.CRH())&&(n.form=o.first)}},decls:2,vars:1,consts:[[4,"ngIf"],["page-title","",4,"ngIf","ngIfElse"],["creationTitle",""],[3,"edit"],["form",""],["app-form-field-feedback","",1,"form-group"],["for","title"],["type","text","id","title","name","title","placeholder","Enter title","minlength","11","required","",1,"form-control",3,"ngModel","ngModelChange"],["page-title",""]],template:function(i,n){1&i&&(t.YNc(0,J,19,4,"app-page",0),t._uU(1,"\n")),2&i&&t.Q6J("ngIf",n.formData)},directives:[u.O5,_.I,L.U,O.I,c.Fj,c.wO,c.Q7,c.JJ,c.On],encapsulation:2}),p=(0,I.gn)([(0,h.c)()],p);const $=function(){return["edit"]};function R(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"app-page"),t._uU(1,"\n  "),t.TgZ(2,"span",1),t._uU(3),t.qZA(),t._uU(4,"\n  "),t.TgZ(5,"div",2),t._uU(6,"\n    "),t.TgZ(7,"a",3),t._uU(8,"\n      "),t._UZ(9,"i",4),t._uU(10,"\n      Edit\n    "),t.qZA(),t._uU(11,"\n    "),t.TgZ(12,"button",5),t.NdJ("click",function(){const l=t.CHM(n).ngIf;return t.oxw().delete(l)}),t._uU(13,"\n      "),t._UZ(14,"i",6),t._uU(15,"\n      Delete\n    "),t.qZA(),t._uU(16,"\n  "),t.qZA(),t._uU(17,"\n\n  "),t.TgZ(18,"ul",7),t._uU(19,"\n    "),t.YNc(20,w,9,3,"li",8),t.ALo(21,"keyvalue"),t._uU(22,"\n  "),t.qZA(),t._uU(23,"\n"),t.qZA()}if(2&e){const n=i.ngIf;t.xp6(3),t.hij("Film: ",n.title,""),t.xp6(4),t.Q6J("routerLink",t.DdM(5,$)),t.xp6(13),t.Q6J("ngForOf",t.lcZ(21,3,n))}}let E=(()=>{class e{constructor(n,o,a){this.route=n,this.router=o,this.service=a}ngOnInit(){this.data$=this.route.data}delete(n){confirm(`Are you sure to delete ${n.title}?`)}isArray(n){return Array.isArray(n)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(s.gz),t.Y36(s.F0),t.Y36(m))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-film-detail"]],decls:3,vars:3,consts:[[4,"ngIf"],["page-title",""],["page-action-bar","",1,"stn-action-bar"],["role","button",1,"btn","btn-outline-info","btn-sm",3,"routerLink"],[1,"fas","fa-pencil-alt","fa-fw"],["type","button",1,"btn","btn-outline-danger","btn-sm",3,"click"],[1,"far","fa-trash-alt","fa-fw"],[1,"o-vertical-list"],[4,"ngFor","ngForOf"]],template:function(n,o){if(1&n&&(t.YNc(0,R,24,6,"app-page",0),t.ALo(1,"async"),t._uU(2,"\n")),2&n){let a;t.Q6J("ngIf",null==(a=t.lcZ(1,1,o.data$))?null:a.data)}},directives:[u.O5,_.I,s.yS,u.sg],pipes:[u.Ov,u.Nd],encapsulation:2}),e})();var z=r(7161);const j=[{path:"",children:[{path:"",pathMatch:"full",component:b,runGuardsAndResolvers:"paramsOrQueryParamsChange",resolve:{page:(()=>{class e{constructor(n){this.service=n,this.searchFilters=["title"]}resolve(n){const o=z.z.filter(n.queryParams,this.searchFilters);return this.service.findAll(o)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(m))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}},{path:"new",pathMatch:"full",component:p},{path:":id/edit",pathMatch:"full",component:p,resolve:{data:Z}},{path:":id",pathMatch:"full",component:E,resolve:{data:Z}}]}];let k=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.Bz.forChild(j)],s.Bz]}),e})(),B=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.ez,c.u5,k,v.jF,g.Kk]]}),e})()}}]);