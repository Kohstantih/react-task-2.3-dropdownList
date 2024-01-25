export function ButtonName(props) {
    const { text, icon, iconClass} = props;

    return (
        <>
            <span>{text}</span>
            <i className={iconClass}>{icon}</i>
        </>
    )
}