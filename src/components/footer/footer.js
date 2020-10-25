import React from 'react'

import './footer.css'
import TaskFilter from '../tasksFilter/taskFilter'



const Footer = ({ footerData }) => {

    
    const liElements = footerData.map(item => {
        const { id, ...data } = item
        return (
            <li key = { id }>
                <TaskFilter { ...data }
                />
            </li>
        )
    })


    return (
        <footer className='footer'>
            <span className='todo-count'>1 items left</span>
            <ul className='filters'>
                { liElements }
            </ul>
            <button className='clear-completed'>Clear completed</button>
        </footer>
    )
}

export default Footer

