import ActionTypes from '../constants/ActionType'
import {v4} from "uuid"

const ActionGenerators = {
    getColod:function(cardId){
        return {
            type:ActionTypes.GET_COLOD,
            payload:{
                id : cardId
            }
        }
    },
    getFirstUsedCard:function(cardId){
        return {
            type:ActionTypes.GET_FIRST_USED_CARD,
            payload:{
                id : v4(),
                card: cardId
            }
        }
    },
    takeCardComputer:function(cardId){
        return {
            type:ActionTypes.TAKE_CARD_COMPUTER,
            payload:{
                id : cardId
            }
        }
    },
    throwCardComputer:function(cardId){
        return {
            type:ActionTypes.THROW_CARD_COMPUTER,
            payload:{
                id : v4(),
                card : cardId
            }
        }
    },
    takeCardUser:function(cardId){
        return {
            type:ActionTypes.TAKE_CARD_USER,
            payload:{
                id : cardId
            }
        }
    },
    throwCardUser:function(cardId){
        return {
            type:ActionTypes.THROW_CARD_USER,
            payload:{
                id : v4(),
                card : cardId
            }
        }
    },
}
export default ActionGenerators;