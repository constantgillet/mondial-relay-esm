type AvailableCountry = 'FR' | 'BE' | 'LU' | 'NL' | 'ES' | 'PT' | 'DE' | 'IT' | 'AT';
/**
 * Gives the delivery price for a given weight and destination country code. The weight can go from 250g to 30kg, and the destination country must be one of the supported countries.
 * @param weightInGrams - The weight of the package in grams.
 * @param destinationCountryCode - The 2-letter country code of the destination country.
 * @returns The delivery price in euros, or null if the weight is not supported by Mondial Relay.
 *
 * @example
 * ```typescript
 * getDeliveryPriceHT(500, 'FR') // this will return 3.99
 * ```
 *
 * @remarks
 *
 * This function is a simple mapping of weight and destination country code to a delivery price. It is not a real API call, and thus has been
 * filled by hand and should be updated whenever the prices change. See {@link [the prices page](https://www.mondialrelay.fr/solutionspro/offres-et-services/offre-start/tarifs-et-paiement/)} for more information.
 *
 * @experimental
 * */
export default function getDeliveryPriceHT(weightInGrams: number, destinationCountryCode: AvailableCountry): number | null;
export {};
