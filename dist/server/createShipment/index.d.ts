import { CreateShipmentResponse, ShipContext, Shipment, ShipOutputOptions } from '../../../types/ship';
interface ShipParams {
    shipment: Shipment;
    context: ShipContext;
    outputOptions?: ShipOutputOptions;
}
/**
 * Creates a Mondial Relay shipment using API v2. The parameters are validated before sending the request.
 * @param {ShipParams} params - The shipment parameters, context and output options (see the {@link [types](../../../types/ship.d.ts)}).
 * @returns The raw response from the Mondial Relay API along with parsed data, such as the etiquette PDF link.
 * @example
 * ```ts
 * const data: CreateShipmentResponse = await createShipment({
 *     // check out the library's example for the full list of parameters
 * })
 * ```
 * */
export default function createShipment({ context, shipment, outputOptions, }: ShipParams): Promise<CreateShipmentResponse>;
export {};
