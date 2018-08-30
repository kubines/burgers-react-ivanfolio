import styled from 'styled-components'
import expand from 'img/expand.png'

const Img = styled.div`
width: 100%;
height: 100%;
position: relative;
background: ${props => `url(${props.img}) no-repeat center`};
background-size: cover;
&:hover {
cursor: pointer;
}
&:hover:before {
  bottom: 0;
}

&:before {
  content: "";
  display: block;
  position: absolute;
  width: 100%; 
  height: 28px;
  bottom: -28px;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url(${expand});
  background-repeat: no-repeat;
  background-position: calc(100% - 7px);
  transition: bottom 0.1s ease;
}
`

export default Img