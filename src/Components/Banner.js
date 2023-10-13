import React from 'react'
import '../App'
import bbd from '../images/banner.png'
export default function Banner() {
  return (
    <>
      <div class="row BBD">
       <img src={bbd} alt="bbd" className='ban' style={{padding:'0'}}/>
      </div>
    </>
  )
}
