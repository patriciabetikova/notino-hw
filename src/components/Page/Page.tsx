import { FC, ReactNode } from "react";
import { Inner, SPage } from "./Page.styled";

type PageProps = {
  children: ReactNode;
};

export const Page: FC<PageProps> = ({ children }) => (
  <SPage>
    <Inner>{children}</Inner>
  </SPage>
);
