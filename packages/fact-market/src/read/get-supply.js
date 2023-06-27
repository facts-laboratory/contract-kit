import { getCurrentSupply } from '../util.js';

export async function getSupply(state) {
  return {
    result: {
      total:
        getCurrentSupply(state.balances) +
        getCurrentSupply(state.oppositionBalances),
      support: getCurrentSupply(state.balances),
      oppose: getCurrentSupply(state.oppositionBalances),
    },
  };
}
