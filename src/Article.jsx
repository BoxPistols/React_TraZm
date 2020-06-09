import React from 'react'

const Article = (props) => {
  return(
    <>
      <p>
        <label htmlFor="checkArticle">公開状態：</label>
        <input id="checkArticle" type="checkbox"
               checked={props.isPublished}
               onClick={()=>props.toggle()}
        />
      </p>
      <p>記事：{props.title}</p>
      <p>閲覧数：{props.view}</p>
      <p id={"likeCount_Article"}>♡: {props.count}</p>
      {/*<button onClick={()=>props.addLike()}>Up</button>*/}
    </>
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
