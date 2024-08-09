import React from 'react'
import StylesGlass from './StylesGlass'
import StylesText from './StylesText'

const Styles = () => {
  return (
    <div className='max-h-[1000px] flex flex-col gap-8 md:flex-row-reverse '>
        <StylesGlass/>
        <StylesText/>
    </div>
  )
}

export default Styles