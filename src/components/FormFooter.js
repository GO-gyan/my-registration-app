import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const buttonStyle = {
    margin : '10px 10px 10px 10px',
    float: 'right'
}

export default ({prevNext, url, saveOnNext, saveFinalData}) => {
    return(
        <div>
            { prevNext.prev !== null && prevNext.prev === "" &&
                <Link to={`${url}`} style={{float: "left"}}>Back</Link>
            }
            { prevNext.prev !== null && prevNext.prev !== "" &&
                <Link to={`${url}/${prevNext.prev}`} style={{float: "left"}}>Back</Link>
            }
            { prevNext.next !== null && 
                <Link to={`${url}/${prevNext.next}`} style={{float: "right"}} onClick={() => saveOnNext()}>Next</Link>
            }
            { !prevNext.next && 
                <Button 
                    type = {'primary'} 
                    title = {'Save'} 
                    style={buttonStyle}
                    action={saveFinalData}
                />    
            }
        </div>
    )
}