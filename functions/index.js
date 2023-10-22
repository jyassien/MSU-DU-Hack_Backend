/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const cors = require('cors')({origin: true});



// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});


const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp({databaseURL: "https://msuduhackton.firebaseio.com"});
admin.firestore().settings({ignoreUndefinedProperties:true});
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
// const { initializeApp } = require('firebase/app');
// const db3 = getDatabase();


const createDataBase = () => {
    const db = getFirestore();
const ForumDatabse =  db.collection('ForumDatabse').doc("Catagory2").set({Food : "Object"})
// const dataB =  db.collection('ForumDatabse').doc("Catagory").set({Ob : "Object"})

}

// createDataBase()


// {
//     issues:
//         issues board (bugs, features), food(near me, reviews, rat issues), information  (news, events, clubs, directions)

// }





//   --------------------


// Import Admin SDK
const { getDatabase } = require('firebase-admin/database');

// Get a database reference to our blog
const setVote = async () => {
    const db = getDatabase();
    const ref = db.ref('posts/saving-data/fireblog')

    const usersRef = ref.child('users');
    const hopperRef = usersRef.child('gracehop');
        hopperRef.update({
     'nickname': 'Amazing Grace'
    });
}

// setVote();

let postId = "-NhJaIMv1hV_Mj6-o0Wx"
const upVoteTrying = async(postID) => {
    const db = getDatabase();
    const ref = db.ref(`posts/Campus/`);
    // const ref = db3.ref(`posts/Campus/News/-NhJaIMv1hV_Mj6-o0Wx/`);

    let newVote = 1 + 1

    // const usersRef = ref.child('News'); 
    // const hopperRef = usersRef.child(`${postID}`);
    //     hopperRef.update({
    //  'upvotes': '12' 
    // });

    // const upvotesRef = db.ref(`posts/Campus/News/${postID}/upvotes/`);
    // upvotesRef.transaction((current_value) => {
    // return parseInt((current_value || 0)) + 1; 
    // });
    console.log("Request Sent!");

}

exports.upVoteTrying = onRequest((request, response) => {
  // const postId = request.query.postid;
  // console.log("Post ID", postId)
  // upVoteTrying(postId);
  // cors(request, response, () => {});
  response.status(200).json({ message: "Vote updated successfully!" });
});


const upVoteCampusNews = async(postID) => {
    const db = getDatabase();
    const ref = db.ref(`posts/Campus/`);
    // const ref = db3.ref(`posts/Campus/News/-NhJaIMv1hV_Mj6-o0Wx/`);

    let newVote = 1 + 1

    // const usersRef = ref.child('News'); 
    // const hopperRef = usersRef.child(`${postID}`);
    //     hopperRef.update({
    //  'upvotes': '12' 
    // });

    const upvotesRef = db.ref(`posts/Campus/News/${postID}/upvotes/`);
    upvotesRef.transaction((current_value) => {
    return parseInt((current_value || 0)) + 1;
    });

}
const upVoteCampusDirections = async(postID) => {
    const db = getDatabase();
    const ref = db.ref(`posts/Campus/`);
    // const ref = db3.ref(`posts/Campus/News/-NhJaIMv1hV_Mj6-o0Wx/`);

    let newVote = 1 + 1

    // const usersRef = ref.child('News'); 
    // const hopperRef = usersRef.child(`${postID}`);
    //     hopperRef.update({
    //  'upvotes': '12' 
    // });

    const upvotesRef = db.ref(`posts/Campus/Directions/${postID}/upvotes/`);
    upvotesRef.transaction((current_value) => {
    return parseInt((current_value || 0)) + 1;
    });

}
const upVoteCampusIssues = async(postID) => {
    const db = getDatabase();
    const ref = db.ref(`posts/Campus/`);
    // const ref = db3.ref(`posts/Campus/News/-NhJaIMv1hV_Mj6-o0Wx/`);

    let newVote = 1 + 1

    // const usersRef = ref.child('News'); 
    // const hopperRef = usersRef.child(`${postID}`);
    //     hopperRef.update({
    //  'upvotes': '12' 
    // });

    const upvotesRef = db.ref(`posts/Campus/Issues/${postID}/upvotes/`);
    upvotesRef.transaction((current_value) => {
    return parseInt((current_value || 0)) + 1;
    });

}
const upVoteDormsNews = async(postID) => {
    const db = getDatabase();
    const ref = db.ref(`posts/Dorm/`);
    // const ref = db3.ref(`posts/Campus/News/-NhJaIMv1hV_Mj6-o0Wx/`);

    let newVote = 1 + 1

    // const usersRef = ref.child('News'); 
    // const hopperRef = usersRef.child(`${postID}`);
    //     hopperRef.update({
    //  'upvotes': '12' 
    // });

    const upvotesRef = db.ref(`posts/Dorm/News/${postID}/upvotes/`);
    upvotesRef.transaction((current_value) => {
    return parseInt((current_value || 0)) + 1;
    });

}
const upVotesDormIssues = async(postID) => {
    const db = getDatabase();
    // const ref = db.ref(`posts/Dorms/`);
    // const ref = db3.ref(`posts/Campus/News/-NhJaIMv1hV_Mj6-o0Wx/`);

    let newVote = 1 + 1

    // const usersRef = ref.child('News'); 
    // const hopperRef = usersRef.child(`${postID}`);
    //     hopperRef.update({
    //  'upvotes': '12' 
    // });

    const upvotesRef = db.ref(`posts/Dorms/Issues/${postID}/upvotes/`);
    upvotesRef.transaction((current_value) => {
    return parseInt((current_value || 0)) + 1;
    });

}
const upVotesFoodCommunity1 = async(postID) => {
    const db = getDatabase();
    // const ref = db.ref(`posts/Dorms/`);
    // const ref = db3.ref(`posts/Campus/News/-NhJaIMv1hV_Mj6-o0Wx/`);

    let newVote = 1 + 1

    // const usersRef = ref.child('News'); 
    // const hopperRef = usersRef.child(`${postID}`);
    //     hopperRef.update({
    //  'upvotes': '12' 
    // });

    const upvotesRef = db.ref(`posts/Food/Community1/${postID}/upvotes/`);
    upvotesRef.transaction((current_value) => {
    return parseInt((current_value || 0)) + 1;
    });

}
const upVotesFoodCommunity2 = async(postID) => {
    const db = getDatabase();
    // const ref = db.ref(`posts/Dorms/`);
    // const ref = db3.ref(`posts/Campus/News/-NhJaIMv1hV_Mj6-o0Wx/`);

    let newVote = 1 + 1

    // const usersRef = ref.child('News'); 
    // const hopperRef = usersRef.child(`${postID}`);
    //     hopperRef.update({
    //  'upvotes': '12' 
    // });

    const upvotesRef = db.ref(`posts/Food/Community2/${postID}/upvotes/`);
    upvotesRef.transaction((current_value) => {
    return parseInt((current_value || 0)) + 1;
    });

}
const upVotesInformationCommunity1 = async(postID) => {
    const db = getDatabase();
    // const ref = db.ref(`posts/Dorms/`);
    // const ref = db3.ref(`posts/Campus/News/-NhJaIMv1hV_Mj6-o0Wx/`);

    let newVote = 1 + 1

    // const usersRef = ref.child('News'); 
    // const hopperRef = usersRef.child(`${postID}`);
    //     hopperRef.update({
    //  'upvotes': '12' 
    // });

    const upvotesRef = db.ref(`posts/Information/Community1/${postID}/upvotes/`);
    upvotesRef.transaction((current_value) => {
    return parseInt((current_value || 0)) + 1;
    });

}
const upVotesIssuesCommunity1 = async(postID) => {
    const db = getDatabase();
    // const ref = db.ref(`posts/Dorms/`);
    // const ref = db3.ref(`posts/Campus/News/-NhJaIMv1hV_Mj6-o0Wx/`);

    let newVote = 1 + 1

    // const usersRef = ref.child('News'); 
    // const hopperRef = usersRef.child(`${postID}`);
    //     hopperRef.update({
    //  'upvotes': '12' 
    // });

    const upvotesRef = db.ref(`posts/Issues/Community1/${postID}/upvotes/`);
    upvotesRef.transaction((current_value) => {
    return parseInt((current_value || 0)) + 1;
    });

}
const upVotesIssuesCommunity2 = async(postID) => {
    const db = getDatabase();
    // const ref = db.ref(`posts/Dorms/`);
    // const ref = db3.ref(`posts/Campus/News/-NhJaIMv1hV_Mj6-o0Wx/`);

    let newVote = 1 + 1

    // const usersRef = ref.child('News'); 
    // const hopperRef = usersRef.child(`${postID}`);
    //     hopperRef.update({
    //  'upvotes': '12' 
    // });

    const upvotesRef = db.ref(`posts/Issues/Community2/${postID}/upvotes/`);
    upvotesRef.transaction((current_value) => {
    return parseInt((current_value || 0)) + 1;
    });

}





exports.upVoteCampusNews = onRequest((request, response) => {
    const postId = request.query.postid;
    console.log("Post ID", postId)
    upVoteCampusNews(postId);
    response.status(200).json(` UpVote updated ${postId}`);
  });
exports.upVoteCampusIssues = onRequest((request, response) => {
    const postId = request.query.postid;
    console.log("Post ID", postId)
    upVoteCampusIssues(postId);
    response.status(200).json(` UpVote updated ${postId}`);
  });
exports.upVoteCampusDirections = onRequest((request, response) => {
    const postId = request.query.postid;
    console.log("Post ID", postId)
    upVoteCampusDirections(postId);
    response.status(200).json(` UpVote updated ${postId}`);
  });
exports.upVoteCampusIssues = onRequest((request, response) => {
    const postId = request.query.postid;
    console.log("Post ID", postId)
    upVoteCampusIssues(postId);
    response.status(200).json(` UpVote updated ${postId}`);
  });
exports.upVoteDormsNews = onRequest((request, response) => {
    const postId = request.query.postid;
    console.log("Post ID", postId)
    upVoteDormsNews(postId);
    response.status(200).json(` UpVote updated ${postId}`);
  });
exports.upVotesDormIssues = onRequest((request, response) => {
    const postId = request.query.postid;
    console.log("Post ID", postId)
    upVotesDormIssues(postId);
    response.status(200).json(` UpVote updated ${postId}`);
  });
exports.upVotesDormIssues = onRequest((request, response) => {
    const postId = request.query.postid;
    console.log("Post ID", postId)
    upVotesDormIssues(postId);
    response.status(200).json(` UpVote updated ${postId}`);
  });
exports.upVotesFoodCommunity1 = onRequest((request, response) => {
    const postId = request.query.postid;
    console.log("Post ID", postId)
    upVotesFoodCommunity1(postId);
    response.status(200).json(` UpVote updated ${postId}`);
  });
exports.upVotesFoodCommunity2 = onRequest((request, response) => {
    const postId = request.query.postid;
    console.log("Post ID", postId)
    upVotesFoodCommunity2(postId);
    response.status(200).json(` UpVote updated ${postId}`);
  });
exports.upVotesInformationCommunity1 = onRequest((request, response) => {
    const postId = request.query.postid;
    console.log("Post ID", postId)
    upVotesInformationCommunity1(postId);
    response.status(200).json(` UpVote updated ${postId}`);
  });
exports.upVotesIssuesCommunity1 = onRequest((request, response) => {
    const postId = request.query.postid;
    console.log("Post ID", postId)
    upVotesIssuesCommunity1(postId);
    response.status(200).json(` UpVote updated ${postId}`);
  });
exports.upVotesIssuesCommunity2 = onRequest((request, response) => {
    const postId = request.query.postid;
    console.log("Post ID", postId)
    upVotesIssuesCommunity2(postId);
    response.status(200).json(` UpVote updated ${postId}`);
  });

// upVoteCampusNews("-NhK4yVzzozaygBB5PXA");
// upVoteCampusIssues("-NhJknkdf90VcQXj8X1a");
// upVoteCampusDirections("-NhJj5nwxHqnJJ83XtSV");

// upVotesDormIssues("-NhJijDfjO69QXS5XsqZ");

// upVotesFoodCommunity2("-NhJBl4fOlWavxBFlWWk");

// upVotesInformationCommunity1("-NhJ8SK0bhwhFxRCCbBE");

// upVotesIssuesCommunity2("-NhJ7Xwconx1-90Kve7q");

 
// '-NhJaIMv1hV_Mj6-o0Wx'
const getVote = async(postId = '-NhJBl4fOlWavxBFlWWk') => {
    // Get a database reference to our posts
const db3 = getDatabase();
const ref = db3.ref(`posts/Campus/News/-NhJaIMv1hV_Mj6-o0Wx/`);
// const ref = db3.ref(`posts/Community2/${postId}/content`);

// Attach an asynchronous callback to read the data at our posts reference
ref.on('value', (snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.key);
      } else {
        console.log("Data doesn't exist at this location.");
      }
    console.log("first")
  console.log(snapshot.val());
  console.log(snapshot.val().upvotes);
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
}); 

}
// getVote();

const getVote2 = async(postId) => {
    // Get a database reference to our posts
const db3 = getDatabase();
const ref = db3.ref('posts/saving-data/fireblog');

// Attach an asynchronous callback to read the data at our posts reference
ref.on('value', (snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("Data doesn't exist at this location.");
      }
    console.log("first")
  console.log(snapshot.val());
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
}); 


}
// getVote2()

// posts/login/users/ {uname: "", psw: ""}
// posts/signup/users/ {uname: "", psw: ""}

const login = async(username, password) => {
  const db = getDatabase();
    const ref = db.ref('posts/login/');
    // const ref = db.ref(`login/`);
    // const ref = db.ref(`login/users/`);

    ref.on('value', (snapshot) => {
      if (snapshot.exists()) {
          // console.log(snapshot.val());
          let access = checkUser(snapshot.val(), "u2@uname.edu", "passu2");
          console.log("access", access);
          if(access == true) return true;
          else if(access == false) return false;
          else return access;
        } else {
          console.log("Data doesn't exist at this location.");
        }
      console.log("login user list")
    console.log(snapshot.key);
  }, (errorObject) => {
    console.log('The read failed: ' + errorObject.name);
  }); 
}


exports.getData = onRequest( async (request, response) => {
  // logger.info("Hello logs!", {structuredData: true});
  const db = getFirestore();
  // const ForumDatabse =  db.collection('ForumDatabse').doc("Catagory2").set({Food : "Object"})
  const foodIssuesRef =  db.collection('posts').doc("Food")
  // console.log(foodIssuesRef)

  const doc = await foodIssuesRef.get();
  if (!doc.exists) {
      console.log('No such document!');
      }    else {
      console.log('Document data:', doc.data());
          }
  // foodIssuesRef.get()
  // .then((array) => {
  //   console.log("foodIssuesRef, True 3") 

  //   // console.log(array)
  //     array.docs.forEach((doc) => {
  //       console.log("foodIssuesRef, True 4")
  //         console.log(doc.data());
         

  //         console.log("_______________||||||___________")
  //     });
  // });

  response.send("Hello from DataBase!");
});

const getData = async() => {
  // logger.info("Hello logs!", {structuredData: true});
  const db = getDatabase();
  const ref = db.ref(`posts/`);
  // console.log(foodIssuesRef)

  ref.on('value', (snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
        
      } else {
        console.log("Data doesn't exist at this location.");
      }
    console.log("login user list")
  console.log(snapshot.key);
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);})

  
}

// getData();



// category/community/postid
// Usable functions

const upVote = async(category, community, postId) => {
  const db = getDatabase();
  const ref = db.ref(`posts/Campus/`);
  // const ref = db3.ref(`posts/Campus/News/-NhJaIMv1hV_Mj6-o0Wx/`);

  let newVote = 1 + 1

  console.log("upVote running")

  const upvotesRef = db.ref(`posts/${category}/${community}/${postId}/upvotes/`);
  upvotesRef.transaction((current_value) => {
  return parseInt((current_value || 0)) + 1;
  });

}
exports.upVote = onRequest((request, response) => {
    // const request = request.query.
    // category=Food&community=Issues&postid=-NhJidwG5QV0C8DmGr9B
    cors(request, response, async () => {
    const category = request.query.category;
    const community = request.query.community;
    const postId = request.query.postid;
    console.log("Post ID", postId)
    upVote(category, community, postId);

    response.status(200).json(` UpVote updated ${category}, ${community}, ${postId}`);
  })
  });

// Login and Signup

  const signup = async(username, password) => {

    const db = getDatabase();
      const ref = db.ref('posts/login/');
      // const ref = db.ref(`login/`);
      // const ref = db.ref(`login/users/`);
  
      // console.log(username, password)
  
    const usersRef = ref.child('users');
    // const hopperRef = usersRef.child('gracehop');
    const newUserRef = usersRef.push();
  
    // Set the user data under the auto-generated ID
    return newUserRef.set({
      uname: username,
      psw: password
    });
  }
  
  // login();
  // signup("myuser33","mypass333");
  
  
  exports.login = onRequest((request, response) => {
    // const request = request.query.
    // category=Food&community=Issues&postid=-NhJidwG5QV0C8DmGr9B
    cors(request, response, () => {
    const uname = request.query.uname;
    const psw = request.query.psw;
    
    let isUser = login(uname, psw);
    if(isUser) {
      response.status(200).json(`SUCCESS, user details: ${uname}, ${psw}`);
    }else if(!isUser) {
      response.status(401).json(`INCORRECT PASSWORD, user details: ${uname}, ${psw}`);
  
    }
    else {
      response.status(404).json(`NOT FOUND, user details: ${uname}, ${psw}`);
    }
  
    
  })});

  exports.signup =  onRequest(async (request, response) => {
    // const request = request.query. 
    cors(request, response, async () => {
    const uname = request.query.uname;
    const psw = request.query.psw;
  
    console.log("usersss", uname, psw)
    
    let isUser = await signup(uname, psw);
    
      response.status(200).json(`SUCCESS, user details: ${uname}, ${psw}`);
  
  
    // 127.0.0.1:5001/msuduhackton/us-central1/signup?uname=SIGN@uname.edu&psw=2233
  })
  });
  
  const setlogIn = async () => {
    const db = getDatabase();
    const ref = db.ref('posts/login/')
  
    const usersRef = ref.child('users');
    // const hopperRef = usersRef.child('gracehop');
    const newUserRef = usersRef.push();
  
    // Set the user data under the auto-generated ID
    newUserRef.set({
      uname: 'u1@uname.edu',
      psw: 'passu1'
    });
  }
  // setlogIn()
  
  const checkUser = (users, username, password) => {
    console.log(users.users, username, password)
    // users?.users?.map((user) => {
    for(let userkey in users.users) {
      // console.log(users.users[userkey])
      console.log("first", userkey, typeof userkey)
      if(users.users[userkey].uname == username){
        if(users.users[userkey].psw == password) return true;
        else return false;
      }
      
    }
    return "nouserfound";
  }