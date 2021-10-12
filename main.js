var images = ["https://thumbs.dreamstime.com/z/family-portrait-happy-people-parents-children-cartoon-vector-illustration-my-lovely-94271052.jpg","https://thumbs.dreamstime.com/b/grandfather-wearing-eyeglasses-silver-haired-grandpa-cartoon-character-holding-cup-hot-drink-vector-illustration-white-124287128.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtpbb2wHUSSAZbORLYuDgjuUTLJThDzHeb82ntpJZw82QD9slnBLfL1n-mGCu7ibIi2kQ&usqp=CAU" , "https://img2.pngio.com/3-brothers-clipart-brothers-3-png-650_717.jpg","https://img.favpng.com/2/19/10/childcare-worker-jardin-d-enfants-certification-arubaito-clip-art-png-favpng-FdZ48HyUDW6YzEDjkYhNAkspH_t.jpg", "https://img1.pnghut.com/17/22/12/w1j6pccdDb/cartoon-flower-heart-silhouette-tree.jpg"];
var names = ["Family Book","grampa", "dad", "brothers", "grandma", "mom"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }

    var updatedImage = images[i];
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
