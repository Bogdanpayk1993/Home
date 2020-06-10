import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Big_img.css'

class Big_img extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() {
        const { img, change_img } = this.props 
        return ( 
            <div className="big_img">
                <Carousel>
                    <Carousel.Item>
                        <img src={`./image/${img}.jpg`} onClick={(e) => change_img(0, e)} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={`./image/${img}-1.jpg`} onClick={(e) => change_img(0, e)} />
                    </Carousel.Item>
                </Carousel>
            </div>
         );
    }
}
 
export default Big_img;