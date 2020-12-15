import { Handler } from 'express';
import { SchemaMap } from 'joi';

export interface Schema {
  query?: SchemaMap;
  body?: SchemaMap;
}

export enum Prop {
  QUERY = 'query',
  BODY = 'body',
}

export interface Validator {
  (schema: Schema, prop: Prop): Handler
}
