import React, { Component, useState } from 'react'
import NavBar from './components/NavBar'
import NewsItem from './components/NewsItem'

export default class App extends Component {
    articles = [
      {
        "source": {
          "id": "axios",
          "name": "Axios"
        },
        "author": "Tal Axelrod, Zachary Basu",
        "title": "\"The first domino\": Comey indictment sets MAGA retribution in motion - Axios",
        "description": "\"I think there will be others. They are corrupt,\" Trump told reporters.",
        "url": "https://www.axios.com/2025/09/27/comey-indictment-trump-maga-enemies-list",
        "urlToImage": "https://images.axios.com/DIbGXLwoOzUYMbEF79MIU8POFho=/0x0:1920x1080/1366x768/2025/09/26/1758919775585.jpeg",
        "publishedAt": "2025-09-27T11:02:02Z",
        "content": "<ul><li>To Trump's base, the indictment is vindication a long-awaited strike against a \"Deep State\" villain they've obsessed over for nearly a decade.</li><li>Now, MAGA's biggest question is how much… [+3550 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": "David Cox",
        "title": "How to future-proof your knees - BBC",
        "description": "Our knees are arguably one of our most important joints, but also one of the most poorly looked after. Science tells us putting in some work now pays dividends later.",
        "url": "https://www.bbc.com/future/article/20250926-how-to-futureproof-your-knees",
        "urlToImage": "https://ychef.files.bbci.co.uk/624x351/p0m57jcl.jpg",
        "publishedAt": "2025-09-27T10:04:17Z",
        "content": "\"As you get stronger, you can certainly add weight, by doing some of these exercises wearing weighted vests, or holding weights if you have access to them, but that also depends on your age and your … [+957 chars]"
      },
      {
        "source": {
          "id": "nbc-news",
          "name": "NBC News"
        },
        "author": "Berkeley Lovelace Jr.",
        "title": "5 questions experts have about Trump's pharma tariffs - NBC News",
        "description": "For people who rely on certain prescription drugs, including weight loss, asthma and cancer medications, President Donald Trump’s post announcing 100% tariffs on foreign brand-name drugs offers little clarity on when — or if — medications might see price hike…",
        "url": "https://www.nbcnews.com/health/health-news/5-questions-experts-trumps-pharma-tariffs-rcna233974",
        "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2025-09/250926-prescription-drugs-gk-5c6e2f.jpg",
        "publishedAt": "2025-09-27T09:30:00Z",
        "content": "For people who rely on certain prescription drugs, including weight loss, asthma and cancer medications, President Donald Trumps post announcing 100% tariffs on foreign brand-name drugs offers little… [+7489 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "The Official Website of the Ultimate Fighting Championship"
        },
        "author": null,
        "title": "Official Weigh-In Results | UFC Perth - UFC.com",
        "description": "The Official Weights Of The Fighters Competing At UFC Fight Night: Ulberg vs Reyes, Live From Perth, Western Australia On September 27",
        "url": "https://www.ufc.com/news/official-weigh-results-ufc-perth-fight-night-ulberg-reyes",
        "urlToImage": "https://ufc.com/images/styles/card/s3/2025-09/092625-ufc-perth-weigh-in-HERO.jpg?itok=eeS31CYf",
        "publishedAt": "2025-09-27T00:16:12Z",
        "content": "This weekend, the Octagon returns to RAC Arena for the fourth time as a loaded fight night event touches down in the Western Australia capital. Headlined by a critical matchup of light heavyweight co… [+1886 chars]"
      }
    ]
  render() {
    return ( 

      <div>
        <NavBar />
        <div className="container my-3">
          <h1>News - Top Headlines</h1>
          <div className="row" >
             {this.articles.map((article,index) => (
              <div className="col-md-4 my-3" key={index}>
                <NewsItem
                  title={article.title.slice(0,40)}
                  description={article.description.slice(0,75)}
                  urlToImage={article.urlToImage}
                  url={article.url}
                />
              </div>
            ))} 
          </div>
        </div>

      </div>
    )
  }
}
