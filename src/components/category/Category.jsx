import { Stack } from "@mui/material";
import { cateogry } from "../../constants/category";
import { colors } from "../../constants/colors";

import "./category.css";

function Category({ selectCategory, selectCat }) {
  return (
    <Stack
      className="category-container"
      direction={"row"}
      sx={{ overflowX: "scroll" }}
    >
      {cateogry.map((item) => (
        <button
          key={item.name}
          className="category-btn"
          style={{
            borderRadius: "0",
            background: item.name === selectCat && "black",
            color: item.name === selectCat && "white",
          }}
          onClick={() => selectCategory(item.name)}
        >
          <span
            style={{
              color: colors.secondary,
              marginRight: "15px",
              color: item.name === selectCat ? "white" : colors.secondary,
            }}
          >
            {item.icon}
          </span>
          <span style={{ opacity: "1", fontSize: "15px" }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
}

export default Category;
