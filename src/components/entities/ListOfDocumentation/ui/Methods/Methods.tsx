import type { SchemaType } from '../../../../../types';

type MethodsProps = {
  title: string | null;
  types: SchemaType | undefined;
};
const Methods = ({ title, types }: MethodsProps) => {
  if (title) {
    return (
      <>
        <h3>{title}</h3>
        <ul>{types?.fields?.map((field) => <li key={field.name}>{field.name}</li>)}</ul>
      </>
    );
  }
};

export default Methods;
