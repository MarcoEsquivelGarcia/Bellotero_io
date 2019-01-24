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
        <div className="wrappergeneralconfig">
              <div>
                  <div>
                      <div className="wrapperTitle"><span className="title">Save more with</span></div>
                      <div className="Comment"><span>{this.props.calculator.description} </span></div>
                  </div>
              </div>
              <div className="configurator">
                    <div className="wrappercalculator">
                        <div>
                          <span className="spanRange">Monthly<br/> ingredient spending</span>
                              <div>
                                <input type="text"
                                  name="monthlytext"
                                  readonly
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
                                  readonly
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
                          <div className="totalSavings">
                              <div>
                                  <div><span className="dollarsaving">$</span><span className="resultLabel">8.11</span></div>
                                  <span className="estimatesLabel">Estimated cost food savings</span>
                              </div>
                              <div className="secondTotal">
                                  <div><span className="dollarsaving">$</span><span className="resultLabel">36.211</span></div>
                                  <span className="estimatesLabel">Your estimated annual savings</span>
                              </div>
                          </div>
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
        calculator:state.calculator
  }
};
export default connect(mapStateToProps,{rangeChange,fetchCalculator})(Calculator);
