function authUser({userName, password}) {
    if (!userName || !password) { throw new Error('You must provide an user name and password.'); }

        return new Promise((resolve, reject) => {
            if(userName === 'admin' && password === 'admin@123') {
                resolve({id:'_122o22n899887', userName: 'admin'});
            } else {
                reject('Unuthorized access');
            }
        });
}

export default {
    authUser
}