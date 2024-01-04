import { LIST, NON_NULL } from '../constants/graphql';
import type { DeepTypeRef, IntrospectionSchema, TypeRef } from '../types/introspectionSchema';

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

  getTypeName(type: DeepTypeRef | TypeRef): string {
    switch (type.kind) {
      case NON_NULL: {
        return `${this.getTypeName((type as DeepTypeRef).ofType)}!`;
      }
      case LIST: {
        return `[${this.getTypeName((type as DeepTypeRef).ofType)}]`;
      }
      default: {
        return type.name!;
      }
    }
  }
}

export default GraphQLDocService;
