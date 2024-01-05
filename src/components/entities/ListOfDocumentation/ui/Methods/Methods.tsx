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
  notObject: SchemaType | undefined;
  setNotObject: Dispatch<SetStateAction<SchemaType | undefined>>;
};

const Methods = ({ title, types, graphQLDocSchema, notObject, setNotObject }: MethodsProps) => {
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

      switch (type.kind) {
        case OBJECT: {
          setNewTypes(type);
          break;
        }
        default: {
          setNotObject(type);
        }
      }
    }
  };

  if (notObject) {
    return (
      <>
        <h3 style={{ color: '#a65926', marginBottom: '10px' }}>{newTitle}</h3>
        <div style={{ color: '#9e8f9e' }}>{notObject.description ?? translation.docs.noDesc}</div>
        <br />
        <div>
          Kind: <span style={{ color: '#918b3b' }}>{notObject.kind}</span>
        </div>
      </>
    );
  }

  if (newType) {
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
