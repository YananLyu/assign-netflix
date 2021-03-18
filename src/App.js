import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col">
          <div>
            <h3>My List</h3>
            <ul>
              {this.props.myList.map((item) => {
                console.log(this.props.myList);
                console.log(this.props.recommendations);
                return <li key={item.id}>
                  <img src={item.img} alt="" />
                  <br></br>
                  <button onClick={() => this.props.removeMyList(item)}>Remove</button>
                  <br />
                  {item.title}
                </li>
              }
              )}
            </ul>
          </div>
        </div>
        <div className="col">
          <hr></hr>
          <h3>Recommendation</h3>

          <ul>
            {this.props.recommendations.map((item) =>
              <li key={item.id}>
                <img src={item.img} alt="" />
                <br></br>
                <button onClick={() => this.props.addMyList(item)}>Add</button>
                <br />
                {item.title}
              </li>
            )}
          </ul>

        </div>
      </div>
    )
  }
}
const mapStoreToProps = (store) => {
  return {
    myList: store.rMyList.mylist,
    recommendations: store.rRecommendation.recommendations
  }
};

const mapDisplayToProps = (dispatch) => {
  return {
    addMyList: (item) => dispatch({ type: 'add_list', item: item }),
    removeMyList: (item) => dispatch({ type: 'remove_list', item: item })
  }
}

export default connect(mapStoreToProps, mapDisplayToProps)(App);
