import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
    value: string
    EditSpanCallback: (newValue: string) => void
}

export function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.EditSpanCallback(title);
    }
    const changeTitle = (e:  React.ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ? <textarea value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode}/>
        : <span onDoubleClick={activateEditMode}>{props.value}</span>
}
