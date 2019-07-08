import ActionTypes from '../constants/ActionType'
import {v4} from "uuid"

const ActionGenerators = {
    getColod:function(cardId, seven){
        return {
            type:ActionTypes.GET_COLOD,
            payload:{
                id : cardId,
                seven : seven
            }
        }
    },
    getFirstUsedCard:function(cardId, seven){
        return {
            type:ActionTypes.GET_FIRST_USED_CARD,
            payload:{
                id : v4(),
                card : cardId,
                seven : seven
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
    throwCardComputer:function(cardId, seven){
        return {
            type:ActionTypes.THROW_CARD_COMPUTER,
            payload:{
                id : v4(),
                card : cardId,
                seven : seven
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
    throwCardUser:function(cardId, seven){
        return {
            type:ActionTypes.THROW_CARD_USER,
            payload:{
                id : v4(),
                card : cardId,
                seven : seven
            }
        }
    },
    throwSeven:function(){
        return {
            type:ActionTypes.THROW_SEVEN,
            payload:{
                seven : 0
            }
        }
    }
}
export default ActionGenerators;