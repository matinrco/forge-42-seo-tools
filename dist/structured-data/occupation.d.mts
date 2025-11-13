import { Occupation, WithContext } from 'schema-dts';
export { Occupation } from 'schema-dts';

/**
 *  This helper is used to generate a Occupation ld+json structured data object.
 * @param occupation  Occupation object
 * @see https://schema.org/Occupation
 * @returns Returns a Occupation object to be used in head via json-ld script tag
 */
declare const occupation: (occupation: Occupation) => WithContext<Occupation>;

export { occupation };
