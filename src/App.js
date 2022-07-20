import { useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
function App() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [updatedId, setUpdatedId] = useState();

  //This is push function for pushing data in the array (condition is for edit )
  const pushData = () => {
    if (edit) {
      setData(
        data.map((v, i) => {
          if (i === updatedId) {
            return [value];
          }
          return v;
        })
      );
      setValue("");
      setEdit(false);
    } else {
      setData((values) => {
        return [...values, value];
      });
      setValue("");
    }
  };

  //This is delete function which is for removal of data from array
  const delfunc = (indexKey) => {
    const updatedList = data.filter((ele, inn) => {
      return inn !== indexKey;
    });
    setData(updatedList);
  };
  const setValueFucn = (e) => {
    setValue(e.target.value);
  };

  //this is edit functiona 
  const editfun = (keyValue) => {
    let ediTItem = data.find((v, i) => {
      return i === keyValue;
    });

    setValue(ediTItem);
    setEdit(true);
    setUpdatedId(keyValue);
  };
  return (
    <div className="App">
      <Box
        sx={{
          width: 300,
          maxWidth: "100%",
          margin: "auto",
          paddingTop: "30px",
        }}
      >
        <TextField
          value={value}
          fullWidth
          label="Todo"
          id="fullWidth"
          onChange={setValueFucn}
        />
      </Box>

      <Stack direction="row" spacing={2}>
        <Button
          style={{ margin: "auto", width: "70%" }}
          onClick={pushData}
          variant="contained"
        >
          Click
        </Button>
      </Stack>

      {data.map((v, i) => {
        return (
          <div className="loopArray">
            <h1
              key={i}
              onClick={() => {
                delfunc(i);
              }}
            >
              {v} 
            </h1>
            <button onClick={() => editfun(i)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
