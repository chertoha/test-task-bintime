import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "./newsApi/newsApi";
// import { warehouseApi } from "./warehouse/warehouseApi";
// import { waybillApi } from "./waybill/waybillApi";

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    // [warehouseApi.reducerPath]: warehouseApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(newsApi.middleware);
    //   .concat(warehouseApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
