function submit(){
    var data = $("#theForm").serialize()

    $.ajax({
        type: "post",
        data: data,
        url: "/createProduct",
        contentType: "application/x-www-form-urlencoded",
        success: function(data) {
            alert("Sukses")
            $("#theForm").find("input[type=text], textarea").val("")
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
    alert("Berhasil")
    location.reload();
}
function reload() { 
    location.reload();
 }

    
console.log($("#theForm"))
// $("#theForm").ajaxForm({url: 'http://localhost:3000/createProduk', type: 'post'})
// $('#example').DataTable();
