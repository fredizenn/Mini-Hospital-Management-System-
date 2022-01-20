import "./widgetSm.css"
import {Visibility} from "@mui/icons-material"

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Members</span>
            <ul className="widgetSmList"></ul> 
            <li className="widgetSmListItem">
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                    </div> 
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                        </button> 
                        </li>  
            </div>
    )
}