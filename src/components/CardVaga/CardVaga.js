import React, { Component } from 'react'
import { ContainerCardVaga, ContainerItem, City, Techs, Tech, H1 } from './styles';
import axios from 'axios';


export default class CardVaga extends Component {

    state = {
        listaDeVagas: []          
         
        }

        componentDidMount() {
            axios.get(`https://labeninjas.herokuapp.com/jobs/${this.props.jobId}`, {
            headers: {
                Authorization: "4745d3c0-0322-4115-a687-0feabac3c6e8"
         }
          })        
        .then((response) => {
            
            this.setState({listaDeVagas: response.data.jobs})
            console.log(response)
        }).catch((error) => {
            console.log(error)
            
        })  
    }

    render() {
        
        const vagasFiltradas = this.state.listaDeVagas.filter(vaga => {
            //return vaga.value >= this.props.valorMin && vaga.value <= this.props.valorMax
        })
        
        return (
            <ContainerCardVaga>                            
                    {vagasFiltradas.map(vaga => {
                        return (
                            <ContainerItem>
                            <H1>{vaga.title}</H1>
                            
    
                            <strong>R$ {vaga.price}</strong>
                            <p>{vaga.description}</p>
                        
                        
                            {/* Criar componente formulário */}
                            <button>Ver Detalhes</button>
                            <br />
                            <span>Há aproximadamente 12 horas atrás.</span>
                            {vagasFiltradas}            
                        </ContainerItem>
                        )
                    })}                
            </ContainerCardVaga>
        )
    }
}
