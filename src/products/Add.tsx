import { Button, Form, Input, InputNumber } from "antd";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
import { useNavigate } from "react-router-dom";
import { IProducts } from "../types/products";
import { useAddProductMutation } from "./productsApi";
const Add = () => {
  const navigate = useNavigate();
  const [addProduct] = useAddProductMutation();
  const onFinish = (values: IProducts) => {
    addProduct(values)
      .unwrap()
      .then(() => {
        navigate("/");
      });
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<IProducts>) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<IProducts>
          label="Username"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<IProducts>
          label="Password"
          name="price"
          rules={[
            { required: true, message: "Please input your password!" },
            {
              validator: (_, value) => {
                if (value < 1) {
                  return Promise.reject("Price cannot be less than 1");
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <InputNumber min={1} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Add;
