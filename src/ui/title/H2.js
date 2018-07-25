import styled, {css} from 'styled-components'

const H2 = styled.h2`
color: #fff;
font-family: Orpheus;
font-size: 100px;
font-weight: 700;
line-height: 70px;

${props => props.red && css`
color: #f13239;
`}
${props => props.yellow && css`
color: #fbb510;
`}
${props => props.small && css`
font-size: 70px;
`}
${props => props.black && css`
color: #363636;
`}
${props => props.center && css`
text-align: center;
`}
`;

export default H2