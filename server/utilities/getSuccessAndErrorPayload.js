const getSuccessPayload =()=>{
    return {
        hasError:false,
        message:"success"
    }
}



const getErrorPayload =()=>{
    return {
        hasError:true,
        message:"error",
        errorCode:""
    }
}

module.exports={getErrorPayload,getSuccessPayload}