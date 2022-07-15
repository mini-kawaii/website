$(function () {
  // 削除処理
  $("#delete").on("click", function () {
    localStorage.clear();
    showList();
  });

  // 保存処理
  $("#save").on("click", function () {
    localStorage.setItem(localStorage.length.toString(), $("#todo").val());
    $("#todo").val("");
    showList();
  });

  showList();
});

function showList() {
  $("#list").html("");
  for (let i = 0; i < localStorage.length; i++) {
    $("#list").append(
      "<li class='list-group-item'><button class='btn btn-danger mr-2' onclick='deleteItem(" +
        localStorage.key(i) +
        ")'><i class='fas fa-trash-alt'></i></button>" +
        localStorage.getItem(localStorage.key(i)) +
        "</li>"
    );
  }
}

function deleteItem(i) {
  localStorage.removeItem(i);
  showList();
}
