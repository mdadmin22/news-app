import styles from './NewsCard.module.css';

const NewsCard = ({ 
  id, 
  title, 
  description, 
  image, 
  author, 
  date, 
  likes, 
  comments, 
  isLiked,
  onCardClick, 
  onLike 
}) => {
  
  const handleLikeClick = (e) => {
    e.stopPropagation(); // Evita que se abra el detalle
    onLike(id);
  };

  const handleCommentClick = (e) => {
    e.stopPropagation(); // Evita que se abra dos veces
    onCardClick(); // Abre el detalle de la noticia
  };

  return (
    <div className={styles.card} onClick={onCardClick}>
      <img 
        src={image} 
        alt={title} 
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        
        <div className={styles.cardMeta}>
          <span className={styles.cardAuthor}>Por: {author}</span>
          <span className={styles.cardDate}>{date}</span>
        </div>
        
        <div className={styles.cardActions}>
          <button 
            className={`${styles.actionButton} ${isLiked ? styles.likeButton + ' ' + styles.liked : ''}`}
            onClick={handleLikeClick}
          >
            <span>{isLiked ? '❤️' : '🤍'}</span>
            <span className={styles.likeCount}>{likes}</span>
          </button>
          <button 
            className={styles.actionButton}
            onClick={handleCommentClick}
          >
            <span>💬</span>
            <span className={styles.commentCount}>{comments?.length || 0}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;