const initialState = {
    x: 0, y: 0,
    hovered: false,
    clicked: false
}

const reducerFn = (state, action) => {
    switch (action.type) {
        case 'PRESSED':
            return { ...state, clicked: true }
        case 'UNPRESSED':
            return { ...state, clicked: false }
        case 'HOVERED':
            return { ...state, hovered: true }
        case 'UNHOVERED':
            return { ...state, hovered: false }
        case 'MOVED':
            return { ...state, x: action.x, y: action.y }
        default:
            throw new Error()
    }
};

export const reducer = [reducerFn, initialState]