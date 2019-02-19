import React, { memo } from 'react';
import AddTodo from './components/Todo/AddTodo';
import Layout from './components/Todo/Layout';
import TodoList from './components/Todo/TodoList';

const TodoApp = memo(props => {
  return (
    <Layout>
      <AddTodo
        inputValue={1}
        onInputChange={2}
        onButtonClick={3}
        onInputKeyPress={4}
      />
      <TodoList items={1} onItemCheck={2} onItemRemove={3} />
    </Layout>
  );
});

export default TodoApp;
