function greeter(name: string) {
  return `Olá ${name}!`;
}

function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
}

export default {
  greeter,
  personAge,
}