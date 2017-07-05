import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './components/Profile.jsx'
import AddProfile from './components/AddProfile.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profiles: [
                {
                    name: 'User1', 
                    age: 30, 
                    hobbies: ['swimming', 'biking'],
                    bio: 'enjoys swimming & biking'
                },
                {
                    name: 'User2',
                    age: 35,
                    hobbies: ['gardening','sports'],
                    bio: 'enjoys gardening & sports'
                }
            ]
        }
        this.addUser = this.addUser.bind(this)
    }

    addUser(newProfile) {
        this.setState({
            profiles: this.state.profiles.concat([newProfile])
        })
    }

    render () {
        let profile0 = this.state.profiles[0]
        let profile1 = this.state.profiles[1]
        let profiles = this.state.profiles.map(profile => {
            return (
                <div>
                    <Profile 
                        name= {profile.name}
                        age= {profile.age}
                        bio= {profile.bio}
                        hobbies = {profile.hobbies} />
                </div>
            )
        })
        return (
          <div>
              {profiles}
             <AddProfile addUser={this.addUser} />
          </div>  
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))