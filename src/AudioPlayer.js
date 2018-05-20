import React from "react";
import Soundwave from "./Soundwave";
import VolumeSlider from "./VolumeSlider";
export default class AudioPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            soundwaveCssClass: "soundwave-hidden",
            volumeBeforeMute: .5,
            speakerEntity: "&#128263;"
        }
        this.onpausemusic = this.onpausemusic.bind(this)
        this.onplaymusic = this.onplaymusic.bind(this)
        this.onmutemusic = this.onmutemusic.bind(this)
        this.onChangeVolume = this.onChangeVolume.bind(this)
        this.volumeRef = React.createRef();
    }

    componentDidMount() {
        this.refs.audio.volumne = this.state.volumeBeforeMute;
    }

    componentWillReceiveProps(newProps) {
        this.refs.audio.pause();
        this.refs.audio.load();
        this.refs.audio.play();
        this.setState({
            soundwaveCssClass: "soundwave"
        })
    }

    onpausemusic() {
        this.refs.audio.pause();
        this.setState({
            soundwaveCssClass: "soundwave-hidden"
        })
    }

    onplaymusic() {
        this.refs.audio.play();
        this.refs.audio.volumn = .5;
        this.setState({
            soundwaveCssClass: "soundwave",
            speakerEntity: "&#128266;"
        })
    }

    onmutemusic() {
        if (this.refs.audio.volume === 0) {
            this.refs.audio.volume = (this.volumeRef.current.value / 100);
            this.setState({
                volumeBeforeMute: .5,
                soundwaveCssClass: "soundwave",
                speakerEntity: "&#128266;"
            })

        } else {
            this.refs.audio.volumne = 0;
            this.setState({
                soundwaveCssClass: "soundwave-hidden",
                speakerEntity: "&#128263;"
            })
        }
    }

    onChangeVolume() {
        this.refs.audio.volume = (this.volumeRef.current.value / 100)
    }
    render() {
        return (
            <div>
                <audio ref="audio">
                    <source src={this.props.audiopath} type="audio/mpeg" />
                </audio>
                <div>
                    <button className="pause-button" onClick={this.onpausemusic}>||</button>
                    <button className="play-button" onClick={this.onplaymusic}>&#9654;</button>
                    <button className="mute-button" onClick={this.onmutemusic} dangerouslySetInnerHTML={{ __html: this.state.speakerEntity }}></button>
                </div>
                <VolumeSlider changeVolume={this.onChangeVolume} volumeRef={this.volumeRef} />
                <Soundwave cssClass={this.state.soundwaveCssClass} />
            </div>
        )
    }
}