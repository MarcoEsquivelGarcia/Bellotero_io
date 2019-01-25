import React, { Component } from 'react';
import '../../Global/css/Testimonial.css';
import {fetchSlider,nextComment,prevComment} from '../../store/actions.js';
import {connect} from 'react-redux';
class Testimonial extends Component{

  componentWillMount() {
    this.props.fetchSlider();
  }
   render(){
     return(
       <div className="wrappergeneral">
                <div className="wrapperTestimonial">
                  <div className="wrapperTitle">
                      <span className="title">{this.props.slider.length==0?"":this.props.title}</span>
                  </div>
                  <div className="wrapper">
                    <div className="wrapperNombrePosition">
                      <div className="Nombre">
                        <span>{this.props.slider.length==0?"":this.props.slider[this.props.index].name}</span>
                      </div>
                      <div className="Position">
                        <span> {this.props.slider.length==0?"":this.props.slider[this.props.index].position}</span>
                      </div>
                    </div>

                    <div className="Comment">
                       <span>{this.props.slider.length==0?"":this.props.slider[this.props.index].comment}</span>
                    </div>
                  </div>
                </div>
                <div className="wrapbuttons">
                    <div className="totalComment"><span >{this.props.slider.length==0?"":(this.props.commentActual+1)}/{this.props.slider.length==0?"":this.props.totalcomments}</span></div>
                    <div className="buttons">
                            <button name="prevComment" onClick={this.props.prevComment}>&#8592;</button>
                            <button name="nextComment" onClick={this.props.nextComment} >&#8594;</button>
                    </div>
                </div>



          </div>
     );
   }
}
const mapStateToProps = (state) =>{
  return{
        title:state.title,
        totalcomments:state.totalcomments,
        commentActual:state.index,
       slider:state.slider,
      index:state.index
  }
};
/*const mapDispachToProps=(dispach)=>{
  return{
     goToPrev:()=>dispach({type:'PREV_COMMENT'}),
     goToNext:()=>dispach({type:'NEXT_COMMENT'})
  }
}*/

export default connect(mapStateToProps,{fetchSlider,nextComment,prevComment})(Testimonial);
