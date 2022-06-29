class app {
    constructor(){
        this.data = this.data    
    }
}

app.prototype.getKeys = (data , ids = [])=>{
    if(data != Array) return;
    data.forEach(obj => {
        if(obj.children){
            _app.getKeys(obj.children , ids);
        }
        if(obj.selectable == true){
            ids.push(obj.key);
        }
    });
    return ids;
}

app.prototype.errorTypes = {
    danger: "danger",
    warning: "warning",
    default: "default",
    info: "info",
    success: "success",
};

app.prototype.getSessionItem = (keyName)=>{
    return window.sessionStorage.getItem(keyName);
}
let _app = new app();


export default _app;
 

 