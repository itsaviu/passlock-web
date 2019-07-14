import axios from "axios";

const setPassVaultData = (passVaultData) => {
    return {
        type: "SET_PASS_VAULT",
        passVaultData: passVaultData
    };
};


const fetchPassVaultData = () => {
    return (dispatch) => {
        return axios.get("http://localhost:8082/api/vault/pass")
            .then((response) => {
                console.log(response.data);
                dispatch(setPassVaultData(response.data));
            }).catch((error) => console.log(error));
    };
};


export {fetchPassVaultData};
