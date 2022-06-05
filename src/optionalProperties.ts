interface ObjInterface {
  first: string;
  last?: string;
}

export function printName(name: ObjInterface): string {
  if (name.last != null) {
    return name.first + " " + name.last;
  } else {
    return name.first;
  }
}
