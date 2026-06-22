import { useParams } from "react-router-dom";
import { articles } from "../../../features/KyrsCodex/wikidata";

export default function ArticlePage() {
  const { id } = useParams();

  const article = id ? articles[id as keyof typeof articles] : null;

  if (!article) {
    return <h1>Article not found</h1>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p style={{ whiteSpace: "pre-line" }}>{article.content}</p>
    </div>
  );
}