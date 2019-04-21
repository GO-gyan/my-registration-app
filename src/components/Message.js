import React, { useState } from "react";
import { Button, Fade, Alert } from 'reactstrap';

const Message = props => {

    const [display, setDisplay] = useState(true);

    return (
        <div>
            <Fade in={display} tag="h5" className="mt-3">
                <Alert color={props.type}>
                    {props.message}
                    <Button style={{float: "right"}} color="default" onClick={() => setDisplay(!display)}>X</Button>
                </Alert>
            </Fade>
        </div>
    );
};

export default Message;
