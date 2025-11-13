import { EmployerAggregateRating, WithContext } from 'schema-dts';
export { EmployerAggregateRating } from 'schema-dts';

/**
 *  This helper is used to generate a EmployerAggregateRating ld+json structured data object.
 * @param employerRating  EmployerAggregateRating object
 * @see https://schema.org/EmployerAggregateRating
 * @returns Returns a EmployerAggregateRating object to be used in head via json-ld script tag
 */
declare const employerRating: (employerRating: EmployerAggregateRating) => WithContext<EmployerAggregateRating>;

export { employerRating };
