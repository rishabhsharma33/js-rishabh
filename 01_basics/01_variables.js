const accoundId = 12323
let accountName = "rishabh"
var accountPswd = "12213"
accountCity = "Noida" 

/*
in js we can declare variable without declaration but this is not a good practise
*/
let accountState

accountName = "Rishabh"
accountPswd = "12213"
accountCity = "Bengaluru"

/*
prefer not to use var - 
because of issue in block and functional scope
*/

console.table([accoundId, accountName, accountPswd, accountCity, accountState])