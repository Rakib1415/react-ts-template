import { combineReducers, configureStore } from '@reduxjs/toolkit'
import resultReducer from '../features/result/resultSlice'

const rootReducer = combineReducers({
    result: resultReducer,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})

// export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
//     return configureStore({
//         reducer: rootReducer,
//         preloadedState,
//     })
// }

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// export type AppStore = ReturnType<typeof setupStore>
export default store
