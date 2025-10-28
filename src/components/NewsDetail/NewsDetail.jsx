import { useState } from 'react';
import styles from './NewsDetail.module.css';

const NewsDetail = ({ news, onClose, onLike, onAddComment }) => {
  const [newComment, setNewComment] = useState('');
  
  if (!news) return null;

  const handleLikeClick = () => {
    onLike(news.id);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment(news.id, newComment.trim());
      setNewComment('');
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
        
        <img 
          src={news.image} 
          alt={news.title} 
          className={styles.detailImage}
        />
        
        <div className={styles.detailContent}>
          <h1 className={styles.detailTitle}>{news.title}</h1>
          
          <div className={styles.detailMeta}>
            <span className={styles.author}>Por: {news.author}</span>
            <span className={styles.date}>{news.date}</span>
          </div>
          
          <p className={styles.detailDescription}>{news.description}</p>
          
          <div className={styles.actions}>
            <button 
              className={`${styles.actionButton} ${news.isLiked ? styles.liked : ''}`}
              onClick={handleLikeClick}
            >
              <span>{news.isLiked ? '❤️' : '🤍'}</span>
              <span>{news.likes} Me gusta</span>
            </button>
            <span className={styles.commentCount}>
              <span>💬</span>
              <span>{news.comments?.length || 0} Comentarios</span>
            </span>
          </div>
          
          {news.comments && news.comments.length > 0 && (
            <div className={styles.commentsSection}>
              <h3 className={styles.commentsTitle}>Comentarios:</h3>
              <div className={styles.commentsList}>
                {news.comments.map((comment, index) => (
                  <div key={index} className={styles.comment}>
                    <span className={styles.commentAuthor}>Usuario {index + 1}:</span>
                    <span className={styles.commentText}>{comment}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Formulario para agregar comentarios */}
          <div className={styles.addCommentSection}>
            <h3 className={styles.addCommentTitle}>Agregar comentario:</h3>
            <form onSubmit={handleSubmitComment} className={styles.commentForm}>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Escribe tu comentario aquí..."
                className={styles.commentInput}
                rows="3"
              />
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={!newComment.trim()}
              >
                Publicar comentario
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
