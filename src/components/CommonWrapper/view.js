import React, { Component } from 'react';
import { Link } from 'react-router';
import style from './style.mcss';
import axios from 'axios';

export default class CommonWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      standerList: [],
      slowListList: [],
      EnglishTeachingList: [],
      isPlaying:false
    }
    this.handleGetHeaderDataSucc = this.handleGetHeaderDataSucc.bind(this);
    this.handleMusicClick = this.handleMusicClick.bind(this);
  }
  

  render() {
    const list = this.state.list.map((item,index) => {
      return <li className={style['header-item']} key={item.id}><Link to={item.url}>{item.title}</Link></li>
    })
    const standerList = this.state.standerList.map((item,index) => {
      return <li className={style['header-nav-content']} key={item.id}><Link to={item.url}>{item.title}</Link></li>
    })
    const slowListList = this.state.slowListList.map((item,index) => {
      return <li className={style['header-nav-content']}  key={item.id}><Link to={item.url}>{item.title}</Link></li>
    })
    const EnglishTeachingList = this.state.EnglishTeachingList.map((item,index) => {
      return <li className={style['header-nav-content']}  key={item.id}><Link to={item.url}>{item.title}</Link></li>
    })
    return (
      <div>
        <div className={style['header']}>
            <div className={style['top-content']}>
            <div className={style['top-main']}>
                <span>网站手机版</span>
                <span>学英语请加微信号：easyvoa2014</span>
                <div className={style['top-search']}>
                  <input className={style['top-search-inp']} />
                  <button　className={style['top-search-btn']}>搜索</button>
                </div>
              </div>
            </div>
            <div className={style['logo']}>
              <Link to='/'>
                <img className={style['header-logo']} src={require('../../statics/images/logo.png')} alt="logo"/>
              </Link>
              <ul className={style['header-list']}>
                {list}
              </ul>
            </div>
            <div className={style['header-nav']}>
              <div className={style['header-nav-stander']}>
                <h3 className={style['header-nav-title']}>{this.state.standerTitle}</h3>
                <ul>
                  {standerList}
                </ul>
              </div>
              <div className={style['header-nav-slowList']}>
                <h3 className={style['header-nav-title']}>{this.state.slowListTitle}</h3>
                <ul>
                  {slowListList}
                </ul>
              </div>
              <div className={style['header-nav-EnglishTeaching']}>
                <h3 className={style['header-nav-title']}>{this.state.EnglishTeachingTitle}</h3>
                <ul>
                  {EnglishTeachingList}
                </ul>
              </div>
            </div>
          </div>
        <div>
          {this.props.children}
        </div>
        <div className={style['bottom']}>
          <p className={style['copy']}>本网站由 EasyVOA 开发上线 © 2011-2014</p>
          <h4 className={style['bottom-statement']}>网站所有内容，均来自VOA官方网站，所有资料均只作为英文学习资料使用。 站长QQ:1801785742 欢迎联系合作</h4>
          <audio ref="audio" controls style={{display: 'none'}}>
            <source src={require('../../statics/media/boat.mp3')} type="audio/mpeg" />
          </audio>
          <img alt="点击播放" onClick={this.handleMusicClick} className={style['bottom-music']} src={require('../../statics/images/music.png')}/>
      </div>
      </div> 
    );
  }

  handleMusicClick() {
    const audio = this.refs.audio;
    audio.volume = 0.4;
    let isPlaying = this.state.isPlaying;
    if(isPlaying) {
      audio.pause();
    }else {
      audio.play();
    }
    this.setState({isPlaying:!this.state.isPlaying})    
  }

  componentDidMount() {
    axios.get('/api/header.json')
        .then(this.handleGetHeaderDataSucc);
  }

  handleGetHeaderDataSucc(response) {
    const {list, stander, slowList, EnglishTeaching} = response.data.data;

      this.setState({
      list: list,
      standerList: stander.list,
      standerTitle: stander.title,
      slowListTitle: slowList.title,
      slowListList: slowList.list,
      EnglishTeachingTitle: EnglishTeaching.title,
      EnglishTeachingList: EnglishTeaching.list,
    })
    
  }
}
