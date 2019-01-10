class App extends React.Component {
    render() {
        return (
            <QuoteBox/>
        )
    }
}

class QuoteBox extends React.Component {
    render() {
        return (
            <div id="quote-box">
                <QuoteAuthor/>

                <QuoteText/>

                <ButtonArea/>
            </div>
        );
    }
}

class QuoteSign extends React.Component{
    render() {
        return(
            <img src={this.props.source} alt="Twitter Button" id={this.props.direction}/>
        )
    }
}

class QuoteText extends React.Component {

     render() {
         const sourceLeft = "../../../media/03_FEL/01_RQM/quote_32x32_left.png";
         const sourceRight = "../../../media/03_FEL/01_RQM/quote_32x32_right.png";
        return (
            <div id="text">
                <QuoteSign source={sourceLeft} direction="quote-left"/>
                You know you're in love when you can't fall asleep because reality is finally better than your dreams
                You know you're in love when you can't fall asleep because reality is finally better than your dreams
                <QuoteSign source={sourceRight} direction="quote-right"/>
            </div>
        )
    }
}

class QuoteAuthor extends React.Component {
    render() {
        return (
            <div id="author">
                My Undies is a long author
            </div>
        )
    }
}

class ButtonArea extends React.Component {
    render() {
        return(
            <div id="button-area">
                <ButtonTweet/>
                <ButtonGenerate/>
            </div>
        )
    }
}

class ButtonTweet extends React.Component {
    render() {
        return (
            <a href="twitter.com/intent/tweet"><img src="../../../media/03_FEL/01_RQM/twitter-white.png" alt="Twitter Button" id="tweet-quote"/></a>
        )
    }
}

class ButtonGenerate extends React.Component {
    render() {
        return (
            <a href="#"><img src="../../../media/03_FEL/01_RQM/generate-white.png" alt="New Quote Button" id="new-quote"/></a>
        )
    }
}

const QUOTES = [
    {
        quote: "Quote 1",
        author: "Author 1"
    },
    {
        quote: "Quote 2",
        author: "Author 2"
    },
    {
        quote: "Quote 3",
        author: "Author 3"
    },

]


const domContainer = document.getElementById('root');
ReactDOM.render(<App/>, domContainer);