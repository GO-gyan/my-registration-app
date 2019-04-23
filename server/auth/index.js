import passport from 'passport'
import passportJWT from 'passport-jwt'
import jwt from 'jsonwebtoken'

const JWT_SECRET = 'comviva-assignment@2019';
const users = [
    {
      id: 1,
      name: 'John',
      userName: 'john@mail.com',
      password: 'john123'
    }
];

console.log(jwt.sign(users[0], JWT_SECRET))

const { Strategy, ExtractJwt } = passportJWT;

const params = {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

const strategy = new Strategy(params, (payload, done) => {
    const user = users.find(user => user.id === payload.id) || null
  
    return done(null, user)
  })
  
  passport.use(strategy)