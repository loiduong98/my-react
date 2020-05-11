import React, { Component } from 'react'

export default class ModalXe extends Component {
    render() {
        let { chiTiet } = this.props
        return (
            <div>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" style={{width:'800px'}}>
                            <div className="modal-header">
                                <h5 className="modal-title">Thông tin chi tiết</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container-fluid">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Mã sản phẩm</th>
                                                <th>Hình ảnh</th>
                                                <th>Tên sản phẩm</th>
                                                <th>Giá bán</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{chiTiet.maSP}</td>
                                                <td><img src={chiTiet.hinhAnh} width={100} height={100}/></td>
                                                <td>{chiTiet.tenSP}</td>
                                                <td>{chiTiet.gia}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
