import * as actionTypes from "../../Redux/actionTypes";
const initialState={
 Id:"",
 DiseaseName:"", 
 DiseaseDescription: "",
 DiseaseCauses: "",
 TreatmentMethod: "",
 extra: null,
 success: false,
 errorMessage: "Cevaplarınıza uyumlu bir hastalık bulunamadı."
}

export default function GetQuestionReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_RESULT_SUCCESS:
      return action.payload.data;
      case actionTypes.GET_RESULT_ERROR:
        
        return action.payload.data;
      default:
      return state;
  }
}
