import { Button } from "antd";

const ButtonCustum = (props)=>{
    return(
        <Button {...props}>
            {props.children}
        </Button>
    )
}

export default ButtonCustum;