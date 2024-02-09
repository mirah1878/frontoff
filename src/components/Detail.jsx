import React from 'react';
import { Link } from 'react-router-dom';

const Detail = () => {
  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 className="fw-bold">VAIKA MILAY</h2>
            <p className="text-muted">Une voiture, c'est comme un tableau, il faut la choisir en fonction de ce qu 'elle nous inspire</p>
          </div>
        </div>
        <div className="row g-0 row-cols-1 row-cols-md-2 row-cols-xl-3 d-flex align-items-md-center align-items-xl-center">
          <div className="col offset-xl-2 mb-4">
            <div className="card bg-light border-light">
              <div className="card-body p-4">
                <img style={{ width: '408px', height: '303px' }} alt="Placeholder" />
              </div>
            </div>
          </div>
          <div className="col mb-4" style={{ marginTop: '96px', width: '455px', height: '57.4px' }}>
            <p style={{ marginTop: '-169px', marginLeft: '35px', fontSize: '27px', fontFamily: 'Inter, sans-serif', fontWeight: 'bold' }}>Land cruiser lc 300</p>
            <p style={{ marginLeft: '34px' }}>Toyota</p>
            <p style={{ marginLeft: '34px', '--bs-body-font-size': '0rem', fontWeight: 'bold', marginTop: '7px' }}>$ 200</p>
            <p style={{ marginLeft: '34px' }}>Puissance</p>
            <p style={{ marginLeft: '34px' }}>Puissance</p>
            <Link to="#" className="btn btn-primary" style={{ marginTop: '28px', marginLeft: '29px' }}>Contacter le vendeur</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;
