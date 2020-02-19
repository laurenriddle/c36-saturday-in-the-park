import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { Card } from "react-bootstrap"
class Attraction extends Component {

    render() {
        return (
            <>
                <Card>
                    <Card.Title>
                        <Link to={
                            {
                                pathname: '/myitinerary/new',
                                state: {
                                    attraction: this.props.attraction
                                }
                            }
                        }>{this.props.attraction.name}</Link>
                    </Card.Title>
                </Card>
            </>
        )
    }
}

export default Attraction