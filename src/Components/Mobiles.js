import React from 'react'
import '../App'
import motg from '../images/motorolag54.png'
import moto from '../images/motorola.png'
export default function Mobiles() {
  return (
    <>
      <div class="row mob">
      <div class="col-md-2 mot5">
        <h5>Best Mobile</h5>
        <img src={motg} alt="MotorolaG54" width='200' height='300'/>
        <p style={{textAlign:'center',}}>Motorola G54</p>
      </div>
      <div class="col-md-2 mot">
        <img src={moto} alt="Motorola Edge"  width='200' height='300'/>Motorola Edge 40
      </div>
      <div class="col-md-2 mot">
        <img src={moto} alt="Motorola Edge"  width='200' height='300'/>Motorola Edge 40
      </div>
      <div class="col-md-2 mot">
        <img src={moto} alt="Motorola Edge"  width='200' height='300'/>
        <p style={{textAlign:'center',}}>Motorola Edge 40</p>
      </div>
      <div class="col-md-2 mot">
        <img src={moto} alt="Motorola Edge"  width='200' height='300'/>
        <p style={{textAlign:'center',}}>Motorola Edge 40</p>
      </div>
    </div>
    </>
  )
}
