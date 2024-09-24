import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import './Specialty.scss';

class Specialty extends Component {
    render() {
        return (
            <div className="specialty section-header">
                <div className="container">
                    <div className="section-content">
                        <div className="section-header">
                            <span className="section-header--title">
                                Chuyên khoa phổ biến
                            </span>
                            <button className="section-header--button">
                                Xem thêm
                            </button>
                        </div>
                        <div className="section-body">
                            <Slider {...this.props.settings}>
                                <div className="section-img--customize">
                                    <div class="section-img section-specialty"></div>
                                    <div>Cơ xương khớp 1</div>
                                </div>
                                <div className="section-img--customize">
                                    <div class="section-img section-specialty"></div>
                                    <div>Cơ xương khớp 1</div>
                                </div>
                                <div className="section-img--customize">
                                    <div class="section-img section-specialty"></div>
                                    <div>Cơ xương khớp 1</div>
                                </div>
                                <div className="section-img--customize">
                                    <div class="section-img section-specialty"></div>
                                    <div>Cơ xương khớp 1</div>
                                </div>
                                <div className="section-img--customize">
                                    <div class="section-img section-specialty"></div>
                                    <div>Cơ xương khớp 1</div>
                                </div>
                                <div className="section-img--customize">
                                    <div class="section-img section-specialty"></div>
                                    <div>Cơ xương khớp 1</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);


