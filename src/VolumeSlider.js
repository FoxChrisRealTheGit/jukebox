import React from "react";

export default class VolumneSlider extends React.Component {
    render() {
        return (
            <input onChange={this.props.changeVolume} type="range" min="1" max="100" className="slider" ref={this.props.volumeRef} />
        )
    }
}