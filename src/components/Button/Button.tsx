import { Link } from "components/Link/Link"
import { ComponentProps, FC, ReactNode } from "react"
import { SButton } from "./Button.styled"

type ButtonProps = {
  onClick?: () => void
  children: string | ReactNode
  type?: ComponentProps<typeof SButton>["type"]
  to?: string
}

export const Button: FC<ButtonProps> = ({
  onClick,
  type = "button",
  children,
  to,
}) => {
  const element = (
    <SButton onClick={onClick} type={type}>
      {children}
    </SButton>
  )

  if (to) return <Link to={to}>{element}</Link>
  return element
}
