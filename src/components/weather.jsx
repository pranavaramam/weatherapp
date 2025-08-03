import React, { useEffect, useRef, useState } from 'react'
import './weather.css'
import imgg from '../assets/img.png'

const Weather = ()=>{
    // const pritn =()=>{
    //     const output =document.getElementById('test').value;
    //     console.log(output)
        const inputRef= useRef()

        const [weatherdata, setweatherData] = useState(false)
        const search = async (city,icon)=>{

            try{
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ab64466017f6b0c4c4b6abd205a34d17`;

                const response =await fetch (url);
                const date = await response.json();
                console.log(date); 
                setweatherData({
                    temparature:Math.floor(date.main.temp),
                    location: date.name,
                    icon: date.weather[0].icon
                    
                }) 

            }catch(error){

            }
        }
        useEffect(() => {
           search("London");
                 }, []);  
                              
    
    return (
        <div className='weather'>
            <div className='search-bar'>
                <input ref ={inputRef} id ='test' type= "text" placeholder='search'></input>
                <img src={imgg} className='logo'  alt='' onClick={()=>search(inputRef.current.value)} >            
                </img>           
            </div>
            <img className='icon' src={`https://openweathermap.org/img/wn/${weatherdata.icon}@2x.png`} alt= ''></img>
            <div className='some'> 
             <p className="temparature">{weatherdata.temparature}°C</p>
            <p className='Location'>{weatherdata.location}</p>
            </div>
           
        </div>
    );
}

export default  Weather 

                 