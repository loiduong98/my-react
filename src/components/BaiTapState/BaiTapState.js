import React, { Component } from 'react'

export default class BaiTapState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urlHinh: './img/red-car.jpg'
        }
    }
    changeColor = (color) => {
        let img = '';
        switch (color) {
            case 'red':
                img = './img/red-car.jpg'
                break;
            case 'silver':
                img = './img/silver-car.jpg'
                break;
            case 'black':
                img = './img/black-car.jpg'
                break;
            case 'grey':
                img = './img/steel-car.jpg'
                break;
        }
        this.setState({
            urlHinh: img
        })
    }
    render() {
        let styleColor = { cursor: 'pointer' }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h3>Mời bạn chọn màu xe</h3>
                        <img src={this.state.urlHinh} width={500} height={300} />
                    </div>
                    <div className="col-6">
                        <h3>Hãy chọn màu xe</h3>
                        <div className="card text-primary bg-light">
                            <div className="card-body">
                                <div className="row border mt-2">
                                    <div className="col-2 pt-3">
                                        <img src="./img/icon-red.jpg" width={50} height={50} style={styleColor} onClick={() => this.changeColor('red')} />
                                    </div>
                                    <div className="col-10 p-2">
                                        <h4 className="card-title">Màu sơn đỏ</h4>
                                        <p className="card-text">Honda</p>
                                    </div>
                                </div>
                                <div className="row border mt-2">
                                    <div className="col-2 pt-3">
                                        <img src="./img/icon-silver.jpg" width={50} height={50} style={styleColor} onClick={() => this.changeColor('silver')} />
                                    </div>
                                    <div className="col-10 p-2">
                                        <h4 className="card-title">Màu sơn bạc</h4>
                                        <p className="card-text">Honda</p>
                                    </div>
                                </div>
                                <div className="row border mt-2">
                                    <div className="col-2 pt-3">
                                        <img src="./img/icon-black.jpg" width={50} height={50} style={styleColor} onClick={() => this.changeColor('black')} />
                                    </div>
                                    <div className="col-10 p-2">
                                        <h4 className="card-title">Màu sơn đen</h4>
                                        <p className="card-text">Honda</p>
                                    </div>
                                </div>
                                <div className="row border mt-2">
                                    <div className="col-2 pt-3">
                                        <img src="./img/icon-steel.jpg" width={50} height={50} style={styleColor} onClick={() => this.changeColor('grey')} />
                                    </div>
                                    <div className="col-10 p-2">
                                        <h4 className="card-title">Màu sơn xám</h4>
                                        <p className="card-text">Honda</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <button className="btn btn-danger" onClick={()=>this.changeColor('red')}>Màu đỏ</button>
                        <button className="btn btn-secondary" onClick={()=>this.changeColor('silver')}>Màu bạc</button>
                        <button className="btn btn-dark" onClick={()=>this.changeColor('black')}>Màu đen</button>
                        <button className="btn btn-dark" onClick={()=>this.changeColor('grey')}>Màu xám</button> */}
                    </div>
                </div>
            </div>
        )
    }
}
