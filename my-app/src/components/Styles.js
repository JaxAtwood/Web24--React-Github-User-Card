import styled from "styled-components";

const Logo = styled.img `
    width: 75px;
    border: black 1px solid;
    border-radius: 10px;
    background: teal;
`

const Header = styled.div `
    border: black solid 2px;
    border-radius: 20px;
    width: 40%;
    margin: 0 auto;
    margin-bottom: 30px;
    line-height: 10px;
`

const Grid = styled.div `
    border: solid teal 2px;
    background: turquoise;
    border-radius: 20px;
    width: 60%;
    margin: 0 auto;
`

const Box = styled.div `
    border: black 2px solid;
    background: magenta;
    font-size: 40px;
    font-weight: bold;
    width: 50%;
    padding-top: 90px;
    height: 230px;
    border-radius: 20px;
    margin: 0 auto;
    line-height: 2px;
`

export { Box, Grid, Header, Logo };