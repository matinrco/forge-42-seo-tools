/**
 * This helper is used to generate an breadcrumb ld+json structured data object.
 *
 *
 * Find more information about the breadcrumb schema here:
 *
 *
 * https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
 * @param fullUrl string representing the current page (e.g. https://localhost:3000/blog/2021/01/01/article)
 * @param names optional string array representing the names of the breadcrumb items, matched 1:1 with the path
 * @returns BreadcrumbLdJson object to be used in head via json-ld script tag
 */
declare const breadcrumbs: (fullUrl: string, names?: string[]) => {
    "@context": string;
    "@type": string;
    itemListElement: {
        "@type": string;
        position: number;
        name: string;
        item: string;
    }[];
};

export { breadcrumbs };
