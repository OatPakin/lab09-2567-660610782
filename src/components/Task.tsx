import React from "react";

interface TaskItemProps {
  id: string;
  title: string;
  completed: boolean;
  deleteTaskFunc: (taskId: string) => void; 
  toggleDoneTaskFunc: (taskId: string) => void; 
}

export default function Task({
  id,
  title,
  deleteTaskFunc,
  toggleDoneTaskFunc,
  completed,
  }:TaskItemProps) {
    const doneBtnOnClick = () => {
      toggleDoneTaskFunc(id);
    };
  
    const deleteBtnOnClick = () => {
    deleteTaskFunc(id);
  };
 
  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
      <span className={completed?"text-decoration-line-through" : ""  } >{title}</span>
      <button className= "btn btn-success" onClick={doneBtnOnClick}>Done</button>
      <button className="btn btn-danger" onClick={deleteBtnOnClick}>
        Delete
      </button>
    </div>
  );
}