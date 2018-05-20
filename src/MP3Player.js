import React from "react";
import MP3Button from "./MP3Button";
import Marquee from "./Marquee";
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
    }
    componentWillMount() {
        let mp3title = this.state.mp3name;
        mp3title = mp3title.replace(".mp3", "")
        this.setState({
            audiopath: this.state.mp3path + mp3title,
            mp3Data: [{
                name: "name1",
                artist: "Artis1",
                genre: "genre1"
            },
            {
                name: "name2",
                artist: "Artis2",
                genre: "genre2"
            }]
        })
    }


    render() {
        return (
            <div className="audio-container">
                <h1>{this.props.title}</h1>
                <Marquee
                    mp3artist="A Name"
                    mp3genre="Some genre">Song</Marquee>
                <section className="mp3list-buttons">
                    {
                        this.state.mp3Data.map((mp3, index) => {
                            return (
                                <MP3Button key={index} clickedButtonId={this.state.mp3name}
                                    mp3={mp3.name}
                                    artist={mp3.artist}
                                    genre={mp3.genre}>
                                    {mp3.name}
                                </MP3Button>
                            )
                        })
                    }
                </section>
            </div>
        )
    }
}