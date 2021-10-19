import React from "react";
import {ProfileType} from "../../../redux/profile-reducer";

type PropsType = {
    status: string
}

export class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        title: 'yo'
    }
    
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }
    
    render() {
        
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
                    </div>
                }
               
            </div>
        
        )
    }
}