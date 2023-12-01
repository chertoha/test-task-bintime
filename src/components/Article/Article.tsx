import { useParams } from "react-router-dom";

const Article = () => {
  const params = useParams();

  return <div>{params.id}</div>;
};

export default Article;
