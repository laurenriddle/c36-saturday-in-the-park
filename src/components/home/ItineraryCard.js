import React, { Component } from "react"
import { Link } from 'react-router-dom'
class Area extends Component {

  render() {
    return (
      <>
        <section className="parkArea">
          {/* <h4>{this.props.item.attraction.area.name}</h4> */}
          {/* <h5>{this.props.item.attraction.area.theme} </h5> */}
          <span>
          <p>{this.props.item.starttime}: {this.props.item.attraction.name} <Link to='/myitinerary'>Edit</Link></p>
          </span>
        </section>
      </>
    )
  }
}

export default Area