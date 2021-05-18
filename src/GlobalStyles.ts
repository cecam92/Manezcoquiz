import styled, { createGlobalStyle } from 'styled-components'
export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  width: 100vw;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
a{
  text-decoration:none;
  width:100%;
}
`
export const Title = styled.h2`
  font-size: 35px;
  width: 100%;
  padding: 15px;
`
export const MainContainer = styled.div`
  width: 100vw;
`
export const ListContainer = styled.div`
  width: 100%;
  height: 70%;
  max-height: 500px;
  align-items: center;
  padding: 10px 15px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 10px auto;
`
