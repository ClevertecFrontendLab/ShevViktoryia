import './SupportService.css'
import React from 'react';
import { Card } from 'antd';

const SupportService: React.FC = (props) => {
    const {services} = props;
    if (!services || services.length === 0) return <p>not found</p>
    return (
        services.map(service => {
            return (
                <Card title="Card" size="small">
                    <p>${service.content}</p>
                </Card>
            )
        })
    )
}
