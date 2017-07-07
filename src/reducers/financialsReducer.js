
const initialState = {
  allFinancials: [
    {
      targetId: 1,
      quarterlyRevenue: 20000000,
      annualGrowth: 0.05,
      cashOnHand: 0,
      employees: 10000,
      customers: 100000000,
      other: ''
    }
  ],
  nextFinancialsId: 2
}

const financialsReducer = (state = initialState) => {
  let newState = Object.assign({},state)
  return newState
}

export default financialsReducer
