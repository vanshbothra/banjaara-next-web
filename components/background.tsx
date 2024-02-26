import React from 'react'
import Image from 'next/image'

const Background = () => {
  return (
    <Image src='/galaxy-bg.png' alt="Galaxy" fill={true} className="bg-fixed w-full h-full object-cover blur-lg brightness-50" />
  )
}

export default Background
