import React from "react";

interface SidebarListItems {
    items: {id: string, svg: string, title: string}[];
}

const SidebarList: React.FC<SidebarListItems> = props => {
    return (
        <ul className="SidebarList">
            {props.items.map(item => {
                <li key={item.id}>{item.svg} {item.title}</li>
            })}
        </ul>
    )
}

export default SidebarList;
