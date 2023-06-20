import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Form } from './Form';
import { Button } from '../Button';
import { Row, Col } from '../Grid';

const meta: Meta<typeof Form> = {
    title: 'Form',
    component: Form,
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Primary: Story = {
    render: () => (
        <Form onSubmit={(data) => { console.log(data); }} defaultValues={{ name: '' }}>
            <Row>
                <Col span={24}>
                    <Form.FormInput name="name" label="Name"/>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Button type="submit" label="Submit"/>
                </Col>
            </Row>

        </Form>
    ),
};
