import { Dataset, WithContext } from 'schema-dts';
export { Dataset } from 'schema-dts';

/**
 *  This helper is used to generate a dataset ld+json structured data object.
 * @param dataset  Dataset object
 * @see https://schema.org/Dataset
 * @returns Returns a Dataset object to be used in head via json-ld script tag
 */
declare const dataset: (dataset: Dataset) => WithContext<Dataset>;

export { dataset };
