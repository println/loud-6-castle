"use strict";(self.webpackChunkloud_6_castle=self.webpackChunkloud_6_castle||[]).push([[592],{125:(l,i,a)=>{a.d(i,{$:()=>o});var s=a(1180),t=a(5879);let o=(()=>{var _;class u{convert(e){const n={};n.totalItems=e.count,n.nextPageIndex=this.extractPageIndex(e.next),n.previousPageIndex=this.extractPageIndex(e.previous),n.currentPageIndex=this.getCurrent(n),n.itemsByPage=this.getPageSize(e);const c={};return c.items=this.setId(e.results),c.paging=n,c}extractId(e){let n=e.match(/(\d+)/g)||[];return parseInt(n)}setId(e){return e.map(n=>(n.id=this.extractId(n.url),n))}extractPageIndex(e){if(e){let n=e.match(/(\d+)/g)||[];return this.fixIndex(n)}return 0}getCurrent(e){return e.nextPageIndex?e.nextPageIndex-1:e.previousPageIndex?e.previousPageIndex+1:1}getPageSize(e){return 10}fixIndex(e){return e?parseInt(e):0}}return _=u,(0,s.Z)(u,"\u0275fac",function(e){return new(e||_)}),(0,s.Z)(u,"\u0275prov",t.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})),u})()},810:(l,i,a)=>{a.d(i,{z:()=>s});class s{static filter(o,_=[]){if(!o)return{};const u=["size","page","sort"].concat(_);return Object.entries(o).filter(([r,e])=>u.includes(r)).reduce((r,e)=>(r[e[0]]=e[1],r),{})}}},2114:(l,i,a)=>{a.d(i,{I:()=>u});var s=a(1180),t=a(5879);const o=[[["","page-title",""]],[["","page-action-bar",""]],"*"],_=["[page-title]","[page-action-bar]","*"];let u=(()=>{var r;class e{constructor(){}ngOnInit(){}}return r=e,(0,s.Z)(e,"\u0275fac",function(c){return new(c||r)}),(0,s.Z)(e,"\u0275cmp",t.Xpm({type:r,selectors:[["app-page"]],ngContentSelectors:_,decls:13,vars:0,consts:[[1,"container"],[1,"d-flex","flex-row","justify-content-between","align-items-center","mb-3"],[1,"fw-bold"]],template:function(c,d){1&c&&(t.F$t(o),t.TgZ(0,"div",0),t._uU(1,"\n  "),t.TgZ(2,"header",1),t._uU(3,"\n    "),t.TgZ(4,"h2",2),t.Hsn(5),t.qZA(),t._uU(6,"\n    "),t.Hsn(7,1),t._uU(8,"\n  "),t.qZA(),t._uU(9,"\n  "),t.Hsn(10,2),t._uU(11,"\n"),t.qZA(),t._uU(12,"\n"))},encapsulation:2})),e})()}}]);