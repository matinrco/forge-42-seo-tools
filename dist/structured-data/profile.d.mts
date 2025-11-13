import { ProfilePage, WithContext } from 'schema-dts';
export { ProfilePage } from 'schema-dts';

/**
 *  This helper is used to generate a ProfilePage ld+json structured data object.
 * @param profile  ProfilePage object
 * @see https://schema.org/ProfilePage
 * @returns Returns a ProfilePage object to be used in head via json-ld script tag
 */
declare const profile: (profile: ProfilePage) => WithContext<ProfilePage>;

export { profile };
