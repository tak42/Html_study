(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var i,o=(i=t(7294))&&i.__esModule?i:{default:i},a=t(1063),c=t(4651),s=t(7426);var l={};function d(e,n,t,r){if(e&&a.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(i?"%"+i:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,i=c.useRouter(),f=o.default.useMemo((function(){var n=a.resolveHref(i,e.href,!0),t=r(n,2),o=t[0],c=t[1];return{href:o,as:e.as?a.resolveHref(i,e.as):c||o}}),[i,e.href,e.as]),u=f.href,p=f.as,h=e.children,m=e.replace,x=e.shallow,g=e.scroll,j=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var v=(n=o.default.Children.only(h))&&"object"===typeof n&&n.ref,y=s.useIntersection({rootMargin:"200px"}),_=r(y,2),w=_[0],b=_[1],k=o.default.useCallback((function(e){w(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,w]);o.default.useEffect((function(){var e=b&&t&&a.isLocalURL(u),n="undefined"!==typeof j?j:i&&i.locale,r=l[u+"%"+p+(n?"%"+n:"")];e&&!r&&d(i,u,p,{locale:n})}),[p,u,b,j,t,i]);var C={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,i,o,c,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),n[i?"replace":"push"](t,r,{shallow:o,locale:s,scroll:c}))}(e,i,u,p,m,x,g,j)},onMouseEnter:function(e){a.isLocalURL(u)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),d(i,u,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var N="undefined"!==typeof j?j:i&&i.locale,L=i&&i.isLocaleDomain&&a.getDomainLocale(p,N,i&&i.locales,i&&i.domainLocales);C.href=L||a.addBasePath(a.addLocale(p,N,i&&i.defaultLocale))}return o.default.cloneElement(n,C)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,s=i.useRef(),l=i.useState(!1),d=r(l,2),f=d[0],u=d[1],p=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:i,elements:r}),t}(t),i=r.id,o=r.observer,a=r.elements;return a.set(e,n),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(i))}}(e,(function(e){return e&&u(e)}),{rootMargin:n}))}),[t,n,f]);return i.useEffect((function(){if(!a&&!f){var e=o.requestIdleCallback((function(){return u(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),[p,f]};var i=t(7294),o=t(3447),a="undefined"!==typeof IntersectionObserver;var c=new Map},2562:function(e,n,t){"use strict";t.r(n);var r=t(9008),i=t(1664),o=t(9163),a=t(5893),c=o.ZP.div.withConfig({displayName:"pages__Container",componentId:"sc-eccczk-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;min-height:100vh;padding:0 0.5rem;"]),s=o.ZP.main.withConfig({displayName:"pages__Main",componentId:"sc-eccczk-1"})(["display:flex;flex:1;flex-direction:column;align-items:center;justify-content:center;padding:5rem 0;"]),l=o.ZP.h1.withConfig({displayName:"pages__Title",componentId:"sc-eccczk-2"})(["margin:0;font-size:4rem;line-height:1.15;text-align:center;a{color:#0070f3;text-decoration:none;}a:hover,a:focus,a:active{text-decoration:underline;}"]),d=o.ZP.p.withConfig({displayName:"pages__Description",componentId:"sc-eccczk-3"})(["font-size:1.5rem;line-height:1.5;text-align:center;"]),f=o.ZP.code.withConfig({displayName:"pages__Code",componentId:"sc-eccczk-4"})(["padding:0.75rem;font-family:Menlo,'Monaco, Lucida Console','Liberation Mono','DejaVu Sans Mono','Bitstream Vera Sans Mono','Courier New',monospace;font-size:1.1rem;background:#fafafa;border-radius:5px;"]),u=o.ZP.div.withConfig({displayName:"pages__Grid",componentId:"sc-eccczk-5"})(["display:flex;flex-wrap:wrap;align-items:center;justify-content:center;max-width:800px;margin-top:3rem;@media (max-width:600px){flex-direction:column;width:100%;}"]),p=o.ZP.a.withConfig({displayName:"pages__Card",componentId:"sc-eccczk-6"})(["width:45%;padding:1.5rem;margin:1rem;color:inherit;text-align:left;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;transition:color 0.15s ease,border-color 0.15s ease;:hover,:focus,:active{color:#0070f3;border-color:#0070f3;}h2{margin:0 0 1rem;font-size:1.5rem;}p{margin:0;font-size:1.25rem;line-height:1.5;}"]),h=o.ZP.footer.withConfig({displayName:"pages__Footer",componentId:"sc-eccczk-7"})(["display:flex;align-items:center;justify-content:center;width:100%;height:100px;border-top:1px solid #eaeaea;a{display:flex;flex-grow:1;align-items:center;justify-content:center;}"]),m=o.ZP.span.withConfig({displayName:"pages__Logo",componentId:"sc-eccczk-8"})(["height:1em;margin-left:0.5rem;"]);n.default=function(){return(0,a.jsxs)(c,{children:[(0,a.jsxs)(r.default,{children:[(0,a.jsx)("title",{children:"Create Next App"}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("link",{rel:"icon",href:"favicon.ico"})]}),(0,a.jsxs)(s,{children:[(0,a.jsxs)(l,{children:["Welcome to ",(0,a.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,a.jsxs)(d,{children:["Get started by editing ",(0,a.jsx)(f,{children:"pages/index.js"})]}),(0,a.jsxs)(u,{children:[(0,a.jsxs)(p,{href:"https://nextjs.org/docs",children:[(0,a.jsx)("h2",{children:"Documentation \u2192"}),(0,a.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,a.jsxs)(p,{href:"https://nextjs.org/learn",children:[(0,a.jsx)("h2",{children:"Learn \u2192"}),(0,a.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,a.jsxs)(p,{href:"https://github.com/vercel/next.js/tree/master/examples",children:[(0,a.jsx)("h2",{children:"Examples \u2192"}),(0,a.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,a.jsxs)(p,{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",children:[(0,a.jsx)("h2",{children:"Deploy \u2192"}),(0,a.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/",children:(0,a.jsx)("a",{children:"home"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/list/print_a4",children:(0,a.jsx)("a",{target:"_blank",children:"A4 print"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/hello_world",children:(0,a.jsx)("a",{target:"_blank",children:"hello world"})})})]}),(0,a.jsx)(p,{onClick:function(){window.open("pages/list/printa4.html")},children:(0,a.jsx)("h2",{children:"A4 print \u2192"})})]})]}),(0,a.jsx)(h,{children:(0,a.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,a.jsx)(m,{children:(0,a.jsx)("img",{src:"vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2562)}])},9008:function(e,n,t){e.exports=t(639)},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[163,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);