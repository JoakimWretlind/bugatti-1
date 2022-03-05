import { useEffect, useReducer } from "react";
import { Ring, Dot } from "./cursor.style";
import { reducer } from "./reducer";

let classNames = require('classnames');

const CustomCursor = () => {
    const [state, dispatch] = useReducer(...reducer);
    const { clicked, hovered, ...position } = state

    // the eslint will remove unwanted warning
    useEffect(() => {
        addEventListeners();
        return () => removeEventListeners();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mouseup", onMouseUp);
    };

    // Need to use clientX/Y (relative to the content area)
    const onMouseMove = (event) => {
        const { clientX: x, clientY: y } = event;
        dispatch({ type: 'MOVED', x, y })
    };

    // need onMouseDown, not onClick
    const onMouseDown = () => {
        dispatch({ type: 'PRESSED' })
    };

    const onMouseUp = () => {
        dispatch({ type: 'UNPRESSED' })
    };

    // classnames allow us to put all the tags, classes and such inside our querySelector.
    // The stuff in here will be the things that will affect the cursor
    useEffect(() => {
        document.querySelectorAll('a,  .leftArrow, .card').forEach((el) => {
            el.addEventListener("mouseover", () => dispatch({ type: 'HOVERED' }));
            el.addEventListener("mouseout", () => dispatch({ type: 'UNHOVERED' }));
        })
    }, [])

    // we always want the class "cursor"
    // classes we want to apply conditionally: "link-hovered" & "clicked" => will be passed in as an object
    // The condition for the conditionally classes are true
    const cursorClasses = classNames("cursor", {
        "link-hovered": hovered, // By default set to true,
        "clicked": clicked,
    });

    return (
        <>
            <Dot
                className={cursorClasses}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`
                }}
            />
            <Ring
                // only need to pass cursorClasses
                className={cursorClasses}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`
                }}
            />


        </>
    )
};

export default CustomCursor;