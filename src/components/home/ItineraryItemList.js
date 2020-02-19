import React, { Component } from "react"
import AreaList from "./AreaList"
import { isAuthenticated } from "../helpers/simpleAuth"
import ItineraryCard from "./ItineraryCard"

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
        .then(response => console.log(this.setState({ items: response })))
    }
  }

  render() {
    return (
      <>
        <main className="explorer">
      
          {
          this.state.items.map(item =>

          <ItineraryCard item={item} />
          )
          }
        </main>
      </>
    )
  }
}

export default ItineraryItemList
