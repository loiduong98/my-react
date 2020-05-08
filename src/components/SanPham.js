import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" src="./img/sp_iphoneX.png" alt width="250" height="250" />
                    <div className="card-body text-center">
                        <h4 className="card-title">Iphone X</h4>
                        <p className="card-text">iPhone X features a new all-screen design. Face ID, which makes your face your password</p>
                        <button className="btn btn-primary">Detail</button>
                        <button className="btn btn-danger">Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}
