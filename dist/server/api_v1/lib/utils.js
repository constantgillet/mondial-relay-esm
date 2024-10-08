var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import statusCodes from './statusCodes.js';
import crypto from 'crypto';
import * as soap from 'soap';
const apiUrl = 'https://api.mondialrelay.com/WebService.asmx?WSDL';
/**
 * Executes an API call to the Mondial Relay APIv1.
 * @param args - parameters necessary for the API call.
 * @param apiMethod - the Mondial Relay APIv1 method to call.
 * @returns The result of the request, whichever it may be.
 * @internal
 * */
export function executeApiCall(args_1, apiMethod_1) {
    return __awaiter(this, arguments, void 0, function* (args, apiMethod, outputXML = false) {
        const client = yield soap.createClientAsync(apiUrl, { endpoint: apiUrl });
        args.Security = crypto.createHash('md5').update(Object.values(args).join('')).digest('hex').toUpperCase();
        apiMethod = apiMethod + 'Async';
        const result = (yield client[apiMethod](Object.assign(Object.assign({}, args), { PrivateKey: undefined })))[0];
        if (outputXML) {
            console.log(client.lastRequest);
        }
        const resultKey = apiMethod.replace(/Async$/, 'Result');
        const statusCode = result[resultKey].STAT;
        if (parseInt(statusCode) === 0 || (parseInt(statusCode) >= 80 && parseInt(statusCode) <= 89)) {
            return result[resultKey];
        }
        else {
            throw statusCodes[statusCode];
        }
    });
}
