import * as actionTypes from "../../Redux/actionTypes";
const initialState={
  questionText:""
}

export default function GetQuestionReducer(state = initialState, action) {
  switch (action.type) {
      
    case actionTypes.GET_QUESTION_SUCCESS:
        
      return action.payload;
      default:
      return state;
  }
}
