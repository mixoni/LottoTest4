var React = require("react");
var ReactDOM = require("react-dom");
var ReactCountdownClock = require('react-countdown-clock');
var Animation = require('./Animation');
var Results = require('./Results');
var Circle = require('./Circle');


class Scene extends React.Component {    
    constructor(props){
        super(props);
        this.state = {
            component: null,
            RemainingTime : 0 ,
            numbers : []        
        };
        
    }
    
    componentDidMount() {
        this.RenderCountdownScene()
    }
        
    RenderCountdownScene = () => {
         /*fetch("api/GetRemainingTime")
              .then(res => res.json())
              .then(
                (result) => {
                  console.log('result.seconds: ' + result.seconds);
                  this.setState({ RemainingTime : result.seconds });
                  this.setState({ component : <div className="with-flag">
                         <div className="title-header">Izvlačenje počinje za</div>
                         <ReactCountdownClock seconds={this.state.RemainingTime}
                         color="#4fc3f7"
                         alpha={0.9}
                         size={500}
                         onComplete={this.RenderAnimationScene} />
                         </div>
                })
                },
                (error) => {
                  console.log(error);
        });      */
        this.setState({ component : <div className="with-flag">
                         <div className="title-header">Izvlačenje počinje za</div>
                         <ReactCountdownClock seconds={6}
                         color="#4fc3f7"
                         alpha={0.9}
                         size={500}
                         onComplete={this.RenderAnimationScene} />
                         </div>});
 
    }
    
    RenderAnimationScene = () => {
        this.setState({ component : <Animation numbers={[1,2,33,14,5,36,27,8,19,30,21,12,39,40,15,6,17,38,9,24]} onComplete = {this.RenderLastThreeResultsScene} onTimerExpired={this.RenderCountdownScene} /> })       
        //--- get remaining time for counter
         /*fetch("api/GetNumbers")
          .then(res => res.json())
          .then(
            (result) => {
              console.log('GetNumbers returns: ' + result.numbers);
              this.setState({ component : <Animation numbers={result.numbers} onComplete = {this.RenderLastThreeResultsScene} onTimerExpired={this.RenderCountdownScene} /> })
              
            },
            (error) => {
              console.log(error);
            }
          )*/
    }
   RenderLastThreeResultsScene = () => {
        this.setState({ component : 
                    <Results  onComplete = {this.RenderCountdownScene} onTimerExpired={this.RenderCountdownScene} />
        }) 
   }
        
    render() {
        return(
             <div>
              {this.state.component} 
             </div>          
        )        
    }
}

module.exports = Scene;