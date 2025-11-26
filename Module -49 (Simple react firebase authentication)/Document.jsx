/**
 1 . go to firebase 
 2 . go to firebase console
 3 . create a project
 4 . register web app
 5 . install firebase in react app
 6 . get firebase config inside firebase.init.js
 7 . go to build authentication tab and enable google sign-in method
 8 . enable sign-in method and input email address
 9 . go to firebase auth document  for that go to firebas > build> authentication > web > get started
 10 . copy getAuth import and getAuth code
 11 . export auth from firebase.init.js
 12 . go to sign in with google document
 13 . copy GoogleAuthProvider and signInWithPopup code
 13 . must have to use new GoogleAuthProvider() to create provider
 14 . create google sign-in handler in login component
 11 . use signInWithPopup for google sign in
 12 . the code is : 
    const provider = new GoogleAuthProvider();

    const handleOnClick = () => { 
      signInWithPopup(auth,provider).then(result =>{
        const user = result.user;
        console.log(user);
      })
      .catch(error =>{
        console.error("error:", error);
      })
    }
 13 . attach handleOnClick to button onClick event
 14 . done
 15 . now implement sign out
 16 . copy signOut code from firebase auth document
 17 . create sign out handler in login component
 18 . the code is :
    const handleSignOut =()=>{ 
      signOut(auth).then(()=>{
        // Sign-out successful.
      }).catch((error=>{console.log(error)
      ))
    }
  19 : attach handleSignOut to button onClick event
  20 : done
  
  21 . Now with gitHub
  22 . go to sign in with github document
  23 : multiple providers section
  24 . go to github developer settings to create oauth app
  25 . create new oauth app
  26 . input app name , homepage url , callback url
  27 : new page will open and there you will find client id and client secret
  28 . after creating copy client id and client secret
  29 . go to firebase authentication sign-in method tab
  30 . enable github sign-in method
  31 . input client id and client secret
  32 . save
  33 . now go to login component
  34 . import GithubAuthProvider and signInWithPopup from firebase/auth
  35 . copy GithubAuthProvider and signInWithPopup code
  36 . must have to use new GithubAuthProvider() to create provider
  37 . create github sign-in handler in login component
  38 . the code is :
      const githubProvider = new GithubAuthProvider();
    
 * */ 