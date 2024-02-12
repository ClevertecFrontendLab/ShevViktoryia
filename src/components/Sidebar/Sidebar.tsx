import './Sidebar.css'
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import SidebarList from '@components/SidebarItems/SidebarItems';
import Logo from '../../assets/img/логотип.svg'

const Sidebar: React.FC = () => {
    const [items, setItems] = useState<{id: string; svg: string; title: string}[]>([]);
    // useEffect(() => {
    //     setItems(prevItems => [
    //         ...prevItems,

    //     ])
    // })
    return(
        <aside className="menu">
            <nav className='navigation'>
                <div className="logo_wrapper">
                    <img src={Logo} alt="Logo" />
                </div>
                <ul className="SidebarList">
                    <SidebarList items={items}/>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar
