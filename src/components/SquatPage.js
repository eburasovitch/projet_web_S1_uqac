import React, { useState } from "react";
import "../Modal.css";
const DeadliftPage = () => {
  const [isQuizzOpen, setIsQuizzOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "Quelle est la position correcte pour un deadlift ?",
      options: [
        { text: "Dos courbé vers l’avant", value: "courbe" },
        { text: "Dos droit, pieds à largeur des épaules", value: "correct" },
        { text: "Bras complètement relâchés", value: "relache" },
      ],
      correct: "correct",
    },
    {
      question:
        "Quels muscles sont principalement sollicités lors d’un deadlift ?",
      options: [
        { text: "Muscles du dos, jambes et abdominaux", value: "correct" },
        { text: "Muscles des bras", value: "bras" },
        { text: "Mollets uniquement", value: "mollets" },
      ],
      correct: "correct",
    },
    {
      question:
        "Quelle est une bonne pratique pour effectuer un deadlift correctement ?",
      options: [
        { text: "Laisser tomber la barre au sol", value: "tomber" },
        {
          text: "Maintenir le dos droit et engager les abdominaux",
          value: "correct",
        },
        { text: "Soulever avec une prise relâchée", value: "relache" },
      ],
      correct: "correct",
    },
  ];
  
  const openQuizz = () => {
    setIsQuizzOpen(true);
    setFeedback("");
    setSelectedAnswer(null);
    setCurrentQuestion(0);
    setScore(0);
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
    const isCorrect = selectedAnswer === questions[currentQuestion].correct;
    if (isCorrect) {
      setFeedback("Bonne réponse ! 🎉");
      setScore((prevScore) => prevScore + 1);
    } else {
      setFeedback("Mauvaise réponse. Essayez encore !");
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion((prev) => prev + 1);
        setFeedback("");
        setSelectedAnswer(null);
      } else {
        setFeedback(
          `Quiz terminé ! Votre score est de ${
            score + (isCorrect ? 1 : 0)
          } sur ${questions.length}.`
        );
      }
    }, 1500);
  };

  return (
    <div className="squat-page">
      {/* Section avec le fond en image */}
      <div className="header-section">
        <h1 className="page-title">Squat</h1>
        <p className="header-description">
          Apprenez la technique correcte pour le Squat et maximisez vos
          performances tout en minimisant les risques de blessures.
        </p>
      </div>

      {/* Section principale avec fond blanc */}
      <div className="content-section">
        {/* Texte à gauche et vidéo à droite */}
        <div className="content-row">
          <div className="text">
            <h2>Importance du Squat</h2>
            <p>
              Le squat est l'un des exercices les plus essentiels pour
              développer la force et l'endurance des jambes, tout en améliorant
              la stabilité du tronc et l'équilibre global du corps. Il sollicite
              une large gamme de groupes musculaires, notamment les quadriceps,
              les fessiers, et les ischio-jambiers.
            </p>
            <p>
              Une technique correcte est cruciale pour maximiser les gains
              musculaires, prévenir les blessures, et optimiser votre
              performance lors de cet exercice fondamental.
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
          <h2>Muscles Sollicités par le Squat</h2>
          <p>
            Le squat sollicite une grande variété de muscles, ce qui en fait un
            exercice incontournable pour tout programme de musculation. Voici
            les principaux groupes musculaires impliqués :
          </p>
          <ul>
            <li>
              <strong>Quadriceps :</strong> Les muscles avant des cuisses sont
              fortement sollicités pour pousser le corps vers le haut pendant la
              montée.
            </li>
            <li>
              <strong>Ischio-jambiers :</strong> Situés à l’arrière des cuisses
              , ils jouent un rôle crucial dans la stabilisation et la descente
              contrôlée.
            </li>
            <li>
              <strong>Fessiers :</strong> : Les muscles fessiers sont essentiels
              pour l’extension des hanches, particulièrement à la fin du
              mouvement.
            </li>
            <li>
              <strong>Mollets :</strong> Ils aident à stabiliser les chevilles
              et à maintenir l’équilibre tout au long de l’exercice.
            </li>
            <li>
              <strong>Abdominaux et muscles du tronc :</strong> Ces muscles
              profonds maintiennent la stabilité du tronc et assurent une bonne
              posture tout au long du mouvement.
            </li>
          </ul>
          <p>
            Grâce à cette activation musculaire complète, le squat améliore non
            seulement la force, mais aussi l’équilibre, la coordination, et la
            posture.
          </p>

          {/* Image des muscles sollicités */}
          <div className="muscle-image">
            <img
              src="/assets/squat_muscles.jpg"
              alt="Muscles sollicités lors du deadlift"
            />
            <p style={{ textAlign: "center" }}>
              Illustration des muscles sollicités lors d’un squat. Notez
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
              Adoptez une position correcte : pieds à largeur des épaules,
              regard droit devant, et dos légèrement cambré. Assurez-vous que
              vos genoux restent alignés avec vos pieds pendant tout le
              mouvement.
            </p>
            <p>
              Descendez lentement jusqu’à ce que vos cuisses soient parallèles
              au sol, puis poussez à travers vos talons pour remonter. Engagez
              vos muscles abdominaux pour stabiliser votre colonne vertébrale et
              maintenir une bonne posture.
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
            {currentQuestion < questions.length ? (
              <>
                <p>{questions[currentQuestion].question}</p>
                <form onSubmit={handleSubmit}>
                  {questions[currentQuestion].options.map((option, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        name="q1"
                        value={option.value}
                        onChange={handleAnswerChange}
                        checked={selectedAnswer === option.value}
                      />{" "}
                      {option.text}
                    </label>
                  ))}
                  <br />
                  <button type="submit" disabled={!selectedAnswer}>
                    Valider
                  </button>
                </form>
              </>
            ) : (
              <p>{feedback}</p>
            )}
            {feedback && currentQuestion < questions.length && (
              <p>{feedback}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DeadliftPage;
