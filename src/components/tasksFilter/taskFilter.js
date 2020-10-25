import React from 'react'


export default class TaskFilter extends React.Component {

    render() {
        let { text, selected } = this.props

        selected = selected === true ? 'selected' : null
        
        return <button className = { selected }>{ text }</button>
    }
}

