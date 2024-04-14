import { useEffect, useRef } from "react";

export const TableModal = ({ value, open, setShow }) => {
    const openRef = useRef(null);


    const handleClickOutside = (event) => {
        if (
            open &&
            openRef.current &&
            !openRef.current.contains(event.target)
        ) {
            setShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <div ref={openRef} className="absolute left-[-20px] top-0 bg-white shadow-sm p-3">{value}</div>
    )
}
