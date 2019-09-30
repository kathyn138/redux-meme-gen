import React from 'react';

class AddMemeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLink: '',
      topText: '',
      botText: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let { imageLink, topText, botText } = this.state;
    this.props.addMeme({ imageLink, topText, botText });
    this.setState({ 
      imageLink: '',
      topText: '',
      botText: ''
    });
  }

  render() {
    return (
      <div className="col-6">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="imageLink">Image URL</label>
            <input type="text" className="form-control"
              id="imageLink"
              aria-describedby="imageLink"
              placeholder="Enter Image URL"
              name="imageLink"
              onChange={this.handleChange} 
              value={this.state.imageLink} />
          </div>
          <div className="form-group">
            <label for="topText">Top Text</label>
            <input type="text" className="form-control"
              id="topText"
              aria-describedby="topText"
              placeholder="Enter Top Text"
              name="topText"
              onChange={this.handleChange} 
              value={this.state.topText} />
          </div>
          <div className="form-group">
            <label for="botText">Bottom Text</label>
            <input type="text" className="form-control"
              id="botText"
              aria-describedby="botText"
              placeholder="Enter Bottom Text"
              name="botText"
              onChange={this.handleChange} 
              value={this.state.botText} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }

}

export default AddMemeForm;