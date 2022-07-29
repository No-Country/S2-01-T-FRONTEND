// const urlDataClient = "/dataClient.json";
// const urlLocal = "http://localhost:3005/client";
// const urlDataClient = "https://fiados.herokuapp.com/api/v1/trade/all";
const urlDataClient = "https://restserver-elfiado.herokuapp.com/api/user/";

const getClient = async () => {
  try {
    const data = await fetch(urlDataClient)
      .then((data) => data.json())
      .then((clientes) => clientes);
    return data.usersData;
  } catch (error) {
    console.log(error);
  }
};

export default getClient;
