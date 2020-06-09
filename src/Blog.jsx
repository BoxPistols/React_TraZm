import React from 'react';
import Article from './Article'

class Blog extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <p>Content</p>
        <p>
          <Article
            title={'React特集'}
            view={24}/>
        </p>
        <p>
          <Article
            title={'Vue特集'}
            view={18}/>
        </p>
      </div>
    )
  }
}
export default Blog
