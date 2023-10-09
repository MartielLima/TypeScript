import { createGlobalStyle } from "styled-components";
import * as color from "../config/color";

export default createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        background-color: ${ color.darker };
        color: ${ color.light };
    }

    
`