import { ADD_NEW_TASK } from "./type";

const initialState = {
    task1: [
        {
          text: "Home",
          to: '/'
        },
        {
          text: "About Us",
          to: "/section1"
        },
        {
          text: "Service",
          to: "/section2",
        },
        {
          text: "Menu",
          to: '/section3'
        },
        {
          text: "Contact",
          to: "/section4",
        }
      ]
}

const reducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case ADD_NEW_TASK:
            return {
                ...state, task1: [...state.task1, 
                {title: action.payload, completed: false}]
            };

        default:
            return state;
    }
}

export default reducer;