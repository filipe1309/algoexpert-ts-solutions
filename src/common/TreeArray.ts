export function toNode<T extends TreeArray>(flat: FlatTreeArray[], SolutionClass: new (name: string) => T) {
  const map = flat.reduce((acc, { id, value }) => {
    acc[id] = new SolutionClass(value);
    return acc;
  }, {} as Record<string, T>);

  flat.forEach(({ id, children }) => {
    map[id].children = children.map((id) => map[id]);
  });

  return map[flat[0].id];
}
