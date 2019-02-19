import React, { memo } from 'react';
import AddTodo from './components/Todo/AddTodo';
import { useInputValue } from './components/Todo/hooks/form';
import { useTodos } from './components/Todo/hooks/todos';
import Layout from './components/Todo/Layout';
import TodoList from './components/Todo/TodoList';

const TodoApp = memo(props => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { todos, addTodo, checkTodo, removeTodo } = useTodos();

  const clearInputAndAddTodo = _ => {
    clearInput();
    addTodo(inputValue);
  };

  return (
    <Layout>
      <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
      />
      <TodoList items={todos} onItemCheck={idx => checkTodo(idx)} onItemRemove={idx => removeTodo(idx)} />
    </Layout>
  );
});

export default TodoApp;
