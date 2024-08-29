import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './HomeHeader.scss';
import logo from '../../assets/logo.svg';
import { LANGUAGES } from '../../utils/constant';
import { changeLanguageApp } from '../../store/actions/appActions';

class HomeHeader extends Component {
    handleChangeLanguage = (language) => {
        this.props.changeLanguage(language);
    };

    render() {
        let language = this.props.language;
        return (
            <React.Fragment>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i className="fas fa-bars"></i>
                            <img className="header-logo" src={logo} />
                        </div>
                        <div className="center-content">
                            <div className="child-content">
                                <div className="child-content--title">
                                    <FormattedMessage id="home-header.specialty" />
                                </div>
                                <div className="child-content--desc">
                                    <FormattedMessage id="home-header.search-doctor" />
                                </div>
                            </div>
                            <div className="child-content">
                                <div className="child-content--title">
                                    <FormattedMessage id="home-header.health-facility" />
                                </div>
                                <div className="child-content--desc">
                                    <FormattedMessage id="home-header.select-room" />
                                </div>
                            </div>
                            <div className="child-content">
                                <div className="child-content--title">
                                    <FormattedMessage id="home-header.doctor" />
                                </div>
                                <div className="child-content--desc">
                                    <FormattedMessage id="home-header.select-doctor" />
                                </div>
                            </div>
                            <div className="child-content">
                                <div className="child-content--title">
                                    <FormattedMessage id="home-header.fee" />
                                </div>
                                <div className="child-content--desc">
                                    <FormattedMessage id="home-header.check-health" />
                                </div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="right-content--support">
                                <i className="fas fa-question-circle"></i>
                                <FormattedMessage id="home-header.support" />
                            </div>
                            <div className="right-content--language">
                                <div
                                    className={
                                        language === LANGUAGES.VI
                                            ? 'language-vi active'
                                            : 'language-vi'
                                    }
                                >
                                    <span
                                        onClick={() =>
                                            this.handleChangeLanguage(
                                                LANGUAGES.VI
                                            )
                                        }
                                    >
                                        VI
                                    </span>
                                </div>
                                <div
                                    className={
                                        language === LANGUAGES.EN
                                            ? 'language-en active'
                                            : 'language-en'
                                    }
                                >
                                    <span
                                        onClick={() =>
                                            this.handleChangeLanguage(
                                                LANGUAGES.EN
                                            )
                                        }
                                    >
                                        EN
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-header-banner">
                    <div className="banner-up">
                        <div className="banner-up--title">
                            <FormattedMessage id="banner.title" />
                        </div>
                        <div className="banner-up--sub-title">
                            <FormattedMessage id="banner.sub-title" />
                        </div>
                        <div className="banner-up--search">
                            <i className="fas fa-search"></i>
                            <input
                                type="text"
                                className=""
                                placeholder="Tìm lý do khám bệnh"
                            />
                        </div>
                    </div>
                    <div className="banner-down">
                        <div className="banner-down--options">
                            <div className="options">
                                <div className="options--icon">
                                    <i className="far fa-hospital"></i>
                                </div>
                                <div className="options--title">
                                    <FormattedMessage id="banner.title-icon-1" />
                                </div>
                            </div>

                            <div className="options">
                                <div className="options--icon">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <div className="options--title">
                                    <FormattedMessage id="banner.title-icon-2" />
                                </div>
                            </div>

                            <div className="options">
                                <div className="options--icon">
                                    <i className="fas fa-procedures"></i>
                                </div>
                                <div className="options--title">
                                    <FormattedMessage id="banner.title-icon-3" />
                                </div>
                            </div>

                            <div className="options">
                                <div className="options--icon">
                                    <i className="fas fa-flask"></i>
                                </div>
                                <div className="options--title">
                                    <FormattedMessage id="banner.title-icon-4" />
                                </div>
                            </div>

                            <div className="options">
                                <div className="options--icon">
                                    <i className="fas fa-user-md"></i>
                                </div>
                                <div className="options--title">
                                    <FormattedMessage id="banner.title-icon-5" />
                                </div>
                            </div>

                            <div className="options">
                                <div className="options--icon">
                                    <i className="fas fa-briefcase-medical"></i>
                                </div>
                                <div className="options--title">
                                    <FormattedMessage id="banner.title-icon-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguage: (language) => dispatch(changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
