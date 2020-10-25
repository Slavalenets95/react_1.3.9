import React from 'react'
import ReactDOM from 'react-dom'

import Footer from './components/footer'
import Header from './components/header'
import TaskList from './components/taskList'

class App extends React.Component {

  footerData = [
    { text: 'All', selected: true, id : 1 },
    { text: 'Active', selected: false, id : 2 },
    { text: 'Completed', selected: false, id : 3 },
  ]

  state = {
    tasksData : [
      {descriptionText : 'Completed task', dateCreated : 'created 17 seconds ago', classNames : null, id : 1},
      {descriptionText : 'Editing task', dateCreated : 'created 17 seconds ago', classNames : 'editing', id : 2},
      {descriptionText : 'Active task', dateCreated : 'created 5 minutes ago', classNames : null, id : 3}
    ]
  }

  deleteTask = (id) => {
    this.setState(state => {
      const index = state.tasksData.findIndex(item => item.id === id)
      return {
        tasksData : [...state.tasksData.slice(0, index), ...state.tasksData.slice(index + 1)]
      }
    })
  }
  
  render() {
    return (
      <section className = 'todoapp'>
        <Header />
        <section className = 'main'>
          <TaskList tasksData = { this.state.tasksData }
                    deleteTask = { this.deleteTask }
                    />
        </section>
  
        <Footer footerData={this.footerData} />
      </section>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('main'))