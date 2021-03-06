import React from "react";
import TodoContainer from "../../containers/TodoContainer";
import './index.css'
class DoneTodoList extends React.Component {
    render() {
        return (
            <div className='done-todo-list'>
                {this.props.todo.filter(item => item.done === true).map((item, index) => <TodoContainer key={index}
                                                                                                       value={item.text}
                                                                                                       done={item.done}
                                                                                                       index={index}/>)}
            </div>
        );
    }
}

export default DoneTodoList