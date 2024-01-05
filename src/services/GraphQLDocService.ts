import { LIST, NON_NULL, OBJECT } from '../constants/graphql';
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

  getAllTypes() {
    return this.schema.data.__schema.types || null;
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
  getType(value: string) {
    const pureValue = value
      .match(/[a-zA-Z]*/g)
      ?.filter((el) => el !== '')
      .join('');
    return this.getAllTypes().find((type) => type.name === pureValue);
  }

  getTypeDescription(type: DeepTypeRef | TypeRef) {
    switch (type.kind) {
      case OBJECT: {
        return `${this.getTypeName((type as DeepTypeRef).ofType)}!`;
      }
      case LIST: {
        return `[${this.getTypeName((type as DeepTypeRef).ofType)}]`;
      }
      default: {
        return type.description!;
      }
    }
  }
}

export default GraphQLDocService;
