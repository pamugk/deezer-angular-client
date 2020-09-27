export class Infos {
    country_iso: string; //The current country ISO code
    country: string; //The current country name
    open: boolean; //Indicates if Deezer is open in the current country or not
    offers: Array<Object>; //An array of available offers in the current country
}
