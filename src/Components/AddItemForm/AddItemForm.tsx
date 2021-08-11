import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type AddItemFormType = {
    addTextCallback: (title: string, id: string) => void
    id: string
}

export function AddItemForm (props: AddItemFormType) {

    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const onTitleChangeHandler = (sThg: ChangeEvent<HTMLInputElement>) => {
        setTitle(sThg.currentTarget.value)
        setError(false)
    }
    const onKeyPressHandler = (sThg: KeyboardEvent<HTMLInputElement>) => {
        if (sThg.key === 'Enter') addTask()
    }

    const addTask = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addTextCallback(trimmedTitle, props.id)
        } else {
            setError(true)
        }
        setTitle('')
    }

    const errorMessage = error ? <div className={'error-text'}>Title is required</div>:<div></div>


    return(
        <div>
            <input
                value={title}
                onChange={onTitleChangeHandler}
                onKeyPress={onKeyPressHandler}
                className={error ? 'error' : ''}
            />
            <button onClick={addTask}>+</button>
            {errorMessage}
        </div>
    )
}









