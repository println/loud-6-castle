"use strict";(self.webpackChunkloud_6_castle=self.webpackChunkloud_6_castle||[]).push([[252],{252:(J,U,u)=>{u.r(U),u.d(U,{SessionModule:()=>R});var i=u(1180),p=u(6814),h=u(2196),c=u(7300),l=u(9348),f=u(2096),t=u(5879),v=u(9895),g=u(8180),m=u(7398),A=u(9862),T=u(8553);let d=(()=>{var o;class e{constructor(n,r){(0,i.Z)(this,"http",void 0),(0,i.Z)(this,"service",void 0),this.http=n,this.service=r}findAll(n){return this.service.getAll(n).pipe((0,g.q)(1),(0,m.U)(r=>v.w.fromPaging(r)))}findById(n){return this.service.getById11(n).pipe((0,g.q)(1))}}return o=e,(0,i.Z)(e,"\u0275fac",function(n){return new(n||o)(t.LFG(A.eN),t.LFG(T.rc))}),(0,i.Z)(e,"\u0275prov",t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})),e})();var _=u(2114);const y=function(o){return[o]};function q(o,e){if(1&o){const s=t.EpF();t.TgZ(0,"app-page"),t._uU(1,"\n  "),t.TgZ(2,"span",1),t._uU(3),t.qZA(),t._uU(4,"\n  "),t.TgZ(5,"div",2),t._uU(6,"\n    "),t.TgZ(7,"a",3),t._uU(8,"\n      "),t._UZ(9,"i",4),t._uU(10),t.qZA(),t._uU(11,"\n    "),t.TgZ(12,"button",5),t.NdJ("click",function(){const a=t.CHM(s).ngIf,Z=t.oxw();return t.KtG(Z.delete(a))}),t._uU(13,"\n      "),t._UZ(14,"i",6),t._uU(15),t.qZA(),t._uU(16,"\n  "),t.qZA(),t._uU(17,"\n\n  "),t.TgZ(18,"figure",7),t._uU(19,"\n    "),t.TgZ(20,"div",8),t._uU(21,"\n      "),t._UZ(22,"img",9),t._uU(23,"\n    "),t.qZA(),t._uU(24,"\n    "),t.TgZ(25,"figcaption",10),t._uU(26,"\n      "),t.TgZ(27,"div",11),t._uU(28,"\n        "),t.TgZ(29,"h3",12),t._uU(30),t.qZA(),t._uU(31,"\n        "),t.TgZ(32,"ul",13),t._uU(33,"\n          "),t.TgZ(34,"li",14)(35,"strong"),t._uU(36,"#ID:"),t.qZA(),t._uU(37),t.qZA(),t._uU(38,"\n          "),t.TgZ(39,"li",14)(40,"strong"),t._uU(41,"Account:"),t.qZA(),t._uU(42),t.qZA(),t._uU(43,"\n          "),t.TgZ(44,"li",14)(45,"strong"),t._uU(46,"Revoked:"),t.qZA(),t._uU(47),t.qZA(),t._uU(48,"\n          "),t.TgZ(49,"li",14)(50,"strong"),t._uU(51,"Expired:"),t.qZA(),t._uU(52),t.qZA(),t._uU(53,"\n          "),t.TgZ(54,"li",14)(55,"strong"),t._uU(56,"Type:"),t.qZA(),t._uU(57),t.qZA(),t._uU(58,"\n          "),t.TgZ(59,"li",14)(60,"strong"),t._uU(61,"Created At:"),t.qZA(),t._uU(62),t.qZA(),t._uU(63,"\n          "),t.TgZ(64,"li",14)(65,"strong"),t._uU(66,"Last Modified:"),t.qZA(),t._uU(67),t.qZA(),t._uU(68,"\n        "),t.qZA(),t._uU(69,"\n      "),t.qZA(),t._uU(70,"\n    "),t.qZA(),t._uU(71,"\n  "),t.qZA(),t._uU(72,"\n"),t.qZA()}if(2&o){const s=e.ngIf,n=t.oxw();t.xp6(3),t.Oqu(n.routes.admin.children.session.title),t.xp6(4),t.Q6J("routerLink",t.VKq(12,y,n.paths.edit)),t.xp6(3),t.hij("\n      ",n.paths.toTitle(n.paths.edit),"\n    "),t.xp6(5),t.hij("\n      ",n.paths.toTitle(n.paths.delete),"\n    "),t.xp6(15),t.Oqu(s.name),t.xp6(7),t.hij(" ",s.id,""),t.xp6(5),t.hij(" ",s.accountId,""),t.xp6(5),t.hij(" ",s.revoked,""),t.xp6(5),t.hij(" ",s.expired,""),t.xp6(5),t.hij(" ",s.tokenType,""),t.xp6(5),t.hij(" ",s.createdAt,""),t.xp6(5),t.hij(" ",s.lastModified,"")}}let x=(()=>{var o;class e{constructor(n,r,a){(0,i.Z)(this,"route",void 0),(0,i.Z)(this,"router",void 0),(0,i.Z)(this,"service",void 0),(0,i.Z)(this,"routes",l.Z6),(0,i.Z)(this,"paths",l.yy),(0,i.Z)(this,"data$",(0,f.of)({})),this.route=n,this.router=r,this.service=a}ngOnInit(){this.data$=this.route.data}delete(n){confirm(`Are you sure to delete ${n.accountId}?`)}}return o=e,(0,i.Z)(e,"\u0275fac",function(n){return new(n||o)(t.Y36(c.gz),t.Y36(c.F0),t.Y36(d))}),(0,i.Z)(e,"\u0275cmp",t.Xpm({type:o,selectors:[["app-session-detail"]],decls:3,vars:3,consts:[[4,"ngIf"],["page-title",""],["page-action-bar","",1,"stn-action-bar"],["role","button",1,"btn","btn-outline-info","btn-sm",3,"routerLink"],[1,"fas","fa-pencil-alt","fa-fw"],["type","button",1,"btn","btn-outline-danger","btn-sm",3,"click"],[1,"far","fa-trash-alt","fa-fw"],[1,"card","d-flex","flex-row"],[1,"row","g-0"],["src","assets/images/default-profile.png",1,"img-fluid","rounded-start"],[1,"col-md-8"],[1,"card-body"],[1,"card-title"],[1,"list-unstyled"],[1,"card-text"]],template:function(n,r){if(1&n&&(t.YNc(0,q,73,14,"app-page",0),t.ALo(1,"async"),t._uU(2,"\n")),2&n){let a;t.Q6J("ngIf",null==(a=t.lcZ(1,1,r.data$))?null:a.data)}},dependencies:[p.O5,c.rH,_.I,p.Ov],encapsulation:2})),e})();var S=u(810);let C=(()=>{var o;class e{constructor(n){(0,i.Z)(this,"service",void 0),(0,i.Z)(this,"searchFilters",["name"]),this.service=n}resolve(n){const r=S.z.filter(n.queryParams,this.searchFilters);return this.service.findAll(r)}}return o=e,(0,i.Z)(e,"\u0275fac",function(n){return new(n||o)(t.LFG(d))}),(0,i.Z)(e,"\u0275prov",t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})),e})();var L=u(2702);const I=function(o,e){return[o,e]};function F(o,e){if(1&o){const s=t.EpF();t.TgZ(0,"tr"),t._uU(1,"\n            "),t.TgZ(2,"td"),t._uU(3),t.qZA(),t._uU(4,"\n            "),t.TgZ(5,"td"),t._uU(6),t.qZA(),t._uU(7,"\n            "),t.TgZ(8,"td"),t._uU(9),t.qZA(),t._uU(10,"\n            "),t.TgZ(11,"td"),t._uU(12),t.qZA(),t._uU(13,"\n            "),t.TgZ(14,"td"),t._uU(15),t.qZA(),t._uU(16,"\n            "),t.TgZ(17,"td"),t._uU(18,"\n              "),t.TgZ(19,"a",9),t._uU(20,"\n                "),t._UZ(21,"i",10),t._uU(22),t.qZA(),t._uU(23,"\n              "),t.TgZ(24,"a",11),t._uU(25,"\n                "),t._UZ(26,"i",12),t._uU(27,"\n              "),t.qZA(),t._uU(28,"\n              "),t.TgZ(29,"button",13),t.NdJ("click",function(r){const Z=t.CHM(s).$implicit,B=t.oxw(2);return t.KtG(B.delete(Z,r))}),t._uU(30,"\n                "),t._UZ(31,"i",14),t._uU(32,"\n              "),t.qZA(),t._uU(33,"\n            "),t.qZA(),t._uU(34,"\n          "),t.qZA()}if(2&o){const s=e.$implicit,n=t.oxw(2);t.xp6(3),t.Oqu(s.accountUsername),t.xp6(3),t.Oqu(s.revoked),t.xp6(3),t.Oqu(s.expired),t.xp6(3),t.Oqu(s.tokenType),t.xp6(3),t.Oqu(s.createdAt),t.xp6(4),t.Q6J("routerLink",s.id),t.xp6(3),t.hij("\n                ",n.paths.toTitle(n.paths.view),"\n              "),t.xp6(2),t.Q6J("routerLink",t.WLB(8,I,s.id,n.paths.edit))}}function b(o,e){if(1&o&&(t.TgZ(0,"div"),t._uU(1,"\n    "),t.TgZ(2,"app-grid",2),t._uU(3,"\n      "),t.ynx(4,3),t._uU(5,"\n        "),t.TgZ(6,"div",4),t._uU(7,"\n          "),t._UZ(8,"input",5),t._uU(9,"\n        "),t.qZA(),t._uU(10,"\n      "),t.BQk(),t._uU(11,"\n\n      "),t.TgZ(12,"table",6),t._uU(13,"\n        "),t.TgZ(14,"thead"),t._uU(15,"\n          "),t.TgZ(16,"tr"),t._uU(17,"\n            "),t.TgZ(18,"th",7),t._uU(19,"Account Id"),t.qZA(),t._uU(20,"\n            "),t.TgZ(21,"th",7),t._uU(22,"Revoked"),t.qZA(),t._uU(23,"\n            "),t.TgZ(24,"th",7),t._uU(25,"Expired"),t.qZA(),t._uU(26,"\n            "),t.TgZ(27,"th",7),t._uU(28,"Type"),t.qZA(),t._uU(29,"\n            "),t.TgZ(30,"th",7),t._uU(31,"Create At"),t.qZA(),t._uU(32,"\n            "),t.TgZ(33,"th",7),t._uU(34,"Actions"),t.qZA(),t._uU(35,"\n          "),t.qZA(),t._uU(36,"\n        "),t.qZA(),t._uU(37,"\n        "),t.TgZ(38,"tbody"),t._uU(39,"\n          "),t.YNc(40,F,35,11,"tr",8),t._uU(41,"\n        "),t.qZA(),t._uU(42,"\n      "),t.qZA(),t._uU(43,"\n    "),t.qZA(),t._uU(44,"\n  "),t.qZA()),2&o){const s=e.ngIf;t.xp6(2),t.Q6J("data",s)("searchBar",!0),t.xp6(38),t.Q6J("ngForOf",s.items)}}const j=[{path:l.yy.empty,children:[{path:l.yy.empty,pathMatch:"full",component:(()=>{var o;class e{constructor(n,r){(0,i.Z)(this,"route",void 0),(0,i.Z)(this,"router",void 0),(0,i.Z)(this,"routes",l.Z6),(0,i.Z)(this,"paths",l.yy),(0,i.Z)(this,"data$",void 0),this.route=n,this.router=r}ngOnInit(){this.data$=this.route.data}changePage(n,r){this.navigate({page:r})}delete(n,r){}navigate(n){this.router.navigate([],{relativeTo:this.route,queryParams:n})}}return o=e,(0,i.Z)(e,"\u0275fac",function(n){return new(n||o)(t.Y36(c.gz),t.Y36(c.F0))}),(0,i.Z)(e,"\u0275cmp",t.Xpm({type:o,selectors:[["app-account-list"]],decls:9,vars:4,consts:[["page-title",""],[4,"ngIf"],[3,"data","searchBar"],["search-fields",""],[1,"col-auto"],["id","title","name","title","placeholder","Title","type","text",1,"form-control"],["grid-view","",1,"table","table-striped","table-hover"],["scope","col"],[4,"ngFor","ngForOf"],["role","button",1,"btn","btn-outline-primary","btn-sm",3,"routerLink"],[1,"far","fa-eye","fa-tw"],["role","button",1,"btn","btn-outline-info","btn-sm",3,"routerLink"],[1,"fas","fa-pencil-alt","fa-fw"],["type","button",1,"btn","btn-outline-danger","btn-sm",3,"click"],[1,"far","fa-trash-alt","fa-fw"]],template:function(n,r){if(1&n&&(t.TgZ(0,"app-page"),t._uU(1,"\n  "),t.TgZ(2,"span",0),t._uU(3),t.qZA(),t._uU(4,"\n\n  "),t.YNc(5,b,45,3,"div",1),t.ALo(6,"async"),t._uU(7,"\n"),t.qZA(),t._uU(8,"\n")),2&n){let a;t.xp6(3),t.Oqu(r.routes.admin.children.session.plural.title),t.xp6(2),t.Q6J("ngIf",null==(a=t.lcZ(6,2,r.data$))?null:a.page)}},dependencies:[p.sg,p.O5,c.rH,L.M,_.I,p.Ov],encapsulation:2})),e})(),runGuardsAndResolvers:"paramsOrQueryParamsChange",resolve:{page:C}},{path:l.yy.pathId,pathMatch:"full",component:x,resolve:{data:(()=>{var o;class e{constructor(n){(0,i.Z)(this,"service",void 0),this.service=n}resolve(n){const r=n.paramMap.get("id");return this.service.findById(r)}}return o=e,(0,i.Z)(e,"\u0275fac",function(n){return new(n||o)(t.LFG(d))}),(0,i.Z)(e,"\u0275prov",t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})),e})()}}]}];let k=(()=>{var o;class e{}return o=e,(0,i.Z)(e,"\u0275fac",function(n){return new(n||o)}),(0,i.Z)(e,"\u0275mod",t.oAB({type:o})),(0,i.Z)(e,"\u0275inj",t.cJS({imports:[c.Bz.forChild(j),c.Bz]})),e})(),R=(()=>{var o;class e{}return o=e,(0,i.Z)(e,"\u0275fac",function(n){return new(n||o)}),(0,i.Z)(e,"\u0275mod",t.oAB({type:o})),(0,i.Z)(e,"\u0275inj",t.cJS({imports:[p.ez,k,h.Kk]})),e})()}}]);