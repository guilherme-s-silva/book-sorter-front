import './styles.css';
import axios from '../../services/axios';
import { useState, useEffect } from 'react';

export default function Header({setLoading, setCover, setTitle, setAuthor, setPublished, setPageNumber, setDescription}) {
    
    const [genre, setGenre] = useState('history');

    async function getBookInfo(genre) {
        setLoading(true);
        let bookInfo = await axios.get(`/${genre}`).then((response) => {
            return response.data;
        }).catch((error) => {
            console.log(error)
        })
        
        if (bookInfo) {
            setLoading(false);
        }

        setCover(bookInfo.id_capa);
        setTitle(bookInfo.titulo);
        setAuthor(bookInfo.autor);
        setDescription(bookInfo.descricao);
    } 

    return (
        <header>
            <div>
                <h1>Book Sorter</h1>
                <h3>Book suggestions based on your favorite genre!</h3> 
            </div>
            <div>
                <select onChange={(e) => setGenre(e.target.value)}>
                    <option defaultValue value='history'>History</option>
                    <option value='fantasy'>Fantasy</option>
                    <option value='horror'>Horror</option>
                    <option value='mystery_and_detective_stories'>Mystery and Detective Stories</option>
                    <option value='science'>Science</option>
                    <option value='thriller'>Thriller</option>
                    <option value='young_adult'>Young Adult</option>
                    <option value='autobiographies'>Autobiographies</option>
                </select>
                <button onClick={() => getBookInfo(genre)}>Sort!</button>
            </div>
        </header>
    )
}