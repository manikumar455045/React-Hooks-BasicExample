import React, {useState} from "react";

interface IProps{

}
interface IState{
    count : number
}

let Counter : React.FC<IProps> = () => {
    let [counter , updateCounter] = useState({
        count : 0
    })

    let incrementCounter = () => {
        updateCounter({
            count: counter.count +1
        })
    }
    let decrementCounter =() => {
        updateCounter({
            count : counter.count - 1 > 0 ? counter.count - 1 : 0
        })
    }
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="card">
                    <div className="card-header">
                        <h1 className="text-center">useState() Hook basic example</h1>
                    </div>
                    <div className="card-body">
                        <h3>counter: {counter.count}</h3>
                        <button className="btn btn-primary" onClick={incrementCounter}>Increment</button>
                        <button className="btn btn-danger" onClick={decrementCounter}>Decrement</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Counter;