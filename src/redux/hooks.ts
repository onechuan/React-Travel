import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook
} from "react-redux"

import {IRootState} from "./store"

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector