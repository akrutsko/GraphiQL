import { Fragment, useState, type MouseEvent, useEffect, type Dispatch, type SetStateAction } from 'react';

import type GraphQLDocService from '../../../../../services/GraphQLDocService';
import type { SchemaType } from '../../../../../types';
import { OBJECT } from '../../../../../constants/graphql';
import { useTranslation } from '../../../../../hooks';
import styles from '../../ListOfDocumentation.module.css';

type MethodsProps = {
  title: string | null;
  types: SchemaType | undefined;
  graphQLDocSchema: InstanceType<typeof GraphQLDocService>;
  description: string | null;
  setDescription: Dispatch<SetStateAction<string | null>>;
};

const Methods = ({ title, types, graphQLDocSchema, description, setDescription }: MethodsProps) => {
  const [newType, setNewTypes] = useState<SchemaType | undefined>(undefined);
  const [newTitle, setNewTitle] = useState<string | null>(null);

  const translation = useTranslation();

  useEffect(() => {
    setNewTypes(types);
    setNewTitle(title);
  }, [types, title]);

  const handleClick = (event: MouseEvent<HTMLSpanElement>) => {
    const typeName = (event.target as HTMLSpanElement).textContent;
    const type = graphQLDocSchema.getType(typeName as string);
    if (type) {
      setNewTitle(type.name);

      if (type?.kind === OBJECT) {
        setNewTypes(type);
      } else {
        setDescription(type.description ?? translation.docs.noDesc);
      }
    }
  };

  if (description) {
    return (
      <>
        <h3 style={{ color: '#a65926', marginBottom: '10px' }}>{newTitle}</h3>
        <div style={{ color: '#9e8f9e' }}>{description}</div>
      </>
    );
  }

  if (newTitle) {
    return (
      <>
        <h3 style={{ color: '#a65926', marginBottom: '10px' }}>{newTitle}</h3>
        <ul>
          {newType?.fields?.map((field) => (
            <Fragment key={field.name}>
              <div>
                {field.name}
                <span>
                  {field.args.length ? '(' : ''}
                  {field.args.map((arg, index) => (
                    <span key={index}>
                      {arg.name}:{' '}
                      <span className={styles.link} style={{ color: '#918b3b', cursor: 'pointer' }} onClick={handleClick}>
                        {graphQLDocSchema.getTypeName(arg.type)}
                      </span>
                      {index < field.args.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                  {field.args.length ? ')' : ''}
                  {': '}
                </span>
                <span className={styles.link} style={{ color: '#918b3b', cursor: 'pointer' }} onClick={handleClick}>
                  {graphQLDocSchema.getTypeName(field.type)}
                </span>
              </div>
              {field.description && <div style={{ color: '#9e8f9e' }}>{field.description}</div>}
              <br />
            </Fragment>
          ))}
        </ul>
      </>
    );
  }
};

export default Methods;
