import React from 'react'
import { Route,Redirect } from 'react-router-dom'
import Login from './pages/Login/index'
import Layout from './pages/Layout/index'

export default function App() {
  return (
    <div className='app'>
    <Route path="/" exact render={()=><Redirect to="/home"/>} />
    <Route path="/home" component={Layout}/>
    <Route path="/login" component={Login}/>
    </div>
  )
}
