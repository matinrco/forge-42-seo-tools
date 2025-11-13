"use strict";var a=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var p=Object.prototype.hasOwnProperty;var c=(n,t)=>{for(var o in t)a(n,o,{get:t[o],enumerable:!0})},w=(n,t,o,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of g(t))!p.call(n,r)&&r!==o&&a(n,r,{get:()=>t[r],enumerable:!(i=l(t,r))||i.enumerable});return n};var b=n=>w(a({},"__esModule",{value:!0}),n);var u={};c(u,{generateRobotsTxt:()=>m});module.exports=b(u);function m(n=[]){return n.map(o=>Object.entries(o).map(([r,e])=>r==="userAgent"?`User-agent: ${e}`:r==="crawlDelay"?`Crawl-delay: ${e}`:r==="allow"?e.map(s=>`Allow: ${s}`).join(`
`):r==="disallow"?e.map(s=>`Disallow: ${s}`).join(`
`):`Sitemap: ${e}`).join(`
`)).join(`
`)}0&&(module.exports={generateRobotsTxt});
//# sourceMappingURL=robots.js.map