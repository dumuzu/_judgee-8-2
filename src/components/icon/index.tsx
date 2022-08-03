import React from "react"
import classnames from 'classnames'

type IconPropType = {
  name:string,
  className?:string,
  onClick?:()=>void
}

export default function Icon(props:IconPropType){
  const { className,onClick,name } = props
  return(
    <svg className={classnames('icon',className)} 
      aria-hidden
      onClick={onClick}
    >
     <use xlinkHref={`#${name}`}/>
    </svg>
  )
}
