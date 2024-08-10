"use client"
import { AnimatePresence } from 'framer-motion'
import React from 'react'

const WrapperTransition = ({children}:{children:React.ReactNode}) => {
  return (
    <AnimatePresence mode="wait">
      {children}
    </AnimatePresence>
  )
}

export default WrapperTransition