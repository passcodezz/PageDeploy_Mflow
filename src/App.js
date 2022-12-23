import logo from './logo.svg';
import './App.css';
import Lottie from "lottie-react";
import Process from "./process.json"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Lottie
                          className="lg:w-1/4 m-8 sm:m-10 lg:m-5"
                          loop={true}
                          animationData={Process}
                        />
                        <h3 className='text-4xl text-red-600'>ขออภัยในความไม่สะดวก</h3>
        <p >
          เนื่องจากจะมีการปิดปรับปรุงระบบเพื่อเพิ่มประสิทธิภาพการให้บริการ
        </p>
      </header>
    </div>
  );
}

export default App;
