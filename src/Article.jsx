import React from 'react'

const Article = (props) => {
  return(
    <div>
      <p>記事：{props.title}</p>
      <p>閲覧数：{props.view}</p>
    </div>
  )
}
// class Article extends React.Component{
//   constructor(props) {
//     super(props)
//  }
//   render() {
//     return(
//       <div>
//         <p>Article: {this.props.title}</p>
//       </div>
//     )
//   }
// }

export default Article
