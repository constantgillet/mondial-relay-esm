import { Args } from '../../../../types/args';
/**
 * Executes an API call to the Mondial Relay APIv1.
 * @param args - parameters necessary for the API call.
 * @param apiMethod - the Mondial Relay APIv1 method to call.
 * @returns The result of the request, whichever it may be.
 * @internal
 * */
export declare function executeApiCall(args: Args, apiMethod: string, outputXML?: boolean): Promise<any>;
