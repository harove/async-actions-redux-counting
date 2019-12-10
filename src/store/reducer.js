import { A_S, A_O, D_S, D_O } from "./const";

const initial_state = {
  numero: 0,
  mensaje: "",
  loading: false
};

const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case A_S:
      return {
        numero: prevState.numero,
        mensaje: action.payload,
        loading: true
      };

    case A_O:
      return {
        numero: prevState.payload,
        mensaje: "",
        loading: false
      };

    case D_S:
      return {
        numero: prevState.numero,
        mensaje: action.payload,
        loading: true
      };

    case D_O:
      return {
        numero: prevState.payload,
        mensaje: "",
        loading: false
      };

    default:
      return prevState;
  }
};


export default reducer;