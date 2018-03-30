import React from "react";


const Search = props =>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>
                <i className="fa fa-search" aria-hidden="true"></i> Search
              </strong>
            </h3>
          </div>
          <div className="panel-body">
            <form>
              <div className="form-group">
                <label htmlFor="topic">Topic</label>
                <input onChange={props.handleTopicChange} type="text" className="form-control" id="topic" aria-describedby="emailHelp" />
              </div>
              <div className="form-group">
                <label htmlFor="start-year">Start Year</label>
                <input onChange={props.handleStartYearChange} type="text" className="form-control" id="start-year" />
              </div>
              <div className="form-group">
                <label htmlFor="end-year">End Year</label>
                <input onChange={props.handleEndYearChange} type="text" className="form-control" id="end-year" />
              </div>
              <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>

              <button className="btn btn-primary" onClick={() => props.handleSaveButton(props._id)}>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <br /><br />

    <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>
                <i className="fa fa-newspaper-o" aria-hidden="true"></i> Results
              </strong>
            </h3>
          </div>
          <div className="panel-body">


            <ul className="list-group">
              {props.articles.map(article => (
                <li className="list-group-item" item={article.id} key={article._id}>
                  <h4>{article.headline.main}</h4>
                  <p>{article.snippet}</p>
                  <p>Written by: {article.byline.original}</p>
                    <a href={article.web_url} target="_blank">
                        <button className="btn btn-default ">View Article</button>
                    </a>
                    <button className="btn btn-primary" onClick={() => props.handleSaveButton(article._id)}>Save</button>

                </li>
              ))}
            </ul>

            {props.articles.map(article => (console.log(article.headline.main)))}




          </div>
        </div>
      </div>
    </div>
    <br /><br />
  </div>


export default Search;