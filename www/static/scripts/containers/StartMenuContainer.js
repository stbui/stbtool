import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import StartMenu from '../components/StartMenu';


class StartMenuContainer extends Component {
    render() {
        return <StartMenu {...this.props} />;
    }
}


function mapStateToProps(state) {
    const {applists, startmenu,authed} = state;

    return {
        applists,
        startmenu,
        authed
    }
}

export default connect(mapStateToProps)(StartMenuContainer);
