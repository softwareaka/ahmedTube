import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link, useParams } from "react-router-dom";

function Channel() {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>Channel</h1>
      <Stack>
        <Link to={"/"}>
          <Button variant="contained">Home</Button>
        </Link>
      </Stack>
    </div>
  );
}

export default Channel;
