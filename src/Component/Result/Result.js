import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TestActions from "../Test/TestAction";
import Error from "../../image/error2.png"
import Disease from "../../image/disease.png"
import {
  Toast,
  ToastBody,
  ToastHeader,Row,Col, Button
} from "reactstrap";
import "../../Css/app.css";
class Result extends Component {
    componentDidMount(){
      
    }

    renderError() {
      return (
        <div>
           <section className="banner_part">
             <div className="container">
             <div className="row justify-content-center">
                    <div className="col-xl-12"> 
                   <div className="banner_text">
                     <div className="banner_text_change" style={{padding:"0px !important"}}>
                     <div className="p-3 my-2 rounded bg-docs-transparent-grid">
                         
        <Toast  className="toast">
         
          <ToastBody>
     <Row> 
       <Col xs="4"><img src={Error}
      alt=""
      style={{minWidth:"150px",minHeight:"150px"}}
      ></img></Col>
      <Col xs="8"> <h2 style={{marginTop:"25%"}}>Hay aksi! </h2>
      <h4>Cevaplarınız bildiğimiz hiçbir hastalığın semptomlarıyla uyuşmadı.</h4>
<br></br>
         <h4> Dilerseniz testi yeniden çözebilirsiniz.</h4> <Button style={{minWidth:"30%",minHeight:"10%"}} href="Test" onClick={this.Yes} color="primary">Teste gidiniz &raquo;</Button></Col>
      </Row>
          </ToastBody> 
        </Toast>
      </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </section>
        </div>
      );
    }
    renderDisease() {
      return (
        <div>
        <section className="banner_part">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div className="banner_text">
                  <div className="banner_text_change" style={{ padding: "0px !important" }}>
                    <div className="p-3 my-2 rounded bg-docs-transparent-grid">
                      <Toast className="toast">
                        <Row  style={{margin:"5%"}}>
                          <Col xs="3"><img src={Disease}
      alt=""
      style={{minWidth:"150px",minHeight:"300px",width:"200px",height:"400"}}
      ></img></Col><Col style={{marginBottom:"20px"}} xs="9">
                        <ToastHeader>Hastalık: {this.props.result.diseaseName}
                        {console.log(this.props.result)}
                        </ToastHeader>
                        <ToastHeader>{this.props.result.diseaseName} nedir?</ToastHeader>
                        <ToastBody>
                        {this.props.result.diseaseDescription}
                        </ToastBody>
                        <ToastHeader>{this.props.result.diseaseName} neden olur?</ToastHeader>
                        <ToastBody>
                        {this.props.result.diseaseCauses}
                        </ToastBody>
                        <ToastHeader>{this.props.result.diseaseName} tedavi yöntemleri nelerdir?</ToastHeader>
                        <ToastBody>
                        {this.props.result.treatmentMethod}
                        </ToastBody>
                        <ToastHeader>İlaçlar:</ToastHeader>
                        <ToastBody>
                        {this.props.result.medicines}
                        </ToastBody><ToastBody>
                        <Button style={{minWidth:"30%",minHeight:"10%"}} href= {this.props.result.info}  color="primary"> Hastalık Detay &raquo;</Button><span>   </span>
                        <Button style={{minWidth:"30%",minHeight:"10%"}} href= "http://www.hastanerandevu.gov.tr/Randevu/login.xhtml" color="primary">Randevu &raquo;</Button>
                        </ToastBody></Col>
                        </Row>
                      </Toast>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      );
    }render() {
    return (
      <div>{this.props.result.errorMessage!=="Cevaplarınıza uyumlu bir hastalık bulunamadı." ? this.renderDisease() : this.renderError()}
    
      </div>
    );
  }}

function mapStateToProps(state) {
  return {
    result: state.ResultReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getResult: bindActionCreators(TestActions.getResult, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
