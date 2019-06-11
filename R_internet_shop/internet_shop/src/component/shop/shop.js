import React, { Component } from 'react';
import Product from '../product/product'
import { DataProvider } from '../provider'

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { product } = this.props
        var color0
        var color1
        var color2
        var color3
        var color4
        var color5
        var size
        return (
            <>
                {
                    product.map((el, i) => (
                        <>
                            <DataProvider value={[el["statys"] == "ТОП ПРОДАЖ" ? color0 = "orange" : color0 = "red", color1="white", size = "22vw", color2 = "red", color3 = "blue", color4 = "yellow", color5 ="red"]} key={i}>
                                <Product statys={el["statys"]}
                                    image={el["image"]}
                                    stock={el["stock"]}
                                    description={el["description"]}
                                    price={el["price"]}
                                    key={i}/>
                            </DataProvider>
                        </>
                    ))
                }
            </>
        );
    }
}


export default Shop;
