(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[4195],{8653:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/panel-screenshot.045381c.1892.png 1892w",images:[{path:a.p+"assets/ideal-img/panel-screenshot.045381c.1892.png",width:1892,height:1027}],src:a.p+"assets/ideal-img/panel-screenshot.045381c.1892.png",toString:function(){return a.p+"assets/ideal-img/panel-screenshot.045381c.1892.png"},placeholder:void 0,width:1892,height:1027},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAoElEQVQImQXBu24CMRAFUP/SYq/n5WG88P9SmvQU0GBFOAiRhtXNOWll/l5ZXiL6IKLJLFNE5lrrJOapZk9mviUzu+acwUcDmcJU4a3hsCzgpojzBiZ6J1O+HHKGqHxEZCfhvW2xs8huqh82R6H6m9zjVkpBjw7rR1RX+BZQUzRVVO9YhP6Su3+VUh7e2l26j9V1+BbDzEaPGBynn0Xo8g9LT1F4IVLCkgAAAABJRU5ErkJggg==",palette:null}},7186:function(e,t,a){"use strict";var n=a(7294),l=a(4297),r=a(8448),i=a(5654),s=[{label:"curl",cmd:"bash <(curl -sL git.io/swizzin) && . ~/.bashrc"},{label:"wget",cmd:"bash <(wget -qO - git.io/swizzin) && . ~/.bashrc"}];t.Z=function(){return n.createElement(n.Fragment,null,s&&s.length&&n.createElement(l.Z,{defaultValue:s[0].label,values:s.map((function(e,t){return{label:e.label,value:e.label}}))},s.map((function(e,t){return n.createElement(r.Z,{value:e.label},n.createElement("div",{className:"code"},n.createElement(i.Z,{children:e.cmd,className:"bash"})))}))))}},7792:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return te}});var n=a(7294),l=a(1563),r=a(9962),i=a(2511),s={question:"question_3lwZ",title:"title_2Hsw"},o=[{title:n.createElement(n.Fragment,null,"What is swizzin?"),description:n.createElement(n.Fragment,null,"swizzin is a collection of bash scripts for Debian-based servers which helps you automate the boring and repetitive tasks of installing, managing and adminsitering a seedbox server. Originally based on QuickBox, swizzin forked away and brought new life to the project in the form of extended OS support, the nginx webserver, a custom built dashboard and extended application support.")},{title:n.createElement(n.Fragment,null,"Is swizzin actively maintained?"),description:n.createElement(n.Fragment,null,"Yes! swizzin currently supports Debian Stretch, Buster, and Bullseye as well as Ubuntu Bionic and Focal. Packages are kept in working order and reported, reproducible issues are promptly patched. Support for operating systems is subject to change based on availability of upstream support; however, new long-term support versions of Debian & Ubuntu will be added accordingly.")},{title:n.createElement(n.Fragment,null,"Is swizzin bloated?"),description:n.createElement(n.Fragment,null,"swizzin only installs the applications you request and the dependencies required to support them. In addition to this, there are a few other global dependencies installed during setup which are generally required by a large portion of packages. As far as which packages to install, that's completely up to you!")},{title:n.createElement(n.Fragment,null,"Why not put it all in docker?"),description:n.createElement(n.Fragment,null,"We prefer to keep our applications running as close to the metal as possible. There are many valid times and places where docker would be a good systematic choice, however we believe the trade-offs are not worth it for a seedbox scenario. Keeping apps outside of containers helps you grow buffer, and a lets you tinker with everything as much as you want.")},{title:n.createElement(n.Fragment,null,"Is swizzin good?"),description:n.createElement(n.Fragment,null,"It won't end world hunger, it's not going to cure AIDS or adopt all the stray dogs, but it will do what it says it does and make your life easier so there's that.")}];function c(e){var t=e.title,a=e.description;return n.createElement("div",{className:s.question},n.createElement("h3",{className:s.title},t),n.createElement("p",null,a))}var u=function(){return n.createElement("section",{id:"faq",className:s.faq},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6"},o[0]&&n.createElement(c,o[0]),o[1]&&n.createElement(c,o[1])),n.createElement("div",{className:"col col--6"},o[2]&&n.createElement(c,o[2]),o[3]&&n.createElement(c,o[3])),n.createElement("div",{className:"col col--6"}))))},m=a(7462),p=a(6010),d=a(6893),g=a(5697),h="headline_HnFF",f="category_3ZGa",E="title_2hQh";function b(e){var t=e.category,a=e.title,l=e.offset;return n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--"+(12-l)+" col--offset-"+l},n.createElement("div",{className:h},t&&n.createElement("span",{className:f},t),a&&n.createElement("h2",{className:E},a))))}b.propTypes={category:g.PropTypes.string,title:g.PropTypes.string,offset:g.PropTypes.number},b.defaultProps={offset:0};var v=b,w={features:"features_1k3U",applications:"applications_U6oY",button:"button_TK1G"},y=[{title:"Airsonic",url:"applications/airsonic"},{title:"Autobrr",url:"applications/autobrr"},{title:"AutoDL-irssi",url:"applications/autodl"},{title:"Bazarr",url:"applications/bazarr"},{title:"Deluge",url:"applications/deluge"},{title:"DuckDNS",url:"applications/duckdns"},{title:"Emby Server",url:"applications/emby"},{title:"ffmpeg",url:"applications/ffmpeg"},{title:"Filebrowser",url:"applications/filebrowser"},{title:"Flood",url:"applications/flood"},{title:"Jackett",url:"applications/jackett"},{title:"Jellyfin",url:"applications/jellyfin"},{title:"Let's Encrypt",url:"applications/letsencrypt"},{title:"Librespeed",url:"applications/librespeed"},{title:"Lidarr",url:"applications/lidarr"},{title:"The Lounge",url:"applications/lounge"},{title:"Mango",url:"applications/mango"},{title:"Medusa",url:"applications/medusa"},{title:"Navidrome",url:"applications/navidrome"},{title:"Netdata",url:"applications/netdata"},{title:"Nextcloud",url:"applications/nextcloud"},{title:"Nginx",url:"applications/nginx"},{title:"NZBGet",url:"applications/nzbget"},{title:"NZBHydra2",url:"applications/nzbhydra"},{title:"Ombi",url:"applications/ombi"},{title:"Organizr",url:"applications/organizr"},{title:"Plex",url:"applications/plex"},{title:"Prowlarr",url:"applications/prowlarr"},{title:"pyLoad",url:"applications/pyload"},{title:"qBittorrent",url:"applications/qbittorrent"},{title:"Quassel",url:"applications/quassel"},{title:"Quota",url:"applications/quota"},{title:"Radarr",url:"applications/radarr"},{title:"Rapidleech",url:"applications/rapidleech"},{title:"Rclone",url:"applications/rclone"},{title:"Resilio Sync",url:"applications/btsync"},{title:"rTorrent",url:"applications/rtorrent"},{title:"ruTorrent",url:"applications/rutorrent"},{title:"SABnzbd",url:"applications/sabnzbd"},{title:"Shellinabox",url:"applications/shellinabox"},{title:"SickChill",url:"applications/sickchill"},{title:"SickGear",url:"applications/sickgear"},{title:"Sonarr",url:"applications/sonarr"},{title:"Swizzin Panel",url:"applications/panel"},{title:"Syncthing",url:"applications/syncthing"},{title:"Tautulli",url:"applications/tautulli"},{title:"Transmission",url:"applications/transmission"},{title:"Vsftpd",url:"applications/vsftpd"},{title:"Webmin",url:"applications/webmin"},{title:"Wireguard",url:"applications/wireguard"},{title:"X2go",url:"applications/x2go"},{title:"Xmrig",url:"applications/xmrig"},{title:"ZNC",url:"applications/znc"}];function N(e){var t=e.title,a=e.url;return n.createElement("div",{className:(0,p.Z)("col col--2",w.feature,w.applications)},n.createElement(i.Z,{href:a},t))}var z=function(){return n.createElement(n.Fragment,null,y&&y.length>0&&n.createElement("section",{id:"applications",className:w.features},n.createElement("div",{className:"container"},n.createElement(v,{category:"Applications",title:"A whole repository of applications to fit your needs",offset:1}),n.createElement("div",{className:"row"},y.map((function(e,t){return n.createElement(N,(0,m.Z)({key:t},e))}))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--5 col--offset-1"},n.createElement(i.Z,{className:(0,p.Z)("button button--primary button--lg",w.button),href:"https://feathub.com/liaralabs/swizzin"},n.createElement(d.MJI,{size:24})," App and feature requests"))))))},k={features:"features_33CR"},F=[{title:n.createElement(n.Fragment,null,"One command to rule them all"),description:n.createElement(n.Fragment,null,"Install, remove and update apps with ease. Make new users and manage their accounts.")},{title:n.createElement(n.Fragment,null,"All the apps you need"),description:n.createElement(n.Fragment,null,"From autodl to ZNC and everything in between, you won't need to look elsewhere")},{title:n.createElement(n.Fragment,null,"Actively maintained"),description:n.createElement(n.Fragment,null,"Quick response time to breaking changes when new app versions release")},{title:n.createElement(n.Fragment,null,"Helpful community"),description:n.createElement(n.Fragment,null,"Need help setting up or making choices? Our community has your back any time")},{title:n.createElement(n.Fragment,null,"Fast and lean"),description:n.createElement(n.Fragment,null,"Footprint is as light as the choice of your applications")},{title:n.createElement(n.Fragment,null,"Trusted by the industry"),description:n.createElement(n.Fragment,null,"A popular choice of paid hosting providers, as well as  hobbyist self-hosters")},{title:n.createElement(n.Fragment,null,"Multi-user capable"),description:n.createElement(n.Fragment,null,"Share your server with others by making them their own server-wide accounts")},{title:n.createElement(n.Fragment,null,"Little skills necessary"),description:n.createElement(n.Fragment,null,"As long as you can SSH into your server and you know how to read, sky is the limit. Thoroughly fool-proof")},{title:n.createElement(n.Fragment,null,"Stability first"),description:n.createElement(n.Fragment,null,"Built to make those uptimes grow, but not to keep you on last decade's releases. Want features earlier? Switch to the develop branch.")},{title:n.createElement(n.Fragment,null,"Runs even on Raspberry Pis"),description:n.createElement(n.Fragment,null,"If your machine can run 64-bit, it can run our scripts")}];function A(e){var t=e.title,a=e.description;return n.createElement("div",{className:(0,p.Z)("col col--4",k.feature)},n.createElement("div",{className:"card"},n.createElement("div",{className:"card__header"},n.createElement("h3",null,t)),n.createElement("div",{className:"card__body"},n.createElement("p",null,a))))}var Z=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n}return e.splice(6,3),e}(F);return n.createElement(n.Fragment,null,e&&e.length>0&&n.createElement("section",{id:"features",className:k.features},n.createElement("div",{className:"container"},n.createElement(v,{category:"Features",title:"Manage your box with ease and confidence",offset:1}),n.createElement("div",{className:"row"},F.map((function(e,t){return n.createElement(A,(0,m.Z)({key:t},e))}))))))},_=a(4925),S=a.n(_),C=a(9524),x=a(390),q=a(8653),B=a.n(q),L="banner_2id8",U="logo_3_Ij",O="buttons_3MO6",I="button__EX9",D="subtitle_1WsD",G="image_11zC";var P=function(){var e=(0,r.Z)().siteConfig,t=void 0===e?{}:e;return n.createElement("header",{id:"hero",className:(0,p.Z)("hero",L)},n.createElement("div",{className:"container"},n.createElement("img",{src:(0,C.Z)("img/logo-sm.png"),alt:"Logo",className:U}),n.createElement("h1",{className:"hero__title"},t.title),n.createElement("p",{className:(0,p.Z)("hero__subtitle",D)},"An all-in-one seedbox solution for Ubuntu and Debian"),n.createElement("div",{className:O},n.createElement(S(),{className:(0,p.Z)("button button--primary button--lg",I),href:"#quick-start"},"Get Started"),n.createElement(i.Z,{className:(0,p.Z)("button button--info button--lg",I),href:"getting-started"},"Get Help"))),n.createElement(x.Z,{img:B(),className:(0,p.Z)("shadow-md",G)}))},R=a(9583),T="resources_hpxd",H="resource_MIY-",M="card_4S33",Q=[{href:"/getting-started/faqs",icon:n.createElement(R.g_g,{size:48}),description:n.createElement(n.Fragment,null,"Frequently Asked Questions")},{href:"https://discord.gg/sKjs9UM",icon:n.createElement(R.j2d,{size:48}),description:n.createElement(n.Fragment,null,"Join our Discord to keep in touch")},{href:"getting-started",icon:n.createElement(d.yK7,{size:48}),title:n.createElement(n.Fragment,null,"Documentation"),description:n.createElement(n.Fragment,null,"Check our documentation to get your devices up and running in minutes")},{href:"https://github.com/liaralabs/swizzin",icon:n.createElement(d.uOf,{size:48}),title:n.createElement(n.Fragment,null,"Contribute"),description:n.createElement(n.Fragment,null,"Help us improve by submitting bugs and feature requests on GitHub")}],j=function(){return n.createElement(n.Fragment,null,Q&&Q.length>0&&n.createElement("section",{id:"resouces",className:T},n.createElement("div",{className:"container"},n.createElement(v,{category:"Resources",title:"Browse our resources to get started with swizzin",offset:1}),n.createElement("div",{className:"row"},Q[0]&&Q[1]&&n.createElement("div",{className:(0,p.Z)("col",H)},n.createElement(K,Q[0]),n.createElement(K,Q[1])),Q[2]&&n.createElement("div",{className:(0,p.Z)("col",H)},n.createElement(K,Q[2])),Q[3]&&n.createElement("div",{className:(0,p.Z)("col",H)},n.createElement(K,Q[3]))))))};function K(e){var t=e.href,a=e.icon,l=e.title,r=e.description;return n.createElement(i.Z,{className:(0,p.Z)("card",M),to:t},n.createElement("div",{className:"card__header"},a&&n.createElement("div",{className:"card__icon"},a),l&&n.createElement("h3",null,l)),r&&n.createElement("div",{className:"card__body"},n.createElement("p",null,r)))}var V=a(7186),W=a(859),J="quickstart_2AMp",X="button_1mLU",Y="platforms_3dQ9";var $=function(){return n.createElement("section",{id:"quick-start",className:J},n.createElement("div",{className:"container"},n.createElement(v,{category:"Quick Start",title:"Get up and running within minutes",offset:1}),n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--5 col--offset-1"},n.createElement("p",null,"Use the following commands as root to get the swizzin installer up and running. Depending on your choice of packages and your CPU, you can have your applications up and running within just a few minutes!"),n.createElement(i.Z,{className:(0,p.Z)("button button--primary button--lg",X),href:"https://github.com/liaralabs/swizzin/blob/master/CHANGELOG.md"},n.createElement(d.uOf,{size:24})," Changelog")),n.createElement("div",{className:"col col--5"},n.createElement(V.Z,null),n.createElement("div",{className:Y},n.createElement("h3",null,"Supported Platforms"),n.createElement("div",null,n.createElement(W.Uyt,{size:36}),n.createElement(W.E6C,{size:36}),n.createElement("p",null,"(Supports amd64 and arm64)")))))))},ee="main_1Zpl";var te=function(){var e=(0,r.Z)().siteConfig,t=(void 0===e?{}:e).tagline;return n.createElement(l.Z,{description:t},n.createElement(P,null),n.createElement("main",{className:ee},n.createElement(Z,null),n.createElement(z,null),n.createElement($,null),n.createElement(u,null),n.createElement(j,null)))}},4297:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(7294),l=a(50),r=a(6010),i="tabItem_HqPw",s=37,o=39;var c=function(e){var t=e.block,a=e.children,c=e.defaultValue,u=e.values,m=e.groupId,p=e.className,d=(0,l.Z)(),g=d.tabGroupChoices,h=d.setTabGroupChoices,f=(0,n.useState)(c),E=f[0],b=f[1],v=(0,n.useState)(!1),w=v[0],y=v[1];if(null!=m){var N=g[m];null!=N&&N!==E&&u.some((function(e){return e.value===N}))&&b(N)}var z=function(e){b(e),null!=m&&h(m,e)},k=[],F=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},A=function(){y(!1)};return(0,n.useEffect)((function(){return window.addEventListener("keydown",F),window.addEventListener("mousedown",A),function(){window.removeEventListener("keydown",F),window.removeEventListener("mousedown",A)}}),[]),n.createElement("div",null,n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},p)},u.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:0,"aria-selected":E===t,className:(0,r.Z)("tabs__item",t,i,{"tabs__item--active":E===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case o:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),F(e)},onFocus:function(){return z(t)},onClick:function(){z(t),y(!1)},onPointerDown:function(){return y(!1)}},a)}))),n.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===E}))[0]))}}}]);