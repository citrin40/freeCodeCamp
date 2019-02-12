

class Calculator extends React.Component {

    constructor(props){
        super(props);

        this.pushButton = this.pushButton.bind(this);

        this.state ={
            displayText: '0',
            lastInput: '',
            formula: ''
        };
    }

    pushButton(e){
        const buttonValue = e.target.innerText;
        this.setState({
            displayText: buttonValue,
            lastInput: buttonValue
        });
    }

    render() {
        return (
            <div id="calculator">
                <Display text={this.state.displayText}/>
                <Button className="button utility-button" content={this.state.lastInput===''? 'AC' : 'C'} pushButton={this.pushButton}/>
                <Button className="button utility-button" content="+/-" pushButton={this.pushButton}/>
                <Button className="button utility-button" content="%" pushButton={this.pushButton}/>
                <Button className="button math-button" content="÷" pushButton={this.pushButton}/>
                <Button className="button number-button" content="7" pushButton={this.pushButton}/>
                <Button className="button number-button" content="8" pushButton={this.pushButton}/>
                <Button className="button number-button" content="9" pushButton={this.pushButton}/>
                <Button className="button math-button" content="x" pushButton={this.pushButton}/>
                <Button className="button number-button" content="4" pushButton={this.pushButton}/>
                <Button className="button number-button" content="5" pushButton={this.pushButton}/>
                <Button className="button number-button" content="6" pushButton={this.pushButton}/>
                <Button className="button math-button" content="-" pushButton={this.pushButton}/>
                <Button className="button number-button" content="1" pushButton={this.pushButton}/>
                <Button className="button number-button" content="2" pushButton={this.pushButton}/>
                <Button className="button number-button" content="3" pushButton={this.pushButton}/>
                <Button className="button math-button" content="+" pushButton={this.pushButton}/>
                <Button id="zero" className="button" content="0" pushButton={this.pushButton}/>
                <Button className="button number-button" content="." pushButton={this.pushButton}/>
                <Button className="button math-button" content="=" pushButton={this.pushButton}/>
            </div>
        )
    }

}


class Display extends React.Component{
    render() {
        return(
            <div id="display">
                <span>{this.props.text}</span></div>
        )
    }
}


class Button extends React.Component{

    render(){
        return(
            <button className={this.props.className} id={this.props.id} onClick={(e) => this.props.pushButton(e)} value={this.props.content}>{this.props.content}</button>
        );
    }

}

ReactDOM.render(<Calculator/>, document.getElementById('root'));