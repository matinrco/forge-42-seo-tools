"use strict";var y=Object.create;var s=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var S=Object.getPrototypeOf,b=Object.prototype.hasOwnProperty;var E=(e,t)=>{for(var n in t)s(e,n,{get:t[n],enumerable:!0})},p=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of v(t))!b.call(e,i)&&i!==n&&s(e,i,{get:()=>t[i],enumerable:!(a=f(t,i))||a.enumerable});return e};var _=(e,t,n)=>(n=e!=null?y(S(e)):{},p(t||!e||!e.__esModule?s(n,"default",{value:e,enumerable:!0}):n,e)),L=e=>p(s({},"__esModule",{value:!0}),e);var A={};E(A,{generateAlternateLinks:()=>d,generateImageSitemapData:()=>h,generateNewsSitemapData:()=>w,generateSitemap:()=>k,generateSitemapEntry:()=>o,generateSitemapIndex:()=>q,generateVideoSitemapData:()=>u});module.exports=L(A);var g=_(require("url-pattern")),c=e=>e.replaceAll(/>\s+</g,"><").replaceAll(/\s+([^<>\s][^<>]*[^<>\s])\s+/g," $1 ").replaceAll(/(\s+)/g," ").trim(),q=e=>c(`<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${e.map(t=>`
          <sitemap>
            <loc>${t.url}</loc>
            <lastmod>${t.lastmod}</lastmod>
          </sitemap>
        `).join(`
`)}
  </sitemapindex>`),u=e=>e?e?.map(t=>`
      <video:video>
				<video:title>${t.title}</video:title>
				<video:description>${t.description}</video:description>
				<video:thumbnail_loc>${t.thumbnailUrl}</video:thumbnail_loc>

        <video:content_loc>${t.contentLocation}</video:content_loc>
        <video:player_loc>${t.playerLocation}</video:player_loc>
        ${t.duration?`<video:duration>${t.duration}</video:duration>`:""}
        ${t.expirationDate?`<video:expiration_date>${t.expirationDate}</video:expiration_date>`:""}
        ${t.rating?`<video:rating>${t.rating}</video:rating>`:""}
        ${t.viewCount?`<video:view_count>${t.viewCount}</video:view_count>`:""}
        ${t.publicationDate?`<video:publication_date>${t.publicationDate}</video:publication_date>`:""}
        ${t.familyFriendly?`<video:family_friendly>${t.familyFriendly}</video:family_friendly>`:""}
        ${t.restriction?`<video:restriction relationship="${t.restriction.relationship}">${t.restriction.value}</video:restriction>`:""}
        ${t.platform?`<video:platform relationship="${t.platform.relationship}">${t.platform.value.join(" ")}</video:platform>`:""}
        ${t.requiresSubscription?`<video:requires_subscription>${t.requiresSubscription}</video:requires_subscription>`:""}
        ${t.uploader?`<video:uploader${t.uploader.url?` info="${t.uploader.url}"`:""}>${t.uploader.name}</video:uploader>`:""}
        ${t.live?`<video:live>${t.live}</video:live>`:""}
        ${t.tags?t.tags.map(n=>`<video:tag>${n}</video:tag>`).join(`
`):""}
      </video:video>
    `).join(`
`):"",w=e=>e?e?.map(t=>`
      <news:news>
        <news:publication>
          <news:name>${t.publication.name}</news:name>
          <news:language>${t.publication.language}</news:language>
        </news:publication>
        <news:publication_date>${t.publicationDate}</news:publication_date>
        <news:title>${t.title}</news:title>
      </news:news>
    `).join(`
`):"",h=e=>e?e?.map(t=>`
      <image:image>
        <image:loc>${t}</image:loc>
      </image:image>
    `).join(`
`):"",d=e=>e?e.map(t=>`<xhtml:link rel="alternate" hreflang="${t.hreflang}" href="${t.href}" />`).join(`
`):"",o=e=>{let t=d(e.alternateLinks),n=h(e.images),a=w(e.news),i=u(e.videos);return e.route?`
    <url>
      <loc>${e.route}</loc>
      ${e.lastmod?`<lastmod>${e.lastmod}</lastmod>`:""}
      ${e.changefreq?`<changefreq>${e.changefreq}</changefreq>`:""}
      ${e.priority?`<priority>${e.priority}</priority>`:""}
      ${t}
      ${n}
      ${a}
      ${i}
    </url>
  `:""},D=e=>c(`
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-news/0.9 http://www.google.com/schemas/sitemap-news/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-video/1.1 http://www.google.com/schemas/sitemap-video/1.1/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap.xsd http://www.w3.org/TR/xhtml11/xhtml11_schema.html http://www.w3.org/2002/08/xhtml/xhtml1-strict.xsd"
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/TR/xhtml11/xhtml11_schema.html"
        >
      ${e}
    </urlset>`),j=({routes:e,domain:t,ignore:n,urlTransformer:a})=>e.map(i=>{let r=i.url.startsWith("/")?i.url:`/${i.url}`;if(n.some(m=>new g.default(m).match(r)!==null))return"";if(i.sitemapEntries)return(Array.isArray(i.sitemapEntries)?i.sitemapEntries:[i.sitemapEntries]).map(x=>o(x)).join(`
`);let l=a?a(r):r,$=t+l;return o({route:$,lastmod:i.lastmod,changefreq:i.changefreq,priority:i.priority})}).join(`
`),k=async({domain:e,ignore:t,routes:n,urlTransformer:a})=>{let i=["*.xml","*.txt","sitemap*",...t??[]],r=j({domain:e,ignore:i,routes:n,urlTransformer:a});return D(r)};0&&(module.exports={generateAlternateLinks,generateImageSitemapData,generateNewsSitemapData,generateSitemap,generateSitemapEntry,generateSitemapIndex,generateVideoSitemapData});
//# sourceMappingURL=sitemap.js.map