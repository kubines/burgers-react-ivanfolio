import React, { Component } from 'react'
import { Flex, Box } from 'grid-styled'

import Slide from './Slide'
import ArrowPrev from './ArrowPrev'
import ArrowNext from './ArrowNext'
import Dot from './Dot'

import Slide1 from 'img/slide-1.png'
import Slide2 from 'img/slide-2.png'
import Slide3 from 'img/slide-3.png'

export default class Slider extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      slide: [ Slide1, Slide2, Slide3 ],
      animation: 'left'
    }
  }

  setTimer() {
    this.timerID = setInterval(
      () => this.nextSlide(), 
       3000 
      ); 
  }

  clearTimer() {
    clearTimeout(this.timerID);
  }

  nextSlide() {
    this.setState({animation: 'left'})
    this.clearTimer();
    this.state.count >= 2 ? this.setState({ count: 0 }) : this.setState({ count: this.state.count + 1 })
    this.setTimer();
  }

  prevSlide() {
    this.setState({animation: 'right'})
    this.clearTimer();
    this.state.count <= 0 ? this.setState({ count: 2 }) : this.setState({ count: this.state.count - 1 });
    this.setTimer();
  }

  goToSlide(index) {
    this.clearTimer();
    
    if(index > this.state.count) {
      this.setState({animation: 'right'})
    }
    else this.setState({animation: 'left'});

    this.setState({ count: index});
    this.setTimer();
  }

  componentDidMount() {
    this.setTimer();
  }
   
  render() {
    const dotsList = this.state.slide.map((item, index) => {
      return <Dot 
        key={index} 
        index={index}
        active={this.state.count === index ? 'active' : null} 
        onClick={e => this.goToSlide(index)} 
        />
    })

    const slideList = this.state.slide.map((item, index) => {
      return <Slide 
        slide={item} 
        key={index}
        index={index}
        active={this.state.count === index ? 'active' : null}
        animation={this.state.animation}
        />
    })

    return (
      <Box>
        <Flex justifyContent={'center'} alignItems={'center'}>
          <Box onClick={this.prevSlide.bind(this)}>
            <ArrowPrev />
          </Box>
          <Box mr={40} />
          <Box css={{ width: '1090px', height: '470px', position: 'relative', overflow: 'hidden' }}>
            {slideList}
          </Box>
          <Box ml={40} />
          <Box onClick={this.nextSlide.bind(this)}>
            <ArrowNext />
          </Box>
        </Flex>
        <Box mt={55} />
        <Flex justifyContent={'center'} alignItems={'center'}>
          {dotsList}
        </Flex>
      </Box>
    )
  }
}
