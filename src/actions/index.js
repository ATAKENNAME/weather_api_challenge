
import axios from "axios";

const datatest = axios.get ('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/4118/2021/8/8')
console.log(datatest)
export const update = (data) =>{
    return {
        type:"UPDATE",
        payload:data
    }   
}

export const fetchData = () =>{
    return function (dispatch){
      axios.get('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/4118/2021/8/8')
        .then (res => dispatch(update(res.data)))
        .catch (e=> console.log(e))
    }   
}


