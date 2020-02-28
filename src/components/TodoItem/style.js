import styled from "styled-components";

export const StyledItem = styled.li`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 0.5rem 0;
  font-family: inherit;
  font-style: ${props => (props.isCompleted ? "italic" : "normal")};

  &:hover {
    button {
      opacity: 1;
    }
  }

  label {
    display: flex;
    align-items: center;
  }

  .note-text {
    display: inline-block;
    margin-left: 1rem;
    text-decoration: ${props => (props.isCompleted ? "line-through" : "none")};
  }

  button {
    width: 10px;
    height: 10px;
    margin-left: auto;
    margin-right: 2rem;
    background-color: transparent;
    border: none;
    outline: none;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    cursor: pointer;

    img {
      width: 100%;
    }
  }
`;
