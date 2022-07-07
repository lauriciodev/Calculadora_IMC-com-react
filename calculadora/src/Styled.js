import styled from "styled-components";

const _section = styled.section`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 10px;
& > p{
    color:blueviolet;
    font-size:21px;
}
`

export const _input = styled.input`
outline: none;
height: 30px;
width: 50px;

`

export const _dflex = styled.div`
display: flex;
gap: 10px;
& > p{
    color:  blueviolet;
}
`

export default _section




