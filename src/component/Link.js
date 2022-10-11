import React from 'react'
import { Link } from 'react-router-dom'


export default function LinkItem({ url, target = null, className, children }) {

  return (
    <Link
      to={ target ? { pathname: url } : url }
      rel="noopener noreferrer"
      target={ target && '_blank' }
      className={ className }
    >
      { children }
    </Link>
  )
}


