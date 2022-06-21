"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2129],{4137:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8448:function(t,e,n){var a=n(7294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},7358:function(t,e,n){n.d(e,{Z:function(){return d}});var a=n(7462),r=n(7294),l=n(1048),i=n(2713);var s=function(){var t=(0,r.useContext)(i.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},o=n(2613),u=n(6010),p="tabItem_1uMI";function c(t){var e,n,a,l=t.lazy,i=t.block,c=t.defaultValue,d=t.values,m=t.groupId,g=t.className,h=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:h.map((function(t){var e=t.props;return{value:e.value,label:e.label}})),k=(0,o.lx)(f,(function(t,e){return t.value===e.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===c?c:null!=(e=null!=c?c:null==(n=h.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(a=h[0])?void 0:a.props.value;if(null!==N&&!f.some((function(t){return t.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+f.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=s(),y=b.tabGroupChoices,v=b.setTabGroupChoices,_=(0,r.useState)(N),w=_[0],x=_[1],C=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=y[m];null!=O&&O!==w&&f.some((function(t){return t.value===O}))&&x(O)}var P=function(t){var e=t.currentTarget,n=C.indexOf(e),a=f[n].value;a!==w&&(T(e),x(a),null!=m&&v(m,a))},E=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=C.indexOf(t.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(t.currentTarget)-1;n=C[r]||C[C.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},g)},f.map((function(t){var e=t.value,n=t.label;return r.createElement("li",{role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,className:(0,u.Z)("tabs__item",p,{"tabs__item--active":w===e}),key:e,ref:function(t){return C.push(t)},onKeyDown:E,onFocus:P,onClick:P},null!=n?n:e)}))),l?(0,r.cloneElement)(h.filter((function(t){return t.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==w})}))))}function d(t){var e=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(e)},t))}},2713:function(t,e,n){var a=(0,n(7294).createContext)(void 0);e.Z=a},952:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return g}});var a=n(7462),r=n(3366),l=(n(7294),n(4137)),i=n(7358),s=n(8448),o=["components"],u={title:"Elastic Search",sidebar_label:"Elastic Search",slug:"/generated/ingestion/sources/elastic-search",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/elastic-search.md"},p="Elastic Search",c={unversionedId:"docs/generated/ingestion/sources/elastic-search",id:"docs/generated/ingestion/sources/elastic-search",isDocsHomePage:!1,title:"Elastic Search",description:"Module elasticsearch",source:"@site/genDocs/docs/generated/ingestion/sources/elastic-search.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/elastic-search",permalink:"/docs/generated/ingestion/sources/elastic-search",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/elastic-search.md",tags:[],version:"current",frontMatter:{title:"Elastic Search",sidebar_label:"Elastic Search",slug:"/generated/ingestion/sources/elastic-search",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/elastic-search.md"},sidebar:"overviewSidebar",previous:{title:"Druid",permalink:"/docs/generated/ingestion/sources/druid"},next:{title:"Feast",permalink:"/docs/generated/ingestion/sources/feast"}},d=[{value:"Module <code>elasticsearch</code>",id:"module-elasticsearch",children:[{value:"Important Capabilities",id:"important-capabilities",children:[],level:3},{value:"Install the Plugin",id:"install-the-plugin",children:[],level:3},{value:"Quickstart Recipe",id:"quickstart-recipe",children:[],level:3},{value:"Config Details",id:"config-details",children:[],level:3},{value:"Code Coordinates",id:"code-coordinates",children:[],level:3}],level:2},{value:"Questions",id:"questions",children:[],level:2}],m={toc:d};function g(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"elastic-search"},"Elastic Search"),(0,l.kt)("h2",{id:"module-elasticsearch"},"Module ",(0,l.kt)("inlineCode",{parentName:"h2"},"elasticsearch")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,l.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Capability"),(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/platform-instances"},"Platform Instance")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Enabled by default")))),(0,l.kt)("p",null,"This plugin extracts the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Metadata for indexes"),(0,l.kt)("li",{parentName:"ul"},"Column types associated with each index field")),(0,l.kt)("h3",{id:"install-the-plugin"},"Install the Plugin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[elasticsearch]'\n")),(0,l.kt)("h3",{id:"quickstart-recipe"},"Quickstart Recipe"),(0,l.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,l.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,l.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: "elasticsearch"\n  config:\n    # Coordinates\n    host: \'localhost:9200\'\n\n    # Credentials\n    username: user # optional\n    password: pass # optional\n\n    # SSL support\n    use_ssl: False\n    verify_certs: False\n    ca_certs: "./path/ca.cert"\n    client_cert: "./path/client.cert"\n    client_key: "./path/client.key"\n    ssl_assert_hostname: False\n    ssl_assert_fingerprint: "./path/cert.fingerprint"\n\n    # Options\n    url_prefix: "" # optional url_prefix\n    env: "PROD"\n    index_pattern:\n      allow: [".*some_index_name_pattern*"]\n      deny: [".*skip_index_name_pattern*"]\n\nsink:\n# sink configs\n\n')),(0,l.kt)("h3",{id:"config-details"},"Config Details"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Note that a ",(0,l.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,l.kt)("details",{open:!0},(0,l.kt)("summary",null,"View All Configuration Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"env"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The environment that all assets produced by this connector belong to"),(0,l.kt)("td",{parentName:"tr",align:null},"PROD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"platform"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The platform that this source connects to"),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"platform_instance"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The instance of the platform that all assets produced by this recipe belong to"),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The elastic search host URI."),(0,l.kt)("td",{parentName:"tr",align:null},"localhost:9200")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The username credential."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The password credential."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"use_ssl"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to use SSL for the connection or not."),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"verify_certs"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to verify SSL certificates."),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ca_certs"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to a certificate authority (CA) certificate."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client_cert"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to the file containing the private key and the certificate, or cert only if using client_key."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client_key"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to the file containing the private key if using separate cert and key files."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ssl_assert_hostname"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Use hostname verification if not False."),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ssl_assert_fingerprint"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Verify the supplied certificate fingerprint if not None."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url_prefix"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"There are cases where an enterprise would have multiple elastic search clusters. One way for them to manage is to have a single endpoint for all the elastic search clusters and use url_prefix for routing requests to different clusters."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"index_pattern"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"AllowDenyPattern (see below for fields)"),(0,l.kt)("td",{parentName:"tr",align:null},"regex patterns for indexes to filter in ingestion."),(0,l.kt)("td",{parentName:"tr",align:null},"{'allow': ","['.*']",", 'deny': ","['^_.",(0,l.kt)("em",{parentName:"td"},"', '^ilm-history."),"']",", 'ignoreCase': True, 'alphabet': '","[A-Za-z0-9 _.-]","'}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"index_pattern.allow"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for process groups to include in ingestion"),(0,l.kt)("td",{parentName:"tr",align:null},"['.*']")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"index_pattern.deny"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for process groups to exclude from ingestion."),(0,l.kt)("td",{parentName:"tr",align:null},"[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"index_pattern.ignoreCase"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching."),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"index_pattern.alphabet"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Allowed alphabets pattern"),(0,l.kt)("td",{parentName:"tr",align:null},"[A-Za-z0-9 _.-]")))))),(0,l.kt)(s.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "ElasticsearchSourceConfig",\n  "description": "Any source that is a primary producer of Dataset metadata should inherit this class",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform": {\n      "title": "Platform",\n      "description": "The platform that this source connects to",\n      "type": "string"\n    },\n    "platform_instance": {\n      "title": "Platform Instance",\n      "description": "The instance of the platform that all assets produced by this recipe belong to",\n      "type": "string"\n    },\n    "host": {\n      "title": "Host",\n      "description": "The elastic search host URI.",\n      "default": "localhost:9200",\n      "type": "string"\n    },\n    "username": {\n      "title": "Username",\n      "description": "The username credential.",\n      "type": "string"\n    },\n    "password": {\n      "title": "Password",\n      "description": "The password credential.",\n      "type": "string"\n    },\n    "use_ssl": {\n      "title": "Use Ssl",\n      "description": "Whether to use SSL for the connection or not.",\n      "default": false,\n      "type": "boolean"\n    },\n    "verify_certs": {\n      "title": "Verify Certs",\n      "description": "Whether to verify SSL certificates.",\n      "default": false,\n      "type": "boolean"\n    },\n    "ca_certs": {\n      "title": "Ca Certs",\n      "description": "Path to a certificate authority (CA) certificate.",\n      "type": "string"\n    },\n    "client_cert": {\n      "title": "Client Cert",\n      "description": "Path to the file containing the private key and the certificate, or cert only if using client_key.",\n      "type": "string"\n    },\n    "client_key": {\n      "title": "Client Key",\n      "description": "Path to the file containing the private key if using separate cert and key files.",\n      "type": "string"\n    },\n    "ssl_assert_hostname": {\n      "title": "Ssl Assert Hostname",\n      "description": "Use hostname verification if not False.",\n      "default": false,\n      "type": "boolean"\n    },\n    "ssl_assert_fingerprint": {\n      "title": "Ssl Assert Fingerprint",\n      "description": "Verify the supplied certificate fingerprint if not None.",\n      "type": "string"\n    },\n    "url_prefix": {\n      "title": "Url Prefix",\n      "description": "There are cases where an enterprise would have multiple elastic search clusters. One way for them to manage is to have a single endpoint for all the elastic search clusters and use url_prefix for routing requests to different clusters.",\n      "default": "",\n      "type": "string"\n    },\n    "index_pattern": {\n      "title": "Index Pattern",\n      "description": "regex patterns for indexes to filter in ingestion.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [\n          "^_.*",\n          "^ilm-history.*"\n        ],\n        "ignoreCase": true,\n        "alphabet": "[A-Za-z0-9 _.-]"\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    }\n  },\n  "additionalProperties": false,\n  "definitions": {\n    "AllowDenyPattern": {\n      "title": "AllowDenyPattern",\n      "description": "A class to store allow deny regexes",\n      "type": "object",\n      "properties": {\n        "allow": {\n          "title": "Allow",\n          "description": "List of regex patterns for process groups to include in ingestion",\n          "default": [\n            ".*"\n          ],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "deny": {\n          "title": "Deny",\n          "description": "List of regex patterns for process groups to exclude from ingestion.",\n          "default": [],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "ignoreCase": {\n          "title": "Ignorecase",\n          "description": "Whether to ignore case sensitivity during pattern matching.",\n          "default": true,\n          "type": "boolean"\n        },\n        "alphabet": {\n          "title": "Alphabet",\n          "description": "Allowed alphabets pattern",\n          "default": "[A-Za-z0-9 _.-]",\n          "type": "string"\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,l.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Class Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.elastic_search.ElasticsearchSource")),(0,l.kt)("li",{parentName:"ul"},"Browse on ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/elastic_search.py"},"GitHub"))),(0,l.kt)("h2",{id:"questions"},"Questions"),(0,l.kt)("p",null,"If you've got any questions on configuring ingestion for Elastic Search, feel free to ping us on ",(0,l.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack")))}g.isMDXComponent=!0}}]);