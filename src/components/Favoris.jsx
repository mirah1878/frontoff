import React, { useState, useEffect } from 'react';

const Favoris = () => {
    const token = sessionStorage.getItem('token');
    const [favoris, setFavoris] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://0801241705-production.up.railway.app/favoris/mine', {
                    method: 'GET',
                    headers: {
                        'Authorization' : 'Bearer ' + token,
                        'Content-Type': 'application/json'
                    },    
                });

                const data = await response.json();
                if (response.ok) {
                    setFavoris(data);
                    console.log("data : ",data);
                } else {
                    alert("mila mlog");
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchData();
    }, [token]);

  return (
    <section className="py-5">
        <div className="container py-5">
            <div className="row mx-auto">
            {favoris.map((favori,index) => (
                <div key={index} className="col">
                    <div style={{ width: '150px', height: '120px' }}>
                        {/*<img style={{ width: '134px', height: '118px' }} src="" alt="Description de votre image" />*/}
                    </div>
                    <div style={{ width: '200px', height: '41px', marginLeft: '311px' }}>
                        <p style={{ marginTop: '-124px', fontWeight: 'bold', width: '200px' }}>{favori.annonce.voiture.nom}</p>
                    </div>
                    <div style={{ width: '200px', height: '41px', marginLeft: '311px' }}>
                        <p>Toyota</p>
                    </div>
                    <div style={{ width: '200px', height: '0px', marginLeft: '729px', marginTop: '0px' }}>
                        <button className="btn btn-primary" type="button" style={{ background: 'rgb(60,81,153)', borderRadius: '14px' }}>delete</button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </section>
  );
}

export default Favoris;
