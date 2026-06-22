import { Link } from "react-router-dom";
import { articles } from "../../../features/KyrsCodex/wikidata";

export default function WikiHomePage() {
  return (
    <div>
      <h1>Wiki</h1>

      <ul>
        {Object.values(articles).map((article) => (
          <li key={article.id}>
            <Link to={`/wiki/${article.id}`}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}