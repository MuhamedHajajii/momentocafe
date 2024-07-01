import './polyfills.server.mjs';
import{a as me,d as de}from"./chunk-D7V6UR7A.mjs";import{a as be}from"./chunk-S7NKBHEI.mjs";import{c as pe,d as O,f as S,g as ce,h as M}from"./chunk-GTSSCL6B.mjs";import{c as ie,d as oe,e as re,j as se,k as ae,l as le,n as ue,r as fe,s as he,t as ge}from"./chunk-4GHC2LX5.mjs";import{l as te,m as ne,p as w}from"./chunk-FT32M6ZP.mjs";import{$ as g,Ab as C,Bb as U,Cb as Q,E as R,Eb as X,Fb as Z,Gb as W,Ib as Y,M as A,Ma as B,Pb as x,R as P,S as h,Sa as p,Ta as a,U as E,Ub as J,Vb as K,X as L,aa as b,ca as T,f as _,g as k,ha as H,hb as v,hc as $,jb as s,kb as y,mb as G,pa as V,qc as ee,sb as m,tb as d,ub as u,w as F,ya as q}from"./chunk-GTRTPPCC.mjs";import{a as z,b as j}from"./chunk-VVCT4QZE.mjs";var ye=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=b({type:e}),e.\u0275inj=h({imports:[w,be]});let t=e;return t})();var Ne=["overlay"],ze=["*"];function je(t,e){t&1&&u(0,"div")}function _e(t,e){if(t&1&&(m(0,"div"),v(1,je,1,0,"div",6),d()),t&2){let r=C(2);G(r.spinner.class),y("color",r.spinner.color),p(),s("ngForOf",r.spinner.divArray)}}function ke(t,e){if(t&1&&(u(0,"div",7),J(1,"safeHtml")),t&2){let r=C(2);s("innerHTML",K(1,1,r.template),B)}}function Fe(t,e){if(t&1&&(m(0,"div",2,0),v(2,_e,2,5,"div",3)(3,ke,2,3,"div",4),m(4,"div",5),Q(5),d()()),t&2){let r=C();y("background-color",r.spinner.bdColor)("z-index",r.spinner.zIndex)("position",r.spinner.fullScreen?"fixed":"absolute"),s("@.disabled",r.disableAnimation)("@fadeIn","in"),p(2),s("ngIf",!r.template),p(),s("ngIf",r.template),p(),y("z-index",r.spinner.zIndex)}}var Re={"ball-8bits":16,"ball-atom":4,"ball-beat":3,"ball-circus":5,"ball-climbing-dot":4,"ball-clip-rotate":1,"ball-clip-rotate-multiple":2,"ball-clip-rotate-pulse":2,"ball-elastic-dots":5,"ball-fall":3,"ball-fussion":4,"ball-grid-beat":9,"ball-grid-pulse":9,"ball-newton-cradle":4,"ball-pulse":3,"ball-pulse-rise":5,"ball-pulse-sync":3,"ball-rotate":1,"ball-running-dots":5,"ball-scale":1,"ball-scale-multiple":3,"ball-scale-pulse":2,"ball-scale-ripple":1,"ball-scale-ripple-multiple":3,"ball-spin":8,"ball-spin-clockwise":8,"ball-spin-clockwise-fade":8,"ball-spin-clockwise-fade-rotating":8,"ball-spin-fade":8,"ball-spin-fade-rotating":8,"ball-spin-rotate":2,"ball-square-clockwise-spin":8,"ball-square-spin":8,"ball-triangle-path":3,"ball-zig-zag":2,"ball-zig-zag-deflect":2,cog:1,"cube-transition":2,fire:3,"line-scale":5,"line-scale-party":5,"line-scale-pulse-out":5,"line-scale-pulse-out-rapid":5,"line-spin-clockwise-fade":8,"line-spin-clockwise-fade-rotating":8,"line-spin-fade":8,"line-spin-fade-rotating":8,pacman:6,"square-jelly-box":2,"square-loader":1,"square-spin":1,timer:1,"triangle-skew-spin":1},D={BD_COLOR:"rgba(51,51,51,0.8)",SPINNER_COLOR:"#fff",Z_INDEX:99999},N="primary",c=class t{constructor(e){Object.assign(this,e)}static create(e){return!e?.template&&!e?.type&&console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`),new t(e)}},f=(()=>{let e=class e{constructor(){this.spinnerObservable=new k(null)}getSpinner(i){return this.spinnerObservable.asObservable().pipe(F(n=>n&&n.name===i))}show(i=N,n){return new Promise((o,l)=>{setTimeout(()=>{n&&Object.keys(n).length?(n.name=i,this.spinnerObservable.next(new c(j(z({},n),{show:!0}))),o(!0)):(this.spinnerObservable.next(new c({name:i,show:!0})),o(!0))},10)})}hide(i=N,n=10){return new Promise((o,l)=>{setTimeout(()=>{this.spinnerObservable.next(new c({name:i,show:!1})),o(!0)},n)})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Ce=new E("NGX_SPINNER_CONFIG"),Ae=(()=>{let e=class e{constructor(i){this._sanitizer=i}transform(i){if(i)return this._sanitizer.bypassSecurityTrustHtml(i)}};e.\u0275fac=function(n){return new(n||e)(a(ae,16))},e.\u0275pipe=T({name:"safeHtml",type:e,pure:!0,standalone:!0});let t=e;return t})(),xe=(()=>{let e=class e{constructor(i,n,o,l){this.spinnerService=i,this.changeDetector=n,this.elementRef=o,this.globalConfig=l,this.disableAnimation=!1,this.spinner=new c,this.ngUnsubscribe=new _,this.setDefaultOptions=()=>{let{type:I}=this.globalConfig??{};this.spinner=c.create({name:this.name,bdColor:this.bdColor,size:this.size,color:this.color,type:this.type??I,fullScreen:this.fullScreen,divArray:this.divArray,divCount:this.divCount,show:this.show,zIndex:this.zIndex,template:this.template,showSpinner:this.showSpinner})},this.bdColor=D.BD_COLOR,this.zIndex=D.Z_INDEX,this.color=D.SPINNER_COLOR,this.size="large",this.fullScreen=!0,this.name=N,this.template=null,this.showSpinner=!1,this.divArray=[],this.divCount=0,this.show=!1}initObservable(){this.spinnerService.getSpinner(this.name).pipe(A(this.ngUnsubscribe)).subscribe(i=>{this.setDefaultOptions(),Object.assign(this.spinner,i),i.show&&this.onInputChange(),this.changeDetector.detectChanges()})}ngOnInit(){this.setDefaultOptions(),this.initObservable()}isSpinnerZone(i){return i===this.elementRef.nativeElement.parentElement?!0:i.parentNode&&this.isSpinnerZone(i.parentNode)}ngOnChanges(i){for(let n in i)if(n){let o=i[n];if(o.isFirstChange())return;typeof o.currentValue<"u"&&o.currentValue!==o.previousValue&&o.currentValue!==""&&(this.spinner[n]=o.currentValue,n==="showSpinner"&&(o.currentValue?this.spinnerService.show(this.spinner.name,this.spinner):this.spinnerService.hide(this.spinner.name)),n==="name"&&this.initObservable())}}getClass(i,n){this.spinner.divCount=Re[i],this.spinner.divArray=Array(this.spinner.divCount).fill(0).map((l,I)=>I);let o="";switch(n.toLowerCase()){case"small":o="la-sm";break;case"medium":o="la-2x";break;case"large":o="la-3x";break;default:break}return"la-"+i+" "+o}onInputChange(){this.spinner.class=this.getClass(this.spinner.type,this.spinner.size)}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}};e.\u0275fac=function(n){return new(n||e)(a(f),a($),a(V),a(Ce,8))},e.\u0275cmp=g({type:e,selectors:[["ngx-spinner"]],viewQuery:function(n,o){if(n&1&&X(Ne,5),n&2){let l;Z(l=W())&&(o.spinnerDOM=l.first)}},inputs:{bdColor:"bdColor",size:"size",color:"color",type:"type",fullScreen:"fullScreen",name:"name",zIndex:"zIndex",template:"template",showSpinner:"showSpinner",disableAnimation:"disableAnimation"},standalone:!0,features:[H,x],ngContentSelectors:ze,decls:1,vars:1,consts:[["overlay",""],["class","ngx-spinner-overlay",3,"background-color","z-index","position",4,"ngIf"],[1,"ngx-spinner-overlay"],[3,"class","color",4,"ngIf"],[3,"innerHTML",4,"ngIf"],[1,"loading-text"],[4,"ngFor","ngForOf"],[3,"innerHTML"]],template:function(n,o){n&1&&(U(),v(0,Fe,6,12,"div",1)),n&2&&s("ngIf",o.spinner.show)},dependencies:[Ae,ne,te],styles:[".ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}"],data:{animation:[pe("fadeIn",[ce("in",S({opacity:1})),M(":enter",[S({opacity:0}),O(300)]),M(":leave",O(200,S({opacity:0})))])]},changeDetection:0});let t=e;return t})(),we=(()=>{let e=class e{static forRoot(i){return{ngModule:e,providers:[{provide:Ce,useValue:i}]}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=b({type:e}),e.\u0275inj=h({imports:[w]});let t=e;return t})();var Se=(()=>{let e=class e{constructor(i){this.spinner=i,this.title="Momento"}ngOnInit(){this.spinner.show(),setTimeout(()=>{this.spinner.hide()},1500)}};e.\u0275fac=function(n){return new(n||e)(a(f))},e.\u0275cmp=g({type:e,selectors:[["app-root"]],standalone:!0,features:[x],decls:6,vars:1,consts:[["bdColor","rgba(0, 0, 0, 0.8)","size","medium","color","var(--secondary-color-green)","type","ball-atom",3,"fullScreen"],[1,"mt-5","h1","text-main-poppins",2,"color","white"],[1,"mt-5","pt-5","d-block","mx-auto","text-center"],["width","75","height","75","src","assets/Logo/logo.png","alt","spinnger loading logo momento"]],template:function(n,o){n&1&&(u(0,"router-outlet"),m(1,"ngx-spinner",0)(2,"p",1)(3,"span",2),u(4,"img",3),d(),Y(5," Momento ... "),d()()),n&2&&(p(),s("fullScreen",!0))},dependencies:[ue,ye,we,xe]});let t=e;return t})();var Ie=[{path:"",loadComponent:()=>import("./chunk-XBAYYMW2.mjs").then(t=>t.BlankLayoutComponent),children:[{path:"",loadComponent:()=>import("./chunk-3SATUGKN.mjs").then(t=>t.HomeComponent)},{path:"menu",loadComponent:()=>import("./chunk-Q42WA6KS.mjs").then(t=>t.MenuComponent)},{path:"feedback",loadComponent:()=>import("./chunk-Z27WM5VF.mjs").then(t=>t.FeedbackComponent)},{path:"delivery",loadComponent:()=>import("./chunk-4BJCKYXL.mjs").then(t=>t.DeliveryFormComponent)},{path:"deliveryAdmin",loadComponent:()=>import("./chunk-NUAUM43H.mjs").then(t=>t.DeliveryAdminstrationComponent)},{path:"menu-categories/:id",loadComponent:()=>import("./chunk-Z4LMC6BS.mjs").then(t=>t.MenuCategoriesComponent)},{path:"**",redirectTo:"",pathMatch:"full"}]}];var Oe=(t,e)=>{let r=L(f);return r.show(),e(t).pipe(R(()=>{r.hide()}))};var Ee={scrollPositionRestoration:"top",anchorScrolling:"enabled"},Le=he(Ee),Me={providers:[fe(Ie,ge(),Le),le(),ie(re(),oe([Oe])),me(),{provide:q,useValue:{disableImageSizeWarning:!0,disableImageLazyLoadWarning:!0}}]};var Te={providers:[de()]},De=ee(Me,Te);var He=()=>se(Se,De),Rt=He;export{Rt as a};