export function validBraces(braces: string): boolean {
  let s:string = braces
  
  const regex = /({}|\[]|\(\))/g;
  
  while(regex.test(s)){
    s = s.replace(regex, '')
  }
  
  if (s.length > 0) return false
  return true
}