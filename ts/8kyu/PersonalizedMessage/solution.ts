export function greet(name: string, owner: string): string{
  if (name === owner) return "Hello boss"
  return "Hello guest";
}