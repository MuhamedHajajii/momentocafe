import './polyfills.server.mjs';
import{e as j}from"./chunk-4FUIBHC6.mjs";import{a as F}from"./chunk-245ML5WM.mjs";import{n as A,q as y}from"./chunk-4GHC2LX5.mjs";import{d as S,p as T,s as I}from"./chunk-FT32M6ZP.mjs";import{$ as f,Ab as d,B as w,Ib as s,Oa as E,Pb as h,R as O,S as L,Sa as b,Ta as u,_a as D,aa as P,g as M,hb as v,ia as g,ja as m,nb as x,sb as n,tb as o,u as k,ua as z,ub as r,yb as C,zb as p}from"./chunk-GTRTPPCC.mjs";import{h as B}from"./chunk-VVCT4QZE.mjs";var V=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=P({type:a});static \u0275inj=L({imports:[T,j]})}return a})();function H(a,t){if(a&1){let c=C();n(0,"div",12),p("click",function(){g(c);let e=d();return m(e.onToggleLightBox())}),n(1,"div",13),p("click",function(e){g(c);let l=d();return m(l.stopProp(e))}),n(2,"button",14),p("click",function(){g(c);let e=d();return m(e.onToggleLightBox())}),o(),r(3,"iframe",15),o()()}}var R=(()=>{let t=class t{constructor(i,e,l,U){this.platformId=i,this.document=e,this.zone=l,this._GetMenuDataService=U,this.toggleLightBox=!1}ngOnInit(){this._GetMenuDataService.GetData().subscribe(),this._GetMenuDataService.GetImages().subscribe(),this.StartAnimation(),this.delayDisplayVideo()}StartAnimation(){I(this.platformId)&&(this.document.readyState!=="loading"?this.loadAOS():this.document.addEventListener("DOMContentLoaded",()=>this.loadAOS()))}loadAOS(){return B(this,null,function*(){try{let{default:i}=yield import("./chunk-BRKGCAII.mjs");i.init(),i.refresh()}catch(i){console.error("Error loading AOS:",i)}})}delayDisplayVideo(){this.document.readyState!=="loading"&&this.zone.runOutsideAngular(()=>{k(5e3).pipe(w(1)).subscribe(()=>{this.toggleLightBox=!0})})}onToggleLightBox(){this.toggleLightBox=!this.toggleLightBox}stopProp(i){i.stopPropagation()}};t.\u0275fac=function(e){return new(e||t)(u(z),u(S),u(D),u(F))},t.\u0275cmp=f({type:t,selectors:[["app-nav-blank"]],standalone:!0,features:[h],decls:15,vars:1,consts:[[1,"container-fluid"],[1,"list-unstyled","p-0","m-0","d-flex","align-items-center","justify-content-between","py-3","border-bottom","border-3"],["routerLink","feedback","role","button",1,"btn-outline-main","mx-1","text-warning"],[1,"fa-solid","fa-star"],["routerLink","/menu",1,"navLink"],[1,"btn","fs-3","pb-0","Text-Secondary"],[1,"fa-solid","fa-bars","fs-1"],[1,"list-unstyled","p-0","m-0","d-flex","align-items-center","justify-content-center","px-2","pt-3"],[1,"SecitonLoad"],["routerLink","/",1,"nav-link","logocontainer","mx-auto"],["src","assets/Logo/logo.png","alt","momento logo",1,"w-100"],[1,"lightBoxContainer","position-fixed","top-0","start-0","end-0","bottom-0","d-flex","justify-content-center","align-items-center","Bg-RGBA","z-3","SecitonLoad"],[1,"lightBoxContainer","position-fixed","top-0","start-0","end-0","bottom-0","d-flex","justify-content-center","align-items-center","Bg-RGBA","z-3","SecitonLoad",3,"click"],["data-aos","fade-up","data-aos-duration","1000",1,"lightBoxContent","d-flex","justify-content-center","align-items-center","position-relative",3,"click"],[1,"btn-close","px-4","position-absolute","Bg-Main","end-0","m-3","bottom-100",3,"click"],["src",E`https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100092714241423%2Fvideos%2F972463054319705%2F&show_text=false&width=560&t=0`,"width","560","height","314","scrolling","no","frameborder","0","allowfullscreen","true","allow","autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share","allowFullScreen","true",2,"border","none","overflow","hidden"]],template:function(e,l){e&1&&(n(0,"header")(1,"div",0)(2,"ul",1)(3,"li",2),s(4," Rate Us "),r(5,"i",3),o(),n(6,"li",4)(7,"button",5),r(8,"i",6),o()()()(),n(9,"nav")(10,"ul",7)(11,"li",8)(12,"a",9),r(13,"img",10),o()()()()(),v(14,H,4,0,"div",11)),e&2&&(b(14),x(14,l.toggleLightBox?14:-1))},dependencies:[y,V],styles:['.text-main-headers[_ngcontent-%COMP%]{font-family:Cairo,sans-serif}.Text-Main[_ngcontent-%COMP%]{color:#519aa7}.Text-Secondary[_ngcontent-%COMP%]{color:#dc9e44}.Text-Third[_ngcontent-%COMP%]{color:#5e5c5c}.AR[_ngcontent-%COMP%]{direction:rtl}.text-shadow[_ngcontent-%COMP%]{text-shadow:1px 1px #519aa7}.Bg-Main[_ngcontent-%COMP%]{background-color:#519aa7;color:#fff}.Bg-Secondary[_ngcontent-%COMP%]{background-color:#dc9e44;color:#000}.Bg-Third[_ngcontent-%COMP%]{background-color:#5e5c5c;color:#000}.Bg-RGBA[_ngcontent-%COMP%]{background-color:#00000080}.border-main[_ngcontent-%COMP%]{border-color:#519aa7}.border-secondary[_ngcontent-%COMP%]{border-color:#dc9e44}.logocontainer[_ngcontent-%COMP%]{width:100px;height:100px}.header[_ngcontent-%COMP%]{background-image:url(/assets/bgmain.png);background-size:100% 100%;background-repeat:no-repeat;min-height:30vh}span.d-block[_ngcontent-%COMP%]{line-height:20px}.navLink[_ngcontent-%COMP%]{position:relative}.navLink[_ngcontent-%COMP%]:after{content:"";transition:.3s all;position:absolute;top:100%;left:50%;right:50%;height:3px;border-radius:5px;background-color:#519aa7}.navLink[_ngcontent-%COMP%]:hover:after{left:0;right:0}']});let a=t;return a})();var N=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=f({type:t,selectors:[["app-footer"]],standalone:!0,features:[h],decls:24,vars:0,consts:[[1,"main"],[1,"container","py-2","mb-1"],[1,"d-flex","justify-content-lg-between","justify-content-center","align-items-center","flex-wrap"],[1,"d-flex","justify-content-start","align-items-center"],["width","75","height","75","src","/assets/Logo/logo.png","alt","momento site logo"],[1,"text-center","Text-Main","mb-0","px-2"],[1,"d-block","text-uppercase"],[1,"d-block","fs-6"],[1,"Text-Main","fs-6","px-2","m-0"],["width","60","height","60","src","/assets/Logo/delevery (2).svg","alt","delevery button"],[1,"Text-Main","d-flex","justify-content-start","align-items-center","flex-column","text-uppercase"],[1,"mb-0"],[1,"fa-solid","fa-location-dot","px-1"]],template:function(e,l){e&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div"),r(5,"img",4),o(),n(6,"h2",5)(7,"span",6),s(8,"Momento"),o(),n(9,"span",7),s(10,"mini market & cafe"),o()()(),n(11,"div",3)(12,"h3",8),s(13,"01028057480 - 01222257743"),o(),r(14,"img",9),o(),n(15,"div",10)(16,"div",3)(17,"P",11),s(18,"BORG ELARAB, AZHA MALL, GROUND FLOOR"),o(),r(19,"i",12),o(),n(20,"div",3)(21,"P",11),s(22,"BORG ELARAB, down town MALL, GROUND FLOOR"),o(),r(23,"i",12),o()()()()())},styles:[".main[_ngcontent-%COMP%]{background-color:#e3e2e1}"]});let a=t;return a})();var G=(()=>{let t=class t{constructor(){this.toggleLightBox=new M(!1)}};t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=O({token:t,factory:t.\u0275fac,providedIn:"root"});let a=t;return a})();function q(a,t){if(a&1){let c=C();n(0,"div",2),p("click",function(){g(c);let e=d();return m(e.toggleLightBox())}),n(1,"div",3),p("click",function(e){g(c);let l=d();return m(l.stopProp(e))}),n(2,"button",4),p("click",function(){g(c);let e=d();return m(e.toggleLightBox())}),o(),n(3,"div",5)(4,"button",6),p("click",function(){g(c);let e=d();return m(e.toggleLightBox())}),s(5," Order Online "),r(6,"i",7),o(),n(7,"button",8),s(8,"Call Us "),r(9,"i",9),o(),n(10,"div",10)(11,"p"),s(12,"01028057480"),o(),n(13,"p",11),s(14,"or"),o(),n(15,"p"),s(16,"01222257743"),o()()()()()}}var _e=(()=>{let t=class t{constructor(i){this._EventsService=i,this.isLightBox=!1}ngOnInit(){this._EventsService.toggleLightBox.subscribe(i=>this.isLightBox=i)}toggleLightBox(){this.isLightBox=!this.isLightBox}stopProp(i){i.stopPropagation()}};t.\u0275fac=function(e){return new(e||t)(u(G))},t.\u0275cmp=f({type:t,selectors:[["app-blank-layout"]],standalone:!0,features:[h],decls:6,vars:1,consts:[[1,"flex-grow-1"],[1,"lightBoxContainer"],[1,"lightBoxContainer",3,"click"],[1,"ligtBoxContent","rounded-4","p-4","position-relative",3,"click"],[1,"btn-close","position-absolute","top-0","end-0","m-3",3,"click"],[1,"fs-2","d-flex","flex-column","justify-content-evenly","align-items-center"],["routerLink","/delivery",1,"my-4",3,"click"],[1,"fa-solid","fa-earth-americas"],[1,"my-4"],[1,"fa-solid","fa-headset"],[1,"fw-bold"],[1,"text-center"]],template:function(e,l){e&1&&(r(0,"app-nav-blank"),n(1,"div",0),r(2,"router-outlet"),o(),n(3,"footer"),r(4,"app-footer"),o(),v(5,q,17,0,"div",1)),e&2&&(b(5),x(5,l.isLightBox?5:-1))},dependencies:[A,R,N,y],styles:["[_nghost-%COMP%]{min-height:100vh;display:flex;justify-content:space-between;flex-direction:column}.text-main-headers[_ngcontent-%COMP%]{font-family:Cairo,sans-serif}.Text-Main[_ngcontent-%COMP%]{color:#519aa7}.Text-Secondary[_ngcontent-%COMP%]{color:#dc9e44}.Text-Third[_ngcontent-%COMP%]{color:#5e5c5c}.AR[_ngcontent-%COMP%]{direction:rtl}.text-shadow[_ngcontent-%COMP%]{text-shadow:1px 1px #519aa7}.Bg-Main[_ngcontent-%COMP%]{background-color:#519aa7;color:#fff}.Bg-Secondary[_ngcontent-%COMP%]{background-color:#dc9e44;color:#000}.Bg-Third[_ngcontent-%COMP%]{background-color:#5e5c5c;color:#000}.Bg-RGBA[_ngcontent-%COMP%]{background-color:#00000080}.border-main[_ngcontent-%COMP%]{border-color:#519aa7}.border-secondary[_ngcontent-%COMP%]{border-color:#dc9e44}.lightBoxContainer[_ngcontent-%COMP%]{position:fixed;background-color:#00000080;z-index:99;inset:0;display:flex;justify-content:center;align-items:center}.lightBoxContainer[_ngcontent-%COMP%]   .ligtBoxContent[_ngcontent-%COMP%]{max-width:600px;min-height:300px;background-color:#fff}"]});let a=t;return a})();export{_e as a};
