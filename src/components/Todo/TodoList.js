import { List, Paper } from '@material-ui/core'
import React, { memo } from 'react'
import Todo from './Todo'

const TodoList = memo(props => (
    <>
        {props.items.length > 0 && (
            <Paper style={{ margin:16 }}>
                <List style= {{ overflow:'scroll' }}>
                {props.items.map((todo, index) => (
                <Todo
                    {...todo}
                    key={`TodoItem.${index}`}
                    divider={index !== props.items.length - 1}
                    onButtonClick={() => props.onItemRemove(index)}
                    onCheckBoxToggle={() => props.onItemCheck(index)}
                />
                ))}
                </List>
            </Paper>
        )}
    </>
))

export default TodoList