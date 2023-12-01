import { useGetLatestQuery, useGetNewsQuery } from "redux/newsApi/newsApi";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const Home = () => {
  //   const { data } = useGetLatestQuery();
  const { data } = useGetNewsQuery();

  if (!data) return null;
  console.log(data);

  return (
    <div>
      <Select
        placeholder="Select a pet…"
        indicator={<KeyboardArrowDown />}
        sx={{
          width: 240,
          [`& .${selectClasses.indicator}`]: {
            transition: "0.2s",
            [`&.${selectClasses.expanded}`]: {
              transform: "rotate(-180deg)",
            },
          },
        }}
      >
        <Option value="business">Business</Option>
        <Option value="entertainment">Entertainment</Option>
        <Option value="general">General</Option>
        <Option value="health">Health</Option>
        <Option value="science">Science</Option>
        <Option value="sports">Sports</Option>
        <Option value="technology">Technology</Option>
      </Select>
    </div>
  );
};

export default Home;
