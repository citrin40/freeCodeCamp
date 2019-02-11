

class Calculator extends React.Component {

    constructor(props){
        super(props);
        this.state ={

        };
    }

    render() {
        return (
            <div id="calculator">
                <Display/>
                <Button className="button utility-button" content="AC"/>
                <Button className="button utility-button" content="+/-"/>
                <Button className="button utility-button" content="%"/>
                <Button className="button math-button" content="÷"/>
                <Button className="button number-button" content="7"/>
                <Button className="button number-button" content="8"/>
                <Button className="button number-button" content="9"/>
                <Button className="button math-button" content="x"/>
                <Button className="button number-button" content="4"/>
                <Button className="button number-button" content="5"/>
                <Button className="button number-button" content="6"/>
                <Button className="button math-button" content="-"/>
                <Button className="button number-button" content="1"/>
                <Button className="button number-button" content="2"/>
                <Button className="button number-button" content="3"/>
                <Button className="button math-button" content="+"/>
                <Button id="zero" className="button" content="0"/>
                <Button className="button number-button" content="."/>
                <Button className="button math-button" content="="/>
            </div>
        )
    }

}


class Display extends React.Component{
    render() {
        return(
            <div id="display">Display</div>
        )
    }
}


class Button extends React.Component{

    render(){
        return(
            <button className={this.props.className} id={this.props.id}>{this.props.content}</button>
        );
    }

}

ReactDOM.render(<Calculator/>, document.getElementById('root'));