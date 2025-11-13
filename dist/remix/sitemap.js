"use strict";var w=Object.create;var l=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var S=(e,t)=>{for(var i in t)l(e,i,{get:t[i],enumerable:!0})},u=(e,t,i,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of f(t))!y.call(e,n)&&n!==i&&l(e,n,{get:()=>t[n],enumerable:!(r=h(t,n))||r.enumerable});return e};var $=(e,t,i)=>(i=e!=null?w(x(e)):{},u(t||!e||!e.__esModule?l(i,"default",{value:e,enumerable:!0}):i,e)),v=e=>u(l({},"__esModule",{value:!0}),e);var T={};S(T,{generateRemixSitemap:()=>q});module.exports=v(T);var g=$(require("url-pattern")),R=e=>e.replaceAll(/>\s+</g,"><").replaceAll(/\s+([^<>\s][^<>]*[^<>\s])\s+/g," $1 ").replaceAll(/(\s+)/g," ").trim();var E=e=>e?e?.map(t=>`
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
        ${t.tags?t.tags.map(i=>`<video:tag>${i}</video:tag>`).join(`
`):""}
      </video:video>
    `).join(`
`):"",b=e=>e?e?.map(t=>`
      <news:news>
        <news:publication>
          <news:name>${t.publication.name}</news:name>
          <news:language>${t.publication.language}</news:language>
        </news:publication>
        <news:publication_date>${t.publicationDate}</news:publication_date>
        <news:title>${t.title}</news:title>
      </news:news>
    `).join(`
`):"",D=e=>e?e?.map(t=>`
      <image:image>
        <image:loc>${t}</image:loc>
      </image:image>
    `).join(`
`):"",_=e=>e?e.map(t=>`<xhtml:link rel="alternate" hreflang="${t.hreflang}" href="${t.href}" />`).join(`
`):"",c=e=>{let t=_(e.alternateLinks),i=D(e.images),r=b(e.news),n=E(e.videos);return e.route?`
    <url>
      <loc>${e.route}</loc>
      ${e.lastmod?`<lastmod>${e.lastmod}</lastmod>`:""}
      ${e.changefreq?`<changefreq>${e.changefreq}</changefreq>`:""}
      ${e.priority?`<priority>${e.priority}</priority>`:""}
      ${t}
      ${i}
      ${r}
      ${n}
    </url>
  `:""},L=e=>R(`
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
    </urlset>`),k=({routes:e,domain:t,ignore:i,urlTransformer:r})=>e.map(n=>{let a=n.url.startsWith("/")?n.url:`/${n.url}`;if(i.some(m=>new g.default(m).match(a)!==null))return"";if(n.sitemapEntries)return(Array.isArray(n.sitemapEntries)?n.sitemapEntries:[n.sitemapEntries]).map(p=>c(p)).join(`
`);let o=r?r(a):a,s=t+o;return c({route:s,lastmod:n.lastmod,changefreq:n.changefreq,priority:n.priority})}).join(`
`),d=async({domain:e,ignore:t,routes:i,urlTransformer:r})=>{let n=["*.xml","*.txt","sitemap*",...t??[]],a=k({domain:e,ignore:n,routes:i,urlTransformer:r});return L(a)};var F=(e,t)=>{let i=t,r=[];for(;i&&(r.push(i.path),!(!i.parentId||!e[i.parentId]));)i=e[i.parentId];let n=r.reverse().filter(Boolean).join("/");return n===""?"/":n},I=e=>Object.values(e).map(t=>({...t,url:F(e,t)})),j=async({domain:e,sitemapData:t,routes:i})=>{let r=I(i);return(await Promise.all(r.map(async a=>{let o=a.url;if(a.id==="root")return;let s=a.module?.handle;if(s&&typeof s=="object"&&"sitemap"in s&&typeof s.sitemap=="function"){let m=s.sitemap,p=await m(e,o,t);return{url:o,sitemapEntries:p,id:a.id}}return{url:o,sitemapEntries:null,id:a.id}}))).filter(Boolean)},q=async e=>{let{domain:t,sitemapData:i,ignore:r,urlTransformer:n,routes:a}=e,o=await j({domain:t,sitemapData:i,routes:a});return d({domain:t,routes:o,ignore:r,urlTransformer:n})};0&&(module.exports={generateRemixSitemap});
//# sourceMappingURL=sitemap.js.map