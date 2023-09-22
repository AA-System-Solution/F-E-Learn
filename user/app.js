const {
  express,
  bodyParser,
  ejs,
  mongoose,
  session,
  passport,
  passportLocalMongoose,
  findOrCreate,
  fs,
  fileUpload,
  path,
  useragent,
  get_route,
  post_route
} = require('./requires');
const data = require('../data-schema.js');


// ... (your application setup)

// --                            -------      access files Ejs / static files      ------------
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.use('/uploads', express.static('uploads'));
app.use(useragent.express());
app.use(fileUpload({
  safeFileNames: true
}));
app.use(function(req, res, next) {
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.header('Pragma', 'no-cache');
  res.header('Expires', 0);
  next();
});


// -----------------------------      sessiion setup ---------------------------------

app.use(session({
  secret: "creatingE-learn-webApp",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1800000 // 30 minutes
  }
}));

app.use(passport.initialize());
app.use(passport.session());
// --------------                             Data Base connection and plugin   ------------


mongoose.connect('mongodb://127.0.0.1:27017/wayUp').then(() => {
  console.log("connected to database");
});
// -- USER DB encryptedd  by session and passport


// Define a custom middleware function to log request information
app.use((req, res, next) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  next();                                                                 // Call next() to pass control to the next middleware or route handler
});




app.use(get_route);
app.use(post_route);




app.use((req, res, next) => {
  res.status(404).render('404', {
    url: req.originalUrl
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('500', {
    error: err,
    showError: true
  });
});

app.listen("3000", () => {
  console.log("server runing in port 3000");
});
