import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {update,fetchData} from "../actions"

export default function WeatherTable (){
    const weather = useSelector(state => state.weather.data)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchData())
    },[])

    console.log(weather)

    return (
        <table>
        <thead>
            <h1>Toronto Weather on August 8, 2021</h1>
             <tr>
                    <th>air_pressure</th>
                    <th>humidity</th>
                    <th>the_temp</th>
                    <th>weather_state_abbr</th>
                    <th>weather_state_name</th>
                    <th>applicable_date</th>
                    <th>created</th>
              </tr>
            {
            weather.length>0 ? weather.map(item =>{
                return (
                    <tr>
                    <td>{item.air_pressure}</td>
                    <td>{item.humidity}</td>
                    <td>{item.the_temp}</td>
                    <td>{item.weather_state_abbr}</td>
                    <td>{item.weather_state_name}</td>
                    <td>{item.applicable_date}</td>
                    <td>{item.created}</td>
                    </tr>
                )
            }
                ):"loading"
        }
        </thead>
        </table>
    )
};

// const mapStateToProps = state => {
//   return {
//     weatherData: state.weather
//   }
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchWeatherData: () => dispatch(fetchWeatherData())
//   }
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(WeatherTable)
