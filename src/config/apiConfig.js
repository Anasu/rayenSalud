import axios from 'axios'; 

export async function apiCall(ruta) {
  try {
    let api = 'https://rayentutorialtestapp.azurewebsites.net/';

    //console.log(`${api}${ruta}`)

    const res = await axios.get(`${api}${ruta}`)
    return res
  } 
  catch (error) {
    console.log(error);
  }
}