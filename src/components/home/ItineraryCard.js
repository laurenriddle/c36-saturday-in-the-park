import React, { Component } from "react"
class Area extends Component {

    render() {
      return (
        <>
          <section className="parkArea">
            <p>
              {this.props.item.startime}
            </p>
          </section>
        </>
      )
    }
  }
  
  export default Area