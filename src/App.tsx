import React, {useState} from 'react';
import './App.css';
import {Vocabulary} from "./Components/Vocabulary/Vocabulary";
import {v1} from 'uuid'
import {
    addPositionAC,
    changeDescriptionTextAC,
    changeDescriptorAC,
    positionReducer,
    removePositionAC
} from "./state/position-reducer";

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
        setPosition(positionReducer(position, removePositionAC(positionID)))
    }
    const DescriptorCallback = (positionID: string, descriptionToShow: boolean) => {
        setPosition(positionReducer(position, changeDescriptorAC(positionID, descriptionToShow)))
    }
    const addNewPosition = (title: string, id: string) => {
        setPosition(positionReducer(position, addPositionAC(title, id)))
    }
    const toEditSpanCallback = (title: string, id: string) => {
        setPosition(positionReducer(position, changeDescriptionTextAC(id, title)))
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
