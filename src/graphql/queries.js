/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRequest = /* GraphQL */ `
  query GetRequest($id: ID!) {
    getRequest(id: $id) {
      id
      title
      explane
      pay
      videoUrl
      downloadUrl
      setting {
        length
        ratio
        tag
        subtitle
      }
      owner {
        id
      }
      keepUser {
        id
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRequests = /* GraphQL */ `
  query ListRequests(
    $filter: ModelRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        explane
        pay
        videoUrl
        downloadUrl
        setting {
          length
          ratio
          tag
          subtitle
        }
        owner {
          id
        }
        keepUser {
          id
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
