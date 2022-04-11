import React from 'react';

const Article = ({ article }) => {

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

    return (
        <div className="article">
            <div className="card-header">
                <h3>{article.author}</h3>
                <em>Posté le: {dataParser(article.date)}</em>
            </div>
            <p>{article.content}</p>
            <div className="btn-container">
                <button>Editer</button>
                <button>Supprimer</button>
            </div>
        </div>
    );
};

export default Article;