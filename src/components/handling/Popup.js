import { click } from '@testing-library/user-event/dist/click'
import React from 'react'
import './HandlingStyles.css'

const textData =
    [{ title : 'Queensland hit by widespread power outage after fire and explosion at Callide power station',
	  summary: 'Like a junction point in those intriguing domino constructions which sends tiles tumbling in all directions, the closure of Victoria national power grid and its customers',
	  url : 'https://www.energyaustralia.com.au/about-us/energy-generation/yallourn-power-station/energy-transition#:~:text=Under%20the%20agreement%2C%20EnergyAustralia%20will,will%20be%20completed%20by%202026.',
      
	}]

function Popup({closePopup,isPopupVisible,clickedText}) {
console.log(clickedText)

const filtertext =textData.filter( item =>{
        return (
          (clickedText === item.title)) ;
      })
console.log(filtertext)
return (
    <div className ={isPopupVisible ? "popup-box":"popup-box"}>
         <h3>{filtertext[0].title}</h3>
         <p className="popup-text">{filtertext[0].summary}</p>
         <a  className= "source-link" href={filtertext[0].url}>Click for more info</a>
       <button className="popup-button" onClick={closePopup}>Close</button> 
    </div>
  )
}


export default Popup




