function addContact(name, mobile, home = "NONE", address = "NONE", email = "NONE") {
    var str = `name=${name}, mobile=${mobile}, home=${home}, address=${address}, email=${email}`;
    console.log(str);
}

addContact('홍길동', '010-5107-5563');
addContact('김홍도', '112-344-555', '02-123-1234', 'seoul');