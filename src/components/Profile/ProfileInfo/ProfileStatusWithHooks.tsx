import React, {ChangeEvent, useEffect, useState} from "react";
import {ProfileType} from "../../../redux/profile-reducer";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<PropsType> = (props) =>  {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true)
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    };

    // componentDidUpdate(prevProps: PropsType, prevState: PropsType, snapshot?: any) {
    //     if (prevProps.status !== status) {
    //     setStatus(status);
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }

    return (
        <>
            {!editMode &&
            <div>
                    <span className="fw-bold">Status: </span>
                    <span onDoubleClick={activateEditMode}>
                        {status || '----'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    onChange={onStatusChange}
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    value={status}/>
            </div>
            }

        </>

    )
}