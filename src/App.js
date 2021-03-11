import React from 'react';
import Overview from './Overview';
import uniqid from 'uniqid';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            inputValue: ''
        }

        this.inputHandler = this.inputHandler.bind(this);
        this.addHandler = this.addHandler.bind(this);
        this.removeHandler = this.removeHandler.bind(this);
        this.editHandler = this.editHandler.bind(this);
        this.editToggler = this.editToggler.bind(this);
    }

    inputHandler(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    addHandler(e) {
        e.preventDefault();
        this.setState({
            tasks: this.state.tasks.concat({ 
                id: uniqid.time(), 
                description: this.state.inputValue,
                showEdit: false
            }),
            inputValue: ''
        });
    }

    editHandler(e, id) {
        e.preventDefault();
        this.setState({
            tasks: this.state.tasks.map(task => {
                if(task.id === id) {
                    task.description = e.target[0].value;
                    task.showEdit = false;
                }
                return task;
            })
        });
    }

    editToggler(e, id) {
        this.setState({
            tasks: this.state.tasks.map(task => {
                if(task.id === id) task.showEdit = true;
                return task;
            })
        });
    }

    removeHandler(e, id) {
        e.preventDefault();
        this.setState({
            tasks: this.state.tasks.filter(task => task.id !== id)
        });
    }

    render() {
        return (
            <div className="container">
                <h1>React TODO exercise</h1>
                <form className="mainForm" onSubmit={this.addHandler}>
                    <input type="text"
                        onChange={this.inputHandler}
                        value={this.state.inputValue}
                        required
                    />
                    <button type="submit">Add</button>
                </form>
                <Overview 
                    tasks={this.state.tasks} 
                    removeHandler={this.removeHandler} 
                    editHandler={this.editHandler}
                    editToggler={this.editToggler}
                />
            </div>
        );
    }
}

export default App;