import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="slider">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src='./image/1.jpg' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src='./image/2.jpg' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src='./image/3.jpg' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src='./image/4.jpg' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src='./image/5.jpg' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src='./image/6.jpg' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src='./image/7.jpg' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src='./image/8.jpg' />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Slider;