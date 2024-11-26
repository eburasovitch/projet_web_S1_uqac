import React, { useState } from "react";
import "../Modal.css"; // Chemin correct pour Modal.css

const SquatPage = () => {
    //regarde si la tab quizz est ouverte
    const [isQuizzOpen, setIsQuizzOpen] = useState(false);

    //stock la réponse
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    //message de retour (bon/pas bon)
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

        //logique de bonne ou mauvaisse reponse
        if (selectedAnswer === "correct") {
            setFeedback("Bonne réponse ! 🎉");
        } else {
            setFeedback("Mauvaise réponse. Essayez encore !");
        }
    };


    //choix de reponses & questions
    return (
        <div>
            <h1>Squat</h1>
            <p>Apprenez la technique correcte pour le squat.</p>
            <button onClick={openQuizz}>Lancer le Quizz Squat</button>


            {isQuizzOpen && (
                <div className="modal" onClick={closeQuizz}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeQuizz}>
              &times;
            </span>
                        <h2>Quizz Squat</h2>
                        <p className="question">Quelle est la position correcte pour un squat ? </p>
                        <form onSubmit={handleSubmit}>
                            <label>
                                <input
                                    type="radio"
                                    name="q1"
                                    value="courbé"
                                    onChange={handleAnswerChange}
                                />{" "}
                                Dos courbé
                            </label>
                            <br />
                            <label>
                                <input
                                    type="radio"
                                    name="q1"
                                    value="collés"
                                    onChange={handleAnswerChange}
                                />{" "}
                                Pieds collés
                            </label>
                            <br />
                            <label>
                                <input
                                    type="radio"
                                    name="q1"
                                    value="correct"
                                    onChange={handleAnswerChange}
                                />{" "}
                                Dos droit et pieds écartés à largeur d’épaules
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
export default SquatPage;
