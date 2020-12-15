export const compose = <T, K = T>(...fns: any[]) => (value: T): K => fns.reduceRight(
  (previousValue, fn) => fn(previousValue), value,
);
