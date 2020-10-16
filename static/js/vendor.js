(function(){
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
;if(typeof jQuery=="undefined")throw new Error("Bootstrap's JavaScript requires jQuery");+function(e){"use strict";var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||t[0]==1&&t[1]==9&&t[2]<1||t[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(e){"use strict";function t(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in t)if(e.style[n]!==undefined)return{end:t[n]};return!1}e.fn.emulateTransitionEnd=function(t){var n=!1,r=this;e(this).one("bsTransitionEnd",function(){n=!0});var i=function(){n||e(r).trigger(e.support.transition.end)};return setTimeout(i,t),this},e(function(){e.support.transition=t();if(!e.support.transition)return;e.event.special.bsTransitionEnd={bindType:e.support.transition.end,delegateType:e.support.transition.end,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}}})}(jQuery),+function(e){"use strict";function r(t){return this.each(function(){var r=e(this),i=r.data("bs.alert");i||r.data("bs.alert",i=new n(this)),typeof t=="string"&&i[t].call(r)})}var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.VERSION="3.3.7",n.TRANSITION_DURATION=150,n.prototype.close=function(t){function o(){s.detach().trigger("closed.bs.alert").remove()}var r=e(this),i=r.attr("data-target");i||(i=r.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,""));var s=e(i==="#"?[]:i);t&&t.preventDefault(),s.length||(s=r.closest(".alert")),s.trigger(t=e.Event("close.bs.alert"));if(t.isDefaultPrevented())return;s.removeClass("in"),e.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",o).emulateTransitionEnd(n.TRANSITION_DURATION):o()};var i=e.fn.alert;e.fn.alert=r,e.fn.alert.Constructor=n,e.fn.alert.noConflict=function(){return e.fn.alert=i,this},e(document).on("click.bs.alert.data-api",t,n.prototype.close)}(jQuery),+function(e){"use strict";function n(n){return this.each(function(){var r=e(this),i=r.data("bs.button"),s=typeof n=="object"&&n;i||r.data("bs.button",i=new t(this,s)),n=="toggle"?i.toggle():n&&i.setState(n)})}var t=function(n,r){this.$element=e(n),this.options=e.extend({},t.DEFAULTS,r),this.isLoading=!1};t.VERSION="3.3.7",t.DEFAULTS={loadingText:"loading..."},t.prototype.setState=function(t){var n="disabled",r=this.$element,i=r.is("input")?"val":"html",s=r.data();t+="Text",s.resetText==null&&r.data("resetText",r[i]()),setTimeout(e.proxy(function(){r[i](s[t]==null?this.options[t]:s[t]),t=="loadingText"?(this.isLoading=!0,r.addClass(n).attr(n,n).prop(n,!0)):this.isLoading&&(this.isLoading=!1,r.removeClass(n).removeAttr(n).prop(n,!1))},this),0)},t.prototype.toggle=function(){var e=!0,t=this.$element.closest('[data-toggle="buttons"]');if(t.length){var n=this.$element.find("input");n.prop("type")=="radio"?(n.prop("checked")&&(e=!1),t.find(".active").removeClass("active"),this.$element.addClass("active")):n.prop("type")=="checkbox"&&(n.prop("checked")!==this.$element.hasClass("active")&&(e=!1),this.$element.toggleClass("active")),n.prop("checked",this.$element.hasClass("active")),e&&n.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var r=e.fn.button;e.fn.button=n,e.fn.button.Constructor=t,e.fn.button.noConflict=function(){return e.fn.button=r,this},e(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(t){var r=e(t.target).closest(".btn");n.call(r,"toggle"),e(t.target).is('input[type="radio"], input[type="checkbox"]')||(t.preventDefault(),r.is("input,button")?r.trigger("focus"):r.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){e(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery),+function(e){"use strict";function n(n){return this.each(function(){var r=e(this),i=r.data("bs.carousel"),s=e.extend({},t.DEFAULTS,r.data(),typeof n=="object"&&n),o=typeof n=="string"?n:s.slide;i||r.data("bs.carousel",i=new t(this,s)),typeof n=="number"?i.to(n):o?i[o]():s.interval&&i.pause().cycle()})}var t=function(t,n){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",e.proxy(this.keydown,this)),this.options.pause=="hover"&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",e.proxy(this.pause,this)).on("mouseleave.bs.carousel",e.proxy(this.cycle,this))};t.VERSION="3.3.7",t.TRANSITION_DURATION=600,t.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},t.prototype.keydown=function(e){if(/input|textarea/i.test(e.target.tagName))return;switch(e.which){case 37:this.prev();break;case 39:this.next();break;default:return}e.preventDefault()},t.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},t.prototype.getItemIndex=function(e){return this.$items=e.parent().children(".item"),this.$items.index(e||this.$active)},t.prototype.getItemForDirection=function(e,t){var n=this.getItemIndex(t),r=e=="prev"&&n===0||e=="next"&&n==this.$items.length-1;if(r&&!this.options.wrap)return t;var i=e=="prev"?-1:1,s=(n+i)%this.$items.length;return this.$items.eq(s)},t.prototype.to=function(e){var t=this,n=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(e>this.$items.length-1||e<0)return;return this.sliding?this.$element.one("slid.bs.carousel",function(){t.to(e)}):n==e?this.pause().cycle():this.slide(e>n?"next":"prev",this.$items.eq(e))},t.prototype
.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},t.prototype.next=function(){if(this.sliding)return;return this.slide("next")},t.prototype.prev=function(){if(this.sliding)return;return this.slide("prev")},t.prototype.slide=function(n,r){var i=this.$element.find(".item.active"),s=r||this.getItemForDirection(n,i),o=this.interval,u=n=="next"?"left":"right",a=this;if(s.hasClass("active"))return this.sliding=!1;var f=s[0],l=e.Event("slide.bs.carousel",{relatedTarget:f,direction:u});this.$element.trigger(l);if(l.isDefaultPrevented())return;this.sliding=!0,o&&this.pause();if(this.$indicators.length){this.$indicators.find(".active").removeClass("active");var c=e(this.$indicators.children()[this.getItemIndex(s)]);c&&c.addClass("active")}var h=e.Event("slid.bs.carousel",{relatedTarget:f,direction:u});return e.support.transition&&this.$element.hasClass("slide")?(s.addClass(n),s[0].offsetWidth,i.addClass(u),s.addClass(u),i.one("bsTransitionEnd",function(){s.removeClass([n,u].join(" ")).addClass("active"),i.removeClass(["active",u].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger(h)},0)}).emulateTransitionEnd(t.TRANSITION_DURATION)):(i.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(h)),o&&this.cycle(),this};var r=e.fn.carousel;e.fn.carousel=n,e.fn.carousel.Constructor=t,e.fn.carousel.noConflict=function(){return e.fn.carousel=r,this};var i=function(t){var r,i=e(this),s=e(i.attr("data-target")||(r=i.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,""));if(!s.hasClass("carousel"))return;var o=e.extend({},s.data(),i.data()),u=i.attr("data-slide-to");u&&(o.interval=!1),n.call(s,o),u&&s.data("bs.carousel").to(u),t.preventDefault()};e(document).on("click.bs.carousel.data-api","[data-slide]",i).on("click.bs.carousel.data-api","[data-slide-to]",i),e(window).on("load",function(){e('[data-ride="carousel"]').each(function(){var t=e(this);n.call(t,t.data())})})}(jQuery),+function(e){"use strict";function n(t){var n,r=t.attr("data-target")||(n=t.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"");return e(r)}function r(n){return this.each(function(){var r=e(this),i=r.data("bs.collapse"),s=e.extend({},t.DEFAULTS,r.data(),typeof n=="object"&&n);!i&&s.toggle&&/show|hide/.test(n)&&(s.toggle=!1),i||r.data("bs.collapse",i=new t(this,s)),typeof n=="string"&&i[n]()})}var t=function(n,r){this.$element=e(n),this.options=e.extend({},t.DEFAULTS,r),this.$trigger=e('[data-toggle="collapse"][href="#'+n.id+'"],'+'[data-toggle="collapse"][data-target="#'+n.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};t.VERSION="3.3.7",t.TRANSITION_DURATION=350,t.DEFAULTS={toggle:!0},t.prototype.dimension=function(){var e=this.$element.hasClass("width");return e?"width":"height"},t.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in"))return;var n,i=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(i&&i.length){n=i.data("bs.collapse");if(n&&n.transitioning)return}var s=e.Event("show.bs.collapse");this.$element.trigger(s);if(s.isDefaultPrevented())return;i&&i.length&&(r.call(i,"hide"),n||i.data("bs.collapse",null));var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var u=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!e.support.transition)return u.call(this);var a=e.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",e.proxy(u,this)).emulateTransitionEnd(t.TRANSITION_DURATION)[o](this.$element[0][a])},t.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in"))return;var n=e.Event("hide.bs.collapse");this.$element.trigger(n);if(n.isDefaultPrevented())return;var r=this.dimension();this.$element[r](this.$element[r]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!e.support.transition)return i.call(this);this.$element[r](0).one("bsTransitionEnd",e.proxy(i,this)).emulateTransitionEnd(t.TRANSITION_DURATION)},t.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},t.prototype.getParent=function(){return e(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(e.proxy(function(t,r){var i=e(r);this.addAriaAndCollapsedClass(n(i),i)},this)).end()},t.prototype.addAriaAndCollapsedClass=function(e,t){var n=e.hasClass("in");e.attr("aria-expanded",n),t.toggleClass("collapsed",!n).attr("aria-expanded",n)};var i=e.fn.collapse;e.fn.collapse=r,e.fn.collapse.Constructor=t,e.fn.collapse.noConflict=function(){return e.fn.collapse=i,this},e(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var i=e(this);i.attr("data-target")||t.preventDefault();var s=n(i),o=s.data("bs.collapse"),u=o?"toggle":i.data();r.call(s,u)})}(jQuery),+function(e){"use strict";function i(t){var n=t.attr("data-target");n||(n=t.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));var r=n&&e(n);return r&&r.length?r:t.parent()}function s(r){if(r&&r.which===3)return;e(t).remove(),e(n).each(function(){var t=e(this),n=i(t),s={relatedTarget:this};if(!n.hasClass("open"))return;if(r&&r.type=="click"&&/input|textarea/i.test(r.target.tagName)&&e.contains(n[0],r.target))return;n.trigger(r=e.Event("hide.bs.dropdown",s));if(r.isDefaultPrevented())return;
t.attr("aria-expanded","false"),n.removeClass("open").trigger(e.Event("hidden.bs.dropdown",s))})}function o(t){return this.each(function(){var n=e(this),i=n.data("bs.dropdown");i||n.data("bs.dropdown",i=new r(this)),typeof t=="string"&&i[t].call(n)})}var t=".dropdown-backdrop",n='[data-toggle="dropdown"]',r=function(t){e(t).on("click.bs.dropdown",this.toggle)};r.VERSION="3.3.7",r.prototype.toggle=function(t){var n=e(this);if(n.is(".disabled, :disabled"))return;var r=i(n),o=r.hasClass("open");s();if(!o){"ontouchstart"in document.documentElement&&!r.closest(".navbar-nav").length&&e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click",s);var u={relatedTarget:this};r.trigger(t=e.Event("show.bs.dropdown",u));if(t.isDefaultPrevented())return;n.trigger("focus").attr("aria-expanded","true"),r.toggleClass("open").trigger(e.Event("shown.bs.dropdown",u))}return!1},r.prototype.keydown=function(t){if(!/(38|40|27|32)/.test(t.which)||/input|textarea/i.test(t.target.tagName))return;var r=e(this);t.preventDefault(),t.stopPropagation();if(r.is(".disabled, :disabled"))return;var s=i(r),o=s.hasClass("open");if(!o&&t.which!=27||o&&t.which==27)return t.which==27&&s.find(n).trigger("focus"),r.trigger("click");var u=" li:not(.disabled):visible a",a=s.find(".dropdown-menu"+u);if(!a.length)return;var f=a.index(t.target);t.which==38&&f>0&&f--,t.which==40&&f<a.length-1&&f++,~f||(f=0),a.eq(f).trigger("focus")};var u=e.fn.dropdown;e.fn.dropdown=o,e.fn.dropdown.Constructor=r,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=u,this},e(document).on("click.bs.dropdown.data-api",s).on("click.bs.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.bs.dropdown.data-api",n,r.prototype.toggle).on("keydown.bs.dropdown.data-api",n,r.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",r.prototype.keydown)}(jQuery),+function(e){"use strict";function n(n,r){return this.each(function(){var i=e(this),s=i.data("bs.modal"),o=e.extend({},t.DEFAULTS,i.data(),typeof n=="object"&&n);s||i.data("bs.modal",s=new t(this,o)),typeof n=="string"?s[n](r):o.show&&s.show(r)})}var t=function(t,n){this.options=n,this.$body=e(document.body),this.$element=e(t),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,e.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};t.VERSION="3.3.7",t.TRANSITION_DURATION=300,t.BACKDROP_TRANSITION_DURATION=150,t.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},t.prototype.toggle=function(e){return this.isShown?this.hide():this.show(e)},t.prototype.show=function(n){var r=this,i=e.Event("show.bs.modal",{relatedTarget:n});this.$element.trigger(i);if(this.isShown||i.isDefaultPrevented())return;this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',e.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){r.$element.one("mouseup.dismiss.bs.modal",function(t){e(t.target).is(r.$element)&&(r.ignoreBackdropClick=!0)})}),this.backdrop(function(){var i=e.support.transition&&r.$element.hasClass("fade");r.$element.parent().length||r.$element.appendTo(r.$body),r.$element.show().scrollTop(0),r.adjustDialog(),i&&r.$element[0].offsetWidth,r.$element.addClass("in"),r.enforceFocus();var s=e.Event("shown.bs.modal",{relatedTarget:n});i?r.$dialog.one("bsTransitionEnd",function(){r.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(t.TRANSITION_DURATION):r.$element.trigger("focus").trigger(s)})},t.prototype.hide=function(n){n&&n.preventDefault(),n=e.Event("hide.bs.modal"),this.$element.trigger(n);if(!this.isShown||n.isDefaultPrevented())return;this.isShown=!1,this.escape(),this.resize(),e(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),e.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",e.proxy(this.hideModal,this)).emulateTransitionEnd(t.TRANSITION_DURATION):this.hideModal()},t.prototype.enforceFocus=function(){e(document).off("focusin.bs.modal").on("focusin.bs.modal",e.proxy(function(e){document!==e.target&&this.$element[0]!==e.target&&!this.$element.has(e.target).length&&this.$element.trigger("focus")},this))},t.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",e.proxy(function(e){e.which==27&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},t.prototype.resize=function(){this.isShown?e(window).on("resize.bs.modal",e.proxy(this.handleUpdate,this)):e(window).off("resize.bs.modal")},t.prototype.hideModal=function(){var e=this;this.$element.hide(),this.backdrop(function(){e.$body.removeClass("modal-open"),e.resetAdjustments(),e.resetScrollbar(),e.$element.trigger("hidden.bs.modal")})},t.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},t.prototype.backdrop=function(n){var r=this,i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=e.support.transition&&i;this.$backdrop=e(document.createElement("div")).addClass("modal-backdrop "+i).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",e.proxy(function(e){if(this.ignoreBackdropClick){this.ignoreBackdropClick=!1;return}if(e.target!==e.currentTarget)return;this.options.backdrop=="static"?this.$element[0].focus():this.hide()},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!n)return;s?this.$backdrop.one("bsTransitionEnd",n).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION):n()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var o=function(){r.removeBackdrop(),
n&&n()};e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",o).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION):o()}else n&&n()},t.prototype.handleUpdate=function(){this.adjustDialog()},t.prototype.adjustDialog=function(){var e=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&e?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!e?this.scrollbarWidth:""})},t.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},t.prototype.checkScrollbar=function(){var e=window.innerWidth;if(!e){var t=document.documentElement.getBoundingClientRect();e=t.right-Math.abs(t.left)}this.bodyIsOverflowing=document.body.clientWidth<e,this.scrollbarWidth=this.measureScrollbar()},t.prototype.setScrollbar=function(){var e=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",e+this.scrollbarWidth)},t.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},t.prototype.measureScrollbar=function(){var e=document.createElement("div");e.className="modal-scrollbar-measure",this.$body.append(e);var t=e.offsetWidth-e.clientWidth;return this.$body[0].removeChild(e),t};var r=e.fn.modal;e.fn.modal=n,e.fn.modal.Constructor=t,e.fn.modal.noConflict=function(){return e.fn.modal=r,this},e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var r=e(this),i=r.attr("href"),s=e(r.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),o=s.data("bs.modal")?"toggle":e.extend({remote:!/#/.test(i)&&i},s.data(),r.data());r.is("a")&&t.preventDefault(),s.one("show.bs.modal",function(e){if(e.isDefaultPrevented())return;s.one("hidden.bs.modal",function(){r.is(":visible")&&r.trigger("focus")})}),n.call(s,o,this)})}(jQuery),+function(e){"use strict";function n(n){return this.each(function(){var r=e(this),i=r.data("bs.tooltip"),s=typeof n=="object"&&n;if(!i&&/destroy|hide/.test(n))return;i||r.data("bs.tooltip",i=new t(this,s)),typeof n=="string"&&i[n]()})}var t=function(e,t){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",e,t)};t.VERSION="3.3.7",t.TRANSITION_DURATION=150,t.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},t.prototype.init=function(t,n,r){this.enabled=!0,this.type=t,this.$element=e(n),this.options=this.getOptions(r),this.$viewport=this.options.viewport&&e(e.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1};if(this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");var i=this.options.trigger.split(" ");for(var s=i.length;s--;){var o=i[s];if(o=="click")this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this));else if(o!="manual"){var u=o=="hover"?"mouseenter":"focusin",a=o=="hover"?"mouseleave":"focusout";this.$element.on(u+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(a+"."+this.type,this.options.selector,e.proxy(this.leave,this))}}this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},t.prototype.getDefaults=function(){return t.DEFAULTS},t.prototype.getOptions=function(t){return t=e.extend({},this.getDefaults(),this.$element.data(),t),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t},t.prototype.getDelegateOptions=function(){var t={},n=this.getDefaults();return this._options&&e.each(this._options,function(e,r){n[e]!=r&&(t[e]=r)}),t},t.prototype.enter=function(t){var n=t instanceof this.constructor?t:e(t.currentTarget).data("bs."+this.type);n||(n=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,n)),t instanceof e.Event&&(n.inState[t.type=="focusin"?"focus":"hover"]=!0);if(n.tip().hasClass("in")||n.hoverState=="in"){n.hoverState="in";return}clearTimeout(n.timeout),n.hoverState="in";if(!n.options.delay||!n.options.delay.show)return n.show();n.timeout=setTimeout(function(){n.hoverState=="in"&&n.show()},n.options.delay.show)},t.prototype.isInStateTrue=function(){for(var e in this.inState)if(this.inState[e])return!0;return!1},t.prototype.leave=function(t){var n=t instanceof this.constructor?t:e(t.currentTarget).data("bs."+this.type);n||(n=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,n)),t instanceof e.Event&&(n.inState[t.type=="focusout"?"focus":"hover"]=!1);if(n.isInStateTrue())return;clearTimeout(n.timeout),n.hoverState="out";if(!n.options.delay||!n.options.delay.hide)return n.hide();n.timeout=setTimeout(function(){n.hoverState=="out"&&n.hide()},n.options.delay.hide)},t.prototype.show=function(){var n=e.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(n);var r=e.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(n.isDefaultPrevented()||!r)return;var i=this,s=this.tip(),o=this.getUID(this.type);this.setContent(),s.attr("id",o),this.$element.attr("aria-describedby",o),this.options.animation&&s.addClass("fade");var u=typeof this.options.placement=="function"?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,f=a.test(u);f&&(u=u.replace(a,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(u).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.
insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var l=this.getPosition(),c=s[0].offsetWidth,h=s[0].offsetHeight;if(f){var p=u,d=this.getPosition(this.$viewport);u=u=="bottom"&&l.bottom+h>d.bottom?"top":u=="top"&&l.top-h<d.top?"bottom":u=="right"&&l.right+c>d.width?"left":u=="left"&&l.left-c<d.left?"right":u,s.removeClass(p).addClass(u)}var v=this.getCalculatedOffset(u,l,c,h);this.applyPlacement(v,u);var m=function(){var e=i.hoverState;i.$element.trigger("shown.bs."+i.type),i.hoverState=null,e=="out"&&i.leave(i)};e.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",m).emulateTransitionEnd(t.TRANSITION_DURATION):m()}},t.prototype.applyPlacement=function(t,n){var r=this.tip(),i=r[0].offsetWidth,s=r[0].offsetHeight,o=parseInt(r.css("margin-top"),10),u=parseInt(r.css("margin-left"),10);isNaN(o)&&(o=0),isNaN(u)&&(u=0),t.top+=o,t.left+=u,e.offset.setOffset(r[0],e.extend({using:function(e){r.css({top:Math.round(e.top),left:Math.round(e.left)})}},t),0),r.addClass("in");var a=r[0].offsetWidth,f=r[0].offsetHeight;n=="top"&&f!=s&&(t.top=t.top+s-f);var l=this.getViewportAdjustedDelta(n,t,a,f);l.left?t.left+=l.left:t.top+=l.top;var c=/top|bottom/.test(n),h=c?l.left*2-i+a:l.top*2-s+f,p=c?"offsetWidth":"offsetHeight";r.offset(t),this.replaceArrow(h,r[0][p],c)},t.prototype.replaceArrow=function(e,t,n){this.arrow().css(n?"left":"top",50*(1-e/t)+"%").css(n?"top":"left","")},t.prototype.setContent=function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},t.prototype.hide=function(n){function o(){r.hoverState!="in"&&i.detach(),r.$element&&r.$element.removeAttr("aria-describedby").trigger("hidden.bs."+r.type),n&&n()}var r=this,i=e(this.$tip),s=e.Event("hide.bs."+this.type);this.$element.trigger(s);if(s.isDefaultPrevented())return;return i.removeClass("in"),e.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",o).emulateTransitionEnd(t.TRANSITION_DURATION):o(),this.hoverState=null,this},t.prototype.fixTitle=function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},t.prototype.hasContent=function(){return this.getTitle()},t.prototype.getPosition=function(t){t=t||this.$element;var n=t[0],r=n.tagName=="BODY",i=n.getBoundingClientRect();i.width==null&&(i=e.extend({},i,{width:i.right-i.left,height:i.bottom-i.top}));var s=window.SVGElement&&n instanceof window.SVGElement,o=r?{top:0,left:0}:s?null:t.offset(),u={scroll:r?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},a=r?{width:e(window).width(),height:e(window).height()}:null;return e.extend({},i,u,a,o)},t.prototype.getCalculatedOffset=function(e,t,n,r){return e=="bottom"?{top:t.top+t.height,left:t.left+t.width/2-n/2}:e=="top"?{top:t.top-r,left:t.left+t.width/2-n/2}:e=="left"?{top:t.top+t.height/2-r/2,left:t.left-n}:{top:t.top+t.height/2-r/2,left:t.left+t.width}},t.prototype.getViewportAdjustedDelta=function(e,t,n,r){var i={top:0,left:0};if(!this.$viewport)return i;var s=this.options.viewport&&this.options.viewport.padding||0,o=this.getPosition(this.$viewport);if(/right|left/.test(e)){var u=t.top-s-o.scroll,a=t.top+s-o.scroll+r;u<o.top?i.top=o.top-u:a>o.top+o.height&&(i.top=o.top+o.height-a)}else{var f=t.left-s,l=t.left+s+n;f<o.left?i.left=o.left-f:l>o.right&&(i.left=o.left+o.width-l)}return i},t.prototype.getTitle=function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title),e},t.prototype.getUID=function(e){do e+=~~(Math.random()*1e6);while(document.getElementById(e));return e},t.prototype.tip=function(){if(!this.$tip){this.$tip=e(this.options.template);if(this.$tip.length!=1)throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!")}return this.$tip},t.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},t.prototype.enable=function(){this.enabled=!0},t.prototype.disable=function(){this.enabled=!1},t.prototype.toggleEnabled=function(){this.enabled=!this.enabled},t.prototype.toggle=function(t){var n=this;t&&(n=e(t.currentTarget).data("bs."+this.type),n||(n=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,n))),t?(n.inState.click=!n.inState.click,n.isInStateTrue()?n.enter(n):n.leave(n)):n.tip().hasClass("in")?n.leave(n):n.enter(n)},t.prototype.destroy=function(){var e=this;clearTimeout(this.timeout),this.hide(function(){e.$element.off("."+e.type).removeData("bs."+e.type),e.$tip&&e.$tip.detach(),e.$tip=null,e.$arrow=null,e.$viewport=null,e.$element=null})};var r=e.fn.tooltip;e.fn.tooltip=n,e.fn.tooltip.Constructor=t,e.fn.tooltip.noConflict=function(){return e.fn.tooltip=r,this}}(jQuery),+function(e){"use strict";function n(n){return this.each(function(){var r=e(this),i=r.data("bs.popover"),s=typeof n=="object"&&n;if(!i&&/destroy|hide/.test(n))return;i||r.data("bs.popover",i=new t(this,s)),typeof n=="string"&&i[n]()})}var t=function(e,t){this.init("popover",e,t)};if(!e.fn.tooltip)throw new Error("Popover requires tooltip.js");t.VERSION="3.3.7",t.DEFAULTS=e.extend({},e.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype),t.prototype.constructor=t,t.prototype.getDefaults=function(){return t.DEFAULTS},t.prototype.setContent=function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content").children().detach().end()[this.options.html?typeof n=="string"?"html":"append":"text"](n),e.removeClass("fade top bottom left right in"),e.find(".popover-title").html()||e.find(".popover-title"
).hide()},t.prototype.hasContent=function(){return this.getTitle()||this.getContent()},t.prototype.getContent=function(){var e=this.$element,t=this.options;return e.attr("data-content")||(typeof t.content=="function"?t.content.call(e[0]):t.content)},t.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var r=e.fn.popover;e.fn.popover=n,e.fn.popover.Constructor=t,e.fn.popover.noConflict=function(){return e.fn.popover=r,this}}(jQuery),+function(e){"use strict";function t(n,r){this.$body=e(document.body),this.$scrollElement=e(n).is(document.body)?e(window):e(n),this.options=e.extend({},t.DEFAULTS,r),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e.proxy(this.process,this)),this.refresh(),this.process()}function n(n){return this.each(function(){var r=e(this),i=r.data("bs.scrollspy"),s=typeof n=="object"&&n;i||r.data("bs.scrollspy",i=new t(this,s)),typeof n=="string"&&i[n]()})}t.VERSION="3.3.7",t.DEFAULTS={offset:10},t.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},t.prototype.refresh=function(){var t=this,n="offset",r=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),e.isWindow(this.$scrollElement[0])||(n="position",r=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=e(this),i=t.data("target")||t.attr("href"),s=/^#./.test(i)&&e(i);return s&&s.length&&s.is(":visible")&&[[s[n]().top+r,i]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},t.prototype.process=function(){var e=this.$scrollElement.scrollTop()+this.options.offset,t=this.getScrollHeight(),n=this.options.offset+t-this.$scrollElement.height(),r=this.offsets,i=this.targets,s=this.activeTarget,o;this.scrollHeight!=t&&this.refresh();if(e>=n)return s!=(o=i[i.length-1])&&this.activate(o);if(s&&e<r[0])return this.activeTarget=null,this.clear();for(o=r.length;o--;)s!=i[o]&&e>=r[o]&&(r[o+1]===undefined||e<r[o+1])&&this.activate(i[o])},t.prototype.activate=function(t){this.activeTarget=t,this.clear();var n=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',r=e(n).parents("li").addClass("active");r.parent(".dropdown-menu").length&&(r=r.closest("li.dropdown").addClass("active")),r.trigger("activate.bs.scrollspy")},t.prototype.clear=function(){e(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var r=e.fn.scrollspy;e.fn.scrollspy=n,e.fn.scrollspy.Constructor=t,e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=r,this},e(window).on("load.bs.scrollspy.data-api",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);n.call(t,t.data())})})}(jQuery),+function(e){"use strict";function n(n){return this.each(function(){var r=e(this),i=r.data("bs.tab");i||r.data("bs.tab",i=new t(this)),typeof n=="string"&&i[n]()})}var t=function(t){this.element=e(t)};t.VERSION="3.3.7",t.TRANSITION_DURATION=150,t.prototype.show=function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),r=t.data("target");r||(r=t.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));if(t.parent("li").hasClass("active"))return;var i=n.find(".active:last a"),s=e.Event("hide.bs.tab",{relatedTarget:t[0]}),o=e.Event("show.bs.tab",{relatedTarget:i[0]});i.trigger(s),t.trigger(o);if(o.isDefaultPrevented()||s.isDefaultPrevented())return;var u=e(r);this.activate(t.closest("li"),n),this.activate(u,u.parent(),function(){i.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:i[0]})})},t.prototype.activate=function(n,r,i){function u(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),n.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),o?(n[0].offsetWidth,n.addClass("in")):n.removeClass("fade"),n.parent(".dropdown-menu").length&&n.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),i&&i()}var s=r.find("> .active"),o=i&&e.support.transition&&(s.length&&s.hasClass("fade")||!!r.find("> .fade").length);s.length&&o?s.one("bsTransitionEnd",u).emulateTransitionEnd(t.TRANSITION_DURATION):u(),s.removeClass("in")};var r=e.fn.tab;e.fn.tab=n,e.fn.tab.Constructor=t,e.fn.tab.noConflict=function(){return e.fn.tab=r,this};var i=function(t){t.preventDefault(),n.call(e(this),"show")};e(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',i).on("click.bs.tab.data-api",'[data-toggle="pill"]',i)}(jQuery),+function(e){"use strict";function n(n){return this.each(function(){var r=e(this),i=r.data("bs.affix"),s=typeof n=="object"&&n;i||r.data("bs.affix",i=new t(this,s)),typeof n=="string"&&i[n]()})}var t=function(n,r){this.options=e.extend({},t.DEFAULTS,r),this.$target=e(this.options.target).on("scroll.bs.affix.data-api",e.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",e.proxy(this.checkPositionWithEventLoop,this)),this.$element=e(n),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};t.VERSION="3.3.7",t.RESET="affix affix-top affix-bottom",t.DEFAULTS={offset:0,target:window},t.prototype.getState=function(e,t,n,r){var i=this.$target.scrollTop(),s=this.$element.offset(),o=this.$target.height();if(n!=null&&this.affixed=="top")return i<n?"top":!1;if(this.affixed=="bottom")return n!=null?i+this.unpin<=s.top?!1:"bottom":i+o<=e-r?!1:"bottom";var u=this.affixed==null,a=u?i:s.top,f=u?o:t;return n!=null&&i<=n?"top":r!=null&&a+f>=e-r?"bottom":!1},t.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(t.RESET).addClass("affix");var e=this.$target.scrollTop(),n=this.$element.offset();return this.pinnedOffset=n.top-e},t.prototype.checkPositionWithEventLoop=function(){setTimeout(e.proxy
(this.checkPosition,this),1)},t.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var n=this.$element.height(),r=this.options.offset,i=r.top,s=r.bottom,o=Math.max(e(document).height(),e(document.body).height());typeof r!="object"&&(s=i=r),typeof i=="function"&&(i=r.top(this.$element)),typeof s=="function"&&(s=r.bottom(this.$element));var u=this.getState(o,n,i,s);if(this.affixed!=u){this.unpin!=null&&this.$element.css("top","");var a="affix"+(u?"-"+u:""),f=e.Event(a+".bs.affix");this.$element.trigger(f);if(f.isDefaultPrevented())return;this.affixed=u,this.unpin=u=="bottom"?this.getPinnedOffset():null,this.$element.removeClass(t.RESET).addClass(a).trigger(a.replace("affix","affixed")+".bs.affix")}u=="bottom"&&this.$element.offset({top:o-n-s})};var r=e.fn.affix;e.fn.affix=n,e.fn.affix.Constructor=t,e.fn.affix.noConflict=function(){return e.fn.affix=r,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),r=t.data();r.offset=r.offset||{},r.offsetBottom!=null&&(r.offset.bottom=r.offsetBottom),r.offsetTop!=null&&(r.offset.top=r.offsetTop),n.call(t,r)})})}(jQuery)}).call(this);
