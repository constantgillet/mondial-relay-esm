import { ParcelShopID, ParcelShopSelected } from '../../../types/parcel-shop';
import './style.css';
interface Props {
    weight?: number;
    nbResults?: number;
    brandIdAPI: string;
    defaultCountry?: string;
    defaultPostcode?: string;
    allowedCountries?: string;
    deliveryMode?: 'LCC' | 'HOM' | '24R' | '24L' | 'XOH';
    onParcelShopSelected(data: ParcelShopSelected & ParcelShopID): void;
}
export default function ParcelShopSelector({ weight, nbResults, brandIdAPI, deliveryMode, defaultCountry, defaultPostcode, allowedCountries, onParcelShopSelected, }: Props): any;
export {};
