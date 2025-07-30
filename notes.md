so this is my notes folder of react

# NPM stands for just anything else (it is not have full form )

- it is not node package manager
- it is work as a Node package manager
- - package.json -package.json is configuration for a the NPM , why we need it alot of tie it know as a dependencies

# parcel we use while a ignite our app

- basically its a bundler
- its combine aur files (.js,.jsx,.css,.html)
  -optimizes them into bundle (ready for production)
- outputs them into a bundle
- runs a dev server with hot reloading (auto update browser when on file save )

# caret(^) and tilde(~) - difference is (caret we use )

- if we use tilde (~) some how a new version of a parcel has come then if we use tilde its
  automatically install new version of a parcel or any other thing pack so , its harm our
  app bcos we create app in (v1), then its update some dependencies are not their our app
  gets collaps so instead of tilde we use caret , so which we its update only miner updates
  only so which we can have all dependencies so which we run our app

# what is difference bitween package.json and package-lock.json

- package.json = package.json has only this dependencies which we use and which we use i
  intially so its consist only a dependencies which we we need intially but a

- package-lock.json = package-lock.json has a all dependencies which package.json need
  (their has a hiercial struture in this so dependencies) has or need their own dependencie
  s so ists store in the package-lock.json , and its keep track of all the version of the
  all of them.
  -- both are imp in it
  if i have package.json and package-lock.json i can create whole nodemodule file so we can
  put into .gitignore

# node modules -

node modules are a some files which has a all dependencies or which we need into a prj.
basically its consist a package

- its huge

# transitive dependencies - means a dependencies has their on dependencies

# npx parcel indec.html - diff npm and npx

- if you want to install a package its use NPM , we get a download and install react

- if we are doing npx parcel index.html then we are exucating a files , we exuate a react

# CDN links are not preffered way to install or get a react

# npm intall react

- we are writting a " npm intall react " to install react so we use this command , also
  we are not using a "-D " we want react dependencies not a dev dependencies

# parcel -

- Dev Build
- Local server
- HRM - Hot module Replacement
- file watching algo - build in C++
- coaching - faster builds
- image optimization
- minification
- bundling
- compressing
- differencial Bundling - support older browsers
- diagnosis
- Error Handling - in new way
- HTTPs
- Tree Shakiing algo - suppose we ahave 100 functions in our code but we are using a only 5 to 6 function in the code then tree shaking function remove a unused function for us

# some upgradation in script (in package.json) -

"scripts": {
"start" : "parcel index.html",
"build": "parcel build index.html",
"test": "jest"
},

"start" : "parcel index.html",
"build": "parcel build index.html",

# we upgrade this in the script (in package.json) npm run start / npm run build

- so which we can easily start project using parcel
- before we use npx parcel index.html but now we are using a -npm start- its shorter version of npm run start . for build we use - npm run build

# React.createElement -

- many people thing react element is a HTML element but a object.
- but using this is not easy so we use JSX - JavaScript

# JXS -

- its not HTML in js , but we can say its HTML like or XML
- jxs is a js but its not a pure js .(ES 6 is a pure js)

# React Component

- All things in web page is component (header ,footer ,main )
- their are Two types in react
  - class base component - OLD way to create , do not use
  - Functional Componen - new way to create compo , USE THIS , this is a normal js function

# we start food delevary app project

# Props (Property)

- i am oassing to a prop to a func an argument to the function (what ever we passing then props wrapping over here
  and show us )

eg passing props

const Restrocard = (props) => {
return ()

  <h3>{props.Res_name}</h3>
      <h4> {props.cuisine} </h4>
      <h4>{props.star_rating}</h4>
}

const Body = () => {
return (
<div className="Body">
<div className="Search">Search</div>
<div className="Res-container">
<Restrocard
          Res_name="Meghana food"
          cuisine="Biryani , pulav"
          star_rating="4.4"
        />
)
}

## what is config driven UI             --- imp for interview

- ALL THE UI is driven by the config (UI is config driven )


