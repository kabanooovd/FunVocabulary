import {PositionsType} from "../App";
import {v1} from "uuid";


type MainActionType = removePositionACType
    | changeDescriptorACType
    | addPositionACType
    | changeDescriptionTextACType

export const positionReducer = (state: PositionsType[], action: MainActionType): PositionsType[] => {
    switch (action.type) {
        case "REMOVE-POSITION": {
            return [...state.filter(el => el.id !== action.positionID)]
        }
        case 'CHANGE-DESCRIPTION-MODE': {
            return [...state.map(el => el.id === action.positionID ? {...el, showDescription: !action.descriptionMode} : el)]
        }
        case 'ADD-POSITION': {
            const newPosition = {id: action.newID, term: action.term, description: 'empty', showDescription: false}
            return [...state, newPosition]
        }
        case 'CHANGE-DESCRIPTION-TEXT': {
            return [...state.map(el => el.id === action.positionID ? {...el, description: action.text} : el)]
        }

        default: return state
    }
}

type changeDescriptionTextACType = ReturnType<typeof changeDescriptionTextAC>
export const changeDescriptionTextAC = (positionID: string, text: string) => {
    return {type: 'CHANGE-DESCRIPTION-TEXT', positionID, text} as const
}





type addPositionACType = ReturnType<typeof addPositionAC>
export const addPositionAC = (term: string, newID: string) => {
    return {type: 'ADD-POSITION', term, newID} as const
}

type changeDescriptorACType = ReturnType<typeof changeDescriptorAC>
export const changeDescriptorAC = (positionID: string, descriptionMode: boolean) => {
    return {type: 'CHANGE-DESCRIPTION-MODE', positionID, descriptionMode} as const
}

type removePositionACType = ReturnType<typeof removePositionAC>
export const removePositionAC = (positionID: string) => {
    return {type: 'REMOVE-POSITION', positionID} as const
}







