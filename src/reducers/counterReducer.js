const counterReducer = (state,action) =>{

console.log(state +" " + action)
switch(action.type){

        case "INCREMENT":

        return state + 1;

        case "DICREMENT":

        return state - 1;

        default:

        return state;

}
}

export {counterReducer}
