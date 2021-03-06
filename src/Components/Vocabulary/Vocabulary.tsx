import React from "react";
import style from './Vocabulary.module.css'
import {PositionsType} from "../../App";
import {AddItemForm} from "../AddItemForm/AddItemForm";
import {v1} from "uuid";
import {EditableSpan} from "../EditableSpan/EditableSpan";

export type VocabularyPropsType = {
    position: PositionsType[]
    RemovePositionCallback: (positionID: string) => void
    DescriptorONCallback: (positionID: string, descriptionToShow: boolean) => void
    DescriptorOffCallback: (positionID: string, descriptionToShow: boolean) => void
    addNewPosition: (title: string, id: string) => void
    toEditSpanCallback: (title: string, id: string) => void
}

export function Vocabulary(props: VocabularyPropsType) {

    const sortedPosition: PositionsType[] = props.position.sort((a, b) => a.term.toLowerCase() >= b.term.toLowerCase() ? 1 : -1 )

    const mappedOptions = sortedPosition.map(position => {

        const removePositionHandler = () => {
            props.RemovePositionCallback(position.id)
        }
        const ShowDescriptionHandler = () => {
            props.DescriptorONCallback(position.id, position.showDescription)
        }
        const CloseDescriptionHandler = () => {
            props.DescriptorOffCallback(position.id, position.showDescription)
        }
        const EditSpanCallback = (newValue: string) => {
            props.toEditSpanCallback(newValue, position.id)
        }

        return (
            <div key={position.id} className={style.positionsList}>
                <span className={style.rmButtonContainer}>
                    <button onClick={removePositionHandler} className={style.rmButton}>&#10008;</button>
                </span>
                <span onPointerEnter={ShowDescriptionHandler} onPointerLeave ={CloseDescriptionHandler}>{position.term}</span>

                {position.showDescription
                    ?   <span className={style.descriptionStyle}>
                            <div className={style.triAngle}/>
                            <span className={style.description}>
                                <EditableSpan value={position.description}
                                              EditSpanCallback={EditSpanCallback}
                                />
                            </span>
                        </span>
                    :   <span/>}
            </div>
        )

    })

    return (
        <div>
            <div>
                <h3>{'My Vocabulary'}</h3>
            </div>
            <div className={style.InputContainer}>
                <AddItemForm addTextCallback={ props.addNewPosition } id={v1()}/>
            </div>
            <div>
                {mappedOptions}
            </div>
        </div>
    )
}






