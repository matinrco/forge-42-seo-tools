interface CanonicalLinkOptions<U> {
    /**
     * Transformer function that generates the alternative url for the link tag by looping through the alternatives
     * @param params Object containing the url, alternative and domain
     * @returns The url to be passed to the href attribute of the link tag
     * ```ts
     * urlTransformer: ({ url, alternative, domain }) => {
     * return `${domain}/${alternative}${url}`;
     * }
     * ```
     */
    urlTransformer: (params: {
        url: string;
        alternative: U;
        domain: string;
        canonicalUrl: string;
    }) => string | null;
    /**
     * Transformer function that generates the attributes for the alternative link tag
     * @param params Object containing the url, alternative and domain
     * @returns Record of attributes to be added to the link tag
     *
     * ```ts
     * altAttributesTransformer: ({ url, alternative, domain }) => {
     *  return {
     *    hreflang: alternative,
     *    href: `${domain}/${alternative}${url}`,
     *  };
     * }
     * ```
     */
    altAttributesTransformer?: (params: {
        url: string;
        alternative: U;
        domain: string;
    }) => Omit<CanonicalLink, "tagName" | "rel" | "href">;
    /**
     * Array of alternative languages/urls or whatever you want to generate the alternative links for
     * @example ["en", "bs"]
     */
    alternatives: U[];
    /**
     * The domain of the website
     * @example "https://example.com"
     */
    domain: string;
    /**
     * The url of the current page
     * @example "/some-page"
     */
    url: string;
    /**
     * The canonical url of the current page
     * @example "https://example.com/some-page"
     */
    canonicalUrl?: string;
    /**
     * Object containing the attributes to be added to the canonical link tag
     * @example {rel: "canonical", href: "https://example.com/some-page"}
     *
     * */
    canonicalAttributes?: Record<string, string>;
}
interface CanonicalLink {
    tagName: "link";
    rel: string;
    href: string;
    [key: string]: string;
}
/**
 * Method used to generate the canonical and alternative links for a page
 * @param options CanonicalLinkOptions - Object containing the options for generating the canonical links
 * @param asJson Whether to return the canonical links as an array of objects or a string
 * @returns Returns an array of objects or a string containing the canonical and alternative links
 */
declare const generateCanonicalLinks: <U, T extends boolean>(options: CanonicalLinkOptions<U>, asJson?: T) => T extends true ? CanonicalLink[] : string;

export { type CanonicalLink, type CanonicalLinkOptions, generateCanonicalLinks };
