import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from '../model/User';
import bcrypt from 'bcrypt';

passport.use(new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
    },async (username, password, done) => {
    try {
        console.log(username,password)
      const user = await User.findOne({ where: { email: username } });
      if (!user) return done(null, false);

      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) return done(null, false);

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});
