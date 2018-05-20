import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


class Marquee extends React.Component {
    render() {
        return (
            <section className="music-marquee">
                <div className="headings">
                    {this.props.mp3artist} - {this.props.children} ({this.props.genre})
                </div>
            </section>
        )
    }
}

class MP3Player extends React.Component {
    render() {
        return (
            <div className="audio-container">
                <h1>{this.props.title}</h1>
                <Marquee
                    mp3artist="A Name"
                    mp3genre="Some genre">Song</Marquee>
            </div>
        )
    }
}

ReactDOM.render(<MP3Player title="MP3 Jukebox..." />, document.getElementById('root'));
registerServiceWorker();
