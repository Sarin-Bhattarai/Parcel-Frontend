import React, { useState, useEffect } from "react";
import {
  getSingleParcel,
  deleteParcel,
  updateParcel,
} from "../utils/others/parcelApi";
import DataFetchingState from "../components/common/DataFetchingState";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal, Space, Button, Input, Select, message } from "antd";
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
    updateLoading: false,
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

  const handleChange = (name, value) => {
    setState({
      ...state,
      error: null,
      parcel: { ...state.parcel, [name]: value },
    });
  };

  const submitParcelForm = () => {
    const parcel = {
      code: state.parcel.code,
      status: state.parcel.status,
      remarks: state.parcel.remarks,
    };
    updateParcel(id, parcel)
      .then((parcel) => {
        setState({
          ...state,
          code: parcel.code,
          status: parcel.status,
          remarks: parcel.remarks,
          updateLoading: false,
        });
        message.success("Successfully updated parcel");
      })
      .catch((error) => {
        setState({ ...state, updateLoading: false });
        message.error(error?.message || "Error updating parcel");
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
              <th>Name</th>
              <th>Code</th>
              <th>Status</th>
              <th>Description</th>
              <th>Remarks</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{state?.parcel?.name}</td>
              <td>{state?.parcel?.code}</td>
              <td>{state?.parcel?.status}</td>
              <td>{state?.parcel?.description}</td>
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
                    okButtonProps={{ loading: state.updateLoading }}
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
                        onChange={(e) => handleChange("code", e.target.value)}
                        value={state.parcel.code}
                        name="code"
                      />
                      <br />
                      <br />
                      <Select
                        defaultValue="pending"
                        style={{ width: "100%", height: "28px" }}
                        onChange={(value) => handleChange("status", value)}
                        value={state.parcel.status}
                        name="status"
                      >
                        <Option value="pending">pending</Option>
                        <Option value="processing">processing</Option>
                        <Option value="delivering">delivering</Option>
                        <Option value="rejected">rejected</Option>
                        <Option value="delivered">delivered</Option>
                      </Select>
                      <br />
                      <br />
                      <Input
                        type="text"
                        placeholder="remarks"
                        required
                        onChange={(e) => handleChange("remark", e.target.value)}
                        value={state.parcel.remark}
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
