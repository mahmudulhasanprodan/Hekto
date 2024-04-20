import React from 'react'

const Button = ({className, title}) => {
  return (
    <>
      <button className={className ? className : "bg-red-400 py-2 px-10"}>{title ? title : "Button"}</button>
    </>
  )
}

export default Button
