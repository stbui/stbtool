import React, {Component, PropTypes} from 'react';

import {fetchProxys, fetchProxysAdd, fetchProxysDel} from '../actions/app';


class Proxy extends Component {
    constructor(props) {
        super(props);

        // const {dispatch} = props;
        // dispatch(fetchProxys());

        this.onHandleAddProxyClick = this.onHandleAddProxyClick.bind(this);
        this.onHandleDelProxyClick = this.onHandleDelProxyClick.bind(this);


        this.state = {
            isRer: false
        }
    }

    componentDidMount() {
    }

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(fetchProxys());
    }

    componentWillReceiveProps() {
    }

    shouldComponentUpdate() {
        return true;
    }

    componentWillUpdate() {
    }

    onHandleAddProxyClick() {
        let ip = this.refs.ip.value;
        let domain = this.refs.domain.value;
        let hosts = `target=${ip}&source=${domain}`

        const {dispatch} = this.props;
        dispatch(fetchProxysAdd(hosts));


        this.setState({isRe: true})
    }

    onHandleDelProxyClick(e) {
        let id = e.target.getAttribute('id');

        const {dispatch} = this.props;
        dispatch(fetchProxysDel(id));


        this.setState({isRe: true})
    }

    renderContent() {
        const {proxys} = this.props;
        const data = proxys.items;
        let result = [];

        data.map((value, key)=> {
            result.push(
                <tr key={key}>
                    <td>{value.target}</td>
                    <td>{value.source}</td>
                    <td style={{'cursor': 'default'}} id={value.id} onClick={this.onHandleDelProxyClick}>x</td>
                </tr>
            );
        });

        return result;
    }

    render() {

        return (
            <table className="table">
                <thead>
                <tr>
                    <th>IP</th>
                    <th>域名</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {this.renderContent()}
                <tr>
                    <td><input className="form-control" ref="ip" type="text"/></td>
                    <td><input className="form-control" ref="domain" type="text"/></td>
                    <td style={{'cursor': 'default'}} onClick={this.onHandleAddProxyClick}>√</td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default Proxy;










