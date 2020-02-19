import React, { Component } from "react"
import AreaList from "./AreaList"
import { isAuthenticated } from "../helpers/simpleAuth"
import IteneraryList from "./ItineraryList"

class ItineraryItemList extends Component {

  state = {
    items: []
  }

  componentDidMount() {
    this.getItineraries()
  }

  getItineraries = () => {
    // get all Itineraries 
    // set state with new data for Itineraries 
    if (isAuthenticated()) {
      fetch("http://localhost:8000/itineraryitems", {
        "headers": {
          "Accept": "application/json",
          "Authorization": `Token ${sessionStorage.getItem("kennywood_token")}`
        }
      })
        .then(response => response.json())
        .then(response => this.setState({ items: response }))
    }
  }

  render() {
    return (
      <>
        <main className="explorer">
        <IteneraryList items={this.state.items}/>

        </main>
      </>
    )
  }
}

export default ItineraryItemList
