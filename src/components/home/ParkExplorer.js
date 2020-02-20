import React, { Component } from "react"
import AreaList from "./AreaList"
import { isAuthenticated } from "../helpers/simpleAuth"
import AttractionList from "./AttractionList"
import { withRouter } from 'react-router-dom';

class ParkExplorer extends Component {

  state = {
    areas: [],
    attractions: []
  }

  componentDidMount() {
    this.getParkAreas()
  }

  getParkAreas = () => {
    // get all park areas
    // set state with new data for park areas
    if (isAuthenticated()) {
      fetch("http://localhost:8000/parkareas", {
        "headers": {
          "Accept": "application/json",
          "Authorization": `Token ${sessionStorage.getItem("kennywood_token")}`
        }
      })
        .then(response => response.json())
        .then(response => console.log(this.setState({ areas: response })))
    }
  }

  getAreaAttractions = (area_id) => {
    // get all park areas
    // set state with new data for park areas
    if (isAuthenticated()) {
      fetch(`http://localhost:8000/attractions?area=${area_id}`, {
        "headers": {
          "Accept": "application/json",
          "Authorization": `Token ${sessionStorage.getItem("kennywood_token")}`
        }
      })
        .then(response => response.json())
        .then((response) => {this.setState({ attractions: response })})
        
    }
  }

  render() {
    return (
      <>
        <main className="explorer">
          <AreaList areas={this.state.areas} getAreaAttractions={this.getAreaAttractions} {...this.props}/>
          <AttractionList attractions={this.state.attractions} {...this.props}/>
        </main>
      </>
    )
  }
}

export default withRouter(ParkExplorer)
