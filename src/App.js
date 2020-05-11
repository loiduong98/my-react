import React from 'react';
import './App.css';
import Header from './components/Props/Header';
import Carosel from './components/Carosel';
import DanhSachSanPham from './components/DanhSachSanPham';
import Footer from './components/Footer';
import DataBinding from './Databinding/DataBinding';
import HandleEvent from './components/HandleEvent/HandleEvent';
import StateDemo from './components/StateDemo';
import BaiTapState from './components/BaiTapState/BaiTapState';
import BaiTapVongLap from './components/VongLap/BaiTapVongLap';
import RenderWithMap from './RenderWithMap';
import DataPhim from './data/data.json'
import DanhSachPhim from './components/Props/DanhSachPhim';
import BaiTapQuanLyXe from './components/BaiTapQuanLyXe/BaiTapQuanLyXe';



function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Carosel/>
      <DanhSachSanPham/>
      <DanhSachSanPham/>
      <Footer/> */}
      {/* <DataBinding/> */}
      {/* <HandleEvent/> */}
      {/* <StateDemo/> */}
      {/* <BaiTapState/> */}
      {/* <BaiTapVongLap/> */}
      {/* <RenderWithMap/> */}
      {/* <Header title="Haha" logo="./bg.jpg" /> */}
      {/* <DanhSachPhim arrPhim={DataPhim}/> */}
      <BaiTapQuanLyXe/>
    </div>
  );
}
export default App;
