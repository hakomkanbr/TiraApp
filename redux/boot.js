import { checkAuthorization } from "./auth/actions";
import {store} from "./store";


const _check = ()=>{
    return new Promise(()=>{
        store.dispatch(checkAuthorization());
    })
}

export default _check;