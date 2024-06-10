import axios from "axios";

const API_URL = "https://api.fda.gov/drug/event.json?";
const ALL_INFORMATION = 'search=primarysourcecountry:"US"&limit=1000';
const DRUG_NAMES =
  'count=patient.drug.medicinalproduct.exact&search=primarysourcecountry:"US"&limit=50';
const DRUG_INFO = 'search=openfda.brand_name:"PRADAXA"';

export const fetchDrugs = async () => {
  /**
   * Fetches drug names of the query: OpendFDA
   *
   * This function makes an asynchronous GET request to the OpenFDA API to
   * retrieve drug names.
   *
   * @async
   * @function fetchDrugs
   * @returns {Promise<Array>} A promise that resolves to an array of drug names.
   * @throws {Error} Throws an error if the API request fails.
   */
  try {
    const responde = await axios.get(API_URL + DRUG_NAMES);
    // console.log("Nombres[]: ", responde.data.results);
    // TODO Paging - I didn't see NEXT or st like that.
    console.log(responde);
    return responde.data.results;
  } catch (err) {
    console.log("Error en el fetchDrugs");
    return [];
  }
};

export const fetchOneDrug = async () => {
  //TODO
  try {
    const response = await axios.get(API_URL + DRUG_INFO);
    return response;
  } catch (err) {
    console.log("Error en el fetchDrugs");
    return [];
  }
};
