
import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './style.css'
import axios from '../../axios'

export default function TinderCards() {

    const swiped = (direction, nameToDelete) => {
        console.log(nameToDelete, direction)
    }
    const outOfFrame = (name) => {
        console.log(name)
    }
    const [people, setPeople] = useState([])

    const fetchData = async () => {
        const req = await axios.get("/tinder/cards")
        setPeople(req.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => {
                    return (<TinderCard
                        className="swipe"
                        key={person._id}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}>
                        <div
                            style={{ backgroundImage: `url(${person.imgUrl})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>

                        </div>
                    </TinderCard>)
                })}
            </div>

        </div>
    );
}
