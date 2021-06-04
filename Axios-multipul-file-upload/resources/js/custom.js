const { default: axios } = require("axios");

$('.addBtn').on('click', function(){
    let newTableRow = 
                "<tr>" +
                    "<td><input class='fileInput form-control' type='file'></td>" +
                    "<td class='fileSize'>file size</td>" +
                    "<td><button class='btn cancleBtn btn-danger btn-sm'>Cancle</button></td>" +
                    "<td><button class='btn fileUpload btn-primary btn-sm'>Upload</button></td>" +
                    "<td class='uploadMB'>Uploaded(MB)</td>" +
                    "<td class='uploadPercentage'>Uploaded(%)</td>" +
                    "<td class='uploadStatus'>Status</td>" +
                "</tr>";
         $('.fileList').append(newTableRow);
         
         //Remove Row
         $('.cancleBtn').on('click',function(){
            $(this).parents('tr').remove();
        })
        //File Size
        $('.fileInput').on('change', function(){
            let MyFile = $(this).prop('files');
            let fileSize = (MyFile[0].size/(1024*1024)).toFixed(2);
            $(this).closest('tr').find('.fileSize').html(fileSize+"MB");
        })
        //File Upload Btn
        $('.fileUpload').on('click',function(event){
            let MyFile = $(this).closest('tr').find('.fileInput').prop('files');
            let fileUpMB = $(this).closest('tr').find('.uploadMB');
            let uploadPercentage = $(this).closest('tr').find('.uploadPercentage');
            let uploadStatus = $(this).closest('tr').find('.uploadStatus');
            let formData = new FormData();
            formData.append('FileKey',MyFile[0]);

            OnFileUpload(formData,fileUpMB,uploadPercentage,uploadStatus);
            event.preventDefault();
            event.stopImmediatePropagation();
        })
})
         

function OnFileUpload(formData,fileUpMB,uploadPercentage,uploadStatus){
    let url = '/fileUp';

    let config = {
        headers:{'content-type':'multipart/form-data'},
        onUploadProgress:function(progressEvent){
        let UpMB = (progressEvent.loaded/(1024*1024)).toFixed(2) +" MB";
        let UpPerc = ((progressEvent.loaded*100)/progressEvent.total).toFixed(2) +" %";
        fileUpMB.html(UpMB);
        uploadPercentage.html(UpPerc);

        }
    }

    axios.post(url,formData,config)
    .then(function(response){
        if (response.status == 200) {
            uploadStatus.html('Success');
        } else {
            uploadStatus.html('Faild');
        }
    })
    .catch(function(error){
        uploadStatus.html('Faild');
    })
}