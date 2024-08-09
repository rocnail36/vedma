import React from 'react'
import StylesGlass from './StylesGlass'
import StylesText from './StylesText'

const Styles = () => {
  return (
    <div className=' flex flex-col gap-8 md:flex-row-reverse items-center lg:w-[80vw] mb-16 lg:m-auto lg:mb-32'>
        <StylesGlass/>
        <StylesText/>
    </div>
  )
}

export default Styles