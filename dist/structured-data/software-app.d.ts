import { SoftwareApplication, WithContext } from 'schema-dts';
export { SoftwareApplication } from 'schema-dts';

/**
 *  This helper is used to generate a SoftwareApplication ld+json structured data object.
 * @param softwareApp  SoftwareApplication object
 * @see https://schema.org/SoftwareApplication
 * @returns Returns a SoftwareApplication object to be used in head via json-ld script tag
 */
declare const softwareApp: (softwareApp: SoftwareApplication) => WithContext<SoftwareApplication>;

export { softwareApp };
