import './Sidebar.css';
import Logo from '../../assets/img/логотип.svg'
import small_logo from '../../assets/img/small_log.svg'
import { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import SidebarItems from '@components/SidebarItems/SidebarItems';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleSidebar = () => setIsOpen(!isOpen);
    return(
        <aside className="menu" style={{width: isOpen ? "208px" : "64px"}}>
            <nav className='navigation'>
                <div className="logo_wrapper" style={{padding: isOpen ? "30px 46px 0 29px" : "19px 18px"}}>
                    <img src={isOpen ? Logo : small_logo} alt="Logo" />
                </div>
                <Menu className={isOpen ? "item_list" : "item_list close"} mode="vertical" items={SidebarItems} style={{padding: isOpen ? "30px 46px 0 29px" : "19px 18px"}} />
                <div className="sidebar_button" style={{left: isOpen ? "187px" : "43px"}}>{isOpen ? <MenuFoldOutlined className='icon_btn' onClick={toggleSidebar} style={{color: "#8C8C8C"}} data-test-id="sider-switch"/> : <MenuUnfoldOutlined className='icon_btn' onClick={toggleSidebar} style={{color: "#8C8C8C"}}/>}</div>
                <li className={isOpen ? "logout" : "logout close"}><LogoutOutlined style={{ fontSize: '14px', color: '#061178', marginRight: '10px' }} /> <p>Выйти</p></li>
            </nav>
        </aside>
    )
}

export default Sidebar
