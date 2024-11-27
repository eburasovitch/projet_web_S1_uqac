import React, { useState } from "react";
import "../Modal.css";

const DeadliftPage = () => {
  const [isQuizzOpen, setIsQuizzOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");

  const openQuizz = () => {
    setIsQuizzOpen(true);
    setFeedback("");
    setSelectedAnswer(null);
  };

  const closeQuizz = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsQuizzOpen(false);
    }, 500);
  };

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedAnswer === "correct") {
      setFeedback("Bonne réponse ! 🎉");
    } else {
      setFeedback("Mauvaise réponse. Essayez encore !");
    }
  };

  return (
    <div className="deadlift-page">
      {/* Section avec le fond en image */}
      <div className="header-section">
        <h1 className="page-title">Deadlift</h1>
        <p className="header-description">
          Apprenez la technique correcte pour le deadlift et maximisez vos
          performances tout en minimisant les risques de blessures.
        </p>
      </div>

      {/* Section principale avec fond blanc */}
      <div className="content-section">
        {/* Texte à gauche et vidéo à droite */}
        <div className="content-row">
          <div className="text">
            <h2>Importance du Deadlift</h2>
            <p>
              Le deadlift est l'un des exercices les plus complets qui permet de
              travailler simultanément de nombreux groupes musculaires,
              notamment le dos, les jambes, et les abdominaux.
            </p>
            <p>
              Une bonne technique est essentielle pour maximiser les bénéfices
              tout en évitant les blessures.
            </p>
          </div>
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID_1"
              title="Vidéo Deadlift 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Texte entre les vidéos */}
        <div className="text-between">
          <h2>Muscles Sollicités par le Deadlift</h2>
          <p>
            Le deadlift sollicite une grande variété de muscles, ce qui en fait
            un exercice incontournable dans tout programme de musculation. Voici
            les principaux groupes musculaires impliqués :
          </p>
          <ul>
            <li>
              <strong>Muscles du dos :</strong> Les érecteurs spinaux jouent un
              rôle crucial pour maintenir la colonne vertébrale droite tout au
              long du mouvement.
            </li>
            <li>
              <strong>Muscles des jambes :</strong> Les quadriceps, les
              ischio-jambiers et les mollets sont activés pour la poussée et la
              stabilisation pendant la montée.
            </li>
            <li>
              <strong>Fessiers :</strong> Les muscles fessiers sont fortement
              sollicités pour l'extension des hanches, ce qui est essentiel dans
              la phase finale du mouvement.
            </li>
            <li>
              <strong>Muscles des bras et des épaules :</strong> Bien que les
              bras ne bougent pas activement, les avant-bras et les trapèzes
              stabilisent la barre pour garantir un mouvement sécurisé.
            </li>
            <li>
              <strong>Muscles abdominaux :</strong> Les muscles profonds du
              tronc, comme le transverse et les obliques, jouent un rôle crucial
              dans la stabilisation.
            </li>
          </ul>
          <p>
            Grâce à cette large activation musculaire, le deadlift améliore non
            seulement la force, mais aussi l’équilibre et la coordination. Une
            exécution correcte est essentielle pour éviter les blessures et
            optimiser les résultats.
          </p>

          {/* Image des muscles sollicités */}
          <div className="muscle-image">
            <img
              src="/assets/deadlift_muscle.jpg"
              alt="Muscles sollicités lors du deadlift"
            />
            <p
              style={{textAlign: "center"}}>
              Illustration des muscles sollicités lors d’un deadlift. Notez
              l'importance des muscles du dos, des jambes, et des fessiers.
            </p>
          </div>
        </div>

        <br></br>
        {/* Vidéo à gauche et texte à droite */}
        <div className="content-row reverse">
          <div className="text">
            <h2>Techniques et astuces</h2>
            <p>
              Adoptez une position correcte : pieds à largeur des épaules, dos
              droit, et barre près du corps. Engagez vos muscles abdominaux pour
              stabiliser votre colonne vertébrale.
            </p>
            <p>
              Respirez profondément avant de soulever et expirez en montant. Ne
              jamais arrondir le bas du dos pour éviter les blessures.
            </p>
          </div>
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID_2"
              title="Vidéo Deadlift 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Quizz */}
        <div className="quiz-section">
          <button onClick={openQuizz} className="quizz-button">
            Lancer le Quizz Deadlift
          </button>
        </div>
      </div>

      {/* Section pour le quiz */}
      {isQuizzOpen && (
        <div className="modal" onClick={closeQuizz}>
          <div
            className={`modal-content ${isClosing ? "closing" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close" onClick={closeQuizz}>
              &times;
            </span>
            <h2>Quizz Deadlift</h2>
            <p>Quelle est la position correcte pour un deadlift ?</p>
            <form onSubmit={handleSubmit}>
              <label>
                <input
                  type="radio"
                  name="q1"
                  value="dos"
                  onChange={handleAnswerChange}
                />{" "}
                Dos courbé vers l’avant
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="q1"
                  value="correct"
                  onChange={handleAnswerChange}
                />{" "}
                Dos droit, pieds à largeur des épaules
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="q1"
                  value="bras"
                  onChange={handleAnswerChange}
                />{" "}
                Bras complètement relâchés
              </label>
              <br />
              <button type="submit">Valider</button>
            </form>
            {feedback && <p>{feedback}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default DeadliftPage;
