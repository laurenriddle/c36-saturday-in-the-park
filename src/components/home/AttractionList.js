import React, { Component } from "react"
import Attraction from "./Attraction"
import "./AreaList.css"

class AttractionList extends Component {

  render() {
    return (
      <>
        <article className="explorerList">
          {
            this.props.attractions.map(attraction =>
              <Attraction
                key={attraction.id}                
                attraction={attraction}
              />)
          }
        </article>
      </>
    )
  }
}

export default AttractionList
