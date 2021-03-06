/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRequest = /* GraphQL */ `
  mutation CreateRequest(
    $input: CreateRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    createRequest(input: $input, condition: $condition) {
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
export const updateRequest = /* GraphQL */ `
  mutation UpdateRequest(
    $input: UpdateRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    updateRequest(input: $input, condition: $condition) {
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
export const deleteRequest = /* GraphQL */ `
  mutation DeleteRequest(
    $input: DeleteRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    deleteRequest(input: $input, condition: $condition) {
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
