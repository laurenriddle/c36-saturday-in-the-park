import React, { Component } from "react"
import Attraction from "./Attraction"
import "./AreaList.css"
import ItineraryCard from "./ItineraryCard"

class ItineraryList extends Component {

    render() {
        return (
            <>
                <article className="itineraryList">
                <h1>My Itinerary</h1>

                    {
                        this.props.items.map(item =>

                            <ItineraryCard key={item.id} item={item} />
                        )
                    }

                </article>
            </>
        )
    }
}

export default ItineraryList