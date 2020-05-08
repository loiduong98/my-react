import React, { Component } from 'react'
import phimData from '../../data/data.json'

export default class BaiTapVongLap extends Component {

    renderSanPham = () => {
        return phimData.map((sp, index) => {
            return (<div className="card text-center col-4" key={index}>
                <img className="card-img-top" src={sp.hinhAnh} width={250} height={300} alt />
                <div className="card-body">
                    <h4 className="card-title">{sp.tenPhim}</h4>
                    <p className="card-text">{sp.moTa.length > 100 ? sp.moTa.substr(0, 100) + '...' : sp.moTa}</p>
                </div>
            </div>
            )
        })
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {this.renderSanPham()}
                    </div>
                </div>
            </div>
        )
    }
}
