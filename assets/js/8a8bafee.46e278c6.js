"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4764],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96540:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"What is URN?",slug:"/what/urn",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what/urn.md"},o="What is URN?",s={unversionedId:"docs/what/urn",id:"docs/what/urn",title:"What is URN?",description:"URN (Uniform Resource Name) is the chosen scheme of URI to uniquely define any resource in DataHub. It has the following form",source:"@site/genDocs/docs/what/urn.md",sourceDirName:"docs/what",slug:"/what/urn",permalink:"/docs/what/urn",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/what/urn.md",tags:[],version:"current",frontMatter:{title:"What is URN?",slug:"/what/urn",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what/urn.md"}},l={},c=[{value:"Namespace",id:"namespace",level:2},{value:"Entity Type",id:"entity-type",level:2},{value:"ID",id:"id",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-urn"},"What is URN?"),(0,r.kt)("p",null,"URN (",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Uniform_Resource_Name"},"Uniform Resource Name"),") is the chosen scheme of ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Uniform_Resource_Identifier"},"URI")," to uniquely define any resource in DataHub. It has the following form"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"urn:<Namespace>:<Entity Type>:<ID>\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-modeling/metadata-model"},"Onboarding a new entity")," to ",(0,r.kt)("a",{parentName:"p",href:"/docs/what/gma"},"GMA")," starts with modelling an URN specific to that entity.\nYou can use the existing ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/li-utils/src/main/javaPegasus/com/linkedin/common/urn"},"URN models")," for built-in entities as a reference."),(0,r.kt)("h2",{id:"namespace"},"Namespace"),(0,r.kt)("p",null,"All URNs available in DataHub are using ",(0,r.kt)("inlineCode",{parentName:"p"},"li")," as their namespace.\nThis can be easily changed to a different namespace for your organization if you fork DataHub."),(0,r.kt)("h2",{id:"entity-type"},"Entity Type"),(0,r.kt)("p",null,"Entity type for URN is different than ",(0,r.kt)("a",{parentName:"p",href:"/docs/what/entity"},"entity")," in GMA context. This can be thought of as the object type of\nany resource for which you need unique identifier for its each instance. While you can create URNs for GMA entities such as\n","[DatasetUrn]"," with entity type ",(0,r.kt)("inlineCode",{parentName:"p"},"dataset"),", you can also define URN for data platforms, ","[DataPlatformUrn]","."),(0,r.kt)("h2",{id:"id"},"ID"),(0,r.kt)("p",null,"ID is the unique identifier part of a URN. It's unique for a specific entity type within a specific namespace.\nID could contain a single field, or multi fields in the case of complex URNs. A complex URN can even contain other URNs as ID fields. This type of URN is also referred to as nested URN. For non-URN ID fields, the value can be either a string, number, or ",(0,r.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/pdl_schema#enum-type"},"Pegasus Enum"),"."),(0,r.kt)("p",null,"Here are some example URNs with a single ID field:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"urn:li:dataPlatform:kafka\nurn:li:corpuser:jdoe\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/li-utils/src/main/javaPegasus/com/linkedin/common/urn/DatasetUrn.java"},"DatasetUrn")," is an example of a complex nested URN. It contains 3 ID fields: ",(0,r.kt)("inlineCode",{parentName:"p"},"platform"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"fabric"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"platform")," is another ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/li-utils/src/main/javaPegasus/com/linkedin/common/urn/DataPlatformUrn.java"},"URN"),". Here are some examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"urn:li:dataset:(urn:li:dataPlatform:kafka,PageViewEvent,PROD)\nurn:li:dataset:(urn:li:dataPlatform:hdfs,PageViewEvent,EI)\n")))}p.isMDXComponent=!0}}]);