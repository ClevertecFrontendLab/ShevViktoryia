import './MobileSidebar.css';
import Logo from '../../assets/img/логотип.svg';
import { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import SidebarItems from '@components/SidebarItems/SidebarItems';

const MobileSidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleSidebar = () => setIsOpen(!isOpen);
    return(
        <aside className="menu mobile" style={{width: isOpen ? "106px" : "0"}}>
            <nav className='navigation mobile'>
                <div className="logo_wrapper mobile" style={{padding: isOpen ? "30px 46px 0 29px" : "19px 18px"}}>
                    <img src={Logo} alt="Logo mobile" style={{display: isOpen ? 'block' : 'none'}} />
                </div>
                <Menu className={isOpen ? "item_list mobile" : "item_list close mobile"} mode="vertical" items={SidebarItems} style={{padding: isOpen ? "30px 46px 0 29px" : "19px 18px"}} />
                <div className="sidebar_button mobile" style={{left: isOpen ? "140px" : "10px"}}>{isOpen ? <MenuFoldOutlined className='icon_btn' onClick={toggleSidebar} style={{color: "#8C8C8C"}} data-test-id="sider-switch-mobile"/> : <MenuUnfoldOutlined className='icon_btn' onClick={toggleSidebar} style={{color: "#8C8C8C"}}/>}</div>
                <li className={isOpen ? "logout mobile" : "logout close mobile"}><LogoutOutlined style={{ fontSize: '14px', color: '#061178', marginRight: '10px' }} /> <p>Выйти</p></li>
            </nav>
        </aside>
    )
}

export default MobileSidebar
