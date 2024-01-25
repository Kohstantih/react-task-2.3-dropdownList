import { useState } from 'react'
import { DropdownItem } from './DropdownItem';
export function DropdownList(props) {
    const { marker, list } = props;
    let [activeItem, toggleActiveItem] = useState(list[0]);
    const listClasses = marker ? 'dropdown-list open' : 'dropdown-list';

    return (
        <ul className={listClasses}>{list.map((l) => {
            let itemClass = l === activeItem ? 'dropdown-item active-item' : 'dropdown-item';
            return <DropdownItem 
                key={l} 
                item={l} 
                itemClass={itemClass} 
                activationItem={(e) => toggleActiveItem(activeItem = e.target.dataset.id)}
            />
        })}</ul>
    )
}