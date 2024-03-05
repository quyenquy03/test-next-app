'use client'
import {Button } from "antd";
import { Header } from "antd/es/layout/layout";
import React from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';

export default function AdminHeader({collapsed, onCollapsed}) {
    return (
        <Header 
            style={{ 
                padding: 0, 
                background: '#333', 
                position: 'fixed', 
                zIndex: '4',
                top: 0,
                right: 0,
                left: 0,
                height: '70px',
            }}
        >
            <div className="demo-logo-vertical" 
                style={{
                    height: '50px',
                    position:'fixed',
                    top: 0,
                    zIndex: 3
                }}/>
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => onCollapsed(!collapsed)}
                    style={{
                        color: 'white',
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                        position:'absolute',
                        top: 0,
                        left: '0'
                    }}
                />
        </Header>
    )
}