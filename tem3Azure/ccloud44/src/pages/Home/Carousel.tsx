import React, { Component } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Carousel2 from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface Props {}
interface State {}
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const mob = 'mobile';
export default class Carousel extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <Carousel2
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition='all .5'
          transitionDuration={500}
          containerClass='carousel-container'
          removeArrowOnDeviceType={['tablet', 'mobile']}
          deviceType={mob}
          dotListClass='custom-dot-list-style'
          itemClass='carousel-item-padding-40-px'
        >
          {[0, 1, 2, 3].map(el => (
            <div>
              <figure className='av-testimonial-item'>
                <img
                  src='img/testimonial-img-02.jpg'
                  alt='Image2'
                  className='img-fluid mx-auto'
                />
                <blockquote>
                  Testimonial section comes with carousel items. You can use
                  Infinite Loop HTML CSS template for your websites.
                </blockquote>
                <figcaption>{el + 'name'}</figcaption>
              </figure>
            </div>
          ))}
        </Carousel2>
      </div>
    );
  }
}
