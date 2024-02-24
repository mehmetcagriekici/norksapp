import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  overflow: hidden;

  }

  :root{
    //main colors
    --color-nor-red: #BA0C2F;
    --color-nor-blue: #00205b; 
    --color-nor-white: #FFFFFF;
    --color-shadow: #000;

    //other colors
    --color-white-9 :rgba(255,255,255,0.9);
    --color-white-8 :rgba(255,255,255,0.8);
    --color-white-7 :rgba(255,255,255,0.7);
    --color-white-6 :rgba(255,255,255,0.6);
    --color-white-5 :rgba(255,255,255,0.5);
    --color-white-4 :rgba(255,255,255,0.4);
    --color-white-3 :rgba(255,255,255,0.3);
    --color-white-2 :rgba(255,255,255,0.2);
    --color-white-1 :rgba(255,255,255,0.1);

    --color-blue-9: rgba(32,64,128,0.9);
    --color-blue-8: rgba(32,64,128,0.8);
    --color-blue-7: rgba(32,64,128,0.7);
    --color-blue-6: rgba(32,64,128,0.6);
    --color-blue-5: rgba(32,64,128,0.5);
    --color-blue-4: rgba(32,64,128,0.4);
    --color-blue-3: rgba(32,64,128,0.3);
    --color-blue-2: rgba(32,64,128,0.2);
    --color-blue-1: rgba(32,64,128,0.1);

    --color-red-9 : rgba(128,34,32,0.9);
    --color-red-8 : rgba(128,34,32,0.8);
    --color-red-7 : rgba(128,34,32,0.7);
    --color-red-6 : rgba(128,34,32,0.6);
    --color-red-5 : rgba(128,34,32,0.5);
    --color-red-4 : rgba(128,34,32,0.4);
    --color-red-3 : rgba(128,34,32,0.3);
    --color-red-2 : rgba(128,34,32,0.2);
    --color-red-1 : rgba(128,34,32,0.1);

    //gradient animation colors
    --color-violet : #9400D3;
    --color-indigo : #4B0082;
    --color-blue : #0000FF;
    --color-green : #00FF00;
    --color-yellow : #FFFF00;
    --color-orange : #FF7F00;
    --color-red : #FF0000;
  }


html {
  //default 16px -> 16 * 62.5 / 100 = 10px
    font-size: 62.5%;
    
    overflow: auto;
}   

body {
    background-color: var(--color-nor-red);
    font-family: Arial, Helvetica, sans-serif;
}
`;

export default GlobalStyles;
