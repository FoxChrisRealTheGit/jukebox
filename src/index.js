import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component{
    render(){
        return(
            <h1>MP3 Player</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
