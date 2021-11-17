export const REG_CLIENT = 'REG_CLIENT';
export const REM_CLIENT = 'REM_CLIENT';

const INITIAL_STATE = {
  clients: [],
  currentId: 0,
}

const capitalize = (str) =>
  str[0].toUpperCase() + str.slice(1, str.length)

export const clientReducer = (state = INITIAL_STATE, action) => {
  const { clients, currentId } = state;
  switch(action.type) {
    case REG_CLIENT:
      let { name, age, email } = action;
      
      name = capitalize(name);
      const nextId = state.currentId + 1;

      return {
        clients:
          [ ...clients,
            { id: currentId, name, age, email },
          ],
        currentId: nextId
      }
    case REM_CLIENT:
      const { index } = action;
      console.log(index);
      const teste = [...clients];
      teste.splice(index, 1)
      return { ...state, clients: teste };
    default:
      return state;
  }
}