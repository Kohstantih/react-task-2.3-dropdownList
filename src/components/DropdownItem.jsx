export function DropdownItem(props) {
    const { item, itemClass, activationItem } = props;
    
    return (
        <li 
        className={itemClass} 
        data-id={item} 
        onClick={activationItem}>{item}</li>
    )
}