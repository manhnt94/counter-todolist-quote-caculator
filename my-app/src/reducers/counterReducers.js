import produce from "immer";
import {
  DECREMENT_COUNTER,
  DECREMENT_COUNTER_IMMERJS,
  INCREMENT_COUNTER,
  INCREMENT_COUNTER_IMMERJS,
} from "../constants/counterConstants";

export const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        count: state.count + 1,
      };
    case DECREMENT_COUNTER:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export const counterReducerImmerjs = (state = { count: 0 }, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case INCREMENT_COUNTER_IMMERJS:
        return {
          count: draft.count + 1,
        };
      case DECREMENT_COUNTER_IMMERJS:
        return {
          count: draft.count - 1,
        };
      default:
        return state;
    }
  });
