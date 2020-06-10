import React from 'react' // react自体の読み込み
// Article(子コンポーネント読み込み)
import Article from './Article'

// import {Foo, Bar} from './components/FooBar'
import * as FooBar from './components/FooBar'
import Hoge from './components/Hoge'

// Classコンポーネント≠ Functional component
class Blog extends React.Component { // className extends React.Component= UpperCase
  constructor(props) { // reset set props
    super(props) // super = extends
    this.state ={ // this.state = 状態管理
      isPublished: false, // boolean
      count: 0 // num for count
    }
  }
  // 公開状態の反転
  togglePublished =()=>{ // function
    this.setState( // setState from this.state
      {
      isPublished: !this.state.isPublished // object toggle boolean
      }
    )
  }
  // いいねの追加
  countUp =()=>{ // function
    this.setState({ // setState
      count: this.state.count + 1 // obj count add num on this.state
    })
  }

  /* ----- Life Cycle ----- */
  // mount click event on DOM -> countUp()
  componentDidMount() {
    document.getElementById('likeCount_Article').addEventListener('click', this.countUp)
  }
  // update
  componentDidUpdate() {
    console.log(this.state.count)
    if(this.state.count >= 10){
      this.setState({
        count: 0
      })
    }
  }
  // unMount
  componentWillUnmount() {
    document.getElementById('likeCount_Article').removeEventListener('click', this.countUp)
  }

  render() { // rendering(){xxx}
    return( // return value(xxx)
      <>
        <p>Content</p>
        <p><FooBar.Foo/></p>
        <p><FooBar.Bar/></p>
        <p><Hoge/></p>
        <p>
          <Article
            title={'React特集'} // val
            view={24}
            isPublished={this.state.isPublished} // pop={this.state.xxx}
            toggle={()=>this.togglePublished()} // funcNameForProps={()=>this.funcName}
            count={this.state.count}
            // addLike={()=>this.countUp()}
          />
        </p>
      </>
    )
  }
}
export default Blog
