import React, { useState } from 'react';
import Question from './Question';
import Results from './Results';
import questionsData from '../data/questions.json';
import './Quiz.css';

const Quiz = () => {
  const [showStart, setShowStart] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [shuffleMode, setShuffleMode] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [selectedRange, setSelectedRange] = useState('all');
  const [currentMode, setCurrentMode] = useState('normal');

  // Función para revolver las opciones de una pregunta
  const shuffleOptions = (question) => {
    const optionsWithIndex = question.options.map((option, index) => ({
      text: option,
      originalIndex: index
    }));
    
    // Algoritmo Fisher-Yates para revolver
    for (let i = optionsWithIndex.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsWithIndex[i], optionsWithIndex[j]] = [optionsWithIndex[j], optionsWithIndex[i]];
    }
    
    const shuffledOptions = optionsWithIndex.map(item => item.text);
    const newCorrectAnswer = optionsWithIndex.findIndex(
      item => item.originalIndex === question.correctAnswer
    );
    
    return {
      ...question,
      options: shuffledOptions,
      correctAnswer: newCorrectAnswer
    };
  };

  // Función para revolver el orden de las preguntas (Modo Diablo)
  const shuffleQuestions = (questions) => {
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Función para filtrar preguntas por rango
  const filterQuestionsByRange = (range) => {
    switch (range) {
      case 'range1':
        return questionsData.slice(0, 100); // Preguntas 1-100
      case 'range2':
        return questionsData.slice(100, 170); // Preguntas 101-170
      case 'all':
      default:
        return questionsData; // Todas las preguntas
    }
  };

  const handleStart = (mode = 'normal', range = 'all') => {
    setShuffleMode(mode !== 'normal');
    setCurrentMode(mode);
    setSelectedRange(range);
    
    // Filtrar preguntas por rango
    let filteredQuestions = filterQuestionsByRange(range);
    
    if (mode === 'shuffle') {
      // Solo revolver las opciones de respuesta
      filteredQuestions = filteredQuestions.map(question => shuffleOptions(question));
    } else if (mode === 'diablo') {
      // MODO DIABLO: Revolver orden de preguntas Y opciones
      filteredQuestions = shuffleQuestions(filteredQuestions);
      filteredQuestions = filteredQuestions.map(question => shuffleOptions(question));
    }
    
    setShuffledQuestions(filteredQuestions);
    setShowStart(false);
  };

  const handleAnswerSelect = (answerIndex) => {
    if (showFeedback) return; // No permitir cambiar respuesta durante feedback
    
    setSelectedAnswer(answerIndex);
    const correct = answerIndex === shuffledQuestions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);

    // Guardar respuesta
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);

    // Avanzar automáticamente después de 3 segundos
    setTimeout(() => {
      setShowFeedback(false);
      if (currentQuestion < shuffledQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResults(true);
      }
    }, 3000);
  };

  const calculateScore = () => {
    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === shuffledQuestions[index].correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const restartQuiz = () => {
    setShowStart(true);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsCorrect(false);
    setShuffleMode(false);
    setShuffledQuestions([]);
    setSelectedRange('all');
    setCurrentMode('normal');
  };

  const handleExit = () => {
    if (window.confirm('¿Estás seguro que deseas salir? Se perderá tu progreso actual.')) {
      restartQuiz();
    }
  };

  const handleFinish = () => {
    if (window.confirm('¿Estás seguro que deseas terminar el quiz ahora? Se calculará tu puntaje con las respuestas que has dado hasta el momento.')) {
      setShowResults(true);
    }
  };

  // Pantalla de inicio
  if (showStart) {
    return (
      <div className="quiz-container start-screen">
        <div className="start-content">
          <h1 className="start-title">🔐 Quiz de Ciberseguridad</h1>
          <div className="start-info">
            <div className="info-card">
              <span className="info-icon">📝</span>
              <div>
                <h3>{questionsData.length} Preguntas</h3>
                <p>Pon a prueba tus conocimientos</p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">✅</span>
              <div>
                <h3>Feedback Inmediato</h3>
                <p>Sabrás si acertaste al instante</p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">🎯</span>
              <div>
                <h3>Modo de Práctica</h3>
                <p>Elige cómo quieres practicar</p>
              </div>
            </div>
          </div>

          <div className="range-selection">
            <h3 className="range-title">Selecciona el rango de preguntas:</h3>
            <div className="range-options">
              <label className="range-option">
                <input
                  type="radio"
                  name="questionRange"
                  value="range1"
                  defaultChecked
                />
                <div className="range-content">
                  <span className="range-icon">1️⃣</span>
                  <div className="range-info">
                    <h4>Preguntas 1-100</h4>
                    <p>Primeras 100 preguntas</p>
                  </div>
                </div>
              </label>
              
              <label className="range-option">
                <input
                  type="radio"
                  name="questionRange"
                  value="range2"
                />
                <div className="range-content">
                  <span className="range-icon">2️⃣</span>
                  <div className="range-info">
                    <h4>Preguntas 101-170</h4>
                    <p>Últimas 70 preguntas</p>
                  </div>
                </div>
              </label>

              <label className="range-option">
                <input
                  type="radio"
                  name="questionRange"
                  value="all"
                />
                <div className="range-content">
                  <span className="range-icon">📚</span>
                  <div className="range-info">
                    <h4>Todas las Preguntas</h4>
                    <p>Las 170 preguntas completas</p>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div className="mode-selection">
            <h3 className="mode-title">Selecciona el modo de quiz:</h3>
            <div className="mode-options">
              <label className="mode-option">
                <input
                  type="radio"
                  name="quizMode"
                  value="normal"
                  defaultChecked
                />
                <div className="mode-content">
                  <span className="mode-icon">📋</span>
                  <div className="mode-info">
                    <h4>Quiz Normal</h4>
                    <p>Preguntas y respuestas en orden</p>
                  </div>
                </div>
              </label>
              
              <label className="mode-option">
                <input
                  type="radio"
                  name="quizMode"
                  value="shuffle"
                />
                <div className="mode-content">
                  <span className="mode-icon">🔀</span>
                  <div className="mode-info">
                    <h4>Respuestas Revueltas</h4>
                    <p>Solo las opciones en orden aleatorio</p>
                  </div>
                </div>
              </label>

              <label className="mode-option">
                <input
                  type="radio"
                  name="quizMode"
                  value="diablo"
                />
                <div className="mode-content mode-diablo">
                  <span className="mode-icon">😈</span>
                  <div className="mode-info">
                    <h4>Modo Diablo</h4>
                    <p>Preguntas Y respuestas revueltas</p>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <button 
            className="btn btn-start" 
            onClick={() => {
              const selectedMode = document.querySelector('input[name="quizMode"]:checked').value;
              const selectedRange = document.querySelector('input[name="questionRange"]:checked').value;
              handleStart(selectedMode, selectedRange);
            }}
          >
            🚀 Comenzar Quiz
          </button>
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <Results
        score={calculateScore()}
        totalQuestions={shuffledQuestions.length}
        onRestart={restartQuiz}
      />
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>🔐 Quiz de Ciberseguridad</h1>
        
        {currentMode === 'shuffle' && (
          <div className="mode-badge mode-badge-shuffle">
            <span className="mode-badge-icon">🔀</span>
            <span>Modo: Respuestas Revueltas</span>
          </div>
        )}
        
        {currentMode === 'diablo' && (
          <div className="mode-badge mode-badge-diablo">
            <span className="mode-badge-icon">😈</span>
            <span>Modo: DIABLO (Todo Revuelto)</span>
          </div>
        )}

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${((currentQuestion + 1) / shuffledQuestions.length) * 100}%`
            }}
          ></div>
        </div>
        <p className="question-counter">
          Pregunta {currentQuestion + 1} de {shuffledQuestions.length}
        </p>
      </div>

      <Question
        question={shuffledQuestions[currentQuestion]}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={handleAnswerSelect}
        showFeedback={showFeedback}
        isCorrect={isCorrect}
        correctAnswer={shuffledQuestions[currentQuestion].correctAnswer}
      />

      {showFeedback && (
        <div className={`feedback-message ${isCorrect ? 'correct' : 'incorrect'}`}>
          {isCorrect ? (
            <>
              <span className="feedback-icon">✅</span>
              <span>¡Correcto! Pasando a la siguiente pregunta...</span>
            </>
          ) : (
            <>
              <span className="feedback-icon">❌</span>
              <span>Incorrecto. La respuesta correcta era: {shuffledQuestions[currentQuestion].options[shuffledQuestions[currentQuestion].correctAnswer]}</span>
            </>
          )}
        </div>
      )}

      <div className="quiz-actions">
        <button className="btn btn-exit" onClick={handleExit} disabled={showFeedback}>
          🚪 Salir
        </button>
        <button 
          className="btn btn-finish" 
          onClick={handleFinish} 
          disabled={showFeedback || answers.length === 0}
        >
          🏁 Terminar Quiz
        </button>
      </div>
    </div>
  );
};

export default Quiz;

