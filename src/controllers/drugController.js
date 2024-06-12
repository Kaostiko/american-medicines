import axios from "axios";

const API_URL = "https://api.fda.gov/drug/";
// const API_US = 'search=primarysourcecountry:"US"';
const DRUG_NAMES =
  'event.json?count=patient.drug.medicinalproduct.exact&search=primarysourcecountry:"US"&limit=1000';
const DRUG_INFO = "label.json?search=openfda.brand_name:";

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
    // Keep the drug name's information
    const response = responde.data.results;

    console.log("Resputa de la API", response);
    return response;
  } catch (err) {
    console.log("Error en el fetchDrugs");
    return [];
  }
};

//TODO Documentar
export const fetchOneDrug = async (drugName) => {
  try {
    const response = await axios.get(`${API_URL}${DRUG_INFO}"${drugName}"`);
    const responde = response.data.results[0];
    // console.log(responde);
    return responde;
  } catch (err) {
    console.log("Error en el fetchOneDrug", err);
    return [];
  }
};
