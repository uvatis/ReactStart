import {Input} from "./components/form/Input.jsx";
import {CheckBox} from "./components/form/CheckBox.jsx";
import {useEffect, useState} from "react";

function App () {
    const [showStocked, setShowStocked] = useState(false)
    const [search, setSearch] = useState('')



    return <>
        <div className="container">
            <SearchBar
                showStocked={showStocked}
                onStockedChange={setShowStocked}
                search={search}
                onSearchChange={setSearch}
            />
        </div>
    </>
}
// eslint-disable-next-line react/prop-types
function SearchBar({showStocked, onStockedChange, search, onSearchChange}) {
    return <div>
        <div className="mb-3 my-3">
            <Input value={search} placeholder="Rechercher..." onChange={onSearchChange}/>
            <CheckBox
                id="stocked"
                checked={showStocked}
                onChange={onStockedChange} label="N'afficher que les VIP"/>
        </div>
        <EditY/>
        <div style={{height: '300vh'}}></div>

    </div>
}

function EditY() {
    const [y, setY] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            setY(window.scrollY)
        })
    }, [])
    return <h1>Scroll : {y} </h1>
}

export default App