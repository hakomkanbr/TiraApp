import { hundleResponse } from "./hataYoetimi";

const baseUrl = process.env.BASE_URL;

const getToken = ()=>{
    return "Bearer " + window.localStorage.getItem(process.env.TOKEN_NAME);
}

export const getData = async (url, token) => {
    try{
        const res = await fetch(`${baseUrl}${url}`, {
            method: 'GET',
            headers: {
                'Authorization': token && getToken()
            }
        })
        if(res.status != 200) {
            throw res
        };
    
        const string = await res.text();
        const data = string === "" ? {} : JSON.parse(string);
        return data;
    }catch(err){
        var res = hundleResponse(err);
        throw res;
    }
}

export const postData = async (url, post, token) => {
    try{
        const res = await fetch(`${baseUrl}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':  token && getToken()
            },
            body: JSON.stringify(post)
        });

        if(res.status != 200) {
            throw res;
        };
        const string = await res.text();
        const data = string === "" ? {} : JSON.parse(string);
        return data;
    }catch(err){
        var res = hundleResponse(err);
        throw res;
    }
}

export const putData = async (url, post, token) => {
    const res = await fetch(`${baseUrl}${url}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })

    const data = await res.json()
    return data
}

export const patchData = async (url, post, token) => {
    const res = await fetch(`${baseUrl}${url}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })

    const data = await res.json()
    return data
}

export const deleteData = async (url, token) => {
    const res = await fetch(`${baseUrl}${url}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })

    const data = await res.json()
    return data
}