import moment from "moment";

const convertDate = (e)=>{
    return moment(e).format("DD/MM/YYYY")
}

export default convertDate;