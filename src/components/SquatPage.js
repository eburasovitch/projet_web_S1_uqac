import React, { useState } from "react";
import "../Modal.css";

const SquatPage = () => {
    const [isQuizzOpen, setIsQuizzOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [feedback, setFeedback] = useState("");

    const openQuizz = () => {
        setIsQuizzOpen(true);
        setFeedback("");
        setSelectedAnswer(null);
    };

    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [answerClass, setAnswerClass] = useState("");


    const questions =[
        {
            question: "Quelle est la position correcte pour un squat ?",
            answers: [
                { text: "Dos courbé avec les genoux dépassant les orteils", isCorrect: false },
                { text: "Dos droit, pieds à largeur des épaules, regard devant", isCorrect: true },
                { text: "Genoux serrés et pieds écartés", isCorrect: false },
            ],
        },
        {
            question: "Quelle profondeur est recommandée pour un squat ?",
            answers: [
                { text: "Rester debout sans plier les genoux", isCorrect: false },
                { text: "Descendre jusqu’à ce que les cuisses soient parallèles au sol", isCorrect: true },
                { text: "Descendre jusqu’au sol en arrondissant le dos", isCorrect: false },
            ],
        },
        {
            question: "Quels muscles sont principalement sollicités pendant un squat ?",
            answers: [
                { text: "Biceps et triceps", isCorrect: false },
                { text: "Quadriceps, fessiers, et ischio-jambiers", isCorrect: true },
                { text: "Mollets uniquement", isCorrect: false },
            ],
        },
        {
            question: "Comment stabiliser le tronc lors d’un squat ?",
            answers: [
                { text: "En contractant les abdominaux et en gardant un dos droit", isCorrect: true },
                { text: "En arrondissant le dos", isCorrect: false },
                { text: "En relâchant complètement les abdominaux", isCorrect: false },
            ],
        },
    ];

    const closeQuizz = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            setIsQuizzOpen(false);
        }, 500);
    };

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleAnswerClick = (isCorrect, index) => {
        setSelectedAnswerIndex(index);
        setAnswerClass(isCorrect ? "correct" : "incorrect");

        setTimeout(() => {
            setAnswerClass("");
            setSelectedAnswerIndex(null);

            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
            } else {
                closeQuizz();
            }
        }, 1000);
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
                            Le squat est l'un des exercices les plus essentiels pour développer
                            la force et l'endurance des jambes, tout en améliorant la
                            stabilité du tronc et l'équilibre global du corps.
                            Il sollicite une large gamme de groupes musculaires,
                            notamment les quadriceps, les fessiers, et les ischio-jambiers.
                        </p>
                        <p>
                            Une technique correcte est cruciale pour maximiser les gains
                            musculaires, prévenir les blessures, et optimiser votre performance
                            lors de cet exercice fondamental.
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
                        Le squat sollicite une grande variété de muscles,
                        ce qui en fait un exercice incontournable pour tout programme de musculation.
                        Voici les principaux groupes musculaires impliqués :
                    </p>
                    <ul>
                        <li>
                            <strong>Quadriceps :</strong> Les muscles avant des cuisses sont fortement sollicités
                            pour pousser le corps vers le haut pendant la montée.
                        </li>
                        <li>
                            <strong>Ischio-jambiers :</strong> Situés à l’arrière des cuisses
                            , ils jouent un rôle crucial dans la stabilisation et la descente contrôlée.
                        </li>
                        <li>
                            <strong>Fessiers :</strong> : Les muscles fessiers sont essentiels pour
                            l’extension des hanches, particulièrement à la fin du mouvement.
                        </li>
                        <li>
                            <strong>Mollets :</strong> Ils aident à stabiliser les
                            chevilles et à maintenir l’équilibre tout au long de l’exercice.
                        </li>
                        <li>
                            <strong>Abdominaux et muscles du tronc :</strong>  Ces muscles
                            profonds maintiennent la stabilité du tronc et assurent une bonne
                            posture tout au long du mouvement.
                        </li>
                    </ul>
                    <p>
                        Grâce à cette activation musculaire complète,
                        le squat améliore non seulement la force, mais aussi
                        l’équilibre, la coordination, et la posture.
                    </p>

                    {/* Image des muscles sollicités */}
                    <div className="muscle-image">
                        <img
                            src="/assets/squat_muscles.jpg"
                            alt="Muscles sollicités lors du deadlift"
                        />
                        <p
                            style={{textAlign: "center"}}>
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
                            Adoptez une position correcte : pieds à largeur des
                            épaules, regard droit devant, et dos légèrement cambré.
                            Assurez-vous que vos genoux restent alignés avec vos pieds pendant tout le mouvement.


                        </p>
                        <p>
                            Descendez lentement jusqu’à ce que vos
                            cuisses soient parallèles au sol, puis poussez à
                            travers vos talons pour remonter. Engagez vos muscles abdominaux
                            pour stabiliser votre colonne vertébrale et maintenir une bonne posture.
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
                        Lancer le Quizz Squat
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

                        <h2>Quizz Squat</h2>
                        <p>{questions[currentQuestion].question}</p>

                        <div className="answers">
                            {questions[currentQuestion].answers.map((answer, index) => (
                                <div
                                    key={index}
                                    className={`answer-box ${
                                        index === selectedAnswerIndex ? answerClass : ""
                                    }`}
                                    onClick={() => handleAnswerClick(answer.isCorrect, index)}
                                >
                                    {answer.text}
                                </div>
                            ))}
                        </div>

                        {feedback && <p className="feedback">{feedback}</p>}
                    </div>
                </div>
            )}


        </div>
    );
};

export default SquatPage;
