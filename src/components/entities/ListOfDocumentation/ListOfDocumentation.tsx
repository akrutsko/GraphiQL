import { Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { introspectionQuery } from '../../../constants/intospectionQuery';
import { useActions, useAppSelector, useTranslation } from '../../../hooks';
import createApi from '../../../services/ApiService';
import { selectEndpoint } from '../../../store/slices/endpointSlice';
import type { IntrospectionSchema, SchemaType } from '../../../types';
import GraphQLDocService from '../../../services/GraphQLDocService';
import TostifyComponent from '../../shared/TostifyComponent/TostifyComponent';
import TostifyMessage from '../../shared/TostifyMessage/TostifyMessage';
import { SchemaKey } from '../../../constants';
import { cutWord } from '../../../utils/cutWord/cutWord';

import Methods from './ui/Methods/Methods';
import RootTypesSection from './ui/RootTypesSection/RootTypesSection';
import styles from './ListOfDocumentation.module.css';

const ListOfDocumentation = () => {
  const translation = useTranslation();
  const endpoint = useAppSelector(selectEndpoint);
  const { setLoaded, setError, setLoading } = useActions();

  const [schema, setSchema] = useState<IntrospectionSchema>();
  const [entity, setEntity] = useState<string | null>(null);
  const [history, setHistory] = useState<Array<SchemaType | undefined>>([]);

  const notify = () => {
    const { title, text } = translation.notifications.fetchingFailed;
    toast.error(<TostifyMessage title={title} text={text} />);
  };

  useEffect(() => {
    const api = createApi(endpoint);
    const getSchema = async () => {
      try {
        setLoading();
        const schema = (await api.fetchInfo(introspectionQuery)) as IntrospectionSchema;
        if ('errors' in schema) throw new Error();
        setSchema(schema);
        setHistory([]);
        setEntity(null);
        setLoaded();
      } catch {
        setError();
        notify();
      }
    };

    getSchema();
  }, [endpoint]);

  const handleClose = () => {
    const updatedHistory = history.slice(0, -1);
    setHistory(updatedHistory);

    if (updatedHistory.length === 0) {
      setEntity(null);
    } else {
      setEntity(updatedHistory[updatedHistory.length - 1]?.name ?? '');
    }
  };

  const header = (
    <div className={styles.container}>
      {entity && (
        <div className={styles.back}>
          <button className={styles.close} onClick={handleClose} />
          <span>
            {translation.docs.back}: {history[history.length - 2]?.name ? cutWord(history[history.length - 2]?.name) : 'Schema'}
          </span>
        </div>
      )}
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
    const keys = schema.data.__schema;
    const key = Object.keys(keys).find((key) => (keys[key as SchemaKey] !== null ? keys[key as SchemaKey]?.name === ent : ''));

    let methods;
    setEntity(ent);
    switch (key) {
      case SchemaKey.QueryType:
        methods = queries;
        break;
      case SchemaKey.MutationType:
        methods = mutations;
        break;
      case SchemaKey.SubscriptionType:
        methods = subscriptions;
        break;
    }

    setHistory([...history, methods]);
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
      <Methods history={history} graphQLDocSchema={graphQLDocSchema} setHistory={setHistory} />
      <TostifyComponent />
    </>
  );
};

export default ListOfDocumentation;
