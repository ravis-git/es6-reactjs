import React from 'react'
import AddProfile from './AddProfile.jsx'

export default class Profile extends React.Component {
    render() {
        let hobbies = this.props.hobbies.map((hobby, index) => {
            return <li key={index}>{hobby}</li>
        })
        return (
            <div>
                <h3>{this.props.name} : {this.props.age}</h3>
                <p>{this.props.bio}</p>
                <h4>Hobbies</h4>
                <ul>
                    {hobbies}
                    {/*<button onClick={this.addUser}>Add New user</button>*/}
                </ul>
            </div>                
        )        
    }
}