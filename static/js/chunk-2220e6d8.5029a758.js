(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2220e6d8"],{"15a2":function(t,e,n){t.exports=n.p+"static/img/swap-change.5059e922.svg"},"2de1":function(t,e,n){},3835:function(t,e,n){"use strict";function r(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return i}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function a(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var s,i=t[Symbol.iterator]();!(r=(s=i.next()).done);r=!0)if(n.push(s.value),e&&n.length===e)break}catch(c){a=!0,o=c}finally{try{r||null==i["return"]||i["return"]()}finally{if(a)throw o}}return n}}var o=n("06c5");function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){return r(t)||a(t,e)||Object(o["a"])(t,e)||s()}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),a=n("5899"),o="["+a+"]",s=RegExp("^"+o+o+"*"),i=RegExp(o+o+"*$"),c=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(i,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},"6c6a":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"swap"},[r("div",{staticClass:"mx-auto bg-card p-6 rounded-2xl text-white-45",staticStyle:{"max-width":"504px",width:"100%"}},[r("div",{staticClass:"text-white-100 text-3xl mb-10"},[t._v(t._s(t.$t("swap.title")))]),r("div",{staticClass:"rounded-2xl border border-white-15 border-solid p-4 hover:border-white-30"},[r("div",{staticClass:"flex justify-between mb-5 items-center"},[r("div",{staticClass:"text-white-100 text-sm"},[t._v(t._s(t.$t("swap.from")))]),r("div",{staticClass:"text-xs text-main-400 cursor-pointer",on:{click:t.handleMax}},[t._v(" Max:"+t._s(t.form.from.max)+" ")])]),r("div",{staticClass:"flex justify-between mb-4 items-center"},[r("div",{staticClass:"w-2/3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.from.num,expression:"form.from.num"}],staticClass:"block appearance-none border-0 focus:outline-none bg-white-none focus:border-0 px-3 w-full text-3xl placeholder-white-30 text-white-85",attrs:{type:"text",placeholder:"0.00"},domProps:{value:t.form.from.num},on:{input:[function(e){e.target.composing||t.$set(t.form.from,"num",e.target.value)},function(e){return t.handleInputNum(e,"from")}]}})]),r("div",{staticClass:"px-4 border-l border-solid border-white-15 cursor-pointer",on:{click:function(e){return t.chooseTokens("from")}}},[r("div",{staticClass:"text-base text-white-65 text-center"},[r("img",{staticClass:"inline-block w-5",attrs:{src:t.poolsUrl(t.form.from.name),alt:"",srcset:""}}),t._v(" "+t._s(t.form.from.name)+" "),r("img",{staticClass:"inline-block",attrs:{src:n("b4c8"),alt:"",srcset:""}})])])])]),r("div",{staticClass:"py-6 text-center"},[r("img",{staticClass:"inline-block cursor-pointer",attrs:{src:n("15a2"),alt:"",srcset:""},on:{click:t.handleExchange}})]),r("div",{staticClass:"rounded-2xl border border-white-15 border-solid p-4 hover:border-white-30"},[r("div",{staticClass:"flex justify-between mb-5 items-center"},[r("div",{staticClass:"text-white-100 text-sm"},[t._v(t._s(t.$t("swap.to")))])]),r("div",{staticClass:"flex justify-between mb-4 items-center"},[r("div",{staticClass:"w-2/3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.to.num,expression:"form.to.num"}],staticClass:"block appearance-none border-0 focus:outline-none bg-white-none focus:border-0 px-3 w-full text-3xl placeholder-white-30 text-white-85",attrs:{type:"number",placeholder:"0.00"},domProps:{value:t.form.to.num},on:{change:function(e){return t.handleInputNum(e,"to")},input:function(e){e.target.composing||t.$set(t.form.to,"num",e.target.value)}}})]),r("div",{staticClass:"px-4 border-l border-solid border-white-15 cursor-pointer",on:{click:function(e){return t.chooseTokens("to")}}},[r("div",{staticClass:"text-base text-white-65 text-center"},[r("img",{staticClass:"inline-block w-5",attrs:{src:t.poolsUrl(t.form.to.name),alt:"",srcset:""}}),t._v(" "+t._s(t.form.to.name)+" "),r("img",{staticClass:"inline-block",attrs:{src:n("b4c8"),alt:"",srcset:""}})])])])]),r("div",{staticClass:"text_title"},[t._v(" Exchange rate "),r("span",{staticStyle:{color:"#fff"}},[t._v(t._s(t.reta.from)+"/"+t._s(t.reta.to))]),t._v(" (including fees) "),r("span",{staticClass:"text-main-400"},[t._v(t._s(t.reta.value))])]),r("div",{staticClass:"text_title"},[t._v("Trade routed through: "),r("span",{staticClass:"text-main-400"},[t._v(t._s(t.reta.pool))])]),r("div",{staticClass:"mt-12 mb-3"},[t.account&&t.account.isMetaMaskConnected?r("div",{},[r("Button",{attrs:{disabled:t.disabled,loading:t.isLoading,click:t.handleApprove}},[t._v(" "+t._s(t.buttonText)+" ")]),r("div",{staticClass:"mt-8"},[r("div",{staticClass:"text-base text-white-65 flex justify-between items-center"},[r("div",[t._v("Max Slippage")]),r("div",{staticClass:"inline-block"},t._l(t.slippageList,(function(e,n){return r("span",{key:n,staticClass:"relative slippage h-10 leading-10 text-sm px-8 bg-white-04 text-white-100 rounded-full cursor-pointer inline-block mr-2 hover:bg-main-400",class:t.slippage===e?"active":"",on:{click:function(n){return t.handleSlip(e)}}},[t._v(t._s(e))])})),0),r("div",{staticClass:"inline-flex relative rounded-full border border-white-15 h-10 leading-10 w-20 mx-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.slippage,expression:"slippage"}],staticClass:"block appearance-none h-full border-0 focus:outline-none bg-white-none focus:border-0 px-3 w-full text-base placeholder-white-30 text-white-85",attrs:{type:"number",placeholder:"1"},domProps:{value:t.slippage},on:{input:function(e){e.target.composing||(t.slippage=e.target.value)}}}),r("span",{staticClass:"absolute top-0 right-2"},[t._v("%")])])])])],1):r("button",{staticClass:"focus:outline-none text-lg py-3 text-white-100 bg-gradient-to-r w-full rounded-full from-main-700 to-main-500",on:{click:t.handleConnect}},[t._v(" Unlock Wallet ")])])]),r("token-modal",{attrs:{show:t.showModal,coin:t.modalCoin},on:{"on-close":t.handleCloseTokens,"on-select":t.handleChooseToken}})],1)},a=[],o=n("3835"),s=n("1da1"),i=n("5530"),c=(n("96cf"),n("b680"),n("b0c0"),n("a9e3"),n("d3b7"),n("25f0"),n("3ca3"),n("ddb0"),n("d81d"),n("901e")),u=n.n(c),l=n("2f62"),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.show?r("div",{staticClass:"fixed top-0 left-0 right-0 bottom-0 w-full h-full z-50 bg-dark06"},[r("div",{staticClass:"token-box bg-cardDark100 p-5 rounded-2xl absolute top-1/2 left-1/2"},[r("div",{staticClass:"text-2xl mt-8 text-white-85 flex justify-between items-center"},[r("div",[t._v("Select Token")]),r("div",[r("img",{staticClass:"inline-block w-7 cursor-pointer",attrs:{src:n("bbbe"),alt:"",srcset:""},on:{click:t.handleClose}})])]),r("div",{staticClass:" mt-10 py-6"},[r("div",{staticClass:"text-white-85 text-base"},[t._v("Toekn List")]),r("div",{staticClass:"tokens mt-4"},t._l(t.tokensList,(function(e,n){return r("div",{key:n,staticClass:"h-14 token-list leading-14 rounded-full mt-4 border border-white-15 px-5 text-base text-white-85 hover:border-main-400 cursor-pointer",class:t.coin==e.name?"disable":"",on:{click:function(n){return t.handleSelect(e)}}},[r("img",{staticClass:"inline-block mr-3 w-6",attrs:{src:t.poolsUrl(e.name),alt:"",srcset:""}}),t._v(" "+t._s(e.name)+" ")])})),0)])])]):t._e()},f=[],d=n("a525"),p={props:{show:Boolean,coin:String},data:function(){return{tokensList:d["g"]}},methods:{poolsUrl:function(t){return n("f613")("./".concat(t,".png"))},handleClose:function(){this.$emit("on-close")},handleSelect:function(t){this.address!==t.address&&this.$emit("on-select",t)}}},h=p,b=(n("7877"),n("2877")),x=Object(b["a"])(h,m,f,!1,null,"bd09d7b6",null),v=x.exports,w=n("2a7d"),g=n("5991"),C=n("86d5"),k=n("b893"),_=[{name:"3pool",contract:g["h"]},{name:"hpt",contract:g["f"]},{name:"filda",contract:g["e"]},{name:"channels",contract:g["a"]}],y={name:"swap",components:{TokenModal:v,Button:w["a"]},data:function(){return{form:{from:{name:"HUSD",address:"0x0298c2b32eae4da002a15f36fdf7615bea3da047",num:null,max:"0.00"},to:{name:"USDC",num:null,address:"0x9362bbef4b8313a8aa9f0c9808b80577aa26b73b",max:"0.00"}},chooseType:"from",showModal:!1,modalCoin:"HUSD",slippage:null,slippageList:["0.1","0.2"],orginFromMax:null,inputFoucs:"",orginToNum:0,orginFromNum:0,isLoading:!1,disabled:!1,buttonText:"Execute Swap",toMax:0,checked:!0,reta:{from:"HUSD",to:"USDC",value:"--",pool:"--"},contractId:-1}},computed:Object(i["a"])({},Object(l["b"])({account:"account",slip:"slip"})),methods:{modifyForm:function(){if(""!==this.form.from.num)return isNaN(1*this.form.from.num)?this.form.from.num="":void(this.form.from.num=1*new u.a(this.form.from.num).toFixed(Object(k["b"])(this.form.from.name).decimals))},swapContract:function(){return _[this.contractId].contract()},swapName:function(){return-1===this.contractId?"--":_[this.contractId].name},init:function(){this.reta.from=this.form.from.name,this.reta.to=this.form.to.name,this.setReteValue()},setReteValue:function(){if(this.reta.from===this.form.to.name){if(1*this.form.from.num===0)return this.reta.value="--";this.reta.value=(this.form.to.num/this.form.from.num).toFixed(4)}else{if(1*this.form.to.num===0)return this.reta.value="--";this.reta.value=(this.form.from.num/this.form.to.num).toFixed(4)}},getBalanceOf:function(t,e){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=Object(g["b"])(t),r.next=3,a.methods.balanceOf(n.account.currentAccount).call();case 3:o=r.sent,"from"===e?n.orginFromMax=o:"to"===e&&(n.orginToMax=o),n.form[e].max=o/Object(k["a"])(t);case 6:case"end":return r.stop()}}),r)})))()},handleSlip:function(t){this.$store.dispatch("app/setSlip",t),this.slippage=t},handleMax:function(){this.form.from.num=this.form.from.max,this.getDy(this.form.from.max,"from",!0)},handleInputNum:Object(k["c"])((function(t,e){if(this.modifyForm(),!1!==this.checked){if(""===t.target.value)return this.disabled=!1,this.buttonText="Execute Swap",this.form.to.num="",void this.setReteValue();var n=Number(t.target.value);if(0===n)return this.form.to.num="",this.disabled=!1,void(this.buttonText="Execute Swap");this.inputFoucs=e,NaN!==n&&""!==n&&0!==n?this.setToNum():(this.form.from.num="",this.form.to.num="")}}),340),setToNum:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.form.from.num&&1*t.form.from.num!==0){e.next=5;break}return t.disabled=!1,t.buttonText="Execute Swap",t.form.to.num="",e.abrupt("return");case 5:if(!(t.form.from.num>t.form.from.max)){e.next=9;break}return t.disabled=!0,t.buttonText="Insufficient ".concat(t.form.from.name," balance"),e.abrupt("return");case 9:return e.next=11,t.get_maxDy();case 11:n=e.sent,t.form.to.num=n,t.reta.pool=t.swapName(),n>0&&(t.disabled=!1,t.buttonText="Execute Swap"),t.setReteValue();case 16:case"end":return e.stop()}}),e)})))()},get_maxDy:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.contractId=-1,n=new u.a(t.form.from.num).multipliedBy(Object(k["a"])(t.form.from.name)).toString(),r=Object(k["a"])(t.form.to.name),a=0,o=-1,e.next=7,Promise.all(_.map(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(r,s){var i,c,u,l,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=r.contract,r.name,e.prev=1,c=i(),u=C["c"][s].currencyId[t.form.from.name.toLowerCase()],l=C["c"][s].currencyId[t.form.to.name.toLowerCase()],e.next=7,c.methods.get_dy(u,l,n).call();case 7:return m=e.sent,1*m>a&&(a=1*m,o=s),e.abrupt("return",m);case 12:return e.prev=12,e.t0=e["catch"](1),console.log(e.t0,"error"),e.abrupt("return",0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,n){return e.apply(this,arguments)}}()));case 7:return-1===o?(t.disabled=!0,t.buttonText="Insufficient liquidity for this trade"):t.contractId=o,console.log(a,r,"to"),e.abrupt("return",a/r);case 10:case"end":return e.stop()}}),e)})))()},get_dy:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.swapContract(),e.prev=1,r=t.form.from.num*Object(k["a"])(t.form.from.name),e.next=5,n.methods.get_dy(Object(k["a"])(t.form.from.name,!0),Object(k["a"])(t.form.to.name,!0),r).call();case 5:return a=e.sent,t.form.from.num>t.form.from.max?(t.disabled=!0,t.buttonText="Insufficient ".concat(t.form.from.name," balance")):(t.disabled=!1,t.buttonText="Execute Swap"),e.abrupt("return",a);case 10:return e.prev=10,e.t0=e["catch"](1),t.disabled=!0,t.buttonText="Insufficient liquidity for this trade",e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})))()},handleExchange:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Object(k["d"])(t.form),t.form.from=n.to,t.form.to=n.from,e.next=5,t.setToNum();case 5:return t.init(),e.abrupt("return");case 7:case"end":return e.stop()}}),e)})))()},handleConnect:function(){this.$store.dispatch("web3/registerWeb3")},poolsUrl:function(t){return n("f613")("./".concat(t,".png"))},handleCloseTokens:function(){this.showModal=!1},chooseTokens:function(t){this.chooseType=t,this.modalCoin="from"===t?this.form.to.name:this.form.from.name,this.showModal=!0},handleChooseToken:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.chooseType,e.form[r].address=t.address,e.form[r].name=t.name,e.reta[r]=t.name,e.getAccountToken("from"===r,"to"===r),e.showModal=!1,n.next=8,e.setToNum();case 8:e.init();case 9:case"end":return n.stop()}}),n)})))()},handleApprove:function(){var t=this.form,e=t.from,n=t.to;e.num&&n.num&&this.approveSwap(e.name,e.num)},approveSwap:function(t,e){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,o,s,i,c,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=Object(k["a"])(t)*e,o=Object(g["b"])(t),n.isLoading=!0,n.buttonText="Swap...",r.next=6,Object(g["g"])(o.methods.approve(n.swapContract()._address,window.web3.utils.toBN(a).toString()),n.account.currentAccount);case 6:return s=r.sent,i=s.confirmation,r.next=10,i();case 10:c=r.sent,u=c.status,1===u?n.transformSwap(a):(n.isLoading=!1,n.buttonText="Execute Swap");case 13:case"end":return r.stop()}}),r)})))()},transformSwap:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,a,o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=Math.floor(new u.a(t).multipliedBy(e.slippage/100).toNumber()).toFixed(0),a=e.swapContract(),n.next=4,Object(g["g"])(a.methods.exchange(Object(k["a"])(e.form.from.name,!0),Object(k["a"])(e.form.to.name,!0),t,r),e.account.currentAccount);case 4:return o=n.sent,s=o.confirmation,n.next=8,s();case 8:e.isLoading=!1,e.buttonText="Execute Swap";case 10:case"end":return n.stop()}}),n)})))()},getAccountToken:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.account.isMetaMaskConnected&&(t&&this.getBalanceOf(this.form.from.name,"from"),e&&this.getBalanceOf(this.form.to.name,"to"))},checkLP:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,r,a,s,i,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Object(g["b"])(t.form.to.name),r=Object(g["b"])(t.form.from.name),a=t.swapContract()._address,e.prev=3,e.next=6,Promise.all([n.methods.balanceOf(a).call(),r.methods.balanceOf(a).call()]);case 6:s=e.sent,i=Object(o["a"])(s,2),c=i[0],u=i[1],t.toMax=c,0===t.toMax||1*u===0?(t.checked=!1,t.disabled=!0,t.buttonText="Insufficient liquidity for this trade"):(t.disabled=!1,t.checked=!0,t.buttonText="Execute Swap"),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](3),console.log({error:e.t0});case 17:case"end":return e.stop()}}),e,null,[[3,14]])})))()}},mounted:function(){var t=this;this.$nextTick((function(){try{t.getAccountToken(),t.slippage=t.slip}catch(e){console.log(e)}}))}},T=y,O=(n("ab5e"),Object(b["a"])(T,r,a,!1,null,"d88c4c14",null));e["default"]=O.exports},7156:function(t,e,n){var r=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var o,s;return a&&"function"==typeof(o=e.constructor)&&o!==n&&r(s=o.prototype)&&s!==n.prototype&&a(t,s),t}},7877:function(t,e,n){"use strict";n("9845")},9845:function(t,e,n){},a9e3:function(t,e,n){"use strict";var r=n("83ab"),a=n("da84"),o=n("94ca"),s=n("6eeb"),i=n("5135"),c=n("c6b6"),u=n("7156"),l=n("c04e"),m=n("d039"),f=n("7c73"),d=n("241c").f,p=n("06cf").f,h=n("9bf2").f,b=n("58a8").trim,x="Number",v=a[x],w=v.prototype,g=c(f(w))==x,C=function(t){var e,n,r,a,o,s,i,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=b(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+u}for(o=u.slice(2),s=o.length,i=0;i<s;i++)if(c=o.charCodeAt(i),c<48||c>a)return NaN;return parseInt(o,r)}return+u};if(o(x,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var k,_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(g?m((function(){w.valueOf.call(n)})):c(n)!=x)?u(new v(C(e)),n,_):C(e)},y=r?d(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),T=0;y.length>T;T++)i(v,k=y[T])&&!i(_,k)&&h(_,k,p(v,k));_.prototype=w,w.constructor=_,s(a,x,_)}},ab5e:function(t,e,n){"use strict";n("2de1")},b4c8:function(t,e,n){t.exports=n.p+"static/img/arrow-down.e9e55705.svg"},bbbe:function(t,e,n){t.exports=n.p+"static/img/icon-close.bf14d635.svg"}}]);