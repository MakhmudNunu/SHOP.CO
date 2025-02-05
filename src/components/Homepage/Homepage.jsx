import React from 'react'
import FindClothes from './FindClothes/FindClothes'
import BrandsLine from './BrandsLine/BrandsLine'
import NewArrivals from './NewArrivals/NewArrivals'
import TopSelling from './TopSelling/TopSelling'
import DressStyle from './DressStyle/DressStyle'
import HappyCostumers from './HappyCostumers/HappyCostumers'

const Homepage = () => {
  return (
    <>
      <FindClothes />
      <BrandsLine />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <HappyCostumers />
    </>
  )
}

export default Homepage
