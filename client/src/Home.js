import { faBell, faChartBar, faCog, faFileAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./component/common/NavBar";

const AdminDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Barre de navigation */}
        <NavBar />

        {/* Sidebar */}
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/add-students" className="nav-link">
                  <FontAwesomeIcon icon={faUser} /> Ajouter Nouveau Étudiants
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/view-students" className="nav-link">
                  <FontAwesomeIcon icon={faUser} /> Voir Tous les Étudiants
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/settings" className="nav-link">
                  <FontAwesomeIcon icon={faCog} /> Paramètres
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/reports" className="nav-link">
                  <FontAwesomeIcon icon={faFileAlt} /> Rapports
                </Link>
              </li>
              {/* Ajoutez d'autres liens de menu au besoin */}
            </ul>
          </div>
        </nav>

        {/* Contenu principal */}
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">
              
            </h1>
          </div>

          {/* Contenu de la page */}
          <div>
            
            {/* Section Statistiques */}
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <FontAwesomeIcon icon={faChartBar} />
                    <h3>Statistiques Générales</h3>
                    <p>Total d'étudiants inscrits : 500</p>
                    <p>Moyenne des notes : 85%</p>
                    {/* Ajoutez des graphiques ou des données statistiques ici */}
                  </div>
                </div>
              </div>
            </div>

            {/* Autres Sections */}
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h3>Section 1</h3>
                    <p>Cette section contient des informations importantes.</p>
                    <button className="btn btn-primary">Cliquez ici</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h3>Section 2</h3>
                    <p>Découvrez les dernières mises à jour et annonces.</p>
                    <FontAwesomeIcon icon={faBell} /> Nouvelles annonces
                  </div>
                </div>
              </div>
            </div>

            {/* Nouvelles Sections */}
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <FontAwesomeIcon icon={faCog} />
                    <h3>Paramètres</h3>
                    <p>Personnalisez les paramètres de votre tableau de bord.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <FontAwesomeIcon icon={faFileAlt} />
                    <h3>Rapports</h3>
                    <p>Consultez les rapports générés par le système.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
