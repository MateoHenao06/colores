import { useState } from "react";
import Swal from "sweetalert2";
import { Header } from "./layouts/Header/Header";
import { Footer } from "./layouts/Footer/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [color, setColor] = useState("#FFFFFF");
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const coloresAbsolutos = [
    "#FF0000", 
    "#00FF00", 
    "#0000FF", 
    "#FFFF00", 
    "#FF00FF", 
    "#00FFFF", 
    "#000000", 
    "#FFFFFF", 
    "#808080", 
    "#800000", 
    "#808000", 
    "#800080", 
    "#008080", 
    "#C0C0C0", 
    "#FFA500", 
    "#A52A2A"
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setColor(darkMode ? "#FFFFFF" : "#000000");
  };

  const generateColor = () => {
    const randomColor = coloresAbsolutos[Math.floor(Math.random() * coloresAbsolutos.length)];
    setColor(randomColor);
    Swal.fire({
      title: "Color elegido",
      text: randomColor,
      icon: "info",
      background: randomColor,
      color: randomColor === "#000000" ? "white" : "black",
    });
  };

  const startCounter = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const stopCounter = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setCount(0);
  };

  return (
    <>
    <Header/>
      <div className={`min-h-screen w-full flex flex-col items-center justify-center text-${darkMode ? "white" : "black"}`} style={{ backgroundColor: color }}>
        <button onClick={toggleDarkMode} className="mb-4 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-blue-400">
          {darkMode ? "Modo Light" : "Modo Dark"}
        </button>

        <div className="flex space-x-4 mb-4">
          <button onClick={() => setLikes(likes + 1)} className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-blue-400">
            👍({likes})
          </button>
          <button onClick={() => setDislikes(dislikes + 1)} className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-blue-400">
            👎({dislikes})
          </button>
        </div>

        <button onClick={generateColor} className="mb-4 px-4 py-2 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-blue-400">
          Generar Color
        </button>

        <div className="flex space-x-4">
          <button onClick={startCounter} className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-blue-400">
            Iniciar
          </button>
          <button onClick={stopCounter} className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-blue-400">
            Parar
          </button>
        </div>

        <p className="mt-4 text-lg">Tiempo: {count} s</p>
      </div>
    <Footer/>
    </>
  );
}


