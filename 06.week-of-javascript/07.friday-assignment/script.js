console.log('🎉')

const usersURL = 'http://localhost:3000/users'
const postsURL = 'http://localhost:3000/posts'
const commentsURL = 'http://localhost:3000/comments'


const dropDownVal = document.querySelector('#dropdown')
const form = document.querySelector('.search-form')


// declare arrays to store the 3 values
let users = []
let posts = []
let comments = []


function getData(){
    // function to fetch all the users,comments and posts

    // function to fetch all the users
    function fetchUsers(){
        fetch(usersURL).then(response => response.json())
        .then( data => {
            users = data
            // console.log(users)   //to see if data is fetched
            
            addDropDownValues()
        })
    }
    
    // function to fetch all the posts    
    function fetchPosts(){
        fetch(postsURL)
            .then(response => response.json())
            .then(data => {
                posts = data
                // console.log(posts)
            })
    }
    
    // function to fetch all comments    
    function fetchComments(){
        fetch(commentsURL)
            .then(response => response.json())
            .then(data => {
                comments = data
                // console.log(comments)
            })
    }
    
    fetchUsers()
    fetchPosts()
    fetchComments()
    
}
// invoke the function to get the data
getData()


function addDropDownValues(){
    // function to add the dropdown values, based of data fetched
    
    let html =''
    if(users.length> 0){
        users.forEach(user => 
            html += `<option value="${user.id}"> ${user.name} </option>`
        )
    } else {
        html += `<option value="none"> None </option>`
    }
    dropDownVal.innerHTML += html
    
}




