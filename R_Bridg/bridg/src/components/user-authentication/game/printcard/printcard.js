import React, { Component } from 'react'

class PrintCard extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store
    }

    render() {
        const { card } = this.props
        
        return (
            <div>
                {
                    card == "usedCard" ?
                        (
                            Object.keys(this.store.getState().usedCard).map((el) =>
                                (
                                    <img src={`image/${this.store.getState().usedCard[el].card}.png`} key={el} />
                                )
                            )

                        )
                        :
                        (
                            Object.keys(this.store.getState().computer).map((el) =>
                                (
                                    <img src={`image/${el}.png`} key={el} />
                                )
                            )
                        )
                }
            </div>
        );
    }
}

export default PrintCard;