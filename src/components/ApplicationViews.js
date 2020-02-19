import { Route } from "react-router-dom"
import React, {Component } from "react"
import { withRouter } from "react-router-dom"
import ParkExplorer from "./home/ParkExplorer"
import Register from "./auth/Register"
import Login from "./auth/Login"
import ItineraryItemList from "./home/ItineraryItemList"
import SaveForm from "./home/SaveForm"

class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route
          exact path="/" render={props => {
            console.log("props", props)
            return <ParkExplorer {...props} />
          }}
        />
        <Route
          path="/register" render={props => {
            return <Register {...props} />
          }}
        />
        <Route
          path="/login" render={props => {
            return <Login {...props} />
          }}
        />
         <Route
          exact path="/myitinerary" render={props => {
            return <ItineraryItemList {...props} />
          }}
        />
         <Route
          exact path="/myitinerary/new" render={props => {
            return <SaveForm {...props} />
          }}
        />
      </React.Fragment>
    )
  }
}

export default withRouter(ApplicationViews)
