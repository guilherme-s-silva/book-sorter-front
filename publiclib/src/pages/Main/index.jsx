import { useState } from 'react';
import Header from '../../components/Header';
import './styles.css';

export default function App() {

  const [loading, setLoading] = useState(false);
  const [cover, setCover] = useState('default');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="app-container">
      <Header
        setLoading = {setLoading}
        setCover = {setCover}
        setTitle = {setTitle}
        setAuthor = {setAuthor}
        setDescription = {setDescription}
      />
      { loading ? (<div className='loading'>Loading...</div>) :
        (
        <div className="book-container">     
          <div className="book">
              
              {cover ? (<img className="shadow" src={`https://covers.openlibrary.org/b/id/${cover}-M.jpg`} />) :
                (<div className="cover-not-found shadow">{title}</div>)
              }
              
              <div className="book-info">
                  <h1>{title}</h1>
                  <h3>{author}</h3>
                  {description&& <p className='book-description'><strong>Description:</strong> {description}</p>}
              </div>
              
            </div>
        </div>
        )
        
      }
      
    </div>
  )
}