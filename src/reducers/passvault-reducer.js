const passVaultReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_PASS_VAULT":
            return action.passVaultData;
        default:
            return state;
    }
};

export { passVaultReducer };
