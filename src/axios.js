import axios from "axios";
const url = "https://icanhazdadjoke.com"
const configAPI = {
    headers:{
        Accept:"application/json"
    }
}
export async function getJoke(){
    try{

       const res =  await  axios.create(configAPI).get(url)
       console.log(res)
         return res
    }catch(e){
        console.log(e)
    }
} 