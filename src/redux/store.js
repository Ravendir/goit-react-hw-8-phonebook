import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import mainReducer from "./reducer";
import authReducer from "./auth/authReducer";

import {
  persistStore,
  persistReducer,
  PERSIST,
  REGISTER,
  PAUSE,
  PURGE,
  FLUSH,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PURGE, PERSIST, REGISTER, REHYDRATE, PAUSE, FLUSH],
      },
    }),
  ],
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    contacts: mainReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
