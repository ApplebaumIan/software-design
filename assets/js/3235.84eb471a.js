"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[3235],{60913:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var o=t(83686);const a={tableOfContentsInline:"tableOfContentsInline_prmo"};var l=t(74848);function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return(0,l.jsx)("div",{className:a.tableOfContentsInline,children:(0,l.jsx)(o.A,{toc:n,minHeadingLevel:t,maxHeadingLevel:r,className:"table-of-contents",linkClassName:null})})}},53632:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var o=t(34164);const a={tabItem:"tabItem_Ymn6"};var l=t(74848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,o.A)(a.tabItem,r),hidden:t,children:n})}},22707:(e,n,t)=>{t.d(n,{A:()=>x});var o=t(96540),a=t(34164),l=t(44319),r=t(56347),i=t(94280),s=t(73024),c=t(58417),u=t(44031);function d(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:a}}=e;return{value:n,label:t,attributes:o,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,r.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(l),(0,o.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=p(e),[r,s]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:l}))),[c,d]=f({queryString:t,groupId:a}),[h,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,u.Dv)(t);return[a,(0,o.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),b=(()=>{const e=c??h;return m({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{b&&s(b)}),[b]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),y(e)}),[d,y,l]),tabValues:l}}var y=t(46916);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function v(e){let{className:n,block:t,selectedValue:o,selectValue:r,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,t=s.indexOf(n),a=i[t].value;a!==o&&(c(n),r(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>s.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function C(e){let{lazy:n,children:t,selectedValue:l}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===l));return e?(0,o.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function w(e){const n=h(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,g.jsx)(v,{...n,...e}),(0,g.jsx)(C,{...n,...e})]})}function x(e){const n=(0,y.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(n))}},64154:(e,n,t)=>{t.d(n,{Cs:()=>y});var o=t(96540),a=t(40961),l=function(e,n){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},l(e,n)};function r(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}l(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}var i=function(){return i=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},i.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var s;function c(e){return"#"===e.charAt(0)?e.slice(1):e}!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===t&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}("/*\n  code is extracted from Calendly's embed stylesheet: https://assets.calendly.com/assets/external/widget.css\n*/\n\n.calendly-inline-widget,\n.calendly-inline-widget *,\n.calendly-badge-widget,\n.calendly-badge-widget *,\n.calendly-overlay,\n.calendly-overlay * {\n    font-size:16px;\n    line-height:1.2em\n}\n\n.calendly-inline-widget iframe,\n.calendly-badge-widget iframe,\n.calendly-overlay iframe {\n    display:inline;\n    width:100%;\n    height:100%\n}\n\n.calendly-popup-content {\n    position:relative\n}\n\n.calendly-popup-content.calendly-mobile {\n    -webkit-overflow-scrolling:touch;\n    overflow-y:auto\n}\n\n.calendly-overlay {\n    position:fixed;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n    overflow:hidden;\n    z-index:9999;\n    background-color:#a5a5a5;\n    background-color:rgba(31,31,31,0.4)\n}\n\n.calendly-overlay .calendly-close-overlay {\n    position:absolute;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0\n}\n\n.calendly-overlay .calendly-popup {\n    box-sizing:border-box;\n    position:absolute;\n    top:50%;\n    left:50%;\n    -webkit-transform:translateY(-50%) translateX(-50%);\n    transform:translateY(-50%) translateX(-50%);\n    width:80%;\n    min-width:900px;\n    max-width:1000px;\n    height:90%;\n    max-height:680px\n}\n\n@media (max-width: 975px) {\n    .calendly-overlay .calendly-popup {\n        position:fixed;\n        top:50px;\n        left:0;\n        right:0;\n        bottom:0;\n        -webkit-transform:none;\n        transform:none;\n        width:100%;\n        height:auto;\n        min-width:0;\n        max-height:none\n    }\n}\n\n.calendly-overlay .calendly-popup .calendly-popup-content {\n    height:100%;\n}\n\n.calendly-overlay .calendly-popup-close {\n    position:absolute;\n    top:25px;\n    right:25px;\n    color:#fff;\n    width:19px;\n    height:19px;\n    cursor:pointer;\n    background:url(https://assets.calendly.com/assets/external/close-icon.svg) no-repeat;\n    background-size:contain\n}\n\n@media (max-width: 975px) {\n    .calendly-overlay .calendly-popup-close {\n        top:15px;\n        right:15px\n    }\n}\n\n.calendly-badge-widget {\n    position:fixed;\n    right:20px;\n    bottom:15px;\n    z-index:9998\n}\n\n.calendly-badge-widget .calendly-badge-content {\n    display:table-cell;\n    width:auto;\n    height:45px;\n    padding:0 30px;\n    border-radius:25px;\n    box-shadow:rgba(0,0,0,0.25) 0 2px 5px;\n    font-family:sans-serif;\n    text-align:center;\n    vertical-align:middle;\n    font-weight:bold;\n    font-size:14px;\n    color:#fff;\n    cursor:pointer\n}\n\n.calendly-badge-widget .calendly-badge-content.calendly-white {\n    color:#666a73\n}\n\n.calendly-badge-widget .calendly-badge-content span {\n    display:block;\n    font-size:12px\n}\n\n.calendly-spinner {\n    position:absolute;\n    top:50%;\n    left:0;\n    right:0;\n    -webkit-transform:translateY(-50%);\n    transform:translateY(-50%);\n    text-align:center;\n    z-index:-1\n}\n\n.calendly-spinner>div {\n    display:inline-block;\n    width:18px;\n    height:18px;\n    background-color:#e1e1e1;\n    border-radius:50%;\n    vertical-align:middle;\n    -webkit-animation:calendly-bouncedelay 1.4s infinite ease-in-out;\n    animation:calendly-bouncedelay 1.4s infinite ease-in-out;\n    -webkit-animation-fill-mode:both;\n    animation-fill-mode:both\n}\n\n.calendly-spinner .calendly-bounce1 {\n    -webkit-animation-delay:-0.32s;\n    animation-delay:-0.32s\n}\n\n.calendly-spinner .calendly-bounce2 {\n    -webkit-animation-delay:-0.16s;\n    animation-delay:-0.16s\n}\n\n@-webkit-keyframes calendly-bouncedelay {\n    0%,80%,100% {\n        -webkit-transform:scale(0);\n        transform:scale(0)\n    } \n    \n    40%{\n        -webkit-transform:scale(1);\n        transform:scale(1)\n    }\n}\n\n@keyframes calendly-bouncedelay{ \n    0%,80%,100% {\n        -webkit-transform:scale(0);\n        transform:scale(0)\n    }\n    \n    40% {\n        -webkit-transform:scale(1);\n        transform:scale(1)\n    }\n}"),function(e){e.PROFILE_PAGE_VIEWED="calendly.profile_page_viewed",e.EVENT_TYPE_VIEWED="calendly.event_type_viewed",e.DATE_AND_TIME_SELECTED="calendly.date_and_time_selected",e.EVENT_SCHEDULED="calendly.event_scheduled"}(s||(s={}));var u=function(e){var n,t=e.url,o=e.prefill,a=void 0===o?{}:o,l=e.pageSettings,r=void 0===l?{}:l,i=e.utm,s=void 0===i?{}:i,u=e.embedType,p=((null==(n=r)?void 0:n.primaryColor)&&(n.primaryColor=c(n.primaryColor)),(null==n?void 0:n.textColor)&&(n.textColor=c(n.textColor)),(null==n?void 0:n.backgroundColor)&&(n.backgroundColor=c(n.backgroundColor)),n),f=p.backgroundColor,h=p.hideEventTypeDetails,y=p.hideLandingPageDetails,b=p.primaryColor,g=p.textColor,v=p.hideGdprBanner,C=a.customAnswers,w=a.date,x=a.email,E=a.firstName,_=a.guests,k=a.lastName,I=a.location,N=a.smsReminderNumber,S=a.name,L=s.utmCampaign,T=s.utmContent,O=s.utmMedium,A=s.utmSource,V=s.utmTerm,j=s.salesforce_uuid,D=t.indexOf("?"),R=D>-1,U=t.slice(D+1),P=R?t.slice(0,D):t,q=[R?U:null,f?"background_color=".concat(f):null,h?"hide_event_type_details=1":null,y?"hide_landing_page_details=1":null,b?"primary_color=".concat(b):null,g?"text_color=".concat(g):null,v?"hide_gdpr_banner=1":null,S?"name=".concat(encodeURIComponent(S)):null,N?"phone_number=".concat(encodeURIComponent(N)):null,I?"location=".concat(encodeURIComponent(I)):null,E?"first_name=".concat(encodeURIComponent(E)):null,k?"last_name=".concat(encodeURIComponent(k)):null,_?"guests=".concat(_.map(encodeURIComponent).join(",")):null,x?"email=".concat(encodeURIComponent(x)):null,w&&w instanceof Date?"date=".concat(d(w)):null,L?"utm_campaign=".concat(encodeURIComponent(L)):null,T?"utm_content=".concat(encodeURIComponent(T)):null,O?"utm_medium=".concat(encodeURIComponent(O)):null,A?"utm_source=".concat(encodeURIComponent(A)):null,V?"utm_term=".concat(encodeURIComponent(V)):null,j?"salesforce_uuid=".concat(encodeURIComponent(j)):null,u?"embed_type=".concat(u):null,"embed_domain=1"].concat(C?m(C):[]).filter((function(e){return null!==e})).join("&");return"".concat(P,"?").concat(q)},d=function(e){var n=e.getMonth()+1,t=e.getDate();return[e.getFullYear(),n<10?"0".concat(n):n,t<10?"0".concat(t):t].join("-")},p=/^a\d{1,2}$/,m=function(e){var n=Object.keys(e).filter((function(e){return e.match(p)}));return n.length?n.map((function(n){return"".concat(n,"=").concat(encodeURIComponent(e[n]))})):[]},f=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return r(n,e),n.prototype.render=function(){return o.createElement("div",{className:"calendly-spinner"},o.createElement("div",{className:"calendly-bounce1"}),o.createElement("div",{className:"calendly-bounce2"}),o.createElement("div",{className:"calendly-bounce3"}))},n}(o.Component),h={minWidth:"320px",height:"630px"},y=function(e){function n(n){var t=e.call(this,n)||this;return t.state={isLoading:!0},t.onLoad=t.onLoad.bind(t),t}return r(n,e),n.prototype.onLoad=function(){this.setState({isLoading:!1})},n.prototype.render=function(){var e=u({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),n=this.props.LoadingSpinner||f;return o.createElement("div",{className:"calendly-inline-widget",style:this.props.styles||h},this.state.isLoading&&o.createElement(n,null),o.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:e}))},n}(o.Component),b=function(e){function n(n){var t=e.call(this,n)||this;return t.state={isLoading:!0},t.onLoad=t.onLoad.bind(t),t}return r(n,e),n.prototype.onLoad=function(){this.setState({isLoading:!1})},n.prototype.render=function(){var e=u({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"PopupWidget"}),n=this.props.LoadingSpinner||f;return o.createElement(o.Fragment,null,this.state.isLoading&&o.createElement(n,null),o.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:e}))},n}(o.Component),g=function(e){if(!e.open)return null;if(!e.rootElement)throw new Error("[react-calendly]: PopupModal rootElement property cannot be undefined");return a.createPortal(o.createElement("div",{className:"calendly-overlay"},o.createElement("div",{onClick:e.onModalClose,className:"calendly-close-overlay"}),o.createElement("div",{className:"calendly-popup"},o.createElement("div",{className:"calendly-popup-content"},o.createElement(b,i({},e)))),o.createElement("button",{className:"calendly-popup-close",onClick:e.onModalClose,"aria-label":"Close modal",style:{display:"block",border:"none",padding:0}})),e.rootElement)};(function(e){function n(n){var t=e.call(this,n)||this;return t.state={isOpen:!1},t.onClick=t.onClick.bind(t),t.onClose=t.onClose.bind(t),t}r(n,e),n.prototype.onClick=function(e){e.preventDefault(),this.setState({isOpen:!0})},n.prototype.onClose=function(e){e.stopPropagation(),this.setState({isOpen:!1})},n.prototype.render=function(){return o.createElement(o.Fragment,null,o.createElement("button",{onClick:this.onClick,style:this.props.styles||{},className:this.props.className||""},this.props.text),o.createElement(g,i({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))}})(o.Component),function(e){function n(n){var t=e.call(this,n)||this;return t.state={isOpen:!1},t.onClick=t.onClick.bind(t),t.onClose=t.onClose.bind(t),t}r(n,e),n.prototype.onClick=function(){this.setState({isOpen:!0})},n.prototype.onClose=function(e){e.stopPropagation(),this.setState({isOpen:!1})},n.prototype.render=function(){return o.createElement("div",{className:"calendly-badge-widget",onClick:this.onClick},o.createElement("div",{className:"calendly-badge-content",style:{background:this.props.color||"#00a2ff",color:this.props.textColor||"#ffffff"}},this.props.text||"Schedule time with me",this.props.branding&&o.createElement("span",null,"powered by Calendly")),o.createElement(g,i({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))}}(o.Component)}}]);