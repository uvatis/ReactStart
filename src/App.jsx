import {Input} from "./components/form/Input.jsx";
import {CheckBox} from "./components/form/CheckBox.jsx";
import {useEffect, useState} from "react";

function App () {
    const [duration, setDuration] = useState(5)
    const [secondesLetf, setSecondesLeft] = useState(duration)

    const handleChange = (v) => {
        setDuration(v)
        setSecondesLeft(v)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setSecondesLeft((v) => {
                if(v <= 1) {
                    clearInterval()
                    setSecondesLeft(0)
                } else {
                    return v - 1
                }
                }
            )
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [duration])
    return <>
        <Input
            value={duration}
            placeholder={'Timer'}
            onChange={handleChange}
        />
        <label className="m-3">Timer : {secondesLetf}</label>
    </>
}
// eslint-disable-next-line react/prop-types


export default App