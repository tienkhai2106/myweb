function deleteMember(id) {
    editForm();
    let studentList = JSON.parse(localStorage.getItem(HOC_VIEN_KEY));
    let fullname = document.getElementById('fullname');
    let groupSelected = document.getElementById('groups');
    let classroomSelected = document.getElementById('classrooms');
    for (let index = 0; index < studentList.length; index++ ) {
        if (studentList[index].id == id) {
            fullname.value = studentList[index].name;
            classroomSelected.value = studentList[index].classrooms;
            groupSelected.value= studentList[index].groups;
        }
    }
    document.getElementById("updateBtn").onclick = function () {
        for (let index = 0; index < studentList.length; index++ ) {
            if (studentList[index].id == id) {
                studentList[index].name = document.getElementById('fullname').value;
                studentList[index].classrooms = classroomSelected.value;
                studentList[index].groups = classroomSelected.value;
            }
        }
        localStorage.setItem(HOC_VIEN_KEY, JSON.stringify(studentList));
        document.getElementById("table_form").style.display = "block";
        document.getElementById("addForm").style.display = "none";
        getMember();
        clearData();
        id++;
}
}