import React from 'react'
import ReactDOM from 'react-dom'

class Profile extends React.Component {
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
                </ul>
            </div>                
        )        
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profiles: [
                {
                    name: 'Ashwini', 
                    age: 30, 
                    hobbies: ['swimming', 'biking'],
                    bio: 'enjoys swimming & biking'
                },
                {
                    name: 'Ravi',
                    age: 35,
                    hobbies: ['gardening','sports'],
                    bio: 'enjoys gardening & sports'
                }
            ]
        }
    }

    render () {
        let profile0 = this.state.profiles[0]
        let profile1 = this.state.profiles[1]
        let profiles = this.state.profiles.map(profile => {
            return <Profile 
                        name= {profile.name}
                        age= {profile.age}
                        bio= {profile.bio}
                        hobbies = {profile.hobbies} />
        })
        return (
          <div>
              {profiles}
          </div>  
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))