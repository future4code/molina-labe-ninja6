import React, { Component} from 'react'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import CardVaga from './CardVaga/CardVaga';
import Home from './Home/Home'

export class AppContainer extends Component {
  render() {
    return (
      <div>
        <p>Pronto para começar!</p>
        <Header/>
        <Home/>
    
        <Footer/>
      
    

      </div>
    )
  }
}
