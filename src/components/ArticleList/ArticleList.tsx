import Table from "@mui/joy/Table";
import { FC } from "react";
import { Article } from "types/dataTypes";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

interface IArticlesProps {
  list: Article[];
}

const ArticleList: FC<IArticlesProps> = ({ list }) => {
  return (
    <Table hoverRow>
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Image</th>
          <th>Title</th>
          <th>Authors</th>
          <th>Description</th>
          <th>Publication date</th>
          <th>Original URL</th>
        </tr>
      </thead>
      <tbody>
        {list.map(
          ({ url, author, description, publishedAt, title, urlToImage }) => (
            <tr key={url}>
              <td>
                <img src={urlToImage} alt={title} width="100" height="70" />
              </td>
              <td>{title}</td>
              <td>{author}</td>
              <td>{description}</td>
              <td>{`${publishedAt}`}</td>
              <td>url</td>
            </tr>
          )
        )}
        {/* {rows.map((row) => (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.calories}</td>
            <td>{row.fat}</td>
            <td>{row.carbs}</td>
            <td>{row.protein}</td>
          </tr>
        ))} */}
      </tbody>
    </Table>
  );
};

export default ArticleList;
