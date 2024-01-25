import { useState } from 'react'
import { Button } from "./button/Button";
import { ButtonName } from './button/ButtonName';
import { DropdownList } from "./DropdownList";

export function Dropdown(props) {
    const { filters } = props;
    let [visabilityMarker, toggleVisability] = useState(false);

    return (
        <div className="container">
            <Button 
                classes={'btn'}
                onClick={() => toggleVisability(visabilityMarker = visabilityMarker === true ? false : true)}
                name={
                    <ButtonName
                        text={'Account Settings'}
                        icon={'public'}
                        iconClass={'material-icons'}
                    />
                }
            />
            <DropdownList marker={visabilityMarker} list={filters}/>
        </div>
    )
}