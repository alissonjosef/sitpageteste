import React from 'react';


export default class Information extends React.Component {

    render() {
        return (
            <div className="information" >
                <ul>
                    <li>2 Quartos</li>
                    <li>1 Vaga de Garagem</li>
                    <li>1 Banheiro</li>
                    <li>1 Ampla sala</li>
                    <li>2 Quartos</li>
                    <li>1 Vaga de Garagem</li>
                    <li>1 Banheiro</li>
                    <li>1 Ampla sala</li>
                    <li>2 Quartos</li>
                    <li>1 Vaga de Garagem</li>
                    <li>1 Banheiro</li>
                    <li>1 Ampla sala</li>
                </ul>
                <br></br>
                <div className="informationText" id="information">
                    apartamento lorem ipsum apartamento lorem ipsum 
                    apartamento lorem ipsum apartamento lorem ipsum 
                </div>

                <div className="vantagens">
                    <div className="vantagensItem">
                        <div className="vantagensItemImg">
                                <img src="/img/icons/a.png" alt="Otima localizão" title="Espaço de Primeira"/>
                        </div>
                        <div className="vantagensItemTxt">
                            Ótimo apartamento com extrutura de primeira. <br/>
                            R$ 800,00
                        </div>
                    </div>

                    
                </div>
            </div>
        );
    }
}