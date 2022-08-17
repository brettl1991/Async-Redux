import styled from "styled-components";
import { motion } from "framer-motion";

export const Body = styled(motion.div)`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  width: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #5ed474;
  background: #292929;

  input {
    padding: 10px;
    margin: 30px 0;
    border-radius: 10px;
    background-color: #ffff;

    font-family: inherit;
    font-size: 1.5rem;
  }
  .search {
    display: flex;
    align-items: center;
  }

  button {
    margin-left: 24px;
    font-weight: 500;
    font-size: 16px;
    padding: 0.7em 1.4em 0.7em 1.1em;
    color: #ffffff;
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
    width: 100px;
    height: 56px;
  }

  button:hover {
    box-shadow: 0 0.5em 1.5em -0.5em #14a73e98;
  }

  button:active {
    box-shadow: 2px 2px 5px #e2ece597;
  }

  .weather-info {
    border: 5px solid #c9c9c9;
    margin: 30px;
    padding: 20px;
  }

  .condition {
    padding: 10px;
    margin: 10px;
    font-size: 1.5em;
    h3 {
      margin-bottom: 10px;
    }
    img {
      width: 40%;
    }
    h4 {
      font-size: 0.8rem;
      padding: 10px;
    }
  }
`;

export const Container = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
