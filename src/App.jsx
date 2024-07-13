import {Input} from "./components/form/Input.jsx";
import {CheckBox} from "./components/form/CheckBox.jsx";

function App () {
    return <>
        <div className="container">
            <SearchBar />
        </div>
    </>
}
function SearchBar() {
    return <div>
        <div className="mb-3">
            <Input value="" placeholder="Rechercher..." onChange={() => null}/>
            <CheckBox id="stocked" checked={false} onChange={() => null} label="N'afficher aue les VIP"/>
        </div>
    </div>
}

export default App