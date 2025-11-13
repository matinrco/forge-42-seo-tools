import { RouteManifest, ServerRoute } from '@remix-run/server-runtime/dist/routes.js';
import { SitemapEntry } from '../sitemap.mjs';

interface InternalServerRoute extends Omit<ServerRoute, "children"> {
    module: any;
}
type SitemapFunctionReturnData = SitemapEntry | SitemapEntry[];
type SitemapFunctionReturn = Promise<SitemapFunctionReturnData> | SitemapFunctionReturnData;
interface SitemapHandle<T> {
    sitemap: SitemapFunction<T>;
    [key: string]: unknown;
}
type SitemapFunction<T> = (domain: string, url: string, sitemapData: T) => Promise<SitemapFunctionReturnData> | SitemapFunctionReturnData;
interface RemixSitemapInfo {
    /**
     * The domain to append the urls to
     * @example "https://example.com"
     */
    domain: string;
    /**
     * Any data you want to pass to the sitemap functions used in the handle exports
     * @example { lastUpdated: new Date() }
     */
    sitemapData?: unknown;
    /**
     * An array of patterns to ignore (e.g. ["/status"])
     * @example ["/status"]
     */
    ignore?: string[];
    /**
     * A function to transform the url before adding it to the domain
     * @example (url) => url.replace(/\/$/, "")
     */
    urlTransformer?: (url: string) => string;
    /**
     * The routes object from the remix server build. If not provided, the utility will try to import it.
     */
    routes: RouteManifest<InternalServerRoute | undefined>;
}
/**
 * Helper method used to generate a sitemap from all the remix routes in the project.
 *
 * By default ignores all xml and txt files and any route that matches the pattern "sitemap*"
 *
 *
 * @param sitemapInfo- Object containing the domain, sitemapData, ignore and urlTransformer
 * @throws Error if the remix server build is not found
 * @returns Sitemap string to be passed back to the response.
 */
declare const generateRemixSitemap: (sitemapInfo: RemixSitemapInfo) => Promise<string>;

export { type RemixSitemapInfo, type SitemapFunction, type SitemapFunctionReturn, type SitemapFunctionReturnData, type SitemapHandle, generateRemixSitemap };
