import { Eye } from "assets/icons/Eye";
import { Trash } from "assets/icons/Trash";
import { Button } from "components/Button/Button";
import { FC, useState } from "react";
import { TodoType } from "types/todos";
import { Checkmark, STodo } from "./TodoListItem.styled";

export const TodoListItem: FC<TodoType> = ({
  title,
  description,
  checked,
  id,
  withDescription = false,
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  return (
    <STodo>
      <Checkmark
        checked={isChecked}
        onClick={() => setIsChecked((prev) => !prev)}
      />
      <p onClick={() => setIsChecked((prev) => !prev)}>{title}</p>
      {withDescription && <p>{description}</p>}
      <Button to={`/detail/${id}`}>
        <Eye />
      </Button>
      <Button onClick={() => console.log("click")}>
        <Trash />
      </Button>
    </STodo>
  );
};
