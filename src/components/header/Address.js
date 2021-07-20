import React from 'react';


export default class Address extends React.Component {

    render() {
        return (
            <div className="address">
                <picture>
                    <source media="(max-width: 768px)" srcSet="/img/zapbranco.png" />
                    <source media="(min-width: 769px)" srcSet="/img/zap.png"/>
                    <img src="/img/zap.png" alt="whatsapp"/> <strong> (xx) x xxxx-xxxx</strong> <br/>
                </picture>
                
                Endereço <br/>
                <strong>R$ 700,00</strong>
            </div>
        );
    }
}