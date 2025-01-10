const logger = (state) => (next) => (action) => {
  console.group(action.type);
  console.info("prv stat", state.getState());
  const result = next(action);
  console.info("next stat", state.getState());
  console.groupEnd();
  return result;
};

export default logger;
