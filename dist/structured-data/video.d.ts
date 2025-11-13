import { VideoObject, WithContext } from 'schema-dts';
export { VideoObject } from 'schema-dts';

/**
 *  This helper is used to generate a VideoObject ld+json structured data object.
 * @param video  VideoObject object
 * @see https://schema.org/VideoObject
 * @returns Returns a VideoObject object to be used in head via json-ld script tag
 */
declare const video: (video: VideoObject) => WithContext<VideoObject>;

export { video };
