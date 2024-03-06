// Write your React code here.
import './index.css'

import {Component} from 'react'

import GetItem from '../EmojiItem'

class Feedback extends Component {
  state = {clicked: false}

  clicked = id => {
    this.setState({clicked: true})
    console.log(id)
  }

  render() {
    const {resources} = this.props
    const {clicked} = this.state

    if (clicked) {
      return (
        <div className="body2">
          <div className="main">
            <div className="card">
              <img
                className="image"
                src={resources.loveEmojiUrl}
                alt="love emoji"
              />
              <h1 className="h2">Thank You!</h1>
              <p className="p1">
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="body2">
        <div className="main">
          <div className="card">
            <h1 className="h1">
              How satisfied are you with our customer support performance?
            </h1>
            <div className="emojiContainer">
              <ul className="ul">
                {resources.emojis.map(eachItem => (
                  <GetItem
                    content={eachItem}
                    key={eachItem.id}
                    clickedEmoji={this.clicked}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Feedback
