import React, { useState, useEffect } from "react";
import { getAllParcels, createParcel } from "../utils/others/parcelApi";
import Card from "../components/Card";
import "../index.css";
import DataFetchingState from "../components/common/DataFetchingState";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Space, Button, Input, message } from "antd";

const Parcel = () => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    parcels: [],
    newParcel: "",
    modalVisible: false,
  });

  //create parcel process
  const handleChange = (name, value) => {
    setState({
      ...state,
      error: null,
      newParcel: { ...state.newParcel, [name]: value },
    });
  };

  const clickSubmit = () => {
    setState({ ...state, error: null, loading: false });
    const addParcel = {
      code: state.newParcel.code,
      name: state.newParcel.name,
      description: state.newParcel.description,
    };

    createParcel(addParcel)
      .then((parcel) => {
        setState({
          ...state,
          newParcel: parcel,
          error: null,
          loading: false,
        });
        message.success("Parcel created");
        window.location.href = "/parcels";
      })
      .catch((error) => {
        setState({ ...state, error: error, loading: false });
        message.error(error?.message || "Error creating parcel");
        console.log(error);
      });
  };

  //create parcel process ends here

  const Searchpart = () => {
    return (
      <form className="search-container">
        <input type="search" />
        <button className="search-button">search</button>
      </form>
    );
  };

  const fetchParcels = () => {
    setState({ ...state, loading: true, error: null });
    getAllParcels()
      .then((parcels) =>
        setState({ ...state, parcels: parcels, loading: false })
      )
      .catch((error) => {
        setState({ ...state, error: error, loading: false });
        console.log(error);
      });
  };

  useEffect(() => {
    fetchParcels();
  }, []);

  return (
    <div>
      {Searchpart()}
      <Space wrap>
        <Button
          style={{
            position: "absolute",
            right: "215px",
            marginTop: "7%",
            fontSize: "15px",
            color: "white",
            backgroundColor: "#060b26",
            height: "40px",
            flexWrap: "wrap",
          }}
          onClick={() => setState({ ...state, modalVisible: true })}
        >
          <PlusOutlined style={{ fontSize: "20px" }} />
          Add parcel
        </Button>
        <Modal
          title="Create Parcel"
          style={{ top: 20 }}
          visible={state.modalVisible}
          onOk={(e) => {
            e.preventDefault();
            setState(
              {
                ...state,
                modalVisible: false,
              },
              clickSubmit()
            );
          }}
          onCancel={() => {
            setState({
              ...state,
              modalVisible: false,
            });
          }}
        >
          <form>
            <Input
              type="number"
              placeholder="code"
              onChange={(e) => handleChange("code", e.target.value)}
              value={state.newParcel.code}
              name="code"
              required
            />
            <br />
            <br />
            <Input
              type="text"
              placeholder="name"
              onChange={(e) => handleChange("name", e.target.value)}
              value={state.newParcel.name}
              name="name"
              required
            />
            <br />
            <br />
            <Input
              type="text"
              placeholder="description"
              onChange={(e) => handleChange("description", e.target.value)}
              value={state.newParcel.description}
              name="description"
            />
          </form>
        </Modal>
      </Space>
      <div className="container">
        <DataFetchingState
          loading={state.loading}
          error={state.error}
          onClickTryAgain={fetchParcels}
        >
          <>
            {state.parcels.map((p, i) => {
              return (
                <Card
                  key={i}
                  id={p._id}
                  code={p.code}
                  name={p.name}
                  imageUrl="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBhcmNlbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  description={p.description}
                >
                  <p>{p.code}</p>
                </Card>
              );
            })}
          </>
        </DataFetchingState>
      </div>
    </div>
  );
};

export default Parcel;
