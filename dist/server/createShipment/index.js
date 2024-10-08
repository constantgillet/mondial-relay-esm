var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ShipContextSchema, ShipmentSchema, ShipOutputOptionsSchema } from './schemas.js';
import axios from 'axios';
import { Builder } from 'xml2js';
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
export default function createShipment(_a) {
    return __awaiter(this, arguments, void 0, function* ({ context, shipment, outputOptions, }) {
        var _b;
        // validation des données au préalable
        ShipContextSchema.parse(context);
        ShipmentSchema.parse(shipment);
        ShipOutputOptionsSchema.parse(outputOptions);
        // vérification Login et Password
        if (context.Login === 'fill in your login here' || context.Password === 'fill in your password here') {
            throw new Error('Login or Password is missing, please fill them in.');
        }
        const data = {
            ShipmentCreationRequest: {
                $: {
                    xmlns: 'http://www.example.org/Request',
                    'xmlns:xsd': 'http://www.w3.org/2001/XMLSchema',
                    'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
                },
                Context: {
                    Login: context.Login,
                    Password: context.Password,
                    CustomerId: context.CustomerId,
                    Culture: context.Culture || 'fr-FR',
                    VersionAPI: context.VersionAPI || '1.0',
                },
                OutputOptions: {
                    OutputFormat: (outputOptions === null || outputOptions === void 0 ? void 0 : outputOptions.OutputFormat) || 'A4',
                    OutputType: (outputOptions === null || outputOptions === void 0 ? void 0 : outputOptions.OutputType) || 'PdfUrl',
                },
                ShipmentsList: {
                    Shipment: Object.assign(Object.assign({}, shipment), { DeliveryMode: {
                            $: Object.assign({}, shipment.DeliveryMode),
                        }, CollectionMode: {
                            $: Object.assign({}, shipment.CollectionMode),
                        }, Parcels: {
                            Parcel: Object.assign(Object.assign(Object.assign(Object.assign({}, shipment.Parcels.Parcel), { Weight: {
                                    $: Object.assign({}, shipment.Parcels.Parcel.Weight),
                                } }), (shipment.Parcels.Parcel.Depth && {
                                Depth: {
                                    $: Object.assign({}, shipment.Parcels.Parcel.Depth),
                                },
                            })), (shipment.Parcels.Parcel.Length && {
                                Length: {
                                    $: Object.assign({}, shipment.Parcels.Parcel.Length),
                                },
                            })),
                        }, Sender: {
                            Address: Object.assign({}, shipment.Sender),
                        }, Recipient: {
                            Address: Object.assign({}, shipment.Recipient),
                        } }),
                },
            },
        };
        const builder = new Builder();
        const xml = builder.buildObject(data);
        const API_URL = 'https://connect-api.mondialrelay.com/api/shipment';
        const response = yield axios.post(API_URL, xml, {
            headers: {
                'Content-Type': 'application/xml',
            },
        });
        const eventualError = (_b = response.data.statusListField) === null || _b === void 0 ? void 0 : _b.find(e => { var _a; return (_a = e.levelField) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes('error'); });
        if (eventualError) {
            throw new Error(`An error happened: "${eventualError.messageField}".`);
        }
        const sendingNumber = response.data.shipmentsListField[0].shipmentNumberField;
        const etiquetteLink = response.data.shipmentsListField[0].labelListField.labelField.outputField;
        return {
            sendingNumber,
            etiquetteLink,
            rawResponse: response.data,
        };
    });
}
