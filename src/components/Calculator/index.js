import React, { Component } from 'react';
import '../../Global/css/Calculator.css';
import {rangeChange,fetchCalculator} from '../../store/actions.js';
import {connect} from 'react-redux';
class Calculator extends Component{

componentWillMount(){
  this.props.fetchCalculator();
}
  handleChange=e=> {
     this.props.rangeChange(e.target.name,e.target.value);

  };
   render(){
     return(
        <div>
          <div className="wrappergeneralconfig">
                <div>
                    <div>
                        <div className="configTitle"><span className="configtitletext">{this.props.calculator.title==undefined?"":this.props.calculator.title.substring(0,15)}</span></div>
                        <div className="configTitleSecond"><span className="configtitletext">{this.props.calculator.title==undefined?"":this.props.calculator.title.substring(15,27)}</span></div>
                        <div className="configComment"><span>{this.props.calculator.description} </span></div>
                    </div>
                </div>
                <div className="configurator">
                      <div className="wrappercalculator">
                          <div>
                            <span className="spanRange">Monthly<br/> ingredient spending</span>
                                <div>
                                  <input type="text"
                                    name="monthlytext"
                                    className="monthlytextbox"
                                    readOnly
                                    value={"$ "+(this.props.monthly)}
                                    noValidate/>
                                </div>
                                  <input
                                     name="monthly"
                                     type="range"
                                     min="0" max="144"
                                     value={this.props.monthly}
                                     onChange={this.handleChange.bind(this)}

                                     step="0.001"/>
                          </div>
                          <div className="secondrange">
                              <span className="spanRange">Full-time employees that<br/>process invoices</span>
                              <input type="text"

                                    name="fulltimerangetext"
                                    readOnly
                                    className="fulltimetextbox"
                                    value={this.props.fulltimerange}
                                    noValidate/>
                                    <input
                                       name="fulltimerange"
                                       type="range"
                                       min="0" max="10"
                                       value={this.props.fulltimerange}
                                       onChange={this.handleChange.bind(this)}

                                       step="1"/>
                            </div>

                      </div>
                </div>

          </div>
            <div className="totalSavings">
                <div>
                    <div><span className="dollarsaving">$</span><span className="resultLabel">{this.props.foodcostsavings.toFixed(3)}</span></div>
                    <span className="estimatesLabel">Estimated cost food savings</span>
                </div>
                <div className="secondTotal">
                    <div><span className="dollarsaving">$</span><span className="resultLabel">{this.props.anualsavings.toFixed(3)}</span></div>
                    <span className="estimatesLabel">Your estimated annual savings</span>
                </div>
            </div>
        </div>
     );
   }
}
const mapStateToProps = (state) =>{
  return{
        monthly:state.monthly,
        fulltimerange:state.fulltimerange,
        calculator:state.calculator,
        foodcostsavings:state.foodcostsavings,
        anualsavings:state.anualsavings
  }
};
export default connect(mapStateToProps,{rangeChange,fetchCalculator})(Calculator);
