import React from 'react';
import './Meme.css'

class MemeDiv extends React.Component {
  render() {
    let { imageLink, topText, botText } = this.props;

    return (
      <div className="meme">
        <span id="memeTopText"><b>{topText}</b></span>
        <img src={imageLink} />
        <span id="memeBotText"><b>{botText}</b></span>
        <button onClick={this.props.deleteMeme}>Delete Me</button>
      </div>
    )
  }
}

export default MemeDiv;