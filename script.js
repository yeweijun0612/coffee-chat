// 模拟用户数据
let users = [];
let messages = [];
let tips = [];

// 注册
function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email && password) {
        users.push({ email, password });
        alert('注册成功！');
        showChat();
    } else {
        alert('请输入邮箱和密码！');
    }
}

// 登录
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        alert('登录成功！');
        showChat();
    } else {
        alert('登录失败：邮箱或密码错误！');
    }
}

// 显示聊天界面
function showChat() {
    document.getElementById('auth').style.display = 'none';
    document.getElementById('chat').style.display = 'block';
    loadMessages();
}

// 发送消息
function sendMessage() {
    const message = document.getElementById('message').value;
    const email = document.getElementById('email').value;
    if (email && message) {
        messages.push({ email, message });
        document.getElementById('message').value = '';
        loadMessages();
    }
}

// 加载消息
function loadMessages() {
    const messagesElement = document.getElementById('messages');
    messagesElement.innerHTML = '';
    messages.forEach(msg => {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${msg.email}: ${msg.message}`;
        messagesElement.appendChild(messageElement);
    });
}

// 打赏
function sendTip() {
    const recipient = document.getElementById('recipient').value;
    const amount = document.getElementById('amount').value;
    const email = document.getElementById('email').value;
    if (email && recipient && amount) {
        tips.push({ from: email, to: recipient, amount });
        alert(`打赏成功！${amount}元已发送给${recipient}`);
    }
}