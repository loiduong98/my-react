import React, { Component } from 'react'

export default class ThongTinXe extends Component {
    render() {
        let { sp,xemChiTiet } = this.props
        return (
            <div className="card text-center">
                <img className="card-img-top" src={sp.hinhAnh} alt />
                <div className="card-body bg-dark text-white">
                    <h4 className="card-title">{sp.tenSP}</h4>
                    <p className="card-text">{sp.gia}</p>
                    <button onClick={()=>xemChiTiet(sp)} className="btn btn-success" data-toggle="modal" data-target="#modelId">Xem chi tiết</button>
                </div>
            </div>
        )
    }
}
