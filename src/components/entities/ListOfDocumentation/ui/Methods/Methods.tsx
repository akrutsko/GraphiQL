import { Fragment } from 'react';

import type GraphQLDocService from '../../../../../services/GraphQLDocService';
import type { SchemaType } from '../../../../../types';

type MethodsProps = {
  title: string | null;
  types: SchemaType | undefined;
  graphQLDocSchema: InstanceType<typeof GraphQLDocService>;
};

const Methods = ({ title, types, graphQLDocSchema }: MethodsProps) => {
  const handleClick = () => {
    const allTypes = graphQLDocSchema.getAllTypes();
    console.log(allTypes);
  };

  if (title) {
    return (
      <>
        <h3>{title}</h3>
        <ul>
          {types?.fields?.map((field) => (
            <Fragment key={field.name}>
              <div>
                {field.name}
                <span>
                  {'('}
                  {field.args.map((arg, index) => (
                    <span key={index}>
                      {arg.name}:{' '}
                      <span style={{ color: 'green', cursor: 'pointer' }} onClick={handleClick}>
                        {graphQLDocSchema.getTypeName(arg.type)}
                      </span>
                      {index < field.args.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                  {'): '}
                </span>
                <span style={{ color: 'green', cursor: 'pointer' }} onClick={handleClick}>
                  {graphQLDocSchema.getTypeName(field.type)}
                </span>
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
