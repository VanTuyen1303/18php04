function validateRegister(){
	var name, phone, email, date, male, female, other, check;
	name = document.getElementById('name').value;
	phone = document.getElementById('phone').value;
	email = document.getElementById('email').value;
	date = document.getElementById('date').value;
	male = document.getElementById('male').checked;
	female = document.getElementById('female').checked;
	other = document.getElementById('other').checked;
	if (name == '') {
		document.getElementById('error_name').innerHTML = 'Xin hãy nhập họ tên!';
		check = false;
	}else{
		document.getElementById('error_name').innerHTML = '';
	}
	if (phone == '') {
		document.getElementById('error_phone').innerHTML = 'Xin hãy nhập số điện thoại!';
		check = false;
	}else{
		document.getElementById('error_phone').innerHTML = '';
	}
	if (email == '') {
		document.getElementById('error_email').innerHTML = 'Xin hãy nhập email!';
		check = false;
	}else{
		document.getElementById('error_email').innerHTML = '';
	}
	if (date == '') {
		document.getElementById('error_date').innerHTML = 'Xin hãy nhập ngày sinh!';
	}else{
		document.getElementById('error_date').innerHTML = '';
		check = true;
	}
	if (!male && !female && !other) {
		document.getElementById('error_gender').innerHTML = 'Xin hãy chọn giới tính';
		check = false;
	}else{
		document.getElementById('error_gender').innerHTML = '';
	}
	if (check) {
		document.getElementById('registerForm').style.display = 'none';
		document.getElementById('success').style.display = 'block';
	}
}