// Author: Benjamin DeZutti
// Web Programming - Summer 2024

import "./Makefit.css";
const MakeFit =() => {
  return (
    <div className="fit">
      <div>
        <h1> Put the fit together! </h1>
      </div>

      <div className="shirt">
        <button> Upload shirt </button>
      </div>

      <div className="pants">
        <button> Upload pants  </button>
      </div>

      <div className="shoes">
        <button> Upload shoes </button>
      </div>
    </div>
  );
}

export default MakeFit