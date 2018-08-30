import styled, { css } from 'styled-components'

const Dot = styled.span`
width: 17px;
height: 17px;
border-radius: 50%;
margin: 0 4px 0 4px;
cursor: pointer;
background-color: ${props => (props.active ? '#f13239' : 'black')};
transition: 0.1s;
&:hover {
  transform: scale(1.1);
}
`
export default Dot