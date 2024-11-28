import React, { useState } from "react";
import "../Modal.css"; // Assurez-vous que le chemin est correct

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
                { text: "Dos courbé vers l’avant", value: "dos" },
                { text: "Dos droit, pieds à largeur des épaules", value: "correct" },
                { text: "Bras complètement relâchés", value: "bras" },
            ],
            correct: "correct",
        },
        {
            question: "Quels muscles sont principalement sollicités lors d’un deadlift ?",
            options: [
                { text: "Les quadriceps uniquement", value: "quadriceps" },
                { text: "Le dos, les jambes et les abdominaux", value: "correct" },
                { text: "Les épaules et les bras uniquement", value: "epaules" },
            ],
            correct: "correct",
        },
        {
            question: "Quelle est la bonne technique pour éviter les blessures ?",
            options: [
                { text: "Arrondir le bas du dos", value: "arrondir" },
                { text: "Garder le dos droit et engager les abdominaux", value: "correct" },
                { text: "Soulever la barre avec les bras uniquement", value: "bras" },
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

        // Passer à la question suivante après un délai
        setTimeout(() => {
            if (currentQuestion + 1 < questions.length) {
                setCurrentQuestion((prev) => prev + 1);
                setFeedback("");
                setSelectedAnswer(null);
            } else {
                setFeedback(`Quiz terminé ! Votre score est de ${score + (isCorrect ? 1 : 0)} sur ${questions.length}.`);
            }
        }, 1500);
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

                <div className="text-between">
                    <h2>Muscles sollicités par le Deadlift</h2>
                    <p>
                        Le deadlift sollicite une grande variété de muscles, ce qui en fait
                        un exercice incontournable dans tout programme de musculation.
                    </p>
                    <ul>
                        <li>
                            <strong>Muscles du dos :</strong> Les érecteurs spinaux jouent un
                            rôle crucial pour maintenir la colonne vertébrale droite.
                        </li>
                        <li>
                            <strong>Muscles des jambes :</strong> Les quadriceps, les
                            ischio-jambiers et les mollets sont activés pour la poussée et la
                            stabilisation pendant la montée.
                        </li>
                        <li>
                            <strong>Fessiers :</strong> Les muscles fessiers sont fortement
                            sollicités pour l'extension des hanches.
                        </li>
                        <li>
                            <strong>Muscles des bras et des épaules :</strong> Les avant-bras
                            et les trapèzes stabilisent la barre.
                        </li>
                    </ul>
                </div>

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
                        {feedback && currentQuestion < questions.length && <p>{feedback}</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DeadliftPage;
