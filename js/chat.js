$(function () {
    $(".chat").niceScroll();
});

function sendMessage() {
    var message = $("#write-message").val();
    console.log(message)
    var time = 1;

    $('.chat-message').append(
        `<div class="answer right">
         <div class="avatar">
             <img src="./img/avatar.png" alt="User name">
                 <div class="status online"></div>
                             </div>
             <div class="name">User</div>
             <div class="text">
                 ${message}
                             </div>
             <div class="time">${time} min ago</div>
         </div>`)
}