
const reducer = (state, action) => {

    switch(action.type) {
        case 'WITHDRAW':
            state.totalAmount = action.totalAmount - action.deductAmount;
            return state;
        default:
            return state;

    }
}

export default reducer;

