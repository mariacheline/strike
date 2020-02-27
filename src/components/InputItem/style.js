import styled from "styled-components";

export const StyledInputItem = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 2rem;

  input {
    flex: 1 0 80%;
    padding-bottom: 0.3rem;
    border: none;

    font-family: inherit;
    font-size: inherit;

    &:focus {
      outline: none;
    }
  }

  button {
    flex: 1 0 20%;
    padding: 0.5rem 0;
    border: none;

    background-color: #eee;
    color: #666;

    font-size: inherit;
    font-family: inherit;

    outline: none;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

    &:hover {
      background-color: #fff;
    }

    &:active {
      color: ${props => (props.disabled ? "#000" : "inherit")};
    }
  }
`;
