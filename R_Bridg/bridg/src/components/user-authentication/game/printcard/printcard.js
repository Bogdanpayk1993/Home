import React, {Component} from 'react'

class PrintCard extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        const {mydeskCard, card} = this.props
        return (  
            <div>
                {
                    mydeskCard.map((el, i) => 
                        card == "closed" ?
                            <img src={`image/колода.png`} key={el} />
                            :
                            <img src={`image/${el}.png`} key={el} />
                    )
                }
            </div>
        );
    }
}
 
export default PrintCard;