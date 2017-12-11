import React, { Component } from 'react';
import { Link } from 'react-router'
import axios from 'axios';
import style from './style.mcss';
import { connect } from 'react-redux';
import { getIndexAction } from './actionCreator';
import BarReact from './canvas/BarReact';
import { barOption } from './canvas/option';
import Clock from './canvas/Clock';

class Index extends Component {
  
  constructor(props){
    super(props) ;
    this.state = {
    }
  }

  render() {
    const list = this.props.list.map((item, index) => {
      return (
        <li className={style['index-item']} key={item.id}>
          <Link to={item.link}>
            [ {item.category} ] {item.title} ({item.time})
          </Link>
        </li>
      )
    })

    const blogroll = this.props.blogroll.map((item, index) => {
      return (
        <li className={style['index-blogroll-item']} key={item.id}>
          <Link to={item.link}> 
            {item.title}
          </Link>
        </li>
      )
    })

    return (
      <div>
        <div className={style['index-content']}>
          <h3 className={style['index-title']}>VOA（美国之音）慢速英语,常速英语,官网最新内容在线收听。</h3>
          <ul className={style['index-list']}>
            {list}
          </ul>
        </div>

        <div className={style['index-footer']}>
          <h3 className={style['index-footer-title']}>VOA友情链接</h3>
          <ul className={style['index-footer-list']}>
            {blogroll}
          </ul>
        </div>
        <BarReact option={barOption} />
        <Clock/>
      </div>
    );
  }

  componentDidMount() {
    if(!this.props.list.length) {
      this.getIndexInfo();
    }
  }

  getIndexInfo() {
    axios.get('/api/index.json').then(this.props.handleGetInfoSucc.bind(this));
  }
}

const mapStateToProps = (state) => ({
  list: state.index.list,
  blogroll: state.index.blogroll
})

const mapDispatchToProps = (dispatch) => ({
    handleGetInfoSucc: (response) => {
      const { list, blogroll } = response.data.data;
      dispatch(getIndexAction(list, blogroll));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Index);