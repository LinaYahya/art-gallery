/* eslint-disable react/prop-types */
import React from 'react';
import { Form, Input, Select } from 'antd';

const { Option } = Select;

const CollectionCreateForm = React.forwardRef(({ checkoutData }, ref) => {
  const PropertyForm = () => {
    if (checkoutData) {
      const keys = Object.keys(checkoutData.property);

      return (
        <Form.Item
          name="property"
          label="السعر"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select className="select-before">
            {keys.map((key) => (
              <Option value={key}>
                الأبعاد: {key} , السعر: {checkoutData.property[key]}
              </Option>
            ))}
          </Select>
        </Form.Item>
      );
    }

    return <Select className="select-before" />;
  };

  return (
    <Form
      form={ref}
      layout="horizontal"
      name="form_in_modal"
      initialValues={{
        paintingId: checkoutData.painting_id,
        title: checkoutData.title,
        description: checkoutData.description,
        category: checkoutData.category,
      }}
    >
      <Form.Item
        name="paintingId"
        label="رقم اللوحة"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input disabled />
      </Form.Item>

      <Form.Item name="title" label="اسم اللوحة">
        <Input disabled />
      </Form.Item>

      <Form.Item name="description" label="الوصف">
        <Input type="textarea" disabled />
      </Form.Item>

      <Form.Item name="category" label="التصنيف">
        <Input disabled />
      </Form.Item>
      <PropertyForm />
    </Form>
  );
});

export default CollectionCreateForm;
