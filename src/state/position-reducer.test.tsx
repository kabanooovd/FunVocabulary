import {v1} from "uuid";
import {PositionsType} from "../App";
import {
    addPositionAC,
    changeDescriptionTextAC,
    changeDescriptorAC,
    positionReducer,
    removePositionAC
} from "./position-reducer";

test('position should be removed', () => {
    const initialState: PositionsType[] = [
        {id: v1(), term: 'HTML', description: 'hyper text metric language', showDescription: false},
        {id: v1(), term: 'JS', description: 'Java Script', showDescription: false},
        {id: v1(), term: 'React', description: 'Library for design web apps', showDescription: false},
        {id: v1(), term: 'Redux', description: 'Library for state control', showDescription: false},
        {id: v1(), term: 'uuid', description: 'Library which generating random strings', showDescription: false}
    ]
    const action = removePositionAC(initialState[0].id)
    const finaleState = positionReducer(initialState, action)

    expect(finaleState.length).toBe(initialState.length - 1)
})

test('Descriptor mode should be changed', () => {
    const initialState: PositionsType[] = [
        {id: v1(), term: 'HTML', description: 'hyper text metric language', showDescription: false},
        {id: v1(), term: 'JS', description: 'Java Script', showDescription: false},
        {id: v1(), term: 'React', description: 'Library for design web apps', showDescription: false},
        {id: v1(), term: 'Redux', description: 'Library for state control', showDescription: false},
        {id: v1(), term: 'uuid', description: 'Library which generating random strings', showDescription: false}
    ]
    const action = changeDescriptorAC(initialState[0].id, initialState[0].showDescription)
    const finalState = positionReducer(initialState, action)
    expect(finalState[0].showDescription).toBe(true)

})

test('Add new position', () => {
    const initialState: PositionsType[] = [
        {id: v1(), term: 'HTML', description: 'hyper text metric language', showDescription: false},
        {id: v1(), term: 'JS', description: 'Java Script', showDescription: false},
        {id: v1(), term: 'React', description: 'Library for design web apps', showDescription: false},
        {id: v1(), term: 'Redux', description: 'Library for state control', showDescription: false},
        {id: v1(), term: 'uuid', description: 'Library which generating random strings', showDescription: false}
    ]
    const action = addPositionAC('someText', v1())
    const finalState = positionReducer(initialState, action)
    expect(finalState.length).toBe(6)
})

test('description text have to be changed', () => {
    const initialState: PositionsType[] = [
        {id: v1(), term: 'HTML', description: 'hyper text metric language', showDescription: false},
        {id: v1(), term: 'JS', description: 'Java Script', showDescription: false},
        {id: v1(), term: 'React', description: 'Library for design web apps', showDescription: false},
        {id: v1(), term: 'Redux', description: 'Library for state control', showDescription: false},
        {id: v1(), term: 'uuid', description: 'Library which generating random strings', showDescription: false}
    ]
    const action = changeDescriptionTextAC(initialState[0].id, 'dimas')
    const finalState = positionReducer(initialState, action)

    expect(finalState[0].description).toBe('dimas')
})









