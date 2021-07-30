var images = ["https://cdn.imgbin.com/6/3/8/imgbin-lisa-kudrow-the-boss-baby-back-in-business-alec-baldwin-family-the-boss-baby-hz35EFr3VGwbEBgWq6i8NSese.jpg", "https://i.pinimg.com/originals/1f/5c/e6/1f5ce6ae322b4fb7310356389c3d888b.jpg", "https://static.wikia.nocookie.net/dreamworks-boss-baby/images/a/a0/Miles-christopher-bakshi-as-tim-templeton.jpg/revision/latest?cb=20170409094310", "https://i2.wp.com/statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/father-boss-baby-3.2.jpg", "https://static.wikia.nocookie.net/bossbaby/images/9/97/Gigi.octet-stream.jpg/revision/latest?cb=20201205093723"];
var names = ["Family", "Sreepriya Narayanaswamy", "Advaith Prakash", "Prakash Sundarrajan", "Lalitha Swamy"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i >= numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}