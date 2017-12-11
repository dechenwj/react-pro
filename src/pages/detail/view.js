import React, { Component } from 'react';
import axios from 'axios';
import style from './style.mcss';
import './style.css';
import Swiper from '../../../node_modules/swiper/dist/js/swiper.js';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: [],
      title: [],
      content: []
    }
    this.handlegGetDetailInfoSucc = this.handlegGetDetailInfoSucc.bind(this)
  }


  render() {
    return (
      <div className={style['detail-main']}>
        <div>
          <div className={style['detail-title']}>{this.state.title}</div>
          <div className={style['detail-content']} dangerouslySetInnerHTML={{__html:this.state.content}}></div>
        </div>

          <div className="swiper-container" ref={(elem) => {this.swiperContainer = elem}}>
            <div className="swiper-wrapper">
              <div className="swiper-slide" >Slide 1</div>
              <div className="swiper-slide">Slide 2</div>
              <div className="swiper-slide">Slide 3</div>
              <div className="swiper-slide">Slide 4</div>
              <div className="swiper-slide">Slide 5</div>
              <div className="swiper-slide">Slide 6</div>
            </div>
          </div>
      </div>
    )
  }

  componentDidMount() {
    this.getDetailInfo();
    new Swiper(this.swiperContainer, {
			autoplay: true
		});
  }

  getDetailInfo() {
    const id = this.props.params.id;
    axios.get("/api/detail.json?id=" + id).then(this.handlegGetDetailInfoSucc)    
  }

  handlegGetDetailInfoSucc(response) {
    const { detail } = response.data.data;
    this.setState({
      detail: detail,
      title: detail.title,
      content: detail.content
    }) 
    console.log(this.state.title)
  }
}