import React from 'react'

interface FlexProps{
  className?: string,
  children: React.ReactNode[] | React.ReactNode
}

const Flex = ({className, children} : FlexProps) => {
  return (
    <div className={`flex justify-between items-center flex-wrap ${className}`}>{children}</div>
  )
}

export default Flex