import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MP3Player from "./MP3Player";

ReactDOM.render(<MP3Player title="MP3 Jukebox..." />, document.getElementById('root'));
registerServiceWorker();
