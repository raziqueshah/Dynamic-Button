import React from 'react'
import Button from '../atom/Button'

const UseButton = () => {
  return (
    <div>
       <Button 
     onClick={() => console.log("You Clicked on Me!")} 
     type="button" 
     buttonStyle="btn--danger--solid" 
     buttonSize="btn--large">Buy Now</Button>
    </div>
  )
}

export default UseButton
