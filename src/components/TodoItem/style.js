import styled from "styled-components";

export const StyledItem = styled.li`
  text-decoration: ${props =>
    props.isCompleted === true ? "line-through" : "none"};
`;
