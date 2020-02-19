import React, { Component } from "react"
import { login } from "../helpers/simpleAuth";
import { isAuthenticated } from "../helpers/simpleAuth"


class SaveForm extends Component {

  state = {
    starttime: null
  }

  handleInputChange = (evt) => {
    let stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }



  SaveAttraction = () => {
    if (isAuthenticated()) {
      fetch(`http://localhost:8000/itineraryitems`, {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Token ${sessionStorage.getItem("kennywood_token")}`
        },
        "body": JSON.stringify({
          "attraction_id": this.props.location.state.attraction.id,
          "starttime": Number(this.state.starttime)
        })
      })

        .then(response => response.json())
        .then(() => {
          this.props.history.push("/myitinerary")
        })

    }
  }


  render() {
    return (
      <main style={{ textAlign: "center" }}>
        <fieldset className="form--login">
          <label htmlFor="inputStarttime"> When do you want to ride {this.props.location.state.attraction.area.name}? </label>
          <input onChange={this.handleInputChange}
            type="starttime"
            id="starttime"
            className="form-control"
            placeholder="Start Time"
            required autoFocus />
        </fieldset>

        <button onClick={this.SaveAttraction}>
          Add to Itinerary
          </button>

      </main>

    )
  }
}

export default SaveForm
