import auth0 from 'auth0-js';

export default class Auth0 {
    auth0 = new auth0.WebAuth({
        domain: 'rickmu.au.auth0.com',
        clientID: 'ioF2s8vLgN7qWs6q-ksJevzurDYHUGL3',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid profile email read:current_user',
        audience: `https://rickmu.au.auth0.com/api/v2/`,
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

    logout = () =>{
        return new Promise((resolve,reject) => {
            localStorage.removeItem('access_token');
            localStorage.removeItem('id_token');
            localStorage.removeItem('expire_time');
            localStorage.removeItem('userInfo');
            localStorage.removeItem('userId');
            this.auth0.logout({
                returnTo: "http://localhost:3000/"
            });
            return resolve();
        });
    }

    renewAuthToken = (accessRights = {}) => {
        return new Promise((resolve,reject) =>  {
            this.auth0.checkSession(

                accessRights,

                (err,authResult) =>{
                    if(err){
                        console.log(err);
                        return reject(err);
                    }
                    else{
                        if (authResult && authResult.accessToken && authResult.idToken) {
                            this.setSession(authResult);
                            return resolve(authResult);
                        }else {
                            console.log("Could not set session");
                            return reject();
                        }
                    }
                })
        });
    }

    getUserProfile =() => {
            return new Promise((resolve, reject) => 
        {

            const userId = this.getUserId();

            if(userId ===null) {
                return reject("No UserId stored");
            }
            
            let management = new auth0.Management({
                domain:'rickmu.au.auth0.com',
                token:  this.getAuthToken()
            });
            
            management.getUser(userId,(err,result) => {
                if(err){
                    return reject(err);
                }else{
                    return resolve(result);
                }
            })
        })
    }

    getUserInfo = () => {
        return new Promise((resolve,reject) => {

            if(!this.isLoggedIn()){
                return reject({error: "Not loggedIn"});
            }

            this.auth0.client.userInfo(this.getAuthToken(),
            (err,userInfo) => {
                if(err){
                    return reject(err);
                }
                else{
                    this.setUserInfo(userInfo);
                    return resolve(userInfo);
                }
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
    };

    setUserInfo = (userInfo) => {
        localStorage.setItem('userId', userInfo.sub);
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }

    getUserId = () => localStorage.getItem('userId');

    getAuthToken = () => (localStorage.getItem('access_token'));

    getIdToken = () => (localStorage.getItem('id_token'));

    getSession = () => ({
        access_token: localStorage.getItem('access_token'),
        id_token: localStorage.getItem('id_token'),
        expiresAt: localStorage.getItem('expire_time')
    });

    isLoggedIn = () => (
        localStorage.getItem('access_token') 
    );

    isAuthenticated = () =>(
        Date.now()< localStorage.getItem('expire_time')
    )


    handleAuthentication = () => {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash(
                (err,authResult) => {
                    if(authResult && authResult.accessToken && authResult.idToken){
                        this.setSession(authResult);
                        return resolve();
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