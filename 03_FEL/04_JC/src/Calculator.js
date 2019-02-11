

class Calculator extends React.Component {

    render() {
        return (
            <div id="calculator">
                <Display/>
                <Button className="button number-button" content="1"/>
                <Button className="button utility-button" content="AC"/>
                <Button className="button math-button" content="+"/>
            </div>
        )
    }

}


class Display extends React.Component{
    render() {
        return(
            <h1 id="display">Display</h1>
        )
    }
}


class Button extends React.Component{

    render(){
        return(
            <button className={this.props.className}>{this.props.content}</button>
        );
    }

}

ReactDOM.render(<Calculator/>, document.getElementById('root'));