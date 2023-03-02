import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: none;
  .button {
    border: 2px solid ${({ theme }) => theme.colors.orange};
    border-radius: 60px;
    color: ${({ theme }) => theme.colors.orange};
    text-decoration: none;
    padding: 10px 30px;
    transition: all 0.5s linear;
    font-family: var(--helvetica-bold);
    text-transform: uppercase;
    font-size: 15px;
  }

  .button:hover {
    transform: scale(0.95);
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default Button;
