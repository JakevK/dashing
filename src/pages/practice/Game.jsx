import React from 'react';
import dictionary from '../resources/dictionary.json'
import '../../styles/game.css';



class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            currentChar: this.getNewChar(),
            editable: true,
            answerShown: false
        }
    }

    
    getNewChar = () => {
        let previous = {};
        try {previous = this.state.currentChar} catch {};
        
        const availableTypes = dictionary.filter(x =>
            this.props.settings.charTypes.includes(x.type) && x !== previous
        );

        return availableTypes[Math.floor(Math.random() * availableTypes.length)];
    }


    handleInput = event => {
        if(!this.state.editable) return;

        let result = (() => {
            if (this.state.input.length >= 7) {
                return this.state.input;
            }
            switch(event.key) {
                case "Backspace":
                    return this.state.input.slice(0, this.state.input.length - 1);
                case ".":
                    return this.state.input + ".";
                case "/":
                    return this.state.input + "-";
                default:
                    return this.state.input;
            }
        })();

        this.setState({input: result});

        if (result === this.state.currentChar.morse) {
            this.setState({editable: false});
            setTimeout(() => {
                this.setState({
                    input: "",
                    currentChar: this.getNewChar(),
                    editable: true,
                    answerShown: false
                });
            }, 100);
        }
    }


    revealAnswer = () => {
        this.setState({answerShown: true});
    }


    render() {
        const charPreview = (
            <div className="char-preview">
                {this.state.currentChar.char.toUpperCase()}
            </div>
        );
        const answer = (
            <div className="answer">
                <span className="answer-label">answer:</span> {this.state.currentChar.morse}
            </div>
        );
        const input = (
            <input 
                className="morse-input" 
                autoFocus={true} 
                onBlur={({ target }) => target.focus()} 
                type="text" 
                readOnly={true} 
                value={this.state.input} 
                onKeyDown={this.handleInput}
            />
        );
        const revealBtn = (
            <div 
                className="reveal-btn" 
                onClick={this.revealAnswer}
            >
                show answer
            </div>
        );

        
        return this.state.answerShown ? 
            (
                <div>
                    {charPreview}
                    {answer}
                    {input}
                </div>
            )
        :
            (
                <div>
                    {charPreview}
                    {revealBtn}
                    {input}
                </div>
            )
        ;

    }
}


export default Game;