import React from 'react'
import '../App'
import TopOffers from '../images/TopOffers.png'
import mobtab from '../images/Mobiles&Tablets.png'
import elec from '../images/Electronics.png'
import tva from '../images/Tvs&Appliances.png'
import fash from '../images/Fashion.png'
import beau from '../images/Beauty.png'
import hk from '../images/Home&Kitchen.png'
import fur from '../images/Furniture.png'
import fli from '../images/Flights.png'
import gro from '../images/Grocery.png'
export default function Sales() {
  return (
    <>
    <div class="row sales">
    <div  class="col-md-1"></div>
    <div class="col-md-1 sal">
        <img src={TopOffers} alt="topoffers"/>TopOffers
    </div>
    <div class="col-md-1 sal">
        <img src={mobtab} alt="mobtab"/>Mobiles&Tablets
    </div>
    <div class="col-md-1 sal">
        <img src={elec} alt="elec"/>Electronics
    </div>
    <div class="col-md-1 sal">
        <img src={tva} alt="tva"/>Tvs&Appliances
    </div>
    <div class="col-md-1 sal">
        <img src={fash} alt="fash"/>Fashion
    </div>
    <div class="col-md-1 sal">
        <img src={beau} alt="beau"/>Beauty
    </div>
    <div class="col-md-1 sal">
    <img src={hk} alt="hk"/>Home&Kitchen
    </div>
    <div class="col-md-1 sal">
      <img src={fur} alt="fur"/>Furniture
    </div>
    <div class="col-md-1 sal">
      <img src={fli} alt="fli"/>Flights
    </div>
    <div class="col-md-1 sal">
      <img src={gro} alt="fli"/>Grocery
    </div>
    </div>
    </>
  )
}
