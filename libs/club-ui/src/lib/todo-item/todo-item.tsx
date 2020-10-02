import React from 'react';
import { Checkbox } from '@material-ui/core'

import { TodoItemContainer } from './styles';

/* eslint-disable-next-line */
export interface TodoItemProps {
  text: string;
};

export const TodoItem = ({ text }: TodoItemProps) => {
  return (
    <TodoItemContainer>
      <Checkbox />
      <strong>{text}</strong>
    </TodoItemContainer>
  );
};

export default TodoItem;
