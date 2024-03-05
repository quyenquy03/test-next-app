import { Menu } from 'antd';
import Sider from "antd/es/layout/Sider";
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import Link from "next/link";
import style from './AdminSidebar.module.scss'
import classNames from "classnames/bind";
const cx = classNames.bind(style)

function AdminSidebar({collapsed}) {
    const items = [
        {
            key: '1',
            icon: <UserOutlined />,
            label: (<Link href={'/'}> dashboard </Link> ),
        },
        {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: (<Link href={'/pages'}> Home </Link> ),
        },
        {
            key: '3',
            icon: <UploadOutlined />,
            label: 'nav 3',
        },
        {
            key: '4',
            icon: <UserOutlined />,
            label: 'nav 4',
        },
        {
            key: '5',
            icon: <VideoCameraOutlined />,
            label: 'nav 5',
        },
        {
            key: '6',
            icon: <UploadOutlined />,
            label: 'nav 6',
        },
        {
            key: '7',
            icon: <UserOutlined />,
            label: 'nav 7',
        },
        {
            key: '8',
            icon: <VideoCameraOutlined />,
            label: 'nav 8',
        },
        {
            key: '9',
            icon: <UploadOutlined />,
            label: 'nav 9',
        },
        {
            key: '11',
            icon: <UserOutlined />,
            label: 'nav 10',
        },
        {
            key: '12',
            icon: <UserOutlined />,
            label: 'nav 10',
        },
        {
            key: '13',
            icon: <UserOutlined />,
            label: 'nav 10',
        },
        {
            key: '14',
            icon: <UserOutlined />,
            label: 'nav 10',
        },
        {
            key: '15',
            icon: <UserOutlined />,
            label: 'nav 10',
        },
        {
            key: '16',
            icon: <UserOutlined />,
            label: 'nav 10',
        },
        {
            key: '17',
            icon: <UserOutlined />,
            label: 'nav 10',
        },
        {
            key: '18',
            icon: <UserOutlined />,
            label: 'nav 10',
        },
        {
            key: '19',
            icon: <UserOutlined />,
            label: 'nav 10',
        },
        {
            key: '20',
            icon: <UserOutlined />,
            label: 'nav 10',
        },
        {
            key: '21',
            icon: <UserOutlined />,
            label: 'nav 10',
        },
    ];
    return (
        <Sider 
            width={250}
            trigger={null} 
            collapsible 
            collapsed={collapsed}
            style={{ 
                position: 'fixed', 
                zIndex: '2',
                backgroundColor: '#ccc',
                left: 0, 
                top: 0, 
                bottom: 0
            }}
        >
            <Menu
                activeKey="2"
                theme="light"
                mode="inline"
                defaultSelectedKeys={['8']}
                items={items}
                className={cx('menu-bar')}
            />
        </Sider>
    )
}
export default AdminSidebar