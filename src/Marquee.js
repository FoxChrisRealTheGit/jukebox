import React from "react";
export default class Marquee extends React.Component {

    render() {
        return (
            <section className="music-marquee">
                <div className="headings">
                    {this.props.mp3artist} - {this.props.children} ({this.props.mp3genre})
                </div>
            </section>
        )
    }
}
