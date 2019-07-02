function updateBalance(deductAmount, totalAmount) {
        
    const action = {
        type: 'WITHDRAW',
        deductAmount: deductAmount,
        totalAmount: totalAmount
    }
    return action;
}

export default updateBalance;