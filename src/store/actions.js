import axios from 'axios';
export function fetchCalculator() {
  return function(dispatch) {
    return axios.get("https://api.myjson.com/bins/15g28k").then(({ data }) => {
      dispatch(setCalculatordata(data.calculator));
    });
  };
}
 function setCalculatordata(calculator){
  return{
    type:"FETCH_CALCULATOR",
    calculator:calculator
  };
}
export function fetchSlider() {
  return function(dispatch) {
    return axios.get("https://api.myjson.com/bins/14jgmk").then(({ data }) => {
      dispatch(setfetchsliderdata(data.slider));
    });
  };
}
 function setfetchsliderdata(slider){
  return{
    type:"FETCH_SLIDER",
    slider:slider
  };
}
export function fetchMenu() {
  return function(dispatch) {
    return axios.get("https://api.myjson.com/bins/bdexg").then(({ data }) => {
      dispatch(setFetchMenuData(data.menu));
    });
  };
}
function setFetchMenuData(menu){

  return{
    type:"FETCH_MENU",
    menu:menu
  }
}

export function nextComment(){

         return{
              type:"NEXT_COMMENT",

         }

}
export function prevComment(){
      return{
        type:"PREV_COMMENT",

   }

}

export  function rangeChange(name, value){
     return{
        type:"RANGE_CHANGE",
        name:name,
        value:value
     }
}
