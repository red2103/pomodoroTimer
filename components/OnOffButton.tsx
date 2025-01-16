import React, {useState} from "react";

interface buttonProps {
    state: boolean;
    on: string;
    off: string; 
    description: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

const OnOffButton: React.FC<buttonProps>  = (props) =>{
    const [state, changeState] = useState(props.on);
    
    function change() {
        if (state == props.on) {
            changeState(props.off)
        } else {
            changeState(props.on)
        }
    }
    
    return (
            <button onClick={change}>{props.on}</button>

    );
}

export default OnOffButton