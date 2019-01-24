const initialState={
  menuItems:[],
  title:"",
  totalcomments:0,
  commentActual:0,
  slider:[],
  index:0,
  calculator:[],
  monthly: 36.211,
  fulltimerange:1
}

const reducer=(state=initialState,action)=>{
    const newState={...state};

    if(action.type==='PREV_COMMENT')
    {
        if((newState.index-1)>=0)
        {
          newState.index--,
          newState.commentActual+1
        }

    }
    if(action.type==='NEXT_COMMENT')
    {
        if((newState.index+1)<newState.totalcomments){
          newState.index++,
          newState.commentActual-1
        }
    }
    if(action.type==='FETCH_MENU')
    {

        newState.menuItems=action.menu

    }
    if(action.type==='FETCH_SLIDER')
    {

        newState.slider=action.slider.reviews,
        newState.title=action.slider.title,
        newState.totalcomments=action.slider.reviews.length

    }
    if(action.type==='FETCH_CALCULATOR')
    {

        newState.calculator=action.calculator

    }
    if(action.type==='RANGE_CHANGE')
    {
        if(action.name=="monthly")
          newState.monthly=action.value
        else
          newState.fulltimerange=action.value

    }
    return newState;
}

export default reducer
