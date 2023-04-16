import LoginOAuth2 from "@okteto/react-oauth2-login";
import axios from "axios";
import * as querystring from "querystring";

const Oauth2LoginCustom = props => {

    const onSuccess = response => getAccessToken(response.code);
    const onFailure = response => console.error(response);


    const getAccessToken = responseCode => {
        console.log(responseCode)

        axios.post('http://127.0.0.1:9000/oauth2/token', querystring.stringify({
            'grant_type': 'authorization_code',
            'code': responseCode,
            'client_id': 'messaging-client',
            'client_secret': 'secret',
            'redirect_uri': 'http://127.0.0.1:5173'
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'

            }
        }).then(response => {
            console.log(response);
            window.alert('Access Token: '.concat(response.data.access_token));
        })
            .catch(error => console.log(error))
    }

    return <LoginOAuth2
        clientId="messaging-client"
        authorizeUri="http://127.0.0.1:9000/oauth2/authorize"
        redirectUri="http://127.0.0.1:5173"
        scope="openid"
        responseType="code"
        onSuccess={onSuccess}
        onFailure={onFailure}
    />;


}

export default Oauth2LoginCustom;