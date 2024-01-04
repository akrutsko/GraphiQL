import { Fragment } from 'react';

import type GraphQLDocService from '../../../../../services/GraphQLDocService';
import type { SchemaType } from '../../../../../types';

type MethodsProps = {
  title: string | null;
  types: SchemaType | undefined;
  graphQLDocSchema: InstanceType<typeof GraphQLDocService>;
};

const Methods = ({ title, types, graphQLDocSchema }: MethodsProps) => {
  if (title) {
    return (
      <>
        <h3>{title}</h3>
        <ul>
          {types?.fields?.map((field) => (
            <Fragment key={field.name}>
              <div>
                {`${field.name}(${field.args
                  .map((arg) => `${arg.name}: ${graphQLDocSchema.getTypeName(arg.type)}`)
                  .join(', ')}): ${graphQLDocSchema.getTypeName(field.type)}`}
              </div>
              {field.description && <div>{field.description}</div>}
              <br />
            </Fragment>
          ))}
        </ul>
      </>
    );
  }
};

export default Methods;
