import * as actionTypes from "../../Redux/actionTypes";
import { API_BASE } from "../../config/config"
import axios from "axios"


export function getQuestionSuccess(data) {
  
  return { type: actionTypes.GET_QUESTION_SUCCESS, payload: data }
}
export function getQuestion(data) {
 
  return function (dispatch) {
    let url = API_BASE + '/test/'+data;
    axios.get(url)
      .then(response => response.data)
      .then(result => dispatch(getQuestionSuccess(result)));
  }
}
export function getResultSuccess(data) {
  console.log("burda",data);
  return { type: actionTypes.GET_RESULT_SUCCESS, payload: data }
}
export function getResultError(data) {
  console.log("burda",data);
  return { type: actionTypes.GET_RESULT_ERROR, payload: data }
}

export function getResult(data) {
  console.log("girdiiiiiii");
  console.log(data);
console.log(data[1]);
  return function (dispatch) {
    let url = API_BASE + '/test';
    let formData = new FormData();
   for( var i=0;i<data.length;i++)
   {
    formData.append("userArray", data[i]);
   }

    axios.post(url, formData, { headers: {
        "Content-Type": "form-data"
      }})
 .then(result => dispatch(getResultSuccess(result)))
 .catch(error => {dispatch(getResultError(error.response))
     
    });
  }
}