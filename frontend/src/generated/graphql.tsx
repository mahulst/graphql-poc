import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Post = {
  __typename?: 'Post';
  _id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Post>>>;
};

export type Query = {
  __typename?: 'Query';
  posts: Array<Post>;
  user: User;
  users: Array<User>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type GetUserListNameQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserListNameQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'name'>
  )> }
);

export type PostsForUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PostsForUserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'name'>
    & { posts?: Maybe<Array<Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'name'>
    )>>> }
  ) }
);


export const GetUserListNameDocument = gql`
    query GetUserListName {
  users {
    name
  }
}
    `;

/**
 * __useGetUserListNameQuery__
 *
 * To run a query within a React component, call `useGetUserListNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserListNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserListNameQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserListNameQuery(baseOptions?: Apollo.QueryHookOptions<GetUserListNameQuery, GetUserListNameQueryVariables>) {
        return Apollo.useQuery<GetUserListNameQuery, GetUserListNameQueryVariables>(GetUserListNameDocument, baseOptions);
      }
export function useGetUserListNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserListNameQuery, GetUserListNameQueryVariables>) {
          return Apollo.useLazyQuery<GetUserListNameQuery, GetUserListNameQueryVariables>(GetUserListNameDocument, baseOptions);
        }
export type GetUserListNameQueryHookResult = ReturnType<typeof useGetUserListNameQuery>;
export type GetUserListNameLazyQueryHookResult = ReturnType<typeof useGetUserListNameLazyQuery>;
export type GetUserListNameQueryResult = Apollo.QueryResult<GetUserListNameQuery, GetUserListNameQueryVariables>;
export const PostsForUserDocument = gql`
    query PostsForUser($id: String!) {
  user(id: $id) {
    name
    posts {
      name
    }
  }
}
    `;

/**
 * __usePostsForUserQuery__
 *
 * To run a query within a React component, call `usePostsForUserQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsForUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsForUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostsForUserQuery(baseOptions?: Apollo.QueryHookOptions<PostsForUserQuery, PostsForUserQueryVariables>) {
        return Apollo.useQuery<PostsForUserQuery, PostsForUserQueryVariables>(PostsForUserDocument, baseOptions);
      }
export function usePostsForUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsForUserQuery, PostsForUserQueryVariables>) {
          return Apollo.useLazyQuery<PostsForUserQuery, PostsForUserQueryVariables>(PostsForUserDocument, baseOptions);
        }
export type PostsForUserQueryHookResult = ReturnType<typeof usePostsForUserQuery>;
export type PostsForUserLazyQueryHookResult = ReturnType<typeof usePostsForUserLazyQuery>;
export type PostsForUserQueryResult = Apollo.QueryResult<PostsForUserQuery, PostsForUserQueryVariables>;