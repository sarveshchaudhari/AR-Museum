import React from 'react';
import img1 from '../images/img1.jpg';

export default function Home() {
  const imgStyle = {
    width: "100%",
    height: "calc(100vh - 190px)", 
    objectFit: "cover"
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <h3 className='py-3 text-center bg-light'>Virtual Museum</h3>
      
      <div className='flex-grow-1'>
        <div id="carouselExampleControls" className="carousel slide h-100" data-bs-ride="carousel">
          <div className="carousel-inner h-100">
            <div className="carousel-item active h-100">
              <img src={img1} style={imgStyle} className="d-block w-100" alt="Click 1" />
            </div>
            <div className="carousel-item h-100">
              <img src={img1} style={imgStyle} className="d-block w-100" alt="Click 2" />
            </div>
            <div className="carousel-item h-100">
              <img src={img1} style={imgStyle} className="d-block w-100" alt="Click 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container-fluid py-4 bg-light">
        <div className="row g-4">
          {[
            { title: "Learn", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, facilis." },
            { title: "Explore", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, omnis." },
            { title: "Gain Knowledge", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, atque." },
            { title: "Enjoy", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, atque." }
          ].map((card, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}