import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodos from './components/addtodo';
import About from './components/pages/about';
import Axios from 'axios'
class  App extends Component {
    state={
        todos:[]
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res =>  this.setState({todos:res.data}))
    }
    markComplete=(id)=>{
        this.setState({todos: this.state.todos.map((todo)=>{
            if(todo.id === id)
            todo.completed=!todo.completed
        
        return todo
        })})                 
    }
   delTodo=(id)=>{
       Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
       .then(res=>
    this.setState({
        todos:[...this.state.todos.filter(todo =>todo.id!==id)]
    }))
   }
   addTodo=(title)=>{
    Axios.post('https://jsonplaceholder.typicode.com/todos?_limit=10',{title,completed:false})
    .then(res=>
    this.setState(
           {
               todos:[...this.state.todos,res.data]
           }
       ))

   }
  render()
  {
     
      return (
            <Router>
            <div className="App">
                <div className="container">
                <Header/>
                <Route exact path="/" render={props =>(
                    <React.Fragment>
                    <AddTodos addTodo={this.addTodo}/>
                    <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                    </React.Fragment>

                )}/>
                
                <Route path="/about" component={About}/>
                

                
                </div>
                </div>
                </Router>
        );
  }
    
}

export default App;
