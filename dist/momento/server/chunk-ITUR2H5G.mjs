import './polyfills.server.mjs';
import{a as S,q as F}from"./chunk-2DNYMMVF.mjs";import{p as v,x as I}from"./chunk-PBS24UNO.mjs";import{Hb as s,Jb as b,M as l,Ob as y,Pb as O,Q as d,Ra as r,Sa as u,V as p,_ as g,gb as f,ib as m,mb as C,nb as _,pb as x,qb as h,rb as a,sb as c,tb as M,zb as P}from"./chunk-JVJ3UI2P.mjs";var T=(()=>{let e=class e{constructor(n){this._HttpClient=n}GetData(){return this._HttpClient.get("https://script.google.com/macros/s/AKfycbwoq3YmKn47pBKhUtqPfVSHu3Ub0Fcjirsi14PUP_zDwUM26mX3PF7HpFP5HDVPoj-M/exec").pipe(l(n=>{this.AllData=n,console.log(n)}))}GetImages(){return this._HttpClient.get("https://script.google.com/macros/s/AKfycbxjSZdumyx5ohUa1ezT4eya7jZR56Fu3yYJ1V77qrbFOnlkCVagzeCPMJfUrUFi73tk/exec").pipe(l(n=>{this.AllImages=n,console.log(n.Folder1),console.log(n.Folder1[0])}))}};e.\u0275fac=function(i){return new(i||e)(p(S))},e.\u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var A=t=>["/menu-categories",t];function D(t,e){if(t&1&&(a(0,"div",2)(1,"div",3)(2,"div",4),M(3,"img",5),c(),a(4,"p",6),s(5),c()()()),t&2){let o=e.$implicit;r(),m("routerLink",O(4,A,o.Image_Name)),r(2),m("ngSrc",o.Image_Url)("alt",o.Image_Name),r(2),b(" ",o.Image_Name," ")}}function B(t,e){if(t&1&&(a(0,"h3",0),s(1,"Menu"),c(),a(2,"div",1),x(3,D,6,6,"div",2,_),c()),t&2){let o=P();r(3),h(o.Allimages.Folder1)}}var E=(()=>{let e=class e{constructor(n){this._GetMenuDataService=n}ngOnInit(){this._GetMenuDataService.GetImages().subscribe(),this.Allimages=this._GetMenuDataService.AllImages}};e.\u0275fac=function(i){return new(i||e)(u(T))},e.\u0275cmp=g({type:e,selectors:[["app-menu"]],standalone:!0,features:[y],decls:1,vars:1,consts:[[1,"text-center","Text-Main","my-3"],[1,"row"],[1,"col-4","col-md-4","col-lg-3","p-2","p-lg-4"],["role","button","tabindex","0",1,"Categorie__Container","rounded-3","h-100",3,"routerLink"],[1,"imageContainer","ratio","ratio-4x3"],["fill","",1,"object-fit-contain","rounded-3",3,"ngSrc","alt"],[1,"text-center","text-uppercase","rounded-pill","Bg-Secondary","w-75","mx-auto","text-white","py-3","px-3","fw-bold","h4","mt-3","main_Text"]],template:function(i,k){i&1&&f(0,B,5,0),i&2&&C(0,k.Allimages?0:-1)},dependencies:[I,F,v],styles:[".text-main-headers[_ngcontent-%COMP%]{font-family:Cairo,sans-serif}.Text-Main[_ngcontent-%COMP%]{color:#519aa7}.Text-Secondary[_ngcontent-%COMP%]{color:#dc9e44}.Text-Third[_ngcontent-%COMP%]{color:#5e5c5c}.AR[_ngcontent-%COMP%]{direction:rtl}.text-shadow[_ngcontent-%COMP%]{text-shadow:1px 1px #519aa7}.Bg-Main[_ngcontent-%COMP%]{background-color:#519aa7;color:#fff}.Bg-Secondary[_ngcontent-%COMP%]{background-color:#dc9e44;color:#000}.Bg-Third[_ngcontent-%COMP%]{background-color:#5e5c5c;color:#000}.Bg-RGBA[_ngcontent-%COMP%]{background-color:#00000080}.border-main[_ngcontent-%COMP%]{border-color:#519aa7}.border-secondary[_ngcontent-%COMP%]{border-color:#dc9e44}.imageContainer[_ngcontent-%COMP%]{height:300px;width:100%}.Categorie__Container[_ngcontent-%COMP%]{border:1px solid rgba(255,128,0,.2117647059);transition:.3s all}.Categorie__Container[_ngcontent-%COMP%]:hover{background-color:#ff800036}@media screen and (max-width: 992px){.main_Text[_ngcontent-%COMP%]{font-size:16px!important}.imageContainer[_ngcontent-%COMP%]{height:200px!important}}.main_Text[_ngcontent-%COMP%]{height:60px;display:flex;justify-content:center;align-items:center}"]});let t=e;return t})();export{T as a,E as b};
