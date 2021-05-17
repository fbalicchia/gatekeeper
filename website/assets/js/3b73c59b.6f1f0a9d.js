(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[568],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6436:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var i=n(2122),a=n(9756),r=(n(7294),n(3905)),o={id:"audit",title:"Audit"},s={unversionedId:"audit",id:"audit",isDocsHomePage:!1,title:"Audit",description:"The audit functionality enables periodic evaluations of replicated resources against the policies enforced in the cluster to detect pre-existing misconfigurations. Audit results are stored as violations listed in the status field of the failed constraint.",source:"@site/docs/audit.md",sourceDirName:".",slug:"/audit",permalink:"/gatekeeper/website/docs/audit",editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/docs/audit.md",version:"current",frontMatter:{id:"audit",title:"Audit"},sidebar:"docs",previous:{title:"How to use Gatekeeper",permalink:"/gatekeeper/website/docs/howto"},next:{title:"Handling Constraint Violations",permalink:"/gatekeeper/website/docs/violations"}},l=[{value:"Configuring Audit",id:"configuring-audit",children:[{value:"Audit using kinds specified in the constraints only",id:"audit-using-kinds-specified-in-the-constraints-only",children:[]}]}],u={toc:l};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The audit functionality enables periodic evaluations of replicated resources against the policies enforced in the cluster to detect pre-existing misconfigurations. Audit results are stored as violations listed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," field of the failed constraint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sRequiredLabels\nmetadata:\n  name: ns-must-have-gk\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Namespace"]\n  parameters:\n    labels: ["gatekeeper"]\nstatus:\n  auditTimestamp: "2019-05-11T01:46:13Z"\n  enforced: true\n  violations:\n  - enforcementAction: deny\n    kind: Namespace\n    message: \'you must provide labels: {"gatekeeper"}\'\n    name: default\n  - enforcementAction: deny\n    kind: Namespace\n    message: \'you must provide labels: {"gatekeeper"}\'\n    name: gatekeeper-system\n  - enforcementAction: deny\n    kind: Namespace\n    message: \'you must provide labels: {"gatekeeper"}\'\n    name: kube-public\n  - enforcementAction: deny\n    kind: Namespace\n    message: \'you must provide labels: {"gatekeeper"}\'\n    name: kube-system\n')),(0,r.kt)("h2",{id:"configuring-audit"},"Configuring Audit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Audit violations per constraint: set ",(0,r.kt)("inlineCode",{parentName:"li"},"--constraint-violations-limit=123")," (defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"20"),")"),(0,r.kt)("li",{parentName:"ul"},"Audit chunk size: set ",(0,r.kt)("inlineCode",{parentName:"li"},"--audit-chunk-size=500")," (defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," = infinite) to limit memory consumption of the auditing ",(0,r.kt)("inlineCode",{parentName:"li"},"Pod")),(0,r.kt)("li",{parentName:"ul"},"Audit interval: set ",(0,r.kt)("inlineCode",{parentName:"li"},"--audit-interval=123")," (defaults to every ",(0,r.kt)("inlineCode",{parentName:"li"},"60")," seconds). Disable audit interval by setting ",(0,r.kt)("inlineCode",{parentName:"li"},"--audit-interval=0"))),(0,r.kt)("p",null,"By default, the audit will request each resource from the Kubernetes API during each cycle of the audit. To instead rely on the OPA cache, use the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--audit-from-cache=true"),". Note that this requires replication of Kubernetes resources into OPA before they can be evaluated against the enforced policies. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/sync"},"Replicating data")," section for more information."),(0,r.kt)("h3",{id:"audit-using-kinds-specified-in-the-constraints-only"},"Audit using kinds specified in the constraints only"),(0,r.kt)("p",null,"By default, Gatekeeper will audit all resources in the cluster. This operation can take some time depending on the number of resources."),(0,r.kt)("p",null,'If all of your constraints match against specific kinds (e.g. "match only pods"), then you can speed up audit runs by setting ',(0,r.kt)("inlineCode",{parentName:"p"},"--audit-match-kind-only=true")," flag. This will only check resources of the kinds specified in all ",(0,r.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/howto#constraints"},"constraints")," defined in the cluster."),(0,r.kt)("p",null,"For example, defining this constraint will only audit ",(0,r.kt)("inlineCode",{parentName:"p"},"Pod")," kind:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sAllowedRepos\nmetadata:\n  name: prod-repo-is-openpolicyagent\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Pod"]\n...\n')),(0,r.kt)("p",null,"If any of the ",(0,r.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/howto#constraints"},"constraints")," do not specify ",(0,r.kt)("inlineCode",{parentName:"p"},"kinds"),", it will be equivalent to not setting ",(0,r.kt)("inlineCode",{parentName:"p"},"--audit-match-kind-only")," flag (",(0,r.kt)("inlineCode",{parentName:"p"},"false")," by default), and will fall back to auditing all resources in the cluster."))}c.isMDXComponent=!0}}]);