import React, { useEffect, useRef } from 'react';
import './style.css' with { type: 'css' };
export default function ParcelShopSelector({ weight, nbResults, brandIdAPI, deliveryMode, defaultCountry, defaultPostcode, allowedCountries, onParcelShopSelected, }) {
    const targetDisplayRef = useRef(null);
    const jqueryScriptRef = useRef(null);
    const MRScriptRef = useRef(null);
    useEffect(() => {
        load();
    }, []);
    function load() {
        // chargement de JQuery, puis du script de Mondial Relay
        const jqueryScript = document.createElement('script');
        jqueryScript.src = '//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';
        jqueryScript.onload = () => {
            const mrScript = document.createElement('script');
            mrScript.src = '//widget.mondialrelay.com/parcelshop-picker/jquery.plugin.mondialrelay.parcelshoppicker.min.js';
            mrScript.onload = () => {
                // Charge le widget dans la DIV d'id "Zone_Widget" avec les paramètres indiqués
                ;
                $('#Zone_Widget').MR_ParcelShopPicker(Object.assign(Object.assign({ 
                    //
                    // Paramétrage de la liaison avec la page.
                    //
                    // Selecteur de l'élément dans lequel est envoyé l'ID du Point Relais (ex: input hidden)
                    Target: '#Target_Widget', 
                    // Selecteur de l'élément dans lequel est envoyé l'ID du Point Relais pour affichage
                    TargetDisplay: '#TargetDisplay_Widget', 
                    // Selecteur de l'élément dans lequel sont envoysé les coordonnées complètes du point relais
                    TargetDisplayInfoPR: '#TargetDisplayInfoPR_Widget', 
                    //
                    // Paramétrage du widget pour obtention des point relais.
                    //
                    // Le code client Mondial Relay, sur 8 caractères (si test, ajouter des espaces à droite, ex: "BDTEST  ")
                    // BDTEST est utilisé pour les tests => un message d'avertissement apparaît
                    Brand: brandIdAPI === 'BDTEST' ? 'BDTEST  ' : brandIdAPI, 
                    // Pays utilisé pour la recherche: code ISO 2 lettres.
                    Country: defaultCountry || 'FR', 
                    // Code postal pour lancer une recherche par défaut
                    PostCode: defaultPostcode || '59000', 
                    // Mode de livraison (Standard [24R], XL [24L], XXL [24X], Drive [DRI])
                    ColLivMod: deliveryMode || '24R', 
                    // Nombre de Point Relais à afficher
                    NbResults: nbResults ? '' + nbResults : '7', 
                    //
                    // Paramétrage d'affichage du widget.
                    //
                    // Afficher les résultats sur une carte?
                    ShowResultsOnMap: true, 
                    // Afficher les informations du point relais à la sélection sur la carte?
                    DisplayMapInfo: true, 
                    // Fonction de callback déclenché lors de la selection d'un Point Relais
                    OnParcelShopSelected: (data) => {
                        var _a;
                        onParcelShopSelected(Object.assign(Object.assign({}, data), { ParcelShopID: (_a = targetDisplayRef.current) === null || _a === void 0 ? void 0 : _a.value }));
                    } }, (weight && { Weight: weight })), { 
                    // Spécifier le nombre de jours entre la recherche et la dépose du colis dans notre réseau
                    // SearchDelay: "3",
                    // Limiter la recherche des Points Relais à une distance maximum
                    // SearchFar: "",
                    // Liste des pays selectionnable par l'utilisateur pour la recherche: codes ISO 2 lettres
                    AllowedCountries: allowedCountries || 'FR', 
                    // Force l'utilisation de Google Map si la librairie est présente?
                    // EnableGmap: true,
                    // Activer la recherche de la position lorsque le navigateur de l'utilisateur le supporte?
                    // EnableGeolocalisatedSearch: "true",
                    // Spécifier l'utilisation de votre feuille de style CSS lorsque vous lui donnez la valeur "0"
                    CSS: '1' }));
            };
            jqueryScriptRef.current = document.body.appendChild(mrScript);
        };
        MRScriptRef.current = document.body.appendChild(jqueryScript);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { id: "Zone_Widget", className: "Zone_Widget" }),
        React.createElement("input", { type: "text", id: "Target_Widget", ref: targetDisplayRef, className: "Target_Widget" })));
}
