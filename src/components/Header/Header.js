import React from 'react'
import styled from 'styled-components';

const AreaHeader = styled.div`
    border: 2px solid red;
    height: 60px;
    
    
    .container{
        padding:  5px 20px;
        display: flex;
        align-items: center;

    }
        .logo{
            border: 2px solid red;
            flex: 1;

        }

        nav{
            border: 2px solid red;
            ul{
                display: flex;
                
            }
                li{
                    list-style: none;    
                    margin-left: 20px;
                    
                   
                }

        }
`;





const Header = () => {
    return (
       <AreaHeader>
            <div className="container">
            <div className="logo">
            
            </div>
            <nav>
                <ul>
                    <li>Como funciona?</li>
                    <li>Seja um profissional</li>
                    <li>LOGIN</li>
                </ul>
            </nav>
            </div>
        

       </AreaHeader>
    );
}

export default Header;
