import React, { Component } from 'react'

export default class Film extends Component {
    render() {
        let { phim } = this.props
        return (
            <div className="card text-center ">
                <img className="card-img-top" src={phim.hinhAnh} width={250} height={300} alt />
                <div className="card-body bg-dark text-white">
                    <h4 className="card-title">{phim.tenPhim}</h4>
                    <p className="card-text">{phim.moTa.length > 60 ? phim.moTa.substr(0, 100) + '...' : phim.moTa}</p>
                </div>
            </div>

        )
    }
}
