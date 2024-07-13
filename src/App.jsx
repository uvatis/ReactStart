import {Input} from "./components/form/Input.jsx";
import {CheckBox} from "./components/form/CheckBox.jsx";
import {useState} from "react";

function App () {
    const [showStocked, setShowStocked] = useState(false)

    return <>
        <div className="container">
            <SearchBar showStocked={showStocked} onStockedChange={setShowStocked}/>
        </div>
    </>
}
// eslint-disable-next-line react/prop-types
function SearchBar({showStocked, onStockedChange}) {
    return <div>
        <div className="mb-3 my-3">
            <Input value="" placeholder="Rechercher..." onChange={() => null}/>
            <CheckBox
                id="stocked"
                checked={showStocked}
                onChange={onStockedChange} label="N'afficher que les VIP"/>
        </div>
    </div>
}

export default App