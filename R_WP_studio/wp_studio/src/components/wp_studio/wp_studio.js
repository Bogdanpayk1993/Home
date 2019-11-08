import React, { Component } from 'react';

import Header from './header';
import Menu from './menu';
import Baner from './baner';
import Classification from './classification';
import Send_request from './send_request';
import Order from './order';

class WP_studio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            regime: 0
        }
    }

    Order = (regimes) => {
        this.setState({
            regime: regimes
        })
    }

    render() {
        return (
            <div className="wp_studio">
                <div>
                    <Header />
                    <Menu Order={this.Order} />
                    {
                        this.state.regime > 0 && this.state.regime < 4 ? (<Order Order={this.Order} regime={this.state.regime} />) : (null)
                    }
                    <Baner />
                    <Classification Order={this.Order} />
                    <Send_request />
                </div>
            </div>
        );
    }
}

export default WP_studio;