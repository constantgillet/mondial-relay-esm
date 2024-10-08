import { CreateLabelArgs, GetLabelsArgs, GetStatArgs, GetTrackingArgs, SearchPointRelaisArgs, SearchZipCodesArgs } from '../../../types/args';
import { GetLabelsValues, GetTrackingValues, SearchPointRelayValues, SearchZipCodesValues } from './../../../types/values.d.js';
/**
 * Searches for postal codes based on the search criteria.
 * @param args - parameters necessary for the API call. Refer to the Typescript type for more information.
 * @returns The list of postal codes that match the search criteria.
 * */
export declare function searchZipCodes(args: SearchZipCodesArgs): Promise<SearchZipCodesValues>;
/**
 * Searches for relay points based on the search criteria.
 * @param args - parameters necessary for the API call. Refer to the Typescript type for more information.
 * @returns The list of relay points that match the search criteria.
 * */
export declare function searchPointsRelais(args: SearchPointRelaisArgs): Promise<SearchPointRelayValues>;
/**
 * Creates an etiquette using the Mondial Relay API.
 * @param args - parameters necessary for the API call. Refer to the Typescript type for more information.
 * @deprecated Use the API v2 function instead - see {@link [createShipment](../createShipment/index.ts)}.
 * */
export declare function createLabel(args: CreateLabelArgs): Promise<any>;
/**
 * Retrieves a list of etiquettes based on the search criteria.
 * @param args - parameters necessary for the API call. Refer to the Typescript type for more information.
 * @returns The list of etiquettes that match the search criteria.
 * */
export declare function getLabels(args: GetLabelsArgs): Promise<GetLabelsValues>;
/**
 * Retrieves a list of stat messages based on the search criteria.
 * @param args - parameters necessary for the API call. Refer to the Typescript type for more information.
 * @returns The list of stat messages that match the search criteria.
 * */
export declare function getStatMessage(args: GetStatArgs): Promise<any>;
/**
 * Searches for a package tracking information based on the search criteria.
 * @param args - parameters necessary for the API call. Refer to the Typescript type for more information.
 * @returns The tracking information for the package that matches the search criteria.
 * */
export declare function getTracking(args: GetTrackingArgs): Promise<GetTrackingValues>;
