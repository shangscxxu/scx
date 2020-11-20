 


$(function () {
    var src3=""
    function ghtp() {
        $('.upload').change(function () {
            var oFReader = new FileReader();
            var file = document.getElementById('input-file').files[0];
            if(file){
                oFReader.readAsDataURL(file);
                oFReader.onloadend = function (oFRevent) {
                    src3 = oFRevent.target.result;
                    console.log(src3);
                }
            }else{
                src3 = "";
            }
           
        })
    } 
    $.ajax({
        url:"http://mock.shtodream.cn/mock/5fb3673d8e13766542114e3b/123456789aikuai/",
        type:"get",
        success: function (data)    {
            console.log(data)
            var str="";
            $.each(data,function(i,v){
              str+='<tr><td>'+v.id+'</td><td><img src="'+v.img+'"><div style="float:right" class="s">'+v.msginfo+'</div></td><td><input type="button" name="change" value="编辑"><td><input type="button" class="delbtn" value="删除" name="remove"></td></tr>';
            })
            $("table").append(str)
            $("input[name=add]").click(function () {
                $(".box").show();
                $("input[name=okbtn]").hide();
                $("input[name=addbtn]").show();
                ghtp();
            })
            $("input[name=addbtn]").click(function () {
                s=$("tr").last().index();
                str3 = '<tr><td>'+(s+1)+'</td><td><img src="' + src3  +'"><div style="float:right" class="s">'+$("input[name=txt]").val()+'</div></td><td><input type="button" value="编辑" name="change"></td><td><input type="button" value="删除" name="remove"></td></tr>';
                $("table>tbody").append(str3);
                newbtn();
                $(".box").hide();
            });
            $("input[name=cancelbtn]").click(function () {
                $(".box").hide();
            });
            function newbtn() {
                $("input[name=remove]").click(function () {
                    $(this).parent().parent().remove();
                });
                $("input[name=change]").click(function () {
                    $(".box").show();
                    $("input[name=addbtn]").hide();
                    $("input[name=okbtn]").show();
                    ghtp();
                    var str3 = "";
                    s = $(this).parent().parent().index();
                    console.log(s);
                    $("input[name=okbtn]").on("click", function () {
                        str3 = '<tr><td>'+(s)+'</td><td><img src="' + src3  +'"><div style="float:right" class="s">'+$("input[name=txt]").val()+'</div></td><td><input type="button" value="修改" name="change"></td><td><input type="button" value="删除" name="remove"></td></tr>';
                        $("tr").eq(s).replaceWith(str3);
                        $(".box").hide();
                        newbtn();
                    })
                })
            }
            newbtn();
        }
        
    })

})