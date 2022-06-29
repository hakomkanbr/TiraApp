import { Card } from "antd";
import CardStyle from "./Card.style";

const CardCustum = (props)=>{
    return(
        <CardStyle className="site-card-border-less-wrapper">
            <Card   style={props.style} {... props} bordered={true}>
                {props.children}
            </Card>
        </CardStyle>
    );
}

export default CardCustum;