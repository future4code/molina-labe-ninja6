import React, { Component } from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export class AppContainer extends Component {
  render() {
    return (
      <div>
        <p>Pronto para começar!</p>
        <Header/>
        <Footer/>

      </div>
    )
  }
}
