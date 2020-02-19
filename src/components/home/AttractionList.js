import React, { Component } from "react"
import Attraction from "./Attraction"
import "./AreaList.css"

class AttractionList extends Component {

  render() {
    return (
      <>
        <article className="explorerList">
            <h4>The selected area has the following attractions:</h4>
          {
          this.props.attractions.map(attraction =>
              <Attraction
                key={attraction.id}                
                attraction={attraction}
                {...this.props}
              />)
          }
        </article>
      </>
    )
  }
}

export default AttractionList
