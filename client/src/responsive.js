import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};

//import in component and use below code in css
//  ${mobile({ padding: "0px", flexDirection:"column" })}  //example
