import NewsCard from '../NewsCard/NewsCard';
import styles from './NewsList.module.css';

const NewsList = ({ news, onNewsClick, onLike, onAddComment }) => {
  // Función para obtener la fecha actual formateada
  const getCurrentDate = () => {
    const today = new Date();
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return today.toLocaleDateString('es-ES', options);
  };

  return (
    <div className={styles.newsList}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Últimas Noticias</h2>
        <p className={styles.date}>{getCurrentDate()}</p>
      </div>
      <div className={styles.newsGrid}>
        {news.map((newsItem) => (
          <NewsCard
            key={newsItem.id}
            id={newsItem.id}
            title={newsItem.title}
            description={newsItem.description}
            image={newsItem.image}
            author={newsItem.author}
            date={newsItem.date}
            likes={newsItem.likes}
            comments={newsItem.comments}
            isLiked={newsItem.isLiked}
            onCardClick={() => onNewsClick(newsItem)}
            onLike={onLike}
            onAddComment={onAddComment}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
