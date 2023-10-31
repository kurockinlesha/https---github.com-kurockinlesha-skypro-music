import  { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "StratosSkyeng";
  src:
    local("StratosSkyeng"),
    local("StratosSkyeng"),
    url("/fonts/StratosSkyeng.woff2") format("woff2"),
    url("/fonts/StratosSkyeng.woff") format("woff");
  font-weight: 400;
  font-style: normal;
} 
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
 
  a,
  a:visited {
    text-decoration: none;
    font-family: "StratosSkyeng", sans-serif;
    cursor: pointer;
  }
  
  button {
    cursor: pointer;
  }
  
  ul li {
    list-style: none;
  }
 
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "StratosSkyeng", sans-serif;
    color: #ffffff;
  }
`;