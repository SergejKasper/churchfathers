import { fromJS } from 'immutable';

const initialState = fromJS({});

function authorsViewSingleReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default authorsViewSingleReducer;
