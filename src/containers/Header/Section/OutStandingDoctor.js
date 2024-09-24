import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import './OutStandingDoctor.scss';

class OutStandingDoctor extends Component {
    render() {
        return (
            <div className="out-standing-doctor section-header">
                <div className="container">
                    <div className="section-content">
                        <div className="section-header">
                            <span className="section-header--title">
                                Bác sĩ nổi bật tuần vừa qua
                            </span>
                            <button className="section-header--button">
                                Xem thêm
                            </button>
                        </div>
                        <div className="section-body">
                            <Slider {...this.props.settings}>
                                <div className="section-img--customize">
                                    <div class="section-img section-out-standing-doctor"></div>
                                    <div>Bác sĩ Phạm Hữu Phúc 1</div>
                                </div>
                                <div className="section-img--customize">
                                    <div class="section-img section-out-standing-doctor"></div>
                                    <div>Bác sĩ Phạm Hữu Phúc 2</div>
                                </div>
                                <div className="section-img--customize">
                                    <div class="section-img section-out-standing-doctor"></div>
                                    <div>Bác sĩ Phạm Hữu Phúc 3</div>
                                </div>
                                <div className="section-img--customize">
                                    <div class="section-img section-out-standing-doctor"></div>
                                    <div>Bác sĩ Phạm Hữu Phúc 4</div>
                                </div>
                                <div className="section-img--customize">
                                    <div class="section-img section-out-standing-doctor"></div>
                                    <div>Bác sĩ Phạm Hữu Phúc 5</div>
                                </div>
                                <div className="section-img--customize">
                                    <div class="section-img section-out-standing-doctor"></div>
                                    <div>Bác sĩ Phạm Hữu Phúc 6</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
