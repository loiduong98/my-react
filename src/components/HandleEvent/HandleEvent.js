import React, { Component } from 'react'

export default class HandleEvent extends Component {
    showMess = () => {
        console.log('hahaha');

    }
    render() {
        return (
            <div>
                //Cách 1: định nghĩa function trực tiếp
                {/* <button id="btn" className="btn btn-primary" onClick={()=>{
                    alert('Hello Loi Duong')
                }}>Click me</button> */}
                
            </div>
        )
    }
}
