import "./App.css";
import React, { createContext, useState, lazy, Suspense } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useCallback, useMemo } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import Showemployee from "./Showemployee";
import Showstudent from "./Showstudent";
import * as yup from "yup";
import User from "./User";
import Header from "./Header";
import Sidenav from "./Sidenav";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { Select, MenuItem, TextField } from "@mui/material";


//import Editform from './Editform';
const Usertable = lazy(() => import("./Usertable"));

export const Globaldata = createContext();

function Userform() {
  const methods = useForm();
  const schema = yup.object().shape({
    name: yup.string().min(2).required(),
    number: yup.number().required(),
    email: yup.string().email().required(),
    user: yup.string(),
    officename: yup.string().when("user", {
      is: "employee",
      then: yup.string().required(),
    }),
    experience: yup.string().when("user", {
      is: "employee",
      then: yup.string().required(),
    }),
    collageName: yup.string().when("user", {
      is: "student",
      then: yup.string().required(),
    }),
    schoolName: yup.string().when("user", {
      is: "student",
      then: yup.string().required(),
    }),
    hobbies: yup.string().when("user", {
      is: "student",
      then: yup.string().required(),
    }),
  });

  const [showemployee, setShowemployee] = useState(false);
  const [showstudent, setShowstudent] = useState(false);
  const [showform, setShowform] = useState(true);
  const [edit, setEdit] = useState(false);
  const [array, setArray] = useState([]);
  const [val, setVal] = useState("Select User");
  const [selectedValue, setSelectedValue] = useState("User");

  const inputdata = {
    name: " ",
    email: " ",
    number: " ",
    user: "user",
    officename: " ",
    experience: " ",
    schoolName: " ",
    collageName: " ",
    hobbies: " ",
  };
  const resetdata = () => {
    reset(inputdata);
    console.log(inputdata);
    setEdit(false);
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: inputdata,
  });

  const onSubmit = (data) => {
    edit ? array.splice(arr, 1, data) : setArray([...array, data]);
    resetdata();
    setShowform(false);
    setShowemployee(false);
    setShowstudent(false);
    console.log(array, "onsubmit", data);
  };
  const onSubmit1 = (data) => {
    // edit? (array.splice(arr, 1, data)):setArray([...array,data])
    // //resetdata();

    console.log(data, "onsubmit1");
  };
  const onError = () => {};
  let arr = [];
  const handleUpdate = useCallback((i, array) => {
    arr = array.filter((element, index) => element.name == i);

    inputdata.name = arr[0].name;
    inputdata.email = arr[0].email;
    inputdata.number = arr[0].number;
    // inputdata.user=arr[0].user
    // if(arr[0].user==='employee'){
    //   inputdata.officename=arr[0].officename
    //   inputdata.experience=arr[0].experience
    // }
    // if(arr[0].user==='student'){
    //   inputdata.schoolName=arr[0].schoolName
    //   inputdata.collageName=arr[0].collageName
    //   inputdata.hobbies=arr[0].hobbies
    // }
    reset(inputdata);
    setEdit(true);
    
  }, []);
  const handleDelete = useCallback((index, array) => {
    console.log(array);
    array.splice(index, 1);
    setArray([...array]);
  }, []);
  const contextValue = useMemo(
    () => ({
      array,
      handleUpdate,
      handleDelete,
    }),
    [array, handleUpdate, handleDelete]
  );
  

  return (
    <Globaldata.Provider value={contextValue}>
      <div className="App">
        <div>
          <Header />
        </div>
        <div>
          <Sidenav />
        </div>

        <div className="table">
          {/* <Link to="/User"><Button variant="contained" color="success"  >Back to Homepage</Button></Link> */}
          <Suspense fallback={<h1>Loading...</h1>}>
            <Usertable />
          </Suspense>
        </div>
        <div className="formdiv">
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <h1>User Form</h1>
              <div>
                {/* <InputLabel size='normal'>Name</InputLabel> */}
                <TextField
                  name="name"
                  {...register("name")}
                  type="text"
                  label="Name"
                />
              </div>
              <InputLabel size="normal" error>
                {errors.name?.message}
              </InputLabel>
              <div>
                {/* <InputLabel size='normal'>Email</InputLabel> */}
                <TextField
                  type="email"
                  color="primary"
                  name="email"
                  {...register("email")}
                  label="Email"
                />
              </div>
              <InputLabel size="normal" error>
                {errors.email?.message}
              </InputLabel>
              <div>
                {/* <InputLabel size='normal'>Contact no</InputLabel> */}
                <TextField
                  type="number"
                  name="number"
                  {...register("number")}
                  label="Contact no."
                />
              </div>
              <InputLabel size="normal" error>
                {errors.number?.message}
              </InputLabel>
              <div>
                <InputLabel size="normal">Select User</InputLabel>

                <Select
                  defaultValue="user"
                  sx={{
                    width: 150,
                    height: 40,
                  }}
                  {...register("user")}
                >
                  <MenuItem value="user" disabled>
                    User
                  </MenuItem>
                  <MenuItem
                    value={"Employee"}
                    onClick={() =>
                      setShowemployee(true) & setShowstudent(false)
                    }
                  >
                    Employee
                  </MenuItem>
                  <MenuItem
                    value={"Student"}
                    onClick={() =>
                      setShowstudent(true) & setShowemployee(false)
                    }
                  >
                    Student
                  </MenuItem>
                </Select>
              </div>

              {showemployee && <Showemployee />}
              {showstudent && <Showstudent onSubmit={onSubmit} />}

              <Button
                id="button"
                variant="contained"
                onClick={() => resetdata()}
              >
                {" "}
                Reset
              </Button>
              {edit ? (
                <Button type="submit" variant="contained">
                  Update
                </Button>
              ) : (
                <Button type="submit" variant="contained">
                  {" "}
                  Submit
                </Button>
              )}
            </form>
          </FormProvider>
        </div>
      </div>
    </Globaldata.Provider>
  );
}

export default Userform;
