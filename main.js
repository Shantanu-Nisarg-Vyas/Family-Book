var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "IMG_8527-copy.jpg", "Screenshot 2021-10-01 at 4.24.13 PM.png", "IMG_3238 copy.jpg", "IMG_0068.JPG"]
var names = ["Family Book","Shantanu Vyas", "Nishant Vyas", "Nisarg Vyas", "Chandani Vyas"];
var i = 0;
function update()
{ i++;
    if(i > 4)
      {
        i = 0;
      }
    var updatedImage = images[i];
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
