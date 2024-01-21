function back() {
  window.history.back();
}

function renderTable() {
  var tables = document.getElementsByTagName("table");
  for (var i = 0; i < tables.length; i++) {
    let table = tables[i];
    var parentNode = table.parentNode;
    var parentClassList = parentNode.classList;
    // 排除分类归档页面和代码高亮
    if (!table.classList.contains("table") && !parentClassList.contains("highlight")) {
      table.classList.add("ui");
      table.classList.add("table");
    }
  }
}

function showSearchForm() {
  $(".ui.modal").modal("show");
}

function closeSearchForm() {
  $(".ui.modal").modal("hide");
}
