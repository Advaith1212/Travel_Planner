import axios from "axios";

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

          // 'X-RapidAPI-Key': 'd40bfd0e8amsh514fffb4597b9d7p155edfjsn7f83155fc0c8',
          // 'X-RapidAPI-Key': '2938d3a7eamshf512f440e3605dep1f93bdjsn1deecca16f80',
          'X-RapidAPI-Key': 'cf5c16ccbcmsh53c65f6a13d6586p1b34bajsn400e826485e4',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        },
      });
  
      return data;
    } catch (error) {
      console.log(error);
    }
  };











             

