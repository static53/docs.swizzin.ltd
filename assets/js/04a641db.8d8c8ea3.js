(window.webpackJsonp=window.webpackJsonp||[]).push([[4,17,38],{163:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<r;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},166:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(170),s=n(165),c=n(58),i=n.n(c),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,p=e.values,d=e.groupId,m=e.className,b=Object(r.a)(),y=b.tabGroupChoices,h=b.setTabGroupChoices,f=Object(a.useState)(c),v=f[0],g=f[1],j=Object(a.useState)(!1),O=j[0],k=j[1];if(null!=d){var w=y[d];null!=w&&w!==v&&p.some((function(e){return e.value===w}))&&g(w)}var T=function(e){g(e),null!=d&&h(d,e)},x=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||k(!0)},C=function(){k(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",N),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",N),window.removeEventListener("mousedown",C)}}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t},m)},p.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(s.a)("tabs__item",t,i.a.tabItem,{"tabs__item--active":v===t}),style:O?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),N(e)},onFocus:function(){return T(t)},onClick:function(){T(t),k(!1)},onPointerDown:function(){return k(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},167:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},168:function(e,t,n){"use strict";var a=n(0),o=n(172);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},169:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var a=n(23),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},r=n(0),s={Prism:a.a,theme:o};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=i({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=i({},n,{backgroundColor:null}),o};function m(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var b=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=i({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(r.style=s.plain),void 0!==o&&(r.style=void 0!==r.style?i({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),c(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var s=a?{display:"inline-block"}:{},c=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[s].concat(c))}})),c(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,s=i({},m(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(s.style=void 0!==s.style?i({},s.style,o):o),void 0!==n&&(s.key=n),a&&(s.className+=" "+a),s})),c(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),s=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,s=0,c=[],i=[c];s>-1;){for(;(r=a[s]++)<o[s];){var d=void 0,m=t[s],b=n[s][r];if("string"==typeof b?(m=s>0?m:["plain"],d=b):(m=p(m,b.type),b.alias&&(m=p(m,b.alias)),d=b.content),"string"==typeof d){var y=d.split(l),h=y.length;c.push({types:m,content:y[0]});for(var f=1;f<h;f++)u(c),i.push(c=[]),c.push({types:m,content:y[f]})}else s++,t.push(m),n.push(d),a.push(0),o.push(d.length)}s--,t.pop(),n.pop(),a.pop(),o.pop()}return u(c),i}(void 0!==s?this.tokenize(t,a,s,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);t.a=b},170:function(e,t,n){"use strict";var a=n(0),o=n(171);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},171:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},172:function(e,t,n){"use strict";var a=n(0),o=n.n(a).a.createContext(void 0);t.a=o},173:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,r]=t;if(a&&r){a=parseInt(a),r=parseInt(r);const e=a<r?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(r+=e);for(let t=a;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(3),o=n(0),r=n.n(o),s=n(165),c=n(169);var i=n(173),l=n.n(i),u={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},p=n(168),d=n(164),m=function(){var e=Object(d.useThemeConfig)().prism,t=Object(p.a)().isDarkTheme,n=e.theme||u,a=e.darkTheme||n;return t?a:n},b=n(175),y=n(59),h=n.n(y),f=/{([\d,-]+)}/,v=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function g(e){var t=e.children,n=e.className,i=e.metastring,u=e.title,p=Object(d.useThemeConfig)().prism,y=Object(o.useState)(!1),g=y[0],j=y[1],O=Object(o.useState)(!1),k=O[0],w=O[1];Object(o.useEffect)((function(){w(!0)}),[]);var T=Object(d.parseCodeBlockTitle)(i)||u,x=Object(o.useRef)(null),N=[],C=m(),E=Array.isArray(t)?t.join(""):t;if(i&&f.test(i)){var D=i.match(f)[1];N=l()(D).filter((function(e){return e>0}))}var P=n&&n.replace(/language-/,"");!P&&p.defaultLanguage&&(P=p.defaultLanguage);var S=E.replace(/\n$/,"");if(0===N.length&&void 0!==P){for(var B,L="",I=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return v(["js","jsBlock"]);case"jsx":case"tsx":return v(["js","jsBlock","jsx"]);case"html":return v(["js","jsBlock","html"]);case"python":case"py":return v(["python"]);default:return v()}}(P),z=E.replace(/\n$/,"").split("\n"),M=0;M<z.length;){var A=M+1,_=z[M].match(I);if(null!==_){switch(_.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":L+=A+",";break;case"highlight-start":B=A;break;case"highlight-end":L+=B+"-"+(A-1)+","}z.splice(M,1)}else M+=1}N=l()(L),S=z.join("\n")}var R=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let r=!1;o.rangeCount>0&&(r=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}n.remove(),r&&(o.removeAllRanges(),o.addRange(r)),a&&a.focus()}(S),j(!0),setTimeout((function(){return j(!1)}),2e3)};return r.a.createElement(c.a,Object(a.a)({},c.b,{key:String(k),theme:C,code:S,language:P}),(function(e){var t,n=e.className,o=e.style,c=e.tokens,i=e.getLineProps,l=e.getTokenProps;return r.a.createElement("div",{className:h.a.codeBlockContainer},T&&r.a.createElement("div",{style:o,className:h.a.codeBlockTitle},T),r.a.createElement("div",{className:Object(s.a)(h.a.codeBlockContent,P)},r.a.createElement("div",{tabIndex:0,className:Object(s.a)(n,h.a.codeBlock,"thin-scrollbar",(t={},t[h.a.codeBlockWithTitle]=T,t))},r.a.createElement("div",{className:h.a.codeBlockLines,style:o},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return N.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return r.a.createElement("span",Object(a.a)({key:t},l({token:e,key:t})))})))})))),r.a.createElement("button",{ref:x,type:"button","aria-label":Object(b.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(h.a.copyButton),onClick:R},g?r.a.createElement(b.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(b.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return m}));var a=n(3),o=n(8),r=(n(0),n(163)),s=n(166),c=n(167),i=n(174),l={},u={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",version:"current",frontMatter:{}},p=[],d={toc:p};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"code"},Object(r.b)(s.a,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"status",mdxType:"TabItem"},Object(r.b)(i.a,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(c.a,{value:"start",mdxType:"TabItem"},Object(r.b)(i.a,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(c.a,{value:"stop",mdxType:"TabItem"},Object(r.b)(i.a,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(c.a,{value:"restart",mdxType:"TabItem"},Object(r.b)(i.a,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(c.a,{value:"enable",mdxType:"TabItem"},Object(r.b)(i.a,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(c.a,{value:"disable",mdxType:"TabItem"},Object(r.b)(i.a,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}m.isMDXComponent=!0},62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(8),r=(n(0),n(163)),s={},c={unversionedId:"snippets/deprecated",id:"snippets/deprecated",isDocsHomePage:!1,title:"deprecated",description:"----",source:"@site/docs/snippets/deprecated.mdx",sourceDirName:"snippets",slug:"/snippets/deprecated",permalink:"/snippets/deprecated",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/deprecated.mdx",version:"current",frontMatter:{}},i=[],l={toc:i};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("hr",null),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This application has been deprecated and removed from swizzin."))),Object(r.b)("p",null,"One or more of these reasons can apply to why this application was removed:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We have conducted surveys among our userbase to determine which apps were being used, and less than 2% have expressed their interest in this application."),Object(r.b)("li",{parentName:"ul"},"The application is severely out of date or no longer maintained, which causes us a severe headache when it comes to supporting it. While not a primary factor, this is very often a very strong support to other reasons."),Object(r.b)("li",{parentName:"ul"},"The application has reached its EOL, and a newer version is available as a separate package")),Object(r.b)("p",null,"We're sorry if this causes you any inconvenience."),Object(r.b)("hr",null))}u.isMDXComponent=!0},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(8),r=(n(0),n(163)),s=n(62),c=n(57),i={id:"couchpotato",title:"Couchpotato",sidebar_label:"Couchpotato"},l={unversionedId:"applications/couchpotato",id:"applications/couchpotato",isDocsHomePage:!1,title:"Couchpotato",description:"Download movies automatically, easily and in the best quality as soon as they are released, via usenet or torrents.",source:"@site/docs/applications/couchpotato.mdx",sourceDirName:"applications",slug:"/applications/couchpotato",permalink:"/applications/couchpotato",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/couchpotato.mdx",version:"current",sidebar_label:"Couchpotato",frontMatter:{id:"couchpotato",title:"Couchpotato",sidebar_label:"Couchpotato"}},u=[{value:"Initial Setup",id:"initial-setup",children:[]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Service Management",id:"service-management",children:[]}],p={toc:u};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(s.default,{mdxType:"Deprecated"}),Object(r.b)("p",null,"Download movies automatically, easily and in the best quality as soon as they are released, via usenet or torrents."),Object(r.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(r.b)("p",null,"Installing CouchPotato is easy. Simply issue the following command from SSH:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install couchpotato\n")),Object(r.b)("p",null,"This command will configure and install CouchPotato for your user."),Object(r.b)("h2",{id:"how-to-access"},"How to Access"),Object(r.b)("p",null,"After CouchPotato has been configured for your user, the application can be accessed from your web browser at ",Object(r.b)("inlineCode",{parentName:"p"},"https://<domain.ltd>/couchpotato")),Object(r.b)("p",null,"During installation, the files were placed in your home folder: ",Object(r.b)("inlineCode",{parentName:"p"},"~/.couchpotato")),Object(r.b)("h2",{id:"service-management"},"Service Management"),Object(r.b)("p",null,"The couchpotato service is managed by systemd. The systemd service file uses the multi-user format, but the service is not configured for any user other than the master."),Object(r.b)("p",null,"The systemd service for couchpotato resides here:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"/etc/systemd/system/couchpotato@.service\n")),Object(r.b)("p",null,"As the service utilizes the multi-user format, you must specify a username along with the command."),Object(r.b)(c.default,{service:"couchpotato@<username>",mdxType:"SystemdTabs"}))}d.isMDXComponent=!0}}]);