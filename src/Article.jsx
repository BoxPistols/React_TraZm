import React, {useState} from 'react'

const Article = (props) => {
  const [isPublished, togglePublished] = useState(false)
  /* *
  * --- useState ---
  * const 変数[第１引数＝トリガーとなる変数, 第２引数＝実行されるメソッド] = useState(引数)
* */
  return(
    <>
      <h2>{props.title}</h2>
      <p>
        <label htmlFor="checkArticle">公開状態：</label>
        <input id="checkArticle"
               type="checkbox"
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
