import React, { useState} from 'react'
import { Route, Switch } from 'react-router-dom'
import Cars from "./Cars/Cars"
import Car from "./Car/Car"
import Auth from "./Auth"
import LogIn from "./LogIn"

const App = () => {
    const [currentUser, setCurrentUser] = useState([])
    return (
        <Switch>
            <Route exact path="/" component={Cars}/>
            <Route exact path="/cars/:slug" component={Car}/>
            <Route exact path="/signup">
                <Auth setCurrentUser={setCurrentUser}/>
            </Route>
            <Route exact path="/log_in">
                <LogIn setCurrentUser={setCurrentUser}/>
            </Route>
        </Switch>
    )
}

export default App