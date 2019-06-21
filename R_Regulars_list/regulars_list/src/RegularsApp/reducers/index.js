import ActionType from "../constants/ActionTypes"
import ActionGenarators from "../actions/ActionGenerators"

const regularsReducers=(state, action)=>{
    switch (action.type)
    {
        case ActionType.ADD_REGULARS:
            return {
                regulars: {...(state.regulars), [action.payload.id]: action.payload}
            }
        
        case ActionType.DELETE_REGULARS:
            let ob={...state.regulars}
            delete ob[action.payload.id]
            return {
                regulars: ob
            }
            
        default:
            return state
    }
}

export default regularsReducers