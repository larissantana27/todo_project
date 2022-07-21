import React from "react";

import { ITask } from "../interfaces/Task";

import styles from "./TaskList.module.css";

//-------------------------------------------------------------------------------

interface Props {
  taskList: ITask[];
  handleDelete(title: string): void;
  handleEdit(task: ITask): void;
}

//-------------------------------------------------------------------------------

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {

  //-------------------------------------------------------------------------------
  
  return (
    <>
      {taskList.length > 0 ? (

        taskList.map((task, index) => (

          <div key = {index} className = {styles.task}>

            <div className = {styles.details}>
              <h4> {task.title} </h4>
              <p> Dificulty: {task.difficulty} </p>
            </div>
            
            <div className = {styles.actions}>
              <i className = "bi bi-pencil" 
                 onClick = {() => handleEdit(task)}
              ></i>
              <i className = "bi bi-trash"
                 onClick = {() => handleDelete(task.title)}
              ></i>
            </div>

          </div>

        ))

      ) : (
        <p>There are no tasks cataloged</p>
      )}
    </>
  );

  //-------------------------------------------------------------------------------
  
};

export default TaskList;