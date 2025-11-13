interface LanguageAlternate {
    hreflang: string;
    href: string;
}
interface SitemapVideoEntry {
    url: string;
    thumbnailUrl: string;
    title: string;
    description: string;
    contentLocation: string;
    playerLocation: string;
    duration?: string;
    expirationDate?: string;
    rating?: string;
    viewCount?: string;
    publicationDate?: string;
    familyFriendly?: "yes" | "no";
    restriction?: {
        relationship: "allow" | "disallow";
        value: string;
    };
    platform?: {
        relationship: "allow" | "disallow";
        value: ("web" | "mobile" | "tv")[];
    };
    requiresSubscription?: "yes" | "no";
    uploader?: {
        url?: string;
        name: string;
    };
    live?: "yes" | "no";
    tags?: string[];
}
interface SitemapIndexEntry {
    url: string;
    lastmod: string;
}
interface SitemapNewsEntry {
    publication: {
        name: string;
        language: string;
    };
    publicationDate: string;
    title: string;
}
type SitemapImageEntry = string;
interface SitemapEntry {
    route: string;
    changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
    priority?: 0.0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0;
    lastmod?: string;
    images?: string[];
    news?: SitemapNewsEntry[];
    videos?: SitemapVideoEntry[];
    alternateLinks?: LanguageAlternate[];
}
interface SitemapRoute {
    url: string;
    lastmod?: string;
    changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
    priority?: 0.0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0;
    sitemapEntries?: SitemapEntry | SitemapEntry[];
}
/**
 * Helper method used to generate sitemap-index.xml file from an array of sitemaps
 * @param sitemaps Array of sitemaps with url to the sitemaps and lastmod strings
 * @returns Generated sitemap-index xml file as a string
 */
declare const generateSitemapIndex: (sitemaps: SitemapIndexEntry[]) => string;
declare const generateVideoSitemapData: (videos: SitemapEntry["videos"]) => string;
declare const generateNewsSitemapData: (news: SitemapEntry["news"]) => string;
declare const generateImageSitemapData: (images: SitemapEntry["images"]) => string;
declare const generateAlternateLinks: (links: SitemapEntry["alternateLinks"]) => string;
declare const generateSitemapEntry: (entry: SitemapEntry) => string;
/**
 * Helper method used to generate a sitemap from all the provided routes
 *
 * By default ignores all xml and txt files and any route that matches the pattern "sitemap*"
 *
 *
 * @param domain - The domain to append the urls to
 * @param routes - All the sitemap routes to generate
 * @param ignore - An array of patterns to ignore (e.g. ["/status"])
 * @param urlTransformer - A function to transform the url before adding it to the domain
 * @returns Sitemap returned as a string
 */
declare const generateSitemap: ({ domain, ignore, routes, urlTransformer, }: {
    /**
     * The domain to append the urls to (e.g. https://example.com)
     */
    domain: string;
    /**
     * All the sitemap routes to generate
     * @example [{url: "/page", lastmod: "2021-01-01", changefreq: "daily", priority: 0.5}]
     */
    routes: SitemapRoute[];
    /**
     * An array of patterns to ignore (e.g. ["/status"])
     */
    ignore?: string[];
    /**
     * A function to transform the url before adding it
     * @example (url) => url.replace("/page", "/new-page")
     * @default undefined
     * */
    urlTransformer?: (url: string) => string;
}) => Promise<string>;

export { type LanguageAlternate, type SitemapEntry, type SitemapImageEntry, type SitemapIndexEntry, type SitemapNewsEntry, type SitemapRoute, type SitemapVideoEntry, generateAlternateLinks, generateImageSitemapData, generateNewsSitemapData, generateSitemap, generateSitemapEntry, generateSitemapIndex, generateVideoSitemapData };
