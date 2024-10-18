import React from 'react';
import img1 from '../images/img1.jpg';
import icon from '../images/image.png';

export default function Home() {
  const imgStyle = {
    width: '100%',
    height: 'calc(100vh - 190px)', // Adjust height to fit the screen size while accounting for padding/margins
    objectFit: 'cover', // Ensures the image maintains aspect ratio
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Carousel Section */}
      <div className="flex-grow-1">
        <div id="carouselExampleControls" className="carousel slide h-100" data-bs-ride="carousel">
          <div className="carousel-inner h-100">
            {/* First Image */}
            <div className="carousel-item active h-100">
              <img src={img1} style={imgStyle} className="d-block w-100" alt="Click 1" />
            </div>
            {/* Second Image */}
            <div className="carousel-item h-100">
              <img src={img1} style={imgStyle} className="d-block w-100" alt="Click 2" />
            </div>
            {/* Third Image */}
            <div className="carousel-item h-100">
              <img src={img1} style={imgStyle} className="d-block w-100" alt="Click 3" />
            </div>
          </div>
          {/* Carousel Controls */}
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

      {/* Information Cards Section */}
      <div className="container-fluid py-4 bg-light" style={{ paddingBottom: '100px' }}> {/* Added extra padding */}
        <div className="row g-4">
          {/* Web-AR Experience Section with Icon */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                {/* Inserted Icon before the text */}
                <img src={icon} alt="Icon" style={{ width: '30px', marginRight: '10px' }} />
                <h5 className="card-title">Web-AR Experience</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, facilis.</p>
              </div>
            </div>
          </div>

          {/* Other Cards */}
          {[
            { title: 'Learn', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, facilis.' },
            { title: 'Explore', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, omnis.' },
            { title: 'Gain Knowledge', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, atque.' }
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
