import React from 'react';


export default class Logo extends React.Component {

    render() {
        return (
            <div className="logo">
                <picture>
                    <source media="(max-width: 768px)" srcSet="/img/icon.png" />
                    <source media="(min-width: 769px)" srcSet="/img/logo.png"/>
                    <img src="/img/logo.png" alt="Logomarcar"/>
                </picture>
            </div>
        );
    }
}