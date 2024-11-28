import React, { useState } from "react";
import "../Modal.css";

const BenchPage = () => {
    const [isQuizzOpen, setIsQuizzOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [feedback, setFeedback] = useState("");
    const [score, setScore] = useState(0);

    const questions = [
        {
            question: "Quelle est la position correcte pour un Bench Press ?",
            options: [
                { text: "Dos complètement à plat sur le banc", value: "plat" },
                { text: "Dos légèrement cambré, pieds fermement au sol", value: "correct" },
                { text: "Épaules détendues et en haut du banc", value: "détendu" },
            ],
            correct: "correct",
        },
        {
            question: "Quel muscle est principalement ciblé par le Bench Press ?",
            options: [
                { text: "Quadriceps", value: "quadriceps" },
                { text: "Pectoraux", value: "correct" },
                { text: "Mollets", value: "mollets" },
            ],
            correct: "correct",
        },
        {
            question: "Quelle est la bonne largeur de prise pour un Bench Press ?",
            options: [
                { text: "Plus large que les épaules", value: "correct" },
                { text: "Largeur des épaules", value: "epaules" },
                { text: "Très étroite", value: "etroite" },
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
        <div className="bench-page">
            <div className="content-section">
                <div className="content-row">
                    <div className="text">
                        <h2>Importance du Bench Press</h2>
                        <p>
                            Le Bench Press est un exercice de base pour le développement de la force du haut du corps, en ciblant principalement les muscles pectoraux, les triceps et les épaules.
                        </p>
                        <p>
                            Une technique correcte est essentielle pour maximiser les gains musculaires tout en réduisant les risques de blessures aux épaules et aux coudes.
                        </p>
                    </div>
                    <div className="video">
                        <iframe
                            src="https://www.youtube.com/embed/VIDEO_ID"
                            title="Vidéo Bench Press"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <div className="text-between">
                    <h2>Muscles sollicités par le Bench Press</h2>
                    <p>
                        Le Bench Press cible une variété de muscles. Voici les principaux groupes musculaires impliqués :
                    </p>
                    <ul>
                        <li>
                            <strong>Pectoraux :</strong> Les muscles principaux sollicités pour pousser la barre.
                        </li>
                        <li>
                            <strong>Triceps :</strong> Contribuent à l'extension des bras.
                        </li>
                        <li>
                            <strong>Épaules :</strong> Stabilisent le mouvement pendant l'exercice.
                        </li>
                        <li>
                            <strong>Muscles du tronc :</strong> Aident à maintenir une position stable sur le banc.
                        </li>
                    </ul>
                </div>

                <div className="quiz-section">
                    <button onClick={openQuizz} className="quizz-button">
                        Lancer le Quizz Bench Press
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
                        <h2>Quizz Bench Press</h2>
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

export default BenchPage;
