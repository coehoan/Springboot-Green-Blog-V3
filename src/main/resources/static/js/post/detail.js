function postLikeClick(id) {
    let isLike = ($(`#${id}`).hasClass("my_fake_unlike"));
    if (isLike) {
        postLike(id);
    } else {
        postUnLike(id);
    }
}

// 좋아요 누르기
function postLike(id) {
    $(`#${id}`).addClass("my_fake_like");
    $(`#${id}`).removeClass("my_fake_unlike");
    $(`#${id}`).addClass("fa-solid");
    $(`#${id}`).removeClass("far");
}
// 좋아요 취소하기
function postUnLike(id) {
    $(`#${id}`).removeClass("my_fake_like");
    $(`#${id}`).addClass("my_fake_unlike");
    $(`#${id}`).removeClass("fa-solid");
    $(`#${id}`).addClass("far");
}

// 게시글 삭제, 권한체크 후 삭제 /s/api/post/postId
$("#btn-delete").click(() => {
    postDelete();
});

let postDelete = async () => {

    let postId = $("#postId").val();
    let pageOwnerId = $("#pageOwnerId").val();

    let response = await fetch(`/s/api/post/${postId}`, {
        method: "DELETE"
    });

    if (response.status == 200) {
        alert("삭제성공");
        location.href = `/user/${pageOwnerId}/post`;
    } else {
        alert("삭제실패");
    }
};