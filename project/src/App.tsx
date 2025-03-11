import React from 'react';
import Navbar from './components/Navbar';
import Scene3D from './components/Scene3D';

function App() {
  return (
    <div className="relative">
      <Navbar />
      
      <main className="relative min-h-screen">
        <div className="absolute inset-0">
          <Scene3D />
        </div>
        
        <div className="relative z-10 pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-white mb-6">
              Découvrez l'art contemporain Tunisien
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Le Musée d'Art Contemporain Tunisien vous invite à explorer une collection unique 
              d'oeuvres d'art qui reflètent la richesse de la culture Tunisienne. Plongez dans 
              un voyage visuel et découvrez des artistes émergents et établis.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-100">
                Explorer
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;