function a(o=[]){return o.map(e=>Object.entries(e).map(([r,t])=>r==="userAgent"?`User-agent: ${t}`:r==="crawlDelay"?`Crawl-delay: ${t}`:r==="allow"?t.map(n=>`Allow: ${n}`).join(`
`):r==="disallow"?t.map(n=>`Disallow: ${n}`).join(`
`):`Sitemap: ${t}`).join(`
`)).join(`
`)}export{a as generateRobotsTxt};
//# sourceMappingURL=robots.mjs.map