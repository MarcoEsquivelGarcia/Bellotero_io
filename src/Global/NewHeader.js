// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

// Assets
import './css/Header.css';

import bellotero from '../img/bellotero.png';
import bellotero2  from '../img/bellotero@2x.png';
import bellotero3  from '../img/bellotero@3x.png';
import {connect} from 'react-redux';
import {fetchMenu} from '../store/actions.js';
class NewHeader extends Component {



  componentWillMount() {
      this.props.fetchMenu();
  }
  render() {
    
    return (
           <div className="Rectangle">
           <div className="image"><img src={bellotero}   className="bellotero" /></div>

                <ul >
                    {
                      this.props.menuItems.items && this.props.menuItems.items.map(
                         (menu, key) => <li key={key} >
                                       <NavLink to={menu.route}  activeClassName="active" exact>
                                                         {menu.text}
                                       </NavLink></li>
                        )
                    }
                </ul>
           </div>


    );
  }
}
const mapStateToProps = (state) =>{
  return{
        menuItems:state.menuItems
  }
};
export default connect(mapStateToProps,{fetchMenu})(NewHeader);
