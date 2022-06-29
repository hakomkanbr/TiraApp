export const isAuthorization = ()=>{
    var getToken = window.localStorage.getItem(process.env.TOKEN_NAME);
    if(!getToken){
        return false;
    }
    return true;
}

export const removeToken = ()=>{
    window.localStorage.removeItem(process.env.TOKEN_NAME);
    window.location.assign("/login")
}