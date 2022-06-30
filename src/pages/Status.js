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
    return (
      <div>
        <h2>{searchMessage(state.searched, state.results)}</h2>
        <DataFetchingState
          loading={state.loading}
          error={state.error}
          onClickTryAgain={loadParcels}
        >
          {results.map((p, i) => (
            <div key={i}>
              <h3 className="result-parcel-info-code">
                <strong>Code:</strong>
                {p.code}
              </h3>
              <h3 className="result-parcel-info-code">
                <strong>Name:</strong> {p.name}
              </h3>
              <h3 className="result-parcel-info-code">
                <strong>Origin Service Area:</strong> Kathmandu
              </h3>
              <h3 className="result-parcel-info-code">
                <strong>Description:</strong> {p.description}
              </h3>
              <table className="status-table-container">
                <thead>
                  <tr>
                    <th>Event</th>
                    <th>Location</th>
                    <th>Date/Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Status: {p.status}</td>
                    <td></td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>Added on</td>
                    <td></td>
                    <td>{moment(p.createdAt).format("YYYY/MM/DD , h:mm a")}</td>
                  </tr>

                  {p?.logs?.map?.((t, i) => (
                    <tr key={i}>
                      <td>Updated at: {t.status}</td>
                      <td>{t.location}</td>
                      <td>
                        {moment(t.updatedAt).format("YYYY/MM/DD , h:mm a")}
                      </td>
                    </tr>
                  ))}

                  <tr>
                    <td>Updated at: {p.status}</td>
                    <td>{p.location}</td>
                    <td>{moment(p.updatedAt).format("YYYY/MM/DD , h:mm a")}</td>
                  </tr>
                </tbody>
              </table>
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
        title={"Details"}
        placement="right"
        size={size}
        onClose={onClose}
        visible={visible}
      >
        <h3>Info</h3>
        <p>Name: Direct Way Cargo</p>
        <p>Established: 2000-01-20</p>
        <p>City: Madhyapur Thimi Bhaktapur</p>
        <p>Account: info@directwaycargonepal.com.np</p>

        <h3>Other Services</h3>
        <ul style={{ marginLeft: "4%" }}>
          <li>Packaging Services</li>
          <li>Door-to-door Shipping</li>
          <li>Tracking Services</li>
        </ul>

        <h3>Contacts</h3>
        <p>Email: info@directwaycargonepal.com.np</p>
        <p>Phone Number: 980000000</p>
        <p>Pan Number: 123456</p>
      </Drawer>
      <div>
        <h3 className="status-co-header">TRACKING DETAILS</h3>
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
      </div>
      <div>{searchedParcels(state.results)}</div>
      <br />
      <br />
    </>
  );
};

export default Status;
