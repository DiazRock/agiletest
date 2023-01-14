import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: #DCDFE0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  button {
    cursor: pointer;
  }
`
