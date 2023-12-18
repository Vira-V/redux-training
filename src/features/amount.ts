const ADD = 'amount/ADD';
const TAKE = 'amount/TAKE';
const CLEAR = 'amount/CLEAR';

type AddAmountAction = {
  type: typeof ADD,
  value: number
}

const add = (value: number): AddAmountAction => ({
  type: ADD,
  value
});

type TakeAmountAction = {
  type: typeof TAKE,
  value: number
}

const take = (value: number): TakeAmountAction => ({
  type: TAKE,
  value
});

type ClearAmountAction = {
  type: typeof CLEAR
}

const clear = (): ClearAmountAction => ({
  type: CLEAR
});

type Action = AddAmountAction | TakeAmountAction | ClearAmountAction

const amountReducer = (amount = 0, action: Action) => {
  switch (action.type) {
    case ADD:
      return amount + action.value;
    case TAKE:
      return amount - action.value;
    case CLEAR:
      return 0;
    default:
      return amount;
  }  
};

export const actions = {
  add,
  take,
  clear
}

export default amountReducer;
