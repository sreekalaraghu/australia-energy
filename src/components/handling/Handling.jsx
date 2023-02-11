import React from 'react'
import './HandlingStyles.css'
import events from '../../data/timeline.json';
import { useState,useEffect } from 'react';
import Popup from './Popup.js'

const Handling = () => {

    const [filteredevent,setFilteredevent] = useState(0);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [clickedText,setClickedText] = useState('')
    const year = [...new Set(events.map(item => item.year))]
    const [selectedState,setselctedState] = useState(null)
    const [selectedstation,setselectedstation] = useState(null)
    const [selectedYear,setSelectedYear] = useState(1920)

    const filtereddata =events.filter( data =>{
        return (
          (!selectedState || data.state === selectedState) &&
          (!selectedstation || data.station === selectedstation) && (!selectedYear || data.year === selectedYear)
        );
      })

      const handleyear = (year) => {
    
        setSelectedYear(year);
        
         
      } 
      function handlePopup (event){
        setClickedText(event.target.innerText);
        console.log(event.target.innerText)
        setIsPopupVisible(!isPopupVisible)
        
      }
      
      function closePopup() {
        setIsPopupVisible(false);
      }
    
      const filterstate =(state) =>{
    
        if(selectedState === state){
      
          setselctedState(null) ;
        }else{
         
          setselctedState(state);
        }
       
      
        // setFilteredevent(events.filter((item => item.state === state)))
        
    
      }
    
      const filterstation =(station) =>{
        if (selectedstation === station){
          setselectedstation(null)
        }else{
       
        setselectedstation(station)
        }
        // setFilteredevent(events.filter((item => item.station === station)))
      }

      const StoryTimeline =() =>{
        return(
          <div className='timeline'>
            {events && year.map((data, index) => (
                <>
              
                    <button className='button' key={index} value={data} onClick={() => handleyear(data)}>
                    {data}
                    </button>
              
                </>
                ))}
         </div> 
        )
      }

      const Statefilter =() =>{
        return(
          <div >
          <button className='button' onClick={() => filterstate("VIC")} style ={selectedState=== 'VIC' ? {backgroundColor :"yellow"}: {}}>VIC</button>
          <button className='button' onClick={() => filterstate('QLD')} style ={selectedState === 'QLD' ? {backgroundColor :"yellow"}: {}}>QLD</button>
          <button className='button' onClick={() => filterstate('NSW')} style ={selectedState === 'NSW' ? {backgroundColor :"yellow"}: {}}>NSW</button>
          <button className='button' onClick={() => filterstate('SA')} style ={selectedState === 'SA' ? {backgroundColor :"yellow"}: {}}>SA</button>
          <button className='button' onClick={() => filterstate('WA')} style ={selectedState === 'WA' ? {backgroundColor :"yellow"}: {}}>WA</button>
          <button className='button' onClick={() => filterstate('TAS')} style ={selectedState === 'TAS' ? {backgroundColor :"yellow"}: {}}>TAS</button>
        </div>
        )
      }
     const Stationfilter =( )=>{
      return (
        <div id="station-filter">
          <button className='button' onClick={() => filterstation('coal')} style ={selectedstation === 'coal' ? {backgroundColor :"yellow"}: {}}>Coal</button>
          <button className='button' onClick={() => filterstation('hydro')} style ={selectedstation === 'hydro' ? {backgroundColor :"yellow"}: {}} >Hydro</button>
          <button className='button' onClick={() => filterstation('small_scale_PV')} style ={selectedstation === 'small_scale_PV' ? {backgroundColor :"yellow"}: {}} >Small PV</button>
          <button className='button' onClick={() => filterstation('large_scale_PV')} style ={selectedstation === 'large_scale_PV' ? {backgroundColor :"yellow"}: {}} >Large PV</button>
          <button className='button' onClick={() => filterstation('wind')} style ={selectedstation === 'wind' ? {backgroundColor :"yellow"}: {}}>Wind</button>
          <button className='button' onClick={() => filterstation('biomass')} style ={selectedstation === 'biomass' ? {backgroundColor :"yellow"}: {}} >Biomass</button>
        </div>
      
      )

     }

    return (
        <div name='handling' className='handling'>
            <div className="container">
                <div className="top">
                  <ul>
                  <li><StoryTimeline/></li>
                  <li><Statefilter/></li> 
                  <li><Stationfilter id="station-filter"/></li>
                  </ul>
                    {/* <h1>StoryPanel</h1> */}
                  {filtereddata &&
                    filtereddata.map((data,index) => (

          
                  <div>
                  {
                  data.paragraphs.map((text,index) =>
                  (
                  <p ><span className='story-headings' onClick={handlePopup} >{text.text}

                  </span>
                  </p>
                
                  ))
                  }
            
           
                  </div>
                ))}
                </div>

            </div>

        </div>
                 
                
     
                
            
        
    )
}

export default Handling
