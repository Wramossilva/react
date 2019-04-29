import React from 'react';
import './Counter.css'

class Counter extends React.Component {

    // Initialisation de l'etat
    constructor() {
        super();
        this.state = {
            clickCount: 0
        };

        this.addClickCount = this.changeClickCount.bind(this, 1);
        this.substractClickCount = this.changeClickCount.bind(this, -1);
        // this.addClickCount = this.addClickCount.bind(this);
        // this.reduceClickCount = this.reduceClickCount.bind(this);
      


    }

    changeClickCount(amount) {
        let newClickCount = this.state.clickCount + amount;
        this.setState({ clickCount: newClickCount });
    }

    // addClickCount() {
    //     let newClickCount = this.state.clickCount + 1;
    //     this.setState({ clickCount: newClickCount });
    // }

    // reduceClickCount() {
    //     let newClickCount = this.state.clickCount - 1;
    //     this.setState({ clikCount: newClickCount });
    // }

    showDetails(text){
        console.log(text);
    }

    render() {
        let message;

        if (this.state.clickCount > 0) {
            message = <div className="posi">Positif</div>;
        } else if (this.state.clickCount ==0) {
            message = <div className="null">nul</div>
        } else {
            message = <div className="negative">Négatif</div>
        }

       

        let fruits = ["Pommes","Poires","Oranges"];
        let fruitList = fruits.map((item)=>{

          return (
          <li>
            {item}
            <button onClick={
                ()=>{console.log(item)}}
                    //this.showDetails
            >
            Afficher</button>
          </li>
          ); 
        });
   


        return (
            <div>
                <h1>Compte des clics</h1>
                <p>nb de clicks : {this.state.clickCount}</p>
                {message}
                <button onClick={this.addClickCount}>Cliquez moi ++</button>
                <button onClick={this.substractClickCount}>Cliquez moi pour -- </button>

                <ul>{fruitList}</ul>
                    <p>{}</p>

            </div>
        );
    }

}

export default Counter;