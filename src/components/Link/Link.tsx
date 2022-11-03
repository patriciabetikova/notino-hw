import { FC, ReactNode } from "react"
import { Link as RRDLink } from "react-router-dom"

type LinkProps = {
  children: ReactNode
  to: string
}

export const Link: FC<LinkProps> = ({ children, to }) => (
  <RRDLink to={to}>{children}</RRDLink>
)
