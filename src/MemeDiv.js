import React from 'react';
import './Meme.css'

class MemeDiv extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteMeme = this.handleDeleteMeme.bind(this);
  }

  handleDeleteMeme() {
    this.props.deleteMeme(this.props.id);
  }

  render() {
    let { imageLink, topText, botText } = this.props;

    return (
      <div className="meme">
        <span id="memeTopText">{topText}</span>
        <img src={imageLink} />
        <span id="memeBotText">{botText}</span>
        <button onClick={this.handleDeleteMeme}>Delete Me</button>
      </div>
    )
  }
}

export default MemeDiv;