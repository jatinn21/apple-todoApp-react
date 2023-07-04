// Functional Component
import React, { useState } from "react";

const Todo_main_list = () => {
  let [task, setTask] = useState("");
  let [tasks, setTasks] = useState([]);
  let [taskDetailIndex, setTaskDetailIndex] = useState();
  let [taskDetailUpdatedValue, setTaskDetailUpdatedValue] = useState();
  let [inputValue, setInputValue] = useState();

  // When User Click the Radio Button - To cross the task if Radio button is checked
  function changeIcon(index) {
    if (
      document.querySelector(`#index${index}`).textContent ==
      "radio_button_checked"
    ) {
      document.querySelector(`#index${index}`).textContent =
        "radio_button_unchecked";
      document.querySelector(`.task${index}-desc`).style.textDecoration =
        "none";
      document
        .querySelector(`.task${index}Element`)
        .setAttribute("title", "Task Pending");
    } else {
      document.querySelector(`#index${index}`).textContent =
        "radio_button_checked";
      document.querySelector(`.task${index}-desc`).style.textDecoration =
        "line-through";
      document
        .querySelector(`.task${index}Element`)
        .setAttribute("title", "Task Completed");
    }
  }

  // ---------------------------------------Add task Starts-------------------------
  /*There are two ways to add the task  : using push()  & using Spread operator */
  function newArr(element) {
    /*Way 1 : push method */
    setTask("");
    tasks.push(element);
    return tasks;
  }

  function addTask() {
    /*Way 2 : Spread Operator */
    setTask("");
    if (tasks.length > 10) {
      document.querySelector(".todo__list").style.overflowY = "scroll";
      setTasks([task, ...tasks]);
    } else {
      if (task.length > 0) {
        setTasks([task, ...tasks]);
      } else {
        alert("Please Enter a value");
      }
    }
  }
  // ---------------------------------------Add task End-------------------------

  // ---------------------------------------Delete Button is Clicked : Delete the task Starts-------------------------
  function Delete_Btn_Clicked(index) {
    const taskDesc = tasks[index];
    delete tasks[index];
    tasks = tasks.filter((el) => {
      return el.length > 0;
    });
    setTasks([...tasks]);
    crossBtn_DetailBox();
  }
  // ---------------------------------------Remove task End-------------------------

  // ---------------------------------------Update task End-------------------------
  function Done_Btn_Clicked() {
    const newUpdatedArray = tasks.map((ele, index) => {
      if (index == taskDetailIndex) {
        return inputValue;
      } else return ele;
    });
    setTasks(newUpdatedArray);
    crossBtn_DetailBox();
  }
  // ---------------------------------------Update task End-------------------------

  // ---------------------------------------Details Button Starts-------------------------
  function details_Btn_Clicked(taskIndex) {
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".DetailBox").style.display = "flex";
  }
  // ---------------------------------------Details Button End-------------------------

  // ---------------------------------------crossBtn_DetailBox Start-------------------------
  function crossBtn_DetailBox() {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".DetailBox").style.display = "none";
  }
  // ---------------------------------------crossBtn_DetailBox End-------------------------

  return (
    <section className="mainBody">
      <div className="todo__form center">
        <input
          type="text"
          className="todo__formInput "
          name="todo"
          autoComplete="off"
          id="todo__formInput"
          placeholder=" Add New Task..."
          required
          onChange={(event) => {
            setTask(event.target.value);
          }}
          onKeyUp={(event) => {
            if (event.key == "Enter") {
              addTask();
            }
          }}
          value={task}
        />
        <abbr title="Add task">
          <span
            className="addTask__Icon material-symbols-outlined"
            onClick={() => {
              // setTasks(newArr(task)); //Approach 1 :used push method that will push the element in the tasks array and return tasks
              addTask(); //Approach 2 : used the spread operator as the tasks ia an array first take all element individual and then at last put the recent task
            }}
          >
            add
          </span>
        </abbr>
      </div>
      <div className="todo__list">
        {tasks.map((task, taskIndex) => {
          console.log(taskIndex);
          return (
            <task
              key={taskIndex}
              className={`task${taskIndex}Element`}
              title="Task Pending"
              onClick={() => {
                setTaskDetailIndex(taskIndex);
                setInputValue(tasks[taskIndex]);
              }}
            >
              <span
                className="task_checkbox material-symbols-outlined text__color "
                id={`index${taskIndex}`}
                onClick={() => {
                  changeIcon(taskIndex);
                }}
              >
                radio_button_unchecked
              </span>
              <span className={`task${taskIndex}-desc task__desc `}>
                {task}
              </span>
              <span
                className={`details detail-Box-${taskIndex}`}
                onClick={() => {
                  details_Btn_Clicked(taskIndex);
                }}
              >
                Details
              </span>
              <span></span>
            </task>
          );
        })}
      </div>
      <div className="DetailBox popupBox center " id={`detail_Of_`}>
        <div className="header_DetailBox center">
          <h1 className="title_DetailBox"> Task Detail</h1>
          <span
            className="material-symbols-outlined crossBtn_DetailBox"
            onClick={() => {
              crossBtn_DetailBox();
            }}
          >
            close
          </span>
        </div>
        <span className="Message_DetailBox">
          <span className="Message_title_DetailBox">
            Task you have entered : (Editable)
          </span>
          <textarea
            className="textarea_DetailBox"
            onChange={(e) => {
              console.log(e.target.value);
              setInputValue(e.target.value);
            }}
            value={inputValue}
          >
            {task}
          </textarea>
        </span>
        <span className="Footer_DetailBox">
          <span
            className="Delete_Btn"
            title="Delete Task"
            onClick={() => {
              Delete_Btn_Clicked(taskDetailIndex);
            }}
          >
            Delete
          </span>
          <span
            className="Done_Btn"
            title="Submit Task"
            onClick={() => {
              Done_Btn_Clicked();
            }}
          >
            Done
          </span>
        </span>
      </div>
      <div className="overlay"></div>
    </section>
  );
};

export default Todo_main_list;

// Todo Tasks
// Add a button that automatically orders pizza for the team whenever a task is completed.
//
// Add a "Procrastination Mode" that reschedules all tasks for tomorrow with a witty excuse attached
// Create a "Task Interruption" setting that randomly inserts silly GIFs or memes while users are trying to work.
