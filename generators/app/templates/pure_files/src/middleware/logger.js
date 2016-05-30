
export default store => next => action  => {
  console.log('-----------------')
  console.log(store)
  console.log(action)
  return next(action)
}
