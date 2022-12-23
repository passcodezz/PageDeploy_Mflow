import logo from './logo.svg';
import './App.css';
import Lottie from "lottie-react";
import Process from "./process.json"
import Background from "./background.json"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Lottie
                          className="lg:w-1/4 m-8 sm:m-10 lg:m-5"
                          // className="w-20 h-20 -my-10 "
                          loop={true}
                          animationData={Process}
                        />
                        <h3 className='text-4xl text-red-600'>ขออภัยในความไม่สะดวก</h3>
        <p >
          เนื่องจากจะมีการปิดปรับปรุงระบบเพื่อเพิ่มประสิทธิภาพการให้บริการ
        </p>
        {/* <p>
          เพื่อเพิ่มประสิทธิภาพการให้บริการ
        </p> */}
       {/* <Lottie
            loop={false}
            animationData={Background}
            // title="konklom"
            style={{
          
              width: "40%",
              zIndex: 1,
              overflow: "hidden",
              position: "fixed",
            }}
          /> */}
      </header>
    </div>
  );
}

export default App;
