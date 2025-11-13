import { QAPage, WithContext } from 'schema-dts';
export { QAPage } from 'schema-dts';

/**
 *  This helper is used to generate a QAPage ld+json structured data object.
 * @param qa  QAPage object
 * @see https://schema.org/QAPage
 * @returns Returns a QAPage object to be used in head via json-ld script tag
 */
declare const qa: (qa: QAPage) => WithContext<QAPage>;

export { qa };
