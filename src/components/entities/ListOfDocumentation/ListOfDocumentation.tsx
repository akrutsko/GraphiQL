import { Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { introspectionQuery } from '../../../constants/intospectionQuery';
import { useAppSelector, useTranslation } from '../../../hooks';
import createApi from '../../../services/ApiService';
import { selectEndpoint } from '../../../store/slices/endpointSlice';
import type { IntrospectionSchema, SchemaType } from '../../../types/introspectionSchema';
import GraphQLDocService from '../../../services/GraphQLDocService';
import TostifyComponent from '../../shared/TostifyComponent/TostifyComponent';
import TostifyMessage from '../../shared/TostifyMessage/TostifyMessage';

import Methods from './ui/Methods/Methods';
import RootTypesSection from './ui/RootTypesSection/RootTypesSection';
import styles from './ListOfDocumentation.module.css';

const ListOfDocumentation = () => {
  const translation = useTranslation();
  const endpoint = useAppSelector(selectEndpoint);

  const [schema, setSchema] = useState<IntrospectionSchema>();
  const [entity, setEntity] = useState<string | null>(null);
  const [methods, setMethods] = useState<SchemaType | undefined>(undefined);
  const [notObject, setNotObject] = useState<SchemaType | undefined>(undefined);

  const notify = () => {
    const { title, text } = translation.notifications.fetchingFailed;
    toast.error(<TostifyMessage title={title} text={text} />);
  };

  useEffect(() => {
    const api = createApi(endpoint);
    const getSchema = async () => {
      try {
        const schema = (await api.fetchInfo(introspectionQuery)) as IntrospectionSchema;
        if ('errors' in schema) throw new Error();
        setSchema(schema);
      } catch {
        notify();
      }
    };

    getSchema();
  }, [endpoint]);

  const handleClose = () => {
    setEntity(null);
    setMethods(undefined);
    setNotObject(undefined);
  };

  const header = (
    <div className={styles.container}>
      {entity && <button className={styles.close} onClick={handleClose} />}

      <h2 className={styles.title}>{translation.documentationExplorer}</h2>
      <p>{translation.docs.desc}</p>
      <Divider sx={{ margin: '20px 0' }} />
    </div>
  );

  if (!schema) return null;
  const graphQLDocSchema = new GraphQLDocService(schema);

  const queryType = graphQLDocSchema.getQueryType();
  const queries = graphQLDocSchema.getQueries();
  const mutationType = graphQLDocSchema.getMutationType();
  const mutations = graphQLDocSchema.getMutations();
  const subscriptionType = graphQLDocSchema.getSubscriptionType();
  const subscriptions = graphQLDocSchema.getSubscriptions();

  const openMethods = (ent: string | null) => {
    const keys = Object.keys(schema.data.__schema);

    let methods;
    setEntity(ent);
    for (const key of keys) {
      switch (key) {
        case 'queryType':
          methods = queries;
          break;
        case 'mutationType':
          methods = mutations;
          break;
        case 'subscriptionType':
          methods = subscriptions;
          break;
      }
      if (methods) break;
    }
    setMethods(methods);
  };

  return (
    <>
      {header}
      {!entity && (
        <RootTypesSection
          queryType={queryType}
          mutationType={mutationType}
          subscriptionType={subscriptionType}
          openMethods={openMethods}
        />
      )}
      <Methods
        title={entity}
        types={methods}
        graphQLDocSchema={graphQLDocSchema}
        notObject={notObject}
        setNotObject={setNotObject}
      />
      <TostifyComponent />
    </>
  );
};

export default ListOfDocumentation;
