import { ReactNode } from "react";
import styled from "styled-components";

interface PageType {
  children: ReactNode;
}

const Page = (props: PageType) => {
  return <PageWrapper>{props.children}</PageWrapper>;
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background: white;
`;

export default Page;