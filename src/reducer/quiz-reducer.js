export const quizReducer = (state, { type, payload }) => {
  switch (type) {
    case "INDEX":
      return {
        ...state,
        index: payload,
      };
    case "SCORE":
      return {
        ...state,
        score: payload,
      };
    case "CATEGORY":
      return {
        ...state,
        quizcategory: payload,
      };
    default:
      return state;
  }
};
