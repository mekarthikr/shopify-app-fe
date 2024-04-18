import { config } from '../../config'

export const OktaConfig = {
  oidc: {
    clientId: config.okta.appId,
    issuer: `https://${config.okta.domain}.com/oauth2/default`,
    redirectUri: config.okta.redirectUri,
    scopes: ['openid', 'profile', 'email'],
    pkce: true
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages'
  }
}
