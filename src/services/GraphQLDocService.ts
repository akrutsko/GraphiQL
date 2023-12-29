import type { IntrospectionSchema } from '../types/introspectionSchema';

class GraphQLDocService {
  schema: IntrospectionSchema;

  constructor(schema: IntrospectionSchema) {
    this.schema = schema;
  }

  getQueryType() {
    return this.schema.data.__schema.queryType?.name || null;
  }

  getQueries() {
    return this.schema.data.__schema.types.find((type) => type.name === this.getQueryType());
  }

  getMutationType() {
    return this.schema.data.__schema.mutationType?.name || null;
  }

  getMutations() {
    return this.schema.data.__schema.types.find((type) => type.name === this.getMutationType());
  }

  getSubscriptionType() {
    return this.schema.data.__schema.subscriptionType?.name || null;
  }

  getSubscriptions() {
    return this.schema.data.__schema.types.find((type) => type.name === this.getSubscriptionType());
  }
}

export default GraphQLDocService;
