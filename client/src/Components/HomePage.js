import React, { useState, useEffect } from "react";
import axios from "axios";
import { PencilSquare, Trash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { Row, Container } from "react-bootstrap";
import Navbar from "./Common/Navbar";

const HomePage = () => {
  const [userData, setUserData] = useState([]);
  // console.log(userData);

  useEffect(() => {
    axios
      .get("http://localhost:5000/get-all-data")
      .then((response) => {
        setUserData(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onDelete = async (id) => {
    // console.log(id);
    // return;
    try {
      await axios.delete(`http://localhost:5000/delete/${id}`, id);
      setUserData(userData.filter((user) => user._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid>
      <Row className="">
        <Navbar />
      </Row>
      <Container className="pt-5 d-flex justify-content-center align-items-center w-100 flex-column">
        <h3 className="py-4">User Data</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th>Profile</th>
              <th scope="col">User Name</th>
              <th scope="col">Email ID</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Password</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={user._id}>
                <th scope="row">{index + 1}</th>
                <td><img src={user.profileUrl} alt=" " width={40} height={40} className="rounded-circle" /></td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.password}</td>

                <td>
                  <Link
                    to={"/update/" + user._id}
                    style={{ textDecoration: "none" }}
                  >
                    <PencilSquare />
                  </Link>
                </td>

                <td onClick={() => onDelete(user._id)}>
                  <Trash />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Container>
  );
};

export default HomePage;
