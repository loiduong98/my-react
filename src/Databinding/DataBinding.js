import React, { Component } from 'react'

export default class DataBinding extends Component {
    title = 'Hello Cybersoft'
    renderTitle = () => {
    return <h1>{this.title}</h1>
    }
    render() {
        //Biến title
        const title = 'Cybersoft'
        const hocVien = { ma: 1, tenHV: 'Loi' }
        const renderImg = () =>{
            return <img width="250" height="250" src="https://zicxa.com/hinh-anh/wp-content/uploads/2020/02/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-v%E1%BB%81-Nh%E1%BA%ADt-B%E1%BA%A3n-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-10.jpg"/>
        }
        return (
            <div>
                <h3>{this.title}</h3>
                <p id="txt">{title}</p>
                {this.renderTitle()}
                <ul>
                    <li>Mã: {hocVien.ma}</li>
                    <li>Tên: {hocVien.tenHV}</li>
                </ul>
                <div className="container">{renderImg()}</div>
            </div>
        )
    }
}
