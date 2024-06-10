import axios from "axios";

const API_URL =
  'https://api.fda.gov/drug/event.json?search=primarysourcecountry:"US"';

export const fetchDrugs = async () => {
  try {
    const responde = await axios.get(API_URL);
    console.log(responde.data.results);
  } catch (err) {
    console.log("Error en el fetchDrugs");
    return [];
  }
};
