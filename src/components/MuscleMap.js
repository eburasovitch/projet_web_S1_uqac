import React, { useState } from "react";
import { ReactComponent as MuscleSVG } from "../assets/image_muscle.svg";
import { ReactComponent as MuscleFaceSVG } from "../assets/image_muscle_face.svg";
import muscleData from "../data/muscleData";

const MuscleMap = () => {
  const [selectedMuscle, setSelectedMuscle] = useState(null);

  const handleMuscleClick = (e) => {
    const muscleId = e.target.getAttribute("id");
    if (muscleId) {
      setSelectedMuscle(muscleId);
    }
  };

  const closePopup = () => {
    setSelectedMuscle(null);
  };

  return (
    <div className="muscle-page">
      <header>
        <h1 className="page-title" style={{fontSize: "3rem",fontWeight: "bold", }}> Carte des Muscles</h1>
        <h4 style={{ textAlign: "center" }}>
          Vous ressentez une gêne ou une douleur ? Ou bien, vous souhaitez juste
          mieux préparer vos entraînements ?<br></br> Découvrez comment bien
          échauffer vos muscles pour prévenir les blessures et améliorer vos
          performances.
        </h4>
      </header>

      <main>
        <section>
          <h2>Comment ça marche ?</h2>
          <p>
            Sélectionnez simplement le groupe musculaire qui vous intéresse. Que
            ce soit pour éviter une blessure ou mieux cibler un échauffement,
            chaque muscle a ses spécificités.
          </p>
        </section>

        <section>
          <h2>Les muscles en focus</h2>
          <p>
            Voici les groupes musculaires que nous prenons en charge dans cette
            carte interactive :
          </p>
          <ul>
            <li>Épaules</li>
            <li>Biceps</li>
            <li>Torse</li>
            <li>Abdominaux</li>
            <li>Quadriceps</li>
            <li>Mollets</li>
            <li>Avant-bras</li>
          </ul>
        </section>

        <section>
          <p>
            Important : Ces recommandations ne remplacent pas un avis médical.
            En cas de douleur persistante, prenez rendez-vous avec un
            professionnel de santé.
          </p>
        </section>

        {/* Section avec les deux SVG côte à côte */}
        <section className="interactive-section">
          <div className="svg-container">
            <MuscleSVG onClick={handleMuscleClick} />
            <MuscleFaceSVG onClick={handleMuscleClick} />
          </div>
        </section>
      </main>

      {selectedMuscle && (
        <div className="popup">
          <h2>{muscleData[selectedMuscle]?.name || "Muscle inconnu"}</h2>
          <p>
            {muscleData[selectedMuscle]?.description ||
              "Pas d'informations disponibles."}
          </p>
          <ul>
            {muscleData[selectedMuscle]?.tips?.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
          {muscleData[selectedMuscle]?.video && (
            <div className="video-container">
              <iframe
                width="100%"
                height="315"
                src={muscleData[selectedMuscle].video}
                title="Vidéo d'échauffement"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          <button className="close-button" onClick={closePopup}>
            Fermer
          </button>
        </div>
      )}

      {selectedMuscle && <div className="overlay" onClick={closePopup}></div>}
    </div>
  );
};

export default MuscleMap;
