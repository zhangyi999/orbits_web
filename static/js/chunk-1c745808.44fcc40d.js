(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c745808"],{"0f5c":function(t,e,r){},3835:function(t,e,r){"use strict";function n(t){if(Array.isArray(t))return t}r.d(e,"a",(function(){return c}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0");function i(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,i=!1,a=void 0;try{for(var s,c=t[Symbol.iterator]();!(n=(s=c.next()).done);n=!0)if(r.push(s.value),e&&r.length===e)break}catch(o){i=!0,a=o}finally{try{n||null==c["return"]||c["return"]()}finally{if(i)throw a}}return r}}var a=r("06c5");function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){return n(t)||i(t,e)||Object(a["a"])(t,e)||s()}},5336:function(t,e,r){"use strict";r("0f5c")},"7db09":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").find,a=r("44d2"),s="find",c=!0;s in[]&&Array(1)[s]((function(){c=!1})),n({target:"Array",proto:!0,forced:c},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a(s)},"81d5":function(t,e,r){"use strict";var n=r("7b0b"),i=r("23cb"),a=r("50c4");t.exports=function(t){var e=n(this),r=a(e.length),s=arguments.length,c=i(s>1?arguments[1]:void 0,r),o=s>2?arguments[2]:void 0,u=void 0===o?r:i(o,r);while(u>c)e[c++]=t;return e}},cb29:function(t,e,r){var n=r("23e7"),i=r("81d5"),a=r("44d2");n({target:"Array",proto:!0},{fill:i}),a("fill")},d186:function(t,e,r){},f199:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pools-detail"},[r("div",{staticClass:"text-white-100 text-3xl mb-10"},[t._v(t._s(t.id.toUpperCase()))]),r("div",{staticClass:"grid grid-cols-1 md:grid-cols-2"},[r("div",{staticClass:"rounded-2xl p-6 bg-card"},[r("div",{staticClass:"text-xl text-white-100 mb-5"},[t._v(t._s(t.id.toUpperCase()))]),r("div",{staticClass:"grid grid-cols-2"},t._l(t.tab,(function(e,n){return r("div",{key:n,staticClass:"text-sm text-white-85 tab rounded-full text-center h-10 leading-10 cursor-pointer",class:t.routeName===e.key?"active":"",on:{click:function(r){return t.handleTab(e)}}},[t._v(" + "+t._s(e.name)+" Liquidity ")])})),0),r("div",{staticClass:"pt-6 text-white-85"},[r("div",{staticClass:"text-sm text-white-65"},[t._v("Withdraw Percentage（%）")]),r("div",{staticClass:"py-4"},[t._v(" "+t._s(t.withdrawPre)+" ")]),r("div",{staticClass:"mt-5 grid grid-cols-2"},t._l(t.radios,(function(e){return r("div",{key:e.key,staticClass:"mb-2 radios relative leading-8 cursor-pointer",class:e.key===t.radiosValue?"active":"",on:{click:function(r){return t.handleRadios(e)}}},[r("span",{staticClass:"w-4 h-4 mr-2 rounded-full border border-white-15 inline-block align-middle"}),t._v(" "+t._s(e.title)+" ")])})),0)]),"combo"!==t.radiosValue?r("div",{staticClass:"py-5"},t._l(t.formData,(function(e,n){return r("div",{key:e.id,staticClass:"relative h-12 border mb-4 p-2 border-white-15 justify-between flex items-center border-solid rounded-full hover:border-white-30"},[r("div",{staticClass:"h-8 w-full"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.num,expression:"item.num"}],staticClass:"block appearance-none h-full border-0 focus:outline-none bg-white-none focus:border-0 px-3 w-full text-base placeholder-white-30 text-white-85",attrs:{type:"number",placeholder:"0.00"},domProps:{value:e.num},on:{input:[function(r){r.target.composing||t.$set(e,"num",r.target.value)},function(e){return t.change(n)}]}})]),r("div",{staticClass:"w-36 flex-shrink-0 flex items-center",staticStyle:{"justify-content":"flex-end"}},[r("div",{staticClass:"px-2 text-xs text-main-400 cursor-pointer",on:{click:function(r){return t.max(e.id)}}},[t._v(" Max ")]),r("div",{staticClass:"text-sm px-3 text-white-100 leading-6 border-l border-solid border-white-15",staticStyle:{width:"6.5rem"}},[r("img",{staticClass:"w-5 inline-block mr-2",attrs:{src:t.poolsUrl(e.coins),alt:"",srcset:""}}),t._v(t._s(e.coins)+" ")])])])})),0):r("div",{staticClass:"py-5"},[r("div",{staticClass:"relative h-12 border mb-4 p-2 border-white-15 justify-between flex items-center border-solid rounded-full hover:border-white-30"},[r("div",{staticClass:"h-8 w-full"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.lpNum,expression:"lpNum"}],staticClass:"block appearance-none h-full border-0 focus:outline-none bg-white-none focus:border-0 px-3 w-full text-base placeholder-white-30 text-white-85",attrs:{type:"number",placeholder:"0.00"},domProps:{value:t.lpNum},on:{input:[function(e){e.target.composing||(t.lpNum=e.target.value)},t.calcWPreByNum]}})]),r("div",{staticClass:"w-36 flex-shrink-0 flex items-center",staticStyle:{"justify-content":"flex-end"}},[r("div",{staticClass:"px-2 text-xs text-main-400 cursor-pointer",on:{click:function(e){return t.maxLp()}}},[t._v(" Max ")]),r("div",{staticClass:"text-sm px-3 text-white-100 leading-6 border-l border-solid border-white-15"},[t._v(" LP ")])])])]),r("div",{staticClass:"pt-8"},[r("Button",{attrs:{loading:t.loading,click:t.handleWithdraw}},[t._v(" Withdraw ")]),r("c-Dialog",{model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},[r("Alert",[r("div",{staticStyle:{color:"#fff","font-size":"1rem"}},[t._v(" "+t._s(t.dialogText)+" ")])])],1)],1)]),r("div",{staticClass:"py-0 -mt-4 md:py-5 md:-ml-4 md:-mt-0"},[r("div",{staticClass:"rounded-2xl p-6 bg-cardDark text-white-65"},[r("div",{staticClass:"md:pl-5"},[r("div",{staticClass:"border-b border-solid border-white-15 pb-6 mb-6"},[r("div",{staticClass:"text-base text-white-100"},[t._v("Pool Info")]),r("div",{staticClass:"flex justify-between items-center mt-4"},[r("div",{staticClass:"text-sm"},[t._v("Trading Fee")]),r("div",{staticClass:"text-sm"},[t._v(t._s(t.fee)+"%")])]),r("div",{staticClass:"flex justify-between items-center mt-4"},[r("div",{staticClass:"text-sm"},[t._v("Deposit Fee")]),r("div",{staticClass:"text-sm"},[t._v(t._s(t.fee)+"%")])]),r("div",{staticClass:"flex justify-between items-center mt-4"},[r("div",{staticClass:"text-sm"},[t._v("Virtual Price")]),r("div",{staticClass:"text-sm"},[t._v(t._s(t.price))])]),r("div",{staticClass:"flex justify-between items-center mt-4"},[r("div",{staticClass:"text-sm"},[t._v("Total Liquidity")]),r("div",{staticClass:"text-sm"},[t._v(t._s(t.liquidity))])]),r("div",{staticClass:"flex justify-between items-center mt-4"},[r("div",{staticClass:"text-sm"},[t._v("Total Liquidity USD")]),r("div",{staticClass:"text-sm"},[t._v(t._s(t.liquidityUSD))])])]),r("div",{staticClass:"pb-6"},[r("div",{staticClass:"text-base text-white-100"},[t._v("Currency Reserves")]),t._l(t.currency,(function(e){return r("div",{key:e.coins,staticClass:"flex justify-between items-center mt-4"},[r("div",{staticClass:"text-sm"},[t._v(t._s(e.coins)+" ")]),r("div",{staticClass:"text-sm"},[t._v(t._s(e.max))])])}))],2)])])])])])},i=[],a=r("3835"),s=r("1da1"),c=r("5530"),o=(r("96cf"),r("d81d"),r("99af"),r("b0c0"),r("cb29"),r("d3b7"),r("25f0"),r("3ca3"),r("ddb0"),r("b680"),r("7db09"),r("4de4"),r("901e")),u=r.n(o),l=r("2f62"),d=r("86d5"),m=r("b893"),p=r("2a7d"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"alerts"},[t._t("default")],2)},h=[],v={name:"Alert"},b=v,w=(r("5336"),r("2877")),x=Object(w["a"])(b,f,h,!1,null,"20610865",null),g=x.exports,y=r("5991"),C=1e10,_={"3pool":y["h"],hpt:y["f"],filda:y["e"],channels:y["a"]},k={"3pool":"lp",hpt:"hptlp",filda:"fildalp",channels:"channelslp"},j={name:"withdraw",components:{Button:p["a"],Alert:g},data:function(){var t=this.$route.params.id,e=[],r=[];return d["b"][t].pools.map((function(t,n){e.push(d["a"][t.toLowerCase()]),r.push({coins:t,num:null,max:null,currencys:0,bow:0,id:n})})),{tab:[{name:"Add",key:"deposit"},{name:"Remove",key:"withdraw"}],transNums:[],initFormData:r,formData:Object(m["d"])(r),radiosValue:"combo",wrapped:!1,loading:!1,radios:[{name:"Combo",key:"combo",title:"Combo"}].concat(e),fee:0,liquidity:0,price:0,liquidityUSD:0,coins:e,currency:[],withdrawPre:0,mylp:0,decimals:1e18,lpNum:null,maxLpNum:null,open:!1,dialogText:"jiaoyi"}},computed:Object(c["a"])(Object(c["a"])({id:function(){return this.$route.params.id},routeName:function(){return this.$route.name}},Object(l["b"])({account:"account"})),{},{currentCoin:function(){return d["poolsData"]}}),methods:{setWithdrawPre:function(t,e){if(1*t>=1*e)return this.withdrawPre=100;this.withdrawPre=Math.floor(t/e*1e4)/100},getLpTokenByCoin:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.contractPool(),n={},t.formData.map((function(t){n[t.id]=new u.a(t.num).multipliedBy(Object(m["b"])(t.coins).accuracy)})),i=new Array(t.initFormData.length).fill(null).map((function(t,e){return 1*n[e]?n[e].toString():"0"})),e.abrupt("return",r.methods.calc_token_amount(i,!1).call());case 5:case"end":return e.stop()}}),e)})))()},withdrawPreLoading:function(){this.withdrawPre="--"},calcWithdrawPre:Object(m["c"])(Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.getLpTokenByCoin();case 3:e=t.sent,this.setWithdrawPre(e,Math.floor(this.mylp)),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,this,[[0,7]])}))),340,null),change:function(){this.withdrawPreLoading(),this.calcWithdrawPre()},contractPool:function(){return Object(y["c"])("3pool"===this.id?"swap":this.id)},swap:function(){return _[this.id]()},poolAddress:function(){return this.contractPool()._address},lp:function(){return Object(y["b"])(k[this.id])},approveSwap:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,i,a,s,c,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,n=t,i=e.lp(),r.next=5,Object(y["g"])(i.methods.approve(e.poolAddress(),window.web3.utils.toBN(n).toString()),e.account.currentAccount);case 5:return a=r.sent,s=a.confirmation,r.next=9,s();case 9:if(c=r.sent,o=c.status,1!==o){r.next=15;break}return r.abrupt("return",!0);case 15:return r.abrupt("return",!1);case 16:r.next=22;break;case 18:return r.prev=18,r.t0=r["catch"](0),console.log(r.t0),r.abrupt("return",!1);case 22:case"end":return r.stop()}}),r,null,[[0,18]])})))()},getCoin:function(){return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},setForm:function(){this.getLp()},getLp:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.lp(),e.next=3,r.methods.balanceOf(t.account.currentAccount||y["i"]).call();case 3:return n=e.sent,t.mylp=n,e.abrupt("return",n/t.decimals);case 6:case"end":return e.stop()}}),e)})))()},getCoinPre:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,n,i,a,s,o,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=d["b"][t.id],n=r.currency,i=r.currencyDecimals,a=[],s=t.swap(),o=[],l=0,n.map((function(t,e){o[e]={coins:t,num:null,max:null,currencys:0,bow:0},a.push(s.methods.balances(e).call().then((function(t){var r=new u.a(t).dividedBy(i[e]);return l=r.plus(l),o[e].num=r,r})))})),e.next=8,Promise.all(a);case 8:o.map((function(e){var r=e.num.toNumber();t.currency.push(Object(c["a"])(Object(c["a"])({},e),{},{num:r,max:r,bow:e.num.dividedBy(l).multipliedBy(100).toFixed(2)}))}));case 9:case"end":return e.stop()}}),e)})))()},getFee:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,n,i,s,c,o,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.swap(),n=t.lp(),e.next=4,Promise.all([r.methods.fee().call(),r.methods.get_virtual_price().call(),n.methods.totalSupply().call(),n.methods.decimals().call()]);case 4:i=e.sent,s=Object(a["a"])(i,4),c=s[0],o=s[1],l=s[2],d=s[3],t.fee=c/C*100,t.price=new u.a(o).dividedBy(1e18).toFixed(8),t.liquidity=new u.a(l).dividedBy(Math.pow(10,d)).toFixed(8),t.liquidityUSD=new u.a(t.price).multipliedBy(t.liquidity).toFixed(8);case 14:case"end":return e.stop()}}),e)})))()},handleTab:function(t){var e=t.key;this.routeName!==e&&this.$router.push({path:"/pools/".concat(this.$route.params.id,"/").concat(e)})},handleWrapped:function(){this.wrapped=!this.wrapped},handleRadios:function(t){this.radiosValue=t.key},poolsUrl:function(t){return r("f613")("./".concat(t,".png"))},remove_liquidity_one_coin:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,n,i,s,c,o,l,d,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=Object(a["a"])(t.formData,1),n=r[0],i=n.id,s=n.num,c=n.coins,o=t.contractPool(),l=new u.a(s).multipliedBy(Object(m["b"])(c).accuracy).toString(),e.next=5,Object(y["g"])(o.methods.remove_liquidity_one_coin(l,i,0),t.account.currentAccount);case 5:return d=e.sent,p=d.confirmation,e.abrupt("return",p());case 8:case"end":return e.stop()}}),e)})))()},remove_liquidity:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.contractPool(),e.next=3,Object(y["g"])(r.methods.remove_liquidity(Math.floor(t.lpNum*t.decimals)+"",new Array(t.initFormData.length).fill(0)),t.account.currentAccount);case 3:return n=e.sent,i=n.confirmation,e.abrupt("return",i());case 6:case"end":return e.stop()}}),e)})))()},handleWithdraw:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.getLpTokenByCoin();case 4:return r=e.sent,e.next=7,t.approveSwap(r);case 7:if(n=e.sent,!1!==n){e.next=13;break}return t.loading=!1,console.log("交易失败"),t.confirmErro(),e.abrupt("return");case 13:if("combo"!==t.radiosValue){e.next=18;break}return e.next=16,t.remove_liquidity();case 16:e.next=20;break;case 18:return e.next=20,t.remove_liquidity_one_coin();case 20:e.next=26;break;case 22:e.prev=22,e.t0=e["catch"](1),t.confirmErro(),console.log(e.t0);case 26:t.loading=!1;case 27:case"end":return e.stop()}}),e,null,[[1,22]])})))()},max:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,i,a,s,c,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(1*e.mylp!==0){r.next=2;break}return r.abrupt("return");case 2:return e.withdrawPreLoading(),n=e.contractPool(),r.next=6,n.methods.calc_withdraw_one_coin(e.mylp,t).call();case 6:i=r.sent,a=e.formData.find((function(e){return e.id===t})),s=Object(m["b"])(a.coins),c=s.accuracy,o=s.decimals,a.num=new u.a(i).dividedBy(c).toFixed(o),e.calcWithdrawPre();case 11:case"end":return r.stop()}}),r)})))()},maxLp:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.withdrawPreLoading(),e.next=3,t.getLp();case 3:t.maxLpNum=e.sent,t.lpNum=t.maxLpNum,t.setWithdrawPre(1,1);case 6:case"end":return e.stop()}}),e)})))()},calcWPreByNum:function(){this.withdrawPreLoading(),this.setWithdrawPre(this.lpNum,this.maxLpNum)},confirmErro:function(){this.dialogText="交易中断"}},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,Promise.all([t.maxLp(),t.setForm()]);case 3:t.loading=!1,t.getFee(),t.getCoinPre(),t.getCoin();case 7:case"end":return e.stop()}}),e)})))()},watch:{radiosValue:function(t){var e=Object(m["d"])(this.initFormData);"combo"===t?this.calcWPreByNum():(t=t.toUpperCase(),this.formData=e.filter((function(e){return e.coins===t})),this.max(this.formData[0].id))}}},P=j,O=(r("f2aa"),Object(w["a"])(P,n,i,!1,null,"449d78c3",null));e["default"]=O.exports},f2aa:function(t,e,r){"use strict";r("d186")}}]);