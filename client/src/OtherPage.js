import React from 'react'
import { Link } from 'react-router-dom'

const otherPage = () => {
  return (
    <div>
      Im some other page.
      <Link to='/'>Go Back Home</Link>
    </div>
  )
}

export default otherPage