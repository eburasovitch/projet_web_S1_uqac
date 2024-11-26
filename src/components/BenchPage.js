import React, { useState } from "react";
import "../Modal.css";

const BenchPage = () => {
    const [isQuizzOpen, setIsQuizzOpen] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [feedback, setFeedback] = useState("");

    const openQuizz = () => {
        setIsQuizzOpen(true);
        setFeedback("");
        setSelectedAnswer(null);
    };
    const closeQuizz = () => setIsQuizzOpen(false);

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
            <h1>Bench Press</h1>
            <p>Apprenez la technique correcte pour le bench press.</p>
            <button onClick={openQuizz}>Lancer le Quizz Bench Press</button>

            {isQuizzOpen && (
                <div className="modal" onClick={closeQuizz}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeQuizz}>
              &times;
            </span>
                        <h2>Quizz Bench Press</h2>
                        <p>Quelle est la position correcte pour un bench press ?</p>
                        <form onSubmit={handleSubmit}>
                            <label>
                                <input
                                    type="radio"
                                    name="q1"
                                    value="courbé"
                                    onChange={handleAnswerChange}
                                />{" "}
                                Dos complètement à plat sur le banc
                            </label>
                            <br />
                            <label>
                                <input
                                    type="radio"
                                    name="q1"
                                    value="correct"
                                    onChange={handleAnswerChange}
                                />{" "}
                                Dos légèrement cambré, pieds fermement au sol
                            </label>
                            <br />
                            <label>
                                <input
                                    type="radio"
                                    name="q1"
                                    value="haut"
                                    onChange={handleAnswerChange}
                                />{" "}
                                Épaules détendues et en haut du banc
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

export default BenchPage;
