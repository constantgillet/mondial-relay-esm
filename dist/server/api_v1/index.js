var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { executeApiCall } from './lib/utils.js';
const outputXML = false;
/**
 * Searches for postal codes based on the search criteria.
 * @param args - parameters necessary for the API call. Refer to the Typescript type for more information.
 * @returns The list of postal codes that match the search criteria.
 * */
export function searchZipCodes(args) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield executeApiCall(args, 'WSI2_RechercheCP', outputXML);
        return result.Liste.Commune;
    });
}
/**
 * Searches for relay points based on the search criteria.
 * @param args - parameters necessary for the API call. Refer to the Typescript type for more information.
 * @returns The list of relay points that match the search criteria.
 * */
export function searchPointsRelais(args) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield executeApiCall(args, 'WSI4_PointRelais_Recherche', outputXML);
        return result.PointsRelais.PointRelais_Details;
    });
}
/**
 * Creates an etiquette using the Mondial Relay API.
 * @param args - parameters necessary for the API call. Refer to the Typescript type for more information.
 * @deprecated Use the API v2 function instead - see {@link [createShipment](../createShipment/index.ts)}.
 * */
export function createLabel(args) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield executeApiCall(args, 'WSI2_CreationEtiquette', outputXML);
    });
}
/**
 * Retrieves a list of etiquettes based on the search criteria.
 * @param args - parameters necessary for the API call. Refer to the Typescript type for more information.
 * @returns The list of etiquettes that match the search criteria.
 * */
export function getLabels(args) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield executeApiCall(args, 'WSI3_GetEtiquettes', outputXML);
    });
}
/**
 * Retrieves a list of stat messages based on the search criteria.
 * @param args - parameters necessary for the API call. Refer to the Typescript type for more information.
 * @returns The list of stat messages that match the search criteria.
 * */
export function getStatMessage(args) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield executeApiCall(args, 'WSI2_STAT_Label', outputXML);
        return result;
    });
}
/**
 * Searches for a package tracking information based on the search criteria.
 * @param args - parameters necessary for the API call. Refer to the Typescript type for more information.
 * @returns The tracking information for the package that matches the search criteria.
 * */
export function getTracking(args) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield executeApiCall(args, 'WSI2_TracingColisDetaille', outputXML);
        return result;
    });
}
