import React from 'react';
import TaskList from '../TaskList/TaskList';

const TaskContainer = ({ tasks, handleDelete }) => {
  return tasks.map(task => (
    <TaskList handleDelete={handleDelete} key={task.id} {...task} />
  ));
};

export default TaskContainer;
