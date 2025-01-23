import { Button, Drawer, Form, Input, Select, Space } from "antd";
import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import {
  saveCategory,
  updateCategory,
} from "../../../store/category/categorySlice";
import toast from "react-hot-toast";
const CreateCategory = ({ onClose, open, data, isAdd, isView, permission }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleSaveClick = (e) => {
    e.preventDefault();
    form.submit();
  };

  const onFinish = async (values) => {
    const model = {
      ...values,
      id: isAdd ? 0 : data.id,
    };

    try {
      if (isAdd) {
        await dispatch(saveCategory(model))
          .then((response) => {
            if (
              response &&
              response.payload &&
              response.payload.statusCode === 201
            ) {
              toast.success(
                response && response.payload && response.payload.message,
                { duration: 3000 }
              );
              form.resetFields();
            }
          })
          .catch((error) => {
            console.error("Error submitting form:", error);
            toast.error(error, { duration: 3000 });
          });
      } else {
        await dispatch(updateCategory(model))
          .then((response) => {
            if (
              response &&
              response.payload &&
              response.payload.statusCode === 200
            ) {
              toast.success(
                response && response.payload && response.payload.message,
                { duration: 3000 }
              );
            }
          })
          .catch((error) => {
            console.error("Error submitting form:", error);
            toast.error(error, { duration: 3000 });
          });
      }
    } catch (error) {}
  };
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const SubmitButton = ({ form, handleSaveClick, children }) => {
    const [submittable, setSubmittable] = React.useState(false);

    // Watch all values
    const values = Form.useWatch([], form);
    React.useEffect(() => {
      form
        .validateFields({
          validateOnly: true,
        })
        .then(() => setSubmittable(true))
        .catch(() => setSubmittable(false));
    }, [form, values]);

    return (
      <Button type="primary" htmlType="submit" onClick={handleSaveClick}>
        {children}
      </Button>
    );
  };

  return (
    <Drawer
      title="Add/Edit Category"
      placement="right"
      width={600}
      onClose={onClose}
      open={open}
      maskClosable={false}
      extra={
        <Space>
          {permission &&
          (permission.can_create || permission.can_update) &&
          !isView ? (
            <SubmitButton form={form} handleSaveClick={handleSaveClick}>
              Save
            </SubmitButton>
          ) : null}
        </Space>
      }
    >
      <Form
        disabled={isView}
        {...formItemLayout}
        form={form}
        onFinish={onFinish}
        name="category_creation"
        initialValues={{
          id: (data && data.id) || 0,
          name: (data && data.name) || "",
          description: (data && data.description) || "",
        }}
        scrollToFirstError
      >
        <Form.Item
          name="name"
          label="Category Name"
          rules={[
            {
              required: true,
              message: "Enter Category Name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Category Description">
          <Input />
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default CreateCategory;
