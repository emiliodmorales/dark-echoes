import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  /** Shows a list of episodes */
  function Episodes() {
    return (
      <section className="episodes">
        <h2>Episodes</h2>
        <ol className="episodes">
          {episodes.map((episode) => (
            <li
              key={episode.id}
              onClick={() => setSelectedEpisode(episode)}
              className={
                episode.id === selectedEpisode?.id ? "active" : "inactive"
              }
            >
              {episode.title}
            </li>
          ))}
        </ol>
      </section>
    );
  }

}
