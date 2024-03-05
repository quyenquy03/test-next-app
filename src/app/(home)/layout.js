'use client'
import { Content} from "antd/es/layout/layout";
import React, { useState } from 'react';
import { Layout } from 'antd';
import AdminHeader from "@/components/AdminHeader";
import AdminSidebar from "@/components/AdminSidebar";



export default function DashboardLayout({children}) {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <html lang="en">
        <body>
            <Layout>
                <AdminHeader collapsed={collapsed} onCollapsed={setCollapsed} />
                <AdminSidebar collapsed={collapsed} />
                <Content
                    style={{
                        margin: '70px 10px 10px',
                        padding: '10px',
                        minHeight: 1280,
                        background: '#ccc',
                        borderRadius: '4px',
                        marginLeft: collapsed ? '80px' : '250px',
                        transition: '.15s linear'
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </body>
      </html>
    )
  }