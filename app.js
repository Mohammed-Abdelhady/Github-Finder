// Init
const github = new Github;
const ui = new UI;
// Search Input
const searchUser = document.getElementById('searchUser');


// Search input event listener
searchUser.addEventListener('keyup', e=>{
    // Get input text
    const userText = e.target.value;

    if(userText !== ''){
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    // Show alert
                    ui.showAlert('User not founded', 'alert alert-danger');
                }else {
                    // Show profile
                    ui.showProfile(data.profile);
                    // Show repos
                    ui.showRepos(data.repos);
                }
            })
    }else {
        // clear profile
        ui.clearProfile();
    }
});