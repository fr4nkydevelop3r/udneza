(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"As+U":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("Wbzz");t.a=function(e){return r.a.createElement("section",{className:"inner-banner"},r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"list-unstyled thm-breadcrumb"},r.a.createElement("li",null,r.a.createElement(o.a,{to:"/"},"Home")),r.a.createElement("li",{className:"active"},r.a.createElement("a",{href:"#none"},e.title))),r.a.createElement("h2",{className:"inner-banner__title"},e.title)))}},FMuQ:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("gQrC"),i=n.n(o);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m(e);if(t){var r=m(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return f(this,n)}}function h(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(e);if(0===t)return n;var a=n.match(/(.*?)([0-9]+)(.*)/),r=a?a[1]:"",o=a?a[3]:"",i=a?a[2]:n,s=i.length>=t?i:(h(Array(t)).map((function(){return"0"})).join("")+i).slice(-1*t);return"".concat(r).concat(s).concat(o)}var T={daysInHours:!1,zeroPadTime:2};function b(e,t){var n=e.days,a=e.hours,r=e.minutes,o=e.seconds,i=Object.assign(Object.assign({},T),t),s=i.daysInHours,c=i.zeroPadTime,l=i.zeroPadDays,u=void 0===l?c:l,m=Math.min(2,c),p=s?y(a+24*n,c):y(a,m);return{days:s?"":y(n,u),hours:p,minutes:y(r,m),seconds:y(o,m)}}var E=function(e){u(n,e);var t=d(n);function n(){var e;return s(this,n),(e=t.apply(this,arguments)).state={count:e.props.count||3},e.startCountdown=function(){e.interval=window.setInterval((function(){0===e.state.count-1?(e.stopCountdown(),e.props.onComplete&&e.props.onComplete()):e.setState((function(e){return{count:e.count-1}}))}),1e3)},e.stopCountdown=function(){clearInterval(e.interval)},e.addTime=function(t){e.stopCountdown(),e.setState((function(e){return{count:e.count+t}}),e.startCountdown)},e}return l(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?Object(a.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(a.Component),S=function(e){u(n,e);var t=d(n);function n(e){var r;if(s(this,n),(r=t.call(this,e)).mounted=!1,r.initialTimestamp=r.calcOffsetStartTimestamp(),r.offsetStartTimestamp=r.props.autoStart?0:r.initialTimestamp,r.offsetTime=0,r.legacyMode=!1,r.legacyCountdownRef=Object(a.createRef)(),r.tick=function(){var e=r.calcTimeDelta(),t=e.completed&&!r.props.overtime?void 0:r.props.onTick;r.setTimeDeltaState(e,void 0,t)},r.start=function(){if(!r.isStarted()){var e=r.offsetStartTimestamp;r.offsetStartTimestamp=0,r.offsetTime+=e?r.calcOffsetStartTimestamp()-e:0;var t=r.calcTimeDelta();r.setTimeDeltaState(t,"STARTED",r.props.onStart),r.props.controlled||t.completed&&!r.props.overtime||(r.clearTimer(),r.interval=window.setInterval(r.tick,r.props.intervalDelay))}},r.pause=function(){r.isPaused()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.setTimeDeltaState(r.state.timeDelta,"PAUSED",r.props.onPause))},r.stop=function(){r.isStopped()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.offsetTime=r.offsetStartTimestamp-r.initialTimestamp,r.setTimeDeltaState(r.calcTimeDelta(),"STOPPED",r.props.onStop))},r.isStarted=function(){return r.isStatus("STARTED")},r.isPaused=function(){return r.isStatus("PAUSED")},r.isStopped=function(){return r.isStatus("STOPPED")},r.isCompleted=function(){return r.isStatus("COMPLETED")},r.handleOnComplete=function(e){r.props.onComplete&&r.props.onComplete(e)},e.date){var o=r.calcTimeDelta();r.state={timeDelta:o,status:o.completed?"COMPLETED":"STOPPED"}}else r.legacyMode=!0;return r}return l(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(e){this.legacyMode||this.shallowCompare(this.props,e)||(this.props.date!==e.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0),this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var e=this.props,t=e.date,n=e.now,a=e.precision,r=e.controlled,o=e.overtime;return function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.now,r=void 0===a?Date.now:a,o=n.precision,i=void 0===o?0:o,s=n.controlled,c=n.offsetTime,l=void 0===c?0:c,u=n.overtime;t="string"==typeof e?new Date(e).getTime():e instanceof Date?e.getTime():e,s||(t+=l);var m=s?t:t-r(),p=Math.min(20,Math.max(0,i)),f=Math.round(1e3*parseFloat(((u?m:Math.max(0,m))/1e3).toFixed(p))),d=Math.abs(f)/1e3;return{total:f,days:Math.floor(d/86400),hours:Math.floor(d/3600%24),minutes:Math.floor(d/60%60),seconds:Math.floor(d%60),milliseconds:Number((d%1*1e3).toFixed()),completed:f<=0}}(t,{now:n,precision:a,controlled:r,offsetTime:this.offsetTime,overtime:o})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(e){this.legacyCountdownRef.current.addTime(e)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(e){return this.state.status===e}},{key:"shallowCompare",value:function(e,t){var n=Object.keys(e);return n.length===Object.keys(t).length&&!n.some((function(n){var a=e[n],r=t[n];return!t.hasOwnProperty(n)||!(a===r||a!=a&&r!=r)}))}},{key:"setTimeDeltaState",value:function(e,t,n){var a=this;if(this.mounted){var r;!this.state.timeDelta.completed&&e.completed&&(this.props.overtime||this.clearTimer(),r=this.handleOnComplete);return this.setState((function(n){var r=t||n.status;return e.completed&&!a.props.overtime?r="COMPLETED":t||"COMPLETED"!==r||(r="STOPPED"),{timeDelta:e,status:r}}),(function(){n&&n(a.state.timeDelta),r&&r(a.state.timeDelta)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var e=this.props,t=e.daysInHours,n=e.zeroPadTime,a=e.zeroPadDays,r=this.state.timeDelta;return Object.assign(Object.assign({},r),{api:this.getApi(),props:this.props,formatted:b(r,{daysInHours:t,zeroPadTime:n,zeroPadDays:a})})}},{key:"render",value:function(){if(this.legacyMode){var e=this.props,t=e.count,n=e.children,r=e.onComplete;return Object(a.createElement)(E,{ref:this.legacyCountdownRef,count:t,onComplete:r},n)}var o=this.props,i=o.className,s=o.overtime,c=o.children,l=o.renderer,u=this.getRenderProps();if(l)return l(u);if(c&&this.state.timeDelta.completed&&!s)return Object(a.cloneElement)(c,{countdown:u});var m=u.formatted,p=m.days,f=m.hours,d=m.minutes,h=m.seconds;return Object(a.createElement)("span",{className:i},u.total<0?"-":"",p,p?":":"",f,":",d,":",h)}}]),n}(a.Component);S.defaultProps=Object.assign(Object.assign({},T),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0});t.a=function(){return r.a.createElement("section",{className:"countdown-one"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"countdown-one__content"},r.a.createElement("h2",{className:"countdown-one__title"},"Regístrate ahora"),r.a.createElement("p",{className:"countdown-one__tag-line"},"registrándote tu inscripción será gratuita"),r.a.createElement("p",{className:"countdown-one__text"},"En la UDN te ofrecemos la oportunidad de estudiar en línea, brindandote formación profesional de acuerdo a la demanda laboral actual. Te acompañaremos en tu proceso de aprendizaje desde el día uno hasta tu titulación."))),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"become-teacher__form"},r.a.createElement("div",{className:"become-teacher__form-top"},r.a.createElement("h2",{className:"become-teacher__form-title"},"Obtén tu inscripción gratuita")),r.a.createElement(i.a,{action:"https://gmail.us6.list-manage.com/subscribe/post?u=9f5dd2c791df9815d925b4d74&id=aef6286cd2",fields:[{name:"FNAME",placeholder:"Nombre",type:"text",required:!1},{name:"EMAIL",placeholder:"Email",type:"email",required:!0},{name:"PHONE",placeholder:"Teléfono",type:"phone",required:!1}],messages:{sending:"Enviando...",success:"Gracias! Pronte te contactamos.",error:"Ocurrio un error.",empty:"Tienes que escribir un email.",duplicate:"Ya tenemos tu correo. Pronto te contactamos.",button:"Registrarme!"},className:"become-teacher__form-content contact-form-validated"}),r.a.createElement("div",{className:"result text-center"}))))))}},aSaP:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("7oih"),i=n("gpT5"),s=n("As+U"),c=n("JwsL"),l=n("FMuQ");t.default=function(){return r.a.createElement(o.a,{pageTitle:"UDN | Registro"},r.a.createElement(i.a,null),r.a.createElement(s.a,{title:"Registro"}),r.a.createElement(l.a,null),r.a.createElement(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-register-js-9359b02074de8681a417.js.map