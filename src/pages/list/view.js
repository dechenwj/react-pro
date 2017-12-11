import { getListInfoAction } from './actionCreator';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import axios from 'axios';
import style from './style.mcss';
 

class List extends Component {

  componentWillReceiveProps(nextProps) {
		if (nextProps.params.id !== this.props.params.id) {
			this.getListInfo(nextProps.params.id);
		}
	}

  render() {
    const list = this.props.list.map((item, index) => {
      return (
        <li className="list-item" key={item.id}>
          <Link to={item.url}>
            {item.title} {item.article}
          </Link>
        </li>
      )
    })
    return (
      <div>
        <ul className={style['list-main']}>
          {list}
        </ul>
      </div>
    )
  }

  componentDidMount() {
    this.getListInfo();
  }

  getListInfo(id) {    
    id = id || this.props.params.id;
    axios.get("/api/list.json?id=" + id).then(this.props.getListInfo)
  }
}
  
const mapStateToProps = (state) => ({
  list: state.list.list
})

const mapDispatchToProps = (dispatch) => ({
  getListInfo: (response) => {
    console.log(response)
    const {list} = response.data.data;
    dispatch(getListInfoAction(list));
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(List); 