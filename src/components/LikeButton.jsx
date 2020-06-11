import React, {useState, useEffect} from 'react'

const LikeButton = () => {
  const [count, counter] = useState(0)
  const  [limit, release] = useState(true)
  // count Method function(val)
  const countUp = () => {
    counter(count + 1)
  }
  // useEffect = LifeCycle
  useEffect(()=> { // mount
    document.querySelector("#counter").addEventListener('click',countUp)
    if(count >= 10){ // val
      counter(0) // function
    }
    // unmount
    return () => {
      document.querySelector("#counter").removeEventListener('click',countUp)
    }
  }, [limit]) // Array

  return(
    <>
      <button id={"counter"}>いいね：{count}</button>
      <button onClick={()=>release(!limit)}>More</button>
    </>
  )
}

export default LikeButton

