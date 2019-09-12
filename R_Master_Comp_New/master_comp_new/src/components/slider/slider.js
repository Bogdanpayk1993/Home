import React, { Component } from 'react';
import './slider.css'

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: "./image/phone1.jpg"
        }
        var picture1 = "./image/phone1.jpg"
        setInterval(() => {
            if (picture1 == "./image/phone1.jpg") {
                this.setState({
                    picture: "./image/phone2.jpg"
                })
                picture1 = "./image/phone2.jpg"
            }
            else
            {
                if (picture1 == "./image/phone2.jpg") {
                    this.setState({
                        picture: "./image/phone3.jpg"
                    })
                    picture1 = "./image/phone3.jpg"
                }
                else
                {
                    if (picture1 == "./image/phone3.jpg") {
                        this.setState({
                            picture: "./image/phone1.jpg"
                        })
                        picture1 = "./image/phone1.jpg"
                    }
                }
            }
        }, 4000)
    }

    prev = () => {
        if (this.state.picture == "./image/phone1.jpg") {
            this.setState({
                picture: "./image/phone3.jpg"
            })
        }
        if (this.state.picture == "./image/phone2.jpg") {
            this.setState({
                picture: "./image/phone1.jpg"
            })
        }
        if (this.state.picture == "./image/phone3.jpg") {
            this.setState({
                picture: "./image/phone2.jpg"
            })
        }
    }

    next = () => {
        if (this.state.picture == "./image/phone1.jpg") {
            this.setState({
                picture: "./image/phone2.jpg"
            })
        }
        if (this.state.picture == "./image/phone2.jpg") {
            this.setState({
                picture: "./image/phone3.jpg"
            })
        }
        if (this.state.picture == "./image/phone3.jpg") {
            this.setState({
                picture: "./image/phone1.jpg"
            })
        }
    }

    render() {
        return (
            <>
                <div style={{ backgroundImage: `url(${this.state.picture})`, backgroundSize: "100vw", height: "31.2vw" }} >
                    <img src="./image/prev.png" className="prev" onClick={this.prev} />
                    <img src="./image/next.png" className="next" onClick={this.next} />
                </div>
                <hr />
                <br />
            </>
        );
    }
}

export default Slider;