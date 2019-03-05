//Action TYPES

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).
//An action is an object w some special rules:
// - Every action MUSt have a type property

export const increment = count => {
  // Fill in this function
  console.log("in increment action creator");
  return {
    type: INCREMENT,
    payload: count
  };
};

export const decrement = count => {
  // Fill in this function
  console.log("in decrement action creator");
  return {
    type: DECREMENT,
    payload: count
  };
};
