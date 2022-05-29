const urlDataClient = "/dataClient.json";

/*
const getClient = () => {

    if (!fs.existsSync(urlDataClient)) {
    return null;
  }
  const infoData = fs.readFileSync(urlDataClient, { encoding: "utf-8" });
  // Esta data viene en formato String, debo convertirala JSON para poder manipular los datos con un parse
  const infoDataJSON = JSON.parse(infoData);
  //console.log(infoDataJSON);
  return infoDataJSON;
};

export default getClient;
*/
export const getClient = async () => {
  try {
    const dataClient = await fetch(urlDataClient);
    return await dataClient.json();
  } catch (error) {
    console.log(error);
  }
};
