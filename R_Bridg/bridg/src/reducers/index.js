import ActionType from "../constants/ActionType"
import ActionTypes from "../constants/ActionType";

const Redusers = (state, action) => {
    switch (action.type) {
        case ActionType.GET_COLOD:
            return {
                colod: { ...(state.colod), [action.payload.id]: action.payload },
                usedCard: { ...(state.usedCard) },
                computer: { ...(state.computer) },
                user: { ...(state.user) },
                seven: action.payload.seven,
                mast: action.payload.mast,
                corse: action.payload.corse
                
            }
        case ActionType.GET_COLOD_AGAIN: 
            let ob = { ...state.usedCard }
            delete ob[action.payload.id]
            return {
                colod : { ...(state.colod), [action.payload.card]: action.payload.card },
                usedCard: ob,
                computer: { ...(state.computer) },
                user: { ...(state.user) },
                seven: state.seven,
                mast: state.mast,
                corse: state.corse
            }
        case ActionType.GET_FIRST_USED_CARD:
            let ob0 = { ...state.colod }
            delete ob0[action.payload.card]
            return {
                colod: ob0,
                usedCard: { ...(state.usedCard), [action.payload.id]: action.payload },
                computer: { ...(state.computer) },
                user: { ...(state.user) },
                seven: action.payload.seven,
                mast: state.mast,
                corse: state.corse
            }
        case ActionType.TAKE_CARD_COMPUTER:
            let ob1 = { ...state.colod }
            delete ob1[action.payload.id]
            return {
                colod: ob1,
                usedCard: { ...(state.usedCard) },
                computer: { ...(state.computer), [action.payload.id]: action.payload },
                user: { ...(state.user) },
                seven: state.seven,
                mast: state.mast,
                corse: state.corse
            }
        case ActionType.THROW_CARD_COMPUTER:
            let ob2 = { ...state.computer }
            delete ob2[action.payload.card]
            return {
                colod: { ...(state.colod) },
                usedCard: { ...(state.usedCard), [action.payload.id]: action.payload },
                computer: ob2,
                user: { ...(state.user) },
                seven: action.payload.seven,
                mast: state.mast,
                corse: action.payload.corse
            }
        case ActionType.COMPUTER_CLEAR:
            return {
                colod: { ...(state.colod) },
                usedCard: { ...(state.usedCard) },
                computer: { },
                user: { ...(state.user) },
                seven: state.seven,
                mast: state.mast,
                corse: state.corse
            }
        case ActionType.TAKE_CARD_USER:
            let ob3 = { ...state.colod }
            delete ob3[action.payload.id]
            return {
                colod: ob3,
                usedCard: { ...(state.usedCard) },
                computer: { ...(state.computer) },
                user: { ...(state.user), [action.payload.id]: action.payload },
                seven: state.seven,
                mast: state.mast,
                corse: state.corse
            }
        case ActionType.THROW_CARD_USER:
            let ob4 = { ...state.user }
            delete ob4[action.payload.card]
            return {
                colod: { ...(state.colod) },
                usedCard: { ...(state.usedCard), [action.payload.id]: action.payload },
                computer: { ...(state.computer) },
                user: ob4,
                seven: action.payload.seven,
                mast: state.mast,
                corse: action.payload.corse
            }
        case ActionType.USER_CLEAR:
                return {
                    colod: { ...(state.colod) },
                    usedCard: { ...(state.usedCard) },
                    computer: { ...(state.computer) },
                    user: { },
                    seven: state.seven,
                    mast: state.mast,
                    corse: state.corse
                }
        case ActionType.THROW_SEVEN:
            return {
                colod: { ...(state.colod) },
                usedCard: { ...(state.usedCard) },
                computer: { ...(state.computer) },
                user: { ...(state.user) },
                seven: action.payload.seven,
                mast: state.mast,
                corse: state.corse

            }
        case ActionType.CHANGE_MAST:
            return {
                colod: { ...(state.colod) },
                usedCard: { ...(state.usedCard) },
                computer: { ...(state.computer) },
                user: { ...(state.user) },
                seven: state.seven,
                mast: action.payload.mast,
                corse: state.corse
            }
        case ActionTypes.RESTART:
            return {

            }
        default:
            return state;
    }
}
export default Redusers;