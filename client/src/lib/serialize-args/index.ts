const DELIM = '|';

const serializeArray = (args: any[]) => {
  return args
    .map((arg: any) => {
      if (arg === null) return 'null';
      if (arg === undefined) return 'undefined';
      if (typeof arg === 'number') return arg.toString();
      if (typeof arg === 'string') return arg;
      if (Array.isArray(arg)) return serializeArray(arg);
      if (typeof arg === 'object') return JSON.stringify(arg, Object.keys(arg).sort());
    })
    .join(DELIM);
};

const serialize = (...args: any[]): string => {
  return btoa(serializeArray(args));
};

export default serialize;
