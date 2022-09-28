export function handleSignOut(req, res){
  return res
    .clearCookie('auth-token')
    .json({msg: 'deslogado'});
}