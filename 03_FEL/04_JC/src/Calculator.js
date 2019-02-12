class Calculator extends React.Component {

    constructor(props) {
        super(props);

        this.enterNum = this.enterNum.bind(this);
        this.clear = this.clear.bind(this);
        this.negate = this.negate.bind(this);
        this.percentify = this.percentify.bind(this);
        this.calculate = this.calculate.bind(this);

        this.state = {
            displayText: 0,
            lastInput: '',
            formula: '',
            action: '',
            clearCount: 0,
            firstTerm: ''
        };
    }

    enterNum(e) {
        const buttonValue = e.target.innerText;
        let newText = (!(this.state.displayText === 0)) ? Number(this.state.displayText + buttonValue) : buttonValue;

        this.setState({
            displayText: newText,
            lastInput: buttonValue,
            formula: this.state.formula + buttonValue
        });
    }

    clear() {
        this.setState({
            displayText: 0,
            clearCount: this.state.clearCount + 1
        });
    }

    negate() {
        this.setState({
            displayText: this.state.displayText * -1
        });
    }

    percentify() {
        this.setState({
            displayText: Number(this.state.displayText) / 100
        });
    }

    add() {
        this.setState({
            firstTerm: this.state.displayText,
            action: 'add'
        })

    }

    calculate() {
        switch (this.state.action) {
            case 'add':
                this.setState({

                })

        }
    }

    render() {
        return (
            <div id="calculator">
                <Display text={this.state.displayText}/>
                <Button className="button utility-button" content={this.state.lastInput === '' ? 'AC' : 'C'}
                        pushButton={this.clear}/>
                <Button className="button utility-button" content="+/-" pushButton={this.negate}/>
                <Button className="button utility-button" content="%" pushButton={this.percentify}/>
                <Button className="button math-button" content="÷" pushButton={this.enterNum}/>
                <Button className="button number-button" content="7" pushButton={this.enterNum}/>
                <Button className="button number-button" content="8" pushButton={this.enterNum}/>
                <Button className="button number-button" content="9" pushButton={this.enterNum}/>
                <Button className="button math-button" content="x" pushButton={this.enterNum}/>
                <Button className="button number-button" content="4" pushButton={this.enterNum}/>
                <Button className="button number-button" content="5" pushButton={this.enterNum}/>
                <Button className="button number-button" content="6" pushButton={this.enterNum}/>
                <Button className="button math-button" content="-" pushButton={this.enterNum}/>
                <Button className="button number-button" content="1" pushButton={this.enterNum}/>
                <Button className="button number-button" content="2" pushButton={this.enterNum}/>
                <Button className="button number-button" content="3" pushButton={this.enterNum}/>
                <Button className="button math-button" content="+" pushButton={this.enterNum}/>
                <Button id="zero" className="button" content="0" pushButton={this.enterNum}/>
                <Button className="button number-button" content="." pushButton={this.enterNum}/>
                <Button className="button math-button" content="=" pushButton={this.enterNum}/>
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