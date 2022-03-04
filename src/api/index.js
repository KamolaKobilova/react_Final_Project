import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
     params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': 'aee9d7c348msh365dd1d9aa1718fp115e90jsncd27eab7e8c4'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });

 export const getPlacesData = async ()=> { 
    try {
        //request
        const {data: {data}}= await axios.get(URL, options)
        return data
    } catch (error) {
        console.log(error)
        
    }
}