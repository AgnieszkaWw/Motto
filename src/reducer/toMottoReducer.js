export default function toMottoReducer(state = [], action) {
  switch (action.type) {
    case "FETCH":
      return action.mottos;
    case "ADD":
      return [...state, action.toMotto];
    case "DELETE":
      return state.filter(motto => motto.id !== action.id);
    case "TOGGLE":
      return state.map(motto =>
        motto.id === action.id ? { ...motto, completed: !motto.completed } : motto
      );
    case "EDIT":
      return state.map(motto =>
        motto.id === action.id ? { ...motto, title: action.title } : motto
      );
    default:
      return state;
  }
}
