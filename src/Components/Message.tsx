import React, {useState} from 'react';

interface IProps{
name : string,
    age : number
}
interface IState{

}
let Message : React.FC<IProps> = ({name,age}) => {
    return(
        <React.Fragment>
            <div className="container mt-2">
                <div className="card">
                    <div className="card-body">
                        <h3>Hi My Name is : {name} and I am {age} old</h3>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Message;