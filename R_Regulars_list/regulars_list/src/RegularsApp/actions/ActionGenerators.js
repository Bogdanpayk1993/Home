import ActionType from "../constants/ActionTypes"
import {v4} from "uuid"

const ActionRegularsGenerators={
    addRegular:function(name,day){
        return {
            type:ActionType.ADD_REGULARS,
            payload:{
                id:v4(),
                name,
                day
            }
        }
    },

    deleteRegular:function(regularID){
        return {
            type:ActionType.DELETE_REGULARS,
            payload:{
                id:regularID
            }
        }
    }
}

export default ActionRegularsGenerators