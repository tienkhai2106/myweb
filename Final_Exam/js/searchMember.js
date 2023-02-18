const HOC_VIEN_SEARCH_KEY = "searchData";



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