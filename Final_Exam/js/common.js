function openForm() {
    document.getElementById("table_form").style.display = "none";
    document.getElementById("addForm").style.display = "block";
    document.getElementById("updateBtn").style.display = "none";
}
function editForm() {
    document.getElementById("table_form").style.display = "none";
    document.getElementById("addForm").style.display = "block";
    document.getElementById("updateBtn").style.display = "block";
    document.getElementById("createBtn").style.display = "none";
}

function closeForm() {
    document.getElementById("table_form").style.display = "block";
    document.getElementById("addForm").style.display = "none";
    clearData();
}

function clearData() {
    document.getElementById('fullname').value = "";
    document.getElementById('classrooms').value = "";
    document.getElementById('groups').value = "";
}
function validateFullname() {
    //Lấy dữ liệu của Họ và Tên
    let fullname = document.getElementById('fullname').value;
    if (fullname == "") {
        //Trường bắt buộc
        let msgRequired = "Vui lòng nhập giá trị."
        document.getElementById('msgErrorFullname').innerHTML = msgRequired;
    } else if ((fullname.length) > 50) {
        //Số lượng kí tự tối đa 
        let msgMaxlength = "Vui lòng nhập ít hơn 50 kí tự"
        document.getElementById('msgErrorFullname').innerHTML = msgMaxlength;
    } else {
        document.getElementById('msgErrorFullname').innerHTML = '';
        return fullname;;
    }
}

function validateClassrooom() {
    //Lấy dữ liệu của Lớp
    let classroomSelected = document.getElementById('classrooms').value;
    if (classroomSelected == "") {
        let msgRequired = "Vui lòng nhập giá trị."
        document.getElementById('msgErrorClassRoom').innerHTML = msgRequired;
    } else {
        document.getElementById('msgErrorClassRoom').innerHTML = '';
        return classroomSelected;
    }
}

function validateGroup() {
    //lấy dữ liệu của Nhóm
    let groupSelected = document.getElementById('groups').value;
    if (groupSelected == "") {
        let msgRequired = "Vui lòng nhập giá trị."
        document.getElementById('msgErrorGroup').innerHTML = msgRequired;
    } else {
        document.getElementById('msgErrorClassRoom').innerHTML = '';
        return groupSelected
    }
}