import React, { Component } from 'react'
import { Box } from 'grid-styled'

import Slide from './Slide'
import ArrowPrev from './ArrowPrev'
import ArrowNext from './ArrowNext'

import Slide1 from 'img/carousel-1.png'
import Slide2 from 'img/carousel-2.png'
import Slide3 from 'img/carousel-3.png'


export default class Carousel extends Component {
  constructor(){
    super();
    this.state ={
      slide: [{
        img: Slide1,
        name: 'Classic',
        price: '230р./300гр.'
      },
      {
        img: Slide2,
        name: 'Black',
        price: '250р./300гр.'
      },
      {
        img: Slide3,
        name: 'French',
        price: '120р./200гр.'
      }
    ],
      count1: 0,
      count2: 1,
      count3: 2,
      animation: 'left'
    }
  }

  nextSlide() {
    this.setState({animation: 'left'})
    this.clearTimer();
    this.state.count1 >= 2 ? this.setState({ count1: 0 }) : this.setState({ count1: this.state.count1 + 1 });
    this.state.count2 >= 2 ? this.setState({ count2: 0 }) : this.setState({ count2: this.state.count2 + 1 });
    this.state.count3 >= 2 ? this.setState({ count3: 0 }) : this.setState({ count3: this.state.count3 + 1 });
    this.setTimer();  
  }

  prevSlide() {
    this.setState({animation: 'right'})
    this.clearTimer();
    this.state.count1 <= 0 ? this.setState({ count1: 2 }) : this.setState({ count1: this.state.count1 - 1 });
    this.state.count2 <= 0 ? this.setState({ count2: 2 }) : this.setState({ count2: this.state.count2 - 1 });
    this.state.count3 <= 0 ? this.setState({ count3: 2 }) : this.setState({ count3: this.state.count3 - 1 });
    this.setTimer();
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

  componentDidMount() {
    this.setTimer();
  }

  render() {
    const slide1 = this.state.slide.map((item, index) => {
      return (
        <Slide
          key={index}
          index={index}
          slide={item.img} 
          name={item.name} 
          price={item.price}
          active={this.state.count1 === index ? 'active' : null}
          animation={this.state.animation}
        />
      )
    })

    const slide2 = this.state.slide.map((item, index) => {
      return (
        <Slide
          key={index}
          index={index}
          slide={item.img} 
          name={item.name} 
          price={item.price}
          active={this.state.count2 === index ? 'active' : null}
          animation={this.state.animation}
        />
      )
    })

    const slide3 = this.state.slide.map((item, index) => {
      return (
        <Slide
          key={index}
          index={index}
          slide={item.img} 
          name={item.name} 
          price={item.price}
          active={this.state.count3 === index ? 'active' : null}
          animation={this.state.animation}
        />
      )
    })
    return (
      <Box 
        w={1230}
        css={{display: 'flex', alignItems: 'center'}}
      >
        <Box onClick={this.prevSlide.bind(this)} >
          <ArrowPrev />
        </Box>
        <Box 
          width={1100} 
          css={{display: 'flex', justifyContent: 'space-around', height: '300px', overflow: 'hidden'}}
        >
          <Box 
            width={230} 
            css={{position: 'relative'}}
            onMouseEnter={this.clearTimer.bind(this)}
            onMouseLeave={this.setTimer.bind(this)}
          >
            {slide1}
          </Box>
          <Box 
            width={230} 
            css={{position: 'relative'}}
            onMouseEnter={this.clearTimer.bind(this)}
            onMouseLeave={this.setTimer.bind(this)}
          >
            {slide2}
          </Box>
          <Box 
            width={230} 
            css={{position: 'relative'}}
            onMouseEnter={this.clearTimer.bind(this)}
            onMouseLeave={this.setTimer.bind(this)}
          >
            {slide3}
          </Box>
        </Box>
        <Box onClick={this.nextSlide.bind(this)}>
          <ArrowNext />
        </Box>
      </Box>
    )
  }
}
