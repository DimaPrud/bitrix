; /* /bitrix/js/main/session.min.js?16483976932197*/
; /* /bitrix/js/main/pageobject/pageobject.min.js?1648397692570*/
; /* /bitrix/js/main/core/core_window.min.js?164839769275957*/
; /* /bitrix/js/main/rating_like.js?164839769333339*/
; /* /bitrix/js/main/date/main.date.min.js?164839769316360*/
; /* /bitrix/js/main/core/core_date.min.js?164839769226661*/
; /* /bitrix/js/main/utils.min.js?164839769318721*/

; /* Start:"a:4:{s:4:"full";s:45:"/bitrix/js/main/session.min.js?16483976932197";s:6:"source";s:26:"/bitrix/js/main/session.js";s:3:"min";s:30:"/bitrix/js/main/session.min.js";s:3:"map";s:30:"/bitrix/js/main/session.map.js";}"*/
function CBXSession(){var e=this;this.dateInput=new Date;this.dateCheck=new Date;this.dateHit=new Date;this.notifier=null;this.checkInterval=60;this.Expand=function(t){this.key=t;BX.ready(function(){BX.bind(document,"keypress",e.OnUserInput);BX.bind(document.body,"mousemove",e.OnUserInput);BX.bind(document.body,"click",e.OnUserInput);setInterval(e.CheckSession,e.checkInterval*1e3)})};this.OnUserInput=function(){var t=new Date;e.dateInput.setTime(t.valueOf())};this.CheckSession=function(){var t=new Date;if(t-e.dateCheck<e.checkInterval-1){return}e.dateCheck.setTime(t.valueOf());if(e.dateInput>e.dateHit){var i={method:"GET",headers:[{name:"X-Bitrix-Csrf-Token",value:BX.bitrix_sessid()}],dataType:"html",url:"/bitrix/tools/public_session.php?k="+e.key,data:"",onsuccess:function(t){e.CheckResult(t)},lsId:"sess_expand",lsTimeout:e.checkInterval-5};BX.ajax(i)}};this.CheckResult=function(t){var i=new Date;e.dateHit.setTime(i.valueOf());if(t=="SESSION_EXPIRED"){if(BX.message("SessExpired")){if(!e.notifier){e.notifier=document.body.appendChild(BX.create("DIV",{props:{className:"bx-session-message"},style:{top:"0",backgroundColor:"#FFEB41",border:"1px solid #EDDA3C",width:"630px",fontFamily:"Arial,Helvetica,sans-serif",fontSize:"13px",fontWeight:"bold",textAlign:"center",color:"black",position:"absolute",zIndex:"10000",padding:"10px"},html:'<a class="bx-session-message-close" '+'style="display:block; width:12px; height:12px; background:url(/bitrix/js/main/core/images/close.gif) center no-repeat; float:right;" '+'href="javascript:bxSession.Close()"></a>'+BX.message("SessExpired")}));BX.ZIndexManager.register(e.notifier);BX.ZIndexManager.bringToFront(e.notifier);var s=BX.GetWindowScrollPos();var n=BX.GetWindowInnerSize();e.notifier.style.left=parseInt(s.scrollLeft+n.innerWidth/2-parseInt(e.notifier.clientWidth)/2)+"px";if(BX.browser.IsIE()){e.notifier.style.top=s.scrollTop+"px";BX.bind(window,"scroll",function(){var t=BX.GetWindowScrollPos();e.notifier.style.top=t.scrollTop+"px"})}else{e.notifier.style.position="fixed"}}e.notifier.style.display=""}}};this.Close=function(){this.notifier.style.display="none"}}var bxSession=new CBXSession;
/* End */
;
; /* Start:"a:4:{s:4:"full";s:58:"/bitrix/js/main/pageobject/pageobject.min.js?1648397692570";s:6:"source";s:40:"/bitrix/js/main/pageobject/pageobject.js";s:3:"min";s:44:"/bitrix/js/main/pageobject/pageobject.min.js";s:3:"map";s:44:"/bitrix/js/main/pageobject/pageobject.map.js";}"*/
window.BX=BX||{};BX.PageObject={getRootWindow:function(){return BX.PageObject.getTopWindowOfCurrentHost(window)},isCrossOriginObject:function(t){try{void t.location.host}catch(t){return true}return false},getTopWindowOfCurrentHost:function(t){if(!BX.PageObject.isCrossOriginObject(t.parent)&&t.parent!==t&&t.parent.location.host===t.location.host){return BX.PageObject.getTopWindowOfCurrentHost(t.parent)}return t},getParentWindowOfCurrentHost:function(t){if(BX.PageObject.isCrossOriginObject(t.parent)){return t}return t.parent}};
/* End */
;
; /* Start:"a:4:{s:4:"full";s:55:"/bitrix/js/main/core/core_window.min.js?164839769275957";s:6:"source";s:35:"/bitrix/js/main/core/core_window.js";s:3:"min";s:39:"/bitrix/js/main/core/core_window.min.js";s:3:"map";s:39:"/bitrix/js/main/core/core_window.map.js";}"*/
(function(window){if(BX.WindowManager)return;BX.WindowManager={_stack:[],_runtime_resize:{},_delta:2,_delta_start:1e3,currently_loaded:null,settings_category:"BX.WindowManager.9.5",register:function(t){this.currently_loaded=null;t.WM_REG_INDEX=this._stack.length;this._stack.push(t);if(this._stack.length<2){BX.bind(document,"keyup",BX.proxy(this.__checkKeyPress,this))}},unregister:function(t){if(null==t.WM_REG_INDEX)return null;var e;if(this._stack.length>0){while((e=this.__pop_stack())!=t){if(!e){e=null;break}}if(this._stack.length<=0){this.enableKeyCheck()}return e}else{return null}},__pop_stack:function(t){if(this._stack.length>0){var e=this._stack.pop();e.WM_REG_INDEX=null;BX.onCustomEvent(e,"onWindowUnRegister",[t===true]);return e}else return null},clean:function(){while(this.__pop_stack(true)){}this._stack=null;this.disableKeyCheck()},Get:function(){if(this.currently_loaded)return this.currently_loaded;else if(this._stack.length>0)return this._stack[this._stack.length-1];else return null},setStartZIndex:function(t){this._delta_start=t},restoreStartZIndex:function(){this._delta_start=1e3},GetZIndex:function(){var t;return null!=(t=this._stack[this._stack.length-1])?parseInt(t.Get().style.zIndex)+this._delta:this._delta_start},__get_check_url:function(t){var e=t.indexOf("?");return e==-1?t:t.substring(0,e)},saveWindowSize:function(t,e){var i=this.__get_check_url(t);if(BX.userOptions){BX.userOptions.save(this.settings_category,"size_"+i,"width",e.width);BX.userOptions.save(this.settings_category,"size_"+i,"height",e.height)}this._runtime_resize[i]=e},saveWindowOptions:function(t,e){if(BX.userOptions){for(var i in e){if(e.hasOwnProperty(i)){BX.userOptions.save(this.settings_category,"options_"+t,i,e[i])}}}},getRuntimeWindowSize:function(t){return this._runtime_resize[this.__get_check_url(t)]},disableKeyCheck:function(){BX.unbind(document,"keyup",BX.proxy(this.__checkKeyPress,this))},enableKeyCheck:function(){BX.bind(document,"keyup",BX.proxy(this.__checkKeyPress,this))},__checkKeyPress:function(t){if(null==t)t=window.event;if(t.keyCode==27){var e=BX.WindowManager.Get();if(e&&!e.unclosable)e.Close()}}};BX.garbage(BX.WindowManager.clean,BX.WindowManager);BX.CWindowButton=function(t){if(t.btn){this.btn=t.btn;this.parentWindow=t.parentWindow;if(/save|apply/i.test(this.btn.name)){BX.bind(this.btn,"click",BX.delegate(this.disableUntilError,this))}}else{this.title=t.title;this.hint=t.hint;this.id=t.id;this.name=t.name;this.className=t.className;this.action=t.action;this.onclick=t.onclick;if(t.Button&&BX.type.isFunction(t.Button))this.Button=t.Button;this.btn=null}};BX.CWindowButton.prototype.disable=function(){if(this.btn)this.parentWindow.showWait(this.btn)};BX.CWindowButton.prototype.enable=function(){if(this.btn)this.parentWindow.closeWait(this.btn)};BX.CWindowButton.prototype.emulate=function(){if(this.btn&&this.btn.disabled)return;var t=this.action?BX.delegate(this.action,this):this.onclick?this.onclick:this.btn?this.btn.getAttribute("onclick"):"";if(t){setTimeout(t,50);if(this.btn&&/save|apply/i.test(this.btn.name)&&!this.action){this.disableUntilError()}}};BX.CWindowButton.prototype.Button=function(parentWindow){this.parentWindow=parentWindow;var btn={props:{type:"button",name:this.id?this.id:this.name,value:this.title?this.title:this.name,id:this.id}};if(this.hint)btn.props.title=this.hint;if(!!this.className)btn.props.className=this.className;if(this.action){btn.events={click:BX.delegate(this.action,this)}}else if(this.onclick){if(BX.browser.IsIE()){btn.events={click:BX.delegate(function(){eval(this.onclick)},this)}}else{btn.attrs={onclick:this.onclick}}}this.btn=BX.create("INPUT",btn);return this.btn};BX.CWindowButton.prototype.disableUntilError=function(){this.disable();if(!this.__window_error_handler_set){BX.addCustomEvent(this.parentWindow,"onWindowError",BX.delegate(this.enable,this));this.__window_error_handler_set=true}};BX.CWindow=function(t,e){this.DIV=t||document.createElement("DIV");this.SETTINGS={resizable:false,min_height:0,min_width:0,top:0,left:0,draggable:false,drag_restrict:true,resize_restrict:true};this.ELEMENTS={draggable:[],resizer:[],close:[]};this.type=e=="float"?"float":"dialog";BX.adjust(this.DIV,{props:{className:"bx-core-window"},style:{zIndex:0,position:"absolute",display:"none",top:this.SETTINGS.top+"px",left:this.SETTINGS.left+"px",height:"100px",width:"100px"}});this.isOpen=false;BX.addCustomEvent(this,"onWindowRegister",BX.delegate(this.onRegister,this));BX.addCustomEvent(this,"onWindowUnRegister",BX.delegate(this.onUnRegister,this));this.MOUSEOVER=null;BX.bind(this.DIV,"mouseover",BX.delegate(this.__set_msover,this));BX.bind(this.DIV,"mouseout",BX.delegate(this.__unset_msover,this));BX.ready(BX.delegate(function(){document.body.appendChild(this.DIV);BX.ZIndexManager.register(this.DIV)},this))};BX.CWindow.prototype.Get=function(){return this.DIV};BX.CWindow.prototype.visible=function(){return this.isOpen};BX.CWindow.prototype.Show=function(t){this.DIV.style.display="block";if(!t){BX.WindowManager.register(this);BX.onCustomEvent(this,"onWindowRegister")}BX.ZIndexManager.bringToFront(this.DIV)};BX.CWindow.prototype.Hide=function(){BX.WindowManager.unregister(this);this.DIV.style.display="none"};BX.CWindow.prototype.onRegister=function(){this.isOpen=true};BX.CWindow.prototype.onUnRegister=function(t){this.isOpen=false;if(t||this.PARAMS&&this.PARAMS.content_url){if(t){BX.onCustomEvent(this,"onWindowClose",[this,true])}if(this.DIV.parentNode)this.DIV.parentNode.removeChild(this.DIV)}else{this.DIV.style.display="none"}};BX.CWindow.prototype.CloseDialog=BX.CWindow.prototype.Close=function(t){BX.onCustomEvent(this,"onBeforeWindowClose",[this]);if(t!==true){if(this.denyClose)return false}BX.onCustomEvent(this,"onWindowClose",[this]);if(this.bExpanded){var e=BX.GetDocElement();BX.unbind(window,"resize",BX.proxy(this.__expand_onresize,this));e.style.overflow=this.__expand_settings.overflow}BX.WindowManager.unregister(this);return true};BX.CWindow.prototype.SetResize=function(t){t.style.cursor="se-resize";BX.bind(t,"mousedown",BX.proxy(this.__startResize,this));this.ELEMENTS.resizer.push(t);this.SETTINGS.resizable=true};BX.CWindow.prototype.SetExpand=function(t,e){e=e||"click";BX.bind(t,e,BX.proxy(this.__expand,this))};BX.CWindow.prototype.__expand_onresize=function(){var t=BX.GetWindowInnerSize();this.DIV.style.width=t.innerWidth+"px";this.DIV.style.height=t.innerHeight+"px";BX.onCustomEvent(this,"onWindowResize")};BX.CWindow.prototype.__expand=function(){var t=BX.GetDocElement();if(!this.bExpanded){var e=BX.GetWindowScrollPos(),i=BX.GetWindowInnerSize();this.__expand_settings={resizable:this.SETTINGS.resizable,draggable:this.SETTINGS.draggable,width:this.DIV.style.width,height:this.DIV.style.height,left:this.DIV.style.left,top:this.DIV.style.top,scrollTop:e.scrollTop,scrollLeft:e.scrollLeft,overflow:BX.style(t,"overflow")};this.SETTINGS.resizable=false;this.SETTINGS.draggable=false;window.scrollTo(0,0);t.style.overflow="hidden";this.DIV.style.top="0px";this.DIV.style.left="0px";this.DIV.style.width=i.innerWidth+"px";this.DIV.style.height=i.innerHeight+"px";this.bExpanded=true;BX.onCustomEvent(this,"onWindowExpand");BX.onCustomEvent(this,"onWindowResize");BX.bind(window,"resize",BX.proxy(this.__expand_onresize,this))}else{BX.unbind(window,"resize",BX.proxy(this.__expand_onresize,this));this.SETTINGS.resizable=this.__expand_settings.resizable;this.SETTINGS.draggable=this.__expand_settings.draggable;t.style.overflow=this.__expand_settings.overflow;this.DIV.style.top=this.__expand_settings.top;this.DIV.style.left=this.__expand_settings.left;this.DIV.style.width=this.__expand_settings.width;this.DIV.style.height=this.__expand_settings.height;window.scrollTo(this.__expand_settings.scrollLeft,this.__expand_settings.scrollTop);this.bExpanded=false;BX.onCustomEvent(this,"onWindowNarrow");BX.onCustomEvent(this,"onWindowResize")}};BX.CWindow.prototype.Resize=function(t,e){var i=Math.max(t-this.pos.left+this.dx,this.SETTINGS.min_width);var s=Math.max(e-this.pos.top+this.dy,this.SETTINGS.min_height);if(this.SETTINGS.resize_restrict){var o=BX.GetWindowScrollSize();if(this.pos.left+i>o.scrollWidth-this.dw)i=o.scrollWidth-this.pos.left-this.dw}this.DIV.style.width=i+"px";this.DIV.style.height=s+"px";BX.onCustomEvent(this,"onWindowResize")};BX.CWindow.prototype.__startResize=function(t){if(!this.SETTINGS.resizable)return false;if(!t)t=window.event;this.wndSize=BX.GetWindowScrollPos();this.wndSize.innerWidth=BX.GetWindowInnerSize().innerWidth;this.pos=BX.pos(this.DIV);this.x=t.clientX+this.wndSize.scrollLeft;this.y=t.clientY+this.wndSize.scrollTop;this.dx=this.pos.left+this.pos.width-this.x;this.dy=this.pos.top+this.pos.height-this.y;this.dw=this.pos.width-parseInt(this.DIV.style.width);BX.bind(document,"mousemove",BX.proxy(this.__moveResize,this));BX.bind(document,"mouseup",BX.proxy(this.__stopResize,this));if(document.body.setCapture)document.body.setCapture();document.onmousedown=BX.False;var e=document.body;e.ondrag=e.onselectstart=BX.False;e.style.MozUserSelect=this.DIV.style.MozUserSelect="none";e.style.cursor="se-resize";BX.onCustomEvent(this,"onWindowResizeStart");return true};BX.CWindow.prototype.__moveResize=function(t){if(!t)t=window.event;var e=BX.GetWindowScrollPos();var i=t.clientX+e.scrollLeft;var s=t.clientY+e.scrollTop;if(this.x==i&&this.y==s)return;this.Resize(i,s);this.x=i;this.y=s};BX.CWindow.prototype.__stopResize=function(){if(document.body.releaseCapture)document.body.releaseCapture();BX.unbind(document,"mousemove",BX.proxy(this.__moveResize,this));BX.unbind(document,"mouseup",BX.proxy(this.__stopResize,this));document.onmousedown=null;var t=document.body;t.ondrag=t.onselectstart=null;t.style.MozUserSelect=this.DIV.style.MozUserSelect="";t.style.cursor="";BX.onCustomEvent(this,"onWindowResizeFinished")};BX.CWindow.prototype.SetClose=function(t){BX.bind(t,"click",BX.proxy(this.Close,this));this.ELEMENTS.close.push(t)};BX.CWindow.prototype.SetDraggable=function(t){BX.bind(t,"mousedown",BX.proxy(this.__startDrag,this));t.style.cursor="move";this.ELEMENTS.draggable.push(t);this.SETTINGS.draggable=true};BX.CWindow.prototype.Move=function(t,e){var i=1;var s=parseInt(this.DIV.style.left)+t;var o=parseInt(this.DIV.style.top)+e;if(this.SETTINGS.drag_restrict){if(s<0)s=0;var n=BX.GetWindowScrollSize();var r=this.DIV.offsetWidth;var h=this.DIV.offsetHeight;if(s>n.scrollWidth-r-i)s=n.scrollWidth-r-i;var a=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight,n.scrollHeight);if(o>a-h-i)o=a-h-i;if(o<0)o=0}this.DIV.style.left=s+"px";this.DIV.style.top=o+"px"};BX.CWindow.prototype.__startDrag=function(t){if(!this.SETTINGS.draggable)return false;if(!t)t=window.event;this.x=t.clientX+document.body.scrollLeft;this.y=t.clientY+document.body.scrollTop;this.__bWasDragged=false;BX.bind(document,"mousemove",BX.proxy(this.__moveDrag,this));BX.bind(document,"mouseup",BX.proxy(this.__stopDrag,this));if(document.body.setCapture)document.body.setCapture();document.onmousedown=BX.False;var e=document.body;e.ondrag=e.onselectstart=BX.False;e.style.MozUserSelect=this.DIV.style.MozUserSelect="none";e.style.cursor="move";return BX.PreventDefault(t)};BX.CWindow.prototype.__moveDrag=function(t){if(!t)t=window.event;var e=t.clientX+document.body.scrollLeft;var i=t.clientY+document.body.scrollTop;if(this.x==e&&this.y==i)return;this.Move(e-this.x,i-this.y);this.x=e;this.y=i;if(!this.__bWasDragged){BX.onCustomEvent(this,"onWindowDragStart");this.__bWasDragged=true;BX.bind(BX.proxy_context,"click",BX.PreventDefault)}BX.onCustomEvent(this,"onWindowDrag")};BX.CWindow.prototype.__stopDrag=function(t){if(document.body.releaseCapture)document.body.releaseCapture();BX.unbind(document,"mousemove",BX.proxy(this.__moveDrag,this));BX.unbind(document,"mouseup",BX.proxy(this.__stopDrag,this));document.onmousedown=null;var e=document.body;e.ondrag=e.onselectstart=null;e.style.MozUserSelect=this.DIV.style.MozUserSelect="";e.style.cursor="";if(this.__bWasDragged){BX.onCustomEvent(this,"onWindowDragFinished");var i=BX.proxy_context;setTimeout(function(){BX.unbind(i,"click",BX.PreventDefault)},100);this.__bWasDragged=false}return BX.PreventDefault(t)};BX.CWindow.prototype.DenyClose=function(){this.denyClose=true};BX.CWindow.prototype.AllowClose=function(){this.denyClose=false};BX.CWindow.prototype.ShowError=function(t){BX.onCustomEvent(this,"onWindowError",[t]);if(this._wait)BX.closeWait(this._wait);window.alert(t)};BX.CWindow.prototype.__set_msover=function(){this.MOUSEOVER=true};BX.CWindow.prototype.__unset_msover=function(){this.MOUSEOVER=false};BX.CWindowDialog=function(){var t=arguments;t[1]="dialog";BX.CWindowDialog.superclass.constructor.apply(this,t);this.DIV.style.top="10px";this.OVERLAY=null};BX.extend(BX.CWindowDialog,BX.CWindow);BX.CWindowDialog.prototype.__resizeOverlay=function(){var t=BX.GetWindowScrollSize();this.OVERLAY.style.width=t.scrollWidth+"px"};BX.CWindowDialog.prototype.CreateOverlay=function(t){if(null==this.OVERLAY){var e=BX.GetWindowScrollSize();var i=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight,e.scrollHeight);this.OVERLAY=document.body.appendChild(BX.create("DIV",{style:{position:"absolute",top:"0px",left:"0px",zIndex:t||parseInt(this.DIV.style.zIndex)-2,width:e.scrollWidth+"px",height:i+"px"}}));var s=BX.ZIndexManager.getComponent(this.DIV);if(s){s.setOverlay(this.OVERLAY)}}return this.OVERLAY};BX.CWindowDialog.prototype.Show=function(){BX.CWindowDialog.superclass.Show.apply(this,arguments);this.CreateOverlay();this.OVERLAY.style.display="block";BX.unbind(window,"resize",BX.proxy(this.__resizeOverlay,this));BX.bind(window,"resize",BX.proxy(this.__resizeOverlay,this))};BX.CWindowDialog.prototype.onUnRegister=function(t){BX.CWindowDialog.superclass.onUnRegister.apply(this,arguments);if(this.clean){if(this.OVERLAY.parentNode)this.OVERLAY.parentNode.removeChild(this.OVERLAY)}else{this.OVERLAY.style.display="none"}BX.unbind(window,"resize",BX.proxy(this.__resizeOverlay,this))};BX.CDialog=function(t){BX.CDialog.superclass.constructor.apply(this);this._sender="core_window_cdialog";this.PARAMS=t||{};for(var e in this.defaultParams){if(typeof this.PARAMS[e]=="undefined")this.PARAMS[e]=this.defaultParams[e]}this.PARAMS.width=!isNaN(parseInt(this.PARAMS.width))?this.PARAMS.width:this.defaultParams["width"];this.PARAMS.height=!isNaN(parseInt(this.PARAMS.height))?this.PARAMS.height:this.defaultParams["height"];if(this.PARAMS.resize_id||this.PARAMS.content_url){var i=BX.WindowManager.getRuntimeWindowSize(this.PARAMS.resize_id||this.PARAMS.content_url);if(i){this.PARAMS.width=i.width;this.PARAMS.height=i.height}}BX.addClass(this.DIV,"bx-core-adm-dialog");this.DIV.id="bx-admin-prefix";this.PARTS={};this.DIV.style.height=null;this.DIV.style.width=null;this.PARTS.TITLEBAR=this.DIV.appendChild(BX.create("DIV",{props:{className:"bx-core-adm-dialog-head"}}));this.PARTS.TITLE_CONTAINER=this.PARTS.TITLEBAR.appendChild(BX.create("SPAN",{props:{className:"bx-core-adm-dialog-head-inner"},text:this.PARAMS.title}));this.PARTS.TITLEBAR_ICONS=this.PARTS.TITLEBAR.appendChild(BX.create("DIV",{props:{className:"bx-core-adm-dialog-head-icons"},children:this.PARAMS.resizable?[BX.create("SPAN",{props:{className:"bx-core-adm-icon-expand",title:BX.message("JS_CORE_WINDOW_EXPAND")}}),BX.create("SPAN",{props:{className:"bx-core-adm-icon-close",title:BX.message("JS_CORE_WINDOW_CLOSE")}})]:[BX.create("SPAN",{props:{className:"bx-core-adm-icon-close",title:BX.message("JS_CORE_WINDOW_CLOSE")}})]}));this.PARTS.CONTENT=this.DIV.appendChild(BX.create("DIV",{props:{className:"bx-core-adm-dialog-content-wrap adm-workarea"}}));this.PARTS.CONTENT_DATA=this.PARTS.CONTENT.appendChild(BX.create("DIV",{props:{className:"bx-core-adm-dialog-content"},style:{height:this.PARAMS.height+"px",width:this.PARAMS.width+"px"}}));this.PARTS.HEAD=this.PARTS.CONTENT_DATA.appendChild(BX.create("DIV",{props:{className:"bx-core-adm-dialog-head-block"+(this.PARAMS.icon?" "+this.PARAMS.icon:"")}}));this.SetHead(this.PARAMS.head);this.SetContent(this.PARAMS.content);this.SetTitle(this.PARAMS.title);this.SetClose(this.PARTS.TITLEBAR_ICONS.lastChild);if(this.PARAMS.resizable){this.SetExpand(this.PARTS.TITLEBAR_ICONS.firstChild);this.SetExpand(this.PARTS.TITLEBAR,"dblclick");BX.addCustomEvent(this,"onWindowExpand",BX.proxy(this.__onexpand,this));BX.addCustomEvent(this,"onWindowNarrow",BX.proxy(this.__onexpand,this))}this.PARTS.FOOT=this.PARTS.BUTTONS_CONTAINER=this.PARTS.CONTENT.appendChild(BX.create("DIV",{props:{className:"bx-core-adm-dialog-buttons"},children:this.ShowButtons()}));if(this.PARAMS.draggable)this.SetDraggable(this.PARTS.TITLEBAR);if(this.PARAMS.resizable){this.PARTS.RESIZER=this.DIV.appendChild(BX.create("DIV",{props:{className:"bx-core-resizer"}}));this.SetResize(this.PARTS.RESIZER);this.SETTINGS.min_width=this.PARAMS.min_width;this.SETTINGS.min_height=this.PARAMS.min_height}this.auth_callback=BX.delegate(function(){this.PARAMS.content="";this.hideNotify();this.Show()},this)};BX.extend(BX.CDialog,BX.CWindowDialog);BX.CDialog.prototype.defaultParams={width:700,height:400,min_width:500,min_height:300,resizable:true,draggable:true,title:"",icon:""};BX.CDialog.prototype.showWait=function(t){if(BX.type.isElementNode(t)&&(t.type=="button"||t.type=="submit")){BX.defer(function(){t.disabled=true})();var e=BX.hasClass(t,"adm-btn-save")||BX.hasClass(t,"adm-btn-save"),i=BX.pos(t,true);t.bxwaiter=this.PARTS.FOOT.appendChild(BX.create("DIV",{props:{className:"adm-btn-load-img"+(e?"-green":"")},style:{top:parseInt((i.bottom+i.top)/2-10)+"px",left:parseInt((i.right+i.left)/2-10)+"px"}}));BX.addClass(t,"adm-btn-load");this.lastWaitElement=t;return t.bxwaiter}return null};BX.CDialog.prototype.closeWait=function(t){t=t||this.lastWaitElement;if(BX.type.isElementNode(t)){if(t.bxwaiter){if(t.bxwaiter.parentNode){t.bxwaiter.parentNode.removeChild(t.bxwaiter)}t.bxwaiter=null}t.disabled=false;BX.removeClass(t,"adm-btn-load");if(this.lastWaitElement==t)this.lastWaitElement=null}};BX.CDialog.prototype.Authorize=function(t){this.bSkipReplaceContent=true;this.ShowError(BX.message("JSADM_AUTH_REQ"));BX.onCustomEvent(this,"onWindowError",[]);BX.closeWait();new BX.CAuthDialog({content_url:this.PARAMS.content_url,auth_result:t,callback:BX.delegate(function(){if(this.auth_callback)this.auth_callback()},this)}).Show()};BX.CDialog.prototype.ShowError=function(t){BX.onCustomEvent(this,"onWindowError",[t]);this.closeWait();if(this._wait)BX.closeWait(this._wait);this.Notify(t,true)};BX.CDialog.prototype.__expandGetSize=function(){var t=BX.GetDocElement();t.style.overflow="hidden";var e=BX.GetWindowInnerSize();t.scrollTop=0;this.DIV.style.top="-"+this.dxShadow+"px";this.DIV.style.left="-"+this.dxShadow+"px";return{width:e.innerWidth-parseInt(BX.style(this.PARTS.CONTENT,"padding-right"))-parseInt(BX.style(this.PARTS.CONTENT,"padding-left"))+this.dxShadow,height:e.innerHeight-this.PARTS.TITLEBAR.offsetHeight-this.PARTS.FOOT.offsetHeight-parseInt(BX.style(this.PARTS.CONTENT,"padding-top"))-parseInt(BX.style(this.PARTS.CONTENT,"padding-bottom"))+this.dxShadow}};BX.CDialog.prototype.__expand=function(){var t=BX.GetDocElement();this.dxShadow=2;if(!this.bExpanded){var e=BX.GetWindowScrollPos();this.__expand_settings={resizable:this.SETTINGS.resizable,draggable:this.SETTINGS.draggable,width:this.PARTS.CONTENT_DATA.style.width,height:this.PARTS.CONTENT_DATA.style.height,left:this.DIV.style.left,top:this.DIV.style.top,scrollTop:e.scrollTop,scrollLeft:e.scrollLeft,overflow:BX.style(t,"overflow")};this.SETTINGS.resizable=false;this.SETTINGS.draggable=false;var i=this.__expandGetSize();this.PARTS.CONTENT_DATA.style.width=i.width+"px";this.PARTS.CONTENT_DATA.style.height=i.height+"px";window.scrollTo(0,0);t.style.overflow="hidden";this.bExpanded=true;BX.onCustomEvent(this,"onWindowExpand");BX.onCustomEvent(this,"onWindowResize");BX.onCustomEvent(this,"onWindowResizeExt",[{width:i.width,height:i.height}]);BX.bind(window,"resize",BX.proxy(this.__expand_onresize,this))}else{BX.unbind(window,"resize",BX.proxy(this.__expand_onresize,this));this.SETTINGS.resizable=this.__expand_settings.resizable;this.SETTINGS.draggable=this.__expand_settings.draggable;t.style.overflow=this.__expand_settings.overflow;this.DIV.style.top=this.__expand_settings.top;this.DIV.style.left=this.__expand_settings.left;this.PARTS.CONTENT_DATA.style.width=this.__expand_settings.width;this.PARTS.CONTENT_DATA.style.height=this.__expand_settings.height;window.scrollTo(this.__expand_settings.scrollLeft,this.__expand_settings.scrollTop);this.bExpanded=false;BX.onCustomEvent(this,"onWindowNarrow");BX.onCustomEvent(this,"onWindowResize");BX.onCustomEvent(this,"onWindowResizeExt",[{width:parseInt(this.__expand_settings.width),height:parseInt(this.__expand_settings.height)}])}};BX.CDialog.prototype.__expand_onresize=function(){var t=this.__expandGetSize();this.PARTS.CONTENT_DATA.style.width=t.width+"px";this.PARTS.CONTENT_DATA.style.height=t.height+"px";BX.onCustomEvent(this,"onWindowResize");BX.onCustomEvent(this,"onWindowResizeExt",[t])};BX.CDialog.prototype.__onexpand=function(){var t=this.PARTS.TITLEBAR_ICONS.firstChild;t.className=BX.toggle(t.className,["bx-core-adm-icon-expand","bx-core-adm-icon-narrow"]);t.title=BX.toggle(t.title,[BX.message("JS_CORE_WINDOW_EXPAND"),BX.message("JS_CORE_WINDOW_NARROW")]);if(this.PARTS.RESIZER){this.PARTS.RESIZER.style.display=this.bExpanded?"none":"block"}};BX.CDialog.prototype.__startResize=function(t){if(!this.SETTINGS.resizable)return false;if(!t)t=window.event;this.wndSize=BX.GetWindowScrollPos();this.wndSize.innerWidth=BX.GetWindowInnerSize().innerWidth;this.pos=BX.pos(this.PARTS.CONTENT_DATA);this.x=t.clientX+this.wndSize.scrollLeft;this.y=t.clientY+this.wndSize.scrollTop;this.dx=this.pos.left+this.pos.width-this.x;this.dy=this.pos.top+this.pos.height-this.y;this.dw=this.pos.width-parseInt(this.PARTS.CONTENT_DATA.style.width)+parseInt(BX.style(this.PARTS.CONTENT,"padding-right"));BX.bind(document,"mousemove",BX.proxy(this.__moveResize,this));BX.bind(document,"mouseup",BX.proxy(this.__stopResize,this));if(document.body.setCapture)document.body.setCapture();document.onmousedown=BX.False;var e=document.body;e.ondrag=e.onselectstart=BX.False;e.style.MozUserSelect=this.DIV.style.MozUserSelect="none";e.style.cursor="se-resize";BX.onCustomEvent(this,"onWindowResizeStart");return true};BX.CDialog.prototype.Resize=function(t,e){var i=Math.max(t-this.pos.left+this.dx,this.SETTINGS.min_width);var s=Math.max(e-this.pos.top+this.dy,this.SETTINGS.min_height);if(this.SETTINGS.resize_restrict){var o=BX.GetWindowScrollSize();if(this.pos.left+i>o.scrollWidth-this.dw)i=o.scrollWidth-this.pos.left-this.dw}this.PARTS.CONTENT_DATA.style.width=i+"px";this.PARTS.CONTENT_DATA.style.height=s+"px";BX.onCustomEvent(this,"onWindowResize");BX.onCustomEvent(this,"onWindowResizeExt",[{height:s,width:i}])};BX.CDialog.prototype.SetSize=function(t){this.PARTS.CONTENT_DATA.style.width=t.width+"px";this.PARTS.CONTENT_DATA.style.height=t.height+"px";BX.onCustomEvent(this,"onWindowResize");BX.onCustomEvent(this,"onWindowResizeExt",[t])};BX.CDialog.prototype.GetParameters=function(t){var e=this.GetForm();if(!e)return"";var i,s="";var o=e.elements.length;var n="";for(i=0;i<o;i++){if(s!="")n="&";var r=e.elements[i];if(r.disabled)continue;switch(r.type.toLowerCase()){case"text":case"textarea":case"password":case"hidden":if(null==t&&r.name.substr(r.name.length-4)=="_alt"&&e.elements[r.name.substr(0,r.name.length-4)])break;s+=n+r.name+"="+BX.util.urlencode(r.value);break;case"radio":if(r.checked)s+=n+r.name+"="+BX.util.urlencode(r.value);break;case"checkbox":s+=n+r.name+"="+BX.util.urlencode(r.checked?"Y":"N");break;case"select-one":var h="";if(null==t&&e.elements[r.name+"_alt"]&&r.selectedIndex==0)h=e.elements[r.name+"_alt"].value;else h=r.value;s+=n+r.name+"="+BX.util.urlencode(h);break;case"select-multiple":var a,l=false;var d=r.options.length;for(a=0;a<d;a++){if(r.options[a].selected){s+=n+r.name+"="+BX.util.urlencode(r.options[a].value);l=true}}if(!l)s+=n+r.name+"=";break;default:break}}return s};BX.CDialog.prototype.PostParameters=function(t){var e=this.PARAMS.content_url;if(null==t)t="";t+=(t==""?"":"&")+"bxsender="+this._sender;var i=e.indexOf("?");if(i==-1)e+="?"+t;else e=e.substring(0,i)+"?"+t+"&"+e.substring(i+1);BX.showWait();this.auth_callback=BX.delegate(function(){this.hideNotify();this.PostParameters(t)},this);BX.ajax.Setup({skipAuthCheck:true},true);BX.ajax.post(e,this.GetParameters(),BX.delegate(function(t){BX.closeWait();if(!this.bSkipReplaceContent){this.ClearButtons();this.SetContent(t);this.Show(true)}this.bSkipReplaceContent=false},this))};BX.CDialog.prototype.Submit=function(t,e){var i=this.GetForm();if(i){i.onsubmit=null;i.method="POST";if(!i.action||e){e=e||this.PARAMS.content_url;if(null!=t){var s=e.indexOf("?");if(s==-1)e+="?"+t;else e=e.substring(0,s)+"?"+t+"&"+e.substring(s+1)}i.action=e}if(!i._bxsender){i._bxsender=i.appendChild(BX.create("INPUT",{attrs:{type:"hidden",name:"bxsender",value:this._sender}}))}this._wait=BX.showWait();this.auth_callback=BX.delegate(function(){this.hideNotify();this.Submit(t)},this);BX.ajax.submit(i,BX.delegate(function(){this.closeWait()},this))}else{window.alert("no form registered!")}};BX.CDialog.prototype.GetForm=function(){if(null==this.__form){var t=this.PARTS.CONTENT_DATA.getElementsByTagName("FORM");this.__form=t[0]?t[0]:null}return this.__form};BX.CDialog.prototype.GetRealForm=function(){if(null==this.__rform){var t=this.PARTS.CONTENT_DATA.getElementsByTagName("FORM");this.__rform=t[1]?t[1]:t[0]?t[0]:null}return this.__rform};BX.CDialog.prototype._checkButton=function(t){var e=["btnSave","btnCancel","btnClose"];for(var i=0;i<e.length;i++){if(this[e[i]]&&t==this[e[i]])return e[i]}return false};BX.CDialog.prototype.ShowButtons=function(){var t=[];if(this.PARAMS.buttons){if(this.PARAMS.buttons.title)this.PARAMS.buttons=[this.PARAMS.buttons];for(var e=0,i=this.PARAMS.buttons.length;e<i;e++){if(BX.type.isNotEmptyString(this.PARAMS.buttons[e])){t.push(this.PARAMS.buttons[e])}else if(BX.type.isElementNode(this.PARAMS.buttons[e])){t.push(this.PARAMS.buttons[e])}else if(this.PARAMS.buttons[e]){if(!BX.is_subclass_of(this.PARAMS.buttons[e],BX.CWindowButton)){var s=this._checkButton(this.PARAMS.buttons[e]);this.PARAMS.buttons[e]=new BX.CWindowButton(this.PARAMS.buttons[e]);if(s)this[s]=this.PARAMS.buttons[e]}t.push(this.PARAMS.buttons[e].Button(this))}}}return t};BX.CDialog.prototype.setAutosave=function(){if(!this.bSetAutosaveDelay){this.bSetAutosaveDelay=true;setTimeout(BX.proxy(this.setAutosave,this),10)}};BX.CDialog.prototype.SetTitle=function(t){this.PARAMS.title=t;BX.cleanNode(this.PARTS.TITLE_CONTAINER).appendChild(document.createTextNode(this.PARAMS.title))};BX.CDialog.prototype.SetHead=function(t){this.PARAMS.head=BX.util.trim(t);this.PARTS.HEAD.innerHTML=this.PARAMS.head||"&nbsp;";this.PARTS.HEAD.style.display=this.PARAMS.head?"block":"none";this.adjustSize()};BX.CDialog.prototype.Notify=function(t,e,i){if(!this.PARTS.NOTIFY){this.PARTS.NOTIFY=this.DIV.insertBefore(BX.create("DIV",{props:{className:"adm-warning-block"},children:[BX.create("SPAN",{props:{className:"adm-warning-text"}}),BX.create("SPAN",{props:{className:"adm-warning-icon"}}),BX.create("SPAN",{props:{className:"adm-warning-close"},events:{click:BX.proxy(this.hideNotify,this)}})]}),this.DIV.firstChild)}if(e)BX.addClass(this.PARTS.NOTIFY,"adm-warning-block-red");else BX.removeClass(this.PARTS.NOTIFY,"adm-warning-block-red");if(i!==true){t=BX.util.htmlspecialchars(t)}this.PARTS.NOTIFY.firstChild.innerHTML=t||"&nbsp;";this.PARTS.NOTIFY.firstChild.style.width=this.PARAMS.width-50+"px";BX.removeClass(this.PARTS.NOTIFY,"adm-warning-animate")};BX.CDialog.prototype.hideNotify=function(){BX.addClass(this.PARTS.NOTIFY,"adm-warning-animate")};BX.CDialog.prototype.__adjustHeadToIcon=function(){if(!this.PARTS.HEAD.offsetHeight){setTimeout(BX.delegate(this.__adjustHeadToIcon,this),50)}else{if(this.icon_image&&this.icon_image.height&&this.icon_image.height>this.PARTS.HEAD.offsetHeight-5){this.PARTS.HEAD.style.height=this.icon_image.height+5+"px";this.adjustSize()}this.icon_image.onload=null;this.icon_image=null}};BX.CDialog.prototype.SetIcon=function(t){if(this.PARAMS.icon!=t){if(this.PARAMS.icon)BX.removeClass(this.PARTS.HEAD,this.PARAMS.icon);this.PARAMS.icon=t;if(this.PARAMS.icon){BX.addClass(this.PARTS.HEAD,this.PARAMS.icon);var e=BX.style(this.PARTS.HEAD,"background-image")||BX.style(this.PARTS.HEAD,"backgroundImage");if(BX.type.isNotEmptyString(e)&&e!="none"){var i=e.match(new RegExp("url\\s*\\(\\s*('|\"|)(.+?)(\\1)\\s*\\)"));if(i){e=i[2];if(BX.type.isNotEmptyString(e)){this.icon_image=new Image;this.icon_image.onload=BX.delegate(this.__adjustHeadToIcon,this);this.icon_image.src=e}}}}}this.adjustSize()};BX.CDialog.prototype.SetIconFile=function(t){this.icon_image=new Image;this.icon_image.onload=BX.delegate(this.__adjustHeadToIcon,this);this.icon_image.src=t;BX.adjust(this.PARTS.HEAD,{style:{backgroundImage:"url("+t+")",backgroundPosition:"right 9px"}});this.adjustSize()};BX.CDialog.prototype.SetButtons=function(t){if(BX.type.isString(t)){if(t.length>0){this.PARTS.BUTTONS_CONTAINER.innerHTML+=t;var e=this.PARTS.BUTTONS_CONTAINER.getElementsByTagName("INPUT");if(e.length>0){this.PARAMS.buttons=[];for(var i=0;i<e.length;i++){this.PARAMS.buttons.push(new BX.CWindowButton({btn:e[i],parentWindow:this}))}}}}else{this.PARAMS.buttons=t;BX.adjust(this.PARTS.BUTTONS_CONTAINER,{children:this.ShowButtons()})}this.adjustSize()};BX.CDialog.prototype.ClearButtons=function(){BX.cleanNode(this.PARTS.BUTTONS_CONTAINER);this.adjustSize()};BX.CDialog.prototype.SetContent=function(t){this.__form=null;if(BX.type.isElementNode(t)){if(t.parentNode)t.parentNode.removeChild(t)}else if(BX.type.isString(t)){t=BX.create("DIV",{html:t})}this.PARAMS.content=t;BX.cleanNode(this.PARTS.CONTENT_DATA);BX.adjust(this.PARTS.CONTENT_DATA,{children:[this.PARTS.HEAD,BX.create("DIV",{props:{className:"bx-core-adm-dialog-content-wrap-inner"},children:[this.PARAMS.content]})]});if(this.PARAMS.content_url&&this.GetForm()){this.__form.submitbtn=this.__form.appendChild(BX.create("INPUT",{props:{type:"submit"},style:{display:"none"}}));this.__form.onsubmit=BX.delegate(this.__submit,this)}};BX.CDialog.prototype.__submit=function(t){for(var e=0,i=this.PARAMS.buttons.length;e<i;e++){if(this.PARAMS.buttons[e]&&(this.PARAMS.buttons[e].name&&/save|apply/i.test(this.PARAMS.buttons[e].name)||this.PARAMS.buttons[e].btn&&this.PARAMS.buttons[e].btn.name&&/save|apply/i.test(this.PARAMS.buttons[e].btn.name))){this.PARAMS.buttons[e].emulate();break}}return BX.PreventDefault(t)};BX.CDialog.prototype.SwapContent=function(t){t=BX(t);BX.cleanNode(this.PARTS.CONTENT_DATA);t.parentNode.removeChild(t);this.PARTS.CONTENT_DATA.appendChild(t);t.style.display="block";this.SetContent(t.innerHTML)};BX.CDialog.prototype.adjustSize=function(){};BX.CDialog.prototype.__adjustSize=function(){};BX.CDialog.prototype.adjustSizeEx=function(){BX.defer(this.__adjustSizeEx,this)()};BX.CDialog.prototype.__adjustSizeEx=function(){var t=this.PARTS.CONTENT_DATA.firstChild,e=0,i,s;while(t){if(BX.type.isElementNode(t)){i=parseInt(BX.style(t,"margin-top"),10);if(isNaN(i))i=0;s=parseInt(BX.style(t,"margin-bottom"),10);if(isNaN(s))s=0;e+=t.offsetHeight+i+s}t=BX.nextSibling(t)}if(e)this.PARTS.CONTENT_DATA.style.height=e+"px"};BX.CDialog.prototype.__onResizeFinished=function(){BX.WindowManager.saveWindowSize(this.PARAMS.resize_id||this.PARAMS.content_url,{height:parseInt(this.PARTS.CONTENT_DATA.style.height),width:parseInt(this.PARTS.CONTENT_DATA.style.width)})};BX.CDialog.prototype.Show=function(t){if(!this.PARAMS.content&&this.PARAMS.content_url&&BX.ajax&&!t){var e=BX.showWait();BX.WindowManager.currently_loaded=this;this.CreateOverlay();this.OVERLAY.style.display="block";this.OVERLAY.className="bx-core-dialog-overlay";var i="",s="GET";if(this.PARAMS.content_post){i=this.PARAMS.content_post;s="POST"}var o=this.PARAMS.content_url+(this.PARAMS.content_url.indexOf("?")<0?"?":"&")+"bxsender="+this._sender;this.auth_callback=BX.delegate(function(){this.PARAMS.content="";this.hideNotify();this.Show()},this);BX.ajax({method:s,dataType:"html",url:o,data:i,skipAuthCheck:true,onsuccess:BX.delegate(function(t){BX.closeWait(null,e);this.SetContent(t||"&nbsp;");this.Show()},this)})}else{BX.WindowManager.currently_loaded=null;BX.CDialog.superclass.Show.apply(this,arguments);this.adjustPos();this.OVERLAY.className="bx-core-dialog-overlay";this.__adjustSize();BX.removeCustomEvent(this,"onWindowResize",BX.proxy(this.__adjustSize,this));BX.addCustomEvent(this,"onWindowResize",BX.proxy(this.__adjustSize,this));if(this.PARAMS.resizable&&(this.PARAMS.content_url||this.PARAMS.resize_id)){BX.removeCustomEvent(this,"onWindowResizeFinished",BX.proxy(this.__onResizeFinished,this));BX.addCustomEvent(this,"onWindowResizeFinished",BX.proxy(this.__onResizeFinished,this))}}};BX.CDialog.prototype.GetInnerPos=function(){return{width:parseInt(this.PARTS.CONTENT_DATA.style.width),height:parseInt(this.PARTS.CONTENT_DATA.style.height)}};BX.CDialog.prototype.adjustPos=function(){if(!this.bExpanded){var t=window;var e=BX.PageObject.getRootWindow();if(e.BX.SidePanel&&e.BX.SidePanel.Instance&&e.BX.SidePanel.Instance.getTopSlider()){t=e.BX.SidePanel.Instance.getTopSlider().getWindow()}var i=t.BX.GetWindowInnerSize();var s=t.BX.GetWindowScrollPos();var o={left:parseInt(s.scrollLeft+i.innerWidth/2-parseInt(this.DIV.offsetWidth)/2)+"px",top:Math.max(parseInt(s.scrollTop+i.innerHeight/2-parseInt(this.DIV.offsetHeight)/2),0)+"px"};BX.adjust(this.DIV,{style:o})}};BX.CDialog.prototype.GetContent=function(){return this.PARTS.CONTENT_DATA};BX.CDialog.prototype.btnSave=BX.CDialog.btnSave={title:BX.message("JS_CORE_WINDOW_SAVE"),id:"savebtn",name:"savebtn",className:BX.browser.IsIE()&&BX.browser.IsDoctype()&&!BX.browser.IsIE10()?"":"adm-btn-save",action:function(){this.disableUntilError();this.parentWindow.PostParameters()}};BX.CDialog.prototype.btnCancel=BX.CDialog.btnCancel={title:BX.message("JS_CORE_WINDOW_CANCEL"),id:"cancel",name:"cancel",action:function(){this.parentWindow.Close()}};BX.CDialog.prototype.btnClose=BX.CDialog.btnClose={title:BX.message("JS_CORE_WINDOW_CLOSE"),id:"close",name:"close",action:function(){this.parentWindow.Close()}};BX.CAdminDialog=function(t){BX.CAdminDialog.superclass.constructor.apply(this,arguments);this._sender="core_window_cadmindialog";BX.addClass(this.DIV,"bx-core-adm-admin-dialog");this.PARTS.CONTENT.insertBefore(this.PARTS.HEAD,this.PARTS.CONTENT.firstChild);this.PARTS.HEAD.className="bx-core-adm-dialog-tabs"};BX.extend(BX.CAdminDialog,BX.CDialog);BX.CAdminDialog.prototype.SetHead=function(){BX.CAdminDialog.superclass.SetHead.apply(this,arguments);if(this.PARTS.HEAD.firstChild&&BX.type.isElementNode(this.PARTS.HEAD.firstChild)){var t=this.PARTS.HEAD.firstChild,e=0,i=0,s=0;while(t){if(BX.type.isElementNode(t)){i=parseInt(BX.style(t,"margin-left"),10);if(isNaN(i))i=0;s=parseInt(BX.style(t,"margin-right"),10);if(isNaN(s))s=0;e+=t.offsetWidth+i+s}t=BX.nextSibling(t)}this.SETTINGS.min_width=Math.max(e,this.SETTINGS.min_width)-2;if(this.PARAMS.width<this.SETTINGS.min_width){BX.adjust(this.PARTS.CONTENT_DATA,{style:{width:this.SETTINGS.min_width+"px"}})}}};BX.CAdminDialog.prototype.SetContent=function(t){this.__form=null;if(BX.type.isElementNode(t)){if(t.parentNode)t.parentNode.removeChild(t)}this.PARAMS.content=t;BX.cleanNode(this.PARTS.CONTENT_DATA);BX.adjust(this.PARTS.CONTENT_DATA,{children:[this.PARAMS.content||"&nbsp;"]});if(this.PARAMS.content_url&&this.GetForm()){this.__form.appendChild(BX.create("INPUT",{props:{type:"submit"},style:{display:"none"}}));this.__form.onsubmit=BX.delegate(this.__submit,this)}};BX.CAdminDialog.prototype.__expandGetSize=function(){var t=BX.CAdminDialog.superclass.__expandGetSize.apply(this,arguments);t.width-=parseInt(BX.style(this.PARTS.CONTENT_DATA,"padding-right"))+parseInt(BX.style(this.PARTS.CONTENT_DATA,"padding-left"));t.height-=parseInt(BX.style(this.PARTS.CONTENT_DATA,"padding-top"))+parseInt(BX.style(this.PARTS.CONTENT_DATA,"padding-bottom"));t.height-=this.PARTS.HEAD.offsetHeight;return t};BX.CAdminDialog.prototype.Submit=function(){var t=this.GetForm();if(t&&!t["bxpublic"]&&!/bxpublic=/.test(t.action)){t.appendChild(BX.create("INPUT",{props:{type:"hidden",name:"bxpublic",value:"Y"}}))}return BX.CAdminDialog.superclass.Submit.apply(this,arguments)};BX.CAdminDialog.prototype.btnSave=BX.CAdminDialog.btnSave={title:BX.message("JS_CORE_WINDOW_SAVE"),id:"savebtn",name:"savebtn",className:"adm-btn-save",action:function(){this.disableUntilError();this.parentWindow.Submit()}};BX.CAdminDialog.btnCancel=BX.CAdminDialog.superclass.btnCancel;BX.CAdminDialog.btnClose=BX.CAdminDialog.superclass.btnClose;BX.CDebugDialog=function(t){BX.CDebugDialog.superclass.constructor.apply(this,arguments)};BX.extend(BX.CDebugDialog,BX.CDialog);BX.CDebugDialog.prototype.ShowDetails=function(t){var e=BX(t);if(e){if(this.div_detail_current)this.div_detail_current.style.display="none";e.style.display="block";this.div_detail_current=e}};BX.CDebugDialog.prototype.SetContent=function(t){if(!t)return;var e=t.split("#DIVIDER#");if(e.length>1){this.PARAMS.content=e[1];this.PARTS.CONTENT_DATA.style.overflow="hidden";BX.CDebugDialog.superclass.SetContent.apply(this,[e[1]]);this.PARTS.CONTENT_INNER=this.PARTS.CONTENT_DATA.firstChild.nextSibling;this.PARTS.CONTENT_TOP=this.PARTS.CONTENT_DATA.insertBefore(BX.create("DIV",{props:{className:"bx-debug-content-top"},html:e[0]}),this.PARTS.CONTENT_INNER);this.PARTS.CONTENT_INNER.style.overflow="auto"}else{BX.CDebugDialog.superclass.SetContent.apply(this,arguments)}};BX.CDebugDialog.prototype.__adjustSize=function(){BX.CDebugDialog.superclass.__adjustSize.apply(this,arguments);if(this.PARTS.CONTENT_TOP){var t=this.PARTS.CONTENT_DATA.offsetHeight-this.PARTS.HEAD.offsetHeight-this.PARTS.CONTENT_TOP.offsetHeight-38;if(t>0){this.PARTS.CONTENT_INNER.style.height=t+"px"}}};BX.CEditorDialog=function(t){BX.CEditorDialog.superclass.constructor.apply(this,arguments);BX.removeClass(this.PARTS.CONTENT,"bx-core-adm-dialog-content-wrap");BX.removeClass(this.PARTS.CONTENT_DATA,"bx-core-adm-dialog-content");BX.removeClass(this.PARTS.CONTENT_DATA.lastChild,"bx-core-adm-dialog-content-wrap-inner");BX.removeClass(this.PARTS.BUTTONS_CONTAINER,"bx-core-adm-dialog-buttons");BX.addClass(this.PARTS.CONTENT,"bx-core-editor-dialog-content-wrap");BX.addClass(this.PARTS.CONTENT_DATA,"bx-core-editor-dialog-content");BX.addClass(this.PARTS.BUTTONS_CONTAINER,"bx-core-editor-dialog-buttons")};BX.extend(BX.CEditorDialog,BX.CDialog);BX.CEditorDialog.prototype.SetContent=function(){BX.CEditorDialog.superclass.SetContent.apply(this,arguments);BX.removeClass(this.PARTS.CONTENT_DATA.lastChild,"bx-core-adm-dialog-content-wrap-inner")};BX.CWizardDialog=function(t){BX.CWizardDialog.superclass.constructor.apply(this,arguments);BX.removeClass(this.PARTS.CONTENT,"bx-core-adm-dialog-content-wrap");BX.removeClass(this.PARTS.CONTENT_DATA,"bx-core-adm-dialog-content");BX.removeClass(this.PARTS.CONTENT_DATA.lastChild,"bx-core-adm-dialog-content-wrap-inner");BX.removeClass(this.PARTS.BUTTONS_CONTAINER,"bx-core-adm-dialog-buttons");BX.addClass(this.PARTS.CONTENT,"bx-core-wizard-dialog-content-wrap")};BX.extend(BX.CWizardDialog,BX.CDialog);BX.CAuthDialog=function(t){t.resizable=false;t.width=350;t.height=200;t.buttons=[this.btnSave];BX.CAuthDialog.superclass.constructor.apply(this,arguments);this._sender="core_window_cauthdialog";BX.addClass(this.DIV,"bx-core-auth-dialog");BX.AUTHAGENT=this};BX.extend(BX.CAuthDialog,BX.CDialog);BX.CAuthDialog.prototype.btnSave=BX.CAuthDialog.btnSave={title:BX.message("JS_CORE_WINDOW_AUTH"),id:"savebtn",name:"savebtn",className:"adm-btn-save",action:function(){this.disableUntilError();this.parentWindow.Submit("",this.parentWindow.PARAMS.content_url)}};BX.CAuthDialog.prototype.SetError=function(t){BX.closeWait();if(!!t)this.ShowError(t.MESSAGE||t)};BX.CAuthDialog.prototype.setAuthResult=function(t){BX.closeWait();if(t===false){this.Close();if(this.PARAMS.callback)this.PARAMS.callback()}else{this.SetError(t)}};BX.CWindowFloat=function(t){BX.CWindowFloat.superclass.constructor.apply(this,[t,"float"]);this.SETTINGS.resizable=false};BX.extend(BX.CWindowFloat,BX.CWindow);BX.CWindowFloat.prototype.adjustPos=function(){if(this.PARAMS.parent)this.adjustToNode();else if(this.PARAMS.x&&this.PARAMS.y)this.adjustToPos([this.PARAMS.x,this.PARAMS.y])};BX.CWindowFloat.prototype.adjustToPos=function(t){this.DIV.style.left=parseInt(t[0])+"px";this.DIV.style.top=parseInt(t[1])+"px"};BX.CWindowFloat.prototype.adjustToNodeGetPos=function(){return BX.pos(this.PARAMS.parent)};BX.CWindowFloat.prototype.adjustToNode=function(t){t=t||this.PARAMS.parent;this.PARAMS.parent=BX(t);if(this.PARAMS.parent){var e=this.adjustToNodeGetPos();this.DIV.style.top=e.top+"px";this.DIV.style.left=e.left+"px";this.PARAMS.parent.OPENER=this}};BX.CWindowFloat.prototype.Show=function(){this.adjustToPos([-1e3,-1e3]);BX.CWindowFloat.superclass.Show.apply(this,arguments);this.adjustPos()};BX.COpener=function(t){this.PARAMS=t||{};this.MENU=t.MENU||[];this.DIV=t.DIV;this.ATTACH=t.ATTACH||t.DIV;this.ATTACH_MODE=t.ATTACH_MODE||"bottom";this.ACTIVE_CLASS=t.ACTIVE_CLASS||"";this.PUBLIC_FRAME=t.PUBLIC_FRAME||0;this.LEVEL=t.LEVEL||0;this.CLOSE_ON_CLICK=typeof t.CLOSE_ON_CLICK!="undefined"?!!t.CLOSE_ON_CLICK:true;this.ADJUST_ON_CLICK=typeof t.ADJUST_ON_CLICK!="undefined"?!!t.ADJUST_ON_CLICK:true;this.TYPE=this.PARAMS.TYPE=="hover"?"hover":"click";this._openTimeout=null;if(this.PARAMS.TYPE=="hover"&&t.TIMEOUT!==0)this.TIMEOUT=t.TIMEOUT||1e3;else this.TIMEOUT=0;this.bMenuInit=false;if(!!this.PARAMS.MENU_URL){this.bMenuLoaded=false;this.bMenuLoading=false;this.MENU=[{TEXT:BX.message("JS_CORE_LOADING"),CLOSE_ON_CLICK:false}];if(this.PARAMS.MENU_PRELOAD){BX.defer(this.Load,this)()}}BX.ready(BX.defer(this.Init,this))};BX.COpener.prototype.Init=function(){this.DIV=BX(this.DIV);switch(this.TYPE){case"hover":BX.bind(this.DIV,"mouseover",BX.proxy(this.Open,this));BX.bind(this.DIV,"click",BX.proxy(this.Toggle,this));break;case"click":BX.bind(this.DIV,"click",BX.proxy(this.Toggle,this));break}};BX.COpener.prototype.Load=function(){if(this.PARAMS.MENU_URL&&!this.bMenuLoaded){if(!this.bMenuLoading){var t=this.PARAMS.MENU_URL;if(t.indexOf("sessid=")<=0)t+=(t.indexOf("?")>0?"&":"?")+"sessid="+BX.bitrix_sessid();this.bMenuLoading=true;BX.ajax.loadJSON(t,BX.proxy(this.SetMenu,this),BX.proxy(this.LoadFailed,this))}}};BX.COpener.prototype.SetMenu=function(t){this.bMenuLoaded=true;this.bMenuLoading=false;if(this.bMenuInit){this.MENU.setItems(t)}else{this.MENU=t}};BX.COpener.prototype.LoadFailed=function(t,e){this.bMenuLoading=false;this.SetMenu([{TEXT:BX.message("JS_CORE_NO_DATA"),CLOSE_ON_CLICK:true}]);BX.debug(arguments)};BX.COpener.prototype.checkAdminMenu=function(){if(document.documentElement.id=="bx-admin-prefix")return true;return!!BX.findParent(this.DIV,{property:{id:"bx-admin-prefix"}})};BX.COpener.prototype.Toggle=function(t){this.__clear_timeout();if(!this.bMenuInit||!this.MENU.visible()){var e=this.TIMEOUT;this.TIMEOUT=0;this.Open(t);this.TIMEOUT=e}else{this.MENU.Close()}return!!(t||window.event)&&BX.PreventDefault(t)};BX.COpener.prototype.GetMenu=function(){if(!this.bMenuInit){if(BX.type.isArray(this.MENU)){this.MENU=new BX.CMenu({ITEMS:this.MENU,ATTACH_MODE:this.ATTACH_MODE,SET_ID:this.checkAdminMenu()?"bx-admin-prefix":"",CLOSE_ON_CLICK:!!this.CLOSE_ON_CLICK,ADJUST_ON_CLICK:!!this.ADJUST_ON_CLICK,PUBLIC_FRAME:!!this.PUBLIC_FRAME,LEVEL:this.LEVEL,parent:BX(this.DIV),parent_attach:BX(this.ATTACH)});if(this.LEVEL>0){BX.bind(this.MENU.DIV,"mouseover",BX.proxy(this._on_menu_hover,this));BX.bind(this.MENU.DIV,"mouseout",BX.proxy(this._on_menu_hout,this))}}BX.addCustomEvent(this.MENU,"onMenuOpen",BX.proxy(this.handler_onopen,this));BX.addCustomEvent(this.MENU,"onMenuClose",BX.proxy(this.handler_onclose,this));BX.addCustomEvent("onMenuItemHover",BX.proxy(this.handler_onover,this));this.bMenuInit=true}return this.MENU};BX.COpener.prototype.Open=function(){this.GetMenu();this.bOpen=true;this.__clear_timeout();if(this.TIMEOUT>0){BX.bind(this.DIV,"mouseout",BX.proxy(this.__clear_timeout,this));this._openTimeout=setTimeout(BX.proxy(this.__open,this),this.TIMEOUT)}else{this.__open()}if(!!this.PARAMS.MENU_URL&&!this.bMenuLoaded){this._loadTimeout=setTimeout(BX.proxy(this.Load,this),parseInt(this.TIMEOUT/2))}return true};BX.COpener.prototype.__clear_timeout=function(){if(!!this._openTimeout)clearTimeout(this._openTimeout);if(!!this._loadTimeout)clearTimeout(this._loadTimeout);BX.unbind(this.DIV,"mouseout",BX.proxy(this.__clear_timeout,this))};BX.COpener.prototype._on_menu_hover=function(){this.bMenuHover=true;this.__clear_timeout();if(this.ACTIVE_CLASS)BX.addClass(this.DIV,this.ACTIVE_CLASS)};BX.COpener.prototype._on_menu_hout=function(){this.bMenuHover=false};BX.COpener.prototype.handler_onover=function(t,e){if(this.bMenuHover)return;if(e!=this&&t==this.LEVEL-1&&this.ACTIVE_CLASS){BX.removeClass(this.DIV,this.ACTIVE_CLASS)}if(this.bMenuInit&&t<=this.LEVEL-1&&this.MENU.visible()){if(e!=this){this.__clear_timeout();this._openTimeout=setTimeout(BX.proxy(this.Close,this),this.TIMEOUT)}}};BX.COpener.prototype.handler_onopen=function(){this.bOpen=true;if(this.ACTIVE_CLASS)BX.addClass(this.DIV,this.ACTIVE_CLASS);BX.defer(function(){BX.onCustomEvent(this,"onOpenerMenuOpen")},this)()};BX.COpener.prototype.handler_onclose=function(){this.bOpen=false;BX.onCustomEvent(this,"onOpenerMenuClose");if(this.ACTIVE_CLASS)BX.removeClass(this.DIV,this.ACTIVE_CLASS)};BX.COpener.prototype.Close=function(){if(!this.bMenuInit)return;if(!!this._openTimeout)clearTimeout(this._openTimeout);this.bOpen=false;this.__close()};BX.COpener.prototype.__open=function(){this.__clear_timeout();if(this.bMenuInit&&this.bOpen&&!this.MENU.visible())this.MENU.Show()};BX.COpener.prototype.__close=function(){if(this.bMenuInit&&!this.bOpen&&this.MENU.visible())this.MENU.Hide()};BX.COpener.prototype.__close_immediately=function(){this.bOpen=false;this.__close()};BX.COpener.prototype.isMenuVisible=function(){return null!=this.MENU.visible&&this.MENU.visible()};BX.CMenu=function(t){BX.CMenu.superclass.constructor.apply(this);this.DIV.style.width="auto";this.DIV.style.height="auto";this.PARAMS=t||{};this.PARTS={};this.PARAMS.ATTACH_MODE=this.PARAMS.ATTACH_MODE||"bottom";this.PARAMS.CLOSE_ON_CLICK=typeof this.PARAMS.CLOSE_ON_CLICK=="undefined"?true:this.PARAMS.CLOSE_ON_CLICK;this.PARAMS.ADJUST_ON_CLICK=typeof this.PARAMS.ADJUST_ON_CLICK=="undefined"?true:this.PARAMS.ADJUST_ON_CLICK;this.PARAMS.PUBLIC_FRAME=typeof this.PARAMS.PUBLIC_FRAME=="undefined"?false:this.PARAMS.PUBLIC_FRAME;this.PARAMS.LEVEL=this.PARAMS.LEVEL||0;this.DIV.className="bx-core-popup-menu bx-core-popup-menu-"+this.PARAMS.ATTACH_MODE+" bx-core-popup-menu-level"+this.PARAMS.LEVEL+(typeof this.PARAMS.ADDITIONAL_CLASS!="undefined"?" "+this.PARAMS.ADDITIONAL_CLASS:"");if(!!this.PARAMS.SET_ID)this.DIV.id=this.PARAMS.SET_ID;if(this.PARAMS.LEVEL==0){this.ARROW=this.DIV.appendChild(BX.create("SPAN",{props:{className:"bx-core-popup-menu-angle"},style:{left:"15px"}}))}if(!!this.PARAMS.CLASS_NAME)this.DIV.className+=" "+this.PARAMS.CLASS_NAME;BX.bind(this.DIV,"click",BX.eventCancelBubble);this.ITEMS=[];this.setItems(this.PARAMS.ITEMS);BX.addCustomEvent("onMenuOpen",BX.proxy(this._onMenuOpen,this));BX.addCustomEvent("onMenuItemSelected",BX.proxy(this.Hide,this))};BX.extend(BX.CMenu,BX.CWindowFloat);BX.CMenu.broadcastCloseEvent=function(){BX.onCustomEvent("onMenuItemSelected")};BX.CMenu._toggleChecked=function(){BX.toggleClass(this,"bx-core-popup-menu-item-checked")};BX.CMenu._itemDblClick=function(){window.location.href=this.href};BX.CMenu.prototype.toggleArrow=function(t){if(!!this.ARROW){if(typeof t=="undefined"){t=this.ARROW.style.visibility=="hidden"}this.ARROW.style.visibility=!!t?"visible":"hidden"}};BX.CMenu.prototype.visible=function(){return this.DIV.style.display!=="none"};BX.CMenu.prototype._onMenuOpen=function(t,e){if(this.visible()){if(e==this.PARAMS.LEVEL&&t!=this){this.Hide()}}};BX.CMenu.prototype.onUnRegister=function(){if(!this.visible())return;this.Hide()};BX.CMenu.prototype.setItems=function(t){this.PARAMS.ITEMS=t;BX.cleanNode(this.DIV);if(!!this.ARROW)this.DIV.appendChild(this.ARROW);if(this.PARAMS.ITEMS){this.PARAMS.ITEMS=BX.util.array_values(this.PARAMS.ITEMS);var e=false;var i=0;for(var s=0,o=this.PARAMS.ITEMS.length;s<o;s++){if((s==0||s==o-1)&&this.PARAMS.ITEMS[s].SEPARATOR)continue;i++;if(!e)e=!!this.PARAMS.ITEMS[s].GLOBAL_ICON;this.addItem(this.PARAMS.ITEMS[s],s)}if(i===1)BX.addClass(this.DIV,"bx-core-popup-menu-single-item");else BX.removeClass(this.DIV,"bx-core-popup-menu-single-item");if(!e)BX.addClass(this.DIV,"bx-core-popup-menu-no-icons");else BX.removeClass(this.DIV,"bx-core-popup-menu-no-icons")}};BX.CMenu.prototype.addItem=function(t){this.ITEMS.push(t);if(t.SEPARATOR){t.NODE=BX.create("DIV",{props:{className:"bx-core-popup-menu-separator"}})}else{var e=!!t.MENU&&(BX.type.isArray(t.MENU)&&t.MENU.length>0||t.MENU instanceof BX.CMenu)||!!t.MENU_URL;if(t.DISABLED){t.CLOSE_ON_CLICK=false;t.LINK=null;t.ONCLICK=null;t.ACTION=null}var i={};if(!!t.LINK||BX.browser.IsIE()&&!BX.browser.IsDoctype()){i.href=t.LINK||"javascript:void(0)"}if(this.PARAMS.PUBLIC_FRAME){i.target="_top"}t.NODE=BX.create(!!t.LINK||BX.browser.IsIE()&&!BX.browser.IsDoctype()?"A":"SPAN",{props:{className:"bx-core-popup-menu-item"+(e?" bx-core-popup-menu-item-opener":"")+(!!t.DEFAULT?" bx-core-popup-menu-item-default":"")+(!!t.DISABLED?" bx-core-popup-menu-item-disabled":"")+(!!t.CHECKED?" bx-core-popup-menu-item-checked":""),title:!!BX.message["MENU_ENABLE_TOOLTIP"]||!!t.SHOW_TITLE?t.TITLE||"":"",BXMENULEVEL:this.PARAMS.LEVEL},attrs:i,events:{mouseover:function(){BX.onCustomEvent("onMenuItemHover",[this.BXMENULEVEL,this.OPENER])}},html:'<span class="bx-core-popup-menu-item-icon'+(t.GLOBAL_ICON?" "+t.GLOBAL_ICON:"")+'"></span><span class="bx-core-popup-menu-item-text">'+(t.HTML||(t.TEXT?BX.util.htmlspecialchars(t.TEXT):""))+"</span>"});if(e&&!t.DISABLED){t.NODE.OPENER=new BX.COpener({DIV:t.NODE,ACTIVE_CLASS:"bx-core-popup-menu-item-opened",TYPE:"hover",MENU:t.MENU,MENU_URL:t.MENU_URL,MENU_PRELOAD:!!t.MENU_PRELOAD,LEVEL:this.PARAMS.LEVEL+1,ATTACH_MODE:"right",TIMEOUT:500})}else if(this.PARAMS.CLOSE_ON_CLICK&&(typeof t.CLOSE_ON_CLICK=="undefined"||!!t.CLOSE_ON_CLICK)){BX.bind(t.NODE,"click",BX.CMenu.broadcastCloseEvent)}else if(this.PARAMS.ADJUST_ON_CLICK&&(typeof t.ADJUST_ON_CLICK=="undefined"||!!t.ADJUST_ON_CLICK)){BX.bind(t.NODE,"click",BX.defer(this.adjustPos,this))}if(e&&!!t.LINK){BX.bind(t.NODE,"dblclick",BX.CMenu._itemDblClick)}if(typeof t.CHECKED!="undefined"){BX.bind(t.NODE,"click",BX.CMenu._toggleChecked)}t.ONCLICK=t.ACTION||t.ONCLICK;if(!!t.ONCLICK){if(BX.type.isString(t.ONCLICK)){t.ONCLICK=new Function("event",t.ONCLICK)}BX.bind(t.NODE,"click",t.ONCLICK)}}this.DIV.appendChild(t.NODE)};BX.CMenu.prototype._documentClickBind=function(){this._documentClickUnBind();BX.bind(document,"click",BX.proxy(this._documentClick,this))};BX.CMenu.prototype._documentClickUnBind=function(){BX.unbind(document,"click",BX.proxy(this._documentClick,this))};BX.CMenu.prototype._documentClick=function(t){t=t||window.event;if(!!t&&!(BX.getEventButton(t)&BX.MSLEFT))return;this.Close()};BX.CMenu.prototype.Show=function(){BX.onCustomEvent(this,"onMenuOpen",[this,this.PARAMS.LEVEL]);BX.CMenu.superclass.Show.apply(this,[]);this.bCloseEventFired=false;BX.addCustomEvent(this.PARAMS.parent_attach,"onChangeNodePosition",BX.proxy(this.adjustToNode,this));BX.defer(this._documentClickBind,this)()};BX.CMenu.prototype.Close=BX.CMenu.prototype.Hide=function(){if(!this.visible())return;BX.removeCustomEvent(this.PARAMS.parent_attach,"onChangeNodePosition",BX.proxy(this.adjustToNode,this));this._documentClickUnBind();if(!this.bCloseEventFired){BX.onCustomEvent(this,"onMenuClose",[this,this.PARAMS.LEVEL]);this.bCloseEventFired=true}BX.CMenu.superclass.Hide.apply(this,arguments)};BX.CMenu.prototype.__adjustMenuToNode=function(){var t=BX.pos(this.PARAMS.parent_attach),e=!!BX.findParent(this.PARAMS.parent_attach,BX.is_fixed);if(e)this.DIV.style.position="fixed";else this.DIV.style.position="absolute";if(!t.top){this.DIV.style.top="-1000px";this.DIV.style.left="-1000px"}if(this.bTimeoutSet)return;var i=this.DIV.offsetWidth,s=this.DIV.offsetHeight;if(!i){setTimeout(BX.delegate(function(){this.bTimeoutSet=false;this.__adjustMenuToNode()},this),100);this.bTimeoutSet=true;return}var o={},n=BX.GetWindowSize();switch(this.PARAMS.ATTACH_MODE){case"bottom":o.top=t.bottom+9;o.left=t.left;var r=0;if(!!this.ARROW){if(t.width>i)r=parseInt(i/2-7);else r=parseInt(Math.min(i,t.width)/2-7);if(r<7){o.left-=15;r+=15}}if(o.left>n.scrollWidth-i-10){var h=o.left;o.left=n.scrollWidth-i-10;if(!!this.ARROW)r+=h-o.left}if(e){o.left-=n.scrollLeft}if(!!this.ARROW)this.ARROW.style.left=r+"px";break;case"right":o.top=t.top-1;o.left=t.right;if(o.left>n.scrollWidth-i-10){o.left=t.left-i-1}break}if(e){o.top-=n.scrollTop}if(!!this.ARROW)this.ARROW.className="bx-core-popup-menu-angle";if(o.top+s>n.scrollTop+n.innerHeight||o.top+s>n.scrollHeight){var a=this.PARAMS.ATTACH_MODE=="bottom"?t.top-s-9:t.bottom-s+1;if(a>n.scrollTop||o.top+s>n.scrollHeight){if(o.top+s>n.scrollHeight){o.top=Math.max(0,n.scrollHeight-s);this.toggleArrow(false)}else{o.top=a;if(!!this.ARROW)this.ARROW.className="bx-core-popup-menu-angle-bottom"}}}if(o.top+o.left==0){this.Hide()}else{this.DIV.style.top=o.top+"px";this.DIV.style.left=o.left+"px"}};BX.CMenu.prototype.adjustToNode=function(t){this.PARAMS.parent_attach=BX(t)||this.PARAMS.parent_attach||this.PARAMS.parent;this.__adjustMenuToNode()};BX.CMenuOpener=function(t){BX.CMenuOpener.superclass.constructor.apply(this);this.PARAMS=t||{};this.setParent(this.PARAMS.parent);this.PARTS={};this.SETTINGS.drag_restrict=true;this.defaultAction=null;this.timeout=500;this.DIV.className="bx-component-opener";this.DIV.ondblclick=BX.PreventDefault;if(this.PARAMS.component_id){this.PARAMS.transform=!!this.PARAMS.transform}this.OPENERS=[];this.DIV.appendChild(BX.create("SPAN",{props:{className:"bx-context-toolbar"+(this.PARAMS.transform?" bx-context-toolbar-vertical-mode":"")}}));this.PARTS.INNER=this.DIV.firstChild.appendChild(BX.create("SPAN",{props:{className:"bx-context-toolbar-inner"},html:'<span class="bx-context-toolbar-drag-icon"></span><span class="bx-context-toolbar-vertical-line"></span><br>'}));this.EXTRA_BUTTONS={};var e=0;for(var i=0,s=this.PARAMS.menu.length;i<s;i++){var o=this.addItem(this.PARAMS.menu[i]);if(null!=o){e++;this.PARTS.INNER.appendChild(o);this.PARTS.INNER.appendChild(BX.create("BR"))}}var n=e>0;this.PARTS.ICONS=this.PARTS.INNER.appendChild(BX.create("SPAN",{props:{className:"bx-context-toolbar-icons"}}));if(this.PARAMS.component_id){this.PARAMS.pin=!!this.PARAMS.pin;if(n)this.PARTS.ICONS.appendChild(BX.create("SPAN",{props:{className:"bx-context-toolbar-separator"}}));this.PARTS.ICON_PIN=this.PARTS.ICONS.appendChild(BX.create("A",{attrs:{href:"javascript:void(0)"},props:{className:this.PARAMS.pin?"bx-context-toolbar-pin-fixed":"bx-context-toolbar-pin"},events:{click:BX.delegate(this.__pin_btn_clicked,this)}}))}if(this.EXTRA_BUTTONS["components2_props"]){var r=this.EXTRA_BUTTONS["components2_props"]||{URL:"javascript:void(0)"};if(null==this.defaultAction){this.defaultAction=r.ONCLICK;this.defaultActionTitle=r.TITLE||r.TEXT}r.URL="javascript:"+BX.util.urlencode(r.ONCLICK);this.ATTACH=this.PARTS.ICONS.appendChild(BX.create("SPAN",{props:{className:"bx-context-toolbar-button bx-context-toolbar-button-settings"},children:[BX.create("SPAN",{props:{className:"bx-context-toolbar-button-inner"},children:[BX.create("A",{attrs:{href:r.URL},events:{mouseover:BX.proxy(this.__msover_text,this),mouseout:BX.proxy(this.__msout_text,this),mousedown:BX.proxy(this.__msdown_text,this)},html:'<span class="bx-context-toolbar-button-icon bx-context-toolbar-settings-icon"></span>'}),BX.create("A",{attrs:{href:"javascript: void(0)"},props:{className:"bx-context-toolbar-button-arrow"},events:{mouseover:BX.proxy(this.__msover_arrow,this),mouseout:BX.proxy(this.__msout_arrow,this),mousedown:BX.proxy(this.__msdown_arrow,this)},html:'<span class="bx-context-toolbar-button-arrow"></span>'})]})]}));this.OPENER=this.ATTACH.firstChild.lastChild;var h=this.attachMenu(this.EXTRA_BUTTONS["components2_submenu"]["MENU"]);BX.addCustomEvent(h,"onOpenerMenuOpen",BX.proxy(this.__menu_open,this));BX.addCustomEvent(h,"onOpenerMenuClose",BX.proxy(this.__menu_close,this))}if(e>1){this.PARTS.ICONS.appendChild(BX.create("span",{props:{className:"bx-context-toolbar-separator bx-context-toolbar-separator-switcher"}}));this.ICON_TRANSFORM=this.PARTS.ICONS.appendChild(BX.create("A",{attrs:{href:"javascript: void(0)"},props:{className:"bx-context-toolbar-switcher"},events:{click:BX.delegate(this.__trf_btn_clicked,this)}}))}if(this.PARAMS.HINT){this.DIV.BXHINT=this.HINT=new BX.CHint({parent:this.DIV,hint:this.PARAMS.HINT.TEXT||"",title:this.PARAMS.HINT.TITLE||"",hide_timeout:this.timeout/2,preventHide:false})}BX.addCustomEvent(this,"onWindowDragFinished",BX.delegate(this.__onMoveFinished,this));BX.addCustomEvent("onDynamicModeChange",BX.delegate(this.__onDynamicModeChange,this));BX.addCustomEvent("onTopPanelCollapse",BX.delegate(this.__onPanelCollapse,this));BX.addCustomEvent("onMenuOpenerMoved",BX.delegate(this.checkPosition,this));BX.addCustomEvent("onMenuOpenerUnhide",BX.delegate(this.checkPosition,this));if(this.OPENERS){for(i=0,s=this.OPENERS.length;i<s;i++){BX.addCustomEvent(this.OPENERS[i],"onOpenerMenuOpen",BX.proxy(this.__hide_hint,this))}}};BX.extend(BX.CMenuOpener,BX.CWindowFloat);BX.CMenuOpener.prototype.setParent=function(t){t=BX(t);if(t.OPENER&&t.OPENER!=this){t.OPENER.Close();t.OPENER.clearHoverHoutEvents()}if(this.PARAMS.parent&&this.PARAMS.parent!=t){this.clearHoverHoutEvents();this.PARAMS.parent.OPENER=null}this.PARAMS.parent=t;this.PARAMS.parent.OPENER=this};BX.CMenuOpener.prototype.setHoverHoutEvents=function(t,e){if(!this.__opener_events_set){BX.bind(this.Get(),"mouseover",t);BX.bind(this.Get(),"mouseout",e);this.__opener_events_set=true}};BX.CMenuOpener.prototype.clearHoverHoutEvents=function(){if(this.Get()){BX.unbindAll(this.Get());this.__opener_events_set=false}};BX.CMenuOpener.prototype.unclosable=true;BX.CMenuOpener.prototype.__check_intersection=function(t,e){return!(e.right<=t.left||e.left>=t.right||e.bottom<=t.top||e.top>=t.bottom)};BX.CMenuOpener.prototype.__msover_text=function(){this.bx_hover=true;if(!this._menu_open)BX.addClass(this.ATTACH,"bx-context-toolbar-button-text-hover")};BX.CMenuOpener.prototype.__msout_text=function(){this.bx_hover=false;if(!this._menu_open)BX.removeClass(this.ATTACH,"bx-context-toolbar-button-text-hover bx-context-toolbar-button-text-active")};BX.CMenuOpener.prototype.__msover_arrow=function(){this.bx_hover=true;if(!this._menu_open)BX.addClass(this.ATTACH,"bx-context-toolbar-button-arrow-hover")};BX.CMenuOpener.prototype.__msout_arrow=function(){this.bx_hover=false;if(!this._menu_open)BX.removeClass(this.ATTACH,"bx-context-toolbar-button-arrow-hover bx-context-toolbar-button-arrow-active")};BX.CMenuOpener.prototype.__msdown_text=function(){this.bx_active=true;if(!this._menu_open)BX.addClass(this.ATTACH,"bx-context-toolbar-button-text-active")};BX.CMenuOpener.prototype.__msdown_arrow=function(){this.bx_active=true;if(!this._menu_open)BX.addClass(this.ATTACH,"bx-context-toolbar-button-arrow-active")};BX.CMenuOpener.prototype.__menu_close=function(){this._menu_open=false;this.bx_active=false;BX.removeClass(this.ATTACH,"bx-context-toolbar-button-active bx-context-toolbar-button-text-active bx-context-toolbar-button-arrow-active");if(!this.bx_hover){BX.removeClass(this.ATTACH,"bx-context-toolbar-button-hover bx-context-toolbar-button-text-hover bx-context-toolbar-button-arrow-hover");this.bx_hover=false}};BX.CMenuOpener.prototype.__menu_open=function(){this._menu_open=true};BX.CMenuOpener.prototype.checkPosition=function(){if(this.isMenuVisible()||this.DIV.style.display=="none"||this==BX.proxy_context||BX.proxy_context.zIndex>this.zIndex)return;this.correctPosition(BX.proxy_context)};BX.CMenuOpener.prototype.correctPosition=function(t){var e=BX.pos(this.DIV),i=BX.pos(t.Get());if(this.__check_intersection(e,i)){var s=i.top-e.height;if(s<0)s=i.bottom;this.DIV.style.top=s+"px";BX.addCustomEvent(t,"onMenuOpenerHide",BX.proxy(this.restorePosition,this));BX.onCustomEvent(this,"onMenuOpenerMoved")}};BX.CMenuOpener.prototype.restorePosition=function(){if(!this.MOUSEOVER&&!this.isMenuVisible()){if(this.originalPos)this.DIV.style.top=this.originalPos.top+"px";BX.removeCustomEvent(BX.proxy_context,"onMenuOpenerHide",BX.proxy(this.restorePosition,this));if(this.restore_pos_timeout)clearTimeout(this.restore_pos_timeout)}else{this.restore_pos_timeout=setTimeout(BX.proxy(this.restorePosition,this),this.timeout)}};BX.CMenuOpener.prototype.Show=function(){BX.CMenuOpener.superclass.Show.apply(this,arguments);this.SetDraggable(this.PARTS.INNER.firstChild);this.DIV.style.width="auto";this.DIV.style.height="auto";if(!this.PARAMS.pin){this.DIV.style.left="-1000px";this.DIV.style.top="-1000px";this.Hide()}else{this.bPosAdjusted=true;this.bMoved=true;if(this.PARAMS.top)this.DIV.style.top=this.PARAMS.top+"px";if(this.PARAMS.left)this.DIV.style.left=this.PARAMS.left+"px";this.DIV.style.display=!BX.admin.dynamic_mode||BX.admin.dynamic_mode_show_borders?"block":"none";if(this.DIV.style.display=="block"){setTimeout(BX.delegate(function(){BX.onCustomEvent(this,"onMenuOpenerUnhide")},this),50)}}};BX.CMenuOpener.prototype.executeDefaultAction=function(){if(this.defaultAction){if(BX.type.isFunction(this.defaultAction))this.defaultAction();else if(BX.type.isString(this.defaultAction))BX.evalGlobal(this.defaultAction)}};BX.CMenuOpener.prototype.__onDynamicModeChange=function(t){this.DIV.style.display=t?"block":"none"};BX.CMenuOpener.prototype.__onPanelCollapse=function(t,e){this.DIV.style.top=parseInt(this.DIV.style.top)+e+"px";if(this.PARAMS.pin){this.__savePosition()}};BX.CMenuOpener.prototype.__onMoveFinished=function(){BX.onCustomEvent(this,"onMenuOpenerMoved");this.bMoved=true;if(this.PARAMS.pin)this.__savePosition()};BX.CMenuOpener.prototype.__savePosition=function(){var t={};t.pin=this.PARAMS.pin;if(!this.PARAMS.pin){t.top=false;t.left=false;t.transform=false}else{t.transform=this.PARAMS.transform;if(this.bMoved){t.left=parseInt(this.DIV.style.left);t.top=parseInt(this.DIV.style.top)}}BX.WindowManager.saveWindowOptions(this.PARAMS.component_id,t)};BX.CMenuOpener.prototype.__pin_btn_clicked=function(){this.Pin()};BX.CMenuOpener.prototype.Pin=function(t){if(null==t)this.PARAMS.pin=!this.PARAMS.pin;else this.PARAMS.pin=!!t;this.PARTS.ICON_PIN.className=this.PARAMS.pin?"bx-context-toolbar-pin-fixed":"bx-context-toolbar-pin";this.__savePosition()};BX.CMenuOpener.prototype.__trf_btn_clicked=function(){this.Transform()};BX.CMenuOpener.prototype.Transform=function(t){var e={};if(null==t)this.PARAMS.transform=!this.PARAMS.transform;else this.PARAMS.transform=!!t;if(this.bMoved){e=BX.pos(this.DIV)}if(this.PARAMS.transform)BX.addClass(this.DIV.firstChild,"bx-context-toolbar-vertical-mode");else BX.removeClass(this.DIV.firstChild,"bx-context-toolbar-vertical-mode");if(!this.bMoved){this.adjustPos()}else{this.DIV.style.left=e.right-this.DIV.offsetWidth-(BX.browser.IsIE()&&!BX.browser.IsDoctype()?2:0)+"px"}this.__savePosition()};BX.CMenuOpener.prototype.adjustToNodeGetPos=function(){var t=BX.pos(this.PARAMS.parent);var e=BX.GetWindowScrollSize();var i=this.DIV.offsetWidth;t.left-=BX.admin.__border_dx;t.top-=BX.admin.__border_dx;if(true||!this.PARAMS.transform){t.top-=45}if(t.left>e.scrollWidth-i){t.left=e.scrollWidth-i}return t};BX.CMenuOpener.prototype.addItem=function(t){if(t.TYPE){this.EXTRA_BUTTONS[t.TYPE]=t;return null}else{var e=new BX.CMenuOpenerItem(t);if(null==this.defaultAction){if(e.item.ONCLICK){this.defaultAction=t.ONCLICK}else if(e.item.MENU){this.defaultAction=BX.delegate(function(){this.Open()},e.item.OPENER)}this.defaultActionTitle=t.TITLE||t.TEXT;BX.addClass(e.Get(),"bx-content-toolbar-default")}if(e.item.OPENER)this.OPENERS[this.OPENERS.length]=e.item.OPENER;return e.Get()}};BX.CMenuOpener.prototype.attachMenu=function(t){var e=new BX.COpener({DIV:this.OPENER,ATTACH:this.ATTACH,MENU:t,TYPE:"click"});this.OPENERS[this.OPENERS.length]=e;return e};BX.CMenuOpener.prototype.__hide_hint=function(){if(this.HINT)this.HINT.__hide_immediately()};BX.CMenuOpener.prototype.isMenuVisible=function(){for(var t=0,e=this.OPENERS.length;t<e;t++){if(this.OPENERS[t].isMenuVisible())return true}return false};BX.CMenuOpener.prototype.Hide=function(){if(!this.PARAMS.pin){this.DIV.style.display="none";BX.onCustomEvent(this,"onMenuOpenerHide")}};BX.CMenuOpener.prototype.UnHide=function(){this.DIV.style.display="block";if(!this.bPosAdjusted&&!this.PARAMS.pin){this.adjustPos();this.bPosAdjusted=true}if(null==this.originalPos&&!this.bMoved){this.originalPos=BX.pos(this.DIV)}BX.onCustomEvent(this,"onMenuOpenerUnhide")};BX.CMenuOpenerItem=function(t){this.item=t;if(this.item.ACTION&&!this.item.ONCLICK){this.item.ONCLICK=this.item.ACTION}this.DIV=BX.create("SPAN");this.DIV.appendChild(BX.create("SPAN",{props:{className:"bx-context-toolbar-button-underlay"}}));this.WRAPPER=this.DIV.appendChild(BX.create("SPAN",{props:{className:"bx-context-toolbar-button-wrapper"},children:[BX.create("SPAN",{props:{className:"bx-context-toolbar-button",title:t.TITLE},children:[BX.create("SPAN",{props:{className:"bx-context-toolbar-button-inner"}})]})]}));var e=BX.create("SPAN",{props:{className:"bx-context-toolbar-button-icon"+(this.item.ICON||this.item.ICONCLASS?" "+(this.item.ICON||this.item.ICONCLASS):"")},attrs:!(this.item.ICON||this.item.ICONCLASS)&&(this.item.SRC||this.item.IMAGE)?{style:"background: scroll transparent url("+(this.item.SRC||this.item.IMAGE)+") no-repeat center center !important;"}:{}}),i=BX.create("SPAN",{props:{className:"bx-context-toolbar-button-text"},text:this.item.TEXT});if(this.item.ACTION&&!this.item.ONCLICK){this.item.ONCLICK=this.item.ACTION}this.bHasMenu=!!this.item.MENU;this.bHasAction=!!this.item.ONCLICK;if(this.bHasAction){this.LINK=this.WRAPPER.firstChild.firstChild.appendChild(BX.create("A",{attrs:{href:"javascript: void(0)"},events:{mouseover:this.bHasMenu?BX.proxy(this.__msover_text,this):BX.proxy(this.__msover,this),mouseout:this.bHasMenu?BX.proxy(this.__msout_text,this):BX.proxy(this.__msout,this),mousedown:this.bHasMenu?BX.proxy(this.__msdown_text,this):BX.proxy(this.__msdown,this)},children:[e,i]}));if(this.bHasMenu){this.LINK_MENU=this.WRAPPER.firstChild.firstChild.appendChild(BX.create("A",{props:{className:"bx-context-toolbar-button-arrow"},attrs:{href:"javascript: void(0)"},events:{mouseover:BX.proxy(this.__msover_arrow,this),mouseout:BX.proxy(this.__msout_arrow,this),mousedown:BX.proxy(this.__msdown_arrow,this)},children:[BX.create("SPAN",{props:{className:"bx-context-toolbar-button-arrow"}})]}))}}else if(this.bHasMenu){this.item.ONCLICK=null;this.LINK=this.LINK_MENU=this.WRAPPER.firstChild.firstChild.appendChild(BX.create("A",{attrs:{href:"javascript: void(0)"},events:{mouseover:BX.proxy(this.__msover,this),mouseout:BX.proxy(this.__msout,this),mousedown:BX.proxy(this.__msdown,this)},children:[e,i]}));this.LINK.appendChild(BX.create("SPAN",{props:{className:"bx-context-toolbar-single-button-arrow"}}))}if(this.bHasMenu){this.item.SUBMENU=new BX.CMenu({ATTACH_MODE:"bottom",ITEMS:this.item["MENU"],parent:this.LINK_MENU,parent_attach:this.WRAPPER.firstChild});this.item.OPENER=new BX.COpener({DIV:this.LINK_MENU,TYPE:"click",MENU:this.item.SUBMENU});BX.addCustomEvent(this.item.OPENER,"onOpenerMenuOpen",BX.proxy(this.__menu_open,this));BX.addCustomEvent(this.item.OPENER,"onOpenerMenuClose",BX.proxy(this.__menu_close,this))}if(this.bHasAction){BX.bind(this.LINK,"click",BX.delegate(this.__click,this))}};BX.CMenuOpenerItem.prototype.Get=function(){return this.DIV};BX.CMenuOpenerItem.prototype.__msover=function(){this.bx_hover=true;if(!this._menu_open)BX.addClass(this.LINK.parentNode.parentNode,"bx-context-toolbar-button-hover")};BX.CMenuOpenerItem.prototype.__msout=function(){this.bx_hover=false;if(!this._menu_open)BX.removeClass(this.LINK.parentNode.parentNode,"bx-context-toolbar-button-hover bx-context-toolbar-button-active")};BX.CMenuOpenerItem.prototype.__msover_text=function(){this.bx_hover=true;if(!this._menu_open)BX.addClass(this.LINK.parentNode.parentNode,"bx-context-toolbar-button-text-hover")};BX.CMenuOpenerItem.prototype.__msout_text=function(){this.bx_hover=false;if(!this._menu_open)BX.removeClass(this.LINK.parentNode.parentNode,"bx-context-toolbar-button-text-hover bx-context-toolbar-button-text-active")};BX.CMenuOpenerItem.prototype.__msover_arrow=function(){this.bx_hover=true;if(!this._menu_open)BX.addClass(this.LINK.parentNode.parentNode,"bx-context-toolbar-button-arrow-hover")};BX.CMenuOpenerItem.prototype.__msout_arrow=function(){this.bx_hover=false;if(!this._menu_open)BX.removeClass(this.LINK.parentNode.parentNode,"bx-context-toolbar-button-arrow-hover bx-context-toolbar-button-arrow-active")};BX.CMenuOpenerItem.prototype.__msdown=function(){this.bx_active=true;if(!this._menu_open)BX.addClass(this.LINK.parentNode.parentNode,"bx-context-toolbar-button-active")};BX.CMenuOpenerItem.prototype.__msdown_text=function(){this.bx_active=true;if(!this._menu_open)BX.addClass(this.LINK.parentNode.parentNode,"bx-context-toolbar-button-text-active")};BX.CMenuOpenerItem.prototype.__msdown_arrow=function(){this.bx_active=true;if(!this._menu_open)BX.addClass(this.LINK.parentNode.parentNode,"bx-context-toolbar-button-arrow-active")};BX.CMenuOpenerItem.prototype.__menu_close=function(){this._menu_open=false;this.bx_active=false;BX.removeClass(this.LINK.parentNode.parentNode,"bx-context-toolbar-button-active bx-context-toolbar-button-text-active bx-context-toolbar-button-arrow-active");if(!this.bx_hover){BX.removeClass(this.LINK.parentNode.parentNode,"bx-context-toolbar-button-hover bx-context-toolbar-button-text-hover bx-context-toolbar-button-arrow-hover");this.bx_hover=false}};BX.CMenuOpenerItem.prototype.__menu_open=function(){this._menu_open=true};BX.CMenuOpenerItem.prototype.__click=function(){BX.evalGlobal(this.item.ONCLICK)};BX.CPageOpener=function(t){BX.CPageOpener.superclass.constructor.apply(this,arguments);this.timeout=505;window.PAGE_EDIT_CONTROL=this};BX.extend(BX.CPageOpener,BX.CMenuOpener);BX.CPageOpener.prototype.checkPosition=function(){if(this==BX.proxy_context)return;this.correctPosition(BX.proxy_context)};BX.CPageOpener.prototype.correctPosition=function(t){if(this.bPosCorrected)return;var e;if(this.DIV.style.display=="none"){e=this.adjustToNodeGetPos();e.bottom=e.top+30;e.right=e.left+300}else{e=BX.pos(this.DIV)}var i=BX.pos(t.Get());if(this.__check_intersection(e,i)){this.DIV.style.display="none";BX.addCustomEvent(t,"onMenuOpenerHide",BX.proxy(this.restorePosition,this));this.bPosCorrected=true}};BX.CPageOpener.prototype.restorePosition=function(){if(BX.proxy_context&&BX.proxy_context.Get().style.display=="none"){this.bPosCorrected=false;if(this.PARAMS.parent.bx_over||this.PARAMS.pin)this.UnHide();BX.removeCustomEvent("onMenuOpenerHide",BX.proxy(this.restorePosition,this))}};BX.CPageOpener.prototype.UnHide=function(){if(!this.bPosCorrected)BX.CPageOpener.superclass.UnHide.apply(this,arguments)};BX.CPageOpener.prototype.Remove=function(){BX.admin.removeComponentBorder(this.PARAMS.parent);BX.userOptions.save("global","settings","page_edit_control_enable","N");this.DIV.style.display="none"};BX.CHintSimple=function(){BX.CHintSimple.superclass.constructor.apply(this,arguments)};BX.extend(BX.CHintSimple,BX.CHint);BX.CHintSimple.prototype.Init=function(){this.DIV=document.body.appendChild(BX.create("DIV",{props:{className:"bx-tooltip-simple"},style:{display:"none"},children:[this.CONTENT=BX.create("DIV")]}));BX.ZIndexManager.register(this.DIV);if(this.HINT_TITLE)this.CONTENT.appendChild(BX.create("B",{text:this.HINT_TITLE}));if(this.HINT)this.CONTENT_TEXT=this.CONTENT.appendChild(BX.create("DIV")).appendChild(BX.create("SPAN",{html:this.HINT}));if(this.PARAMS.preventHide){BX.bind(this.DIV,"mouseout",BX.proxy(this.Hide,this));BX.bind(this.DIV,"mouseover",BX.proxy(this.Show,this))}this.bInited=true};BX.adminInformer={itemsShow:3,Init:function(t){if(t)BX.adminInformer.itemsShow=t;var e=BX("admin-informer");if(e){document.body.appendChild(e);BX.ZIndexManager.register(e)}BX.addCustomEvent("onTopPanelCollapse",BX.proxy(BX.adminInformer.Close,BX.adminInformer))},Toggle:function(t){var e=BX("admin-informer");if(!e)return false;var i=BX.pos(t);e.style.top=parseInt(i.top)+parseInt(i.height)+7+"px";e.style.left=i.left+"px";if(!BX.hasClass(e,"adm-informer-active"))BX.adminInformer.Show(e);else BX.adminInformer.Hide(e);return false},Close:function(){BX.adminInformer.Hide(BX("admin-informer"))},OnInnerClick:function(t){var e=t.target||t.srcElement;if(e.nodeName.toLowerCase()!="a"||BX.hasClass(e,"adm-informer-footer")){return BX.PreventDefault(t)}return true},ToggleExtra:function(){var t=BX("adm-informer-footer");if(BX.hasClass(t,"adm-informer-footer-collapsed"))this.ShowAll();else this.HideExtra();return false},ShowAll:function(){var t=BX("admin-informer");for(var e=0;e<t.children.length;e++)if(BX.hasClass(t.children[e],"adm-informer-item")&&t.children[e].style.display=="none"){t.children[e].style.display="block"}var i=BX("adm-informer-footer");if(i.textContent!==undefined)i.textContent=BX.message("JSADM_AI_HIDE_EXTRA");else i.innerText=BX.message("JSADM_AI_HIDE_EXTRA");BX.removeClass(i,"adm-informer-footer-collapsed");return false},HideExtra:function(){var t=BX("admin-informer");var e=0;for(var i=BX.adminInformer.itemsShow+1;i<t.children.length;i++){if(BX.hasClass(t.children[i],"adm-informer-item")&&t.children[i].style.display=="block"){t.children[i].style.display="none";e++}}var s=BX("adm-informer-footer");var o=BX.message("JSADM_AI_ALL_NOTIF")+" ("+(BX.adminInformer.itemsShow+parseInt(e))+")";if(s.textContent!==undefined)s.textContent=o;else s.innerText=o;BX.addClass(s,"adm-informer-footer-collapsed");return false},Show:function(t){var e=BX("adm-header-notif-block");if(e)BX.addClass(e,"adm-header-notif-block-active");BX.onCustomEvent(t,"onBeforeAdminInformerShow");setTimeout(BX.proxy(function(){BX.bind(document,"click",BX.proxy(BX.adminInformer.Close,BX.adminInformer))},BX.adminInformer),0);BX.addClass(t,"adm-informer-active");BX.ZIndexManager.bringToFront(t);setTimeout(function(){BX.addClass(t,"adm-informer-animate")},0)},Hide:function(t){var e=BX("adm-header-notif-block");if(e)BX.removeClass(e,"adm-header-notif-block-active");BX.unbind(document,"click",BX.proxy(BX.adminInformer.Close,BX.adminInformer));BX.removeClass(t,"adm-informer-animate");if(this.IsAnimationSupported())setTimeout(function(){BX.removeClass(t,"adm-informer-active")},300);else BX.removeClass(t,"adm-informer-active");BX.onCustomEvent(t,"onAdminInformerHide")},IsAnimationSupported:function(){var t=document.body||document.documentElement;if(typeof t.style.transition=="string")return true;else if(typeof t.style.MozTransition=="string")return true;else if(typeof t.style.OTransition=="string")return true;else if(typeof t.style.WebkitTransition=="string")return true;else if(typeof t.style.msTransition=="string")return true;return false},SetItemHtml:function(t,e){var i=BX("adm-informer-item-html-"+t);if(!i)return false;i.innerHTML=e;return true},SetItemFooter:function(t,e){var i=BX("adm-informer-item-footer-"+t);if(!i)return false;i.innerHTML=e;if(e)i.style.display="block";else i.style.display="none";return true}}})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:46:"/bitrix/js/main/rating_like.js?164839769333339";s:6:"source";s:30:"/bitrix/js/main/rating_like.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
if (!BXRL)
{
	var BXRL = {};
	var BXRLW = null;
	var lastVoteRepo = {};
	var lastReactionRepo = {};
	var BXRLParams = {
		pathToUserProfile: null
	};
}

RatingLike = function(likeId, entityTypeId, entityId, available, userId, localize, template, pathToUserProfile, pathToAjax)
{
	var key = entityTypeId+'_'+entityId;

	this.enabled = true;
	this.likeId = likeId;
	this.entityTypeId = entityTypeId;
	this.entityId = entityId;
	this.available = (available == 'Y');
	this.userId = userId;
	this.localize = localize;
	this.template = template;
	this.pathToUserProfile = pathToUserProfile;
	this.pathToAjax = (
		BX.type.isNotEmptyString(pathToAjax)
			? pathToAjax
			: '/bitrix/components/bitrix/rating.vote/vote.ajax.php'
	);

	this.box = BX('bx-ilike-button-'+likeId);
	if (this.box === null)
	{
		this.enabled = false;
		return false;
	}

	this.button = BX.findChild(this.box, { className: 'bx-ilike-left-wrap' }, true, false);
	this.buttonText = BX.findChild(this.button, { className: 'bx-ilike-text' }, true, false);
	this.count = BX.findChild(this.box,  { tagName: 'span', className: 'bx-ilike-right-wrap' }, true, false);
	if (!this.count)
	{
		this.count = BX('bx-ilike-count-' + likeId);
	}
	this.countText = BX.findChild(this.count, { className: 'bx-ilike-right' }, true, false);
	this.topPanelContainer = BX('feed-post-emoji-top-panel-container-' + likeId);
	this.topPanel = BX('feed-post-emoji-top-panel-' + likeId);
	this.topUsersText = BX('bx-ilike-top-users-' + likeId);
	this.topUsersDataNode = BX('bx-ilike-top-users-data-' + likeId);
	this.userReactionNode = BX('bx-ilike-user-reaction-' + likeId);
	this.reactionsNode = BX('feed-post-emoji-icons-' + likeId);
	this.popup = null;
	this.popupId = null;
	this.popupTimeoutIdShow = null;
	this.popupTimeoutIdList = null;
	this.popupContent = BX.findChild(BX('bx-ilike-popup-cont-' + likeId), {tagName:'span', className:'bx-ilike-popup'}, true, false);
	this.popupContentPage = 1;
	this.popupTimeout = false;
	this.likeTimeout = false;
	this.mouseOverHandler = null;
	this.version = (BXRL.render && this.topPanel ? 2 : 1);
	this.mouseInShowPopupNode = {};
	this.listXHR = null;

	if (typeof lastVoteRepo[key] != 'undefined')
	{
		this.lastVote = lastVoteRepo[key];
		var ratingNode = (template == 'standart' ? this.button: this.count);
		if (this.lastVote == 'plus')
		{
			BX.addClass(ratingNode, 'bx-you-like');
		}
		else
		{
			BX.removeClass(ratingNode, 'bx-you-like');
		}
	}
	else
	{
		this.lastVote = BX.hasClass(template == 'standart'? this.button: this.count, 'bx-you-like')? 'plus': 'cancel';
		lastVoteRepo[key] = this.lastVote;
	}

	if (typeof lastReactionRepo[key] != 'undefined')
	{
		this.lastReaction = lastReactionRepo[key];
		this.count.setAttribute('data-myreaction', this.lastReaction);
	}
	else
	{
		var lastReaction = this.count.getAttribute('data-myreaction');
		this.lastReaction = (BX.type.isNotEmptyString(lastReaction) ? lastReaction : 'like');
		lastReactionRepo[key] = this.lastReaction;
	}

	if (
		this.topPanelContainer
		&& typeof BXRL.manager != 'undefined'
	)
	{
		BXRL.manager.addEntity(key, this);
	}
};

RatingLike.Draw = function(likeId, params)
{
	var i = likeId;

	var element = BXRL[i];
	element.countText.innerHTML = parseInt(params.TOTAL_POSITIVE_VOTES);

	if (
		typeof params.TYPE != 'undefined'
		&& typeof params.USER_ID != 'undefined'
		&& parseInt(params.USER_ID) > 0
		&& typeof params.USER_DATA != 'undefined'
		&& typeof params.USER_DATA.WEIGHT != 'undefined'
	)
	{
		var userWeight = parseFloat(params.USER_DATA.WEIGHT);

		var usersData = (
			BXRL[i].topUsersDataNode
				? JSON.parse(BXRL[i].topUsersDataNode.getAttribute('data-users'))
				: false
		);

		if (
			params.TYPE != 'CHANGE'
			&& BX.type.isPlainObject(usersData)
		)
		{
			usersData.TOP = Object.values(usersData.TOP);
			var recalcNeeded = (usersData.TOP.length < 2);

			for(var k in usersData.TOP)
			{
				if (recalcNeeded)
				{
					break;
				}

				if (!usersData.TOP.hasOwnProperty(k))
				{
					continue;
				}

				if (
					(
						params.TYPE == 'ADD'
						&& userWeight > usersData.TOP[k].WEIGHT
					)
					|| (
						params.TYPE == 'CANCEL'
						&& params.USER_ID == usersData.TOP[k].ID
					)
				)
				{
					recalcNeeded = true;
				}
			}

			if (recalcNeeded)
			{
				if (
					params.TYPE == 'ADD'
					&& params.USER_ID != BX.message('USER_ID')
				)
				{
					if (!usersData.TOP.find(function(a) {
						return a.ID == params.USER_ID
					}))
					{
						usersData.TOP.push({
							ID: parseInt(params.USER_ID),
							NAME_FORMATTED: params.USER_DATA.NAME_FORMATTED,
							WEIGHT: parseFloat(params.USER_DATA.WEIGHT)
						});
					}
				}
				else if (params.TYPE == 'CANCEL')
				{
					usersData.TOP = usersData.TOP.filter(function(a) {
						return a.ID != params.USER_ID
					});
				}

				usersData.TOP.sort(function(a, b) {
					if (a.WEIGHT == b.WEIGHT) { return 0; } return (a.WEIGHT > b.WEIGHT) ? -1 : 1;
				});

				if (
					usersData.TOP.length > 2
					&& params.TYPE == 'ADD'
				)
				{
					usersData.TOP.pop();
					usersData.MORE++;
				}
			}
			else
			{
				if (params.TYPE == 'ADD')
				{
					usersData.MORE = (
						typeof usersData.MORE != 'undefined'
							? parseInt(usersData.MORE) + 1
							: 1
					);
				}
				else if (params.TYPE == 'CANCEL')
				{
					usersData.MORE = (
						typeof usersData.MORE != 'undefined'
						&& parseInt(usersData.MORE) > 0
							? parseInt(usersData.MORE) - 1
							: 0
					);
				}
			}

			BXRL[i].topUsersDataNode.setAttribute('data-users', JSON.stringify(usersData));

			if (BXRL[i].topUsersText)
			{
				BXRL[i].topUsersText.innerHTML = BXRL.render.getTopUsersText({
					you: (
						params.USER_ID == BX.message('USER_ID')
							? params.TYPE != 'CANCEL'
							: BX.hasClass(BXRL[i].count, 'bx-you-like')
					),
					top: usersData.TOP,
					more: usersData.MORE
				});
			}
		}

		if (
			BX.type.isNotEmptyString(params.REACTION)
			&& BX.type.isNotEmptyString(params.REACTION_OLD)
			&& params.TYPE == 'CHANGE'
		)
		{
			BXRL.render.setReaction({
				likeId: i,
				rating: BXRL[i],
				action: 'change',
				userReaction: params.REACTION,
				userReactionOld: params.REACTION_OLD,
				totalCount: params.TOTAL_POSITIVE_VOTES,
				userId: params.USER_ID
			});
		}
		else if (
			BX.type.isNotEmptyString(params.REACTION)
			&& BX.util.in_array(params.TYPE, ['ADD', 'CANCEL'])
		)
		{
			BXRL.render.setReaction({
				likeId: i,
				rating: BXRL[i],
				userReaction: params.REACTION,
				action: (params.TYPE == 'ADD' ? 'add' : 'cancel'),
				totalCount: params.TOTAL_POSITIVE_VOTES,
				userId: params.USER_ID
			});
		}
	}

	if (BXRL[i].topPanel)
	{
		BXRL[i].topPanel.setAttribute('data-popup', 'N');
	}

	if (!BXRL[i].userReactionNode)
	{
		element.count.insertBefore(
			BX.create("span", { props : { className : "bx-ilike-plus-one" }, style: {width: (element.countText.clientWidth-8)+'px', height: (element.countText.clientHeight-8)+'px'}, html: (params.TYPE == 'ADD'? '+1': '-1')})
			, element.count.firstChild);
	}

	if (element.popup)
	{
		element.popup.close();
		element.popupContentPage = 1;
	}
};

RatingLike.LiveUpdate = function(params)
{
	if (params.USER_ID == BX.message('USER_ID'))
	{
		return false;
	}

	for(var i in BXRL)
	{
		if (!BXRL.hasOwnProperty(i))
		{
			continue;
		}

		if (
			BXRL[i].entityTypeId == params.ENTITY_TYPE_ID
			&& BXRL[i].entityId == params.ENTITY_ID
		)
		{
			RatingLike.Draw(i, params);
		}
	}

	if (typeof BXRL.manager != 'undefined')
	{
		BXRL.manager.live(params);
	}
};

RatingLike.Set = function(likeId, entityTypeId, entityId, available, userId, localize, template, pathToUserProfile, pathToAjax, mobile)
{
	mobile = !!mobile;

	if (template === undefined)
		template = 'standart';

	if (BXRLParams.pathToUserProfile)
	{
		pathToUserProfile = BXRLParams.pathToUserProfile;
	}

	if (!BXRL[likeId] || BXRL[likeId].tryToSet <= 5)
	{
		var tryToSend = BXRL[likeId] && BXRL[likeId].tryToSet? BXRL[likeId].tryToSet: 1;
		BXRL[likeId] = new RatingLike(likeId, entityTypeId, entityId, available, userId, localize, template, pathToUserProfile, pathToAjax);
		if (BXRL[likeId].enabled)
		{
			RatingLike.Init(likeId, {
				mobile: mobile
			});
		}
		else
		{
			setTimeout(function(){
				BXRL[likeId].tryToSet = tryToSend+1;
				RatingLike.Set(likeId, entityTypeId, entityId, available, userId, localize, template, pathToUserProfile, pathToAjax, mobile);
			}, 500);
		}
	}
};

RatingLike.ClickVote = function(likeId, userReaction, forceAdd)
{
	var
		cont = null,
		likeNode = null,
		likeThumbNode = null;

	if (typeof userReaction == 'undefined')
	{
		userReaction = 'like';
	}

	if (
		BXRL[likeId].version == 2
		&& BXRL[likeId].userReactionNode
	)
	{
		BXRL.render.hideReactionsPopup({
			likeId: likeId
		});
		BXRL.render.blockReactionsPopup();
		BX.unbind(document, 'mousemove', BXRL.render.reactionsPopupMouseOutHandler);
	}

	clearTimeout(BXRL[likeId].likeTimeout);

	var active = (
		BX.hasClass(
			(BXRL[likeId].template == 'standart' ? this : BXRL[likeId].count),
			'bx-you-like'
		)
	);

	forceAdd = !!forceAdd;
	var
		change = false,
		userReactionOld = false;

	if (active && !forceAdd)
	{
		userReaction = (
			BXRL[likeId].version == 2
				? BXRL.render.getUserReaction({
					userReactionNode: BXRL[likeId].userReactionNode
				})
				: false
		);

		BXRL[likeId].buttonText.innerHTML = BXRL[likeId].localize['LIKE_N'];
		BXRL[likeId].countText.innerHTML = parseInt(BXRL[likeId].countText.innerHTML)-1;
		BX.removeClass(BXRL[likeId].template == 'standart'? this: BXRL[likeId].count, 'bx-you-like');
		BX.removeClass(BXRL[likeId].button, 'bx-you-like-button');
		if (userReaction)
		{
			BX.removeClass(BXRL[likeId].button, 'bx-you-like-button-' + userReaction);
		}

		BXRL[likeId].likeTimeout = setTimeout(function() {
			if (BXRL[likeId].lastVote != 'cancel')
			{
				RatingLike.Vote(likeId, 'cancel', userReaction);
			}
		}, 1000);
	}
	else if (active && forceAdd)
	{
		change = true;
		userReactionOld = (
			BXRL[likeId].version == 2
				? BXRL.render.getUserReaction({
					userReactionNode: BXRL[likeId].userReactionNode
				})
				: false
		);

		if (userReaction != userReactionOld)
		{
			if (userReactionOld)
			{
				BX.removeClass(BXRL[likeId].button, 'bx-you-like-button-' + userReactionOld);
			}
			BX.addClass(BXRL[likeId].button, 'bx-you-like-button-' + userReaction);

			BXRL[likeId].likeTimeout = setTimeout(function(){
				RatingLike.Vote(likeId, 'change', userReaction, userReactionOld);
			}, 1000);
		}
	}
	else if (!active)
	{
		BXRL[likeId].buttonText.innerHTML = BXRL[likeId].localize['LIKE_Y'];
		BXRL[likeId].countText.innerHTML = parseInt(BXRL[likeId].countText.innerHTML) + 1;
		BX.addClass(BXRL[likeId].template == 'standart'? this: BXRL[likeId].count, 'bx-you-like');

		BX.addClass(BXRL[likeId].button, 'bx-you-like-button');
		BX.addClass(BXRL[likeId].button, 'bx-you-like-button-' + userReaction);

		BXRL[likeId].likeTimeout = setTimeout(function(){
			if (BXRL[likeId].lastVote != 'plus')
			{
				RatingLike.Vote(likeId, 'plus', userReaction);
			}
			else if (userReaction != BXRL[likeId].lastReaction) // http://jabber.bx/view.php?id=99339
			{
				RatingLike.Vote(likeId, 'change', userReaction, BXRL[likeId].lastReaction);
			}
		}, 1000);
	}

	if (BXRL[likeId].version == 2)
	{
		if (change)
		{
			BXRL.render.setReaction({
				likeId: likeId,
				rating: BXRL[likeId],
				action: 'change',
				userReaction: userReaction,
				userReactionOld: userReactionOld,
				totalCount: parseInt(BXRL[likeId].countText.innerHTML)
			});
		}
		else
		{
			BXRL.render.setReaction({
				likeId: likeId,
				rating: BXRL[likeId],
				action: (active ? 'cancel' : 'add'),
				userReaction: userReaction,
				totalCount: parseInt(BXRL[likeId].countText.innerHTML)
			});
		}
	}

	if (
		!change
		&& BXRL[likeId].version == 2
	)
	{
		var dataUsers = (
			BXRL[likeId].topUsersDataNode
				? JSON.parse(BXRL[likeId].topUsersDataNode.getAttribute('data-users'))
				: false
		);

		if (dataUsers)
		{
			dataUsers.TOP = Object.values(dataUsers.TOP);

			BXRL[likeId].topUsersText.innerHTML = BXRL.render.getTopUsersText({
				you: !active,
				top: dataUsers.TOP,
				more: dataUsers.MORE
			});
		}
	}

	if (
		BXRL[likeId].template == 'light'
		&& !BXRL[likeId].userReactionNode
	)
	{
		cont = BXRL[likeId].box;
		likeNode = cont.cloneNode(true);
		likeNode.id = 'like_anim'; // to not dublicate original id

		var type = 'normal';
		if (BX.findParent(cont, { 'className': 'feed-com-informers-bottom' }))
		{
			type = 'comment';
		}
		else if (BX.findParent(cont, { 'className': 'feed-post-informers' }))
		{
			type = 'post';
		}

		BX.removeClass(likeNode, 'bx-ilike-button-hover');
		BX.addClass(likeNode, 'bx-like-anim');

		BX.adjust(cont.parentNode, { style: { position: 'relative' } });

		BX.adjust(likeNode, {
			style: {
				position: 'absolute',
				whiteSpace: 'nowrap',
				top: (type == 'post' ? '1px' : (type == 'comment' ? '0' : ''))
			}
		});

		BX.adjust(cont, { style: { visibility: 'hidden' } });
		BX.prepend(likeNode, cont.parentNode);

		new BX.easing({
			duration: 140,
			start: { scale: 100 },
			finish: { scale: (type == 'comment' ? 110 : 115) },
			transition : BX.easing.transitions.quad,
			step: function(state) {
				likeNode.style.transform = "scale(" + state.scale / 100 + ")";
			},
			complete: function() {
				likeThumbNode = BX.create('SPAN', {
					props: {
						className: (active ? 'bx-ilike-icon' : 'bx-ilike-icon bx-ilike-icon-orange')
					}
				});

				BX.adjust(likeThumbNode, {
					style: {
						position: 'absolute',
						whiteSpace: 'nowrap'
					}
				});

				BX.prepend(likeThumbNode, cont.parentNode);

				new BX.easing({
					duration: 140,
					start: { scale: (type == 'comment' ? 110 : 115) },
					finish: { scale: 100 },
					transition : BX.easing.transitions.quad,
					step: function(state) {
						likeNode.style.transform = "scale(" + state.scale / 100 + ")";
					},
					complete: function() {
					}
				}).animate();

				var propsStart = { opacity: 100, scale: (type == 'comment' ? 110 : 115), top: 0 };
				var propsFinish = { opacity: 0, scale: 200, top: (type == 'comment' ? -3 : -2) };

				if (type != 'comment')
				{
					propsStart.left = -5;
					propsFinish.left = -13;
				}

				new BX.easing({
					duration: 200,
					start: propsStart,
					finish: propsFinish,
					transition : BX.easing.transitions.linear,
					step: function(state) {
						likeThumbNode.style.transform = "scale(" + state.scale / 100 + ")";
						likeThumbNode.style.opacity = state.opacity / 100;
						if (type != 'comment')
						{
							likeThumbNode.style.left = state.left + 'px';
						}
						likeThumbNode.style.top = state.top + 'px';
					},
					complete: function() {
						likeNode.parentNode.removeChild(likeNode);
						likeThumbNode.parentNode.removeChild(likeThumbNode);

						BX.adjust(cont.parentNode, { style: { position: 'static' } });
						BX.adjust(cont, { style: { visibility: 'visible' } });
					}
				}).animate();

			}
		}).animate();
	}

	BX.removeClass(this.box, 'bx-ilike-button-hover');
};

RatingLike.Init = function(likeId, params)
{
	if (typeof params == 'undefined')
	{
		params = {};
	}

	if (typeof BXRL.manager != 'undefined')
	{
		BXRL.manager.init(params);
	}

	// like/unlike button
	if (BXRL[likeId].available)
	{
		var eventNode = (
			BXRL[likeId].template == 'standart'
				? BXRL[likeId].button
				: BXRL[likeId].buttonText
		);

		if (
			BXRL[likeId].version >= 2
			&& BXRL.manager.mobile
		)
		{
			BX.bind(
				eventNode,
				'touchstart',
				BX.delegate(function(e) {
					BXRL.manager.startScrollTop = (
						(
							document.documentElement
							&& document.documentElement.scrollTop
						)
						|| document.body.scrollTop
					);
				})
			);
		}

		var eventName = (
			typeof BXRL.manager != 'undefined'
			&& BXRL.manager.mobile
				? 'touchend'
				: 'click'
		);

		BX.bind(
			eventNode,
			eventName,
			BX.delegate(function(e) {

				if (
					BXRL[likeId].version >= 2
					&& BXRL.manager.mobile
					&& BXRL.render.blockTouchEndByScroll
				)
				{
					BXRL.render.blockTouchEndByScroll = false;
					return;
				}

				if (
					BXRL[likeId].version < 2
					|| !BXRL.manager.mobile
					|| !BXRL.render.reactionsPopupLikeId
				)
				{
					if (
						BXRL[likeId].version >= 2
						&& BXRL.manager.mobile
					)
					{
						var currentScrollTop = (
							(
								document.documentElement
								&& document.documentElement.scrollTop
							)
							|| document.body.scrollTop
						);

						if (Math.abs(currentScrollTop - BXRL.manager.startScrollTop) > 2)
						{
							return;
						}
					}

					RatingLike.ClickVote(likeId);
				}

				if (BXRL[likeId].version == 2)
				{
					BXRL.render.afterClick({
						likeId: likeId
					});
				}

				e.preventDefault();
			}, this)
		);

		if (
			typeof BXRL.manager == 'undefined'
			|| !BXRL.manager.mobile
		)
		{
			// Hover/unHover like-button
			BX.bind(BXRL[likeId].box, 'mouseover', function() {BX.addClass(this, 'bx-ilike-button-hover')});
			BX.bind(BXRL[likeId].box, 'mouseout', function() {BX.removeClass(this, 'bx-ilike-button-hover')});
		}
		else
		{
			BXRL[likeId].pathToAjax = BX.message('SITE_DIR') + 'mobile/ajax.php?mobile_action=like';
			BX.bind(BXRL[likeId].topPanel, 'click', function(e) {
				BXRL.render.openMobileReactionsPage({
					entityTypeId: BXRL[likeId].entityTypeId,
					entityId: BXRL[likeId].entityId
				});
				e.stopPropagation();
			});
		}
	}
	else if (BXRL[likeId].buttonText != undefined)
	{
		BXRL[likeId].buttonText.innerHTML = BXRL[likeId].localize['LIKE_D'];
		BXRL[likeId].buttonText.classList.add('bx-ilike-text-unavailable');
	}
	// get like-user-list

	var clickShowPopupNode = (
		BXRL[likeId].topUsersText
			? BXRL[likeId].topUsersText
			: BXRL[likeId].count
	);

	if (
		typeof BXRL.manager == 'undefined'
		|| !BXRL.manager.mobile
	)
	{
		BX.bind(clickShowPopupNode, 'mouseenter', function(e)
		{
			RatingLike.onResultMouseEnter({
				likeId: likeId,
				event: e,
				nodeId: e.currentTarget.id
			});
		});

		BX.bind(clickShowPopupNode, 'mouseleave', BX.proxy(function()
		{
			RatingLike.onResultMouseLeave({
				likeId: likeId
			});
		}, { likeId: likeId }));
	}


	if (
		typeof BXRL.manager == 'undefined'
		|| !BXRL.manager.mobile
	)
	{
		BX.bind(clickShowPopupNode, 'click' , function(e)
		{
			RatingLike.onResultClick({
				likeId: likeId,
				event: e,
				nodeId: e.currentTarget.id
			});
		});
	}

	if (
		BXRL[likeId].version == 2
		&& BXRL[likeId].available
		&& BXRL[likeId].userReactionNode
	)
	{
		BXRL.render.bindReactionsPopup({
			likeId: likeId
		});
	}
};

RatingLike.onResultClick = function(params)
{
	var
		likeId = (BX.type.isNotEmptyString(params.likeId) ? params.likeId : false),
		clickEvent = (typeof params.event != 'undefined' ? params.event : null),
		reaction = (BX.type.isNotEmptyString(params.reaction) ? params.reaction : '');

	if (BXRL[likeId].resultPopupAnimation)
	{
		return;
	}

	if (
		BXRL[likeId].popup
		&& BXRL[likeId].popup.isShown()
	)
	{
		BXRL[likeId].popup.close();
	}
	else
	{
		clearTimeout(BXRL[likeId].popupTimeoutIdList);
		clearTimeout(BXRL[likeId].popupTimeoutIdShow);

		if (
			BXRL[likeId].popupContentPage == 1
			&& (
				clickEvent.currentTarget.getAttribute('data-popup') != 'Y'
				|| BXRL[likeId].popupCurrentReaction != reaction
			)
		)
		{
			RatingLike.List(likeId, 1, reaction, true);
		}
		RatingLike.OpenWindow(
			likeId,
			(clickEvent.currentTarget == BXRL[likeId].count ? null : clickEvent),
			clickEvent.currentTarget,
			clickEvent.currentTarget.id
		);
	}
};

RatingLike.onResultMouseEnter = function(params)
{
	var
		likeId = (BX.type.isNotEmptyString(params.likeId) ? params.likeId : false),
		mouseEnterEvent = (typeof params.event != 'undefined' ? params.event : null),
		reaction = (BX.type.isNotEmptyString(params.reaction) ? params.reaction : ''),
		nodeId = (mouseEnterEvent && BX.type.isNotEmptyString(mouseEnterEvent.currentTarget.id) ? mouseEnterEvent.currentTarget.id : '');

	BXRL[likeId].mouseInShowPopupNode[reaction] = true;

	clearTimeout(BXRL[likeId].popupTimeoutIdList);
	clearTimeout(BXRL[likeId].popupTimeoutIdShow);

	BXRL[likeId].popupTimeoutIdList = setTimeout(BX.proxy(function() {

		if (BXRLW == this.likeId)
		{
			return false;
		}

		if (
			BXRL[this.likeId].popupContentPage == 1
			&& this.target.getAttribute('data-popup') != 'Y'
		)
		{
			RatingLike.List(this.likeId, 1, this.reaction, true);
		}

		BXRL[this.likeId].popupTimeoutIdShow = setTimeout(BX.proxy(function() {

			BXRL[this._likeId].resultPopupAnimation = true;

			var _likeId = this._likeId;
			setTimeout(function() {
				BXRL[_likeId].resultPopupAnimation = false;
			}, 500);

			if (BXRL[this._likeId].mouseInShowPopupNode[this._reaction])
			{
				RatingLike.OpenWindow(
					this._likeId,
					null,
					this._target,
					this._nodeId
				);
			}
		}, {
			_likeId: this.likeId,
			_reaction: this.reaction,
			_target: this.target,
			_nodeId: this.nodeId
		}), 100);
	}, {
		likeId: likeId,
		target: mouseEnterEvent.currentTarget,
		reaction: reaction,
		nodeId: nodeId
	}), 300);
};

RatingLike.onResultMouseLeave = function(params) {

	var
		likeId = (BX.type.isNotEmptyString(params.likeId) ? params.likeId : false),
		reaction = (BX.type.isNotEmptyString(params.reaction) ? params.reaction : '');

	BXRL[likeId].mouseInShowPopupNode[reaction] = false;
	BXRL[likeId].resultPopupAnimation = false;
};

RatingLike.OpenWindow = function(likeId, clickEvent, target, targetId)
{
	if (parseInt(BXRL[likeId].countText.innerHTML) == 0)
	{
		return;
	}

	var bindNode = (
		BXRL[likeId].template == 'standart'
			? BXRL[likeId].count
			: (
				BXRL[likeId].version == 2
					? (
						BX(target)
						? BX(target)
						: (BX.type.isNotEmptyString(targetId) && BX(targetId) ? BX(targetId): null)
					)
					: BXRL[likeId].box
			)
	);

	if (!BX(bindNode))
	{
		return;
	}

	if (BXRL[likeId].popup == null)
	{
		var globalZIndex = RatingLike.getGlobalIndex(BX(bindNode));
		BXRL[likeId].popup = new BX.PopupWindow('ilike-popup-'+likeId, bindNode, {
			lightShadow : true,
			offsetTop: 0,
			offsetLeft: (
				typeof clickEvent != 'undefined'
				&& clickEvent != null
				&& typeof clickEvent.offsetX != 'undefined'
					? (clickEvent.offsetX - 100)
					: (BXRL[likeId].version == 2 ? -30 : 5)
			),
			autoHide: true,
			closeByEsc: true,
			zIndexAbsolute: (globalZIndex > 1000 ? globalZIndex + 1 : 1000),
			bindOptions: { position: "top" },
			animation: "fading-slide",
			events : {
				onPopupClose : function() { BXRLW = null; },
				onPopupDestroy : function() {  }
			},
			content : BX('bx-ilike-popup-cont-'+likeId),
			className: (BXRL[likeId].topPanel ? 'bx-ilike-wrap-block-react-wrap' : '') + (typeof BXRL.manager != 'undefined' && BXRL.manager.mobile ? ' bx-ilike-mobile-wrap' : '')
		});

		if (
			!BXRL[likeId].topPanel
			&& (
				typeof BXRL.manager == 'undefined'
				|| !BXRL.manager.mobile
			)
		)
		{
			BXRL[likeId].popup.setAngle({});

			BX.bind(BX('ilike-popup-'+likeId), 'mouseout' , function() {
				clearTimeout(BXRL[likeId].popupTimeout);
				BXRL[likeId].popupTimeout = setTimeout(function(){
					BXRL[likeId].popup.close();
				}, 1000);
			});

			BX.bind(BX('ilike-popup-'+likeId), 'mouseover' , function() {
				clearTimeout(BXRL[likeId].popupTimeout);
			});
		}
	}
	else
	{
		if (
			typeof clickEvent != 'undefined'
			&& clickEvent != null
			&& typeof clickEvent.offsetX != 'undefined'
		)
		{
			BXRL[likeId].popup.offsetLeft = (clickEvent.offsetX - 100);
		}

		if (BX(bindNode))
		{
			BXRL[likeId].popup.setBindElement(bindNode);
		}
	}


	if (
		BXRLW != null
		&& BXRLW != likeId
	)
	{
		BXRL[BXRLW].popup.close();
	}

	BXRLW = likeId;

	BXRL[likeId].popup.show();

	if (
		typeof BX.SidePanel != 'undefined'
		&& BX.SidePanel.Instance.getTopSlider()
	)
	{
		BX.addCustomEvent(
			BX.SidePanel.Instance.getTopSlider().getWindow(),
			"SidePanel.Slider:onClose",
			function removeOnCloseHandler()
			{
				BX.removeCustomEvent(BX.SidePanel.Instance.getTopSlider().getWindow(), "SidePanel.Slider:onClose", removeOnCloseHandler);
				if (typeof BXRL[BXRLW] != 'undefined')
				{
					BXRL[BXRLW].popup.close();
				}
			}
		);
	}

	RatingLike.AdjustWindow(likeId);
};

RatingLike.getGlobalIndex = function(element)
{
	var index = 0,
		propertyValue = "";

	do
	{
		propertyValue = BX.style(element, "z-index");
		if (propertyValue !== "auto")
		{
			index = BX.type.stringToInt(propertyValue);
		}
		element = element.offsetParent;
	}
	while (
		element && element.tagName !== "BODY"
	);

	return index;
};

RatingLike.Vote = function(likeId, voteAction, voteReaction, voteReactionOld)
{
	if (!BX.type.isNotEmptyString(voteReaction))
	{
		voteReaction = 'like';
	}

	var BMAjaxWrapper = null;

	if (
		typeof BXRL.manager != 'undefined'
		&& BXRL.manager.mobile
	)
	{
		BMAjaxWrapper = new MobileAjaxWrapper;
	}

	var
		f = (BMAjaxWrapper ? BX.proxy(BMAjaxWrapper.Wrap, BMAjaxWrapper) : BX.ajax),
		callbackSuccessName = (BMAjaxWrapper ? 'callback' : 'onsuccess'),
		callbackFailureName = (BMAjaxWrapper ? 'callback_failure' : 'onfailure');

	var actionUrl = BXRL[likeId].pathToAjax;
	actionUrl = BX.util.add_url_param(actionUrl, {
		b24statAction: 'addLike'
	});

	if (
		BXRL[likeId].version >= 2
		&& BXRL.manager.mobile
	)
	{
		actionUrl = BX.util.add_url_param(actionUrl, {
			b24statContext: 'mobile'
		});
	}

	var ajaxProperties = {
		url: actionUrl,
		method: 'POST',
		dataType: 'json',
		type: 'json',
		data: {
			RATING_VOTE : 'Y',
			RATING_VOTE_TYPE_ID : BXRL[likeId].entityTypeId,
			RATING_VOTE_ENTITY_ID : BXRL[likeId].entityId,
			RATING_VOTE_ACTION : voteAction,
			RATING_VOTE_REACTION : voteReaction,
			sessid: BX.bitrix_sessid()
		}
	};

	ajaxProperties[callbackSuccessName] = function(data) {
		BXRL[likeId].lastVote = data.action;
		BXRL[likeId].lastReaction = voteReaction;

		lastVoteRepo[BXRL[likeId].entityTypeId + '_' + BXRL[likeId].entityId] = data.action;
		lastReactionRepo[BXRL[likeId].entityTypeId + '_' + BXRL[likeId].entityId] = data.voteReaction;

		BXRL[likeId].countText.innerHTML = data.items_all;
		BXRL[likeId].popupContentPage = 1;

		BXRL[likeId].popupContent.innerHTML = '';
		spanTag0 = document.createElement("span");
		spanTag0.className = "bx-ilike-wait";
		BXRL[likeId].popupContent.appendChild(spanTag0);

		if (BXRL[likeId].topPanel)
		{
			BXRL[likeId].topPanel.setAttribute('data-popup', 'N');
		}

		RatingLike.AdjustWindow(likeId);

		if(
			BX('ilike-popup-'+likeId)
			&& BX('ilike-popup-'+likeId).style.display == "block"
		)
		{
			RatingLike.List(likeId, null, '', true);
		}

		if (
			BXRL[likeId].version >= 2
			&& BXRL.manager.mobile
		)
		{
			BXMobileApp.onCustomEvent('onRatingLike', {
				action: data.action,
				ratingId: likeId,
				entityTypeId : BXRL[likeId].entityTypeId,
				entityId: BXRL[likeId].entityId,
				voteAction: voteAction,
				voteReaction: voteReaction,
				voteReactionOld: voteReactionOld,
				userId: BX.message('USER_ID'),
				userData: (typeof data.user_data != 'undefined' ? data.user_data : null),
				itemsAll: data.items_all
			}, true);
		}
	};

	ajaxProperties[callbackFailureName] = function(data) {

		var dataUsers = ((BXRL[likeId].topUsersDataNode)
				? JSON.parse(BXRL[likeId].topUsersDataNode.getAttribute('data-users'))
				: false
		);

		if (BXRL[likeId].version == 2)
		{
			if (voteAction == 'change')
			{
				BXRL.render.setReaction({
					likeId: likeId,
					rating: BXRL[likeId],
					action: voteAction,
					userReaction: voteReaction,
					userReactionOld: voteReactionOld,
					totalCount: parseInt(BXRL[likeId].countText.innerHTML)
				});
			}
			else
			{
				BXRL.render.setReaction({
					likeId: likeId,
					rating: BXRL[likeId],
					action: (voteAction == 'cancel' ? 'add' : 'cancel'),
					userReaction: voteReaction,
					totalCount: (
						voteAction == 'cancel'
							? parseInt(BXRL[likeId].countText.innerHTML) + 1
							: parseInt(BXRL[likeId].countText.innerHTML) - 1
					)
				});
			}

			if (BXRL[likeId].buttonText)
			{
				if (voteAction == 'add')
				{
					BXRL[likeId].buttonText.innerHTML = BX.message('RATING_LIKE_EMOTION_LIKE_CALC');
				}
				else if (voteAction == 'change')
				{
					BXRL[likeId].buttonText.innerHTML = BX.message('RATING_LIKE_EMOTION_' + voteReactionOld.toUpperCase() + '_CALC');
				}
				else
				{
					BXRL[likeId].buttonText.innerHTML = BX.message('RATING_LIKE_EMOTION_' + voteReaction.toUpperCase() + '_CALC');
				}
			}
		}

		if (
			dataUsers
			&& voteAction != 'change'
			&& BXRL[likeId].version == 2
		)
		{
			dataUsers.TOP = Object.values(dataUsers.TOP);

			BXRL[likeId].topUsersText.innerHTML = BXRL.render.getTopUsersText({
				you: (voteAction == 'cancel'), // negative
				top: dataUsers.TOP,
				more: dataUsers.MORE
			});
		}
	};

	f(ajaxProperties);

	return false;
};

RatingLike.List = function(likeId, page, reaction, clear)
{
	if (parseInt(BXRL[likeId].countText.innerHTML) == 0)
	{
		return false;
	}

	reaction = (BX.type.isNotEmptyString(reaction) ? reaction : '');

	if (page == null)
	{
		page = (
			BXRL[likeId].version == 2
				? (typeof BXRL.render.popupPagesList[reaction] != 'undefined' ? BXRL.render.popupPagesList[reaction] : 1)
				: BXRL[likeId].popupContentPage
		);
	}

	if (
		clear
		&& page == 1
		&& BXRL[likeId].version == 2
	)
	{
		BXRL.render.clearPopupContent({
			likeId: likeId
		});
	}

	if (BXRL[likeId].listXHR)
	{
		BXRL[likeId].listXHR.abort();
	}

	BXRL[likeId].listXHR = BX.ajax({
		url: BXRL[likeId].pathToAjax,
		method: 'POST',
		dataType: 'json',
		data: {
			RATING_VOTE_LIST : 'Y',
			RATING_VOTE_TYPE_ID : BXRL[likeId].entityTypeId,
			RATING_VOTE_ENTITY_ID : BXRL[likeId].entityId,
			RATING_VOTE_LIST_PAGE : page,
			RATING_VOTE_REACTION : (reaction == 'all' ? '' : reaction),
			PATH_TO_USER_PROFILE : BXRL[likeId].pathToUserProfile,
			sessid: BX.bitrix_sessid()
		},
		onsuccess: function(data)
		{
			if (!data)
			{
				return false;
			}

			BXRL[likeId].countText.innerHTML = data.items_all;

			if (parseInt(data.items_page) == 0)
			{
				return false;
			}

			if (BXRL[likeId].version == 2)
			{
				BXRL.render.buildPopupContent({
					likeId: likeId,
					reaction: reaction,
					rating: BXRL[likeId],
					page: page,
					data: data,
					clear: clear
				});
				BXRL[likeId].topPanel.setAttribute('data-popup', 'Y');
			}
			else
			{
				if (page == 1)
				{
					BXRL[likeId].popupContent.innerHTML = '';
					spanTag0 = document.createElement("span");
					spanTag0.className = "bx-ilike-bottom_scroll";
					BXRL[likeId].popupContent.appendChild(spanTag0);
				}
				BXRL[likeId].popupContentPage += 1;

				var avatarNode = null;

				for (var i = 0; i < data.items.length; i++)
				{
					if (data.items[i]['PHOTO_SRC'].length > 0)
					{
						avatarNode = BX.create("IMG", {
							attrs: {src: data.items[i]['PHOTO_SRC']},
							props: {className: "bx-ilike-popup-avatar-img"}
						});
					}
					else
					{
						avatarNode = BX.create("IMG", {
							attrs: {src: '/bitrix/images/main/blank.gif'},
							props: {className: "bx-ilike-popup-avatar-img bx-ilike-popup-avatar-img-default"}
						});
					}

					BXRL[likeId].popupContent.appendChild(
						BX.create("A", {
							attrs: {
								href: data.items[i]['URL'],
								target: '_blank'
							},
							props: {
								className: "bx-ilike-popup-img" + (!!data.items[i]['USER_TYPE'] ? " bx-ilike-popup-img-" + data.items[i]['USER_TYPE'] : "")
							},
							children: [
								BX.create("SPAN", {
									props: {
										className: "bx-ilike-popup-avatar-new"
									},
									children: [
										avatarNode,
										BX.create("SPAN", {
											props: {className: "bx-ilike-popup-avatar-status-icon"}
										})
									]
								}),
								BX.create("SPAN", {
									props: {
										className: "bx-ilike-popup-name-new"
									},
									html: data.items[i]['FULL_NAME']
								})
							]
						})
					);
				}
			}

			RatingLike.AdjustWindow(likeId);
			RatingLike.PopupScroll(likeId);
		},
		onfailure: function(data) {}
	});
	return false;
};

RatingLike.AdjustWindow = function(likeId)
{
	if (BXRL[likeId].popup != null)
	{
		BXRL[likeId].popup.bindOptions.forceBindPosition = true;
		BXRL[likeId].popup.adjustPosition();
		BXRL[likeId].popup.bindOptions.forceBindPosition = false;
	}
};

RatingLike.PopupScroll = function(likeId)
{
	var contentContainerNodeList = BX.findChildren(BXRL[likeId].popupContent, { className: 'bx-ilike-popup-content' }, true); // reactions
	if (contentContainerNodeList.length <= 0)
	{
		contentContainerNodeList = [ BXRL[likeId].popupContent ];
	}

	var contentContainerNode = null;

	for (var i = 0; i < contentContainerNodeList.length; i++)
	{
		contentContainerNode = contentContainerNodeList[i];

		BX.bind(contentContainerNode, 'scroll' , function() {
			if (this.scrollTop > (this.scrollHeight - this.offsetHeight) / 1.5)
			{
				RatingLike.List(likeId, null, (BXRL[likeId].version == 2 ? BXRL.render.popupCurrentReaction : false));
				BX.unbindAll(this);
			}
		});
	}
};

RatingLike.setParams = function(params)
{
	if (typeof params != 'undefined')
	{
		if (typeof params.pathToUserProfile != 'undefined')
		{
			BXRLParams.pathToUserProfile = params.pathToUserProfile;
		}
	}
};


/* End */
;
; /* Start:"a:4:{s:4:"full";s:53:"/bitrix/js/main/date/main.date.min.js?164839769316360";s:6:"source";s:33:"/bitrix/js/main/date/main.date.js";s:3:"min";s:37:"/bitrix/js/main/date/main.date.min.js";s:3:"map";s:37:"/bitrix/js/main/date/main.date.map.js";}"*/
(function(e){if(!e.BX){e.BX={}}if(!e.BX.Main){e.BX.Main={}}else if(e.BX.Main.Date){return}var t=e.BX;t.Main.Date={AM_PM_MODE:{UPPER:1,LOWER:2,NONE:false},format:function(e,t,_,n){var a=this;var D=r.isDate(t)?new Date(t.getTime()):r.isNumber(t)?new Date(t*1e3):new Date;var i=r.isDate(_)?new Date(_.getTime()):r.isNumber(_)?new Date(_*1e3):new Date;var s=!!n;if(r.isArray(e))return g(e,D,i,s);else if(!r.isNotEmptyString(e))return"";var o=(e.match(/{{([^{}]*)}}/g)||[]).map(function(e){return(e.match(/[^{}]+/)||[""])[0]});if(o.length>0){o.forEach(function(t,r){e=e.replace("{{"+t+"}}","{{"+r+"}}")})}var M=/\\?(sago|iago|isago|Hago|dago|mago|Yago|sdiff|idiff|Hdiff|ddiff|mdiff|Ydiff|sshort|ishort|Hshort|dshort|mhort|Yshort|yesterday|today|tommorow|tomorrow|[a-z])/gi;var u={d:function(){return r.strPadLeft(c(D).toString(),2,"0")},D:function(){return a._getMessage("DOW_"+H(D))},j:function(){return c(D)},l:function(){return a._getMessage("DAY_OF_WEEK_"+H(D))},N:function(){return H(D)||7},S:function(){if(c(D)%10==1&&c(D)!=11)return"st";else if(c(D)%10==2&&c(D)!=12)return"nd";else if(c(D)%10==3&&c(D)!=13)return"rd";else return"th"},w:function(){return H(D)},z:function(){var e=new Date(F(D),0,1);var t=new Date(F(D),T(D),c(D));return Math.ceil((t-e)/(24*3600*1e3))},W:function(){var e=new Date(D.getTime());var t=(H(D)+6)%7;R(e,c(e)-t+3);var _=e.getTime();S(e,0,1);if(H(e)!=4)S(e,0,1+(4-H(e)+7)%7);var n=1+Math.ceil((_-e)/(7*24*3600*1e3));return r.strPadLeft(n.toString(),2,"0")},F:function(){return a._getMessage("MONTH_"+(T(D)+1)+"_S")},f:function(){return a._getMessage("MONTH_"+(T(D)+1))},m:function(){return r.strPadLeft((T(D)+1).toString(),2,"0")},M:function(){return a._getMessage("MON_"+(T(D)+1))},n:function(){return T(D)+1},t:function(){var e=s?new Date(Date.UTC(F(D),T(D)+1,0)):new Date(F(D),T(D)+1,0);return c(e)},L:function(){var e=F(D);return e%4==0&&e%100!=0||e%400==0?1:0},o:function(){var e=new Date(D.getTime());R(e,c(e)-(H(D)+6)%7+3);return F(e)},Y:function(){return F(D)},y:function(){return F(D).toString().slice(2)},a:function(){return E(D)>11?"pm":"am"},A:function(){return E(D)>11?"PM":"AM"},B:function(){var e=(D.getUTCHours()+1)%24+D.getUTCMinutes()/60+D.getUTCSeconds()/3600;return r.strPadLeft(Math.floor(e*1e3/24).toString(),3,"0")},g:function(){return E(D)%12||12},G:function(){return E(D)},h:function(){return r.strPadLeft((E(D)%12||12).toString(),2,"0")},H:function(){return r.strPadLeft(E(D).toString(),2,"0")},i:function(){return r.strPadLeft(l(D).toString(),2,"0")},s:function(){return r.strPadLeft(A(D).toString(),2,"0")},u:function(){return r.strPadLeft((m(D)*1e3).toString(),6,"0")},e:function(){if(s)return"UTC";return""},I:function(){if(s)return 0;var e=new Date(F(D),0,1);var t=Date.UTC(F(D),0,1);var r=new Date(F(D),6,0);var _=Date.UTC(F(D),6,0);return 0+(e-t!==r-_)},O:function(){if(s)return"+0000";var e=D.getTimezoneOffset();var t=Math.abs(e);return(e>0?"-":"+")+r.strPadLeft((Math.floor(t/60)*100+t%60).toString(),4,"0")},P:function(){if(s)return"+00:00";var e=this.O();return e.substr(0,3)+":"+e.substr(3)},Z:function(){if(s)return 0;return-D.getTimezoneOffset()*60},c:function(){return"Y-m-d\\TH:i:sP".replace(M,h)},r:function(){return"D, d M Y H:i:s O".replace(M,h)},U:function(){return Math.floor(D.getTime()/1e3)},sago:function(){return d(N((i-D)/1e3),{0:"FD_SECOND_AGO_0",1:"FD_SECOND_AGO_1","10_20":"FD_SECOND_AGO_10_20",MOD_1:"FD_SECOND_AGO_MOD_1",MOD_2_4:"FD_SECOND_AGO_MOD_2_4",MOD_OTHER:"FD_SECOND_AGO_MOD_OTHER"})},sdiff:function(){return d(N((i-D)/1e3),{0:"FD_SECOND_DIFF_0",1:"FD_SECOND_DIFF_1","10_20":"FD_SECOND_DIFF_10_20",MOD_1:"FD_SECOND_DIFF_MOD_1",MOD_2_4:"FD_SECOND_DIFF_MOD_2_4",MOD_OTHER:"FD_SECOND_DIFF_MOD_OTHER"})},sshort:function(){return a._getMessage("FD_SECOND_SHORT").replace(/#VALUE#/g,N((i-D)/1e3))},iago:function(){return d(N((i-D)/60/1e3),{0:"FD_MINUTE_AGO_0",1:"FD_MINUTE_AGO_1","10_20":"FD_MINUTE_AGO_10_20",MOD_1:"FD_MINUTE_AGO_MOD_1",MOD_2_4:"FD_MINUTE_AGO_MOD_2_4",MOD_OTHER:"FD_MINUTE_AGO_MOD_OTHER"})},idiff:function(){return d(N((i-D)/60/1e3),{0:"FD_MINUTE_DIFF_0",1:"FD_MINUTE_DIFF_1","10_20":"FD_MINUTE_DIFF_10_20",MOD_1:"FD_MINUTE_DIFF_MOD_1",MOD_2_4:"FD_MINUTE_DIFF_MOD_2_4",MOD_OTHER:"FD_MINUTE_DIFF_MOD_OTHER"})},isago:function(){var e=N((i-D)/60/1e3);var t=d(e,{0:"FD_MINUTE_0",1:"FD_MINUTE_1","10_20":"FD_MINUTE_10_20",MOD_1:"FD_MINUTE_MOD_1",MOD_2_4:"FD_MINUTE_MOD_2_4",MOD_OTHER:"FD_MINUTE_MOD_OTHER"});t+=" ";var r=N((i-D)/1e3)-e*60;t+=d(r,{0:"FD_SECOND_AGO_0",1:"FD_SECOND_AGO_1","10_20":"FD_SECOND_AGO_10_20",MOD_1:"FD_SECOND_AGO_MOD_1",MOD_2_4:"FD_SECOND_AGO_MOD_2_4",MOD_OTHER:"FD_SECOND_AGO_MOD_OTHER"});return t},ishort:function(){return a._getMessage("FD_MINUTE_SHORT").replace(/#VALUE#/g,N((i-D)/60/1e3))},Hago:function(){return d(N((i-D)/60/60/1e3),{0:"FD_HOUR_AGO_0",1:"FD_HOUR_AGO_1","10_20":"FD_HOUR_AGO_10_20",MOD_1:"FD_HOUR_AGO_MOD_1",MOD_2_4:"FD_HOUR_AGO_MOD_2_4",MOD_OTHER:"FD_HOUR_AGO_MOD_OTHER"})},Hdiff:function(){return d(N((i-D)/60/60/1e3),{0:"FD_HOUR_DIFF_0",1:"FD_HOUR_DIFF_1","10_20":"FD_HOUR_DIFF_10_20",MOD_1:"FD_HOUR_DIFF_MOD_1",MOD_2_4:"FD_HOUR_DIFF_MOD_2_4",MOD_OTHER:"FD_HOUR_DIFF_MOD_OTHER"})},Hshort:function(){return a._getMessage("FD_HOUR_SHORT").replace(/#VALUE#/g,N((i-D)/60/60/1e3))},yesterday:function(){return a._getMessage("FD_YESTERDAY")},today:function(){return a._getMessage("FD_TODAY")},tommorow:function(){return a._getMessage("FD_TOMORROW")},tomorrow:function(){return a._getMessage("FD_TOMORROW")},dago:function(){return d(N((i-D)/60/60/24/1e3),{0:"FD_DAY_AGO_0",1:"FD_DAY_AGO_1","10_20":"FD_DAY_AGO_10_20",MOD_1:"FD_DAY_AGO_MOD_1",MOD_2_4:"FD_DAY_AGO_MOD_2_4",MOD_OTHER:"FD_DAY_AGO_MOD_OTHER"})},ddiff:function(){return d(N((i-D)/60/60/24/1e3),{0:"FD_DAY_DIFF_0",1:"FD_DAY_DIFF_1","10_20":"FD_DAY_DIFF_10_20",MOD_1:"FD_DAY_DIFF_MOD_1",MOD_2_4:"FD_DAY_DIFF_MOD_2_4",MOD_OTHER:"FD_DAY_DIFF_MOD_OTHER"})},dshort:function(){return a._getMessage("FD_DAY_SHORT").replace(/#VALUE#/g,N((i-D)/60/60/24/1e3))},mago:function(){return d(N((i-D)/60/60/24/31/1e3),{0:"FD_MONTH_AGO_0",1:"FD_MONTH_AGO_1","10_20":"FD_MONTH_AGO_10_20",MOD_1:"FD_MONTH_AGO_MOD_1",MOD_2_4:"FD_MONTH_AGO_MOD_2_4",MOD_OTHER:"FD_MONTH_AGO_MOD_OTHER"})},mdiff:function(){return d(N((i-D)/60/60/24/31/1e3),{0:"FD_MONTH_DIFF_0",1:"FD_MONTH_DIFF_1","10_20":"FD_MONTH_DIFF_10_20",MOD_1:"FD_MONTH_DIFF_MOD_1",MOD_2_4:"FD_MONTH_DIFF_MOD_2_4",MOD_OTHER:"FD_MONTH_DIFF_MOD_OTHER"})},mshort:function(){return a._getMessage("FD_MONTH_SHORT").replace(/#VALUE#/g,N((i-D)/60/60/24/31/1e3))},Yago:function(){return d(N((i-D)/60/60/24/365/1e3),{0:"FD_YEARS_AGO_0",1:"FD_YEARS_AGO_1","10_20":"FD_YEARS_AGO_10_20",MOD_1:"FD_YEARS_AGO_MOD_1",MOD_2_4:"FD_YEARS_AGO_MOD_2_4",MOD_OTHER:"FD_YEARS_AGO_MOD_OTHER"})},Ydiff:function(){return d(N((i-D)/60/60/24/365/1e3),{0:"FD_YEARS_DIFF_0",1:"FD_YEARS_DIFF_1","10_20":"FD_YEARS_DIFF_10_20",MOD_1:"FD_YEARS_DIFF_MOD_1",MOD_2_4:"FD_YEARS_DIFF_MOD_2_4",MOD_OTHER:"FD_YEARS_DIFF_MOD_OTHER"})},Yshort:function(){return d(N((i-D)/60/60/24/365/1e3),{0:"FD_YEARS_SHORT_0",1:"FD_YEARS_SHORT_1","10_20":"FD_YEARS_SHORT_10_20",MOD_1:"FD_YEARS_SHORT_MOD_1",MOD_2_4:"FD_YEARS_SHORT_MOD_2_4",MOD_OTHER:"FD_YEARS_SHORT_MOD_OTHER"})},x:function(){var e=a.isAmPmMode(true);var t=e===a.AM_PM_MODE.LOWER?"g:i a":e===a.AM_PM_MODE.UPPER?"g:i A":"H:i";return a.format([["tomorrow","tomorrow, "+t],["-",a.convertBitrixFormat(a._getMessage("FORMAT_DATETIME")).replace(/:s/g,"")],["s","sago"],["i","iago"],["today","today, "+t],["yesterday","yesterday, "+t],["",a.convertBitrixFormat(a._getMessage("FORMAT_DATETIME")).replace(/:s/g,"")]],D,i,s)},X:function(){var e=a.isAmPmMode(true);var t=e===a.AM_PM_MODE.LOWER?"g:i a":e===a.AM_PM_MODE.UPPER?"g:i A":"H:i";var r=a.format([["tomorrow","tomorrow"],["-",a.convertBitrixFormat(a._getMessage("FORMAT_DATE"))],["today","today"],["yesterday","yesterday"],["",a.convertBitrixFormat(a._getMessage("FORMAT_DATE"))]],D,i,s);var _=a.format([["tomorrow",t],["today",t],["yesterday",t],["",""]],D,i,s);if(_.length>0)return a._getMessage("FD_DAY_AT_TIME").replace(/#DAY#/g,r).replace(/#TIME#/g,_);else return r},Q:function(){var e=N((i-D)/60/60/24/1e3);if(e==0)return a._getMessage("FD_DAY_DIFF_1").replace(/#VALUE#/g,1);else return a.format([["d","ddiff"],["m","mdiff"],["","Ydiff"]],D,i)}};var f=false;if(e[0]&&e[0]=="^"){f=true;e=e.substr(1)}var O=e.replace(M,h);if(f){O=O.replace(/\s*00:00:00\s*/g,"").replace(/(\d\d:\d\d)(:00)/g,"$1").replace(/(\s*00:00\s*)(?!:)/g,"")}if(o.length>0){o.forEach(function(e,t){O=O.replace("{{"+t+"}}",e)})}return O;function g(e,t,r,_){var n=N((r-t)/1e3);for(var D=0;D<e.length;D++){var i=e[D][0];var s=e[D][1];var o=null;if(i=="s"){if(n<60)return a.format(s,t,r,_)}else if((o=/^s(\d+)\>?(\d+)?/.exec(i))!=null){if(o[1]&&o[2]){if(n<o[1]&&n>o[2]){return a.format(s,t,r,_)}}else if(n<o[1]){return a.format(s,t,r,_)}}else if(i=="i"){if(n<60*60)return a.format(s,t,r,_)}else if((o=/^i(\d+)\>?(\d+)?/.exec(i))!=null){if(o[1]&&o[2]){if(n<o[1]*60&&n>o[2]*60){return a.format(s,t,r,_)}}else if(n<o[1]*60){return a.format(s,t,r,_)}}else if(i=="H"){if(n<24*60*60)return a.format(s,t,r,_)}else if((o=/^H(\d+)\>?(\d+)?/.exec(i))!=null){if(o[1]&&o[2]){if(n<o[1]*60*60&&n>o[2]*60*60){return a.format(s,t,r,_)}}else if(n<o[1]*60*60){return a.format(s,t,r,_)}}else if(i=="d"){if(n<31*24*60*60)return a.format(s,t,r,_)}else if((o=/^d(\d+)\>?(\d+)?/.exec(i))!=null){if(o[1]&&o[2]){if(n<o[1]*24*60*60&&n>o[2]*24*60*60){return a.format(s,t,r,_)}}else if(n<o[1]*24*60*60){return a.format(s,t,r,_)}}else if(i=="m"){if(n<365*24*60*60)return a.format(s,t,r,_)}else if((o=/^m(\d+)\>?(\d+)?/.exec(i))!=null){if(o[1]&&o[2]){if(n<o[1]*31*24*60*60&&n>o[2]*31*24*60*60){return a.format(s,t,r,_)}}else if(n<o[1]*31*24*60*60){return a.format(s,t,r,_)}}else if(i=="now"){if(t.getTime()==r.getTime()){return a.format(s,t,r,_)}}else if(i=="today"){var M=F(r),u=T(r),f=c(r);var O=_?new Date(Date.UTC(M,u,f,0,0,0,0)):new Date(M,u,f,0,0,0,0);var g=_?new Date(Date.UTC(M,u,f+1,0,0,0,0)):new Date(M,u,f+1,0,0,0,0);if(t>=O&&t<g)return a.format(s,t,r,_)}else if(i=="todayFuture"){var M=F(r),u=T(r),f=c(r);var O=r.getTime();var g=_?new Date(Date.UTC(M,u,f+1,0,0,0,0)):new Date(M,u,f+1,0,0,0,0);if(t>=O&&t<g)return a.format(s,t,r,_)}else if(i=="yesterday"){M=F(r);u=T(r);f=c(r);var E=_?new Date(Date.UTC(M,u,f-1,0,0,0,0)):new Date(M,u,f-1,0,0,0,0);var l=_?new Date(Date.UTC(M,u,f,0,0,0,0)):new Date(M,u,f,0,0,0,0);if(t>=E&&t<l)return a.format(s,t,r,_)}else if(i=="tommorow"||i=="tomorrow"){M=F(r);u=T(r);f=c(r);var A=_?new Date(Date.UTC(M,u,f+1,0,0,0,0)):new Date(M,u,f+1,0,0,0,0);var m=_?new Date(Date.UTC(M,u,f+2,0,0,0,0)):new Date(M,u,f+2,0,0,0,0);if(t>=A&&t<m)return a.format(s,t,r,_)}else if(i=="-"){if(n<0)return a.format(s,t,r,_)}}return e.length>0?a.format(e[e.length-1][1],t,r,_):""}function F(e){return s?e.getUTCFullYear():e.getFullYear()}function c(e){return s?e.getUTCDate():e.getDate()}function T(e){return s?e.getUTCMonth():e.getMonth()}function E(e){return s?e.getUTCHours():e.getHours()}function l(e){return s?e.getUTCMinutes():e.getMinutes()}function A(e){return s?e.getUTCSeconds():e.getSeconds()}function m(e){return s?e.getUTCMilliseconds():e.getMilliseconds()}function H(e){return s?e.getUTCDay():e.getDay()}function R(e,t){return s?e.setUTCDate(t):e.setDate(t)}function S(e,t,r){return s?e.setUTCMonth(t,r):e.setMonth(t,r)}function d(e,t){var r=e<100?Math.abs(e):Math.abs(e%100);var _=r%10;var n="";if(r==0)n=a._getMessage(t["0"]);else if(r==1)n=a._getMessage(t["1"]);else if(r>=10&&r<=20)n=a._getMessage(t["10_20"]);else if(_==1)n=a._getMessage(t["MOD_1"]);else if(2<=_&&_<=4)n=a._getMessage(t["MOD_2_4"]);else n=a._getMessage(t["MOD_OTHER"]);return n.replace(/#VALUE#/g,e)}function h(e,t){if(u[e])return u[e]();else return t}function N(e){return e>=0?Math.floor(e):Math.ceil(e)}},convertBitrixFormat:function(e){if(!r.isNotEmptyString(e))return"";return e.replace("YYYY","Y").replace("MMMM","F").replace("MM","m").replace("M","M").replace("DD","d").replace("G","g").replace(/GG/i,"G").replace("H","h").replace(/HH/i,"H").replace("MI","i").replace("SS","s").replace("TT","A").replace("T","a")},convertToUTC:function(e){if(!r.isDate(e))return null;return new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()))},getNewDate:function(e){return new Date(this.getBrowserTimestamp(e))},getBrowserTimestamp:function(e){e=parseInt(e,10);var t=new Date(e*1e3).getTimezoneOffset()*60;return(parseInt(e,10)+parseInt(this._getMessage("SERVER_TZ_OFFSET"))+t)*1e3},getServerTimestamp:function(e){e=parseInt(e,10);var t=new Date(e).getTimezoneOffset()*60;return Math.round(e/1e3-(parseInt(this._getMessage("SERVER_TZ_OFFSET"),10)+parseInt(t,10)))},formatLastActivityDate:function(e,t,r){var _=this.isAmPmMode(true);var n=_===this.AM_PM_MODE.LOWER?"g:i a":_===this.AM_PM_MODE.UPPER?"g:i A":"H:i";var a=[["tomorrow","#01#"+n],["now","#02#"],["todayFuture","#03#"+n],["yesterday","#04#"+n],["-",this.convertBitrixFormat(this._getMessage("FORMAT_DATETIME")).replace(/:s/g,"")],["s60","sago"],["i60","iago"],["H5","Hago"],["H24","#03#"+n],["d31","dago"],["m12>1","mago"],["m12>0","dago"],["","#05#"]];var D=this.format(a,e,t,r);var i=null;if((i=/^#(\d+)#(.*)/.exec(D))!=null){switch(i[1]){case"01":D=this._getMessage("FD_LAST_SEEN_TOMORROW").replace("#TIME#",i[2]);break;case"02":D=this._getMessage("FD_LAST_SEEN_NOW");break;case"03":D=this._getMessage("FD_LAST_SEEN_TODAY").replace("#TIME#",i[2]);break;case"04":D=this._getMessage("FD_LAST_SEEN_YESTERDAY").replace("#TIME#",i[2]);break;case"05":D=this._getMessage("FD_LAST_SEEN_MORE_YEAR");break;default:D=i[2];break}}return D},isAmPmMode:function(e){if(e===true){return this._getMessage("AMPM_MODE")}return this._getMessage("AMPM_MODE")!==false},_getMessage:function(e){return t.message(e)},parse:function(e,t,_,n){if(r.isNotEmptyString(e)){if(!_)_=this._getMessage("FORMAT_DATE");if(!n)n=this._getMessage("FORMAT_DATETIME");var a="";for(o=1;o<=12;o++){a=a+"|"+this._getMessage("MON_"+o)}var D=new RegExp("([0-9]+|[a-z]+"+a+")","ig"),i=e.match(D),s=_.match(/(DD|MI|MMMM|MM|M|YYYY)/gi),o,M,u=[],f=[],O={};if(!i){return null}if(i.length>s.length){s=n.match(/(DD|MI|MMMM|MM|M|YYYY|HH|H|SS|TT|T|GG|G)/gi)}for(o=0,M=i.length;o<M;o++){if(i[o].trim()!==""){u[u.length]=i[o]}}for(o=0,M=s.length;o<M;o++){if(s[o].trim()!==""){f[f.length]=s[o]}}var g=r.array_search("MMMM",f);if(g>0){u[g]=this.getMonthIndex(u[g]);f[g]="MM"}else{g=r.array_search("M",f);if(g>0){u[g]=this.getMonthIndex(u[g]);f[g]="MM"}}for(o=0,M=f.length;o<M;o++){var F=f[o].toUpperCase();O[F]=F==="T"||F==="TT"?u[o]:parseInt(u[o],10)}if(O["DD"]>0&&O["MM"]>0&&O["YYYY"]>0){var c=new Date;if(t){c.setUTCDate(1);c.setUTCFullYear(O["YYYY"]);c.setUTCMonth(O["MM"]-1);c.setUTCDate(O["DD"]);c.setUTCHours(0,0,0,0)}else{c.setDate(1);c.setFullYear(O["YYYY"]);c.setMonth(O["MM"]-1);c.setDate(O["DD"]);c.setHours(0,0,0,0)}if((!isNaN(O["HH"])||!isNaN(O["GG"])||!isNaN(O["H"])||!isNaN(O["G"]))&&!isNaN(O["MI"])){if(!isNaN(O["H"])||!isNaN(O["G"])){var T=(O["T"]||O["TT"]||"am").toUpperCase()==="PM",E=parseInt(O["H"]||O["G"]||0,10);if(T){O["HH"]=E+(E===12?0:12)}else{O["HH"]=E<12?E:0}}else{O["HH"]=parseInt(O["HH"]||O["GG"]||0,10)}if(isNaN(O["SS"]))O["SS"]=0;if(t){c.setUTCHours(O["HH"],O["MI"],O["SS"])}else{c.setHours(O["HH"],O["MI"],O["SS"])}}return c}}return null},getMonthIndex:function(e){var t,r=e.toUpperCase(),_=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],n=["january","february","march","april","may","june","july","august","september","october","november","december"];for(t=1;t<=12;t++){if(r===this._getMessage("MON_"+t).toUpperCase()||r===this._getMessage("MONTH_"+t).toUpperCase()||r===_[t-1].toUpperCase()||r===n[t-1].toUpperCase()){return t}}return e}};var r={isDate:function(e){return e&&Object.prototype.toString.call(e)=="[object Date]"},isNumber:function(e){return e===0?true:e?typeof e=="number"||e instanceof Number:false},isArray:function(e){return e&&Object.prototype.toString.call(e)=="[object Array]"},isString:function(e){return e===""?true:e?typeof e=="string"||e instanceof String:false},isNotEmptyString:function(e){return this.isString(e)?e.length>0:false},strPadLeft:function(e,t,r){var _=e.length,n=r.length;if(_>=t)return e;for(;_<t;_+=n)e=r+e;return e},array_search:function(e,t){for(var r=0;r<t.length;r++){if(t[r]==e)return r}return-1}}})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:53:"/bitrix/js/main/core/core_date.min.js?164839769226661";s:6:"source";s:33:"/bitrix/js/main/core/core_date.js";s:3:"min";s:37:"/bitrix/js/main/core/core_date.min.js";s:3:"map";s:37:"/bitrix/js/main/core/core_date.map.js";}"*/
(function(){if(BX.date)return;BX.date=BX.Main.Date;var e=null;BX.calendar=function(e){return BX.calendar.get().Show(e)};BX.calendar.get=function(){if(!e)e=new BX.JCCalendar;return e};BX.calendar.InsertDaysBack=function(e,t){if(t!=""){var a=new Date;if(t>0){a.setTime(a.valueOf()-t*864e5)}e.value=BX.date.format(BX.date.convertBitrixFormat(BX.message("FORMAT_DATE")),a,null)}else{e.value=""}};BX.calendar.ValueToString=function(e,t,a){return BX.date.format(BX.date.convertBitrixFormat(BX.message(t?"FORMAT_DATETIME":"FORMAT_DATE")),e,null,!!a)};BX.calendar.ValueToStringFormat=function(e,t,a){return BX.date.format(BX.date.convertBitrixFormat(t),e,null,!!a)};BX.CalendarPeriod={Init:function(e,t,a){if((e.value!=""||t.value!="")&&a.value=="")a.value="interval";a.onchange()},ChangeDirectOpts:function(e,t){var a=BX.findChild(t,{className:"adm-select adm-calendar-direction"},true);if(e=="week"){a.options[0].text=BX.message("JSADM_CALEND_PREV_WEEK");a.options[1].text=BX.message("JSADM_CALEND_CURR_WEEK");a.options[2].text=BX.message("JSADM_CALEND_NEXT_WEEK")}else{a.options[0].text=BX.message("JSADM_CALEND_PREV");a.options[1].text=BX.message("JSADM_CALEND_CURR");a.options[2].text=BX.message("JSADM_CALEND_NEXT")}},SaveAndClearInput:function(e){if(!window.SavedPeriodValues)window.SavedPeriodValues={};window.SavedPeriodValues[e.id]=e.value;e.value=""},RestoreInput:function(e){if(!window.SavedPeriodValues||!window.SavedPeriodValues[e.id])return;e.value=window.SavedPeriodValues[e.id];delete window.SavedPeriodValues[e.id]},OnChangeP:function(e){var t=e.parentNode.parentNode;var a,i,s,n;a=i=s=n=false;var r=BX.findChild(t,{className:"adm-input-wrap adm-calendar-inp adm-calendar-first"});var o=BX.findChild(t,{className:"adm-input-wrap adm-calendar-second"});var l=BX.findChild(t,{className:"adm-select-wrap adm-calendar-direction"});var p=BX.findChild(t,{className:"adm-calendar-separate"});var h=BX.findChild(t,{className:"adm-input adm-calendar-from"},true);var c=BX.findChild(t,{className:"adm-input adm-calendar-to"},true);switch(e.value){case"day":case"week":case"month":case"quarter":case"year":s=true;BX.CalendarPeriod.OnChangeD(l.children[0]);break;case"before":i=true;break;case"after":a=true;break;case"exact":a=true;break;case"interval":a=i=n=true;BX.CalendarPeriod.RestoreInput(h);BX.CalendarPeriod.RestoreInput(c);break;case"":BX.CalendarPeriod.SaveAndClearInput(h);BX.CalendarPeriod.SaveAndClearInput(c);break;default:break}BX.CalendarPeriod.ChangeDirectOpts(e.value,t);r.style.display=a?"inline-block":"none";o.style.display=i?"inline-block":"none";l.style.display=s?"inline-block":"none";p.style.display=n?"inline-block":"none"},OnChangeD:function(e){var t=e.parentNode.parentNode;var a=BX.findChild(t,{className:"adm-input adm-calendar-from"},true);var i=BX.findChild(t,{className:"adm-input adm-calendar-to"},true);var s=BX.findChild(t,{className:"adm-select adm-calendar-period"},true);var n=0;switch(e.value){case"previous":n=-1;break;case"next":n=1;break;case"current":default:break}var r=false;var o=false;var l=new Date;var p=l.getFullYear();var h=l.getMonth();var c=l.getDate();var u=l.getDay();if(u==0)u=7;switch(s.value){case"day":r=new Date(p,h,c+n,0,0,0);o=new Date(p,h,c+n,23,59,59);break;case"week":r=new Date(p,h,c-u+1+n*7,0,0,0);o=new Date(p,h,c+(7-u)+n*7,23,59,59);break;case"month":r=new Date(p,h+n,1,0,0,0);o=new Date(p,h+1+n,0,23,59,59);break;case"quarter":var d=Math.floor(h/3)+n;r=new Date(p,3*d,1,0,0,0);o=new Date(p,3*(d+1),0,23,59,59);break;case"year":r=new Date(p+n,0,1,0,0,0);o=new Date(p+1+n,0,0,23,59,59);break;default:break}var m=window[a.name+"_bTime"]?BX.message("FORMAT_DATETIME"):BX.message("FORMAT_DATE");if(r){a.value=BX.formatDate(r,m);BX.addClass(a,"adm-calendar-inp-setted")}if(o){i.value=BX.formatDate(o,m);BX.addClass(i,"adm-calendar-inp-setted")}}};BX.JCCalendar=function(){this.params={};this.bAmPm=BX.isAmPmMode();this.popup=null;this.popup_month=null;this.popup_year=null;this.month_popup_classname="";this.year_popup_classname="";this.value=null;this._layers={};this._current_layer=null;this.DIV=null;this.PARTS={};this.weekStart=0;this.numRows=6;this._create=function(e){this.popup=new BX.PopupWindow("calendar_popup_"+Math.random(),e.node,{closeByEsc:true,autoHide:false,content:this._get_content(),bindOptions:{forceBindPosition:true}});BX.bind(this.popup.popupContainer,"click",function(e){e.stopPropagation()})};this._auto_hide_disable=function(){BX.unbind(document,"click",BX.proxy(this._auto_hide,this))};this._auto_hide_enable=function(){BX.bind(document,"click",BX.proxy(this._auto_hide,this))};this._auto_hide=function(e){this._auto_hide_disable();this.popup.close()};this._get_content=function(){var e=BX.delegate(function(e){e=e||window.event;this.SetDate(new Date(parseInt(BX.proxy_context.getAttribute("data-date"))),e.type==="dblclick"||this.params.bCompatibility&&!this.params.bTimeVisibility)},this);this.DIV=BX.create("DIV",{props:{className:"bx-calendar"},children:[BX.create("DIV",{props:{className:"bx-calendar-header"},children:[BX.create("A",{attrs:{href:"javascript:void(0)"},props:{className:"bx-calendar-left-arrow"},events:{click:BX.proxy(this._prev,this)}}),BX.create("SPAN",{props:{className:"bx-calendar-header-content"},children:[this.PARTS.MONTH=BX.create("A",{attrs:{href:"javascript:void(0)"},props:{className:"bx-calendar-top-month"},events:{click:BX.proxy(this._menu_month,this)}}),this.PARTS.YEAR=BX.create("A",{attrs:{href:"javascript:void(0)"},props:{className:"bx-calendar-top-year"},events:{click:BX.proxy(this._menu_year,this)}})]}),BX.create("A",{attrs:{href:"javascript:void(0)"},props:{className:"bx-calendar-right-arrow"},events:{click:BX.proxy(this._next,this)}})]}),this.PARTS.WEEK=BX.create("DIV",{props:{className:"bx-calendar-name-day-wrap"}}),this.PARTS.LAYERS=BX.create("DIV",{props:{className:"bx-calendar-cell-block"},events:{click:BX.delegateEvent({className:"bx-calendar-cell"},e),dblclick:BX.delegateEvent({className:"bx-calendar-cell"},e)}}),this.PARTS.TIME=BX.create("DIV",{props:{className:"bx-calendar-set-time-wrap"},events:{click:BX.delegateEvent({attr:"data-action"},BX.delegate(this._time_actions,this))},html:'<a href="javascript:void(0)" data-action="time_show" class="bx-calendar-set-time"><i></i>'+BX.message("CAL_TIME_SET")+'</a><div class="bx-calendar-form-block"><span class="bx-calendar-form-text">'+BX.message("CAL_TIME")+'</span><span class="bx-calendar-form"><input type="text" class="bx-calendar-form-input" maxwidth="2" onkeyup="BX.calendar.get()._check_time()" /><span class="bx-calendar-form-separator"></span><input type="text" class="bx-calendar-form-input" maxwidth="2" onkeyup="BX.calendar.get()._check_time()" />'+(this.bAmPm?'<span class="bx-calendar-AM-PM-block"><span class="bx-calendar-AM-PM-text" data-action="time_ampm"></span><span class="bx-calendar-form-arrow-r"><a href="javascript:void(0)" class="bx-calendar-form-arrow-top" data-action="time_ampm_up"><i></i></a><a href="javascript:void(0)" class="bx-calendar-form-arrow-bottom" data-action="time_ampm_down"><i></i></a></span></span>':"")+'</span><a href="javascript:void(0)" data-action="time_hide" class="bx-calendar-form-close"><i></i></a></div>'}),this.PARTS.BUTTONS=BX.create("DIV",{props:{className:"bx-calendar-button-block"},events:{click:BX.delegateEvent({attr:"data-action"},BX.delegate(this._button_actions,this))},html:'<a href="javascript:void(0)" class="bx-calendar-button bx-calendar-button-select" data-action="submit"><span class="bx-calendar-button-left"></span><span class="bx-calendar-button-text">'+BX.message("CAL_BUTTON")+'</span><span class="bx-calendar-button-right"></span></a><a href="javascript:void(0)" class="bx-calendar-button bx-calendar-button-cancel" data-action="cancel"><span class="bx-calendar-button-left"></span><span class="bx-calendar-button-text">'+BX.message("JS_CORE_WINDOW_CLOSE")+'</span><span class="bx-calendar-button-right"></span></a>'})]});this.PARTS.TIME_INPUT_H=BX.findChild(this.PARTS.TIME,{tag:"INPUT"},true);this.PARTS.TIME_INPUT_M=this.PARTS.TIME_INPUT_H.nextSibling.nextSibling;if(this.bAmPm)this.PARTS.TIME_AMPM=this.PARTS.TIME_INPUT_M.nextSibling.firstChild;var t=new BX.JCSpinner({input:this.PARTS.TIME_INPUT_H,callback_change:BX.proxy(this._check_time,this),bSaveValue:false}).Show();t.className="bx-calendar-form-arrow-l";this.PARTS.TIME_INPUT_H.parentNode.insertBefore(t,this.PARTS.TIME_INPUT_H);t=new BX.JCSpinner({input:this.PARTS.TIME_INPUT_M,callback_change:BX.proxy(this._check_time,this),bSaveValue:true}).Show();t.className="bx-calendar-form-arrow-r";if(!this.PARTS.TIME_INPUT_M.nextSibling)this.PARTS.TIME_INPUT_M.parentNode.appendChild(t);else this.PARTS.TIME_INPUT_M.parentNode.insertBefore(t,this.PARTS.TIME_INPUT_M.nextSibling);for(var a=0;a<7;a++){this.PARTS.WEEK.appendChild(BX.create("SPAN",{props:{className:"bx-calendar-name-day"},text:BX.message("DOW_"+(a+this.weekStart)%7)}))}return this.DIV};this._time_actions=function(){switch(BX.proxy_context.getAttribute("data-action")){case"time_show":BX.addClass(this.PARTS.TIME,"bx-calendar-set-time-opened");if(this.params.bCompatibility){BX.removeClass(this.PARTS.BUTTONS,"bx-calendar-buttons-disabled")}this.popup.adjustPosition();break;case"time_hide":BX.removeClass(this.PARTS.TIME,"bx-calendar-set-time-opened");if(this.params.bCompatibility){this._saveChoice("hide");BX.addClass(this.PARTS.BUTTONS,"bx-calendar-buttons-disabled")}this.popup.adjustPosition();break;case"time_ampm":this.PARTS.TIME_AMPM.innerHTML=this.PARTS.TIME_AMPM.innerHTML=="AM"?"PM":"AM";break;case"time_ampm_up":this._check_time({bSaveValue:false},null,12);return;break;case"time_ampm_down":this._check_time({bSaveValue:false},null,-12);return;break}this._check_time()};this._button_actions=function(){switch(BX.proxy_context.getAttribute("data-action")){case"submit":if(this.params.bCompatibility){this._saveChoice("show")}this.SaveValue();break;case"cancel":this.Close();break}};this._saveChoice=function(e){if(this.params.bCategoryTimeVisibilityOption){BX.userOptions.save(this.params.bCategoryTimeVisibilityOption,this.params.bNameTimeVisibilityOption,"visibility",e==="show"?"Y":"N")}this._bTimeVisibility=e==="show";this.params.bTimeVisibility=this._bTimeVisibility};this._check_time=function(e,t,a){var i=parseInt(this.PARTS.TIME_INPUT_H.value.substring(0,5),10)||0,s=parseInt(this.PARTS.TIME_INPUT_M.value.substring(0,5),10)||0,n=false;if(!!e&&!e.bSaveValue){this.value.setUTCHours(this.value.getUTCHours()+a)}else if(!isNaN(i)){if(this.bAmPm){if(i!=12&&this.PARTS.TIME_AMPM.innerHTML=="PM"){i+=12}}n=true;this.value.setUTCHours(i%24)}if(!isNaN(s)){n=true;this.value.setUTCMinutes(s%60)}if(n){this.SetValue(this.value)}};this._set_layer=function(){var e=parseInt(this.value.getUTCFullYear()+""+BX.util.str_pad_left(this.value.getUTCMonth()+"",2,"0"));if(!this._layers[e]){this._layers[e]=this._create_layer();this._layers[e].BXLAYERID=e}if(this._current_layer){var t=new Date(this.value.valueOf());t.setUTCHours(0);t.setUTCMinutes(0);var a=BX.findChild(this._layers[e],{tag:"A",className:"bx-calendar-active"},true),i=BX.findChild(this._layers[e],{tag:"A",attr:{"data-date":t.valueOf()+""}},true);if(a){BX.removeClass(a,"bx-calendar-active")}if(i){BX.addClass(i,"bx-calendar-active")}this._replace_layer(this._current_layer,this._layers[e])}else{this.PARTS.LAYERS.appendChild(this._layers[e])}this._current_layer=this._layers[e]};this._replace_layer=function(e,t){if(e!=t){if(!BX.browser.IsIE()||BX.browser.IsDoctype()){var a=e.BXLAYERID>t.BXLAYERID?1:-1;var i=0;var s=-a*e.offsetHeight;e.style.position="relative";e.style.top="0px";e.style.zIndex=5;t.style.position="absolute";t.style.top=s+"px";t.style.zIndex=6;this.PARTS.LAYERS.appendChild(t);var n=15;var r;(r=function(){s+=a*n;i+=a*n;if(a*s<0){e.style.top=i+"px";t.style.top=s+"px";setTimeout(r,10)}else{e.parentNode.removeChild(e);t.style.top="0px";t.style.position="static";t.style.zIndex=0}})()}else{this.PARTS.LAYERS.replaceChild(t,e)}}};this._create_layer=function(){var e=BX.create("DIV",{props:{className:"bx-calendar-layer"}});var t=new Date(this.value);t.setUTCHours(0);t.setUTCMinutes(0);t.setUTCDate(1);if(t.getUTCDay()!=this.weekStart){var a=t.getUTCDay()-this.weekStart;a+=a<0?7:0;t.setUTCDate(t.getUTCDate()-a)}var i=this.value.getUTCMonth(),s=this.value.getUTCDate(),n="";for(var r=0;r<this.numRows;r++){n+='<div class="bx-calendar-range'+(r==this.numRows-1?" bx-calendar-range-noline":"")+'">';for(var o=0;o<7;o++){a=t.getUTCDate();var l=t.getUTCDay();var p="bx-calendar-cell";if(i!=t.getUTCMonth())p+=" bx-calendar-date-hidden";else if(s==a)p+=" bx-calendar-active";if(l==0||l==6)p+=" bx-calendar-weekend";n+='<a href="javascript:void(0)" class="'+p+'" data-date="'+t.valueOf()+'">'+a+"</a>";t.setUTCDate(t.getUTCDate()+1)}n+="</div>"}e.innerHTML=n;return e};this._prev=function(){this.SetMonth(this.value.getUTCMonth()-1)};this._next=function(){this.SetMonth(this.value.getUTCMonth()+1)};this._menu_month_content=function(){var e="",t=this.value.getMonth(),a;for(a=0;a<12;a++){e+='<span class="bx-calendar-month'+(a==t?" bx-calendar-month-active":"")+'" data-bx-month="'+a+'">'+BX.message("MONTH_"+(a+1))+"</span>"}return'<div class="bx-calendar-month-popup"><div class="bx-calendar-month-title" data-bx-month="'+this.value.getUTCMonth()+'">'+BX.message("MONTH_"+(this.value.getUTCMonth()+1))+'</div><div class="bx-calendar-month-content">'+e+"</div></div>"};this._menu_month=function(){if(!this.popup_month){this.popup_month=new BX.PopupWindow("calendar_popup_month_"+Math.random(),this.PARTS.MONTH,{content:this._menu_month_content(),closeByEsc:true,autoHide:true,offsetTop:-29,offsetLeft:-1,className:this.month_popup_classname,events:{onPopupShow:BX.delegate(function(){if(this.popup_year){this.popup_year.close()}},this)}});BX.bind(this.popup_month.popupContainer,"click",BX.proxy(this.month_popup_click,this));this.popup_month.BXMONTH=this.value.getUTCMonth()}else if(this.popup_month.BXMONTH!=this.value.getUTCMonth()){this.popup_month.setContent(this._menu_month_content());this.popup_month.BXMONTH=this.value.getUTCMonth()}this.popup_month.show()};this.month_popup_click=function(e){var t=e.target||e.srcElement;if(t&&t.getAttribute&&t.getAttribute("data-bx-month")){this.SetMonth(parseInt(t.getAttribute("data-bx-month")));this.popup_month.close()}};this._menu_year_content=function(){var e='<div class="bx-calendar-year-popup"><div class="bx-calendar-year-title" data-bx-year="'+this.value.getUTCFullYear()+'">'+this.value.getUTCFullYear()+'</div><div class="bx-calendar-year-content" id="bx-calendar-year-content">';for(var t=-3;t<=3;t++){e+='<span class="bx-calendar-year-number'+(t==0?" bx-calendar-year-active":"")+'" data-bx-year="'+(this.value.getUTCFullYear()-t)+'">'+(this.value.getUTCFullYear()-t)+"</span>"}e+='</div><input data-bx-year-input="Y" type="text" class="bx-calendar-year-input" maxlength="4" /></div>';return e};this._menu_year=function(){if(!this.popup_year){this.popup_year=new BX.PopupWindow("calendar_popup_year_"+Math.random(),this.PARTS.YEAR,{content:this._menu_year_content(),closeByEsc:true,autoHide:true,offsetTop:-29,offsetLeft:-1,className:this.year_popup_classname,events:{onPopupShow:BX.delegate(function(){if(this.popup_month){this.popup_month.close()}},this)}});BX.bind(this.popup_year.popupContainer,"click",BX.proxy(this.year_popup_click,this));BX.bind(this.popup_year.popupContainer,"keyup",BX.proxy(this.year_popup_keyup,this));this.popup_year.BXYEAR=this.value.getUTCFullYear()}else if(this.popup_year.BXYEAR!=this.value.getUTCFullYear()){this.popup_year.setContent(this._menu_year_content());this.popup_year.BXYEAR=this.value.getUTCFullYear()}this.popup_year.show()};this.year_popup_click=function(e){var t=e.target||e.srcElement;if(t&&t.getAttribute&&t.getAttribute("data-bx-year")){this.SetYear(parseInt(t.getAttribute("data-bx-year")));this.popup_year.close()}};this.year_popup_keyup=function(e){var t=e.target||e.srcElement;if(t&&t.getAttribute&&t.getAttribute("data-bx-year-input")=="Y"){var a=parseInt(t.value);if(a>=1900&&a<=2100){this.SetYear(a);this.popup_year.close()}}};this._check_date=function(e){var t=e;if(BX.type.isString(e)){t=BX.parseDate(e,true)}if(!BX.type.isDate(t)||isNaN(t.valueOf())){t=BX.date.convertToUTC(new Date);if(this.params.bHideTime){t.setUTCHours(0);t.setUTCMinutes(0)}}t.setUTCMilliseconds(0);t.setUTCSeconds(0);t.BXCHECKED=true;return t}};BX.JCCalendar.prototype.Show=function(e){if(!BX.isReady){BX.ready(BX.delegate(function(){this.Show(e)},this));return}e.node=e.node||document.body;if(BX.type.isNotEmptyString(e.node)){var t=BX(e.node);if(!t){t=document.getElementsByName(e.node);if(t&&t.length>0){t=t[0]}}e.node=t}if(!e.node)return;if(!!e.field){if(BX.type.isString(e.field)){t=BX(e.field);if(!!t){e.field=t}else{if(e.form){if(BX.type.isString(e.form)){e.form=document.forms[e.form]}}if(BX.type.isDomNode(e.form)&&!!e.form[e.field]){e.field=e.form[e.field]}else{t=document.getElementsByName(e.field);if(t&&t.length>0){t=t[0];e.field=t}}}if(BX.type.isString(e.field)){e.field=BX(e.field)}}}var a=!this.popup||!this.popup.isShown()||this.params.node!=e.node;this.params=e;this.params.bCompatibility=typeof this.params.bCompatibility=="undefined"?false:this.params.bCompatibility;this.params.bTimeVisibility=typeof this.params.bTimeVisibility=="undefined"?!this.params.bCompatibility:this.params.bTimeVisibility;if(this.params.bCompatibility){this.params.bCategoryTimeVisibilityOption=this.params.bCategoryTimeVisibilityOption?this.params.bCategoryTimeVisibilityOption:"";this.params.bNameTimeVisibilityOption=this.params.bNameTimeVisibilityOption?this.params.bNameTimeVisibilityOption:"time_visibility";if(typeof this._bTimeVisibility!=="undefined"){this.params.bTimeVisibility=this._bTimeVisibility}}this.params.bTime=typeof this.params.bTime=="undefined"?true:!!this.params.bTime;this.params.bHideTime=typeof this.params.bHideTime=="undefined"?true:!!this.params.bHideTime;this.params.bUseSecond=typeof this.params.bUseSecond=="undefined"?true:!!this.params.bUseSecond;this.weekStart=parseInt(this.params.weekStart||this.params.weekStart||BX.message("WEEK_START"));if(isNaN(this.weekStart))this.weekStart=1;if(!this.popup){this._create(this.params)}else{this.popup.setBindElement(this.params.node)}var i=!!this.params.bHideTime;if(this.params.value){this.SetValue(this.params.value);i=this.value.getUTCHours()<=0&&this.value.getUTCMinutes()<=0}else if(this.params.field){this.SetValue(this.params.field.value);i=this.value.getUTCHours()<=0&&this.value.getUTCMinutes()<=0}else if(!!this.params.currentTime){this.SetValue(this.params.currentTime)}else{this.SetValue()}if(!!this.params.bTime){this.activateTimeStyle(i)}else{this.activateDateStyle(i)}if(a){this._auto_hide_disable();this.popup.show();setTimeout(BX.proxy(this._auto_hide_enable,this),0)}this.params.bSetFocus=typeof this.params.bSetFocus=="undefined"?true:!!this.params.bSetFocus;if(this.params.bSetFocus){e.node.blur()}else{BX.bind(e.node,"keyup",BX.defer(function(){this.SetValue(e.node.value);if(!!this.params.bTime){if(this.value.getUTCHours()<=0&&this.value.getUTCMinutes()<=0)BX.removeClass(this.PARTS.TIME,"bx-calendar-set-time-opened");else BX.addClass(this.PARTS.TIME,"bx-calendar-set-time-opened")}},this))}return this};BX.JCCalendar.prototype.activateDateStyle=function(e){BX.addClass(this.DIV,"bx-calendar-time-disabled");if(!!e)BX.removeClass(this.PARTS.TIME,"bx-calendar-set-time-opened");else BX.addClass(this.PARTS.TIME,"bx-calendar-set-time-opened")};BX.JCCalendar.prototype.activateTimeStyle=function(e){if(this.params.bCompatibility&&!this.params.bTimeVisibility){BX.addClass(this.PARTS.BUTTONS,"bx-calendar-buttons-disabled");BX.addClass(this.PARTS.TIME,"bx-calendar-set-time-wrap-simple");BX.removeClass(this.PARTS.TIME,"bx-calendar-set-time-opened")}else{BX.removeClass(this.DIV,"bx-calendar-time-disabled");if(!!e)BX.removeClass(this.PARTS.TIME,"bx-calendar-set-time-opened");else BX.addClass(this.PARTS.TIME,"bx-calendar-set-time-opened")}};BX.JCCalendar.prototype.SetDay=function(e){this.value.setUTCDate(e);return this.SetValue(this.value)};BX.JCCalendar.prototype.SetMonth=function(e){if(this.popup_month)this.popup_month.close();this.value.setUTCMonth(e);if(e<0)e+=12;else if(e>=12)e-=12;while(this.value.getUTCMonth()>e){this.value.setUTCDate(this.value.getUTCDate()-1)}return this.SetValue(this.value)};BX.JCCalendar.prototype.SetYear=function(e){if(this.popup_year)this.popup_year.close();this.value.setUTCFullYear(e);return this.SetValue(this.value)};BX.JCCalendar.prototype.SetDate=function(e,t){e=this._check_date(e);e.setUTCHours(this.value.getUTCHours());e.setUTCMinutes(this.value.getUTCMinutes());e.setUTCSeconds(this.value.getUTCSeconds());if(this.params.bTime&&!t){return this.SetValue(e)}else{this.SetValue(e);this.SaveValue()}};BX.JCCalendar.prototype.SetValue=function(e){this.value=e&&e.BXCHECKED?e:this._check_date(e);this.PARTS.MONTH.innerHTML=BX.message("MONTH_"+(this.value.getUTCMonth()+1));this.PARTS.YEAR.innerHTML=this.value.getUTCFullYear();if(!!this.params.bTime){var t=this.value.getUTCHours();if(this.bAmPm){if(t>=12){this.PARTS.TIME_AMPM.innerHTML="PM";if(t!=12)t-=12}else{this.PARTS.TIME_AMPM.innerHTML="AM";if(t==0)t=12}}this.PARTS.TIME_INPUT_H.value=BX.util.str_pad_left(t.toString(),2,"0");this.PARTS.TIME_INPUT_M.value=BX.util.str_pad_left(this.value.getUTCMinutes().toString(),2,"0")}this._set_layer();return this};BX.JCCalendar.prototype.SaveValue=function(){if(this.popup_month)this.popup_month.close();if(this.popup_year)this.popup_year.close();var e=true;if(!!this.params.callback){var t=this.params.callback.apply(this,[new Date(this.value.valueOf()+this.value.getTimezoneOffset()*6e4)]);if(t===false)e=false}if(e){var a=!!this.params.bTime&&BX.hasClass(this.PARTS.TIME,"bx-calendar-set-time-opened");if(this.params.field){var i=BX.message(a?"FORMAT_DATETIME":"FORMAT_DATE");if(a&&!this.params.bUseSecond){i=i.replace(":SS","")}this.params.field.value=BX.calendar.ValueToStringFormat(this.value,i,true);BX.fireEvent(this.params.field,"change")}this.popup.close();if(!!this.params.callback_after){this.params.callback_after.apply(this,[new Date(this.value.valueOf()+this.value.getTimezoneOffset()*6e4),a])}}return this};BX.JCCalendar.prototype.Close=function(){if(!!this.popup)this.popup.close();return this};BX.JCSpinner=function(e){e=e||{};this.params={input:e.input||null,delta:e.delta||1,timeout_start:e.timeout_start||1e3,timeout_cont:e.timeout_cont||150,callback_start:e.callback_start||null,callback_change:e.callback_change||null,callback_finish:e.callback_finish||null,bSaveValue:typeof e.bSaveValue=="undefined"?!!e.input:!!e.bSaveValue};this.mousedown=false;this.direction=1};BX.JCSpinner.prototype.Show=function(){this.node=BX.create("span",{events:{mousedown:BX.delegateEvent({attr:"data-dir"},BX.delegate(this.Start,this))},html:'<a href="javascript:void(0)" class="bx-calendar-form-arrow bx-calendar-form-arrow-top" data-dir="1"><i></i></a><a href="javascript:void(0)" class="bx-calendar-form-arrow bx-calendar-form-arrow-bottom" data-dir="-1"><i></i></a>'});return this.node};BX.JCSpinner.prototype.Start=function(){this.mousedown=true;this.direction=BX.proxy_context.getAttribute("data-dir")>0?1:-1;BX.bind(document,"mouseup",BX.proxy(this.MouseUp,this));this.ChangeValue(true)};BX.JCSpinner.prototype.ChangeValue=function(e){if(!this.mousedown)return;if(this.params.input){var t=parseInt(this.params.input.value,10)+this.params.delta*this.direction;if(this.params.bSaveValue)this.params.input.value=t;if(!!e&&this.params.callback_start)this.params.callback_start(this.params,t,this.direction);if(this.params.callback_change)this.params.callback_change(this.params,t,this.direction);setTimeout(BX.proxy(this.ChangeValue,this),!!e?this.params.timeout_start:this.params.timeout_cont)}};BX.JCSpinner.prototype.MouseUp=function(){this.mousedown=false;BX.unbind(document,"mouseup",BX.proxy(this.MouseUp,this));if(this.params.callback_finish)this.params.callback_finish(this.params,this.params.input.value)};window.jsCalendar={Show:function(e,t,a,i,s,n,r,o){return BX.calendar({node:e,field:t,form:r,bTime:!!s,currentTime:n,bHideTimebar:!!o})},ValueToString:BX.calendar.ValueToString};BX.CClockSelector=function(e){this.params=e;this.params.popup_buttons=this.params.popup_buttons||[new BX.PopupWindowButton({text:BX.message("CAL_BUTTON"),className:"popup-window-button-create",events:{click:BX.proxy(this.setValue,this)}})];this.isReady=false;this.WND=new BX.PopupWindow(this.params.popup_id||"clock_selector_popup",this.params.node,this.params.popup_config||{titleBar:BX.message("CAL_TIME"),offsetLeft:-45,offsetTop:-135,autoHide:true,closeIcon:true,closeByEsc:true});this.SHOW=false;BX.addCustomEvent(this.WND,"onPopupClose",BX.delegate(this.onPopupClose,this));this.obClocks={};this.CLOCK_ID=this.params.clock_id||"clock_selector"};BX.CClockSelector.prototype.Show=function(){if(!this.isReady){BX.addCustomEvent("onClockRegister",BX.proxy(this.onClockRegister,this));return BX.ajax.get("/bitrix/tools/clock_selector.php",{start_time:this.params.start_time,clock_id:this.CLOCK_ID,sessid:BX.bitrix_sessid()},BX.delegate(this.Ready,this))}this.WND.setButtons(this.params.popup_buttons);this.WND.show();this.SHOW=true;if(window["bxClock_"+this.obClocks[this.CLOCK_ID]]){setTimeout("window['bxClock_"+this.obClocks[this.CLOCK_ID]+"'].CalculateCoordinates()",40)}return true};BX.CClockSelector.prototype.onClockRegister=function(e){if(e[this.CLOCK_ID]){this.obClocks[this.CLOCK_ID]=e[this.CLOCK_ID];BX.removeCustomEvent("onClockRegister",BX.proxy(this.onClockRegister,this))}};BX.CClockSelector.prototype.Ready=function(e){this.content=this.CreateContent(e);this.WND.setContent(this.content);this.isReady=true;setTimeout(BX.proxy(this.Show,this),30)};BX.CClockSelector.prototype.CreateContent=function(e){return BX.create("DIV",{events:{click:BX.PreventDefault},html:'<div class="bx-tm-popup-clock">'+e+"</div>"})};BX.CClockSelector.prototype.setValue=function(e){if(this.params.callback){var t=BX.findChild(this.content,{tagName:"INPUT"},true);this.params.callback.apply(this.params.node,[t.value])}return BX.PreventDefault(e)};BX.CClockSelector.prototype.closeWnd=function(e){this.WND.close();return e||window.event?BX.PreventDefault(e):true};BX.CClockSelector.prototype.setNode=function(e){this.WND.setBindElement(e)};BX.CClockSelector.prototype.setTime=function(e){this.params.start_time=e;if(window["bxClock_"+this.obClocks[this.CLOCK_ID]]){window["bxClock_"+this.obClocks[this.CLOCK_ID]].SetTime(parseInt(e/3600),parseInt(e%3600/60))}};BX.CClockSelector.prototype.setCallback=function(e){this.params.callback=e};BX.CClockSelector.prototype.onPopupClose=function(){this.SHOW=false}})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:44:"/bitrix/js/main/utils.min.js?164839769318721";s:6:"source";s:24:"/bitrix/js/main/utils.js";s:3:"min";s:28:"/bitrix/js/main/utils.min.js";s:3:"map";s:28:"/bitrix/js/main/utils.map.js";}"*/
var phpVars;if(!phpVars){phpVars={ADMIN_THEME_ID:".default",LANGUAGE_ID:"en",FORMAT_DATE:"DD.MM.YYYY",FORMAT_DATETIME:"DD.MM.YYYY HH:MI:SS",opt_context_ctrl:false,cookiePrefix:"BITRIX_SM",titlePrefix:"",bitrix_sessid:"",messHideMenu:"",messShowMenu:"",messHideButtons:"",messShowButtons:"",messFilterInactive:"",messFilterActive:"",messFilterLess:"",messLoading:"Loading...",messMenuLoading:"",messMenuLoadingTitle:"",messNoData:"",messExpandTabs:"",messCollapseTabs:"",messPanelFixOn:"",messPanelFixOff:"",messPanelCollapse:"",messPanelExpand:""}}var jsUtils={arEvents:Array(),addEvent:function(e,t,n,i){if(e.attachEvent)e.attachEvent("on"+t,n);else if(e.addEventListener)e.addEventListener(t,n,false);else e["on"+t]=n;this.arEvents[this.arEvents.length]={element:e,event:t,fn:n}},removeEvent:function(e,t,n){if(e.detachEvent)e.detachEvent("on"+t,n);else if(e.removeEventListener)e.removeEventListener(t,n,false);else e["on"+t]=null},removeAllEvents:function(e){var t;for(t=0;t<this.arEvents.length;t++){if(this.arEvents[t]&&(e==false||e==this.arEvents[t].element)){jsUtils.removeEvent(this.arEvents[t].element,this.arEvents[t].event,this.arEvents[t].fn);this.arEvents[t]=null}}if(e==false)this.arEvents.length=0},IsDoctype:function(){if(document.compatMode)return document.compatMode=="CSS1Compat";if(document.documentElement&&document.documentElement.clientHeight)return true;return false},GetRealPos:function(e){if(window.BX)return BX.pos(e);if(!e||!e.offsetParent)return false;var t=Array();t["left"]=e.offsetLeft;t["top"]=e.offsetTop;var n=e.offsetParent;while(n&&n.tagName!="BODY"){t["left"]+=n.offsetLeft;t["top"]+=n.offsetTop;n=n.offsetParent}t["right"]=t["left"]+e.offsetWidth;t["bottom"]=t["top"]+e.offsetHeight;return t},FindChildObject:function(e,t,n,i){if(!e)return null;var o=t.toUpperCase();var r=n?n.toLowerCase():null;var s=e.childNodes.length;for(var l=0;l<s;l++){var a=e.childNodes[l];if(a.tagName&&a.tagName.toUpperCase()==o)if(!n||a.className.toLowerCase()==r)return a;if(i==true){var f;if(f=jsUtils.FindChildObject(a,t,n,true))return f}}return null},FindParentObject:function(e,t,n){if(!e)return null;var i=e;var o=t.toUpperCase();var r=n?n.toLowerCase():null;while(i.parentNode){var s=i.parentNode;if(s.tagName&&s.tagName.toUpperCase()==o)if(!n||s.className.toLowerCase()==r)return s;i=s}return null},FindNextSibling:function(e,t){if(!e)return null;var n=e;var i=t.toUpperCase();while(n.nextSibling){var o=n.nextSibling;if(o.tagName&&o.tagName.toUpperCase()==i)return o;n=o}return null},FindPreviousSibling:function(e,t){if(!e)return null;var n=e;var i=t.toUpperCase();while(n.previousSibling){var o=n.previousSibling;if(o.tagName&&o.tagName.toUpperCase()==i)return o;n=o}return null},bOpera:navigator.userAgent.toLowerCase().indexOf("opera")!=-1,bIsIE:document.attachEvent&&navigator.userAgent.toLowerCase().indexOf("opera")==-1,IsIE:function(){return this.bIsIE},IsOpera:function(){return this.bOpera},IsSafari:function(){var e=navigator.userAgent.toLowerCase();return/webkit/.test(e)},IsEditor:function(){var e=navigator.userAgent.toLowerCase();var t=(e.match(/.+(msie)[\/: ]([\d.]+)/)||[])[2];var n=/webkit/.test(e);if(this.IsOpera()||document.all&&!document.compatMode&&t<6||n)return false;return true},ToggleDiv:function(e){var t=document.getElementById(e).style;if(t.display!="none")t.display="none";else t.display="block";return t.display!="none"},urlencode:function(e){return escape(e).replace(new RegExp("\\+","g"),"%2B")},OpenWindow:function(e,t,n){var i=screen.width,o=screen.height;if(this.IsOpera()){i=document.body.offsetWidth;o=document.body.offsetHeight}window.open(e,"","status=no,scrollbars=yes,resizable=yes,width="+t+",height="+n+",top="+Math.floor((o-n)/2-14)+",left="+Math.floor((i-t)/2-5))},SetPageTitle:function(e){document.title=phpVars.titlePrefix+e;var t=document.getElementsByTagName("H1");if(t)t[0].innerHTML=e},LoadPageToDiv:function(e,t){var n=document.getElementById(t);if(!n)return;CHttpRequest.Action=function(e){CloseWaitWindow();document.getElementById(t).innerHTML=e};ShowWaitWindow();CHttpRequest.Send(e)},trim:function(e){if(typeof e=="string"||typeof e=="object"&&e.constructor==String){var t,n;n=/^[\s\r\n]+/g;t=e.replace(n,"");n=/[\s\r\n]+$/g;t=t.replace(n,"");return t}else return e},Redirect:function(e,t){var n=null,i=false;if(e&&e.length>0)n=e[0];if(!n)n=window.event;if(n)i=n.shiftKey;if(i)window.open(t);else{window.location.href=t}},False:function(){return false},AlignToPos:function(e,t,n){var i=e["left"],o=e["bottom"];var r=jsUtils.GetWindowScrollPos();var s=jsUtils.GetWindowInnerSize();if(s.innerWidth+r.scrollLeft-(e["left"]+t)<0){if(e["right"]-t>=0)i=e["right"]-t;else i=r.scrollLeft}if(s.innerHeight+r.scrollTop-(e["bottom"]+n)<0){if(e["top"]-n>=0)o=e["top"]-n;else o=r.scrollTop}return{left:i,top:o}},EvalGlobal:function(e){try{if(window.execScript)window.execScript(e,"javascript");else if(jsUtils.IsSafari())window.setTimeout(e,0);else window.eval(e)}catch(e){}},GetStyleValue:function(e,t){var n;if(e.currentStyle)n=e.currentStyle[t];else if(window.getComputedStyle)n=document.defaultView.getComputedStyle(e,null).getPropertyValue(t);if(!n)n="";return n},GetWindowInnerSize:function(e){var t,n;if(!e)e=document;if(self.innerHeight){t=self.innerWidth;n=self.innerHeight}else if(e.documentElement&&(e.documentElement.clientHeight||e.documentElement.clientWidth)){t=e.documentElement.clientWidth;n=e.documentElement.clientHeight}else if(e.body){t=e.body.clientWidth;n=e.body.clientHeight}return{innerWidth:t,innerHeight:n}},GetWindowScrollPos:function(e){var t,n;if(!e)e=document;if(self.pageYOffset){t=self.pageXOffset;n=self.pageYOffset}else if(e.documentElement&&(e.documentElement.scrollTop||e.documentElement.scrollLeft)){t=document.documentElement.scrollLeft;n=document.documentElement.scrollTop}else if(e.body){t=e.body.scrollLeft;n=e.body.scrollTop}return{scrollLeft:t,scrollTop:n}},GetWindowScrollSize:function(e){var t,n;if(!e)e=document;if(e.compatMode&&e.compatMode=="CSS1Compat"){t=e.documentElement.scrollWidth;n=e.documentElement.scrollHeight}else{if(e.body.scrollHeight>e.body.offsetHeight)n=e.body.scrollHeight;else n=e.body.offsetHeight;if(e.body.scrollWidth>e.body.offsetWidth||e.compatMode&&e.compatMode=="BackCompat"||e.documentElement&&!e.documentElement.clientWidth)t=e.body.scrollWidth;else t=e.body.offsetWidth}return{scrollWidth:t,scrollHeight:n}},GetWindowSize:function(){var e=jsUtils.GetWindowInnerSize();var t=jsUtils.GetWindowScrollPos();var n=jsUtils.GetWindowScrollSize();return{innerWidth:e.innerWidth,innerHeight:e.innerHeight,scrollLeft:t.scrollLeft,scrollTop:t.scrollTop,scrollWidth:n.scrollWidth,scrollHeight:n.scrollHeight}},arCustomEvents:{},addCustomEvent:function(e,t,n,i){if(!this.arCustomEvents[e])this.arCustomEvents[e]=[];if(!n)n=[];if(!i)i=false;this.arCustomEvents[e].push({handler:t,arParams:n,obj:i})},removeCustomEvent:function(e,t){if(!this.arCustomEvents[e])return;var n=this.arCustomEvents[e].length;if(n==1){delete this.arCustomEvents[e];return}for(var i=0;i<n;i++){if(!this.arCustomEvents[e][i])continue;if(this.arCustomEvents[e][i].handler==t){delete this.arCustomEvents[e][i];return}}},onCustomEvent:function(e,t){if(!this.arCustomEvents[e])return;if(!t)t=[];var n;for(var i=0,o=this.arCustomEvents[e].length;i<o;i++){n=this.arCustomEvents[e][i];if(!n||!n.handler)continue;if(n.obj)n.handler.call(n.obj,n.arParams,t);else n.handler(n.arParams,t)}},loadJSFile:function(e,t,n){if(!n)n=document;if(typeof e=="string")e=[e];var i=function(){if(!t)return;if(typeof t=="function")return t();if(typeof t!="object"||!t.func)return;var e=t.params||{};if(t.obj)t.func.apply(t.obj,e);else t.func(e)};var o=function(t){if(t>=e.length)return i();var r=n.body.appendChild(n.createElement("script"));r.src=e[t];var s=false;r.onload=r.onreadystatechange=function(){if(!s&&(!r.readyState||r.readyState=="loaded"||r.readyState=="complete")){s=true;setTimeout(function(){o(++t)},50)}}};o(0)},loadCSSFile:function(e,t,n){if(typeof e=="string"){var i=true;e=[e]}var o,r=e.length,s=[];if(r==0)return;if(!t)t=document;if(!n)n=window;if(!n.bxhead){var l=t.getElementsByTagName("HEAD");n.bxhead=l[0]}if(!n.bxhead)return;for(o=0;o<r;o++){var a=document.createElement("LINK");a.href=e[o];a.rel="stylesheet";a.type="text/css";n.bxhead.appendChild(a);s.push(a)}if(i)return a;return s},appendBXHint:function(e,t){if(!e||!e.parentNode||!t)return;var n=new BXHint(t);e.parentNode.insertBefore(n.oIcon,e);e.parentNode.removeChild(e);n.oIcon.style.marginLeft="5px"},PreventDefault:function(e){if(!e)e=window.event;if(e.stopPropagation){e.preventDefault();e.stopPropagation()}else{e.cancelBubble=true;e.returnValue=false}return false},CreateElement:function(e,t,n,i){if(!i)i=document;var o=i.createElement(e),r;if(t){for(r in t){if(r=="className"||r=="class"){o.setAttribute("class",t[r]);if(jsUtils.IsIE())o.setAttribute("className",t[r]);continue}if(t[r]!=undefined&&t[r]!=null)o.setAttribute(r,t[r])}}if(n){for(r in n)o.style[r]=n[r]}return o},in_array:function(e,t){for(var n=0;n<t.length;n++){if(t[n]==e)return true}return false},htmlspecialchars:function(e){if(!e.replace)return e;return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}};function JCFloatDiv(){var e=this;this.floatDiv=null;this.x=this.y=0;this.Create=function(e){var t=document.body.appendChild(document.createElement("DIV"));t.id=e.id;t.style.position="absolute";t.style.left="-10000px";t.style.top="-10000px";if(e.className)t.className=e.className;if(e.zIndex)t.style.zIndex=e.zIndex;if(e.width)t.style.width=e.width+"px";if(e.height)t.style.height=e.height+"px";return t};this.Show=function(e,t,n,i,o){var r=BX.ZIndexManager.getComponent(e);if(!r){BX.ZIndexManager.register(e)}BX.ZIndexManager.bringToFront(e);if(t<0)t=0;if(n<0)n=0;e.style.left=parseInt(t)+"px";e.style.top=parseInt(n)+"px";e.restrictDrag=o||false;if(isNaN(i))i=5;e.dxShadow=i};this.Close=function(e){if(!e)return;var t=document.getElementById(e.id+"_shadow");if(t)t.style.visibility="hidden";var n=document.getElementById(e.id+"_frame");if(n)n.style.visibility="hidden"};this.Move=function(e,t,n){if(!e)return;var i=e.dxShadow;var o=parseInt(e.style.left)+t;var r=parseInt(e.style.top)+n;if(e.restrictDrag){if(o<0)o=0;if(document.compatMode&&document.compatMode=="CSS1Compat")windowWidth=document.documentElement.scrollWidth;else{if(document.body.scrollWidth>document.body.offsetWidth||document.compatMode&&document.compatMode=="BackCompat"||document.documentElement&&!document.documentElement.clientWidth)windowWidth=document.body.scrollWidth;else windowWidth=document.body.offsetWidth}var s=e.offsetWidth;if(o>windowWidth-s-i)o=windowWidth-s-i;if(r<0)r=0}e.style.left=o+"px";e.style.top=r+"px";this.AdjustShadow(e)};this.HideShadow=function(e){var t=document.getElementById(e.id+"_shadow");t.style.visibility="hidden"};this.UnhideShadow=function(e){var t=document.getElementById(e.id+"_shadow");t.style.visibility="visible"};this.AdjustShadow=function(e){var t=document.getElementById(e.id+"_shadow");if(t&&t.style.visibility!="hidden"){var n=e.dxShadow;t.style.width=e.offsetWidth+"px";t.style.height=e.offsetHeight+"px";t.style.left=parseInt(e.style.left)+n+"px";t.style.top=parseInt(e.style.top)+n+"px"}var i=document.getElementById(e.id+"_frame");if(i){i.style.width=e.offsetWidth+"px";i.style.height=e.offsetHeight+"px";i.style.left=e.style.left;i.style.top=e.style.top}};this.StartDrag=function(t,n){if(!t)t=window.event;this.x=t.clientX+document.body.scrollLeft;this.y=t.clientY+document.body.scrollTop;this.floatDiv=n;jsUtils.addEvent(document,"mousemove",this.MoveDrag);document.onmouseup=this.StopDrag;if(document.body.setCapture)document.body.setCapture();document.onmousedown=jsUtils.False;var i=document.body;i.ondrag=jsUtils.False;i.onselectstart=jsUtils.False;i.style.MozUserSelect=e.floatDiv.style.MozUserSelect="none";i.style.cursor="move"};this.StopDrag=function(t){if(document.body.releaseCapture)document.body.releaseCapture();jsUtils.removeEvent(document,"mousemove",e.MoveDrag);document.onmouseup=null;this.floatDiv=null;document.onmousedown=null;var n=document.body;n.ondrag=null;n.onselectstart=null;n.style.MozUserSelect=e.floatDiv.style.MozUserSelect="";n.style.cursor=""};this.MoveDrag=function(t){var n=t.clientX+document.body.scrollLeft;var i=t.clientY+document.body.scrollTop;if(e.x==n&&e.y==i)return;e.Move(e.floatDiv,n-e.x,i-e.y);e.x=n;e.y=i}}var jsFloatDiv=new JCFloatDiv;var BXHint=function(e,t,n){this.oDivOver=false;this.timeOutID=null;this.oIcon=null;this.freeze=false;this.x=0;this.y=0;this.time=700;if(!e)e="";this.Create(e,t,n)};BXHint.prototype.Create=function(e,t,n){var i=this,o=0,r=0,s=null,l="icon";this.bWidth=true;if(n){if(n.width===false)this.bWidth=false;else if(n.width)o=n.width;if(n.height)r=n.height;if(n.className)s=n.className;if(n.type&&(n.type=="link"||n.type=="icon"))l=n.type;if(n.time>0)this.time=n.time}if(t)l="element";if(l=="icon"){var t=document.createElement("IMG");t.src=n&&n.iconSrc?n.iconSrc:"/bitrix/themes/"+phpVars.ADMIN_THEME_ID+"/public/popup/hint.gif";t.ondrag=jsUtils.False}else if(l=="link"){var t=document.createElement("A");t.href="";t.onclick=function(e){return false};t.innerHTML="[?]"}this.element=t;if(l=="element"){if(n&&n.show_on_click){jsUtils.addEvent(t,"click",function(t){if(!t)t=window.event;i.GetMouseXY(t);i.timeOutID=setTimeout(function(){i.Show(e,o,r,s)},10)})}else{jsUtils.addEvent(t,"mouseover",function(t){if(!t)t=window.event;i.GetMouseXY(t);i.timeOutID=setTimeout(function(){i.Show(e,o,r,s)},750)})}jsUtils.addEvent(t,"mouseout",function(e){if(i.timeOutID)clearTimeout(i.timeOutID);i.SmartHide(i)})}else{this.oIcon=t;t.onmouseover=function(t){if(!t)t=window.event;i.GetMouseXY(t);i.Show(e,o,r,s)};t.onmouseout=function(){i.SmartHide(i)}}};BXHint.prototype.IsFrozen=function(){return this.freeze};BXHint.prototype.Freeze=function(){this.freeze=true;this.Hide()};BXHint.prototype.UnFreeze=function(){this.freeze=false};BXHint.prototype.GetMouseXY=function(e){if(e.pageX||e.pageY){this.x=e.pageX;this.y=e.pageY}else if(e.clientX||e.clientY){this.x=e.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft)-document.documentElement.clientLeft;this.y=e.clientY+(document.documentElement.scrollTop||document.body.scrollTop)-document.documentElement.clientTop}};BXHint.prototype.Show=function(e,t,n,i){var o=document.getElementById("__BXHint_div");if(o)this.Hide();if(this.freeze)return;var r=this;var s=document.body.appendChild(document.createElement("DIV"));s.onmouseover=function(){r.oDivOver=true};s.onmouseout=function(){r.oDivOver=false;r.SmartHide(r)};s.id="__BXHint_div";s.className=i?i:"bxhint";s.style.position="absolute";if(t&&this.bWidth)s.style.width=t+"px";if(n)s.style.height=n+"px";s.innerHTML=e;var l=s.offsetWidth;var a=s.offsetHeight;if(this.bWidth){if(!t&&l>200)l=Math.round(Math.sqrt(1.618*l*a));s.style.width=l+"px";a=s.offsetHeight}var f={left:this.x+10,right:this.x+l,top:this.y,bottom:this.y+a};f=this.AlignToPos(f,l,a);jsFloatDiv.Show(s,f.left,f.top,3);s=null};BXHint.prototype.AlignToPos=function(e,t,n){var i=document.body;if(i.clientWidth+i.scrollLeft<e.left+t)e.left=e.left-t>=0?e.left-t:i.scrollLeft;if(i.clientHeight+i.scrollTop-e["bottom"]<0)e.top=e.top-n>=0?e.top-n:i.scrollTop;return e};BXHint.prototype.Hide=function(){var e=document.getElementById("__BXHint_div");if(!e)return;BX.ZIndexManager.unregister(e);jsFloatDiv.Close(e);e.parentNode.removeChild(e);e=null};BXHint.prototype.SmartHide=function(e){setTimeout(function(){if(!e.oDivOver)e.Hide()},100)};function WaitOnKeyPress(e){if(!e)e=window.event;if(!e)return;if(e.keyCode==27)CloseWaitWindow()}function ShowWaitWindow(){CloseWaitWindow();var e=jsUtils.GetWindowSize();var t=document.body.appendChild(document.createElement("DIV"));t.id="wait_window_div";t.innerHTML=phpVars.messLoading;t.className="waitwindow";t.style.right=5-e.scrollLeft+"px";t.style.top=e.scrollTop+5+"px";if(jsUtils.IsIE()){var n=document.createElement("IFRAME");n.src="javascript:''";n.id="wait_window_frame";n.className="waitwindow";n.style.width=t.offsetWidth+"px";n.style.height=t.offsetHeight+"px";n.style.right=t.style.right;n.style.top=t.style.top;document.body.appendChild(n)}jsUtils.addEvent(document,"keypress",WaitOnKeyPress)}function CloseWaitWindow(){jsUtils.removeEvent(document,"keypress",WaitOnKeyPress);var e=document.getElementById("wait_window_frame");if(e)e.parentNode.removeChild(e);var t=document.getElementById("wait_window_div");if(t)t.parentNode.removeChild(t)}var jsSelectUtils={addNewOption:function(e,t,n,i,o){var r=typeof e=="string"||e instanceof String?document.getElementById(e):e;if(r){var s=r.length;if(o!==false){for(var l=0;l<s;l++)if(r[l].value==t)return}var a=new Option(n,t,false,false);r.options[s]=a}if(i===true)this.sortSelect(e)},deleteOption:function(e,t){var n=typeof e=="string"||e instanceof String?document.getElementById(e):e;if(n){for(var i=0;i<n.length;i++)if(n[i].value==t){n.remove(i);break}}},deleteSelectedOptions:function(e){var t=typeof e=="string"||e instanceof String?document.getElementById(e):e;if(t){var n=0;while(n<t.length)if(t[n].selected){t[n].selected=false;t.remove(n)}else n++}},deleteAllOptions:function(e){if(e){for(var t=e.length-1;t>=0;t--)e.remove(t)}},optionCompare:function(e,t){var n=e.optText.toLowerCase();var i=t.optText.toLowerCase();if(n>i)return 1;if(n<i)return-1;return 0},sortSelect:function(e){var t=typeof e=="string"||e instanceof String?document.getElementById(e):e;if(t){var n=[];var i=t.options.length;for(var o=0;o<i;o++){n[o]={optText:t[o].text,optValue:t[o].value}}n.sort(this.optionCompare);t.length=0;i=n.length;for(var o=0;o<i;o++){var r=new Option(n[o].optText,n[o].optValue,false,false);t[o]=r}}},selectAllOptions:function(e){var t=typeof e=="string"||e instanceof String?document.getElementById(e):e;if(t){var n=t.length;for(var i=0;i<n;i++)t[i].selected=true}},selectOption:function(e,t){var n=typeof e=="string"||e instanceof String?document.getElementById(e):e;if(n){var i=n.length;for(var o=0;o<i;o++)n[o].selected=n[o].value==t}},addSelectedOptions:function(e,t,n,i){if(!e)return;var o=e.length;for(var r=0;r<o;r++)if(e[r].selected)this.addNewOption(t,e[r].value,e[r].text,i,n)},moveOptionsUp:function(e){if(!e)return;var t=e.length;for(var n=0;n<t;n++){if(e[n].selected&&n>0&&e[n-1].selected==false){var i=new Option(e[n].text,e[n].value);var o=new Option(e[n-1].text,e[n-1].value);e[n]=o;e[n].selected=false;e[n-1]=i;e[n-1].selected=true}}},moveOptionsDown:function(e){if(!e)return;var t=e.length;for(var n=t-1;n>=0;n--){if(e[n].selected&&n<t-1&&e[n+1].selected==false){var i=new Option(e[n].text,e[n].value);var o=new Option(e[n+1].text,e[n+1].value);e[n]=o;e[n].selected=false;e[n+1]=i;e[n+1].selected=true}}}};
/* End */
;
//# sourceMappingURL=kernel_main.map.js