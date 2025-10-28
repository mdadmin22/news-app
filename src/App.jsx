import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Container from './components/Container/Container'
import NewsList from './components/NewsList/NewsList'
import NewsDetail from './components/NewsDetail/NewsDetail'
import { mockNews } from './data/mockData'
import { useTheme } from './hooks/useTheme'
import './App.css'

function App() {
  const [selectedNews, setSelectedNews] = useState(null)
  const [news, setNews] = useState(mockNews)
  const { isDark, toggleTheme } = useTheme()

  const handleNewsClick = (news) => {
    setSelectedNews(news)
  }

  const handleCloseDetail = () => {
    setSelectedNews(null)
  }

  const handleLike = (newsId) => {
    setNews(prevNews => {
      const updatedNews = prevNews.map(item => 
        item.id === newsId 
          ? { ...item, likes: item.likes + 1, isLiked: !item.isLiked }
          : item
      );
      
      // Actualizar selectedNews si es la misma noticia
      if (selectedNews && selectedNews.id === newsId) {
        const updatedSelectedNews = updatedNews.find(item => item.id === newsId);
        setSelectedNews(updatedSelectedNews);
      }
      
      return updatedNews;
    });
  }

  const handleAddComment = (newsId, comment) => {
    if (!comment.trim()) return
    
    setNews(prevNews => {
      const updatedNews = prevNews.map(item => 
        item.id === newsId 
          ? { ...item, comments: [...item.comments, comment] }
          : item
      );
      
      // Actualizar selectedNews si es la misma noticia
      if (selectedNews && selectedNews.id === newsId) {
        const updatedSelectedNews = updatedNews.find(item => item.id === newsId);
        setSelectedNews(updatedSelectedNews);
      }
      
      return updatedNews;
    });
  }

  return (
    <>
      <Navbar isDark={isDark} onThemeToggle={toggleTheme} />
      <Container>
        <NewsList 
          news={news} 
          onNewsClick={handleNewsClick}
          onLike={handleLike}
          onAddComment={handleAddComment}
        />
      </Container>
      
      {selectedNews && (
        <NewsDetail 
          news={selectedNews} 
          onClose={handleCloseDetail}
          onLike={handleLike}
          onAddComment={handleAddComment}
        />
      )}
    </>
  )
}

export default App
