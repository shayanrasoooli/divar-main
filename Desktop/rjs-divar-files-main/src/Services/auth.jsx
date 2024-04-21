import api from "../Config/Api";

const sendOPT = async (mobile) =>{
    try{
        const response = await api.post("auth/send-otp" , {mobile});
        return { response }
    }catch(error){
        return { error }
    }
}

const checkOtp = async (mobile , code) => {
    try{
        const response = await api.post("auth/check-otp" , {mobile , code})
        return response
    }catch(error){
        return error
    }
}

export {checkOtp , sendOPT}