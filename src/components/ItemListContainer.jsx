import React from 'react';
import Velas1 from '../assets/img/Velas1.jpeg';
import Velas2 from '../assets/img/Velas2.jpeg';
import Velas3 from '../assets/img/Velas3.jpeg';
import Caramelera1 from '../assets/img/caramelera1.jpg';
import Caramelera2 from '../assets/img/caramelera2.jpg';
import Caramelera3 from '../assets/img/caramelera3.jpg';
import Bandeja1 from '../assets/img/bandeja1.jpg';
import Bandeja2 from '../assets/img/bandeja2.jpg';
import Bandeja3 from '../assets/img/bandeja3.jpg';

export const ItemListContainer = () => {
  return (
    <main className="warm-background">
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Catalogo de velas</h1>
            <p className="lead text-body-secondary">Descubre nuestro catálogo de velas, donde encontrarás las más cálidas y delicadas para crear el ambiente perfecto en cualquier ocasión.</p>
          </div>
        </div>
      </section>

      <div className="album py-5 background-grey">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
              <img src={Velas1} alt="Velas 1" className="card-img-top" />
                <div className="card-body">
                  <p className="card-text">"La suave luz de una vela sola puede iluminar todo un espacio con calidez y serenidad."</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
              <img src={Velas2} alt="Velas 2" className="card-img-top" />
                <div className="card-body">
                  <p className="card-text">"En la quietud de la noche, una vela sola es suficiente para traer paz al alma."</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
              <img src={Velas3} alt="Velas 3" className="card-img-top" />
                <div className="card-body">
                  <p className="card-text">"Las velas solas danzan en la penumbra, creando un ambiente íntimo y acogedor."</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
              <img src={Caramelera1} alt="Caramelera 1" className="card-img-top" />
                <div className="card-body">
                  <p className="card-text">"Las velas carameleras añaden un toque dulce a cualquier ocasión, con sus aromas irresistibles."</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
              <img src={Caramelera2} alt="Caramelera2" className="card-img-top" />
                <div className="card-body">
                  <p className="card-text">"Con sus colores vibrantes y deliciosos aromas, las velas carameleras son un verdadero festín para los sentidos."</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
              <img src={Caramelera3} alt="Caramelera3" className="card-img-top" />
                <div className="card-body">
                  <p className="card-text">"Las velas carameleras son como pequeños dulces de luz que endulzan el ambiente y elevan el ánimo."</p>
                </div>
              </div>
              </div>
            <div className="col">
              <div className="card shadow-sm">
              <img src={Bandeja1} alt="Bandeja 1" className="card-img-top" />
                <div className="card-body">
                  <p className="card-text">"Las velas en bandejas agregan un toque de elegancia y sofisticación a cualquier espacio, creando una atmósfera envolvente."</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
              <img src={Bandeja2} alt="Bandeja 2" className="card-img-top" />
                <div className="card-body">
                  <p className="card-text">"Con su diseño cuidadosamente dispuesto en bandejas, estas velas añaden un toque de estilo a cualquier decoración."</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
              <img src={Bandeja3} alt="Bandeja 3" className="card-img-top" />
                <div className="card-body">
                  <p className="card-text">"Las velas en bandejas son una forma encantadora de presentar la luz, añadiendo un toque de glamour a cualquier ocasión especial."</p>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </main>
  );
};
