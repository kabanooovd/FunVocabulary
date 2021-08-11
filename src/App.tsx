import React, {useState} from 'react';
import './App.css';
import {Vocabulary} from "./Components/Vocabulary/Vocabulary";
import {v1} from 'uuid'

export type PositionsType = {
    id: string
    term: string
    description: string
    showDescription: boolean
}

function App() {

    const [position, setPosition] = useState<PositionsType[]>([
        {id: v1(), term: 'HTML', description: 'hyper text metric language', showDescription: false},
        {id: v1(), term: 'JS', description: 'Java Script', showDescription: false},
        {id: v1(), term: 'React', description: 'Library for design web apps', showDescription: false},
        {id: v1(), term: 'Redux', description: 'Library for state control', showDescription: false},
        {id: v1(), term: 'uuid', description: 'Library which generating random strings', showDescription: false}
    ])

    const RemovePositionCallback = (positionID: string) => {
        setPosition([...position.filter(p => p.id !== positionID)])
    }

    const DescriptorCallback =(positionID: string, descriptionToShow: boolean) => {
        setPosition([...position.map(el=>el.id === positionID ? {...el, showDescription: !descriptionToShow} : el)])
    }

    const addNewPosition = (title: string, id: string) => {
        setPosition([...position, {id: id, term: title, description: 'empty', showDescription: false},])
    }

    const toEditSpanCallback = (title: string, id: string) => {
        setPosition([...position.map(el => el.id === id ? {...el, description: title} : el)])
    }


    return (
        <div className="App">
            <Vocabulary position={position}
                        RemovePositionCallback={RemovePositionCallback}
                        DescriptorCallback={DescriptorCallback}
                        addNewPosition={addNewPosition}
                        toEditSpanCallback={toEditSpanCallback}

            />
        </div>
    );
}

export default App;
