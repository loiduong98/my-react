import React from 'react';
import './App.css';
import Header from './components/Header';
import Carosel from './components/Carosel';
import DanhSachSanPham from './components/DanhSachSanPham';
import Footer from './components/Footer';
import DataBinding from './Databinding/DataBinding';
import HandleEvent from './components/HandleEvent/HandleEvent';
import StateDemo from './components/StateDemo';
import BaiTapState from './components/BaiTapState/BaiTapState';
import BaiTapVongLap from './components/VongLap/BaiTapVongLap';
import RenderWithMap from './RenderWithMap';




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
      <BaiTapVongLap/>
      {/* <RenderWithMap/> */}
    </div>
  );
}
export default App;
