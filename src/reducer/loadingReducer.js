export default function loadingreducer(
  state = { loading: false, error: "" },
  action
) {
  switch (action.type) {
    case "LOADING":
      return action.payload;
    default:
      return state;
  }
}
