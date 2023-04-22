import { configureStore } from '@reduxjs/toolkit';

import { articleApi } from './article';

// A "store" is a global state, which saves the entire information about our application.
// In cases where we don't need the entire application to be saved we can use "reducer", like we did in our case here.
export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware.concat(articleApi.middleware)
});