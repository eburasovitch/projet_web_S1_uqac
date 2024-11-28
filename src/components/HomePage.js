import React from "react";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Image de fond */}
      <div className="background-image">
        <h1>Découvre les Mouvements SBD</h1>
      </div>

      {/* Trois carrés blancs */}
      <div className="card-container">
        <div className="card">
          <h2>Squat</h2>
          <p>Apprenez les bonnes techniques pour réaliser un Squat parfait.</p>
        </div>
        <div className="card">
          <h2>Bench Press</h2>
          <p>Découvrez les meilleures pratiques pour un Bench Press efficace.</p>
        </div>
        <div className="card">
          <h2>Deadlift</h2>
          <p>Maîtrisez les techniques du Deadlift pour maximiser vos gains.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
