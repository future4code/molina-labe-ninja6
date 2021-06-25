import React, { Component } from 'react'
import { ContainerCardVaga, ContainerItem, City, Techs, Tech, H1 } from './styles';
import axios from 'axios';


const url =
  "https://labeninjas.herokuapp.com/jobs";
const headers = {
  headers: {
    Authorization: "4745d3c0-0322-4115-a687-0feabac3c6e8"
  }
};

export default class CardVaga extends Component {

    state = {
        listaDeVagas: []          
         
        }
    

        componentDidMount() {
            this.pegarVagas();
          }
        
        pegarVagas = () => {
        axios
        .get(url,headers)         
        .then((response) => {
            alert("bateu no endpoint");
            this.setState({listaDeVagas: response.data.jobs})
            console.log(response)
        }).catch((error) => {
            console.log(error)
            window.alert("Erro");
        })  
    }

    render() {
        
        const vagasFiltradas = this.state.listaDeVagas.filter(vaga => {
            return vaga.value >= this.props.valorMin && vaga.value <= this.props.valorMax
        })
        
        return (
            <ContainerCardVaga>                            
                    {vagasFiltradas.map(vaga => {
                        return (
                            <ContainerItem>
                            <H1>{vaga.title}</H1>
                            <City>{vaga.cidade}</City>
    
                            <strong>R$ {vaga.value}</strong>
                            <p>{vaga.description}</p>
                            <Techs>
                                <Tech>{vaga.tecnologia}</Tech>
                            </Techs>
                        
                            {/* Criar componente formulário */}
                            <button>Ver Detalhes</button>
                            <br />
                            <span>Há aproximadamente 12 horas atrás.</span>
                            
                        </ContainerItem>
                        )
                    })}                
            </ContainerCardVaga>
        )
    }
}
