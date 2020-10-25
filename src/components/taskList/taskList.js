import React from 'react'

import Task from '../task/task'
import './taskList.css'

export default class TaskList extends React.Component {


    render() {
        const { tasksData, deleteTask } = this.props

        const taskListLiElements = tasksData.map(item => {
            const { id, ...data } = item
            return (
                <Task key = { id }
                      { ...data } 
                      deleteTask = { () => deleteTask(item.id) }
                />
            )
        })
        return (
            <ul className='todo-list'>
                { taskListLiElements }
            </ul>
        )
    }
}

