import React, {useState} from 'react'

const Article = (props) => {
  const [isPublished, togglePublished] = useState(false)

  return(
    <>
      <p>
        <label htmlFor="checkArticle">公開状態：</label>
        <input id="checkArticle" type="checkbox"
               checked={isPublished}
               onClick={()=>togglePublished(!isPublished)}
        />
      </p>
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
