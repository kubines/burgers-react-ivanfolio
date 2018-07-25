import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const Nav = styled.nav`
max-width: 801px;
width: 100%;
display: flex;
justify-content: space-between;
font-size: 30px;
`;
const Link = styled.a`
color: white;
font-family: 'Open Sans';
font-weight: 600;
text-decoration: none;
border-bottom: 2px solid transparent;
transition: 0.1s;
&:hover {
  border-bottom: 2px solid white;
}
${props => props.small && css`
font-size: 20px;
font-weight: 300;
;`}
;`

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: [
        'О нас', 'Меню', 'Акции', 'Интерьер', ' Контакты'
      ],
      size: this.props.small
    }
  }

  render() {
    const listLink = this.state.link.map((item, index) => {
      if (this.state.size) {
        return (
          <Link href='#' key={index} small>{item}</Link>
        )
      }
      else {
        return (
          <Link href='#' key={index}>{item}</Link>
        )
      }
    })

  return(
    <Nav>
      { listLink }
    </Nav >
    )
  }
}