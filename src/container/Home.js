import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import UserCard from '../components/UserCard'


export class Home extends Component {

    render() {
        let userComponents = this.props.allUsers.map(user => <UserCard user={user} />)
        return (
            <div>
                {this.props.allUsers.length > 0 ? (<div className="user">
                    <Switch>
                        <Route path="/home/:name" render={(routerProps) => {
                            console.log("router props", routerProps)
                            let name = routerProps.match.params.name
                            let user = this.props.allUsers.find(user => user.name.toLowerCase() === name.toLowerCase())
                            return <UserCard user={user} />
                        }} />
                    </Switch></div>) : (<h2>Loading</h2>)}
            </div>
        )
    }
}
// <div>
//     <samp>{userComponents}</samp>
// </div>



/* <Route path="/home" render={() => (
                  <div>
                      {userComponents}
                  </div>
              )} />
          </div>)  */

// {this.state.members.length > 0 ? (<div className="container">
// <Switch>

//     <Route path="/members/:name" render={(routerProps) => {
//         console.log("router props", routerProps)
//         let name = routerProps.match.params.name
//         let member = this.state.members.find(member => member.name.toLowerCase() === name.toLowerCase())
//         return <MemberCard memberInfo={member}
//             clickHandler={this.props.clickHandler} />
//     }
//     } />
//     <Route path="/members" render={() => (
//         <div>

//             <h1>Index Container</h1>
//             <SearchForm value={this.state.searchTerm} changeHandler={this.searchChangeHandler} />
//             <br />
//             <AddForm submitHandler={this.addToList} />
//             <ul>{memberComponents}</ul>
//         </div>
//     )} />
// </Switch>
// </div>) : (<h1>Loading</h1>)
// }

export default Home
