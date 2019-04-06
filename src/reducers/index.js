import { INCREMENT, DECREMENT } from "../actions";

const initialState = {
  count: 0
};

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?

//If this way, export like I did
//If did export const counter and NO default, then import with {}
const counter = (state = initialState, action) => {
  console.log("In the reducer", action);
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

export default counter;

// export default (state = initialState, action) => {
//   console.log("In the reducer", action);
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         count: state.count + 1
//       };
//     case DECREMENT:
//       return {
//         ...state,
//         count: state.count - 1
//       };
//     default:
//       return state;
//   }
// };
