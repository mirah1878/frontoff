import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListAnnonce = () => {
    const [annonces, setAnnonces] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://0801241705-production.up.railway.app/annonce/valide', {
                    method: 'GET',
                });
                const data = await response.json();
                if (response.ok) {
                    setAnnonces(data);
                    console.log("data : ", data);
                    console.log("Annonces mises à jour avec succès !");
                    
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
                    {annonces.map((listAnnonce) => (
                        <div className="col mb-4" key={listAnnonce.id}>
                            <div>
                            {listAnnonce.voiture.photo.map((photo, i) => {
                                if(i === 0) {
                                    return (
                                        <img
                                            key={i} // La clé est définie ici, en dehors des balises
                                            className="rounded img-fluid shadow w-100 fit-cover"
                                            src={photo.encoded}
                                            style={{ height: '250px' }}
                                            alt={listAnnonce.voiture.nom}
                                        />
                                    );
                                }
                                return null;
                            })}
                                <div className="py-4">
                                    <span className="badge bg-primary mb-2">ajouter favoris</span>
                                    <Link to = "/Message">
                                    <span className="badge bg-primary mb-2" style={{ marginLeft: '301px' }}>C</span>
                                    </Link>
                                    <h4 className="fw-bold">{listAnnonce.voiture.nom}</h4>
                                    <p>{listAnnonce.voiture.photo.id}</p>
                                    <h4 className="text-muted">{listAnnonce.prix} Ariary</h4>
                                    <Link onClick={() => setShowDetail(!showDetail)}>
                                        <span className="badge bg-primary mb-2">voir detail</span>
                                    </Link>
                                    {showDetail && (
                                        <>
                                            <p className="text-muted"><b>Marque:</b> {listAnnonce.voiture.marque.nom}</p>
                                            <p className="text-muted"><b>Categorie:</b>  {listAnnonce.voiture.categorie.nom}</p>
                                            <p className="text-muted"><b>Model: </b>{listAnnonce.voiture.modele.nom}</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ListAnnonce;
