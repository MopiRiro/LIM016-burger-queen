"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[934],{3934:(k,h,s)=>{s.r(h),s.d(h,{WaiterviewModule:()=>D});var p=s(9808),g=s(7554),t=s(5e3),f=s(2468),d=s(2382);let C=(()=>{class n{constructor(){this.disparadorShoppinngCar=new t.vpe}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),Z=(()=>{class n{constructor(e){this.shoppingCarService=e}ngOnInit(){}addProduct(){this.shoppingCarService.disparadorShoppinngCar.emit({data:this.data})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(C))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-card-product"]],inputs:{data:"data"},decls:11,vars:4,consts:[[1,"card","containerProduct",3,"id"],["alt","...",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"btnContainerAdd"],["type","button",1,"btn",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"div",2),t.TgZ(3,"div"),t.TgZ(4,"h5",3),t._uU(5),t.qZA(),t.TgZ(6,"p",4),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"div",5),t.TgZ(9,"button",6),t.NdJ("click",function(){return o.addProduct()}),t._uU(10,"Add"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.s9C("id",o.data.id),t.xp6(1),t.s9C("src",o.data.img,t.LSH),t.xp6(4),t.Oqu(o.data.description),t.xp6(2),t.hij("S/.",o.data.precio,".00"))},styles:[".card[_ngcontent-%COMP%]{width:10rem}.btn[_ngcontent-%COMP%]{background-color:var(--GreenStrong);color:var(--White);margin-top:.5rem;font-size:.8rem}.card-body[_ngcontent-%COMP%]{display:flex;flex-direction:column}.btnContainerAdd[_ngcontent-%COMP%]{display:flex;justify-content:center}.card-img-top[_ngcontent-%COMP%]{height:10rem;object-fit:cover}.card-title[_ngcontent-%COMP%]{font-size:1rem}@media (min-width: 1025px){.card[_ngcontent-%COMP%]{width:18rem}.card-title[_ngcontent-%COMP%]{font-size:1.5rem}.btn[_ngcontent-%COMP%]{font-size:1rem}.card-img-top[_ngcontent-%COMP%]{height:11rem}.card-text[_ngcontent-%COMP%]{font-size:1rem}}"]}),n})();function T(n,r){if(1&n&&(t.TgZ(0,"option"),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.hij(" ",e.name," ")}}function P(n,r){1&n&&t._UZ(0,"app-card-product",9),2&n&&t.Q6J("data",r.$implicit)}let M=(()=>{class n{constructor(e){this.dataService=e,this.listproducts=[],this.menu=[],this.selectedOption="",this.printedOption="",this.options=[{name:"Open this select menu",value:""}]}print(){this.printedOption=this.selectedOption}ngOnInit(){this.getAllProducts(),this.dataService.getJSON().subscribe(e=>{const{productos:o}=e,a=[];o.forEach(i=>{i.menu.forEach(l=>a.push(l))}),a.filter((i,l)=>a.indexOf(i)===l).forEach(i=>{this.options.push({name:i,value:i})})})}getAllProducts(){this.dataService.getJSON().subscribe(e=>{const{productos:o}=e;this.listproducts=o})}filteredMenu(e){console.log("Funciona el evento"),console.log(e.target.value),this.dataService.getJSON().subscribe(o=>{const{productos:a}=o;if("Open this select menu"==e.target.value)this.listproducts=a,console.log(this.listproducts);else{const c=a.filter(m=>m.menu==e.target.value),i=a.filter(m=>"adicional"==m.tipo),l=c.concat(i);this.listproducts=l,console.log(this.listproducts)}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f.D))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-product-list"]],decls:11,vars:3,consts:[[1,"card","containerProductList","fontBaloo"],[1,"containerChilldProductList"],[1,"card","containerSelectOption"],[1,"card-body","containerMenuTypes"],[1,"itemTittleContainer"],["aria-label","Default select example",1,"form-select",3,"ngModel","change","ngModelChange"],[4,"ngFor","ngForOf"],["id","containerProductList",1,"col-md-12","justify-content-between","d-flex","flex-wrap","mx-auto"],["class","m-sm-3 mx-auto",3,"data",4,"ngFor","ngForOf"],[1,"m-sm-3","mx-auto",3,"data"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"p"),t._uU(6,"Select the menu"),t.qZA(),t.qZA(),t.TgZ(7,"select",5),t.NdJ("change",function(c){return o.filteredMenu(c)})("ngModelChange",function(c){return o.selectedOption=c}),t.YNc(8,T,2,1,"option",6),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"div",7),t.YNc(10,P,1,1,"app-card-product",8),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(7),t.Q6J("ngModel",o.selectedOption),t.xp6(1),t.Q6J("ngForOf",o.options),t.xp6(2),t.Q6J("ngForOf",o.listproducts))},directives:[d.EJ,d.JJ,d.On,p.sg,d.YN,d.Kr,Z],styles:[".containerProductList[_ngcontent-%COMP%]{margin:1rem;display:flex;flex-direction:row;flex-wrap:wrap}.containerChilldProductList[_ngcontent-%COMP%]{display:flex;flex-direction:column}.containerMenuTypes[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-evenly}.itemTittleContainer[_ngcontent-%COMP%]{align-items:center}.itemTittleContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0rem;padding-top:.5rem}.containerSelectOption[_ngcontent-%COMP%]{margin:1rem;padding:0 1rem}.form-select[_ngcontent-%COMP%]{width:70%;background-color:#e1e0e0a1;color:#6c6a6a}#containerProductList[_ngcontent-%COMP%]{height:25rem;overflow:auto}#containerProductList[_ngcontent-%COMP%]::-webkit-scrollbar{width:.5rem}#containerProductList[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--Salmon);border-radius:.5rem;border-right:.5rem solid var(--Salmon);height:40%}@media (min-width: 1025px){#containerProductList[_ngcontent-%COMP%]{height:32rem}}"]}),n})();class b{constructor(r,e,o,a,c,i,l){this.clientName=r,this.table=e,this.status=o,this.products=i,this.date=l,this.startTime=a,this.readyTime=c}}class y{constructor(r,e,o){this.amount=r,this.description=e,this.aditional=o}}class x{constructor(r,e){this.monthDateYear=r,this.hourMinutes=e}}var _=s(801),A=s(5226),u=s.n(A),S=s(9623);let w=(()=>{class n{constructor(){this.disparadorGetOrderStatus=new t.vpe}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var v=s(9444);function q(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"th",16),t.TgZ(2,"button",17),t.NdJ("click",function(){const c=t.CHM(e).$implicit,i=t.oxw();return i.changeAmount(-i.base,c)}),t._uU(3,"-"),t.qZA(),t.TgZ(4,"p",18),t._uU(5),t.qZA(),t.TgZ(6,"button",17),t.NdJ("click",function(){const c=t.CHM(e).$implicit,i=t.oxw();return i.changeAmount(i.base,c)}),t._uU(7,"+"),t.qZA(),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t.TgZ(13,"fa-icon",19),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw().deleteItem(c)}),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=r.$implicit,o=t.oxw();t.xp6(5),t.Oqu(e.amount),t.xp6(4),t.Oqu(null==e?null:e.data.data.description),t.xp6(2),t.hij("",(null==e?null:e.data.data.precio)*e.amount,".00"),t.xp6(2),t.Q6J("icon",o.faTrash)}}function L(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"input",20),t.NdJ("click",function(){return t.CHM(e),t.oxw().sendOrder()}),t.qZA()}}const O=function(){return{standalone:!0}};let N=(()=>{class n{constructor(e,o,a){this.shoppingCarService=e,this.firestore=o,this.getOrderStatusService=a,this.faCoffee=_.SvR,this.faTrash=_.I7k,this.productList=[],this.clientName="",this.tableNumber="",this.price=0,this.base=1,this.nuevo=[],this.orderDate=[],this.subTotal=0,this.igv=0,this.total=0}ngOnInit(){this.shoppingCarService.disparadorShoppinngCar.subscribe(e=>{this.productList.push({data:e,amount:1}),console.log(this.productList),this.totalPrice()})}changeAmount(e,o){o.amount&&o.amount+e===0?this.deleteItem(o):(o.amount=o.amount+e,this.totalPrice())}deleteItem(e){const o=this.productList.indexOf(e);o>-1&&(this.productList.splice(o,1),this.totalPrice()),console.log(this.productList)}totalPrice(){0===this.productList.length?this.subTotal=0:(this.subTotal=this.productList.map(e=>e.data.data.precio*e.amount).reduce((e,o)=>e+o),this.igv=18*this.subTotal/100,this.total=this.subTotal+this.igv)}sendOrder(){u().mixin({toast:!0,position:"center",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:i=>{i.addEventListener("mouseenter",u().stopTimer),i.addEventListener("mouseleave",u().resumeTimer)}}).fire({icon:"success",title:"Registered Order"}),this.productList.forEach(i=>{this.nuevo.push(new y(i.amount,i.data.data.description))});let o=(new Date).toLocaleDateString(),a=`${(new Date).getHours().toString().padStart(2,"0")}:${(new Date).getMinutes().toString().padStart(2,"0")}`;this.orderDate.push(new x(o,a.toString().padStart(2,"0")));const c=new b(this.clientName,parseInt(this.tableNumber),"New",0,"00:00",this.nuevo,this.orderDate);console.log(c),this.firestore.sendOrdeFireStore(c).then(()=>{console.log("Orden registrada con \xe9xito!"),this.getOrderStatusService.disparadorGetOrderStatus.emit({orderSaved:c})}).catch(i=>{console.log(i)}),this.clientName="",this.tableNumber="",this.productList=[],this.subTotal=0,this.igv=0,this.total=0}cancelOrder(){let e=()=>{this.clientName="",this.tableNumber="",this.productList=[],this.base=1,this.subTotal=0,this.igv=0,this.total=0};u().fire({icon:"warning",iconColor:"#94d154",showCancelButton:!0,confirmButtonText:"Yes",confirmButtonColor:"#94d154",focusCancel:!0,title:"Do you want to cancel the order?",text:"You will lose all registered products!"}).then(o=>{o.isConfirmed?u().fire({text:"Canceled Order!",icon:"success",confirmButtonColor:"#94d154"}).then(e):o.isDenied&&u().fire("Changes are not saved","","info")})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(C),t.Y36(S.C),t.Y36(w))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-place-order"]],decls:35,vars:11,consts:[[1,"card","containerOrderDetails","fontBaloo"],[1,"card-header"],[1,"card-body"],[1,"containerCustomer"],[1,"input-group"],[1,"input-group-text"],["type","text","aria-label","First name",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],[1,"table","table-hover","text-center"],["scope","col"],[4,"ngFor","ngForOf"],[1,"card",2,"width","18rem"],[1,"list-group","list-group-flush"],[1,"list-group-item"],[1,"containerButton"],["class","btn btn-primary","type","submit","value","Save",3,"click",4,"ngIf"],["type","reset","value","Cancel",1,"btn","btn-primary",3,"click"],[1,"itemsCounterProduct"],[1,"btn","btn-primary","btn-sm","btnCant",3,"click"],[1,"col"],[3,"icon","click"],["type","submit","value","Save",1,"btn","btn-primary",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"form",0),t.TgZ(1,"h5",1),t._uU(2,"Order Details"),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"div",3),t.TgZ(5,"div",4),t.TgZ(6,"span",5),t._uU(7,"Customer"),t.qZA(),t.TgZ(8,"input",6),t.NdJ("ngModelChange",function(c){return o.clientName=c}),t.qZA(),t.TgZ(9,"span",5),t._uU(10,"Table"),t.qZA(),t.TgZ(11,"input",6),t.NdJ("ngModelChange",function(c){return o.tableNumber=c}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"table",7),t.TgZ(13,"thead"),t.TgZ(14,"tr"),t.TgZ(15,"th",8),t._uU(16,"CANT."),t.qZA(),t.TgZ(17,"th",8),t._uU(18,"ITEM"),t.qZA(),t.TgZ(19,"th",8),t._uU(20,"PRECIO"),t.qZA(),t._UZ(21,"th",8),t.qZA(),t.qZA(),t.TgZ(22,"tbody"),t.YNc(23,q,14,4,"tr",9),t.qZA(),t.qZA(),t.TgZ(24,"div",10),t.TgZ(25,"ul",11),t.TgZ(26,"li",12),t._uU(27),t.qZA(),t.TgZ(28,"li",12),t._uU(29),t.qZA(),t.TgZ(30,"li",12),t._uU(31),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"div",13),t.YNc(33,L,1,0,"input",14),t.TgZ(34,"input",15),t.NdJ("click",function(){return o.cancelOrder()}),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(8),t.Q6J("ngModel",o.clientName)("ngModelOptions",t.DdM(9,O)),t.xp6(3),t.Q6J("ngModel",o.tableNumber)("ngModelOptions",t.DdM(10,O)),t.xp6(12),t.Q6J("ngForOf",o.productList),t.xp6(4),t.hij("SubTotal: ",o.subTotal,""),t.xp6(2),t.hij("Igv: ",o.igv,""),t.xp6(2),t.hij("Total: ",o.total,""),t.xp6(2),t.Q6J("ngIf",o.clientName))},directives:[d._Y,d.JL,d.F,d.Fj,d.JJ,d.On,p.sg,v.BN,p.O5],styles:[".containerOrderDetails[_ngcontent-%COMP%]{margin:1.5rem;width:20rem}.tittleOrderDetails[_ngcontent-%COMP%], .card-header[_ngcontent-%COMP%]{background-color:var(--GreenStrong);color:var(--White)}.containerCustomer[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-evenly}.card-body[_ngcontent-%COMP%]{display:flex;flex-direction:column}.containerButton[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-evenly}.btn-primary[_ngcontent-%COMP%]{margin-top:1rem;background-color:var(--GreenStrong);border-color:var(--GreenStrong)}.itemsCounterProduct[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-evenly}.input-group-text[_ngcontent-%COMP%]{background-color:var(--GreenLight);border-color:var(--GreenStrong);color:var(--Black)}.list-group-item[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}p[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0;padding-top:1rem;padding-left:.5rem;padding-right:.5rem}td[_ngcontent-%COMP%]{padding-top:1.2rem}@media (min-width: 1025px){.containerOrderDetails[_ngcontent-%COMP%]{margin:2.5rem;width:24rem}.card-body[_ngcontent-%COMP%]{align-items:center}.btn-primary[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin-top:1rem}td[_ngcontent-%COMP%]{padding-top:1.8rem}.btn-primary[_ngcontent-%COMP%]{margin:1rem}}"]}),n})();const J=[{path:"",component:(()=>{class n{constructor(e){this.dataService=e}ngOnInit(){this.dataService.getJSON().subscribe(e=>{})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f.D))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-waiter-mainview"]],decls:5,vars:0,consts:[[1,"wrapper"],[1,"containerMenu"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"app-product-list"),t.qZA(),t._UZ(3,"app-place-order"),t.qZA(),t._UZ(4,"router-outlet"))},directives:[M,N,g.lC],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row}.containerMenu[_ngcontent-%COMP%]{display:flex;flex-direction:column}app-product-list[_ngcontent-%COMP%]{height:70%}"]}),n})()}];let U=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.Bz.forChild(J)],g.Bz]}),n})();var F=s(4466);let D=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.ez,U,v.uH,d.u5,F.m]]}),n})()}}]);