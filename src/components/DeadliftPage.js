import React, { useState } from "react";
import "../Modal.css"; // Assurez-vous que le chemin est correct

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
        <div>
            <h1>Deadlift</h1>
            <p>Apprenez la technique correcte pour le deadlift.</p>
            <button onClick={openQuizz}>Lancer le Quizz Deadlift</button>

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
