import { useLayoutEffect, useRef, useState } from "react"


export const Quote = ({ name, species }) => {

    const pRef = useRef();
    
    const [boxSize, setBoxSize] = useState({
        width: 0,
        height: 0
    });

    useLayoutEffect(() => {
        const { height, width } = pRef.current.getBoundingClientRect();
        setBoxSize({ height, width });
    }, [name])

    return (
        <>
            <blockquote className="blockquote text-end">
                <p ref={pRef} className="mb-1" style={{ display: 'flex' }}>{name}</p>
                <footer className="blockquote-footer">{species}</footer>
            </blockquote>

            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}
