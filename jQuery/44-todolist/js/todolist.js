$(function() {
    load();
    $("#title").on("keydown", function(e) {
        if (e.keyCode === 13) {
            if ($(this).val() === "") {
                alert("请输入事件");
            } else {
                // 读取本地存储原来的数据
                var local = getData();

                // 更新数据
                local.push({ title: $(this).val(), done: false });

                // 存储数据
                saveData(local);

                // 重新渲染
                load();

                $(this).val("");
            }
        }
    });

    // 删除
    $("ol, ul").on("click", "a", function() {
        var data = getData();
        var index = $(this).attr("id");
        data.splice(index, 1);
        saveData(data);
        load();
    });

    // 完成 未完成
    $("ol, ul").on("click", "input", function() {
        var data = getData();
        var index = $(this).siblings("a").attr("id");
        data[index].done = $(this).prop("checked");
        saveData(data);
        load();
    });

    function getData() {
        var data = localStorage.getItem("todolist");
        if (data !== null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    }

    function saveData(data) {
        localStorage.setItem("todolist", JSON.stringify(data));
    }

    function load() {
        var data = getData();
        $("ol,ul").empty();
        var todoCount = 0;
        var doneCount = 0;
        $.each(data, function(i, n) {
            if (n.done) {
                $("ul").prepend("<li><input type='checkbox' checked='checked'><p>" + n.title + "</p><a href='javascript:;' id=" + i + "></a></li>");
                doneCount++;
            } else {
                $("ol").prepend("<li><input type='checkbox'><p>" + n.title + "</p><a href='javascript:;' id=" + i + "></a></li>");
                todoCount++;
            }
        });
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);
    }
})