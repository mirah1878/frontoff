import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListAnnonce = () => {
    const [annonces, setAnnonces] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://0801241705-production.up.railway.app/annonce', {
                    method: 'GET',
                });
                const data = await response.json();
                if (response.ok) {
                    setAnnonces(data);
                    console.log("data : "+data);
                    console.log("set annonce : "+setAnnonces(data));
                } else {
                    alert(data.message);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchData();
    }, []);

    const [showDetail, setShowDetail] = useState(false);

    return (
        <section className="py-5">
            <div className="container py-5">
                <div className="row mb-5">
                    <div className="col-md-8 col-xl-6 text-center mx-auto">
                        <h2 className="fw-bold">
                            <strong><span style={{ color: 'rgba(0, 0, 0, 0.9)' }}>VAIKA MILAY</span></strong>
                        </h2>
                        <p className="text-muted">Une voiture, c'est comme un tableau, il faut la choisir en fonction de ce qu 'elle nous inspire</p>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 mx-auto" style={{ maxWidth: '900px' }}>
                    <div className="col mb-4">
                        <div>
                                <img className="rounded img-fluid shadow w-100 fit-cover" style={{ height: '250px' }} />
                            <div className="py-4">
                                <span className="badge bg-primary mb-2">ajouter favoris</span>
                                <Link onClick={() => setShowDetail(!showDetail)}>
                                    <span className="badge bg-primary mb-2">voir detail</span>
                                </Link>
                                {showDetail && (
                                    <>
                                        <h4 className="fw-bold">Prix</h4>
                                        <p className="text-muted">Description</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ListAnnonce;
