import React from "react";
import MP3Button from "./MP3Button";
import Marquee from "./Marquee";
import AudioPlayer from "./AudioPlayer";
export default class MP3Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mp3path: "",
            mp3name: "Song Name",
            mp3artist: "Artist Name",
            audiopath: "",
            mp3autoplay: "autoPlay",
            mp3genre: "genre",
            soundwaveCssClass: "soundwave-hidden",
            currentButtonId: 0,
            clickedButtonId: "",
            mp3Data: [],
            restartTimer: "no"
        }
        this.changeMP3 = this.changeMP3.bind(this);
    }
    componentWillMount() {
        let mp3title = this.state.mp3name;
        mp3title = mp3title.replace(".mp3", "")
        this.setState({
            mp3title: mp3title,
            audiopath: this.state.mp3path + mp3title,
            mp3Data: [{
                name: "name1",
                artist: "Artist1",
                genre: "genre1"
            },
            {
                name: "name2",
                artist: "Artist2",
                genre: "genre2"
            }]
        })
    }

    changeMP3(currentButtonId, genre, name, artist) {
        let mp3title = name;
        let mp3name = name;

        mp3title = mp3title.replace(".mp3", "").replace("_", " ").toUpperCase();
        this.setState({
            audiopath: this.state.mp3path + mp3name,
            mp3title: mp3title,
            mp3artist: artist,
            mp3genre: genre,
            soundwaveCssClass: "soundwave",
            currentButtonId: currentButtonId,
            clickedButtonId: currentButtonId,
            mp3name: mp3name
        })
    }

    render() {
        return (
            <div className="audio-container">
                <h1>{this.props.title}</h1>
                <Marquee
                    mp3artist={this.state.mp3artist}
                    mp3genre={this.state.mp3genre}>{this.state.mp3title}</Marquee>
                <section className="mp3list-buttons">
                    {
                        this.state.mp3Data.map((mp3, index) => {
                            return (
                                <MP3Button key={index} clickedButtonId={this.state.mp3name}
                                    changeMP3={this.changeMP3}
                                    mp3={mp3.name}
                                    artist={mp3.artist}
                                    genre={mp3.genre}>
                                    {mp3.name}
                                </MP3Button>
                            )
                        })
                    }
                </section>
                <AudioPlayer audiopath={this.state.audiopath} soundwaveCssClass={this.state.soundwaveCssClass} />
            </div>
        )
    }
}