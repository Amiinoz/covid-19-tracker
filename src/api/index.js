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

// Fetching data
export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    const modifiedData = { confirmed, recovered, deaths, lastUpdate };

    return modifiedData;

    // console.log(res);
  } catch (error) {
    return error;
  }
};

// Fetching daily data globally
// export const fetchDailyData = async () => {
//   try {
//     const { data } = await axios.get(`${url}/daily`);

//     // console.log(data);

//     const modifiedData = data.map((dailyData) => ({
//       confirmed: dailyData.confirmed.total,
//       deaths: dailyData.deaths.total,
//       date: dailyData.reportDate,
//     }));

//     return modifiedData;
//   } catch (error) {}
// };

// Fetching daily data ( find api for Canada Only)
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(
      "https://api.covidtracking.com/v1/us/daily.json"
    );

    return data.map(({ positive, recovered, death, dateChecked: date }) => ({
      confirmed: positive,
      recovered,
      deaths: death,
      date,
    }));
  } catch (error) {
    return error;
  }
};
