import "./App.css";
import ParentBody from "./components/parent_container";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: [""],
    };
  }
  render() {
    return (
      <div className="App">
        <ParentBody />
      </div>
    );
  }
}

export default App;

/*
Problem : We have to do it with hook and hooks is the feature in functional component and we have used Class component 
Whatever task is written inside the input form and click the addIcon, it should put that task in the state
    a. first you have to get that data what is written in the form, How ? using Onchange event handler and inside that we will use event.target.value & make event.target.value as that input form value  (Done)
    b.  No you will 

Solution : 
Step 1: convert it into functional component and now here instead of state we will use useState()
    Syntax: const [count,SetCount] = useState(0);
    example: const [task,setTask] = useState('');
    count is the info we want to put inside the state.
    SetCount is the function to update the count info inside the state.
    useState(0) say's the default/initial value of the count is 0.

    Just like this you have to work with the task

Step 2: Now you have to set the value of the input form to the value inside the useState(task).i.e value={task}
        Problem : Now you will notice that you can't write anything inside the input data ? Trueeeee

        Solution : Now you have mention the value={task} after than you have to give a onChange event handler to hte input
        and use setTask() to change the task variable value.
        Code : onChange={(event)=>{
            setTask(()=>{
              task = event.target.value;
            })
        }} 
        Here we have directly assigned the new value to the variable, which is a wrong approach

        use this : 
        Code : onChange={(event)=>{
            setTask(event.target.value)
        }} 
        this will trigger the component to rerender as the task value is now modified.
        You can inspect this in Components todo_mainList as this component we have defined our state.
        there the first time the task is "" then every time user is typing it get modified.
        Now, you are back on track as you can write in the input field again 

Step 3: Now you have to create a new state because when we remove the value the value of the state is also erased
        so we can track the previous value.
        Now the task is to put the task in another state in the form of array.
        this will only happen when the use has clicked the AddIcon Button.  (done)
        
*/
