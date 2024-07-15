import { Input } from "./components/form/Input.jsx";
import { useEffect, useState } from "react";

function App() {
    const [duration, setDuration] = useState(5)
    const [secondesLetf, setSecondesLeft] = useState(duration)

    const handleChange = (v) => {
        setDuration(v)
        setSecondesLeft(v)
    }


    useEffect(() => {
        const timer = setInterval(() => {
            setSecondesLeft((v) => {
                if (v <= 1) {
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
        <h1 className="text-3xl font-bold p-8 underline bg-slate-800">
            Hello world!
        </h1>
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