(window.webpackJsonp=window.webpackJsonp||[]).push([[68,16],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(6),s=(n(0),n(138)),o=n(48),r=n(51),l={id:"panel",title:"Panel",sidebar_label:"Panel"},c={unversionedId:"applications/panel",id:"applications/panel",isDocsHomePage:!1,title:"Panel",description:"The dashboard is a graphical user interface which provides a central location for you to keep an eye on server statistics, personal usage information and your services.",source:"@site/docs/applications/panel.mdx",slug:"/applications/panel",permalink:"/applications/panel",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/panel.mdx",version:"current",sidebar_label:"Panel",sidebar:"docs",previous:{title:"Organizr",permalink:"/applications/organizr"},next:{title:"Pyload",permalink:"/applications/pyload"}},p=[{value:"How to Install",id:"how-to-install",children:[]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Configuration options",id:"configuration-options",children:[]},{value:"Service Management",id:"service-management",children:[]},{value:"Features",id:"features",children:[{value:"Application Links",id:"application-links",children:[]},{value:"Server Statistics",id:"server-statistics",children:[]},{value:"Statistic Graphs",id:"statistic-graphs",children:[]},{value:"Personal Usage Statistics",id:"personal-usage-statistics",children:[]},{value:"Service Management",id:"service-management-1",children:[]}]},{value:"Customizing Application Settings",id:"customizing-application-settings",children:[{value:"Application Definitions",id:"application-definitions",children:[]},{value:"Application Definitions with a User",id:"application-definitions-with-a-user",children:[]},{value:"Editing an existing application",id:"editing-an-existing-application",children:[]},{value:"Adding a new definition",id:"adding-a-new-definition",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"I cannot log in",id:"i-cannot-log-in",children:[]},{value:"Logs",id:"logs",children:[]},{value:"Why am I being rate-limited?",id:"why-am-i-being-rate-limited",children:[]}]}],b={rightToc:p};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The dashboard is a graphical user interface which provides a central location for you to keep an eye on server statistics, personal usage information and your services."),Object(s.b)("h2",{id:"how-to-install"},"How to Install"),Object(s.b)("p",null,"By default, the panel is not installed on swizzin installations, you must select it during install or install it afterwards via SSH with the command:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"sudo box install panel\n")),Object(s.b)("p",null,"Setup will create a virtual python environment (",Object(s.b)("inlineCode",{parentName:"p"},"/opt/.venv/swizzin"),") and then clone the github repository (",Object(s.b)("inlineCode",{parentName:"p"},"/opt/swizzin"),")"),Object(s.b)("h2",{id:"how-to-access"},"How to Access"),Object(s.b)("p",null,"If nginx is currently installed, the dashboard is available at the web root for your IP/DNS:"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"https://<hostname.ltd>")),Object(s.b)("p",null,"If nginx is not installed, you can find the panel at"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"http://<hostname.ltd>:8333")),Object(s.b)("h2",{id:"configuration-options"},"Configuration options"),Object(s.b)("p",null,"There should not be much need to alter config options, but a few currently exist. These options should be defined directly in ",Object(s.b)("inlineCode",{parentName:"p"},"/opt/swizzin/swizzin.cfg"),". Please note, all config variables are uppercase:"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"ADMIN_USER"),' - Previously referred to as the "master" user. (Default: User with UID 1000)'),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"FLASK_HTPASSWD_PATH")," - The location of the htpasswd file to protect the panel with. (Default: ",Object(s.b)("inlineCode",{parentName:"p"},"/etc/htpasswd"),")"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"FLASK_AUTH_REALM")," - Text displayed during auth pop up"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"FORMS_LOGIN")," - Whether or not to use the newer forms based login. (Default: ",Object(s.b)("inlineCode",{parentName:"p"},"True"),")"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"HOST")," - IP address to bind to (Default: ",Object(s.b)("inlineCode",{parentName:"p"},"0.0.0.0"),")"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"PORT")," - Bind port (Default: ",Object(s.b)("inlineCode",{parentName:"p"},"8333"),")"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"RATELIMIT_ENABLED")," - Define whether or not rate limiting is active for non-logged-in users. (Default: ",Object(s.b)("inlineCode",{parentName:"p"},"True"),")"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"RATELIMIT_DEFAULT")," - Customize the default rate limiting period. (Default: ",Object(s.b)("inlineCode",{parentName:"p"},'"5 per minute"'),")"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"SHAREDSERVER")," - Defines if this server is a swizzin enterprise server, you will probably never need to set this (Default: ",Object(s.b)("inlineCode",{parentName:"p"},"False"),")"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"DEBUG")," - Turn off production mode and turn on the debugger. Prints response times and displays Python errors in the browser instead of causing internal server errors (Default: ",Object(s.b)("inlineCode",{parentName:"p"},"False"),")"),Object(s.b)("h2",{id:"service-management"},"Service Management"),Object(s.b)("p",null,"The systemd service file resides at:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"/etc/systemd/system/panel.service\n")),Object(s.b)(o.default,{service:"panel",mdxType:"SystemdTabs"}),Object(s.b)("h2",{id:"features"},"Features"),Object(s.b)("h3",{id:"application-links"},"Application Links"),Object(s.b)("p",null,"On the left side of the dashboard, you'll find quick links to the currently installed applications on your slot. No need to remember the endpoints and ports yourself!"),Object(s.b)("h3",{id:"server-statistics"},"Server Statistics"),Object(s.b)("p",null,"The dashboard provides metrics for server load, CPU usage, and the current network metrics for upload and download speeds."),Object(s.b)("h3",{id:"statistic-graphs"},"Statistic Graphs"),Object(s.b)("p",null,"If you have the ",Object(s.b)("inlineCode",{parentName:"p"},"netdata")," package installed, you'll see an additional tab in the navbar for Stats."),Object(s.b)("h3",{id:"personal-usage-statistics"},"Personal Usage Statistics"),Object(s.b)("p",null,"You can find your disk quota here."),Object(s.b)("h3",{id:"service-management-1"},"Service Management"),Object(s.b)("p",null,"You can see at a glance whether or not your services are currently running. You can also start and stop services directly from the panel, if you just need to quickly restart a service without SSH-ing into your slot."),Object(s.b)("h2",{id:"customizing-application-settings"},"Customizing Application Settings"),Object(s.b)("p",null,"Application profiles can be adjusted to your needs by editing the file ",Object(s.b)("inlineCode",{parentName:"p"},"/opt/swizzin/core/custom/profiles.py"),". While this file is largely just variable definitions, it is Python, so be aware that indentation is extremely important. Please note, it is imperative that you do not touch the ",Object(s.b)("inlineCode",{parentName:"p"},"import")," definition at the top of this file."),Object(s.b)("h3",{id:"application-definitions"},"Application Definitions"),Object(s.b)("p",null,"Most of the application options are self-explanatory, nevertheless, things can get confusing. Here's a list of options you can currently define and their meaning/usage."),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"name")," - The name of the application"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"pretty_name")," - A pretty version of the name, meant for printing in html templates"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"process")," - The name of the process to search for when running ",Object(s.b)("inlineCode",{parentName:"p"},"app_status")," (default: ",Object(s.b)("inlineCode",{parentName:"p"},"name"),")"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"runas")," - The user of the process to search for when running ",Object(s.b)("inlineCode",{parentName:"p"},"app_status")," (default: ",Object(s.b)("inlineCode",{parentName:"p"},"user"),")"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"scheme")," - Use to force HTTP if reverse proxy is disabled (default: current http scheme, usually https)"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"baseurl")," - The base URL and/or port of the application. If undefined, no sidebar link will be created."),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"urloverride")," - A complete override of the URL. If true, will supersede a baseurl/scheme definition. Example: ",Object(s.b)("inlineCode",{parentName:"p"},"https://plex.example.com")," (default: ",Object(s.b)("inlineCode",{parentName:"p"},"False"),")"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"systemd")," - The name of the systemd service (default: ",Object(s.b)("inlineCode",{parentName:"p"},"name"),")"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"img")," - The name of your brand app icon. This directive can allow you to reuse already existing icons (i.e. for a 4k radarr instance). (default: ",Object(s.b)("inlineCode",{parentName:"p"},"name"),")"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"check_theD")," - If ",Object(s.b)("inlineCode",{parentName:"p"},"True"),", the panel will use ",Object(s.b)("inlineCode",{parentName:"p"},"systemctl is-active")," rather than searching ",Object(s.b)("inlineCode",{parentName:"p"},"ps")," when running ",Object(s.b)("inlineCode",{parentName:"p"},"app_status")," (default: ",Object(s.b)("inlineCode",{parentName:"p"},"False"),")"),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"There is a very large performance penalty when enabling a service with ",Object(s.b)("inlineCode",{parentName:"p"},"check_theD"),". The following response times speak for themselves."),Object(s.b)("pre",{parentName:"div"},Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'#check_theD enabled for 14 services\n"GET /apps/status HTTP/1.1" 200 1163 0.226762\n#check_theD enabled for a single service\n"GET /apps/status HTTP/1.1" 200 1164 0.043281\n#check_theD enabled for no services\n"GET /apps/status HTTP/1.1" 200 1164 0.026525\n')),Object(s.b)("p",{parentName:"div"},"Given the results, it is important to remember to use ",Object(s.b)("inlineCode",{parentName:"p"},"check_theD")," sparingly. As such, it is not enabled by default in any default swizzin profiles."))),Object(s.b)("h3",{id:"application-definitions-with-a-user"},"Application Definitions with a User"),Object(s.b)("p",null,"If for some reason your application requires extra information specific to the user's context, the application's meta profile can be called with the user context."),Object(s.b)("h3",{id:"editing-an-existing-application"},"Editing an existing application"),Object(s.b)("p",null,"If you want to edit the variables of already profiled applications, you simply need to make a new class definition while calling the same class as the template."),Object(s.b)("p",null,"Let's take an application that many users request to make changes to: Plex. Say my Plex instance isn't at port 32400 for some reason (perhaps I have a custom docker container running). If I wanted my dashboard link to instead use port 31400, I can easily make this change by adding two lines of code to ",Object(s.b)("inlineCode",{parentName:"p"},"core/custom/profiles.py"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'class plex_meta(plex_meta):\n    baseurl = ":31400/web"\n')),Object(s.b)("p",null,'It\'s not necessary to add any other already-defined variables unless you wish to change them. This layout will only override the definitions which have been altered by us in the custom profile and use the defaults for everything else. But why stop there? We can also do things like change the "Pretty Name" of Plex displayed on the panel.'),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'class plex_meta(plex_meta):\n    baseurl = ":31400/web"\n    pretty_name = "PLEX MEDIA SERVER"\n')),Object(s.b)("p",null,'Now, instead of "Plex" the sidebar link and service status name will be displayed as "PLEX MEDIA SERVER". Why am I yelling? I have no idea.'),Object(s.b)("h3",{id:"adding-a-new-definition"},"Adding a new definition"),Object(s.b)("p",null,"Another commonly requested task is adding link and service status for applications not managed by swizzin. For instance, some users may have a second instance of Radarr running which they use to manage their 4k libraries. Let's add a new definition -- it won't be based on anything else, so we'll start fresh and define everything we need to make the service show up."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'class radarr4k_meta:\n    name = "radarr4k"\n    pretty_name = "4K Radarr"\n    baseurl = "/radarr4k"\n    systemd = "radarr4k@"\n    check_theD = True\n    img = "radarr"\n')),Object(s.b)("p",null,"Since we enabled the checking of systemd services for this unit, we should enable it for the regular Radarr unit as well; otherwise, we won't be able to tell which Radarr is actually running when checking if it is active."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"class radarr_meta(radarr_meta):\n    check_theD = True\n")),Object(s.b)("p",null,"In order to tell the panel to check for the new application, simply create a lock file using SSH with the rest of your swizzin applications:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"sudo touch /install/.radarr4k.lock\n")),Object(s.b)("p",null,"Finally, if you want to add an application icon to the sidebar, simply add a similarly named .png (or use the ",Object(s.b)("inlineCode",{parentName:"p"},"img")," variable) to the ",Object(s.b)("inlineCode",{parentName:"p"},"static/img/brands")," folder. i.e. ",Object(s.b)("inlineCode",{parentName:"p"},"static/img/brands/radarr4k.png"),"."),Object(s.b)("p",null,"Once you're happy with your edits, don't forget to restart the panel:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"systemctl restart panel\n")),Object(s.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(s.b)(r.default,{mdxType:"Troubleshooting"}),Object(s.b)("h3",{id:"i-cannot-log-in"},"I cannot log in"),Object(s.b)("p",null,"You're probably running some browser plugins which are causing interference with the swizzin panel due to the way basic http auth is being handled. Please try to disable the plugin, use a different browser or use a private session without plugins to confirm your login still works, and try isolate the issue before reaching out for help."),Object(s.b)("h3",{id:"logs"},"Logs"),Object(s.b)("p",null,"You can retrieve the logs of panel by running ",Object(s.b)("inlineCode",{parentName:"p"},"sudo journalctl -u panel"),". The logs contain the output of the python application."),Object(s.b)("h3",{id:"why-am-i-being-rate-limited"},"Why am I being rate-limited?"),Object(s.b)("p",null,"As of October 31st, 2020, the swizzin panel now does rate limiting to reduce the ability of an unauthenticated attacker to brute force basic authentication passwords against the swizzin panel. This rate limiting should not be in effect for logged-in users. If you wish to disable this behavior, you can define ",Object(s.b)("inlineCode",{parentName:"p"},"RATELIMIT_ENABLED = False")," in ",Object(s.b)("inlineCode",{parentName:"p"},"swizzin.cfg"),"."))}d.isMDXComponent=!0},139:function(e,t,n){"use strict";var a=n(0),i=n.n(a),s=n(142),o=n(140),r=n(50),l=n.n(r),c=37,p=39;t.a=function(e){var t=e.block,n=e.children,r=e.defaultValue,b=e.values,d=e.groupId,u=e.className,h=Object(s.a)(),m=h.tabGroupChoices,f=h.setTabGroupChoices,O=Object(a.useState)(r),j=O[0],g=O[1],y=Object(a.useState)(!1),v=y[0],w=y[1];if(null!=d){var N=m[d];null!=N&&N!==j&&b.some((function(e){return e.value===N}))&&g(N)}var T=function(e){g(e),null!=d&&f(d,e)},C=[],k=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},x=function(){w(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",k),window.addEventListener("mousedown",x),function(){window.removeEventListener("keydown",k),window.removeEventListener("mousedown",x)}}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},u)},b.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(o.a)("tabs__item",t,l.a.tabItem,{"tabs__item--active":j===t}),style:v?{}:{outline:"none"},key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e),k(e)},onFocus:function(){return T(t)},onClick:function(){T(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===j}))[0]))}},48:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(2),i=n(6),s=(n(0),n(138)),o=n(139),r=n(141),l=n(143),c={},p={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",version:"current"},b=[],d={rightToc:b};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("div",{className:"code"},Object(s.b)(o.a,{defaultValue:"start",values:[{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(s.b)(r.a,{value:"start",mdxType:"TabItem"},Object(s.b)(l.a,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(s.b)(r.a,{value:"stop",mdxType:"TabItem"},Object(s.b)(l.a,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(s.b)(r.a,{value:"restart",mdxType:"TabItem"},Object(s.b)(l.a,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(s.b)(r.a,{value:"enable",mdxType:"TabItem"},Object(s.b)(l.a,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(s.b)(r.a,{value:"disable",mdxType:"TabItem"},Object(s.b)(l.a,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}u.isMDXComponent=!0},51:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),s=(n(0),n(138)),o={},r={unversionedId:"snippets/troubleshooting",id:"snippets/troubleshooting",isDocsHomePage:!1,title:"troubleshooting",description:"You can always also try the general troubleshooting tips written in our guide. They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!",source:"@site/docs/snippets/troubleshooting.md",slug:"/snippets/troubleshooting",permalink:"/snippets/troubleshooting",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/troubleshooting.md",version:"current"},l=[],c={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"You can always also try the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/troubleshooting"}),"general troubleshooting tips written in our guide"),". They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!"))))}p.isMDXComponent=!0}}]);