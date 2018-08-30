import React, { Component } from 'react'
import { Box, Flex } from 'grid-styled'

import Img from './Img'
import Modal from 'ui/modal/Modal'

import img1 from 'img/interior-1.png'
import img2 from 'img/interior-2.png'
import img3 from 'img/interior-3.png'
import img4 from 'img/interior-4.png'

export default class Gallery extends Component {
  constructor() {
    super();
    this.state={
      img: [img1, img2, img3, img4],
      show: false,
      modal: img1
    }
  }

  showHideImg() {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <Flex mt={75} >
        <Box 
          mr={30} 
          css={{width: '470px', height: '500px', overflow: 'hidden'}}
          onClick={this.showHideImg.bind(this)}
        >
          <Img img={img1} onClick={() => this.setState({modal: img1})} />
        </Box>
        <Box>
          <Box
            mb={30}
            css={{width: '670px', height: '235px', overflow: 'hidden'}}
            onClick={this.showHideImg.bind(this)}
            >
            <Img img={img2} onClick={() => this.setState({modal: img2})} />
          </Box>
          <Flex>
            <Box
              mr={30} 
              css={{width: '325px', height: '235px', overflow: 'hidden'}}
              onClick={this.showHideImg.bind(this)}
              >
              <Img img={img3} onClick={() => this.setState({modal: img3})} />
            </Box>
            <Box 
              css={{width: '325px', height: '235px', overflow: 'hidden'}}
              onClick={this.showHideImg.bind(this)}
              >
              <Img img={img4} onClick={() => this.setState({modal: img4})} />
            </Box>
          </Flex>
        </Box>
        <Modal img={this.state.modal} hide={this.showHideImg.bind(this)} show={this.state.show} />
      </Flex>
    )
  }
}
