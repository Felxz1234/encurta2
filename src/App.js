import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import './app.css'
import Body2 from './components/Body2'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import urlReducer from './reducer/urlReducer'

function App(){

  const store = createStore(urlReducer)

  return(
    <div classNaame='app'>
      <Provider store={store}>
        <Header/> 
        <Body/> 
        <Body2/>
        <Footer/> 
      </Provider>
    </div>
  )
}

export default App

