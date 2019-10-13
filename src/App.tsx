import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';
import Message from './message/Message';
import UserMessageStatus from './message/UserMessageStatus';
import UserMessage from './message/UserMessage';
import Clock from './clock/Clock';

const initialState :UserMessage = {
  message: 'Starting on React!',
  name: 'Fernando',
  status: UserMessageStatus.Learning,
}

type State = Readonly<typeof initialState>;

class App extends Component<any, State>{
  readonly state: State = initialState;

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Clock />
          
          <img src={logo} className="App-logo" alt="logo" />

          <a className="App-link"
             href="https://reactjs.org"
             target="_blank"
             rel="noopener noreferrer">
            Learn React
          </a>

          <Message name={this.state.name} message={this.state.message} 
                   status={this.state.status}
                   learningFrom={this.state.learningFrom} />

        </header>
      </div>
    );
  }
}

export default App;
