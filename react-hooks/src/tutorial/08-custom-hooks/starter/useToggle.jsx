import { useState } from "react";

export const useToggle = (value) => {
    const [show, setShow] = useState(value)
    const toggle = () => {
        setShow(!show)
    }
    return [show, toggle]
}
