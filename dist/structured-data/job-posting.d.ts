import { JobPosting, WithContext } from 'schema-dts';
export { JobPosting } from 'schema-dts';

/**
 *  This helper is used to generate a JobPosting ld+json structured data object.
 * @param jobPosting  JobPosting object
 * @see https://schema.org/JobPosting
 * @returns Returns a JobPosting object to be used in head via json-ld script tag
 */
declare const jobPosting: (jobPosting: JobPosting) => WithContext<JobPosting>;

export { jobPosting };
