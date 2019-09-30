import React from 'react';
import './App.css';
import AddMemeForm from './AddMemeForm';
import MemeDiv from './MemeDiv'
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addMeme = this.addMeme.bind(this);
    this.deleteMeme = this.deleteMeme.bind(this);
  }

  addMeme(newMeme) {
    this.props.dispatch({ type: "ADD", payload: newMeme });
  }

  deleteMeme(memeId) {
    this.props.dispatch({ type: "DELETE", id: memeId});
  }
  // id refers to action.id on rootReducer

  render() {
    return (
      <div>
        <AddMemeForm addMeme={this.addMeme}/>
        {this.props.memes.map(m => (
          <MemeDiv key={m.id} 
          imageLink={m.imageLink} 
          topText={m.topText} 
          botText={m.botText}
          deleteMeme={() => this.deleteMeme(m.id)} />
        ))}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { memes: state.memes };
}

const connectToState =
  connect(mapStateToProps);

export default connectToState(App);
