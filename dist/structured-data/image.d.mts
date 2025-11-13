import { ImageObject, WithContext } from 'schema-dts';
export { ImageObject } from 'schema-dts';

/**
 *  This helper is used to generate a ImageObject ld+json structured data object.
 * @param image  ImageObject object
 * @see https://schema.org/ImageObject
 * @returns Returns a ImageObject object to be used in head via json-ld script tag
 */
declare const image: (image: ImageObject) => WithContext<ImageObject>;

export { image };
