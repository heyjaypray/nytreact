import React from "react";



const Saved = props => (

  
  
  <ul className="container">

  {console.log(props.savedArticle)}

  <ul className="list-group">

  {
    props.savedArticle && props.savedArticle.map((article) => (

      

      <div className="container" key={article._id}>
        <li className="list-group-item">
          <h4>
            <span>
              <em>{article.title}</em>
            </span>
            <span className="btn-group pull-right">
              <a href={article.url} target="_blank">
                <button className="btn btn-default ">View Article</button>
              </a>
              <button className="btn btn-primary" onClick={() => props.handleDeleteButton(article._id)}>Delete</button>
            </span>
          </h4>
          <p>Date Published: {article.date}</p>
        </li>
      </div>


    )


  )}

  </ul>



    
  </ul>


);

export default Saved;
