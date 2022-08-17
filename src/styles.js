import styled from "styled-components";
import { motion } from "framer-motion";

export const Body = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #5ed474;
  background: #726f6f;

  .search {
  }
  input {
    padding: 10px;
    margin: 30px 0;
    border-radius: 10px;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
  }
  button {
    display: flex;
    align-items: center;
    font-family: inherit;
    font-weight: 500;
    font-size: 16px;
    padding: 0.7em 1.4em 0.7em 1.1em;
    color: white;
    background: #ad5389;
    background: linear-gradient(
      0deg,
      rgba(20, 167, 62, 1) 0%,
      rgba(102, 247, 113, 1) 100%
    );
    border: none;
    box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
    letter-spacing: 0.05em;
    border-radius: 20em;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  button:hover {
    box-shadow: 0 0.5em 1.5em -0.5em #14a73e98;
  }

  button:active {
    box-shadow: 0 0.3em 1em -0.5em #14a73e98;
  }

  img {
    width: 40%;
  }
`;
