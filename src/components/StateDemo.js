import React, { Component } from 'react'

export default class StateDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            name: 'Lợi'
        }
    }
    renderContent = () => {
        if (this.status) {
            return <h1>Hello {this.state.name} !!! <button onClick={()=>this.logout()}>Đăng xuất</button></h1>
        }
        return <button onClick={() => this.login()}>Đăng nhập</button>
    }
    login = () => {
        this.status = true;
        this.name = 'Lợi Dương'
        this.setState({
            //status: true
            //name: 'Lợi Dương'
            status: this.status,
            name: this.name
        },()=> {
            console.log(this.status);
            
        })
    }
    logout = () => {
        this.status = false;
        this.setState({
            status: this.status
        },()=> {
            console.log(this.status);
            
        })
    }
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}
