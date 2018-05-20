import React from "react";
export default class MP3Button extends React.Component {
    constructor(props) {
        super(props);
        let buttonTitle = this.props.mp3;
        buttonTitle = buttonTitle.replace("_", " ").replace(".mp3", "")
        this.state = {
            buttonTitle: buttonTitle,
            buttonClass: "unclicked-mp3-button"
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.clickedButtonId === newProps.mp3) {
            this.setState({
                buttonClass: "clicked-mp3-button"
            })
        } else {
            this.setState({
                buttonClass: "unclicked-mp3-button"
            })
        }
    }

    render() {
        return (
            <button id={this.props.mp3} className={this.state.buttonClass}>
                {this.state.buttonTitle}
            </button>
        )
    }
}
