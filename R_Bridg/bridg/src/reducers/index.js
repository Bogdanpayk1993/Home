import ActionType from "../constants/ActionType"

const Redusers = (state, action) => {
    switch (action.type) {
        case ActionType.GET_COLOD:
            return {
                colod: { ...(state.colod), [action.payload.id]: action.payload },
                usedCard: { ...(state.usedCard) },
                computer: { ...(state.computer) },
                user: { ...(state.user) },
                seven: action.payload.seven,
                mast: action.payload.mast
            }
        case ActionType.GET_FIRST_USED_CARD:
            let ob = { ...state.colod }
            delete ob[action.payload.card]
            return {
                colod: ob,
                usedCard: { ...(state.usedCard), [action.payload.id]: action.payload },
                computer: { ...(state.computer) },
                user: { ...(state.user) },
                seven: action.payload.seven,
                mast: state.mast
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
                mast: state.mast
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
                mast: state.mast
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
                mast: state.mast
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
                mast: state.mast
            }
        case ActionType.THROW_SEVEN:
            return {
                colod: { ...(state.colod) },
                usedCard: { ...(state.usedCard) },
                computer: { ...(state.computer) },
                user: { ...(state.user) },
                seven: action.payload.seven,
                mast: state.mast

            }
        case ActionType.CHANGE_MAST:
            return {
                colod: { ...(state.colod) },
                usedCard: { ...(state.usedCard) },
                computer: { ...(state.computer) },
                user: { ...(state.user) },
                seven: state.seven,
                mast: action.payload.mast
            }
        default:
            return state;
    }
}
export default Redusers;