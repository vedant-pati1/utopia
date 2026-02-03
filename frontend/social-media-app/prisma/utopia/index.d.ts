
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UtopiaUser
 * 
 */
export type UtopiaUser = $Result.DefaultSelection<Prisma.$UtopiaUserPayload>
/**
 * Model FollowAssociation
 * 
 */
export type FollowAssociation = $Result.DefaultSelection<Prisma.$FollowAssociationPayload>
/**
 * Model Posts
 * 
 */
export type Posts = $Result.DefaultSelection<Prisma.$PostsPayload>
/**
 * Model Messages
 * 
 */
export type Messages = $Result.DefaultSelection<Prisma.$MessagesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UtopiaUsers
 * const utopiaUsers = await prisma.utopiaUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UtopiaUsers
   * const utopiaUsers = await prisma.utopiaUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.utopiaUser`: Exposes CRUD operations for the **UtopiaUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UtopiaUsers
    * const utopiaUsers = await prisma.utopiaUser.findMany()
    * ```
    */
  get utopiaUser(): Prisma.UtopiaUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.followAssociation`: Exposes CRUD operations for the **FollowAssociation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FollowAssociations
    * const followAssociations = await prisma.followAssociation.findMany()
    * ```
    */
  get followAssociation(): Prisma.FollowAssociationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posts`: Exposes CRUD operations for the **Posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.PostsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **Messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.MessagesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UtopiaUser: 'UtopiaUser',
    FollowAssociation: 'FollowAssociation',
    Posts: 'Posts',
    Messages: 'Messages'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "utopiaUser" | "followAssociation" | "posts" | "messages"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UtopiaUser: {
        payload: Prisma.$UtopiaUserPayload<ExtArgs>
        fields: Prisma.UtopiaUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtopiaUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtopiaUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtopiaUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtopiaUserPayload>
          }
          findFirst: {
            args: Prisma.UtopiaUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtopiaUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtopiaUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtopiaUserPayload>
          }
          findMany: {
            args: Prisma.UtopiaUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtopiaUserPayload>[]
          }
          create: {
            args: Prisma.UtopiaUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtopiaUserPayload>
          }
          createMany: {
            args: Prisma.UtopiaUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UtopiaUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtopiaUserPayload>[]
          }
          delete: {
            args: Prisma.UtopiaUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtopiaUserPayload>
          }
          update: {
            args: Prisma.UtopiaUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtopiaUserPayload>
          }
          deleteMany: {
            args: Prisma.UtopiaUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UtopiaUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UtopiaUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtopiaUserPayload>[]
          }
          upsert: {
            args: Prisma.UtopiaUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtopiaUserPayload>
          }
          aggregate: {
            args: Prisma.UtopiaUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtopiaUser>
          }
          groupBy: {
            args: Prisma.UtopiaUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtopiaUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtopiaUserCountArgs<ExtArgs>
            result: $Utils.Optional<UtopiaUserCountAggregateOutputType> | number
          }
        }
      }
      FollowAssociation: {
        payload: Prisma.$FollowAssociationPayload<ExtArgs>
        fields: Prisma.FollowAssociationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowAssociationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowAssociationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowAssociationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowAssociationPayload>
          }
          findFirst: {
            args: Prisma.FollowAssociationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowAssociationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowAssociationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowAssociationPayload>
          }
          findMany: {
            args: Prisma.FollowAssociationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowAssociationPayload>[]
          }
          create: {
            args: Prisma.FollowAssociationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowAssociationPayload>
          }
          createMany: {
            args: Prisma.FollowAssociationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FollowAssociationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowAssociationPayload>[]
          }
          delete: {
            args: Prisma.FollowAssociationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowAssociationPayload>
          }
          update: {
            args: Prisma.FollowAssociationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowAssociationPayload>
          }
          deleteMany: {
            args: Prisma.FollowAssociationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FollowAssociationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FollowAssociationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowAssociationPayload>[]
          }
          upsert: {
            args: Prisma.FollowAssociationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowAssociationPayload>
          }
          aggregate: {
            args: Prisma.FollowAssociationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollowAssociation>
          }
          groupBy: {
            args: Prisma.FollowAssociationGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowAssociationGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowAssociationCountArgs<ExtArgs>
            result: $Utils.Optional<FollowAssociationCountAggregateOutputType> | number
          }
        }
      }
      Posts: {
        payload: Prisma.$PostsPayload<ExtArgs>
        fields: Prisma.PostsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findFirst: {
            args: Prisma.PostsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findMany: {
            args: Prisma.PostsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          create: {
            args: Prisma.PostsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          createMany: {
            args: Prisma.PostsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          delete: {
            args: Prisma.PostsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          update: {
            args: Prisma.PostsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          deleteMany: {
            args: Prisma.PostsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          upsert: {
            args: Prisma.PostsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.PostsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostsCountArgs<ExtArgs>
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      Messages: {
        payload: Prisma.$MessagesPayload<ExtArgs>
        fields: Prisma.MessagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          findFirst: {
            args: Prisma.MessagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          findMany: {
            args: Prisma.MessagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          create: {
            args: Prisma.MessagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          createMany: {
            args: Prisma.MessagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          delete: {
            args: Prisma.MessagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          update: {
            args: Prisma.MessagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          deleteMany: {
            args: Prisma.MessagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          upsert: {
            args: Prisma.MessagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.MessagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    utopiaUser?: UtopiaUserOmit
    followAssociation?: FollowAssociationOmit
    posts?: PostsOmit
    messages?: MessagesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UtopiaUserCountOutputType
   */

  export type UtopiaUserCountOutputType = {
    followers: number
    following: number
  }

  export type UtopiaUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    followers?: boolean | UtopiaUserCountOutputTypeCountFollowersArgs
    following?: boolean | UtopiaUserCountOutputTypeCountFollowingArgs
  }

  // Custom InputTypes
  /**
   * UtopiaUserCountOutputType without action
   */
  export type UtopiaUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtopiaUserCountOutputType
     */
    select?: UtopiaUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UtopiaUserCountOutputType without action
   */
  export type UtopiaUserCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowAssociationWhereInput
  }

  /**
   * UtopiaUserCountOutputType without action
   */
  export type UtopiaUserCountOutputTypeCountFollowingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowAssociationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UtopiaUser
   */

  export type AggregateUtopiaUser = {
    _count: UtopiaUserCountAggregateOutputType | null
    _avg: UtopiaUserAvgAggregateOutputType | null
    _sum: UtopiaUserSumAggregateOutputType | null
    _min: UtopiaUserMinAggregateOutputType | null
    _max: UtopiaUserMaxAggregateOutputType | null
  }

  export type UtopiaUserAvgAggregateOutputType = {
    id: number | null
  }

  export type UtopiaUserSumAggregateOutputType = {
    id: number | null
  }

  export type UtopiaUserMinAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    auth_user_id: string | null
    email: string | null
    image: string | null
  }

  export type UtopiaUserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    auth_user_id: string | null
    email: string | null
    image: string | null
  }

  export type UtopiaUserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    auth_user_id: number
    email: number
    image: number
    _all: number
  }


  export type UtopiaUserAvgAggregateInputType = {
    id?: true
  }

  export type UtopiaUserSumAggregateInputType = {
    id?: true
  }

  export type UtopiaUserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    auth_user_id?: true
    email?: true
    image?: true
  }

  export type UtopiaUserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    auth_user_id?: true
    email?: true
    image?: true
  }

  export type UtopiaUserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    auth_user_id?: true
    email?: true
    image?: true
    _all?: true
  }

  export type UtopiaUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UtopiaUser to aggregate.
     */
    where?: UtopiaUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UtopiaUsers to fetch.
     */
    orderBy?: UtopiaUserOrderByWithRelationInput | UtopiaUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtopiaUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UtopiaUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UtopiaUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UtopiaUsers
    **/
    _count?: true | UtopiaUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UtopiaUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UtopiaUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtopiaUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtopiaUserMaxAggregateInputType
  }

  export type GetUtopiaUserAggregateType<T extends UtopiaUserAggregateArgs> = {
        [P in keyof T & keyof AggregateUtopiaUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtopiaUser[P]>
      : GetScalarType<T[P], AggregateUtopiaUser[P]>
  }




  export type UtopiaUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtopiaUserWhereInput
    orderBy?: UtopiaUserOrderByWithAggregationInput | UtopiaUserOrderByWithAggregationInput[]
    by: UtopiaUserScalarFieldEnum[] | UtopiaUserScalarFieldEnum
    having?: UtopiaUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtopiaUserCountAggregateInputType | true
    _avg?: UtopiaUserAvgAggregateInputType
    _sum?: UtopiaUserSumAggregateInputType
    _min?: UtopiaUserMinAggregateInputType
    _max?: UtopiaUserMaxAggregateInputType
  }

  export type UtopiaUserGroupByOutputType = {
    id: number
    name: string | null
    username: string | null
    auth_user_id: string
    email: string
    image: string | null
    _count: UtopiaUserCountAggregateOutputType | null
    _avg: UtopiaUserAvgAggregateOutputType | null
    _sum: UtopiaUserSumAggregateOutputType | null
    _min: UtopiaUserMinAggregateOutputType | null
    _max: UtopiaUserMaxAggregateOutputType | null
  }

  type GetUtopiaUserGroupByPayload<T extends UtopiaUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtopiaUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtopiaUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtopiaUserGroupByOutputType[P]>
            : GetScalarType<T[P], UtopiaUserGroupByOutputType[P]>
        }
      >
    >


  export type UtopiaUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    auth_user_id?: boolean
    email?: boolean
    image?: boolean
    followers?: boolean | UtopiaUser$followersArgs<ExtArgs>
    following?: boolean | UtopiaUser$followingArgs<ExtArgs>
    _count?: boolean | UtopiaUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utopiaUser"]>

  export type UtopiaUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    auth_user_id?: boolean
    email?: boolean
    image?: boolean
  }, ExtArgs["result"]["utopiaUser"]>

  export type UtopiaUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    auth_user_id?: boolean
    email?: boolean
    image?: boolean
  }, ExtArgs["result"]["utopiaUser"]>

  export type UtopiaUserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    auth_user_id?: boolean
    email?: boolean
    image?: boolean
  }

  export type UtopiaUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "auth_user_id" | "email" | "image", ExtArgs["result"]["utopiaUser"]>
  export type UtopiaUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    followers?: boolean | UtopiaUser$followersArgs<ExtArgs>
    following?: boolean | UtopiaUser$followingArgs<ExtArgs>
    _count?: boolean | UtopiaUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UtopiaUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UtopiaUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UtopiaUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UtopiaUser"
    objects: {
      followers: Prisma.$FollowAssociationPayload<ExtArgs>[]
      following: Prisma.$FollowAssociationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      username: string | null
      auth_user_id: string
      email: string
      image: string | null
    }, ExtArgs["result"]["utopiaUser"]>
    composites: {}
  }

  type UtopiaUserGetPayload<S extends boolean | null | undefined | UtopiaUserDefaultArgs> = $Result.GetResult<Prisma.$UtopiaUserPayload, S>

  type UtopiaUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UtopiaUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtopiaUserCountAggregateInputType | true
    }

  export interface UtopiaUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UtopiaUser'], meta: { name: 'UtopiaUser' } }
    /**
     * Find zero or one UtopiaUser that matches the filter.
     * @param {UtopiaUserFindUniqueArgs} args - Arguments to find a UtopiaUser
     * @example
     * // Get one UtopiaUser
     * const utopiaUser = await prisma.utopiaUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UtopiaUserFindUniqueArgs>(args: SelectSubset<T, UtopiaUserFindUniqueArgs<ExtArgs>>): Prisma__UtopiaUserClient<$Result.GetResult<Prisma.$UtopiaUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UtopiaUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UtopiaUserFindUniqueOrThrowArgs} args - Arguments to find a UtopiaUser
     * @example
     * // Get one UtopiaUser
     * const utopiaUser = await prisma.utopiaUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UtopiaUserFindUniqueOrThrowArgs>(args: SelectSubset<T, UtopiaUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UtopiaUserClient<$Result.GetResult<Prisma.$UtopiaUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UtopiaUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtopiaUserFindFirstArgs} args - Arguments to find a UtopiaUser
     * @example
     * // Get one UtopiaUser
     * const utopiaUser = await prisma.utopiaUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UtopiaUserFindFirstArgs>(args?: SelectSubset<T, UtopiaUserFindFirstArgs<ExtArgs>>): Prisma__UtopiaUserClient<$Result.GetResult<Prisma.$UtopiaUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UtopiaUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtopiaUserFindFirstOrThrowArgs} args - Arguments to find a UtopiaUser
     * @example
     * // Get one UtopiaUser
     * const utopiaUser = await prisma.utopiaUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UtopiaUserFindFirstOrThrowArgs>(args?: SelectSubset<T, UtopiaUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UtopiaUserClient<$Result.GetResult<Prisma.$UtopiaUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UtopiaUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtopiaUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UtopiaUsers
     * const utopiaUsers = await prisma.utopiaUser.findMany()
     * 
     * // Get first 10 UtopiaUsers
     * const utopiaUsers = await prisma.utopiaUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utopiaUserWithIdOnly = await prisma.utopiaUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UtopiaUserFindManyArgs>(args?: SelectSubset<T, UtopiaUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtopiaUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UtopiaUser.
     * @param {UtopiaUserCreateArgs} args - Arguments to create a UtopiaUser.
     * @example
     * // Create one UtopiaUser
     * const UtopiaUser = await prisma.utopiaUser.create({
     *   data: {
     *     // ... data to create a UtopiaUser
     *   }
     * })
     * 
     */
    create<T extends UtopiaUserCreateArgs>(args: SelectSubset<T, UtopiaUserCreateArgs<ExtArgs>>): Prisma__UtopiaUserClient<$Result.GetResult<Prisma.$UtopiaUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UtopiaUsers.
     * @param {UtopiaUserCreateManyArgs} args - Arguments to create many UtopiaUsers.
     * @example
     * // Create many UtopiaUsers
     * const utopiaUser = await prisma.utopiaUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UtopiaUserCreateManyArgs>(args?: SelectSubset<T, UtopiaUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UtopiaUsers and returns the data saved in the database.
     * @param {UtopiaUserCreateManyAndReturnArgs} args - Arguments to create many UtopiaUsers.
     * @example
     * // Create many UtopiaUsers
     * const utopiaUser = await prisma.utopiaUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UtopiaUsers and only return the `id`
     * const utopiaUserWithIdOnly = await prisma.utopiaUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UtopiaUserCreateManyAndReturnArgs>(args?: SelectSubset<T, UtopiaUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtopiaUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UtopiaUser.
     * @param {UtopiaUserDeleteArgs} args - Arguments to delete one UtopiaUser.
     * @example
     * // Delete one UtopiaUser
     * const UtopiaUser = await prisma.utopiaUser.delete({
     *   where: {
     *     // ... filter to delete one UtopiaUser
     *   }
     * })
     * 
     */
    delete<T extends UtopiaUserDeleteArgs>(args: SelectSubset<T, UtopiaUserDeleteArgs<ExtArgs>>): Prisma__UtopiaUserClient<$Result.GetResult<Prisma.$UtopiaUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UtopiaUser.
     * @param {UtopiaUserUpdateArgs} args - Arguments to update one UtopiaUser.
     * @example
     * // Update one UtopiaUser
     * const utopiaUser = await prisma.utopiaUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UtopiaUserUpdateArgs>(args: SelectSubset<T, UtopiaUserUpdateArgs<ExtArgs>>): Prisma__UtopiaUserClient<$Result.GetResult<Prisma.$UtopiaUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UtopiaUsers.
     * @param {UtopiaUserDeleteManyArgs} args - Arguments to filter UtopiaUsers to delete.
     * @example
     * // Delete a few UtopiaUsers
     * const { count } = await prisma.utopiaUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UtopiaUserDeleteManyArgs>(args?: SelectSubset<T, UtopiaUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UtopiaUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtopiaUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UtopiaUsers
     * const utopiaUser = await prisma.utopiaUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UtopiaUserUpdateManyArgs>(args: SelectSubset<T, UtopiaUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UtopiaUsers and returns the data updated in the database.
     * @param {UtopiaUserUpdateManyAndReturnArgs} args - Arguments to update many UtopiaUsers.
     * @example
     * // Update many UtopiaUsers
     * const utopiaUser = await prisma.utopiaUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UtopiaUsers and only return the `id`
     * const utopiaUserWithIdOnly = await prisma.utopiaUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UtopiaUserUpdateManyAndReturnArgs>(args: SelectSubset<T, UtopiaUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtopiaUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UtopiaUser.
     * @param {UtopiaUserUpsertArgs} args - Arguments to update or create a UtopiaUser.
     * @example
     * // Update or create a UtopiaUser
     * const utopiaUser = await prisma.utopiaUser.upsert({
     *   create: {
     *     // ... data to create a UtopiaUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UtopiaUser we want to update
     *   }
     * })
     */
    upsert<T extends UtopiaUserUpsertArgs>(args: SelectSubset<T, UtopiaUserUpsertArgs<ExtArgs>>): Prisma__UtopiaUserClient<$Result.GetResult<Prisma.$UtopiaUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UtopiaUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtopiaUserCountArgs} args - Arguments to filter UtopiaUsers to count.
     * @example
     * // Count the number of UtopiaUsers
     * const count = await prisma.utopiaUser.count({
     *   where: {
     *     // ... the filter for the UtopiaUsers we want to count
     *   }
     * })
    **/
    count<T extends UtopiaUserCountArgs>(
      args?: Subset<T, UtopiaUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtopiaUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UtopiaUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtopiaUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UtopiaUserAggregateArgs>(args: Subset<T, UtopiaUserAggregateArgs>): Prisma.PrismaPromise<GetUtopiaUserAggregateType<T>>

    /**
     * Group by UtopiaUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtopiaUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UtopiaUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtopiaUserGroupByArgs['orderBy'] }
        : { orderBy?: UtopiaUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UtopiaUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtopiaUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UtopiaUser model
   */
  readonly fields: UtopiaUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UtopiaUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtopiaUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    followers<T extends UtopiaUser$followersArgs<ExtArgs> = {}>(args?: Subset<T, UtopiaUser$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowAssociationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    following<T extends UtopiaUser$followingArgs<ExtArgs> = {}>(args?: Subset<T, UtopiaUser$followingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowAssociationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UtopiaUser model
   */
  interface UtopiaUserFieldRefs {
    readonly id: FieldRef<"UtopiaUser", 'Int'>
    readonly name: FieldRef<"UtopiaUser", 'String'>
    readonly username: FieldRef<"UtopiaUser", 'String'>
    readonly auth_user_id: FieldRef<"UtopiaUser", 'String'>
    readonly email: FieldRef<"UtopiaUser", 'String'>
    readonly image: FieldRef<"UtopiaUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UtopiaUser findUnique
   */
  export type UtopiaUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtopiaUser
     */
    select?: UtopiaUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtopiaUser
     */
    omit?: UtopiaUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtopiaUserInclude<ExtArgs> | null
    /**
     * Filter, which UtopiaUser to fetch.
     */
    where: UtopiaUserWhereUniqueInput
  }

  /**
   * UtopiaUser findUniqueOrThrow
   */
  export type UtopiaUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtopiaUser
     */
    select?: UtopiaUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtopiaUser
     */
    omit?: UtopiaUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtopiaUserInclude<ExtArgs> | null
    /**
     * Filter, which UtopiaUser to fetch.
     */
    where: UtopiaUserWhereUniqueInput
  }

  /**
   * UtopiaUser findFirst
   */
  export type UtopiaUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtopiaUser
     */
    select?: UtopiaUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtopiaUser
     */
    omit?: UtopiaUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtopiaUserInclude<ExtArgs> | null
    /**
     * Filter, which UtopiaUser to fetch.
     */
    where?: UtopiaUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UtopiaUsers to fetch.
     */
    orderBy?: UtopiaUserOrderByWithRelationInput | UtopiaUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UtopiaUsers.
     */
    cursor?: UtopiaUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UtopiaUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UtopiaUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UtopiaUsers.
     */
    distinct?: UtopiaUserScalarFieldEnum | UtopiaUserScalarFieldEnum[]
  }

  /**
   * UtopiaUser findFirstOrThrow
   */
  export type UtopiaUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtopiaUser
     */
    select?: UtopiaUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtopiaUser
     */
    omit?: UtopiaUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtopiaUserInclude<ExtArgs> | null
    /**
     * Filter, which UtopiaUser to fetch.
     */
    where?: UtopiaUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UtopiaUsers to fetch.
     */
    orderBy?: UtopiaUserOrderByWithRelationInput | UtopiaUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UtopiaUsers.
     */
    cursor?: UtopiaUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UtopiaUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UtopiaUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UtopiaUsers.
     */
    distinct?: UtopiaUserScalarFieldEnum | UtopiaUserScalarFieldEnum[]
  }

  /**
   * UtopiaUser findMany
   */
  export type UtopiaUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtopiaUser
     */
    select?: UtopiaUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtopiaUser
     */
    omit?: UtopiaUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtopiaUserInclude<ExtArgs> | null
    /**
     * Filter, which UtopiaUsers to fetch.
     */
    where?: UtopiaUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UtopiaUsers to fetch.
     */
    orderBy?: UtopiaUserOrderByWithRelationInput | UtopiaUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UtopiaUsers.
     */
    cursor?: UtopiaUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UtopiaUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UtopiaUsers.
     */
    skip?: number
    distinct?: UtopiaUserScalarFieldEnum | UtopiaUserScalarFieldEnum[]
  }

  /**
   * UtopiaUser create
   */
  export type UtopiaUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtopiaUser
     */
    select?: UtopiaUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtopiaUser
     */
    omit?: UtopiaUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtopiaUserInclude<ExtArgs> | null
    /**
     * The data needed to create a UtopiaUser.
     */
    data: XOR<UtopiaUserCreateInput, UtopiaUserUncheckedCreateInput>
  }

  /**
   * UtopiaUser createMany
   */
  export type UtopiaUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UtopiaUsers.
     */
    data: UtopiaUserCreateManyInput | UtopiaUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UtopiaUser createManyAndReturn
   */
  export type UtopiaUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtopiaUser
     */
    select?: UtopiaUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UtopiaUser
     */
    omit?: UtopiaUserOmit<ExtArgs> | null
    /**
     * The data used to create many UtopiaUsers.
     */
    data: UtopiaUserCreateManyInput | UtopiaUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UtopiaUser update
   */
  export type UtopiaUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtopiaUser
     */
    select?: UtopiaUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtopiaUser
     */
    omit?: UtopiaUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtopiaUserInclude<ExtArgs> | null
    /**
     * The data needed to update a UtopiaUser.
     */
    data: XOR<UtopiaUserUpdateInput, UtopiaUserUncheckedUpdateInput>
    /**
     * Choose, which UtopiaUser to update.
     */
    where: UtopiaUserWhereUniqueInput
  }

  /**
   * UtopiaUser updateMany
   */
  export type UtopiaUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UtopiaUsers.
     */
    data: XOR<UtopiaUserUpdateManyMutationInput, UtopiaUserUncheckedUpdateManyInput>
    /**
     * Filter which UtopiaUsers to update
     */
    where?: UtopiaUserWhereInput
    /**
     * Limit how many UtopiaUsers to update.
     */
    limit?: number
  }

  /**
   * UtopiaUser updateManyAndReturn
   */
  export type UtopiaUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtopiaUser
     */
    select?: UtopiaUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UtopiaUser
     */
    omit?: UtopiaUserOmit<ExtArgs> | null
    /**
     * The data used to update UtopiaUsers.
     */
    data: XOR<UtopiaUserUpdateManyMutationInput, UtopiaUserUncheckedUpdateManyInput>
    /**
     * Filter which UtopiaUsers to update
     */
    where?: UtopiaUserWhereInput
    /**
     * Limit how many UtopiaUsers to update.
     */
    limit?: number
  }

  /**
   * UtopiaUser upsert
   */
  export type UtopiaUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtopiaUser
     */
    select?: UtopiaUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtopiaUser
     */
    omit?: UtopiaUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtopiaUserInclude<ExtArgs> | null
    /**
     * The filter to search for the UtopiaUser to update in case it exists.
     */
    where: UtopiaUserWhereUniqueInput
    /**
     * In case the UtopiaUser found by the `where` argument doesn't exist, create a new UtopiaUser with this data.
     */
    create: XOR<UtopiaUserCreateInput, UtopiaUserUncheckedCreateInput>
    /**
     * In case the UtopiaUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtopiaUserUpdateInput, UtopiaUserUncheckedUpdateInput>
  }

  /**
   * UtopiaUser delete
   */
  export type UtopiaUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtopiaUser
     */
    select?: UtopiaUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtopiaUser
     */
    omit?: UtopiaUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtopiaUserInclude<ExtArgs> | null
    /**
     * Filter which UtopiaUser to delete.
     */
    where: UtopiaUserWhereUniqueInput
  }

  /**
   * UtopiaUser deleteMany
   */
  export type UtopiaUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UtopiaUsers to delete
     */
    where?: UtopiaUserWhereInput
    /**
     * Limit how many UtopiaUsers to delete.
     */
    limit?: number
  }

  /**
   * UtopiaUser.followers
   */
  export type UtopiaUser$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowAssociation
     */
    select?: FollowAssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowAssociation
     */
    omit?: FollowAssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowAssociationInclude<ExtArgs> | null
    where?: FollowAssociationWhereInput
    orderBy?: FollowAssociationOrderByWithRelationInput | FollowAssociationOrderByWithRelationInput[]
    cursor?: FollowAssociationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowAssociationScalarFieldEnum | FollowAssociationScalarFieldEnum[]
  }

  /**
   * UtopiaUser.following
   */
  export type UtopiaUser$followingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowAssociation
     */
    select?: FollowAssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowAssociation
     */
    omit?: FollowAssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowAssociationInclude<ExtArgs> | null
    where?: FollowAssociationWhereInput
    orderBy?: FollowAssociationOrderByWithRelationInput | FollowAssociationOrderByWithRelationInput[]
    cursor?: FollowAssociationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowAssociationScalarFieldEnum | FollowAssociationScalarFieldEnum[]
  }

  /**
   * UtopiaUser without action
   */
  export type UtopiaUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtopiaUser
     */
    select?: UtopiaUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtopiaUser
     */
    omit?: UtopiaUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtopiaUserInclude<ExtArgs> | null
  }


  /**
   * Model FollowAssociation
   */

  export type AggregateFollowAssociation = {
    _count: FollowAssociationCountAggregateOutputType | null
    _avg: FollowAssociationAvgAggregateOutputType | null
    _sum: FollowAssociationSumAggregateOutputType | null
    _min: FollowAssociationMinAggregateOutputType | null
    _max: FollowAssociationMaxAggregateOutputType | null
  }

  export type FollowAssociationAvgAggregateOutputType = {
    user_id: number | null
    follower_id: number | null
  }

  export type FollowAssociationSumAggregateOutputType = {
    user_id: number | null
    follower_id: number | null
  }

  export type FollowAssociationMinAggregateOutputType = {
    user_id: number | null
    follower_id: number | null
    followedAt: Date | null
  }

  export type FollowAssociationMaxAggregateOutputType = {
    user_id: number | null
    follower_id: number | null
    followedAt: Date | null
  }

  export type FollowAssociationCountAggregateOutputType = {
    user_id: number
    follower_id: number
    followedAt: number
    _all: number
  }


  export type FollowAssociationAvgAggregateInputType = {
    user_id?: true
    follower_id?: true
  }

  export type FollowAssociationSumAggregateInputType = {
    user_id?: true
    follower_id?: true
  }

  export type FollowAssociationMinAggregateInputType = {
    user_id?: true
    follower_id?: true
    followedAt?: true
  }

  export type FollowAssociationMaxAggregateInputType = {
    user_id?: true
    follower_id?: true
    followedAt?: true
  }

  export type FollowAssociationCountAggregateInputType = {
    user_id?: true
    follower_id?: true
    followedAt?: true
    _all?: true
  }

  export type FollowAssociationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FollowAssociation to aggregate.
     */
    where?: FollowAssociationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowAssociations to fetch.
     */
    orderBy?: FollowAssociationOrderByWithRelationInput | FollowAssociationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowAssociationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowAssociations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowAssociations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FollowAssociations
    **/
    _count?: true | FollowAssociationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FollowAssociationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FollowAssociationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowAssociationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowAssociationMaxAggregateInputType
  }

  export type GetFollowAssociationAggregateType<T extends FollowAssociationAggregateArgs> = {
        [P in keyof T & keyof AggregateFollowAssociation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollowAssociation[P]>
      : GetScalarType<T[P], AggregateFollowAssociation[P]>
  }




  export type FollowAssociationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowAssociationWhereInput
    orderBy?: FollowAssociationOrderByWithAggregationInput | FollowAssociationOrderByWithAggregationInput[]
    by: FollowAssociationScalarFieldEnum[] | FollowAssociationScalarFieldEnum
    having?: FollowAssociationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowAssociationCountAggregateInputType | true
    _avg?: FollowAssociationAvgAggregateInputType
    _sum?: FollowAssociationSumAggregateInputType
    _min?: FollowAssociationMinAggregateInputType
    _max?: FollowAssociationMaxAggregateInputType
  }

  export type FollowAssociationGroupByOutputType = {
    user_id: number
    follower_id: number
    followedAt: Date
    _count: FollowAssociationCountAggregateOutputType | null
    _avg: FollowAssociationAvgAggregateOutputType | null
    _sum: FollowAssociationSumAggregateOutputType | null
    _min: FollowAssociationMinAggregateOutputType | null
    _max: FollowAssociationMaxAggregateOutputType | null
  }

  type GetFollowAssociationGroupByPayload<T extends FollowAssociationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowAssociationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowAssociationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowAssociationGroupByOutputType[P]>
            : GetScalarType<T[P], FollowAssociationGroupByOutputType[P]>
        }
      >
    >


  export type FollowAssociationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    follower_id?: boolean
    followedAt?: boolean
    user?: boolean | UtopiaUserDefaultArgs<ExtArgs>
    follower?: boolean | UtopiaUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["followAssociation"]>

  export type FollowAssociationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    follower_id?: boolean
    followedAt?: boolean
    user?: boolean | UtopiaUserDefaultArgs<ExtArgs>
    follower?: boolean | UtopiaUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["followAssociation"]>

  export type FollowAssociationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    follower_id?: boolean
    followedAt?: boolean
    user?: boolean | UtopiaUserDefaultArgs<ExtArgs>
    follower?: boolean | UtopiaUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["followAssociation"]>

  export type FollowAssociationSelectScalar = {
    user_id?: boolean
    follower_id?: boolean
    followedAt?: boolean
  }

  export type FollowAssociationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "follower_id" | "followedAt", ExtArgs["result"]["followAssociation"]>
  export type FollowAssociationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UtopiaUserDefaultArgs<ExtArgs>
    follower?: boolean | UtopiaUserDefaultArgs<ExtArgs>
  }
  export type FollowAssociationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UtopiaUserDefaultArgs<ExtArgs>
    follower?: boolean | UtopiaUserDefaultArgs<ExtArgs>
  }
  export type FollowAssociationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UtopiaUserDefaultArgs<ExtArgs>
    follower?: boolean | UtopiaUserDefaultArgs<ExtArgs>
  }

  export type $FollowAssociationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FollowAssociation"
    objects: {
      user: Prisma.$UtopiaUserPayload<ExtArgs>
      follower: Prisma.$UtopiaUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      follower_id: number
      followedAt: Date
    }, ExtArgs["result"]["followAssociation"]>
    composites: {}
  }

  type FollowAssociationGetPayload<S extends boolean | null | undefined | FollowAssociationDefaultArgs> = $Result.GetResult<Prisma.$FollowAssociationPayload, S>

  type FollowAssociationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FollowAssociationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowAssociationCountAggregateInputType | true
    }

  export interface FollowAssociationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FollowAssociation'], meta: { name: 'FollowAssociation' } }
    /**
     * Find zero or one FollowAssociation that matches the filter.
     * @param {FollowAssociationFindUniqueArgs} args - Arguments to find a FollowAssociation
     * @example
     * // Get one FollowAssociation
     * const followAssociation = await prisma.followAssociation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowAssociationFindUniqueArgs>(args: SelectSubset<T, FollowAssociationFindUniqueArgs<ExtArgs>>): Prisma__FollowAssociationClient<$Result.GetResult<Prisma.$FollowAssociationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FollowAssociation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowAssociationFindUniqueOrThrowArgs} args - Arguments to find a FollowAssociation
     * @example
     * // Get one FollowAssociation
     * const followAssociation = await prisma.followAssociation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowAssociationFindUniqueOrThrowArgs>(args: SelectSubset<T, FollowAssociationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FollowAssociationClient<$Result.GetResult<Prisma.$FollowAssociationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FollowAssociation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowAssociationFindFirstArgs} args - Arguments to find a FollowAssociation
     * @example
     * // Get one FollowAssociation
     * const followAssociation = await prisma.followAssociation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowAssociationFindFirstArgs>(args?: SelectSubset<T, FollowAssociationFindFirstArgs<ExtArgs>>): Prisma__FollowAssociationClient<$Result.GetResult<Prisma.$FollowAssociationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FollowAssociation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowAssociationFindFirstOrThrowArgs} args - Arguments to find a FollowAssociation
     * @example
     * // Get one FollowAssociation
     * const followAssociation = await prisma.followAssociation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowAssociationFindFirstOrThrowArgs>(args?: SelectSubset<T, FollowAssociationFindFirstOrThrowArgs<ExtArgs>>): Prisma__FollowAssociationClient<$Result.GetResult<Prisma.$FollowAssociationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FollowAssociations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowAssociationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FollowAssociations
     * const followAssociations = await prisma.followAssociation.findMany()
     * 
     * // Get first 10 FollowAssociations
     * const followAssociations = await prisma.followAssociation.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const followAssociationWithUser_idOnly = await prisma.followAssociation.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends FollowAssociationFindManyArgs>(args?: SelectSubset<T, FollowAssociationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowAssociationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FollowAssociation.
     * @param {FollowAssociationCreateArgs} args - Arguments to create a FollowAssociation.
     * @example
     * // Create one FollowAssociation
     * const FollowAssociation = await prisma.followAssociation.create({
     *   data: {
     *     // ... data to create a FollowAssociation
     *   }
     * })
     * 
     */
    create<T extends FollowAssociationCreateArgs>(args: SelectSubset<T, FollowAssociationCreateArgs<ExtArgs>>): Prisma__FollowAssociationClient<$Result.GetResult<Prisma.$FollowAssociationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FollowAssociations.
     * @param {FollowAssociationCreateManyArgs} args - Arguments to create many FollowAssociations.
     * @example
     * // Create many FollowAssociations
     * const followAssociation = await prisma.followAssociation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FollowAssociationCreateManyArgs>(args?: SelectSubset<T, FollowAssociationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FollowAssociations and returns the data saved in the database.
     * @param {FollowAssociationCreateManyAndReturnArgs} args - Arguments to create many FollowAssociations.
     * @example
     * // Create many FollowAssociations
     * const followAssociation = await prisma.followAssociation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FollowAssociations and only return the `user_id`
     * const followAssociationWithUser_idOnly = await prisma.followAssociation.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FollowAssociationCreateManyAndReturnArgs>(args?: SelectSubset<T, FollowAssociationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowAssociationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FollowAssociation.
     * @param {FollowAssociationDeleteArgs} args - Arguments to delete one FollowAssociation.
     * @example
     * // Delete one FollowAssociation
     * const FollowAssociation = await prisma.followAssociation.delete({
     *   where: {
     *     // ... filter to delete one FollowAssociation
     *   }
     * })
     * 
     */
    delete<T extends FollowAssociationDeleteArgs>(args: SelectSubset<T, FollowAssociationDeleteArgs<ExtArgs>>): Prisma__FollowAssociationClient<$Result.GetResult<Prisma.$FollowAssociationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FollowAssociation.
     * @param {FollowAssociationUpdateArgs} args - Arguments to update one FollowAssociation.
     * @example
     * // Update one FollowAssociation
     * const followAssociation = await prisma.followAssociation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FollowAssociationUpdateArgs>(args: SelectSubset<T, FollowAssociationUpdateArgs<ExtArgs>>): Prisma__FollowAssociationClient<$Result.GetResult<Prisma.$FollowAssociationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FollowAssociations.
     * @param {FollowAssociationDeleteManyArgs} args - Arguments to filter FollowAssociations to delete.
     * @example
     * // Delete a few FollowAssociations
     * const { count } = await prisma.followAssociation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FollowAssociationDeleteManyArgs>(args?: SelectSubset<T, FollowAssociationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FollowAssociations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowAssociationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FollowAssociations
     * const followAssociation = await prisma.followAssociation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FollowAssociationUpdateManyArgs>(args: SelectSubset<T, FollowAssociationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FollowAssociations and returns the data updated in the database.
     * @param {FollowAssociationUpdateManyAndReturnArgs} args - Arguments to update many FollowAssociations.
     * @example
     * // Update many FollowAssociations
     * const followAssociation = await prisma.followAssociation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FollowAssociations and only return the `user_id`
     * const followAssociationWithUser_idOnly = await prisma.followAssociation.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FollowAssociationUpdateManyAndReturnArgs>(args: SelectSubset<T, FollowAssociationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowAssociationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FollowAssociation.
     * @param {FollowAssociationUpsertArgs} args - Arguments to update or create a FollowAssociation.
     * @example
     * // Update or create a FollowAssociation
     * const followAssociation = await prisma.followAssociation.upsert({
     *   create: {
     *     // ... data to create a FollowAssociation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FollowAssociation we want to update
     *   }
     * })
     */
    upsert<T extends FollowAssociationUpsertArgs>(args: SelectSubset<T, FollowAssociationUpsertArgs<ExtArgs>>): Prisma__FollowAssociationClient<$Result.GetResult<Prisma.$FollowAssociationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FollowAssociations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowAssociationCountArgs} args - Arguments to filter FollowAssociations to count.
     * @example
     * // Count the number of FollowAssociations
     * const count = await prisma.followAssociation.count({
     *   where: {
     *     // ... the filter for the FollowAssociations we want to count
     *   }
     * })
    **/
    count<T extends FollowAssociationCountArgs>(
      args?: Subset<T, FollowAssociationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowAssociationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FollowAssociation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowAssociationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FollowAssociationAggregateArgs>(args: Subset<T, FollowAssociationAggregateArgs>): Prisma.PrismaPromise<GetFollowAssociationAggregateType<T>>

    /**
     * Group by FollowAssociation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowAssociationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FollowAssociationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowAssociationGroupByArgs['orderBy'] }
        : { orderBy?: FollowAssociationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FollowAssociationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowAssociationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FollowAssociation model
   */
  readonly fields: FollowAssociationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FollowAssociation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowAssociationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UtopiaUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtopiaUserDefaultArgs<ExtArgs>>): Prisma__UtopiaUserClient<$Result.GetResult<Prisma.$UtopiaUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    follower<T extends UtopiaUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtopiaUserDefaultArgs<ExtArgs>>): Prisma__UtopiaUserClient<$Result.GetResult<Prisma.$UtopiaUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FollowAssociation model
   */
  interface FollowAssociationFieldRefs {
    readonly user_id: FieldRef<"FollowAssociation", 'Int'>
    readonly follower_id: FieldRef<"FollowAssociation", 'Int'>
    readonly followedAt: FieldRef<"FollowAssociation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FollowAssociation findUnique
   */
  export type FollowAssociationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowAssociation
     */
    select?: FollowAssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowAssociation
     */
    omit?: FollowAssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowAssociationInclude<ExtArgs> | null
    /**
     * Filter, which FollowAssociation to fetch.
     */
    where: FollowAssociationWhereUniqueInput
  }

  /**
   * FollowAssociation findUniqueOrThrow
   */
  export type FollowAssociationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowAssociation
     */
    select?: FollowAssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowAssociation
     */
    omit?: FollowAssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowAssociationInclude<ExtArgs> | null
    /**
     * Filter, which FollowAssociation to fetch.
     */
    where: FollowAssociationWhereUniqueInput
  }

  /**
   * FollowAssociation findFirst
   */
  export type FollowAssociationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowAssociation
     */
    select?: FollowAssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowAssociation
     */
    omit?: FollowAssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowAssociationInclude<ExtArgs> | null
    /**
     * Filter, which FollowAssociation to fetch.
     */
    where?: FollowAssociationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowAssociations to fetch.
     */
    orderBy?: FollowAssociationOrderByWithRelationInput | FollowAssociationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FollowAssociations.
     */
    cursor?: FollowAssociationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowAssociations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowAssociations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FollowAssociations.
     */
    distinct?: FollowAssociationScalarFieldEnum | FollowAssociationScalarFieldEnum[]
  }

  /**
   * FollowAssociation findFirstOrThrow
   */
  export type FollowAssociationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowAssociation
     */
    select?: FollowAssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowAssociation
     */
    omit?: FollowAssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowAssociationInclude<ExtArgs> | null
    /**
     * Filter, which FollowAssociation to fetch.
     */
    where?: FollowAssociationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowAssociations to fetch.
     */
    orderBy?: FollowAssociationOrderByWithRelationInput | FollowAssociationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FollowAssociations.
     */
    cursor?: FollowAssociationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowAssociations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowAssociations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FollowAssociations.
     */
    distinct?: FollowAssociationScalarFieldEnum | FollowAssociationScalarFieldEnum[]
  }

  /**
   * FollowAssociation findMany
   */
  export type FollowAssociationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowAssociation
     */
    select?: FollowAssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowAssociation
     */
    omit?: FollowAssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowAssociationInclude<ExtArgs> | null
    /**
     * Filter, which FollowAssociations to fetch.
     */
    where?: FollowAssociationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowAssociations to fetch.
     */
    orderBy?: FollowAssociationOrderByWithRelationInput | FollowAssociationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FollowAssociations.
     */
    cursor?: FollowAssociationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowAssociations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowAssociations.
     */
    skip?: number
    distinct?: FollowAssociationScalarFieldEnum | FollowAssociationScalarFieldEnum[]
  }

  /**
   * FollowAssociation create
   */
  export type FollowAssociationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowAssociation
     */
    select?: FollowAssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowAssociation
     */
    omit?: FollowAssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowAssociationInclude<ExtArgs> | null
    /**
     * The data needed to create a FollowAssociation.
     */
    data: XOR<FollowAssociationCreateInput, FollowAssociationUncheckedCreateInput>
  }

  /**
   * FollowAssociation createMany
   */
  export type FollowAssociationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FollowAssociations.
     */
    data: FollowAssociationCreateManyInput | FollowAssociationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FollowAssociation createManyAndReturn
   */
  export type FollowAssociationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowAssociation
     */
    select?: FollowAssociationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FollowAssociation
     */
    omit?: FollowAssociationOmit<ExtArgs> | null
    /**
     * The data used to create many FollowAssociations.
     */
    data: FollowAssociationCreateManyInput | FollowAssociationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowAssociationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FollowAssociation update
   */
  export type FollowAssociationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowAssociation
     */
    select?: FollowAssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowAssociation
     */
    omit?: FollowAssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowAssociationInclude<ExtArgs> | null
    /**
     * The data needed to update a FollowAssociation.
     */
    data: XOR<FollowAssociationUpdateInput, FollowAssociationUncheckedUpdateInput>
    /**
     * Choose, which FollowAssociation to update.
     */
    where: FollowAssociationWhereUniqueInput
  }

  /**
   * FollowAssociation updateMany
   */
  export type FollowAssociationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FollowAssociations.
     */
    data: XOR<FollowAssociationUpdateManyMutationInput, FollowAssociationUncheckedUpdateManyInput>
    /**
     * Filter which FollowAssociations to update
     */
    where?: FollowAssociationWhereInput
    /**
     * Limit how many FollowAssociations to update.
     */
    limit?: number
  }

  /**
   * FollowAssociation updateManyAndReturn
   */
  export type FollowAssociationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowAssociation
     */
    select?: FollowAssociationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FollowAssociation
     */
    omit?: FollowAssociationOmit<ExtArgs> | null
    /**
     * The data used to update FollowAssociations.
     */
    data: XOR<FollowAssociationUpdateManyMutationInput, FollowAssociationUncheckedUpdateManyInput>
    /**
     * Filter which FollowAssociations to update
     */
    where?: FollowAssociationWhereInput
    /**
     * Limit how many FollowAssociations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowAssociationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FollowAssociation upsert
   */
  export type FollowAssociationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowAssociation
     */
    select?: FollowAssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowAssociation
     */
    omit?: FollowAssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowAssociationInclude<ExtArgs> | null
    /**
     * The filter to search for the FollowAssociation to update in case it exists.
     */
    where: FollowAssociationWhereUniqueInput
    /**
     * In case the FollowAssociation found by the `where` argument doesn't exist, create a new FollowAssociation with this data.
     */
    create: XOR<FollowAssociationCreateInput, FollowAssociationUncheckedCreateInput>
    /**
     * In case the FollowAssociation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowAssociationUpdateInput, FollowAssociationUncheckedUpdateInput>
  }

  /**
   * FollowAssociation delete
   */
  export type FollowAssociationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowAssociation
     */
    select?: FollowAssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowAssociation
     */
    omit?: FollowAssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowAssociationInclude<ExtArgs> | null
    /**
     * Filter which FollowAssociation to delete.
     */
    where: FollowAssociationWhereUniqueInput
  }

  /**
   * FollowAssociation deleteMany
   */
  export type FollowAssociationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FollowAssociations to delete
     */
    where?: FollowAssociationWhereInput
    /**
     * Limit how many FollowAssociations to delete.
     */
    limit?: number
  }

  /**
   * FollowAssociation without action
   */
  export type FollowAssociationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowAssociation
     */
    select?: FollowAssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowAssociation
     */
    omit?: FollowAssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowAssociationInclude<ExtArgs> | null
  }


  /**
   * Model Posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type PostsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type PostsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    content: string | null
    image: Uint8Array | null
    created_at: string | null
  }

  export type PostsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    content: string | null
    image: Uint8Array | null
    created_at: string | null
  }

  export type PostsCountAggregateOutputType = {
    id: number
    user_id: number
    content: number
    image: number
    created_at: number
    _all: number
  }


  export type PostsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type PostsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type PostsMinAggregateInputType = {
    id?: true
    user_id?: true
    content?: true
    image?: true
    created_at?: true
  }

  export type PostsMaxAggregateInputType = {
    id?: true
    user_id?: true
    content?: true
    image?: true
    created_at?: true
  }

  export type PostsCountAggregateInputType = {
    id?: true
    user_id?: true
    content?: true
    image?: true
    created_at?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to aggregate.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type PostsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsWhereInput
    orderBy?: PostsOrderByWithAggregationInput | PostsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: PostsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _avg?: PostsAvgAggregateInputType
    _sum?: PostsSumAggregateInputType
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    id: number
    user_id: number
    content: string
    image: Uint8Array | null
    created_at: string
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends PostsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type PostsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    content?: boolean
    image?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    content?: boolean
    image?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    content?: boolean
    image?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectScalar = {
    id?: boolean
    user_id?: boolean
    content?: boolean
    image?: boolean
    created_at?: boolean
  }

  export type PostsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "content" | "image" | "created_at", ExtArgs["result"]["posts"]>

  export type $PostsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Posts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      content: string
      image: Uint8Array | null
      created_at: string
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }

  type PostsGetPayload<S extends boolean | null | undefined | PostsDefaultArgs> = $Result.GetResult<Prisma.$PostsPayload, S>

  type PostsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface PostsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Posts'], meta: { name: 'Posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {PostsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostsFindUniqueArgs>(args: SelectSubset<T, PostsFindUniqueArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostsFindUniqueOrThrowArgs>(args: SelectSubset<T, PostsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostsFindFirstArgs>(args?: SelectSubset<T, PostsFindFirstArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostsFindFirstOrThrowArgs>(args?: SelectSubset<T, PostsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsWithIdOnly = await prisma.posts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostsFindManyArgs>(args?: SelectSubset<T, PostsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posts.
     * @param {PostsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
     */
    create<T extends PostsCreateArgs>(args: SelectSubset<T, PostsCreateArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostsCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostsCreateManyArgs>(args?: SelectSubset<T, PostsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostsCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostsCreateManyAndReturnArgs>(args?: SelectSubset<T, PostsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Posts.
     * @param {PostsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
     */
    delete<T extends PostsDeleteArgs>(args: SelectSubset<T, PostsDeleteArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posts.
     * @param {PostsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostsUpdateArgs>(args: SelectSubset<T, PostsUpdateArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostsDeleteManyArgs>(args?: SelectSubset<T, PostsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostsUpdateManyArgs>(args: SelectSubset<T, PostsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostsUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostsUpdateManyAndReturnArgs>(args: SelectSubset<T, PostsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Posts.
     * @param {PostsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
     */
    upsert<T extends PostsUpsertArgs>(args: SelectSubset<T, PostsUpsertArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostsCountArgs>(
      args?: Subset<T, PostsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostsGroupByArgs['orderBy'] }
        : { orderBy?: PostsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Posts model
   */
  readonly fields: PostsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Posts model
   */
  interface PostsFieldRefs {
    readonly id: FieldRef<"Posts", 'Int'>
    readonly user_id: FieldRef<"Posts", 'Int'>
    readonly content: FieldRef<"Posts", 'String'>
    readonly image: FieldRef<"Posts", 'Bytes'>
    readonly created_at: FieldRef<"Posts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Posts findUnique
   */
  export type PostsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findUniqueOrThrow
   */
  export type PostsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findFirst
   */
  export type PostsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts findFirstOrThrow
   */
  export type PostsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts findMany
   */
  export type PostsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts create
   */
  export type PostsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * The data needed to create a Posts.
     */
    data: XOR<PostsCreateInput, PostsUncheckedCreateInput>
  }

  /**
   * Posts createMany
   */
  export type PostsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostsCreateManyInput | PostsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Posts createManyAndReturn
   */
  export type PostsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostsCreateManyInput | PostsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Posts update
   */
  export type PostsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * The data needed to update a Posts.
     */
    data: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
    /**
     * Choose, which Posts to update.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts updateMany
   */
  export type PostsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Posts updateManyAndReturn
   */
  export type PostsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Posts upsert
   */
  export type PostsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * The filter to search for the Posts to update in case it exists.
     */
    where: PostsWhereUniqueInput
    /**
     * In case the Posts found by the `where` argument doesn't exist, create a new Posts with this data.
     */
    create: XOR<PostsCreateInput, PostsUncheckedCreateInput>
    /**
     * In case the Posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
  }

  /**
   * Posts delete
   */
  export type PostsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Filter which Posts to delete.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts deleteMany
   */
  export type PostsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Posts without action
   */
  export type PostsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
  }


  /**
   * Model Messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesAvgAggregateOutputType = {
    message_id: number | null
    user_id: number | null
  }

  export type MessagesSumAggregateOutputType = {
    message_id: number | null
    user_id: number | null
  }

  export type MessagesMinAggregateOutputType = {
    message_id: number | null
    user_id: number | null
    created_at: Date | null
    content: string | null
  }

  export type MessagesMaxAggregateOutputType = {
    message_id: number | null
    user_id: number | null
    created_at: Date | null
    content: string | null
  }

  export type MessagesCountAggregateOutputType = {
    message_id: number
    user_id: number
    created_at: number
    content: number
    _all: number
  }


  export type MessagesAvgAggregateInputType = {
    message_id?: true
    user_id?: true
  }

  export type MessagesSumAggregateInputType = {
    message_id?: true
    user_id?: true
  }

  export type MessagesMinAggregateInputType = {
    message_id?: true
    user_id?: true
    created_at?: true
    content?: true
  }

  export type MessagesMaxAggregateInputType = {
    message_id?: true
    user_id?: true
    created_at?: true
    content?: true
  }

  export type MessagesCountAggregateInputType = {
    message_id?: true
    user_id?: true
    created_at?: true
    content?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to aggregate.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type MessagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithAggregationInput | MessagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: MessagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _avg?: MessagesAvgAggregateInputType
    _sum?: MessagesSumAggregateInputType
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    message_id: number
    user_id: number
    created_at: Date
    content: string
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends MessagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type MessagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    message_id?: boolean
    user_id?: boolean
    created_at?: boolean
    content?: boolean
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    message_id?: boolean
    user_id?: boolean
    created_at?: boolean
    content?: boolean
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    message_id?: boolean
    user_id?: boolean
    created_at?: boolean
    content?: boolean
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectScalar = {
    message_id?: boolean
    user_id?: boolean
    created_at?: boolean
    content?: boolean
  }

  export type MessagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"message_id" | "user_id" | "created_at" | "content", ExtArgs["result"]["messages"]>

  export type $MessagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Messages"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      message_id: number
      user_id: number
      created_at: Date
      content: string
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type MessagesGetPayload<S extends boolean | null | undefined | MessagesDefaultArgs> = $Result.GetResult<Prisma.$MessagesPayload, S>

  type MessagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface MessagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Messages'], meta: { name: 'Messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {MessagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessagesFindUniqueArgs>(args: SelectSubset<T, MessagesFindUniqueArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessagesFindUniqueOrThrowArgs>(args: SelectSubset<T, MessagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessagesFindFirstArgs>(args?: SelectSubset<T, MessagesFindFirstArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessagesFindFirstOrThrowArgs>(args?: SelectSubset<T, MessagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `message_id`
     * const messagesWithMessage_idOnly = await prisma.messages.findMany({ select: { message_id: true } })
     * 
     */
    findMany<T extends MessagesFindManyArgs>(args?: SelectSubset<T, MessagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {MessagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends MessagesCreateArgs>(args: SelectSubset<T, MessagesCreateArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessagesCreateManyArgs>(args?: SelectSubset<T, MessagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `message_id`
     * const messagesWithMessage_idOnly = await prisma.messages.createManyAndReturn({
     *   select: { message_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessagesCreateManyAndReturnArgs>(args?: SelectSubset<T, MessagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Messages.
     * @param {MessagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends MessagesDeleteArgs>(args: SelectSubset<T, MessagesDeleteArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {MessagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessagesUpdateArgs>(args: SelectSubset<T, MessagesUpdateArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessagesDeleteManyArgs>(args?: SelectSubset<T, MessagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessagesUpdateManyArgs>(args: SelectSubset<T, MessagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessagesUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `message_id`
     * const messagesWithMessage_idOnly = await prisma.messages.updateManyAndReturn({
     *   select: { message_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessagesUpdateManyAndReturnArgs>(args: SelectSubset<T, MessagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Messages.
     * @param {MessagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends MessagesUpsertArgs>(args: SelectSubset<T, MessagesUpsertArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessagesCountArgs>(
      args?: Subset<T, MessagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessagesGroupByArgs['orderBy'] }
        : { orderBy?: MessagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Messages model
   */
  readonly fields: MessagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Messages model
   */
  interface MessagesFieldRefs {
    readonly message_id: FieldRef<"Messages", 'Int'>
    readonly user_id: FieldRef<"Messages", 'Int'>
    readonly created_at: FieldRef<"Messages", 'DateTime'>
    readonly content: FieldRef<"Messages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Messages findUnique
   */
  export type MessagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages findUniqueOrThrow
   */
  export type MessagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages findFirst
   */
  export type MessagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages findFirstOrThrow
   */
  export type MessagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages findMany
   */
  export type MessagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages create
   */
  export type MessagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * The data needed to create a Messages.
     */
    data: XOR<MessagesCreateInput, MessagesUncheckedCreateInput>
  }

  /**
   * Messages createMany
   */
  export type MessagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessagesCreateManyInput | MessagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Messages createManyAndReturn
   */
  export type MessagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessagesCreateManyInput | MessagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Messages update
   */
  export type MessagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * The data needed to update a Messages.
     */
    data: XOR<MessagesUpdateInput, MessagesUncheckedUpdateInput>
    /**
     * Choose, which Messages to update.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages updateMany
   */
  export type MessagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Messages updateManyAndReturn
   */
  export type MessagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Messages upsert
   */
  export type MessagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * The filter to search for the Messages to update in case it exists.
     */
    where: MessagesWhereUniqueInput
    /**
     * In case the Messages found by the `where` argument doesn't exist, create a new Messages with this data.
     */
    create: XOR<MessagesCreateInput, MessagesUncheckedCreateInput>
    /**
     * In case the Messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessagesUpdateInput, MessagesUncheckedUpdateInput>
  }

  /**
   * Messages delete
   */
  export type MessagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Filter which Messages to delete.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages deleteMany
   */
  export type MessagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Messages without action
   */
  export type MessagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UtopiaUserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    auth_user_id: 'auth_user_id',
    email: 'email',
    image: 'image'
  };

  export type UtopiaUserScalarFieldEnum = (typeof UtopiaUserScalarFieldEnum)[keyof typeof UtopiaUserScalarFieldEnum]


  export const FollowAssociationScalarFieldEnum: {
    user_id: 'user_id',
    follower_id: 'follower_id',
    followedAt: 'followedAt'
  };

  export type FollowAssociationScalarFieldEnum = (typeof FollowAssociationScalarFieldEnum)[keyof typeof FollowAssociationScalarFieldEnum]


  export const PostsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    content: 'content',
    image: 'image',
    created_at: 'created_at'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    message_id: 'message_id',
    user_id: 'user_id',
    created_at: 'created_at',
    content: 'content'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UtopiaUserWhereInput = {
    AND?: UtopiaUserWhereInput | UtopiaUserWhereInput[]
    OR?: UtopiaUserWhereInput[]
    NOT?: UtopiaUserWhereInput | UtopiaUserWhereInput[]
    id?: IntFilter<"UtopiaUser"> | number
    name?: StringNullableFilter<"UtopiaUser"> | string | null
    username?: StringNullableFilter<"UtopiaUser"> | string | null
    auth_user_id?: StringFilter<"UtopiaUser"> | string
    email?: StringFilter<"UtopiaUser"> | string
    image?: StringNullableFilter<"UtopiaUser"> | string | null
    followers?: FollowAssociationListRelationFilter
    following?: FollowAssociationListRelationFilter
  }

  export type UtopiaUserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    auth_user_id?: SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    followers?: FollowAssociationOrderByRelationAggregateInput
    following?: FollowAssociationOrderByRelationAggregateInput
  }

  export type UtopiaUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    auth_user_id?: string
    email?: string
    AND?: UtopiaUserWhereInput | UtopiaUserWhereInput[]
    OR?: UtopiaUserWhereInput[]
    NOT?: UtopiaUserWhereInput | UtopiaUserWhereInput[]
    name?: StringNullableFilter<"UtopiaUser"> | string | null
    image?: StringNullableFilter<"UtopiaUser"> | string | null
    followers?: FollowAssociationListRelationFilter
    following?: FollowAssociationListRelationFilter
  }, "id" | "username" | "auth_user_id" | "email">

  export type UtopiaUserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    auth_user_id?: SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UtopiaUserCountOrderByAggregateInput
    _avg?: UtopiaUserAvgOrderByAggregateInput
    _max?: UtopiaUserMaxOrderByAggregateInput
    _min?: UtopiaUserMinOrderByAggregateInput
    _sum?: UtopiaUserSumOrderByAggregateInput
  }

  export type UtopiaUserScalarWhereWithAggregatesInput = {
    AND?: UtopiaUserScalarWhereWithAggregatesInput | UtopiaUserScalarWhereWithAggregatesInput[]
    OR?: UtopiaUserScalarWhereWithAggregatesInput[]
    NOT?: UtopiaUserScalarWhereWithAggregatesInput | UtopiaUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UtopiaUser"> | number
    name?: StringNullableWithAggregatesFilter<"UtopiaUser"> | string | null
    username?: StringNullableWithAggregatesFilter<"UtopiaUser"> | string | null
    auth_user_id?: StringWithAggregatesFilter<"UtopiaUser"> | string
    email?: StringWithAggregatesFilter<"UtopiaUser"> | string
    image?: StringNullableWithAggregatesFilter<"UtopiaUser"> | string | null
  }

  export type FollowAssociationWhereInput = {
    AND?: FollowAssociationWhereInput | FollowAssociationWhereInput[]
    OR?: FollowAssociationWhereInput[]
    NOT?: FollowAssociationWhereInput | FollowAssociationWhereInput[]
    user_id?: IntFilter<"FollowAssociation"> | number
    follower_id?: IntFilter<"FollowAssociation"> | number
    followedAt?: DateTimeFilter<"FollowAssociation"> | Date | string
    user?: XOR<UtopiaUserScalarRelationFilter, UtopiaUserWhereInput>
    follower?: XOR<UtopiaUserScalarRelationFilter, UtopiaUserWhereInput>
  }

  export type FollowAssociationOrderByWithRelationInput = {
    user_id?: SortOrder
    follower_id?: SortOrder
    followedAt?: SortOrder
    user?: UtopiaUserOrderByWithRelationInput
    follower?: UtopiaUserOrderByWithRelationInput
  }

  export type FollowAssociationWhereUniqueInput = Prisma.AtLeast<{
    user_id_follower_id?: FollowAssociationUser_idFollower_idCompoundUniqueInput
    AND?: FollowAssociationWhereInput | FollowAssociationWhereInput[]
    OR?: FollowAssociationWhereInput[]
    NOT?: FollowAssociationWhereInput | FollowAssociationWhereInput[]
    user_id?: IntFilter<"FollowAssociation"> | number
    follower_id?: IntFilter<"FollowAssociation"> | number
    followedAt?: DateTimeFilter<"FollowAssociation"> | Date | string
    user?: XOR<UtopiaUserScalarRelationFilter, UtopiaUserWhereInput>
    follower?: XOR<UtopiaUserScalarRelationFilter, UtopiaUserWhereInput>
  }, "user_id_follower_id">

  export type FollowAssociationOrderByWithAggregationInput = {
    user_id?: SortOrder
    follower_id?: SortOrder
    followedAt?: SortOrder
    _count?: FollowAssociationCountOrderByAggregateInput
    _avg?: FollowAssociationAvgOrderByAggregateInput
    _max?: FollowAssociationMaxOrderByAggregateInput
    _min?: FollowAssociationMinOrderByAggregateInput
    _sum?: FollowAssociationSumOrderByAggregateInput
  }

  export type FollowAssociationScalarWhereWithAggregatesInput = {
    AND?: FollowAssociationScalarWhereWithAggregatesInput | FollowAssociationScalarWhereWithAggregatesInput[]
    OR?: FollowAssociationScalarWhereWithAggregatesInput[]
    NOT?: FollowAssociationScalarWhereWithAggregatesInput | FollowAssociationScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"FollowAssociation"> | number
    follower_id?: IntWithAggregatesFilter<"FollowAssociation"> | number
    followedAt?: DateTimeWithAggregatesFilter<"FollowAssociation"> | Date | string
  }

  export type PostsWhereInput = {
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    id?: IntFilter<"Posts"> | number
    user_id?: IntFilter<"Posts"> | number
    content?: StringFilter<"Posts"> | string
    image?: BytesNullableFilter<"Posts"> | Uint8Array | null
    created_at?: StringFilter<"Posts"> | string
  }

  export type PostsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    image?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type PostsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    user_id?: IntFilter<"Posts"> | number
    content?: StringFilter<"Posts"> | string
    image?: BytesNullableFilter<"Posts"> | Uint8Array | null
    created_at?: StringFilter<"Posts"> | string
  }, "id">

  export type PostsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    image?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: PostsCountOrderByAggregateInput
    _avg?: PostsAvgOrderByAggregateInput
    _max?: PostsMaxOrderByAggregateInput
    _min?: PostsMinOrderByAggregateInput
    _sum?: PostsSumOrderByAggregateInput
  }

  export type PostsScalarWhereWithAggregatesInput = {
    AND?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    OR?: PostsScalarWhereWithAggregatesInput[]
    NOT?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Posts"> | number
    user_id?: IntWithAggregatesFilter<"Posts"> | number
    content?: StringWithAggregatesFilter<"Posts"> | string
    image?: BytesNullableWithAggregatesFilter<"Posts"> | Uint8Array | null
    created_at?: StringWithAggregatesFilter<"Posts"> | string
  }

  export type MessagesWhereInput = {
    AND?: MessagesWhereInput | MessagesWhereInput[]
    OR?: MessagesWhereInput[]
    NOT?: MessagesWhereInput | MessagesWhereInput[]
    message_id?: IntFilter<"Messages"> | number
    user_id?: IntFilter<"Messages"> | number
    created_at?: DateTimeFilter<"Messages"> | Date | string
    content?: StringFilter<"Messages"> | string
  }

  export type MessagesOrderByWithRelationInput = {
    message_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    content?: SortOrder
  }

  export type MessagesWhereUniqueInput = Prisma.AtLeast<{
    message_id?: number
    AND?: MessagesWhereInput | MessagesWhereInput[]
    OR?: MessagesWhereInput[]
    NOT?: MessagesWhereInput | MessagesWhereInput[]
    user_id?: IntFilter<"Messages"> | number
    created_at?: DateTimeFilter<"Messages"> | Date | string
    content?: StringFilter<"Messages"> | string
  }, "message_id">

  export type MessagesOrderByWithAggregationInput = {
    message_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    content?: SortOrder
    _count?: MessagesCountOrderByAggregateInput
    _avg?: MessagesAvgOrderByAggregateInput
    _max?: MessagesMaxOrderByAggregateInput
    _min?: MessagesMinOrderByAggregateInput
    _sum?: MessagesSumOrderByAggregateInput
  }

  export type MessagesScalarWhereWithAggregatesInput = {
    AND?: MessagesScalarWhereWithAggregatesInput | MessagesScalarWhereWithAggregatesInput[]
    OR?: MessagesScalarWhereWithAggregatesInput[]
    NOT?: MessagesScalarWhereWithAggregatesInput | MessagesScalarWhereWithAggregatesInput[]
    message_id?: IntWithAggregatesFilter<"Messages"> | number
    user_id?: IntWithAggregatesFilter<"Messages"> | number
    created_at?: DateTimeWithAggregatesFilter<"Messages"> | Date | string
    content?: StringWithAggregatesFilter<"Messages"> | string
  }

  export type UtopiaUserCreateInput = {
    name?: string | null
    username?: string | null
    auth_user_id: string
    email: string
    image?: string | null
    followers?: FollowAssociationCreateNestedManyWithoutUserInput
    following?: FollowAssociationCreateNestedManyWithoutFollowerInput
  }

  export type UtopiaUserUncheckedCreateInput = {
    id?: number
    name?: string | null
    username?: string | null
    auth_user_id: string
    email: string
    image?: string | null
    followers?: FollowAssociationUncheckedCreateNestedManyWithoutUserInput
    following?: FollowAssociationUncheckedCreateNestedManyWithoutFollowerInput
  }

  export type UtopiaUserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    auth_user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: FollowAssociationUpdateManyWithoutUserNestedInput
    following?: FollowAssociationUpdateManyWithoutFollowerNestedInput
  }

  export type UtopiaUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    auth_user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: FollowAssociationUncheckedUpdateManyWithoutUserNestedInput
    following?: FollowAssociationUncheckedUpdateManyWithoutFollowerNestedInput
  }

  export type UtopiaUserCreateManyInput = {
    id?: number
    name?: string | null
    username?: string | null
    auth_user_id: string
    email: string
    image?: string | null
  }

  export type UtopiaUserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    auth_user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UtopiaUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    auth_user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FollowAssociationCreateInput = {
    followedAt?: Date | string
    user: UtopiaUserCreateNestedOneWithoutFollowersInput
    follower: UtopiaUserCreateNestedOneWithoutFollowingInput
  }

  export type FollowAssociationUncheckedCreateInput = {
    user_id: number
    follower_id: number
    followedAt?: Date | string
  }

  export type FollowAssociationUpdateInput = {
    followedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UtopiaUserUpdateOneRequiredWithoutFollowersNestedInput
    follower?: UtopiaUserUpdateOneRequiredWithoutFollowingNestedInput
  }

  export type FollowAssociationUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    follower_id?: IntFieldUpdateOperationsInput | number
    followedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowAssociationCreateManyInput = {
    user_id: number
    follower_id: number
    followedAt?: Date | string
  }

  export type FollowAssociationUpdateManyMutationInput = {
    followedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowAssociationUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    follower_id?: IntFieldUpdateOperationsInput | number
    followedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsCreateInput = {
    user_id: number
    content: string
    image?: Uint8Array | null
    created_at: string
  }

  export type PostsUncheckedCreateInput = {
    id?: number
    user_id: number
    content: string
    image?: Uint8Array | null
    created_at: string
  }

  export type PostsUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    created_at?: StringFieldUpdateOperationsInput | string
  }

  export type PostsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    created_at?: StringFieldUpdateOperationsInput | string
  }

  export type PostsCreateManyInput = {
    id?: number
    user_id: number
    content: string
    image?: Uint8Array | null
    created_at: string
  }

  export type PostsUpdateManyMutationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    created_at?: StringFieldUpdateOperationsInput | string
  }

  export type PostsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    created_at?: StringFieldUpdateOperationsInput | string
  }

  export type MessagesCreateInput = {
    user_id: number
    created_at?: Date | string
    content: string
  }

  export type MessagesUncheckedCreateInput = {
    message_id?: number
    user_id: number
    created_at?: Date | string
    content: string
  }

  export type MessagesUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type MessagesUncheckedUpdateInput = {
    message_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type MessagesCreateManyInput = {
    message_id?: number
    user_id: number
    created_at?: Date | string
    content: string
  }

  export type MessagesUpdateManyMutationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type MessagesUncheckedUpdateManyInput = {
    message_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FollowAssociationListRelationFilter = {
    every?: FollowAssociationWhereInput
    some?: FollowAssociationWhereInput
    none?: FollowAssociationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FollowAssociationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UtopiaUserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    auth_user_id?: SortOrder
    email?: SortOrder
    image?: SortOrder
  }

  export type UtopiaUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UtopiaUserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    auth_user_id?: SortOrder
    email?: SortOrder
    image?: SortOrder
  }

  export type UtopiaUserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    auth_user_id?: SortOrder
    email?: SortOrder
    image?: SortOrder
  }

  export type UtopiaUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UtopiaUserScalarRelationFilter = {
    is?: UtopiaUserWhereInput
    isNot?: UtopiaUserWhereInput
  }

  export type FollowAssociationUser_idFollower_idCompoundUniqueInput = {
    user_id: number
    follower_id: number
  }

  export type FollowAssociationCountOrderByAggregateInput = {
    user_id?: SortOrder
    follower_id?: SortOrder
    followedAt?: SortOrder
  }

  export type FollowAssociationAvgOrderByAggregateInput = {
    user_id?: SortOrder
    follower_id?: SortOrder
  }

  export type FollowAssociationMaxOrderByAggregateInput = {
    user_id?: SortOrder
    follower_id?: SortOrder
    followedAt?: SortOrder
  }

  export type FollowAssociationMinOrderByAggregateInput = {
    user_id?: SortOrder
    follower_id?: SortOrder
    followedAt?: SortOrder
  }

  export type FollowAssociationSumOrderByAggregateInput = {
    user_id?: SortOrder
    follower_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type PostsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
  }

  export type PostsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type PostsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
  }

  export type PostsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
  }

  export type PostsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type MessagesCountOrderByAggregateInput = {
    message_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    content?: SortOrder
  }

  export type MessagesAvgOrderByAggregateInput = {
    message_id?: SortOrder
    user_id?: SortOrder
  }

  export type MessagesMaxOrderByAggregateInput = {
    message_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    content?: SortOrder
  }

  export type MessagesMinOrderByAggregateInput = {
    message_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    content?: SortOrder
  }

  export type MessagesSumOrderByAggregateInput = {
    message_id?: SortOrder
    user_id?: SortOrder
  }

  export type FollowAssociationCreateNestedManyWithoutUserInput = {
    create?: XOR<FollowAssociationCreateWithoutUserInput, FollowAssociationUncheckedCreateWithoutUserInput> | FollowAssociationCreateWithoutUserInput[] | FollowAssociationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowAssociationCreateOrConnectWithoutUserInput | FollowAssociationCreateOrConnectWithoutUserInput[]
    createMany?: FollowAssociationCreateManyUserInputEnvelope
    connect?: FollowAssociationWhereUniqueInput | FollowAssociationWhereUniqueInput[]
  }

  export type FollowAssociationCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowAssociationCreateWithoutFollowerInput, FollowAssociationUncheckedCreateWithoutFollowerInput> | FollowAssociationCreateWithoutFollowerInput[] | FollowAssociationUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowAssociationCreateOrConnectWithoutFollowerInput | FollowAssociationCreateOrConnectWithoutFollowerInput[]
    createMany?: FollowAssociationCreateManyFollowerInputEnvelope
    connect?: FollowAssociationWhereUniqueInput | FollowAssociationWhereUniqueInput[]
  }

  export type FollowAssociationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FollowAssociationCreateWithoutUserInput, FollowAssociationUncheckedCreateWithoutUserInput> | FollowAssociationCreateWithoutUserInput[] | FollowAssociationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowAssociationCreateOrConnectWithoutUserInput | FollowAssociationCreateOrConnectWithoutUserInput[]
    createMany?: FollowAssociationCreateManyUserInputEnvelope
    connect?: FollowAssociationWhereUniqueInput | FollowAssociationWhereUniqueInput[]
  }

  export type FollowAssociationUncheckedCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowAssociationCreateWithoutFollowerInput, FollowAssociationUncheckedCreateWithoutFollowerInput> | FollowAssociationCreateWithoutFollowerInput[] | FollowAssociationUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowAssociationCreateOrConnectWithoutFollowerInput | FollowAssociationCreateOrConnectWithoutFollowerInput[]
    createMany?: FollowAssociationCreateManyFollowerInputEnvelope
    connect?: FollowAssociationWhereUniqueInput | FollowAssociationWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FollowAssociationUpdateManyWithoutUserNestedInput = {
    create?: XOR<FollowAssociationCreateWithoutUserInput, FollowAssociationUncheckedCreateWithoutUserInput> | FollowAssociationCreateWithoutUserInput[] | FollowAssociationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowAssociationCreateOrConnectWithoutUserInput | FollowAssociationCreateOrConnectWithoutUserInput[]
    upsert?: FollowAssociationUpsertWithWhereUniqueWithoutUserInput | FollowAssociationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FollowAssociationCreateManyUserInputEnvelope
    set?: FollowAssociationWhereUniqueInput | FollowAssociationWhereUniqueInput[]
    disconnect?: FollowAssociationWhereUniqueInput | FollowAssociationWhereUniqueInput[]
    delete?: FollowAssociationWhereUniqueInput | FollowAssociationWhereUniqueInput[]
    connect?: FollowAssociationWhereUniqueInput | FollowAssociationWhereUniqueInput[]
    update?: FollowAssociationUpdateWithWhereUniqueWithoutUserInput | FollowAssociationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FollowAssociationUpdateManyWithWhereWithoutUserInput | FollowAssociationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FollowAssociationScalarWhereInput | FollowAssociationScalarWhereInput[]
  }

  export type FollowAssociationUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowAssociationCreateWithoutFollowerInput, FollowAssociationUncheckedCreateWithoutFollowerInput> | FollowAssociationCreateWithoutFollowerInput[] | FollowAssociationUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowAssociationCreateOrConnectWithoutFollowerInput | FollowAssociationCreateOrConnectWithoutFollowerInput[]
    upsert?: FollowAssociationUpsertWithWhereUniqueWithoutFollowerInput | FollowAssociationUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: FollowAssociationCreateManyFollowerInputEnvelope
    set?: FollowAssociationWhereUniqueInput | FollowAssociationWhereUniqueInput[]
    disconnect?: FollowAssociationWhereUniqueInput | FollowAssociationWhereUniqueInput[]
    delete?: FollowAssociationWhereUniqueInput | FollowAssociationWhereUniqueInput[]
    connect?: FollowAssociationWhereUniqueInput | FollowAssociationWhereUniqueInput[]
    update?: FollowAssociationUpdateWithWhereUniqueWithoutFollowerInput | FollowAssociationUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: FollowAssociationUpdateManyWithWhereWithoutFollowerInput | FollowAssociationUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: FollowAssociationScalarWhereInput | FollowAssociationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FollowAssociationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FollowAssociationCreateWithoutUserInput, FollowAssociationUncheckedCreateWithoutUserInput> | FollowAssociationCreateWithoutUserInput[] | FollowAssociationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowAssociationCreateOrConnectWithoutUserInput | FollowAssociationCreateOrConnectWithoutUserInput[]
    upsert?: FollowAssociationUpsertWithWhereUniqueWithoutUserInput | FollowAssociationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FollowAssociationCreateManyUserInputEnvelope
    set?: FollowAssociationWhereUniqueInput | FollowAssociationWhereUniqueInput[]
    disconnect?: FollowAssociationWhereUniqueInput | FollowAssociationWhereUniqueInput[]
    delete?: FollowAssociationWhereUniqueInput | FollowAssociationWhereUniqueInput[]
    connect?: FollowAssociationWhereUniqueInput | FollowAssociationWhereUniqueInput[]
    update?: FollowAssociationUpdateWithWhereUniqueWithoutUserInput | FollowAssociationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FollowAssociationUpdateManyWithWhereWithoutUserInput | FollowAssociationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FollowAssociationScalarWhereInput | FollowAssociationScalarWhereInput[]
  }

  export type FollowAssociationUncheckedUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowAssociationCreateWithoutFollowerInput, FollowAssociationUncheckedCreateWithoutFollowerInput> | FollowAssociationCreateWithoutFollowerInput[] | FollowAssociationUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowAssociationCreateOrConnectWithoutFollowerInput | FollowAssociationCreateOrConnectWithoutFollowerInput[]
    upsert?: FollowAssociationUpsertWithWhereUniqueWithoutFollowerInput | FollowAssociationUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: FollowAssociationCreateManyFollowerInputEnvelope
    set?: FollowAssociationWhereUniqueInput | FollowAssociationWhereUniqueInput[]
    disconnect?: FollowAssociationWhereUniqueInput | FollowAssociationWhereUniqueInput[]
    delete?: FollowAssociationWhereUniqueInput | FollowAssociationWhereUniqueInput[]
    connect?: FollowAssociationWhereUniqueInput | FollowAssociationWhereUniqueInput[]
    update?: FollowAssociationUpdateWithWhereUniqueWithoutFollowerInput | FollowAssociationUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: FollowAssociationUpdateManyWithWhereWithoutFollowerInput | FollowAssociationUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: FollowAssociationScalarWhereInput | FollowAssociationScalarWhereInput[]
  }

  export type UtopiaUserCreateNestedOneWithoutFollowersInput = {
    create?: XOR<UtopiaUserCreateWithoutFollowersInput, UtopiaUserUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: UtopiaUserCreateOrConnectWithoutFollowersInput
    connect?: UtopiaUserWhereUniqueInput
  }

  export type UtopiaUserCreateNestedOneWithoutFollowingInput = {
    create?: XOR<UtopiaUserCreateWithoutFollowingInput, UtopiaUserUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: UtopiaUserCreateOrConnectWithoutFollowingInput
    connect?: UtopiaUserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UtopiaUserUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<UtopiaUserCreateWithoutFollowersInput, UtopiaUserUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: UtopiaUserCreateOrConnectWithoutFollowersInput
    upsert?: UtopiaUserUpsertWithoutFollowersInput
    connect?: UtopiaUserWhereUniqueInput
    update?: XOR<XOR<UtopiaUserUpdateToOneWithWhereWithoutFollowersInput, UtopiaUserUpdateWithoutFollowersInput>, UtopiaUserUncheckedUpdateWithoutFollowersInput>
  }

  export type UtopiaUserUpdateOneRequiredWithoutFollowingNestedInput = {
    create?: XOR<UtopiaUserCreateWithoutFollowingInput, UtopiaUserUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: UtopiaUserCreateOrConnectWithoutFollowingInput
    upsert?: UtopiaUserUpsertWithoutFollowingInput
    connect?: UtopiaUserWhereUniqueInput
    update?: XOR<XOR<UtopiaUserUpdateToOneWithWhereWithoutFollowingInput, UtopiaUserUpdateWithoutFollowingInput>, UtopiaUserUncheckedUpdateWithoutFollowingInput>
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type FollowAssociationCreateWithoutUserInput = {
    followedAt?: Date | string
    follower: UtopiaUserCreateNestedOneWithoutFollowingInput
  }

  export type FollowAssociationUncheckedCreateWithoutUserInput = {
    follower_id: number
    followedAt?: Date | string
  }

  export type FollowAssociationCreateOrConnectWithoutUserInput = {
    where: FollowAssociationWhereUniqueInput
    create: XOR<FollowAssociationCreateWithoutUserInput, FollowAssociationUncheckedCreateWithoutUserInput>
  }

  export type FollowAssociationCreateManyUserInputEnvelope = {
    data: FollowAssociationCreateManyUserInput | FollowAssociationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FollowAssociationCreateWithoutFollowerInput = {
    followedAt?: Date | string
    user: UtopiaUserCreateNestedOneWithoutFollowersInput
  }

  export type FollowAssociationUncheckedCreateWithoutFollowerInput = {
    user_id: number
    followedAt?: Date | string
  }

  export type FollowAssociationCreateOrConnectWithoutFollowerInput = {
    where: FollowAssociationWhereUniqueInput
    create: XOR<FollowAssociationCreateWithoutFollowerInput, FollowAssociationUncheckedCreateWithoutFollowerInput>
  }

  export type FollowAssociationCreateManyFollowerInputEnvelope = {
    data: FollowAssociationCreateManyFollowerInput | FollowAssociationCreateManyFollowerInput[]
    skipDuplicates?: boolean
  }

  export type FollowAssociationUpsertWithWhereUniqueWithoutUserInput = {
    where: FollowAssociationWhereUniqueInput
    update: XOR<FollowAssociationUpdateWithoutUserInput, FollowAssociationUncheckedUpdateWithoutUserInput>
    create: XOR<FollowAssociationCreateWithoutUserInput, FollowAssociationUncheckedCreateWithoutUserInput>
  }

  export type FollowAssociationUpdateWithWhereUniqueWithoutUserInput = {
    where: FollowAssociationWhereUniqueInput
    data: XOR<FollowAssociationUpdateWithoutUserInput, FollowAssociationUncheckedUpdateWithoutUserInput>
  }

  export type FollowAssociationUpdateManyWithWhereWithoutUserInput = {
    where: FollowAssociationScalarWhereInput
    data: XOR<FollowAssociationUpdateManyMutationInput, FollowAssociationUncheckedUpdateManyWithoutUserInput>
  }

  export type FollowAssociationScalarWhereInput = {
    AND?: FollowAssociationScalarWhereInput | FollowAssociationScalarWhereInput[]
    OR?: FollowAssociationScalarWhereInput[]
    NOT?: FollowAssociationScalarWhereInput | FollowAssociationScalarWhereInput[]
    user_id?: IntFilter<"FollowAssociation"> | number
    follower_id?: IntFilter<"FollowAssociation"> | number
    followedAt?: DateTimeFilter<"FollowAssociation"> | Date | string
  }

  export type FollowAssociationUpsertWithWhereUniqueWithoutFollowerInput = {
    where: FollowAssociationWhereUniqueInput
    update: XOR<FollowAssociationUpdateWithoutFollowerInput, FollowAssociationUncheckedUpdateWithoutFollowerInput>
    create: XOR<FollowAssociationCreateWithoutFollowerInput, FollowAssociationUncheckedCreateWithoutFollowerInput>
  }

  export type FollowAssociationUpdateWithWhereUniqueWithoutFollowerInput = {
    where: FollowAssociationWhereUniqueInput
    data: XOR<FollowAssociationUpdateWithoutFollowerInput, FollowAssociationUncheckedUpdateWithoutFollowerInput>
  }

  export type FollowAssociationUpdateManyWithWhereWithoutFollowerInput = {
    where: FollowAssociationScalarWhereInput
    data: XOR<FollowAssociationUpdateManyMutationInput, FollowAssociationUncheckedUpdateManyWithoutFollowerInput>
  }

  export type UtopiaUserCreateWithoutFollowersInput = {
    name?: string | null
    username?: string | null
    auth_user_id: string
    email: string
    image?: string | null
    following?: FollowAssociationCreateNestedManyWithoutFollowerInput
  }

  export type UtopiaUserUncheckedCreateWithoutFollowersInput = {
    id?: number
    name?: string | null
    username?: string | null
    auth_user_id: string
    email: string
    image?: string | null
    following?: FollowAssociationUncheckedCreateNestedManyWithoutFollowerInput
  }

  export type UtopiaUserCreateOrConnectWithoutFollowersInput = {
    where: UtopiaUserWhereUniqueInput
    create: XOR<UtopiaUserCreateWithoutFollowersInput, UtopiaUserUncheckedCreateWithoutFollowersInput>
  }

  export type UtopiaUserCreateWithoutFollowingInput = {
    name?: string | null
    username?: string | null
    auth_user_id: string
    email: string
    image?: string | null
    followers?: FollowAssociationCreateNestedManyWithoutUserInput
  }

  export type UtopiaUserUncheckedCreateWithoutFollowingInput = {
    id?: number
    name?: string | null
    username?: string | null
    auth_user_id: string
    email: string
    image?: string | null
    followers?: FollowAssociationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UtopiaUserCreateOrConnectWithoutFollowingInput = {
    where: UtopiaUserWhereUniqueInput
    create: XOR<UtopiaUserCreateWithoutFollowingInput, UtopiaUserUncheckedCreateWithoutFollowingInput>
  }

  export type UtopiaUserUpsertWithoutFollowersInput = {
    update: XOR<UtopiaUserUpdateWithoutFollowersInput, UtopiaUserUncheckedUpdateWithoutFollowersInput>
    create: XOR<UtopiaUserCreateWithoutFollowersInput, UtopiaUserUncheckedCreateWithoutFollowersInput>
    where?: UtopiaUserWhereInput
  }

  export type UtopiaUserUpdateToOneWithWhereWithoutFollowersInput = {
    where?: UtopiaUserWhereInput
    data: XOR<UtopiaUserUpdateWithoutFollowersInput, UtopiaUserUncheckedUpdateWithoutFollowersInput>
  }

  export type UtopiaUserUpdateWithoutFollowersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    auth_user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    following?: FollowAssociationUpdateManyWithoutFollowerNestedInput
  }

  export type UtopiaUserUncheckedUpdateWithoutFollowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    auth_user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    following?: FollowAssociationUncheckedUpdateManyWithoutFollowerNestedInput
  }

  export type UtopiaUserUpsertWithoutFollowingInput = {
    update: XOR<UtopiaUserUpdateWithoutFollowingInput, UtopiaUserUncheckedUpdateWithoutFollowingInput>
    create: XOR<UtopiaUserCreateWithoutFollowingInput, UtopiaUserUncheckedCreateWithoutFollowingInput>
    where?: UtopiaUserWhereInput
  }

  export type UtopiaUserUpdateToOneWithWhereWithoutFollowingInput = {
    where?: UtopiaUserWhereInput
    data: XOR<UtopiaUserUpdateWithoutFollowingInput, UtopiaUserUncheckedUpdateWithoutFollowingInput>
  }

  export type UtopiaUserUpdateWithoutFollowingInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    auth_user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: FollowAssociationUpdateManyWithoutUserNestedInput
  }

  export type UtopiaUserUncheckedUpdateWithoutFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    auth_user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: FollowAssociationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FollowAssociationCreateManyUserInput = {
    follower_id: number
    followedAt?: Date | string
  }

  export type FollowAssociationCreateManyFollowerInput = {
    user_id: number
    followedAt?: Date | string
  }

  export type FollowAssociationUpdateWithoutUserInput = {
    followedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follower?: UtopiaUserUpdateOneRequiredWithoutFollowingNestedInput
  }

  export type FollowAssociationUncheckedUpdateWithoutUserInput = {
    follower_id?: IntFieldUpdateOperationsInput | number
    followedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowAssociationUncheckedUpdateManyWithoutUserInput = {
    follower_id?: IntFieldUpdateOperationsInput | number
    followedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowAssociationUpdateWithoutFollowerInput = {
    followedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UtopiaUserUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type FollowAssociationUncheckedUpdateWithoutFollowerInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    followedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowAssociationUncheckedUpdateManyWithoutFollowerInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    followedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}