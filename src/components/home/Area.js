import React, { Component } from "react"

class Area extends Component {

  render() {
    return (
      <>
        <section className="parkArea">
          <button onClick={() => this.props.getAreaAttractions(this.props.area.id)}>
            {this.props.area.name}
          </button>
        </section>
      </>
    )
  }
}

export default Area
