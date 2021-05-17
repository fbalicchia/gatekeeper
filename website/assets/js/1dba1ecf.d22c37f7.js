(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[510],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return k},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},k=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),N=m(n),u=i,c=N["".concat(o,".").concat(u)]||N[u]||s[u]||r;return n?a.createElement(c,p(p({ref:t},k),{},{components:n})):a.createElement(c,p({ref:t},k))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,p=new Array(r);p[0]=N;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var m=2;m<r;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},6576:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return o},default:function(){return k}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),p={id:"metrics",title:"Metrics"},l={unversionedId:"metrics",id:"metrics",isDocsHomePage:!1,title:"Metrics",description:"Below are the list of metrics provided by Gatekeeper:",source:"@site/docs/metrics.md",sourceDirName:".",slug:"/metrics",permalink:"/gatekeeper/website/docs/metrics",editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/docs/metrics.md",version:"current",frontMatter:{id:"metrics",title:"Metrics"},sidebar:"docs",previous:{title:"Customizing Admission Behavior",permalink:"/gatekeeper/website/docs/customize-admission"},next:{title:"Debugging",permalink:"/gatekeeper/website/docs/debug"}},o=[{value:"Constraint",id:"constraint",children:[]},{value:"Constraint Template",id:"constraint-template",children:[]},{value:"Webhook",id:"webhook",children:[]},{value:"Audit",id:"audit",children:[]},{value:"Sync",id:"sync",children:[]},{value:"Watch",id:"watch",children:[]}],m={toc:o};function k(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Below are the list of metrics provided by Gatekeeper:"),(0,r.kt)("h2",{id:"constraint"},"Constraint"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"constraints")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"Current number of known constraints")),(0,r.kt)("p",{parentName:"li"},"  Tags:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"enforcement_action"),": ","[",(0,r.kt)("inlineCode",{parentName:"p"},"deny"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dryrun"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"warn"),"]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status"),": ","[",(0,r.kt)("inlineCode",{parentName:"p"},"active"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),"]"),(0,r.kt)("p",{parentName:"li"},"Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"LastValue")))))),(0,r.kt)("h2",{id:"constraint-template"},"Constraint Template"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"constraint_templates")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"Number of observed constraint templates")),(0,r.kt)("p",{parentName:"li"},"  Tags:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status"),": ","[",(0,r.kt)("inlineCode",{parentName:"p"},"active"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),"]"),(0,r.kt)("p",{parentName:"li"},"Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"LastValue"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"constraint_template_ingestion_count")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"Total number of constraint template ingestion actions")),(0,r.kt)("p",{parentName:"li"},"  Tags:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status"),": ","[",(0,r.kt)("inlineCode",{parentName:"p"},"active"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),"]"),(0,r.kt)("p",{parentName:"li"},"Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"Count"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"constraint_template_ingestion_duration_seconds")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"Distribution of how long it took to ingest a constraint template in seconds")),(0,r.kt)("p",{parentName:"li"},"  Tags:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status"),": ","[",(0,r.kt)("inlineCode",{parentName:"p"},"active"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),"]"),(0,r.kt)("p",{parentName:"li"},"Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"Distribution")))))),(0,r.kt)("h2",{id:"webhook"},"Webhook"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"request_count")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"The number of requests that are routed to webhook")),(0,r.kt)("p",{parentName:"li"},"  Tags:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"admission_status"),": ","[",(0,r.kt)("inlineCode",{parentName:"p"},"allow"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"deny"),"]"),(0,r.kt)("p",{parentName:"li"},"Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"Count"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"request_duration_seconds")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"The response time in seconds")),(0,r.kt)("p",{parentName:"li"},"  Tags:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"admission_status"),": ","[",(0,r.kt)("inlineCode",{parentName:"p"},"allow"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"deny"),"]"),(0,r.kt)("p",{parentName:"li"},"Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"Distribution")))))),(0,r.kt)("h2",{id:"audit"},"Audit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"violations")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"Total number of audited violations")),(0,r.kt)("p",{parentName:"li"},"  Tags:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"enforcement_action"),": ","[",(0,r.kt)("inlineCode",{parentName:"p"},"deny"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dryrun"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"warn"),"]"),(0,r.kt)("p",{parentName:"li"},"Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"LastValue"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"audit_duration_seconds")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"Latency of audit operation in seconds")),(0,r.kt)("p",{parentName:"li"},"  Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"Distribution"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"audit_last_run_time")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"Timestamp of last audit run time")),(0,r.kt)("p",{parentName:"li"},"  Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"LastValue")))),(0,r.kt)("h2",{id:"sync"},"Sync"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"sync")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"Total number of resources of each kind being cached")),(0,r.kt)("p",{parentName:"li"},"  Tags:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status"),": ","[",(0,r.kt)("inlineCode",{parentName:"p"},"active"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),"]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"kind")," (examples, ",(0,r.kt)("inlineCode",{parentName:"p"},"pod"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace"),", ...)"),(0,r.kt)("p",{parentName:"li"},"Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"LastValue"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"sync_duration_seconds")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"Latency of sync operation in seconds")),(0,r.kt)("p",{parentName:"li"},"  Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"Distribution"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"sync_last_run_time")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"Timestamp of last sync operation")),(0,r.kt)("p",{parentName:"li"},"  Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"LastValue")))),(0,r.kt)("h2",{id:"watch"},"Watch"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"watch_manager_watched_gvk")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"Total number of watched GroupVersionKinds")),(0,r.kt)("p",{parentName:"li"},"  Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"LastValue"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"watch_manager_intended_watch_gvk")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"Total number of GroupVersionKinds with a registered watch intent")),(0,r.kt)("p",{parentName:"li"},"  Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"LastValue")))))}k.isMDXComponent=!0}}]);