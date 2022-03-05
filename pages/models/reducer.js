const initialState = {
    className: "card"
}

const reducerFn = (state, action) => {
    switch (action.type) {
        case 'LOAD':
            return { ...state, set: true }
        default:
            throw new Error()
    }
}

export const reducer = [reducerFn, initialState]