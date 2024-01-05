import { Fragment, useState, type MouseEvent, useEffect, type Dispatch, type SetStateAction } from 'react';

import type GraphQLDocService from '../../../../../services/GraphQLDocService';
import type { SchemaType } from '../../../../../types';
import { OBJECT } from '../../../../../constants';
import { useTranslation } from '../../../../../hooks';
import styles from '../../ListOfDocumentation.module.css';

type MethodsProps = {
  graphQLDocSchema: InstanceType<typeof GraphQLDocService>;
  setHistory: Dispatch<SetStateAction<(SchemaType | undefined)[]>>;
  history: (SchemaType | undefined)[];
};

const Methods = ({ graphQLDocSchema, setHistory, history }: MethodsProps) => {
  const [newType, setNewTypes] = useState<SchemaType | undefined>(undefined);
  const [newTitle, setNewTitle] = useState<string | undefined>(undefined);
  const [entity, setEntity] = useState<string | undefined>(OBJECT);

  const translation = useTranslation();

  useEffect(() => {
    const actualEntity = history[history.length - 1];
    setNewTypes(actualEntity);
    setNewTitle(actualEntity?.name);
    setEntity(actualEntity?.kind);
  }, [history]);

  const handleClick = (event: MouseEvent<HTMLSpanElement>) => {
    const typeName = (event.target as HTMLSpanElement).textContent;
    const type = graphQLDocSchema.getType(typeName as string);
    setHistory((prevHistory) => [...prevHistory, type]);
    setNewTypes(type);
    if (type) {
      setNewTitle(type.name);
      setEntity(type.kind);
    }
  };

  if (entity !== OBJECT && entity !== undefined) {
    return (
      <>
        <h3 style={{ color: '#a65926', marginBottom: '10px' }}>{newTitle}</h3>
        <div style={{ color: '#9e8f9e' }}>{newType?.description ?? translation.docs.noDesc}</div>
        <br />
        <div>
          {translation.docs.kind}: <span style={{ color: '#918b3b' }}>{newType?.kind}</span>
        </div>
      </>
    );
  }

  if (entity === OBJECT) {
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
