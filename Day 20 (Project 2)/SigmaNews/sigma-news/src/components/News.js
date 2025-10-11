import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Loading from './Loading';

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  fetchNews = async (page) => {
    this.setState({ loading: true });

    const { category } = this.props;
    let url = `https://newsapi.org/v2/everything?q=${category}&apiKey=85b2dc93befe4023a58050417d5bd459&pageSize=6&page=${page}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles || [],
      totalResults: parsedData.totalResults || 0,
      page,
      loading: false,
    });
  };

  async componentDidMount() {
    this.fetchNews(this.state.page);
  }

  componentDidUpdate(prevProps) {
    // If category changes (via route), fetch new data
    if (prevProps.category !== this.props.category) {
      this.setState({ page: 1 }, () => {
        this.fetchNews(1);
      });
    }
  }

  handlePreviousClick = () => {
    if (this.state.page > 1) {
      this.fetchNews(this.state.page - 1);
    }
  };

  handleNextClick = () => {
    const maxPages = Math.ceil(this.state.totalResults / 6);
    if (this.state.page < maxPages) {
      this.fetchNews(this.state.page + 1);
    }
  };

  render() {
    const { articles, page, totalResults, loading } = this.state;
    const maxPages = Math.ceil(totalResults / 6);

    return (
      <div className="container my-3 text-center">
        <h1 className="mb-4">Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h1>

        {loading && <Loading />}

        <div className="row">
          {!loading && articles.length > 0 ? (
            articles.map((article, index) => (
              <div className="col-md-4 my-3" key={index}>
                <NewsItem
                  title={article.title ? article.title.slice(0, 40) : ''}
                  description={article.description ? article.description.slice(0, 75) : ''}
                  urlToImage={article.urlToImage}
                  url={article.url}
                />
              </div>
            ))
          ) : (
            !loading && <p>No articles found.</p>
          )}
        </div>

        <div className="container d-flex justify-content-between my-3">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
            disabled={page <= 1 || loading}
          >
            &laquo; Previous
          </button>

          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
            disabled={page >= maxPages || loading}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}
