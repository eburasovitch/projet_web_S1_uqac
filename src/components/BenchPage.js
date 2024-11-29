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
            <header className="bench-header">
                <h1 style={{ color: "rgb(209, 207, 207)", fontSize: "4rem" }}>Bench Press</h1>
                <p style={{ color: "rgb(209, 207, 207)"}}> Explorez les secrets pour maîtriser le Bench Press et développer votre force.</p>
            </header>

            <div className="content-section">
                <div className="introduction">
                    <h2>Pourquoi le Bench Press est essentiel</h2>
                    <p>
                        Le Bench Press est l'un des exercices les plus pratiqués pour développer la force du haut du corps.
                        Il cible principalement les pectoraux, les épaules et les triceps. Bien exécuté, il peut prévenir les
                        blessures et maximiser les performances.
                    </p>
                </div>

                {/* Section avec images */}
                <div className="image-section">
                    <h2>Position correcte</h2>
                    <img
                        src="/assets/position_bench.jpg"
                        alt="Position correcte pour le Bench Press"
                        className="image-full"
                    />
                    <p style={{ textAlign: "center" }}>Assurez-vous que votre dos est légèrement cambré et vos pieds bien ancrés au sol.</p>

                    <h2>Groupes musculaires sollicités</h2>
                    <img
                        src="/assets/groupe_bench.jpg"
                        alt="Muscles sollicités par le Bench Press"
                        className="image-full"
                    />
                    <p style={{ textAlign: "center" }}>Les muscles principaux travaillés incluent les pectoraux, les triceps et les deltoïdes.</p>
                </div>

                <div className="content-row">
                    <div className="text">
                        <h2>Conseils pour un Bench Press parfait</h2>
                        <p>
                            Voici quelques conseils pour optimiser vos performances :
                            <ul>
                                <li>Échauffez vos épaules avant chaque séance.</li>
                                <li>Adoptez une prise légèrement plus large que vos épaules.</li>
                                <li>Maintenez une position stable avec un léger arc dans le dos.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/dHadZyPflHQ?si=kveqrp5u1iUF-xPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

                {/* Section de Quizz */}
                <div className="quiz-section">
                    <h2>Testez vos connaissances</h2>
                    <button onClick={openQuizz} className="quizz-button">
                        Lancer le Quizz
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
