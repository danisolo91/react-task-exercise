import React from 'react';

class Overview extends React.Component {

    render() {
        return (
            <ul>
                {this.props.tasks.map((task,i) => {
                    return (
                        <li key={task.id}>
                            <b>{++i}</b> -
                            {!task.showEdit ? 
                                <span>
                                    {task.description} 
                                    <button onClick={(e) => this.props.editToggler(e, task.id)}>Edit</button>
                                </span>
                            :
                                <form onSubmit={(e) => this.props.editHandler(e, task.id)}>
                                    <input defaultValue={task.description} type="text" required />
                                    <button type="submit">Save</button>
                                </form>
                            }
                            <button onClick={(e) => this.props.removeHandler(e, task.id)}>Delete</button>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default Overview;