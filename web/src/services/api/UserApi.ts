import api from './'

export async function getUserInformations(token: string){
  try{
    const userResponse = await api.get('/me', {headers: {Authorization: `Bearer ${token}`}})
    return userResponse.data
  }catch(err){
    return undefined
  }
}