import React from 'react';
import { useState } from 'react';

const Article = ({ article }) => {

    const [isEditing, setIsEditing] = useState(false)
    const [editContent, setEditContent] = useState("")

    const dataParser = (date) => {
        let newData = new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            minute: "numeric",
            second: "numeric"
        })
        return newData
    }

    const handleEdit = () => {
        setIsEditing(false)
    }

    return (
        <div className="article">
            <div className="card-header">
                <h3>{article.author}</h3>
                <em>Posté le: {dataParser(article.date)}</em>
            </div>
            {
                isEditing ? <textarea defaultValue={article.content} onChange={(e) => setEditContent(e.target.value)}></textarea> : <p>{article.content}</p>
            }
            
            <div className="btn-container">
                {isEditing ? 
                    <button onClick={() => handleEdit()}>Valider</button> :
                    <button onClick={() => setIsEditing(true)}>Editer</button> 
                }
                <button>Supprimer</button>
            </div>
        </div>
    );
};

export default Article;