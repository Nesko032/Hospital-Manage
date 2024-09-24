import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import './MedicalFacility.scss';

class MedicalFacility extends Component {
    render() {
        return (
            <div className="medical-facility section-header">
                <div className="container">
                    <div className="section-content">
                        <div className="section-header">
                            <span className="section-header--title">
                                Cơ sở y tế nổi bật
                            </span>
                            <button className="section-header--button">
                                Xem thêm
                            </button>
                        </div>
                        <div className="section-body">
                            <Slider {...this.props.settings}>
                                <div className="section-img--customize">
                                    <div class="section-img section-medical-facility"></div>
                                    <div>Hệ thống y tế Thu Cúc 1</div>
                                </div>
                                <div className="section-img--customize">
                                    <div class="section-img section-medical-facility"></div>
                                    <div>Hệ thống y tế Thu Cúc 2</div>
                                </div>
                                <div className="section-img--customize">
                                    <div class="section-img section-medical-facility"></div>
                                    <div>Hệ thống y tế Thu Cúc 3</div>
                                </div>
                                <div className="section-img--customize">
                                    <div class="section-img section-medical-facility"></div>
                                    <div>Hệ thống y tế Thu Cúc 4</div>
                                </div>
                                <div className="section-img--customize">
                                    <div class="section-img section-medical-facility"></div>
                                    <div>Hệ thống y tế Thu Cúc 5</div>
                                </div>
                                <div className="section-img--customize">
                                    <div class="section-img section-medical-facility"></div>
                                    <div>Hệ thống y tế Thu Cúc 6</div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
