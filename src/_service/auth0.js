import auth0 from 'auth0-js';

export default class Auth0 {
    auth0 = new auth0.WebAuth({
        domain: 'rickmu.au.auth0.com',
        clientID: 'ioF2s8vLgN7qWs6q-ksJevzurDYHUGL3',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid'
    })

    googleAuthentication = () => (
        this.auth0.authorize({
            connection: 'google-oauth2'
        })
    )

    login = (username, password) => {
        return new Promise((resolve, reject) => {
            this.auth0.login({
                realm: 'Username-Password-Authentication',
                username: username,
                password: password
            },
            (err,authResult) => {
                if (err){
                    console.log(err);
                    return reject(err);
                }
                this.setSession(authResult);
                return resolve();
            })
        })
    }

    signup = (email, password, metadata={}) => {

        return new Promise((resolve, reject) => {
            this.auth0.signup({
                connection: 'Username-Password-Authentication',
                email: email,
                password: password,
                user_metadata: metadata
            },
            (err) => {
                if(err){
                    return reject(err);
                }
                
                return resolve();
            })
        })
    }

    setSession = (authResult) => {
        // Set the time that the access token will expire at
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('expire_time', expiresAt);
    }

    getSession = () => ({
        access_token: localStorage.getItem('access_token'),
        id_token: localStorage.getItem('id_token'),
        expiresAt: localStorage.getItem('expire_time')
    })

    handleAuthentication = () => {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash(
                (err,authResult) => {
                    if(authResult && authResult.accessToken && authResult.idToken){
                        this.setSession(authResult);
                        return resolve;
                    } 
                    else{
                        if(err) {
                            console.log(err)
                        }
                        return reject(err);
                    }
                }
            )
        })
    }
}