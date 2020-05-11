import React, { Component } from 'react'
import ThongTinXe from './ThongTinXe'

export default class DanhSachXe extends Component {
    renderXe = () => {
        let {mangSP,xemChiTiet} = this.props
        return mangSP.map((sp,index)=> {
            return (<div className="col-3" style={{marginTop:'20px'}} key={index}>
                <ThongTinXe sp={sp} xemChiTiet={xemChiTiet}/>
            </div>)
        })
    }
    render() {
        return (
            <div className="row">
                {this.renderXe()}
            </div>
        )
    }
}
