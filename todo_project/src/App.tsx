import React, { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from "./components/Modal";

import { ITask } from './interfaces/Task'

import styles from './App.module.css';


function App() {

  //-------------------------------------------------------------------------------

  const [taskList, setTaskList] = useState <ITask[]> ([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  //-------------------------------------------------------------------------------

  const deleteTask = (title: string): void => {
    setTaskList(
      taskList.filter((task) => {
        return task.title !== title;
      })
    );
  };

  //-------------------------------------------------------------------------------

  const hideOrShowModal = (display: boolean) => {
    const modal = document.getElementById("modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  //-------------------------------------------------------------------------------

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  //-------------------------------------------------------------------------------

  const updateTask = (id: number, title: string, difficulty: number) => {
    
    const updatedTask: ITask = { id, title, difficulty };

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems);

    hideOrShowModal(false);
  };

  //-------------------------------------------------------------------------------
  
  return (
    
    <div>

    {/*-------------------------------------------------------------------------------*/}

      <Modal
          title = "Edit Task"
          children = {
            <TaskForm
              buttonText = "Edit"
              taskList = {taskList}
              task = {taskToUpdate}
              handleUpdate = {updateTask}
            />
          }
        />

    {/*-------------------------------------------------------------------------------*/}

      <Header />

    {/*-------------------------------------------------------------------------------*/}

      <main className = {styles.main}>
        <div className = {styles.todo_form}>
          <h2> Create Task </h2>
          <TaskForm
            buttonText = "Save"
            taskList = {taskList}
            setTaskList = {setTaskList}
          />
        </div>
        <div className = "todo-container">
          <h2> Your Tasks </h2>
          <TaskList
            taskList = {taskList}
            handleDelete = {deleteTask}
            handleEdit = {editTask}
          />
        </div>
      </main>
    
    {/*-------------------------------------------------------------------------------*/}

      <Footer/>

    {/*-------------------------------------------------------------------------------*/}

    </div>
   
  );

  //-------------------------------------------------------------------------------
  
}

export default App;
