import './polyfills.server.mjs';
import{a as w,b as O}from"./chunk-FIVTPR4I.mjs";import{m as A}from"./chunk-4GHC2LX5.mjs";import"./chunk-FT32M6ZP.mjs";import{$ as v,Ab as b,Ib as s,Jb as D,Kb as l,Na as x,Pb as I,Sa as r,Ta as p,Ub as M,Wb as S,ca as _,hb as C,jb as h,nb as y,ob as d,qb as u,rb as f,sb as o,tb as c,ub as g}from"./chunk-GTRTPPCC.mjs";import"./chunk-VVCT4QZE.mjs";var G=(()=>{let e=class e{transform(n,i){return n.filter(m=>m.Category_Name===i)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275pipe=_({name:"categories",type:e,pure:!0,standalone:!0});let t=e;return t})();function F(t,e){if(t&1&&(o(0,"div",6)(1,"p",7),s(2),o(3,"span",8),s(4),c()(),o(5,"p",9),s(6),c(),o(7,"p",9),s(8),c()()),t&2){let a=e.$implicit;r(2),l(" ",a.Name," "),r(2),D(a.Description),r(2),l(" ",a.Small_Price," "),r(2),l(" ",a.Double_Price," ")}}function T(t,e){if(t&1&&u(0,F,9,4,"div",6,d),t&2){let a=e.$implicit;f(a.Items)}}function E(t,e){if(t&1&&(o(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),g(4,"img",4),c(),o(5,"p",5),s(6),c()(),u(7,T,2,0,null,null,d),M(9,"categories"),c()()),t&2){let a=b();r(4),h("src",a.CurrentImage,x),r(2),l(" ",a.ActivatedCategory," "),r(),f(S(9,2,a.AllData,a.ActivatedCategory))}}var z=(()=>{let e=class e{constructor(n,i){this._GetMenuDataService=n,this._ActivatedRoute=i}ngOnInit(){this._GetMenuDataService.GetData().subscribe(),this._GetMenuDataService.GetImages().subscribe(),this.get_ActivatedRoute()}get_ActivatedRoute(){this._ActivatedRoute.paramMap.subscribe({next:n=>{this.ActivatedCategory=n.get("id"),this.loadData(),this.loadDataImage()}})}loadDataImage(){this._GetMenuDataService.AllImages.subscribe({next:n=>{n?.Folder1.map(i=>{i.Image_Name===this.ActivatedCategory&&(this.CurrentImage=i.Image_Url)})}})}loadData(){this._GetMenuDataService.AllData.subscribe({next:n=>{this.AllData=n}})}};e.\u0275fac=function(i){return new(i||e)(p(w),p(A))},e.\u0275cmp=v({type:e,selectors:[["app-menu-categories"]],standalone:!0,features:[I],decls:2,vars:1,consts:[[1,"Bg-Secondary","py-5","mt-3"],[1,"container","text-uppercase"],[1,"mb-3","d-flex","justify-content-center","align-items-center"],[1,"bg-white","rounded-circle"],["width","75","height","75","role","presentation","referrerpolicy","no-referrer",1,"rounded-circle","position-relative","z-2",3,"src"],[1,"fs-3","mb-0","ps-4","pe-3","bg-white","rounded-end-pill","text-nowrap"],[1,"row","text-center","border-bottom","animateOnLog"],[1,"bg-white","col-8","fs-6","mb-0"],[1,"d-block","fs-6","Text-Secondary"],[1,"bg-white","col-2","fs-6","mb-0","d-flex","justify-content-center","align-items-center"]],template:function(i,m){i&1&&(C(0,E,10,5,"section",0),g(1,"app-menu")),i&2&&y(0,m.AllData?0:-1)},dependencies:[G,O],styles:["p.rounded-end-pill[_ngcontent-%COMP%]{transform:translate(-20px);position:relative;z-index:1}.animateOnLog[_ngcontent-%COMP%]{transform:translateY(-10px);opacity:0;animation:_ngcontent-%COMP%_animateOnLog .8s forwards}@keyframes _ngcontent-%COMP%_animateOnLog{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}"]});let t=e;return t})();export{z as MenuCategoriesComponent};