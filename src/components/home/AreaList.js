import React, { Component } from "react"
import Area from "./Area"
import "./AreaList.css"

class AreaList extends Component {

  render() {
    return (
      <>
        <article className="explorerList">
          {
            this.props.areas.map(area =>
              <Area
                key={area.id}                
                area={area}
                getAreaAttractions={this.props.getAreaAttractions}
              />)
          }
        </article>
      </>
    )
  }
}

export default AreaList
