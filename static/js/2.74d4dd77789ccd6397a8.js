webpackJsonp([2],{"2Eq5":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"third"},[t("p",[this._v("传递的名字为："+this._s(this.name))]),this._v(" "),t("button",{on:{click:this.btnClicked}},[this._v("点击一下")])])},staticRenderFns:[]};var s={name:"Parent",data:function(){return{}},components:{Son:n("VU/8")({name:"Son",props:["name"],data:function(){return{}},methods:{btnClicked:function(){this.$emit("myBtnClicked","我传递成功了")}}},i,!1,function(e){n("P5N/")},"data-v-d411094c",null).exports}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"second"},[t("son",this._g(this._b({},"son",this.$attrs,!1),this.$listeners))],1)},staticRenderFns:[]};var a=n("VU/8")(s,o,!1,function(e){n("M7FD")},"data-v-04e015b2",null).exports,r=n("Dd8w"),c=n.n(r),l=n("gRE1"),u=n.n(l),d=n("fZjL"),f=n.n(d),m=n("7+uW");const h=m.default.prototype.$isServer,v=(h||Number(document.documentMode),!h&&document.addEventListener?function(e,t,n){e&&t&&n&&e.addEventListener(t,n,!1)}:function(e,t,n){e&&t&&n&&e.attachEvent("on"+t,n)}),g=!h&&document.removeEventListener?function(e,t,n){e&&t&&e.removeEventListener(t,n,!1)}:function(e,t,n){e&&t&&e.detachEvent("on"+t,n)};Object.prototype.hasOwnProperty;function _(e){let t=!1;return function(...n){t||(t=!0,window.requestAnimationFrame(i=>{e.apply(this,n),t=!1}))}}var p={CONTAIN:{name:"contain",icon:"el-icon-full-screen"},ORIGINAL:{name:"original",icon:"el-icon-c-scale-to-original"}},w=!m.default.prototype.$isServer&&window.navigator.userAgent.match(/firefox/i)?"DOMMouseScroll":"mousewheel",b={name:"elImageViewer",props:{urlList:{type:Array,default:function(){return[]}},zIndex:{type:Number,default:2e3},onSwitch:{type:Function,default:function(){}},onClose:{type:Function,default:function(){}}},data:function(){return{index:0,isShow:!1,infinite:!0,loading:!1,mode:p.CONTAIN,transform:{scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}},computed:{isSingle:function(){return this.urlList.length<=1},isFirst:function(){return 0===this.index},isLast:function(){return this.index===this.urlList.length-1},currentImg:function(){return this.urlList[this.index]},imgStyle:function(){var e=this.transform,t=e.scale,n=e.deg,i=e.offsetX,s=e.offsetY,o={transform:"scale("+t+") rotate("+n+"deg)",transition:e.enableTransition?"transform .3s":"","margin-left":i+"px","margin-top":s+"px"};return this.mode===p.CONTAIN&&(o.maxWidth=o.maxHeight="100%"),o}},watch:{index:{handler:function(e){this.reset(),this.onSwitch(e)}},currentImg:function(e){var t=this;this.$nextTick(function(e){t.$refs.img[0].complete||(t.loading=!0)})}},methods:{hide:function(){this.deviceSupportUninstall(),this.onClose()},deviceSupportInstall:function(){var e=this;this._keyDownHandler=_(function(t){switch(t.keyCode){case 27:e.hide();break;case 32:e.toggleMode();break;case 37:e.prev();break;case 38:e.handleActions("zoomIn");break;case 39:e.next();break;case 40:e.handleActions("zoomOut")}}),this._mouseWheelHandler=_(function(t){(t.wheelDelta?t.wheelDelta:-t.detail)>0?e.handleActions("zoomIn",{zoomRate:.015,enableTransition:!1}):e.handleActions("zoomOut",{zoomRate:.015,enableTransition:!1})}),v(document,"keydown",this._keyDownHandler),v(document,w,this._mouseWheelHandler)},deviceSupportUninstall:function(){g(document,"keydown",this._keyDownHandler),g(document,w,this._mouseWheelHandler),this._keyDownHandler=null,this._mouseWheelHandler=null},handleImgLoad:function(e){this.loading=!1},handleImgError:function(e){this.loading=!1,e.target.alt="加载失败"},handleMouseDown:function(e){var t=this;if(!this.loading&&0===e.button){var n=this.transform,i=n.offsetX,s=n.offsetY,o=e.pageX,a=e.pageY;this._dragHandler=_(function(e){t.transform.offsetX=i+e.pageX-o,t.transform.offsetY=s+e.pageY-a}),v(document,"mousemove",this._dragHandler),v(document,"mouseup",function(e){g(document,"mousemove",t._dragHandler)}),e.preventDefault()}},reset:function(){this.transform={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}},toggleMode:function(){if(!this.loading){var e=f()(p),t=(u()(p).indexOf(this.mode)+1)%e.length;this.mode=p[e[t]],this.reset()}},prev:function(){if(!this.isFirst||this.infinite){var e=this.urlList.length;this.index=(this.index-1+e)%e}},next:function(){if(!this.isLast||this.infinite){var e=this.urlList.length;this.index=(this.index+1)%e}},handleActions:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.loading){var n=c()({zoomRate:.2,rotateDeg:90,enableTransition:!0},t),i=n.zoomRate,s=n.rotateDeg,o=n.enableTransition,a=this.transform;switch(e){case"zoomOut":a.scale>.2&&(a.scale=parseFloat((a.scale-i).toFixed(3)));break;case"zoomIn":a.scale=parseFloat((a.scale+i).toFixed(3));break;case"clocelise":a.deg+=s;break;case"anticlocelise":a.deg-=s}a.enableTransition=o}}},mounted:function(){this.deviceSupportInstall()}},k={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"viewer-fade"}},[n("div",{staticClass:"el-image-viewer__wrapper",style:{"z-index":e.zIndex}},[n("div",{staticClass:"el-image-viewer__mask"}),e._v(" "),n("span",{staticClass:"el-image-viewer__btn el-image-viewer__close",on:{click:e.hide}},[n("i",{staticClass:"el-icon-circle-close"})]),e._v(" "),e.isSingle?e._e():[n("span",{staticClass:"el-image-viewer__btn el-image-viewer__prev",class:{"is-disabled":!e.infinite&&e.isFirst},on:{click:e.prev}},[n("i",{staticClass:"el-icon-arrow-left"})]),e._v(" "),n("span",{staticClass:"el-image-viewer__btn el-image-viewer__next",class:{"is-disabled":!e.infinite&&e.isLast},on:{click:e.next}},[n("i",{staticClass:"el-icon-arrow-right"})])],e._v(" "),n("div",{staticClass:"el-image-viewer__btn el-image-viewer__actions"},[n("div",{staticClass:"el-image-viewer__actions__inner"},[n("i",{staticClass:"el-icon-zoom-out",on:{click:function(t){return e.handleActions("zoomOut")}}}),e._v(" "),n("i",{staticClass:"el-icon-zoom-in",on:{click:function(t){return e.handleActions("zoomIn")}}}),e._v(" "),n("i",{staticClass:"el-image-viewer__actions__divider"}),e._v(" "),n("i",{class:e.mode.icon,on:{click:e.toggleMode}}),e._v(" "),n("i",{staticClass:"el-image-viewer__actions__divider"}),e._v(" "),n("i",{staticClass:"el-icon-refresh-left",on:{click:function(t){return e.handleActions("anticlocelise")}}}),e._v(" "),n("i",{staticClass:"el-icon-refresh-right",on:{click:function(t){return e.handleActions("clocelise")}}})])]),e._v(" "),n("div",{staticClass:"el-image-viewer__canvas"},e._l(e.urlList,function(t,i){return i===e.index?n("img",{key:t,ref:"img",refInFor:!0,staticClass:"el-image-viewer__img",style:e.imgStyle,attrs:{src:e.currentImg},on:{load:e.handleImgLoad,error:e.handleImgError,mousedown:e.handleMouseDown}}):e._e()}),0)],2)])},staticRenderFns:[]},x={name:"FivePage",data:function(){return{name:"张三",showViewer:!1,srcList:["https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg","https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg","https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg"]}},methods:{currentPageBtnClicked:function(e){alert("我收到的回传信息为："+e)},clickToPreview:function(){this.showViewer=!0},closeViewer:function(){this.showViewer=!1}},components:{Parent:a,ElImageViewer:n("VU/8")(b,k,!1,null,null,null).exports}},C={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"first"},[n("parent",{attrs:{name:e.name},on:{myBtnClicked:e.currentPageBtnClicked}}),e._v(" "),n("button",{on:{click:e.clickToPreview}},[e._v("点击一下预览")]),e._v(" "),e.showViewer?n("el-image-viewer",{attrs:{"on-close":e.closeViewer,"url-list":e.srcList}}):e._e()],1)},staticRenderFns:[]};var y=n("VU/8")(x,C,!1,function(e){n("psro")},"data-v-33c7a2f2",null);t.default=y.exports},Cdx3:function(e,t,n){var i=n("sB3e"),s=n("lktj");n("uqUo")("keys",function(){return function(e){return s(i(e))}})},M7FD:function(e,t){},"P5N/":function(e,t){},TmV0:function(e,t,n){n("fZOM"),e.exports=n("FeBl").Object.values},fZOM:function(e,t,n){var i=n("kM2E"),s=n("mbce")(!1);i(i.S,"Object",{values:function(e){return s(e)}})},fZjL:function(e,t,n){e.exports={default:n("jFbC"),__esModule:!0}},gRE1:function(e,t,n){e.exports={default:n("TmV0"),__esModule:!0}},jFbC:function(e,t,n){n("Cdx3"),e.exports=n("FeBl").Object.keys},mbce:function(e,t,n){var i=n("+E39"),s=n("lktj"),o=n("TcQ7"),a=n("NpIQ").f;e.exports=function(e){return function(t){for(var n,r=o(t),c=s(r),l=c.length,u=0,d=[];l>u;)n=c[u++],i&&!a.call(r,n)||d.push(e?[n,r[n]]:r[n]);return d}}},psro:function(e,t){},uqUo:function(e,t,n){var i=n("kM2E"),s=n("FeBl"),o=n("S82l");e.exports=function(e,t){var n=(s.Object||{})[e]||Object[e],a={};a[e]=t(n),i(i.S+i.F*o(function(){n(1)}),"Object",a)}}});