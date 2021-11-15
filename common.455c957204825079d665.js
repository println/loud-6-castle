"use strict";(self.webpackChunkloud_6_castle=self.webpackChunkloud_6_castle||[]).push([[592],{8354:(y,_,i)=>{i.d(_,{X:()=>d});var e=i(7161),l=i(7716),o=i(6952);let d=(()=>{class n{constructor(s){this.service=s,this.searchFilters=["title"]}resolve(s){const v=e.z.filter(s.queryParams,this.searchFilters);return this.service.findAll(v)}}return n.\u0275fac=function(s){return new(s||n)(l.LFG(o.W))},n.\u0275prov=l.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},6952:(y,_,i)=>{i.d(_,{W:()=>a});var e=i(5257),l=i(8002),o=i(7716),d=i(1841),n=i(4807);let a=(()=>{class s{constructor(m,f){this.http=m,this.converter=f,this.resource="/films"}findAll(m){return this.http.get(this.resource,{params:m}).pipe((0,e.q)(1),(0,l.U)(f=>this.converter.convert(f)))}findById(m){return this.http.get(`${this.resource}/${m}`).pipe((0,e.q)(1),(0,l.U)(f=>(f.id=this.converter.extractId(f.url),f)))}}return s.\u0275fac=function(m){return new(m||s)(o.LFG(d.eN),o.LFG(n.$))},s.\u0275prov=o.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},4807:(y,_,i)=>{i.d(_,{$:()=>l});var e=i(7716);let l=(()=>{class o{convert(n){const a={};a.totalItems=n.count,a.nextPageIndex=this.extractPageIndex(n.next),a.previousPageIndex=this.extractPageIndex(n.previous),a.currentPageIndex=this.getCurrent(a),a.itemsByPage=this.getPageSize(n);const s={};return s.items=this.setId(n.results),s.paging=a,s}extractId(n){let a=n.match(/(\d+)/g)||[];return parseInt(a)}setId(n){return n.map(a=>(a.id=this.extractId(a.url),a))}extractPageIndex(n){if(n){let a=n.match(/(\d+)/g)||[];return this.fixIndex(a)}return 0}getCurrent(n){return n.nextPageIndex?n.nextPageIndex-1:n.previousPageIndex?n.previousPageIndex+1:1}getPageSize(n){return 10}fixIndex(n){return n?parseInt(n):0}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},7161:(y,_,i)=>{i.d(_,{z:()=>e});class e{static filter(o,d=[]){if(!o)return{};const n=["size","page","sort"].concat(d);return Object.entries(o).filter(([a,s])=>n.includes(a)).reduce((a,s)=>(a[s[0]]=s[1],a),{})}}},3338:(y,_,i)=>{i.d(_,{M:()=>E});var e=i(7716),l=i(4655),o=i(8583),d=i(8177),n=i(4996);let a=(()=>{class c{constructor(){this.isLoading=!1,this.changePage=new e.vpe}ngOnInit(){}onChangePage(t){if(t){const r=parseInt(t);this.changePage.emit(r)}}}return c.\u0275fac=function(t){return new(t||c)},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-paging"]],inputs:{data:"data",isLoading:"isLoading"},outputs:{changePage:"changePage"},decls:2,vars:7,consts:[["size","lg",1,"d-flex","justify-content-center",3,"collectionSize","page","pageSize","maxSize","rotate","boundaryLinks","disabled","pageChange"]],template:function(t,r){1&t&&(e.TgZ(0,"ngb-pagination",0),e.NdJ("pageChange",function(g){return r.onChangePage(g)}),e.qZA(),e._uU(1,"\n")),2&t&&e.Q6J("collectionSize",null==r.data?null:r.data.totalItems)("page",null==r.data?null:r.data.currentPageIndex)("pageSize",null==r.data?null:r.data.itemsByPage)("maxSize",3)("rotate",!0)("boundaryLinks",!0)("disabled",r.isLoading)},directives:[n.N9],styles:[""]}),c})();var s=i(3679);const v=["searchForm"],m=["*"];let f=(()=>{class c{constructor(t){this.route=t,this.search=new e.vpe,this.lastQuery={}}ngOnInit(){this.route.queryParams.subscribe(t=>{this.refreshFormParams(t)})}ngAfterViewInit(){this.refreshData&&(this.refreshFormParams(this.refreshData),this.refreshData=void 0)}onFilter(t){const r=this.getFormElements(t.target).reduce((p,P)=>(p[P.name]=P.value?P.value:null,p),{});JSON.stringify(r,(p,P)=>{if(null!==P)return P})!=JSON.stringify(this.lastQuery)&&this.search.emit(r)}refreshFormParams(t){this.form?(this.lastQuery={},this.getFormElements(this.form.nativeElement).forEach(u=>{const g=u.name,p=t[g];p&&(u.value=p,this.lastQuery[g]=p)})):this.refreshData=t}getFormElements(t){return Array.from(t.querySelectorAll("select, input, textarea"))}}return c.\u0275fac=function(t){return new(t||c)(e.Y36(l.gz))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-search-bar"]],viewQuery:function(t,r){if(1&t&&e.Gf(v,5),2&t){let u;e.iGM(u=e.CRH())&&(r.form=u.first)}},outputs:{search:"search"},ngContentSelectors:m,decls:25,vars:0,consts:[[1,"d-flex","flex-row","flex-fill","align-items-center","justify-content-between","mb-1","p-3","rounded","bg-white",3,"submit"],["searchForm",""],[1,"m-1","h5","fw-bold","fs-5"],[1,"row","g-3","align-items-center"],[1,"stn-action-bar"],["type","reset","value","Reset",1,"btn","btn-outline-warning","btn-sm"],[1,"fas","fa-undo","fa-fw"],["type","submit",1,"btn","btn-outline-primary"],[1,"fas","fa-search","fa-fw"]],template:function(t,r){1&t&&(e.F$t(),e.TgZ(0,"form",0,1),e.NdJ("submit",function(g){return r.onFilter(g)}),e._uU(2,"\n  "),e.TgZ(3,"h4",2),e._uU(4,"Filter"),e.qZA(),e._uU(5,"\n  "),e.TgZ(6,"div",3),e._uU(7,"\n    "),e.Hsn(8),e._uU(9,"\n  "),e.qZA(),e._uU(10,"\n  "),e.TgZ(11,"div",4),e._uU(12,"\n    "),e.TgZ(13,"button",5),e._uU(14,"\n      "),e._UZ(15,"i",6),e._uU(16,"\n      Reset\n    "),e.qZA(),e._uU(17,"\n    "),e.TgZ(18,"button",7),e._uU(19,"\n      "),e._UZ(20,"i",8),e._uU(21,"\n      Apply\n    "),e.qZA(),e._uU(22,"\n  "),e.qZA(),e._uU(23,"\n"),e.qZA(),e._uU(24,"\n"))},directives:[s._Y,s.JL,s.F],styles:[""]}),c})();function C(c,h){if(1&c){const t=e.EpF();e.TgZ(0,"app-search-bar",4),e.NdJ("search",function(u){return e.CHM(t),e.oxw().onFilter(u)}),e._uU(1,"\n    "),e.Hsn(2,1),e._uU(3,"\n  "),e.qZA()}}const U=[[["","grid-view",""]],[["","search-fields",""]]],I=["[grid-view]","[search-fields]"];let E=(()=>{class c{constructor(t,r){this.route=t,this.router=r,this.isLoading=!1,this.searchBar=!1}get data(){return this._data}set data(t){t&&(this.isLoading=!1),this._data=t}ngOnInit(){}ngOnDestroy(){}onFilter(t){t&&(this.isLoading=!0,this.navigate(t))}onChangePage(t){t>0&&(this.isLoading=!0,this.navigate({page:t}))}navigate(t){const r=this.makeQueryParams(t);this.router.navigate([],{relativeTo:this.route,queryParams:r})}makeQueryParams(t){const u=Object.assign({},this.route.snapshot.queryParams,t);return Object.keys(t).filter(p=>null==t[p]).forEach(p=>delete u[p]),u}}return c.\u0275fac=function(t){return new(t||c)(e.Y36(l.gz),e.Y36(l.F0))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-grid"]],inputs:{searchBar:"searchBar",data:"data"},ngContentSelectors:I,decls:14,vars:5,consts:[[3,"search",4,"ngIf"],[1,"position-relative"],[3,"isExpandable","isLoading"],[3,"data","isLoading","changePage"],[3,"search"]],template:function(t,r){1&t&&(e.F$t(U),e.ynx(0),e._uU(1,"\n  "),e.YNc(2,C,4,0,"app-search-bar",0),e._uU(3,"\n  "),e.TgZ(4,"div",1),e._uU(5,"\n    "),e._UZ(6,"app-loader",2),e._uU(7,"\n    "),e.Hsn(8),e._uU(9,"\n  "),e.qZA(),e._uU(10,"\n  "),e.TgZ(11,"app-paging",3),e.NdJ("changePage",function(g){return r.onChangePage(g)}),e.qZA(),e._uU(12,"\n"),e.BQk(),e._uU(13,"\n")),2&t&&(e.xp6(2),e.Q6J("ngIf",r.searchBar),e.xp6(4),e.Q6J("isExpandable",!0)("isLoading",r.isLoading),e.xp6(5),e.Q6J("data",null==r.data?null:r.data.paging)("isLoading",r.isLoading))},directives:[o.O5,d.R,a,f],styles:[""]}),c})()},7109:(y,_,i)=>{i.d(_,{I:()=>d});var e=i(7716);const l=[[["","page-title",""]],[["","page-action-bar",""]],"*"],o=["[page-title]","[page-action-bar]","*"];let d=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-page"]],ngContentSelectors:o,decls:13,vars:0,consts:[[1,"container"],[1,"d-flex","flex-row","justify-content-between","align-items-center","mb-3"],[1,"fw-bold"]],template:function(s,v){1&s&&(e.F$t(l),e.TgZ(0,"div",0),e._uU(1,"\n  "),e.TgZ(2,"header",1),e._uU(3,"\n    "),e.TgZ(4,"h2",2),e.Hsn(5),e.qZA(),e._uU(6,"\n    "),e.Hsn(7,1),e._uU(8,"\n  "),e.qZA(),e._uU(9,"\n  "),e.Hsn(10,2),e._uU(11,"\n"),e.qZA(),e._uU(12,"\n"))},styles:[""]}),n})()}}]);