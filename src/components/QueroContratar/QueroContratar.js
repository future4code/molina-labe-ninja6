import React from 'react';
import axios from 'axios';
import {Main, Titulo, ParentDiv, DivMain, Input, Descricao, FormDiv,Button} from './styles';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { BASE_URL, headers } from '../../constants/urls'

class QueroContratar extends React.Component {
    
   // Deve-se chamar o superconstrutor "SUPER" na classe derivada antes de acessar 'this' ou retornar do construtor derivado
    state = {

            title: "",
            description: "",
            price: "",
            dueDate: "",
            paymentMethods: []     
                
    }

  

    handleTitle = (e) => {
        this.setState({title: e.target.value})
    }

    handleDescription = (e) => {
        this.setState({description: e.target.value})
    }

    handlePrice = (e) => {
        this.setState({price: e.target.value})
    }

    handleDueDate = (e) => {
        this.setState({dueDate: e.target.value})
    }

    handlePaymentMethods = (e) => {
        let value = Array.from(e.target.selectedOptions, option => option.value)
        this.setState({ paymentMethods: value })
    }

    createJob = () => {
        const body = {
            title: this.state.title,
            description: this.state.description,
            price: Number(this.state.price),
            dueDate: this.state.dueDate,
            paymentMethods: this.state.paymentMethods,
        }

        axios.post(`${BASE_URL}/jobs`, body, headers)
        .then(() => {
            alert(`O serviço ${this.state.title} foi criado com sucesso!`)
            this.setState({
                title: "",
                description: "",
                price: "",
                dueDate: "",
                paymentMethods: []
            })
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    render() {
        return (
                <Main>
                     <Header />

                     <DivMain>
                     <Titulo>Anuncie aqui uma vaga e encontre um profissional freelancer!</Titulo>
                <h1>Cadastre o seu serviço</h1>
                <Input value={this.state.title} onChange={this.handleTitle} placeholder="Título" />
                
                <Descricao value={this.state.description} onChange={this.handleDescription} placeholder="Descrição" />
                
                <Input value={this.state.price} onChange={this.handlePrice} placeholder="Preço" name ="valor"type="number" />
                <select multiple value={this.state.paymentMethods} onChange={this.handlePaymentMethods}>
                    <option>Cartão de Débito</option>
                    <option>Cartão de Crédito</option>
                    <option>PayPal</option>
                    <option>Boleto</option>
                    <option>Pix</option>
                </select>
                <Input value={this.state.dueDate} onChange={this.handleDueDate} placeholder="Prazo do Serviço" type="date" />
                <Button onClick={this.createJob}>Cadastrar Serviço</Button>
                </DivMain>
                </Main>
        )
    }
}

export default QueroContratar;