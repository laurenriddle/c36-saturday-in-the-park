import React, { Component } from "react"
import { login } from "../helpers/simpleAuth";
import { isAuthenticated } from "../helpers/simpleAuth"


class EditForm extends Component {

  state = {
    starttime: null,
    attraction_name: null
  }

  handleInputChange = (evt) => {
    let stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  componentDidMount = () => {
    if (isAuthenticated()) {
      fetch(`http://localhost:8000/itineraryitems/${this.props.match.params.itemId}`, {
        "headers": {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Token ${sessionStorage.getItem("kennywood_token")}`
        }
      })
        .then(response => response.json())
        .then((response) => {
          console.log(response)
          this.setState({
            starttime: response.starttime,
            attraction_name: response.attraction.name
          })
          console.log(this.state)
        })
        
    }
  }




  updateItineraryItem = () => {
    fetch(`http://localhost:8000/itineraryitems/${this.props.match.params.itemId}`, {
      "method": "PUT",
      "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Token ${sessionStorage.getItem("kennywood_token")}`
      },
      "body": JSON.stringify({
        "attraction_id": this.props.match.params.itemId,
        "starttime": this.state.starttime
      })
    })
    .then(() => {
        this.props.history.push("/myitinerary")
    })
  }


  render() {
    return (
      <main style={{ textAlign: "center" }} >
        <fieldset className="form--login">
          <label htmlFor="inputStarttime"> When do you want to ride ? </label>
          <input onChange={this.handleInputChange}
            type="starttime"
            id="starttime"
            className="form-control"
            placeholder="Start Time"
            value={this.state.starttime}
            required autoFocus />
        </fieldset>

        <button onClick={this.updateItineraryItem}>
          Save
          </button>

      </main >

    )
  }
}

export default EditForm
