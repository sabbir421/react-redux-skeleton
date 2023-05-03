import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "localforage";
import createExpirationTransform from "redux-persist-transform-expire";
import rootReducer from "./reducers";
import { environment } from "./config/config";
const middlewares = [];
const loggerEnvs = ["dev", "stg"];
if (loggerEnvs.includes(environment)) {
  const { createLogger } = require(`redux-logger`);
  const logger = createLogger({
    collapsed: (getState, action, logEntry) => !logEntry.error,
  });

  middlewares.push(logger);
}

const expireTransform = createExpirationTransform({
  expireKey: "expiresAt",
});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["loginReducer", "projectReducer"],
  transforms: [expireTransform],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middlewares),
  //devTools: environment === "dev",
});

const persistor = persistStore(store);

export { store, persistor };
