import axios from 'axios'; 

const api = 'https://rayentutorialtestapp.azurewebsites.net/';

export async function apiCall(ruta) {
  try {
    //console.log(`${api}${ruta}`)
    const res = await axios.get(`${api}${ruta}`)
    return res
  } 
  catch (error) {
    console.log(error);
  }
}

export async function apiDel(ruta) {
  try {
    const res = await axios.delete(`${api}${ruta}`)
    return res
  } 
  catch (error) {
    console.log(error);
  }
}

export async function apiPost(ruta, obj) {
  try {
    const res = await axios.post(`${api}${ruta}`, obj)
    return res
  } 
  catch (error) {
    console.log(error);
  }
}