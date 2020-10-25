import React from 'react'

import './task.css'

export default class Task extends React.Component {

    state = {
        completed : false
    }

    setTaskCompleted = () => {
        this.setState(state => ({ completed : !state.completed}))
    }

    render() {
        const { descriptionText, dateCreated, deleteTask } = this.props
        let { classNames } = this.props
        const { completed } = this.state
        const editInput = <input type='text' className='edit' placeholder='Editing task'></input>

        classNames = !!classNames === true ? classNames.split(' ') : [] 
        if(completed) classNames.push('completed')

        return (
            <li className = { classNames.join(' ') }
                onClick = { this.setTaskCompleted }>
                <div className = 'view'>
                    <input className = 'toggle'
                           type = 'checkbox'
                    />
                    <label>
                        <span className = 'description'>{ descriptionText }</span>
                        <span className = 'created'>{ dateCreated }</span>
                    </label>
                    <button className = 'icon icon-edit'></button>
                    <button className = 'icon icon-destroy'
                            onClick = { deleteTask }
                            ></button>
                </div>
                { classNames.find(item => item === 'editing') === 'editing' ? editInput : null }
            </li >
        )
    }
}

