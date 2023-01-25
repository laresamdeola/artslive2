import React, { useEffect, useState } from "react";
import { apiKey } from "../config.js";
//import "../styles.css";

const ArtStory = () => {
  const data = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`;

  const [stories, setStories] = useState([]);

  const getStory = async () => {
    try {
      let storyData = await fetch(data);
      let results = await storyData.json();
      /*for (let i = 0; i <= results.num_results; i++) {
        results = results.results[i];
      }
      console.log(results);*/
      setStories(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStory();
  }, []);

  /*
  for(let i = 0; i < stories.results.length; i++){
    console.log(stories.results[i].abstract);
   };
   */

  return (
    <div className="home">
      <h1 className="logo">artslive</h1>
      <div>
        {stories.results != null || stories.results !== undefined
          ? Object.values(stories.results).map((story) => {
              const { results } = story;
              console.log(results);
              return (
                <div className="inner-div" key={story.id}>
                  <h2 className="title title-hover">{story.title}</h2>
                  <h3 className="title byline">{story.byline}</h3>
                  <p className="title abstract">{story.abstract}</p>
                  <button className="url-button">
                    <a
                      className="title abstract url"
                      href={story.url}
                      target="_blank"
                    >
                      curious
                    </a>
                  </button>
                </div>
              );
            })
          : alert("Data is loading")}
      </div>
    </div>
  );
};

export { ArtStory };
