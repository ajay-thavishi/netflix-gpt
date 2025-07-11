# Netflix GPT

-   Create React App
-   Configured TailwindCSS
-   Header
-   Routing of App
-   Login Form
-   Sign Up Form
-   Form Validation
-   useRef Hook
-   Firebase setup
-   Deployed the app to production(in firebase)
-   Integrated the signup/login form with firebase authentication api
-   Created Redux store with userInfoSlice
-   Upon Sign in/Sign up added the user info to userInfoSlice using onAuthStateChanged
-   Upon Sign out removed the user info from userInfoSlice using onAuthStateChanged
-   BugFix: Sign up user displayname and profile picture update
-   BugFix: If the user is not logged inredirect /browse to login page and vice versa
-   Unsubscribe to onAuthStateChanged on Unmount component
-   Added hardcoded values to constants file

# Features

-   Login/Sign Up

    -   login / sign up form
    -   redirect to browse page

-   Browse (after authentication)
    -   Header
    -   Main Movie
        -   trailer in background
        -   title & description
        -   movie suggestions
        -   movie lists \* n
-   NetflixGpt
    -   search bar
    -   movie suggestions
