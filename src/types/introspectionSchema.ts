import type { LIST, NON_NULL } from '../constants/graphql';

export type IntrospectionSchema = {
  data: {
    __schema: {
      queryType: Description | null;
      mutationType: Description | null;
      subscriptionType: Description | null;
      types: SchemaType[];
    };
  };
};

type Description = {
  name: string;
  description: string | null;
  kind?: string;
};

type SchemaType = Description & {
  fields: Field[] | null;
  inputFields: InputValue[] | null;
  interfaces: TypeRef[] | null;
  enumValues: EnumValue[] | null;
  possibleTypes: TypeRef[] | null;
  kind: string;
};

type Field = Description &
  Deprecation & {
    args: InputValue[];
    type: DeepTypeRef | TypeRef;
  };

type InputValue = Description & {
  type: DeepTypeRef | TypeRef;
  defaultValue: string | number | null;
};

type EnumValue = Description & Deprecation;

type TypeRef = {
  name: string;
  description: string | null;
  kind: string;
  ofType: null;
};

type DeepTypeRef = {
  name: string | null;
  description: null;
  kind: typeof LIST | typeof NON_NULL | string;
  ofType: DeepTypeRef | TypeRef;
};

type Deprecation = {
  isDeprecated: boolean;
  deprecationReason: string | null;
};
