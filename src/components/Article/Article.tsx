import { Link, Navigate, useLocation } from "react-router-dom";
import { ROUTES } from "router";

const Article = () => {
  // const params = useParams();

  const location = useLocation();
  const article = location.state?.payload;

  if (!article) return <Navigate to={ROUTES.HOME} replace={true} />;

  const locationForBackLink = location.state?.from ?? "/";

  return (
    <div>
      Article page
      <Link to={locationForBackLink}>Back</Link>;
    </div>
  );
};

export default Article;
