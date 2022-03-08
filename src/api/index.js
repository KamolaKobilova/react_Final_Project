import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

  // axios.request().then(function (response) {
  //     console.log(response.data);
  // }).catch(function (error) {
  //     console.error(error);
  // });

 export const getPlacesData = async (sw, ne)=> { 
    try {
        //request
        const {data: {data}}= await axios.get(URL,  {
            params: {
             bl_latitude: sw.lat,
             tr_latitude:  ne.lng,
             bl_longitude: sw.lat, 
             tr_longitude: ne.lng,  
           },
           headers: {
             'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
             'x-rapidapi-key': 'aee9d7c348msh365dd1d9aa1718fp115e90jsncd27eab7e8c4'
           }
         } )
        return data
    } catch (error) {
        console.log(error)
        
    }
}