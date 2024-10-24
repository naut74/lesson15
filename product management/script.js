

function addProduct(){
    let newProduct=document.getElementById("inputNewProduct").value;
    let table=document.getElementById("myTable");
    let newRow=table.insertRow();

    let cell1=newRow.insertCell(0);
    let cell2=newRow.insertCell(1);
    let cell3=newRow.insertCell(2);

    cell1.innerHTML=newProduct;
    cell2.innerHTML='<button class="btn" onclick="editProduct(this);">Edit</button>';
    cell3.innerHTML='<button type="button" class="btn" onclick="deleteProduct(this);">Delete</button>';
    alert("Sản phẩm "+newProduct+ " đã được thêm");
}   

function editProduct(button){
    let row=button.parentNode.parentNode;
    let cell=row.cells[0];
    let original=cell.innerHTML;
    let newContent=prompt("Nhập tên sản phẩm mới",cell.innerHTML);
    if(newContent!=="null"){
        cell.innerHTML=original;
    }
    else{
        cell.innerHTML=cell.innerHTML;
    }
}

function deleteProduct(button){
    if(confirm("Bạn có chắc chắn muốn xóa hàng này không?")) {
        let row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
    else {
        alert("Hủy xóa sản phẩm");
    }

}