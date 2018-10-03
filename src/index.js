import Senators from './data/senators'
const filterByParty = (party) => {
  return Senators.filter(x => x.party ==party)
}
const filterByGender = (gender) => {
  return Senators.filter(y => y.person.gender ==gender)
}
const filterByState = (state) => {
return Senators.filter(z => z.state == state)
}
export const republicans = () => {
 return filterByParty("Republican")

  }


export const democrats = () => {
  return filterByParty("Democrat")
}

export const independents = () => {
  return filterByParty("Independent")
}

export const males = () => {
  return filterByGender("male")
}

export const females = () => {
  return filterByGender("female")
}

export const byState = (state = 'UT') => {
  return filterByState("UT")
}

export const mapping = () => {
  var map1 = Senators.map(Senators => ({firstName: Senators.firstName, lastName: Senators.LastName, party: Senators.party, gender: Senators.gender}))
 
  return map1
} 

export const birthplaceSeniorSenator = (state= 'UT') => {

  return Senators.reduce((prior, sen) => (sen.senator_rank =='senior' && sen.state == "UT") ? sen : prior) 
  }



const REPLACE_ME_WITH_CODE = false
