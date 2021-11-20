let json = new XMLHttpRequest();
json.onreadystatechange = function () {
    if (json.readyState == 4 && json.status == 200) {
        let id = this.responseText;
        console.log(id);
    }
}
json.open('GET', 'data.json', true);