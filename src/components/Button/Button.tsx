import { Link } from "components/Link/Link";
import { FC, ReactNode } from "react";
import { SButton } from "./Button.styled";

type ButtonProps = {
  onClick?: () => void;
  children: string | ReactNode;
  type?: HTMLButtonElement["type"];
  to?: string;
};

export const Button: FC<ButtonProps> = ({
  onClick,
  type = "button",
  children,
  to,
}) => {
  const element = (
    //@ts-expect-error
    <SButton onClick={onClick} type={type}>
      {children}
    </SButton>
  );

  if (to) return <Link to={to}>{element}</Link>;
  return element;
};
