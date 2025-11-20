import React from 'react';
import './Results.css';

const Results = ({ score, totalQuestions, onRestart }) => {
  const percentage = ((score / totalQuestions) * 100).toFixed(1);

  const getScoreMessage = () => {
    if (percentage >= 90) return { text: '¡Excelente! 🎉', emoji: '🏆', color: '#4CAF50' };
    if (percentage >= 70) return { text: '¡Muy bien! 👏', emoji: '⭐', color: '#2196F3' };
    if (percentage >= 50) return { text: 'Bien, pero puedes mejorar 📚', emoji: '💪', color: '#FF9800' };
    return { text: 'Necesitas estudiar más 📖', emoji: '📚', color: '#F44336' };
  };

  const scoreMessage = getScoreMessage();

  return (
    <div className="results-container">
      <div className="results-header">
        <div className="score-emoji">{scoreMessage.emoji}</div>
        <h1>Resultados del Quiz</h1>
        <div className="score-display" style={{ borderColor: scoreMessage.color }}>
          <div className="score-number" style={{ color: scoreMessage.color }}>
            {score}/{totalQuestions}
          </div>
          <div className="score-percentage" style={{ color: scoreMessage.color }}>
            {percentage}%
          </div>
        </div>
        <p className="score-message" style={{ color: scoreMessage.color }}>
          {scoreMessage.text}
        </p>
        <div className="score-stats">
          <div className="stat-item">
            <span className="stat-icon">✅</span>
            <div className="stat-info">
              <span className="stat-number">{score}</span>
              <span className="stat-label">Correctas</span>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-icon">❌</span>
            <div className="stat-info">
              <span className="stat-number">{totalQuestions - score}</span>
              <span className="stat-label">Incorrectas</span>
            </div>
          </div>
        </div>
      </div>

      <button className="btn btn-restart" onClick={onRestart}>
        🔄 Reintentar Quiz
      </button>
    </div>
  );
};

export default Results;

