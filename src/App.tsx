import React from 'react';
import "./App.css";
import Message from "./Components/Message";
import Counter from "./Components/Counter";



let App  = () => {
  return (
    <React.Fragment>
        <nav className="navbar navbar-dark bg-dark navbar-expand-md">
            <div className="container">
                <a href="/" className="navbar-brand font-weight-bold">React Hooks props & useState Hook</a>
            </div>
        </nav>
        <Message name={"Mani Kumar"} age={23} />
        <Message name={"Raghavendra"} age={22} />
        <Counter />
        </React.Fragment>
  );
}

export default App;
