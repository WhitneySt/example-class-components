import React, { Component } from "react";
import Contador from "./components/Contador";
import TaskList from "./components/TaskList";


class App extends Component{
    render() {
        return (
            <main>
                <h1>Este es un componente de clase</h1>
                <Contador initialValue={20} />
                <TaskList/>
            </main>
        )
    }
}

export default App;