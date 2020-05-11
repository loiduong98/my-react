import React, { Component } from 'react'
import Film from './Film'


export default class DanhSachPhim extends Component {
    //Sự khác biệt giữa state và props
    //State dùng để lưu trữ các giá trị thay đổi trong component
    //Props dùng để nhận giá trị từ component cha truyền vào và không thể gán lại giá trị
    renderPhim = () => {
        let {arrPhim} = this.props
        return arrPhim.map((phim,index)=> {
            return (<div className="col-4" key={index}>
            <Film phim={phim}/>
        </div>)
        })
    }
    render() {
        return (
            <div className="container">
                <h3>Danh sách phim</h3>
                <div className="row">
                    {this.renderPhim()}
                </div>
            </div>
        )
    }
}
