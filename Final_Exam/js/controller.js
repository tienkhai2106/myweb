const HOC_VIEN_KEY = "hocvien";
const HOC_VIEN_SEARCH_KEY = "searchHocVien";
const memberList = [];
let id = 1;

function getMember() {
    let studentList = JSON.parse(localStorage.getItem(HOC_VIEN_KEY));
    let tblBody = document.getElementById("result");
    tblBody.innerHTML = "";

    for (let index = 0; index < studentList.length; index ++ ) {
        let tr = document.createElement("tr");
        console.log(tr)
        let td0 = document.createElement("td");
        td0.innerHTML = studentList[index].id;
        let td1 = document.createElement("td");
        td1.innerHTML = studentList[index].name;
        let td2 = document.createElement("td");
        td2.innerHTML = studentList[index].classrooms;
        let td3 = document.createElement("td");
        td3.innerHTML = studentList[index].groups;
        let actionBtn = `<div>
                    <button class='createBtn' onclick='editMember(${studentList[index].id})''>Chỉnh sửa</button>
                    </div>
                    <div>
                    <button class='delBtn' onclick='deleteMember(${studentList[index].id})'>Xóa Học Sinh</button>
                    </div>`; 
        let td4 = document.createElement("td");        
        td4.innerHTML = actionBtn;      

        tblBody.appendChild(tr);
        tr.appendChild(td0);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
    }
    console.log(tblBody);
}
getMember();

function addMember() {
    let members = {
        id: id,
        name: validateFullname(),
        classrooms: validateClassrooom(),
        groups: validateGroup()
    }

    if (members.name == undefined || members.classrooms == undefined || members.groups == undefined) {

    } else {
        memberList.push(members);
        localStorage.setItem(HOC_VIEN_KEY, JSON.stringify(memberList));
        document.getElementById("table_form").style.display = "block";
        document.getElementById("addForm").style.display = "none";
        getMember();
        clearData();
        id++;
    }
}

function editMember(id) {
    editForm();
    let studentList = JSON.parse(localStorage.getItem(HOC_VIEN_KEY));
    console.log(studentList);
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

function deleteMember(id) {
    let studentList = JSON.parse(localStorage.getItem(HOC_VIEN_KEY));
        for (let index = 0; index < studentList.length; index++ ) {
            if (studentList[index].id == id) {
                let key = studentList[index];
                console.log(key);
                studentList.splice(index,1);
            }
        }
        localStorage.setItem(HOC_VIEN_KEY, JSON.stringify(studentList));
        getMember();

    }

function searchMember() {
    let memberListSearch = [];
    
    let studentList = JSON.parse(localStorage.getItem(HOC_VIEN_KEY));
    let fullname_search = document.getElementById('fullname-search');
    let groupSelected_search = document.getElementById('group-search');
    let classroomSelected_search = document.getElementById('classroom-search');
    for (let index = 0; index < studentList.length; index++ ) {
        if (studentList[index].name == fullname_search.value || studentList[index].classrooms == classroomSelected_search.value || studentList[index].groups == groupSelected_search.value) {
            let members = {
                id: id,
                name: studentList[index].name,
                classrooms: studentList[index].classrooms,
                groups: studentList[index].groups
            }
            memberListSearch.push(members)
        } 
    }
    console.log(memberListSearch);
    localStorage.setItem(HOC_VIEN_SEARCH_KEY, JSON.stringify(memberListSearch));
    getMemberSearch()
    
}
function getMemberSearch() {
    let studentListSearch = JSON.parse(localStorage.getItem(HOC_VIEN_SEARCH_KEY));
    let tblBody = document.getElementById("result");
    tblBody.innerHTML = "";

    for (let index = 0; index < studentListSearch.length; index ++ ) {
        let tr = document.createElement("tr");
        console.log(tr)
        let td0 = document.createElement("td");
        td0.innerHTML = studentListSearch[index].id;
        let td1 = document.createElement("td");
        td1.innerHTML = studentListSearch[index].name;
        let td2 = document.createElement("td");
        td2.innerHTML = studentListSearch[index].classrooms;
        let td3 = document.createElement("td");
        td3.innerHTML = studentListSearch[index].groups;
        let actionBtn = `<div>
                    <button class='createBtn' onclick='editMember(${studentListSearch[index].id})''>Chỉnh sửa</button>
                    </div>
                    <div>
                    <button class='delBtn' onclick='deleteMember(${studentListSearch[index].id})'>Xóa Học Sinh</button>
                    </div>`; 
        let td4 = document.createElement("td");        
        td4.innerHTML = actionBtn;      

        tblBody.appendChild(tr);
        tr.appendChild(td0);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
    }
    console.log(tblBody);
}

function resetSearch() {
    let fullname_search = document.getElementById('fullname-search');
    let groupSelected_search = document.getElementById('group-search');
    let classroomSelected_search = document.getElementById('classroom-search');
    fullname_search.value = '';
    groupSelected_search = '';
    classroomSelected_search = '';
    getMember();
}