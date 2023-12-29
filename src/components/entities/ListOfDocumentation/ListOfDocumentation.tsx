import { Divider } from '@mui/material';
import { useEffect, useState } from 'react';

import { introspectionQuery } from '../../../constants/intospectionQuery';
import { useAppSelector, useTranslation } from '../../../hooks';
import createApi from '../../../services/ApiService';
import { selectEndpoint } from '../../../store/slices/endpointSlice';
import type { IntrospectionSchema } from '../../../types/introspectionSchema';
import styles from '../../features/DocumentationExplorer/DocumentationExplorer.module.css';
import GraphQLDocService from '../../../services/GraphQLDocService';

const ListOfDocumentation = () => {
  const translation = useTranslation();
  const endpoint = useAppSelector(selectEndpoint);

  const [schema, setSchema] = useState<IntrospectionSchema>();

  useEffect(() => {
    const api = createApi(endpoint);

    const getSchema = async () => {
      try {
        const schema = (await api.fetchInfo(introspectionQuery)) as IntrospectionSchema;
        if ('errors' in schema) throw new Error();
        setSchema(schema);
      } catch {
        console.error('Show react-toastify error message'); // TODO
      }
    };

    getSchema();
  }, [endpoint]);

  const header = (
    <div>
      <h2 className={styles.title}>{translation.documentationExplorer}</h2>
      <p>A GraphQL schema provides a root type for each kind of operation.</p>
      {/* TODDO: add translation if description is needed */}
      <Divider />
    </div>
  );

  if (!schema) return header;
  console.log(schema);

  const graphQLDocSchema = new GraphQLDocService(schema);

  const queryType = graphQLDocSchema.getQueryType();
  const queries = graphQLDocSchema.getQueries();
  const mutationType = graphQLDocSchema.getMutationType();
  const mutations = graphQLDocSchema.getMutations();
  const subscriptionType = graphQLDocSchema.getSubscriptionType();
  const subscriptions = graphQLDocSchema.getSubscriptions();

  const queryContent = queryType && (
    <>
      <h3>{queryType}</h3>
      <ul>{queries?.fields?.map((field) => <li key={field.name}>{field.name}</li>)}</ul>
    </>
  );
  const mutationContent = mutationType && (
    <>
      <h3>{mutationType}</h3>
      <ul>{mutations?.fields?.map((field) => <li key={field.name}>{field.name}</li>)}</ul>
    </>
  );
  const subscriptionContent = subscriptionType && (
    <>
      <h3>{subscriptionType}</h3>
      <ul>{subscriptions?.fields?.map((field) => <li key={field.name}>{field.name}</li>)}</ul>
    </>
  );

  return (
    <>
      {header}
      <h3>Root Types</h3>
      <ul>
        {queryType && <li>query: {mutationType}</li>}
        {mutationType && <li>mutation: {mutationType}</li>}
        {subscriptionType && <li>subscription: {subscriptionType}</li>}
      </ul>
      {queryContent}
      {mutationContent}
      {subscriptionContent}
    </>
  );
};

export default ListOfDocumentation;
