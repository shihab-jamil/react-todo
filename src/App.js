import React, { useState, forwardRef, useEffect } from "react";
import "./App.css";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { FormControl, Input, InputLabel } from "@material-ui/core";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'; 
import FlipMove from "react-flip-move";

const App = forwardRef((prop, ref) => {
  const [item, setItem] = useState("");
  const [lists, setList] = useState([]);
  // const [color, setColor] = useState('')

  const colors = [
    "#a6c1ee",
    "#fda085",
    "#8fd3f4",
    "#f5576c",
    "#00f2fe",
    "#fa71cd",
    "#f9d423",
    "#d09693",
    "#f4d03f",
    "#c43a30",
    "#f5d100",
    "#fc00ff",
  ];

  function randomColor() {
    let index = Math.floor(Math.random() * 12);
    console.log("function has been called")
    return colors[index];
  }

  const addToTheLists = () => {
    setList([...lists, item]);
    setItem("");
  };

  function deleteItem(index) {
    let arr = lists.filter((val) => {
      return val != lists[index];
    });
    setList(arr);
  }

  return (
    <div className="App" ref={ref}>
      <div className="todo-card col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-10 offset-sm-1 col-10 offset-1 mx-auto">
        <h1>ToDo List</h1>
        <form>
          <FormControl className="inputForm">
            <div className="row">
              <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                <InputLabel htmlFor="my-input" className="inputLabel">
                  Add to the List
                </InputLabel>
                <Input
                  className="input"
                  id="my-input"
                  value={item}
                  onChange={(event) => setItem(event.target.value)}
                />
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                <button
                  className="addButton"
                  disabled={!item}
                  type="submit"
                  onClick={addToTheLists}
                >
                  <AddToPhotosIcon />
                </button>
              </div>
            </div>
          </FormControl>
        </form>
        <div className="itemList">
          <FlipMove>
            {lists.map((list, index) => (
              <h2
                key={index}
                className="singleItem"
                style={{ backgroundColor: randomColor() }}
              >
                {list} <span> </span>
                <strong
                  className="deleteButton"
                  onClick={(event) => deleteItem(index)}
                >
                  <DeleteForeverIcon />
                </strong>
              </h2>
            ))}
          </FlipMove>
        </div>
      </div>
    </div>
  );
});

export default App;
