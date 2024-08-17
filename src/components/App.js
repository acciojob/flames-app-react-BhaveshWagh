import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name1: '',
            name2: '',
            result: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    calculateRelationship = () => {
        const { name1, name2 } = this.state;

        if (!name1 || !name2) {
            this.setState({ result: "Please Enter valid input" });
            return;
        }

        let tempName1 = name1;
        let tempName2 = name2;

        // Removing common letters
        for (let char of name1) {
            if (tempName2.includes(char)) {
                tempName1 = tempName1.replace(char, '');
                tempName2 = tempName2.replace(char, '');
            }
        }

        const remainingLength = tempName1.length + tempName2.length;
        const flamesResult = remainingLength % 6;

        let relationship = '';
        switch (flamesResult) {
            case 1:
                relationship = "Friends";
                break;
            case 2:
                relationship = "Love";
                break;
            case 3:
                relationship = "Affection";
                break;
            case 4:
                relationship = "Marriage";
                break;
            case 5:
                relationship = "Enemy";
                break;
            case 0:
                relationship = "Siblings";
                break;
            default:
                relationship = "Please Enter valid input";
        }

        this.setState({ result: relationship });
    }

    clearInput = () => {
        this.setState({
            name1: '',
            name2: '',
            result: ''
        });
    }

    render() {
        const { name1, name2, result } = this.state;

        return (
            <div id="main">
                <input
                    type="text"
                    name="name1"
                    data-testid="input1"
                    value={name1}
                    onChange={this.handleChange}
                    placeholder="Enter first name"
                />
                <input
                    type="text"
                    name="name2"
                    data-testid="input2"
                    value={name2}
                    onChange={this.handleChange}
                    placeholder="Enter second name"
                />
                <button 
                    data-testid="calculate_relationship" 
                    onClick={this.calculateRelationship}>
                    Calculate
                </button>
                <button 
                    data-testid="clear" 
                    onClick={this.clearInput}>
                    Clear
                </button>
                <h3 data-testid="answer">{result}</h3>
                {/* Do not remove the main div */}
            </div>
        );
    }
}

export default App;
