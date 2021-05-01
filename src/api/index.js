import axios from "axios";

const url = "https://covid19.mathdro.id/api";

// export const fetchData = async () => {
//   try {
//     const res = await axios.get(url);

//     return res;

//     // console.log(res);
//   } catch (error) {}
// };

// export const fetchData = async () => {
//   try {
//     const { data } = await axios.get(url);

//     const modifiedData = {
//       confirmed: data.confirmed,
//       recovered: data.recovered,
//       deaths: data.deaths,
//       lastUpdata: data.lastUpdata,
//     };

//     return modifiedData;

//     // console.log(res);
//   } catch (error) {}
// };

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    const modifiedData = { confirmed, recovered, deaths, lastUpdate };

    return modifiedData;

    // console.log(res);
  } catch (error) {}
};
