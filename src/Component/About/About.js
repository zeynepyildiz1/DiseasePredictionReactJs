import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
            
        {/* about us part start*/}
        <section className="about_us single_about_padding">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-6 col-lg-6">
                <div className="about_us_img">
                  <img src="img/top_service.png" alt="" />
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="about_us_text">
                  <h2>About us</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    Quis ipsum suspendisse ultrices gravida. Risus cmodo viverra
                    maecenas accumsan lacus vel</p>
                  <a className="btn_2 " href="#">learn more</a>
                  <div className="banner_item">
                    <div className="single_item">
                      <img src="img/icon/banner_1.svg" alt="" />
                      <h5>Emergency</h5>
                    </div>
                    <div className="single_item">
                      <img src="img/icon/banner_2.svg" alt="" />
                      <h5>Appointment</h5>
                    </div>
                    <div className="single_item">
                      <img src="img/icon/banner_3.svg" alt="" />
                      <h5>Qualfied</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about us part end*/}
        {/* our depertment part start*/}
        <section className="our_depertment section_padding">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-xl-12">
                <div className="depertment_content">
                  <div className="row justify-content-center">
                    <div className="col-xl-8">
                      <h2>Our Depertment</h2>
                      <div className="row">
                        <div className="col-lg-6 col-sm-6">
                          <div className="single_our_depertment">
                            <span className="our_depertment_icon"><img src="img/icon/feature_2.svg" alt="" /></span>
                            <h4>Better Future</h4>
                            <p>Darkness multiply rule Which from without life creature blessed
                              give moveth moveth seas make day which divided our have.</p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="single_our_depertment">
                            <span className="our_depertment_icon"><img src="img/icon/feature_2.svg" alt="" /></span>
                            <h4>Better Future</h4>
                            <p>Darkness multiply rule Which from without life creature blessed
                              give moveth moveth seas make day which divided our have.</p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="single_our_depertment">
                            <span className="our_depertment_icon"><img src="img/icon/feature_2.svg" alt="" /></span>
                            <h4>Better Future</h4>
                            <p>Darkness multiply rule Which from without life creature blessed
                              give moveth moveth seas make day which divided our have.</p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="single_our_depertment">
                            <span className="our_depertment_icon"><img src="img/icon/feature_2.svg" alt="" /></span>
                            <h4>Better Future</h4>
                            <p>Darkness multiply rule Which from without life creature blessed
                              give moveth moveth seas make day which divided our have.</p>
                          </div>
                        </div>
                      </div>
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
