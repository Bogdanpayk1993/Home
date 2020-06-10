import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { change_img } = this.props
        return (
            <div className="slider">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src='./image/1.jpg' onClick={(e) => change_img(1, e)} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src='./image/2.jpg' onClick={(e) => change_img(2, e)} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src='./image/3.jpg' onClick={(e) => change_img(3, e)} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src='./image/4.jpg' onClick={(e) => change_img(4, e)} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src='./image/5.jpg' onClick={(e) => change_img(5, e)} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src='./image/6.jpg' onClick={(e) => change_img(6, e)} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src='./image/7.jpg' onClick={(e) => change_img(7, e)} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src='./image/8.jpg' onClick={(e) => change_img(8, e)} />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Slider;