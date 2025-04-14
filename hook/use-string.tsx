import slugify from "slugify";
import pluralize, { singular } from "pluralize";

interface Stringable {
  ucFirst: () => Stringable;
  trim: () => Stringable;
  slug: () => Stringable;
  unslug: () => Stringable;
  camelCase: () => Stringable;
  plural: () => Stringable;
  singular: () => Stringable;
  value: () => string;
}

const str = (initialValue: string): Stringable => {
  let value = initialValue;

  return {
    ucFirst: (): Stringable => {
      value = value.toLowerCase().replace(/^\w/, (char) => char.toUpperCase());
      return str(value);
    },

    trim: (): Stringable => {
      value = value.trim();
      return str(value);
    },

    slug: (): Stringable => {
      value = slugify(value, { lower: true, strict: true, trim: true });
      return str(value);
    },

    unslug: (): Stringable => {
      value = value
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
      return str(value).trim();
    },

    camelCase: (): Stringable => {
      value = value
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (letter: string, index: number) =>
          index === 0 ? letter.toLowerCase() : letter.toUpperCase()
        )
        .replace(/\s+/g, "");
      return str(value);
    },

    plural: (): Stringable => {
      value = pluralize(value);
      return str(value);
    },

    singular: (): Stringable => {
      value = singular(value);
      return str(value);
    },

    value: (): string => value,
  };
};

export default str;
