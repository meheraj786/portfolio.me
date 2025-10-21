import React from 'react'



const flex = ({className, children}) => {
  return (
    <div className={`flex justify-between items-center flex-wrap ${className}`}>{children}</div>
  )
}

export default flex