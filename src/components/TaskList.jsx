import axios from "axios";
import React, { Component } from "react";
import styled from "styled-components";

const List = styled.ul`
    list-style: none;
`

const URL_BASE = "http://localhost:3000/tasks";

class TaskList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.getTask();
  }

  getTask = () => {
    axios
      .get(URL_BASE)
      .then((response) => {
        this.setState({
          tasks: response.data,
        });
      })
      .catch((error) => console.error(error));
  };

  setStatusTask = (idTask, status) => {
    axios
      .patch(`${URL_BASE}/${idTask}`, { status: !status })
      .then(() => this.getTask())
      .catch((error) => console.error(error));
  };

  render() {
    return (
      <List>
        {this.state.tasks.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.status}
                onChange={() => this.setStatusTask(item.id, item.status)}
              />
              {item.description}
            </label>
          </li>
        ))}
      </List>
    );
  }
}

export default TaskList;
