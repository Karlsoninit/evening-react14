import React from 'react';
import css from './TaskList.module.css';

const TaskList = ({ description, task, handleDelete, id }) => (
  <div className={css.container}>
    <h2>{task}</h2>
    <p>{description}</p>
    <button onClick={handleDelete} type="button" data-id={id}>
      Delete
    </button>
  </div>
);

export default TaskList;
