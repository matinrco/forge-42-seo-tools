import { Car, WithContext } from 'schema-dts';
export { Car } from 'schema-dts';

/**
 * Helper function to generate a car ld+json structured data object.
 * @param car Car object
 * @returns  object to be used in head via json-ld script tag
 * @see https://schema.org/Car
 */
declare const car: (car: Car) => WithContext<Car>;

export { car };
