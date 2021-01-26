class Tab {
    constructor(id) {
        // 获取元素
        this.main = document.querySelector(id);
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
    }

    // 切换功能
    toggleTab() {

    }

    // 添加功能
    addTab() {

    }

    // 删除功能
    removeTab() {

    }

    // 修改功能
    editTab() {

    }
}
new Tab('#tab');