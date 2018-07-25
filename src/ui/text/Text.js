import styled, { css } from 'styled-components'

const Text = styled.p`
color: black;
font-family: 'Open Sans';
font-size: 30px;
font-weight: 300;
line-height: 35px;

${props => props.large && css`
font-size: 40px;
line-height: 45px;
`}
${props => props.normal && css`
font-size: 30px;
line-height: 35px;
`}
${props => props.small && css`
font-family: 'Open Sans';
font-size: 20px;
font-weight: 600;
line-height: 23px;
`}
${props => props.xsmall && css`
font-size: 15px;
font-weight: 300;
line-height: 15px; 
`}
${props => props.white && css`
color: white;
`}
${props => props.yellow && css`
color: #fbb510;
`}
`;
export default Text