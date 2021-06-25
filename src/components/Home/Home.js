import React from 'react';
import { Button } from 'reactstrap';
import { Container, Section, Main, DivMain, 
ContainerItens, Item,SectionDetails, ContainerDetails, Buttonn ,Span, SpanIcons } from './styles';
import Header from '../Header/Header';
//import Footer from '../Footer/Footer';




class Home extends React.Component {

   
    render() {
        return (
            <Container>


              <Main>
                    <Header onChangeQueroTrabalhar={this.props.onChangeQueroTrabalhar}/>
                  <DivMain>
                         <h1>Conectando quem precisa com quem sabe fazer</h1>
                    <h2>Contrate freelancers especializados para qualquer trabalho, on-line.</h2>
                    <h3>Milhões de pequenos negócios utilizam o Freelancer para transformar suas ideias em realidade.</h3>
                     <Button color="danger" onClick={this.props.onChangeQueroContratar}>Quero Contratar</Button>
                    <Buttonn onClick={this.props.onChangeQueroTrabalhar}>Eu quero trabalhar</Buttonn>
                  </DivMain>
              </Main>
        
              <Section>
                  <h1>Realize trabalhos de mais de 1150 categorias diferentes</h1>
                    <p>FutureNinjas é a maior plataforma de contratação de serviços do Brasil. Conectamos Profissionais de todo o Brasil com pessoas solicitando serviço, atendendo com qualidade, facilidade e rapidez todos os tipos de necessidade.</p>
                   
                    <ContainerItens>
                        <Item>
                        <SpanIcons><i class="fab fa-sketch"></i></SpanIcons>
                            <p>Designer Gráfico</p>
                        </Item>
        
                        <Item>
                        <SpanIcons><i class="fab fa-php"></i></SpanIcons>
                            <p>Programador PHP Júnior</p>
                        </Item>
        
                        <Item>
                        <SpanIcons><i class="fab fa-react"></i></SpanIcons>
                       <p> Desenvolvedor React</p>
                        </Item>
        
                        <Item>
                        <SpanIcons><i class="fab fa-unity"></i></SpanIcons>
                        <p> Modelagem 3D</p>
                        </Item>
        
                        <Item>
                        <SpanIcons><i class="fab fa-linux"></i></SpanIcons>
                        <p> Linux</p>
                        </Item>
                    </ContainerItens>
              </Section>
        
              <SectionDetails>
                  <h1>Como Funciona?</h1>
                  <p>Anuncie o seu trabalho facilmente, contrate freelancers e pague com segurança.</p>
              
                <ContainerDetails>
                    <Span>
                        <p><img></img>IMAGEM</p>
                        <h4>Publique uma vaga</h4>
                        <h5>Publique a sua vaga para milhares de profissionais, você irá receber propostas de freelancers talentosos em poucos minutos.</h5>
                    </Span>
        
                    <Span>
                        <p>IMAGEM</p>
                        <h4>Contrate</h4>
                        <h5>Reveja o histórico de trabalho, feedback de clientes e portfólio para limitar os candidatos. Então faça uma entrevista pelo chat e escolha o melhor.</h5>
                    </Span>
        
                    <Span>
                        <p>IMAGEM</p>
                        <h4>Pague com segurança</h4>
                        <h5>Com o pagamento seguro do 99Freelas, o pagamento será repassado para o freelancer somente quando o projeto estiver concluído.</h5>
                    </Span>
                </ContainerDetails>
              </SectionDetails>
        
        
            </Container>
           
          );
    }
  
    
}



export default Home;