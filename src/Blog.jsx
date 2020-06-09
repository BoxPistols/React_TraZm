import React from 'react';
import Article from './Article'

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      isPublished: false
    }
  }
  togglePublished = ()=>{
    this.setState(
      {
      isPublished: !this.state.isPublished
      }
    )
  }
  render() {
    return(
      <>
        <p>Content</p>
        <p>
          <Article
            title={'React特集'}
            view={24}
            isPublished={this.state.isPublished}
            toggle={()=>this.togglePublished()}
          />
        </p>
      </>
    )
  }
}
export default Blog
