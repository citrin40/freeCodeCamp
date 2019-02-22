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

    enterNum = (e) => {
        const buttonValue = e.target.innerText;
        let newText = (!this.state.overwrite) ? Number(this.state.displayText + buttonValue) : buttonValue;

        this.setState({
            displayText: newText,
            lastInput: buttonValue,
            formula: this.state.formula + buttonValue,
            overwrite: false,
            clearCount: 0
        });
    };

    clear = () => {
        switch (this.state.clearCount) {
            case 0:
                this.setState({
                    displayText: 0,
                    clearCount: this.state.clearCount + 1
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
                overwrite: true,
                lastInput: actionText
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
                    displayText: (this.state.firstTerm / Number(this.state.displayText)).to
                });
                break;
            default:
                break;
        }
    };

    render() {
        return (
            <div id="calculator">
                <Display text={this.state.displayText}/>
                <Button id="clear" className="button utility-button" content={this.state.lastInput === '' ? 'AC' : 'C'}
                        pushButton={this.clear}/>
                <Button className="button utility-button" content="+/-" pushButton={this.negate}/>
                <Button className="button utility-button" content="%" pushButton={this.percentify}/>
                <Button id="divide" className="button math-button" content="÷" pushButton={this.operator}/>
                <Button id="seven" className="button number-button" content="7" pushButton={this.enterNum}/>
                <Button id="eight" className="button number-button" content="8" pushButton={this.enterNum}/>
                <Button id="nine" className="button number-button" content="9" pushButton={this.enterNum}/>
                <Button id="multiply" className="button math-button" content="x" pushButton={this.operator}/>
                <Button id="four" className="button number-button" content="4" pushButton={this.enterNum}/>
                <Button id="five" className="button number-button" content="5" pushButton={this.enterNum}/>
                <Button id="six" className="button number-button" content="6" pushButton={this.enterNum}/>
                <Button id="subtract" className="button math-button" content="-" pushButton={this.operator}/>
                <Button id="one" className="button number-button" content="1" pushButton={this.enterNum}/>
                <Button id="two" className="button number-button" content="2" pushButton={this.enterNum}/>
                <Button id="three" className="button number-button" content="3" pushButton={this.enterNum}/>
                <Button id="plus" className="button math-button" content="+" pushButton={this.operator}/>
                <Button id="zero" className="button" content="0" pushButton={this.enterNum}/>
                <Button id="decimal" className="button number-button" content="." pushButton={this.decimalPoint}/>
                <Button id="equals" className="button math-button" content="=" pushButton={this.calculate}/>
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