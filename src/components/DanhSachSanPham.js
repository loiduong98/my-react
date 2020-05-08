import React, { Component } from 'react'
import SanPham from './SanPham'

export default class DanhSachSanPham extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h3>SMARTPHONE</h3>
                <div className="row">
                    <div className="col-3">
                        <SanPham/>
                    </div>
                    <div className="col-3">
                        <SanPham />
                    </div>
                    <div className="col-3">
                        <SanPham />
                    </div>
                    <div className="col-3">
                        <SanPham />
                    </div>
                </div>
            </div>
        )
    }
}
