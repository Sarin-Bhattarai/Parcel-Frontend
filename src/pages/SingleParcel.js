import React, { useState, useEffect } from "react";
import {
  getSingleParcel,
  deleteParcel,
  updateParcel,
} from "../utils/others/parcelApi";
import DataFetchingState from "../components/common/DataFetchingState";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal, Space, Button, Input, Select } from "antd";
import { useParams } from "react-router-dom";

const SingleParcel = () => {
  const { id } = useParams();
  const { confirm } = Modal;
  const { Option } = Select;
  const [state, setState] = useState({
    loading: true,
    error: null,
    parcel: {},
    modalVisible: false,
  });

  const fetchParcel = (id) => {
    setState({ ...state, loading: true, error: null });
    getSingleParcel(id)
      .then((parcel) => setState({ ...state, parcel: parcel, loading: false }))
      .catch((error) => {
        setState({ ...state, error: error, loading: false });
      });
  };

  const deleteConfirm = () => {
    confirm({
      title: "Are you sure delete this parcel?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",

      onOk() {
        deleteParcel(id)
          .then((parcel) => console.log(deleteParcel))
          .catch((error) => {
            setState({ ...state, error: error, loading: false });
          });
        console.log(deleteParcel);
      },

      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const handleChange = (name) => (event) => {
    setState({
      ...state,
      error: null,
      parcel: { ...state.parcel, [name]: event.target.value },
    });
  };

  // const selectChange = (value) => (name) => (event) => {
  //   console.log(`selected ${value}`);
  //   setState({
  //     ...state,
  //     error: null,
  //     parcel: { ...state.parcel, [name]: event.target.value },
  //   });
  // };

  const submitParcelForm = () => {
    const parcel = {
      code: state.parcel.code,
      status: state.parcel.status,
      remarks: state.parcel.remarks,
    };
    updateParcel(id, parcel)
      .then((data) => {
        setState({
          ...state,
          code: data.parcel.code,
          status: data.parcel.status,
          remarks: data.parcel.remarks,
          error: null,
        });
      })
      .catch((error) => {
        setState({ ...state, error: error, loading: false });
      });
  };

  useEffect(() => {
    fetchParcel(id);
  }, [id]);

  return (
    <DataFetchingState
      loading={state.loading}
      error={state.error}
      onClickTryAgain={fetchParcel}
    >
      <>
        <h1 className="table-header">Perform your action </h1>
        <table className="table-container">
          <thead>
            <tr>
              <th>Code</th>
              <th>Status</th>
              <th>Remarks</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{state?.parcel?.code}</td>
              <td>{state?.parcel?.status}</td>
              <td>{state?.parcel?.remarks?.[0]}</td>
              <td>
                <Space wrap>
                  <Button
                    onClick={() => setState({ ...state, modalVisible: true })}
                  >
                    Edit
                  </Button>
                  <Modal
                    title="Edit Parcel"
                    style={{ top: 20 }}
                    visible={state.modalVisible}
                    onOk={(e) => {
                      e.preventDefault();
                      setState(
                        { ...state, modalVisible: false },
                        submitParcelForm()
                      );
                    }}
                    onCancel={() => setState({ ...state, modalVisible: false })}
                  >
                    <form>
                      <Input
                        type="number"
                        placeholder="code"
                        onChange={handleChange("code")}
                        value={state.parcel.code}
                        name="code"
                      />
                      <br />
                      <br />
                      <select
                        defaultValue="pending"
                        style={{ width: "100%", height: "28px" }}
                        onChange={handleChange("status")}
                        value={state.parcel.status}
                        name="status"
                      >
                        <option value="processing">processing</option>
                        <option value="delivering">delivering</option>
                        <option value="rejected">rejected</option>
                        <option value="delivered">delivered</option>
                      </select>
                      <br />
                      <br />
                      <Input
                        type="text"
                        placeholder="remarks"
                        required
                        onChange={handleChange("remarks")}
                        value={state.parcel.remarks}
                        name="remarks"
                      />
                    </form>
                  </Modal>
                </Space>
              </td>
              <td>
                <Space wrap>
                  <Button onClick={deleteConfirm} type="dashed">
                    Delete
                  </Button>
                </Space>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    </DataFetchingState>
  );
};

export default SingleParcel;
