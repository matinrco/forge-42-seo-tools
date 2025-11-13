import c from"url-pattern";var m=e=>e.replaceAll(/>\s+</g,"><").replaceAll(/\s+([^<>\s][^<>]*[^<>\s])\s+/g," $1 ").replaceAll(/(\s+)/g," ").trim(),f=e=>m(`<?xml version="1.0" encoding="UTF-8"?>
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
`):"",l=e=>{let t=d(e.alternateLinks),n=h(e.images),a=w(e.news),i=u(e.videos);return e.route?`
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
  `:""},$=e=>m(`
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
    </urlset>`),x=({routes:e,domain:t,ignore:n,urlTransformer:a})=>e.map(i=>{let r=i.url.startsWith("/")?i.url:`/${i.url}`;if(n.some(o=>new c(o).match(r)!==null))return"";if(i.sitemapEntries)return(Array.isArray(i.sitemapEntries)?i.sitemapEntries:[i.sitemapEntries]).map(g=>l(g)).join(`
`);let s=a?a(r):r,p=t+s;return l({route:p,lastmod:i.lastmod,changefreq:i.changefreq,priority:i.priority})}).join(`
`),v=async({domain:e,ignore:t,routes:n,urlTransformer:a})=>{let i=["*.xml","*.txt","sitemap*",...t??[]],r=x({domain:e,ignore:i,routes:n,urlTransformer:a});return $(r)};export{f as a,u as b,w as c,h as d,d as e,l as f,v as g};
//# sourceMappingURL=chunk-5ZGWRL5O.mjs.map