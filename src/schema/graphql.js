import gql from 'graphql-tag'

export const LOGIN_USER = gql`
mutation signIn ($email: String! $password: String! ){
  signIn(email: $email password: $password ){
    token
  }
}`

export const CURRENT_USER = gql`
query currentUser{
  currentUser {
    id
    username
  }
}`