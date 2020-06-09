import React from 'react';
import Article from './Article'

class Blog extends React.Component {
 constructor(props) {
  super(props);
 }
 render() {
  return(
    <div>
     <p>Content</p>
      <p><Article/></p>
    </div>
  )
 }
}
export default Blog
