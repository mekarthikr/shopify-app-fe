import GlobalVariables from '../../variables';

export const OktaConfig = {
  oidc: {
    clientId: GlobalVariables.Okta.AppId,
    issuer: `https://${GlobalVariables.Okta.Domain}.com/oauth2/default`,
    redirectUri: GlobalVariables.Okta.RedirectUrl,
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};
