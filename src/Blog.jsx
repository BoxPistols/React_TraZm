import React, {useState} from 'react'
import Article from './Article'
// [stateVar name, stateFuncVar name] = func(default value)

const Blog = () => {
  return(
    <>
      <p>
        <Article
          title={'React特集'} // val
        />
      </p>
    </>
  )
}
export default Blog
