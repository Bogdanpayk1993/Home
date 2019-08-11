import ActionTypes from '../constants/ActionType'
import {v4} from "uuid"

const ActionGenerators = {
    getColod:function(cardId){
        return {
            type:ActionTypes.GET_COLOD,
            payload:{
                id : cardId,
                seven : 0,
                mast : 0,
                corse : 0
            }
        }
    },
    getColodAgain:function(cardId, card){
        return {
            type:ActionTypes.GET_COLOD_AGAIN,
            payload:{
                id : cardId,
                card : card
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
                seven : seven,
                corse : 0
            }
        }
    },
    computerClear:function(){
        return {
            type:ActionTypes.COMPUTER_CLEAR,
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
                seven : seven,
                corse : 1
            }
        }
    },
    userClear:function(){
       return {
           type:ActionTypes.USER_CLEAR,
       } 
    },
    throwSeven:function(){
        return {
            type:ActionTypes.THROW_SEVEN,
            payload:{
                seven : 0
            }
        }
    },
    changeMast:function(mast){
        return {
            type:ActionTypes.CHANGE_MAST,
            payload:{
                mast : mast
            }
        }
    },
    restart:function(){
        return {
            type:ActionTypes.RESTART
        }
    }
}
export default ActionGenerators;