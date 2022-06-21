import React, { useState, useEffect } from "react";
import {
  getSingleParcel,
  deleteParcel,
  updateParcel,
} from "../utils/others/parcelApi";
import DataFetchingState from "../components/common/DataFetchingState";
import {
  ExclamationCircleOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
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
          .then((parcel) => {
            console.log(deleteParcel);
            message.success("Parcel deleted");
          })
          .catch((error) => {
            setState({ ...state, error: error, loading: false });
            message.error(error?.message || "Error deleting parcel");
          });
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
      name: state.parcel.name,
      status: state.parcel.status,
      description: state.parcel.description,
      remarks: state.parcel.remarks,
    };
    updateParcel(id, parcel)
      .then((parcel) => {
        setState({
          ...state,
          code: parcel.code,
          name: parcel.name,
          status: parcel.status,
          description: parcel.description,
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
        <h1 className="perform-header">Perform your action </h1>
        <div className="perform-container">
          <h2 className="data-info">Name : {state?.parcel?.name}</h2>
          <h2 className="data-info">Code : {state?.parcel?.code}</h2>
          <h2 className="data-info">Status : {state?.parcel?.status}</h2>
          <h2 className="data-info">
            Description : {state?.parcel?.description}
          </h2>
          <h2 className="data-info">Remarks : {state?.parcel?.remarks}</h2>

          <div className="perform__button">
            <Space wrap>
              <Button
                onClick={() => setState({ ...state, modalVisible: true })}
              >
                <EditOutlined style={{ color: "#013220", fontSize: "15px" }} />
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
                    disabled
                  />
                  <br />
                  <br />
                  <Input
                    type="text"
                    placeholder="name"
                    onChange={(e) => handleChange("name", e.target.value)}
                    value={state.parcel.name}
                    name="name"
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
                    placeholder="description"
                    onChange={(e) =>
                      handleChange("description", e.target.value)
                    }
                    value={state.parcel.description}
                    name="description"
                  />
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
            <Space wrap>
              <Button onClick={deleteConfirm} type="dashed">
                <DeleteOutlined
                  style={{
                    color: "crimson",
                    fontSize: "15px",
                  }}
                />
                Delete
              </Button>
            </Space>
          </div>
        </div>
      </>
    </DataFetchingState>
  );
};

export default SingleParcel;
