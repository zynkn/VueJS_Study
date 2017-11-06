function addContact({ name, phone, email = 'no email', age = 0 }) {
    console.log('이름 : ' + name);
    console.log('번호 : ' + phone);
    console.log('이멜 : ' + email);
    console.log('나이 : ' + age);
}

adContact({
    name: '누구',
    phone: '123-123-123'
});