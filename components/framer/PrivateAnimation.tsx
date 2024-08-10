"use client"
import React from 'react'
import {motion,usePresence} from 'framer-motion'

const PrivateAnimation = ({children}:{children:React.ReactNode}) => {


    const [isPresent,safeToRemove] = usePresence()
    
    console.log(isPresent)
  return (
    <div>
    {children}
    <motion.div   initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 1, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 right-0 left-0 bottom-0 bg-primary z-50"/>
    </div>
  )
}

export default PrivateAnimation