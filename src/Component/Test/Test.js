import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TestActions from "./TestAction";
import { Button,Row,Col,Toast, ToastBody, ToastHeader,Progress, } from 'reactstrap';
import "../../Css/app.css"
import {Link} from "react-router-dom"
class Test extends Component {
    state={
        id:1,
        array:[]
    }
    componentDidMount(){
        this.props.actions.getQuestion(this.state.id);
    }
    Next=async()=>{
     
        this.props.actions.getQuestion(this.props.question.id+1);
    }

    Back=async()=>{
       
        this.props.actions.getQuestion(this.props.question.id-1);
    } 
    No=()=>{
        const newItems = [...this.state.array];
        newItems[this.props.question.id-1] = 0;
        this.setState({ array:newItems });
       
    }
    Yes=()=>{
        const newItems = [...this.state.array];
        newItems[this.props.question.id-1] = 1;
        this.setState({ array:newItems });
    }
    Result=()=>{
   
      var newItems = this.state.array.map(x=>x);
      this.props.actions.getResult(newItems);
  }
  //#0069d9
    render() {
        const bar=(this.props.question.id*100)/18;
        const newItems = [...this.state.array];
        
        return (  <div>
            <section className="banner_part">
             <div className="container">
             <div className="row justify-content-center">
                    <div className="col-xl-12"> 
                   <div className="banner_text">
                     <div className="banner_text_change" style={{padding:"0px !important"}}>
                     <div className="p-3 my-2 rounded bg-docs-transparent-grid">
                         
        <Toast  className="toast">
          <ToastHeader  >
         {this.props.question.id}/18 
          </ToastHeader>
          <Progress style={{marginTop:"2px"}} value={bar}></Progress>
          <br></br><br></br>
          <ToastBody>
       <div  className="titleFont">  {this.props.question.questionText}</div> 
         
         <Row  className="optionFont">   
        {newItems[this.props.question.id-1]===1?<Col> <Button style={{minWidth:"100%",minHeight:"120%",backgroundColor:"#0069d9"}} onClick={this.Yes}>Evet</Button></Col>
       :<Col> <Button style={{minWidth:"100%",minHeight:"120%"}} onClick={this.Yes} color="primary">Evet</Button></Col> }

        {newItems[this.props.question.id-1]===0?<Col> <Button style={{minWidth:"100%",minHeight:"120%",backgroundColor:"#0069d9"}} onClick={this.No} >Hayır</Button></Col>
       :<Col> <Button style={{minWidth:"100%",minHeight:"120%"}} onClick={this.No} color="primary">Hayır</Button></Col> }
          </Row> 
          <br></br>
   {   console.log("dfd", newItems[this.props.question.id-1])}
          </ToastBody> 
          <button style={this.props.question.id===1?{display:"none"}:{display:"inline"}} onClick={this.Back}  className="previous">&laquo;Geri</button>
          <button style={this.props.question.id===18?{display:"none"}:{display:"inline"}} disabled={(newItems[this.props.question.id-1]===undefined||this.props.question.id===18)?  true:false} onClick={this.Next}className="next">İleri &raquo;</button>
         <Link to="Result"> <button style={this.props.question.id===18&&newItems[this.props.question.id-1]!==undefined?{display:"inline"}:{display:"none"}} onClick={this.Result} className="next">Sonucu Gör &raquo;</button></Link>
        </Toast>
      </div>
                     </div>
                   </div>
                 </div>
                
               </div>
             </div>
           </section>
                 </div>
        )
    }
}
function mapStateToProps(state) {
    return {
      question :state.QuestionReducer,
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
      actions: {
        getQuestion:bindActionCreators(TestActions.getQuestion,dispatch),
        getResult:bindActionCreators(TestActions.getResult,dispatch),
      }
    };
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Test)