import React from 'react';

// Destructure the incoming array prop
const List = ({people}) => {

    //   Generate List
    const peopleList = people.map((person) => {

        // Destructure each Object
        const {id, name, age, image} = person;

        // Return Single Item
        return (
            // Include the key
            <article className="person" key={id}>
            <img src={image} alt={name}/>
            <div>
                <h4>{name}</h4>
                <p>{age}</p>
            </div>
        </article>)
    })


    return (
        <div>
        {/*  Render List */}
        {peopleList}
        </div>
    );
};

export default List;
