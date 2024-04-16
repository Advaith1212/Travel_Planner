import axios from "axios";
// import data from "../Assets/hoteldata_clt.json"

// booking.com hotels
// const url  = 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotelsByCoordinates'    //search hotels by coordinates

// export const getPlacesData = async (sw,ne) => {
//     try {
//         const { data : { data } } = await axios.get( url ,{
//             params: {
              
//               latitude: sw.lat,
//               longitude: ne.lng,
//               arrival_date: '2024-04-18',
//               departure_date: '2024-04-24',
//             },
//             headers: {
//               'X-RapidAPI-Key': '2938d3a7eamshf512f440e3605dep1f93bdjsn1deecca16f80',
//               'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
//             }
//         });
        
//         return data;

//     }catch (error){
//         console.log(error)

//     }
// }        


// Restaurants from trip advisor
export const getPlacesData = async (type, sw, ne) => {    
    console.log(type)
    try {

      const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          'X-RapidAPI-Key': '2938d3a7eamshf512f440e3605dep1f93bdjsn1deecca16f80',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        },
      });
  
      return data;
    } catch (error) {
      console.log(error);
    }
  };











             

