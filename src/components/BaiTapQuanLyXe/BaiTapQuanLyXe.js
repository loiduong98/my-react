import React, { Component } from 'react'
import DanhSachXe from './DanhSachXe';
import ModalXe from './ModalXe';


export default class BaiTapQuanLyXe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chiTietXe:{ maSP: 1, tenSP: 'Black car', hinhAnh: './img/black-car.jpg', gia: 1000 }
        }
    }
    mangSP = [

        { maSP: 1, tenSP: 'Black car', hinhAnh: './img/black-car.jpg', gia: 1000 },

        { maSP: 2, tenSP: 'Red car', hinhAnh: './img/red-car.jpg', gia: 2000 },

        { maSP: 3, tenSP: 'Silver car', hinhAnh: './img/silver-car.jpg', gia: 3000 },

        { maSP: 4, tenSP: 'Steel car', hinhAnh: './img/steel-car.jpg', gia: 3000 }

    ];
    xemChiTiet = (xe) => {
        this.setState({
            chiTietXe:xe
        })
    }
    
    render() {
        return (
            <div className="container">
                <h3>Danh sách sản phẩm</h3>
                    <DanhSachXe mangSP={this.mangSP} xemChiTiet={this.xemChiTiet}/>
                    <ModalXe chiTiet={this.state.chiTietXe}/>
            </div>
        )
    }
}
