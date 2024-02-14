import './Sidebar.css';
import Logo from '../../assets/img/логотип.svg'
import SidebarList from '@components/SidebarItems/SidebarItems';
import { useState } from 'react';
import { Menu } from 'antd';

const Sidebar: React.FC = () => {
    const [current, setCurrent] = useState('achievements');
    return(
        <aside className="menu">
            <nav className='navigation'>
                <div className="logo_wrapper">
                    <img src={Logo} alt="Logo" />
                    <Menu className="item_list" selectedKeys={[current]} mode="vertical" items={SidebarList} />
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar
