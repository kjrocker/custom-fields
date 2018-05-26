// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>

/*~ This declaration specifies that the function
 *~ is the exported object from the file
 */
export = ReduxObject;

declare function ReduxObject<P>(
  state: any,
  type: string,
  id: string,
  options: Partial<ReduxObject.BuildOptions>
): ReduxObject.SingleObject<P>;

declare function ReduxObject<P>(
  state: any,
  type: string,
  ids: string[] | null,
  options: Partial<ReduxObject.BuildOptions>
): ReduxObject.ArrayObject<P>;

declare namespace ReduxObject {
  export interface BuildFn {
    <P>(
      state: any,
      type: string,
      ids: string[] | null,
      options?: Partial<ReduxObject.BuildOptions>
    ): ReduxObject.ArrayObject<P>;
    <P>(state: any, type: string, id: string, options?: Partial<ReduxObject.BuildOptions>): ReduxObject.SingleObject<P>;
  }
  export type SingleObject<P> = ResourceObject<P>;
  export type ArrayObject<P> = Array<ResourceObject<P>>;
  export type ResourceObject<P> = P & { id: string | number; type: string };
  export interface BuildOptions {
    eager: boolean;
    ignoreLinks: boolean;
    includeType: boolean;
  }
}
