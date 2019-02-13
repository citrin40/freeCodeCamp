class Calculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            displayText: 0,
            lastInput: '',
            action: '',
            clearCount: 0,
            firstTerm: 0,
            overwrite: true
        };
    }

    enterNum = (e)  => {
        const buttonValue = e.target.innerText;
        let newText = (!this.state.overwrite) ? Number(this.state.displayText + buttonValue) : buttonValue;

        this.setState({
            displayText: newText,
            lastInput: buttonValue,
            formula: this.state.formula + buttonValue,
            overwrite: false
        });
    };

    clear = () => {
        switch(this.state.clearCount){
            case 0:
                this.setState({
                    displayText: 0,
                    clearCount: this.state.clearCount +1
                });
                break;
            case 1:
                this.setState({
                    displayText: 0,
                    clearCount: 0,
                    lastInput: '',
                    action: '',
                    firstTerm: 0,
                    overwrite: true
                });
                break;

        }
    };

    decimalPoint = () => {

        let newText = (this.state.displayText.toString().split('').pop() === '.') ? this.state.displayText : this.state.displayText + '.';

        this.setState({
            displayText: newText
        });
    };

    negate = () => {
        this.setState({
            displayText: this.state.displayText * -1
        });
    };

    percentify = () => {
        this.setState({
            displayText: Number(this.state.displayText) / 100
        });
    };

    operator = (e) => {
        const actionText = e.target.innerText;
        this.setState({
            firstTerm: Number(this.state.displayText),
            action: actionText,
            overwrite: true
        });
    };

    calculate = () => {
        switch (this.state.action) {
            case '+':
                this.setState({
                    displayText: this.state.firstTerm + Number(this.state.displayText)
                });
                break;
            case '-':
                this.setState({
                    displayText: this.state.firstTerm - Number(this.state.displayText)
                });
                break;
            case 'x':
                this.setState({
                    displayText: this.state.firstTerm * Number(this.state.displayText)
                });
                break;
            case '÷':
                this.setState({
                    displayText: this.state.firstTerm / Number(this.state.displayText)
                });
                break;
            default:
                console.log('calculated');
        }
    };

    render() {
        return (
            <div id="calculator">
                <Display text={this.state.displayText}/>
                <Button className="button utility-button" content={this.state.lastInput === '' ? 'AC' : 'C'}
                        pushButton={this.clear}/>
                <Button className="button utility-button" content="+/-" pushButton={this.negate}/>
                <Button className="button utility-button" content="%" pushButton={this.percentify}/>
                <Button className="button math-button" content="÷" pushButton={this.operator}/>
                <Button className="button number-button" content="7" pushButton={this.enterNum}/>
                <Button className="button number-button" content="8" pushButton={this.enterNum}/>
                <Button className="button number-button" content="9" pushButton={this.enterNum}/>
                <Button className="button math-button" content="x" pushButton={this.operator}/>
                <Button className="button number-button" content="4" pushButton={this.enterNum}/>
                <Button className="button number-button" content="5" pushButton={this.enterNum}/>
                <Button className="button number-button" content="6" pushButton={this.enterNum}/>
                <Button className="button math-button" content="-" pushButton={this.operator}/>
                <Button className="button number-button" content="1" pushButton={this.enterNum}/>
                <Button className="button number-button" content="2" pushButton={this.enterNum}/>
                <Button className="button number-button" content="3" pushButton={this.enterNum}/>
                <Button className="button math-button" content="+" pushButton={this.operator}/>
                <Button id="zero" className="button" content="0" pushButton={this.enterNum}/>
                <Button className="button number-button" content="." pushButton={this.decimalPoint}/>
                <Button className="button math-button" content="=" pushButton={this.calculate}/>
            </div>
        )
    }

}


class Display extends React.Component {
    render() {
        return (
            <div id="display">
                <span>{this.props.text}</span></div>
        )
    }
}


class Button extends React.Component {

    render() {
        return (
            <button className={this.props.className} id={this.props.id} onClick={(e) => this.props.pushButton(e)}
                    value={this.props.content}>{this.props.content}</button>
        );
    }

}

ReactDOM.render(<Calculator/>, document.getElementById('root'));