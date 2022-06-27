import React, { useEffect } from "react";
import { Button, Input, Drawer, Space } from "antd";
import { getAllParcels, list } from "../utils/others/parcelApi";
import { useState } from "react";
import DataFetchingState from "../components/common/DataFetchingState";
import "../utils/css/status.css";
import moment from "moment";

const Status = () => {
  const [state, setState] = useState({
    parcels: [],
    results: [],
    name: "",
    loading: true,
    search: "",
    searched: false,
    error: null,
  });

  /* drawrer */
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState();

  const showDefaultDrawer = () => {
    setSize("default");
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const loadParcels = () => {
    setState({ ...state, loading: true });
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
    loadParcels();
  }, []);

  const searchData = () => {
    if (state.search) {
      list(state.search)
        .then(({ data }) =>
          setState({
            ...state,
            results: [...data],
            searched: true,
            loading: false,
          })
        )
        .catch((error) => {
          setState({ ...state, error: error, loading: false });
          console.log(error);
        });
    }
  };

  const handleChange = (name, value) => {
    setState({
      ...state,
      error: null,
      search: { ...state.search, [name]: value },
    });
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    searchData();
  };

  const searchMessage = (searched, results) => {
    if (searched && results.length > 0) {
      return (
        <h2
          style={{ textAlign: "center" }}
        >{`Found ${results.length} parcel`}</h2>
      );
    }
    if (searched && results.length < 1) {
      return <h2 style={{ textAlign: "center" }}>{`No parcels found`}</h2>;
    }
  };

  const searchedParcels = (results = []) => {
    console.log(results);
    return (
      <div>
        <h2>{searchMessage(state.searched, state.results)}</h2>
        <DataFetchingState
          loading={state.loading}
          error={state.error}
          onClickTryAgain={loadParcels}
        >
          {results.map((p, i) => (
            <div className="result-parcel-container" key={i}>
              <h3 className="result-parcel-info">Code: {p.code}</h3>
              <h3 className="result-parcel-info">Name: {p.name}</h3>
              <h3 className="result-parcel-info">Status: {p.status}</h3>
              <h3 className="result-parcel-info">
                Description: {p.description}
              </h3>
              <hr />
              <p className="result-parcel-info">
                Added on: {moment(p.createdAt).format("YYYY/MM/DD , h:mm a")}
              </p>
              <p className="result-parcel-info">
                Updated at : {p.status},{" "}
                {moment(p.updatedAt).format("YYYY/MM/DD , h:mm a")}
              </p>
            </div>
          ))}
        </DataFetchingState>
      </div>
    );
  };

  return (
    <>
      <Space>
        <Button
          type="secondary"
          style={{ position: "absolute", right: "20px" }}
          onClick={showDefaultDrawer}
        >
          Details of the Company
        </Button>
      </Space>
      <Drawer
        title={"Your Parcel Details"}
        placement="right"
        size={size}
        onClose={onClose}
        visible={visible}
      >
        <h3>Info</h3>
        <p>Name: Your Parcel</p>
        <p>Established: 2022-01-20</p>
        <p>City: Kathmandu</p>
        <p>Account: apptech@gmail.com</p>

        <h3>Services</h3>
        <ul style={{ marginLeft: "4%" }}>
          <li>Packaging Services</li>
          <li>Door-to-door Shipping</li>
          <li>Tracking Services</li>
        </ul>

        <h3>Contacts</h3>
        <p>Email: apptech@gmail</p>
        <p>Phone Number: 980000000</p>
        <p>Pan Number: 123456</p>
        <p>Github: github.com/parcel/your-parcel/ </p>
      </Drawer>
      <form onSubmit={searchSubmit} className="status-container">
        <Input
          onChange={(e) => handleChange("search", e.target.value)}
          type="search"
          placeholder="Search Parcel"
          required
          autoFocus
        />
        <Button onClick={searchSubmit}>Search</Button>
      </form>
      <div>{searchedParcels(state.results)}</div>
    </>
  );
};

export default Status;
