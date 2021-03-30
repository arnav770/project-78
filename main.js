var images = ["download (4).jpg","download.jpg","download (1).jpg","download (3).jpg","download (2).jpg"];


var names = ["family book","Father","Mother","Me","Sister"];


            var i = 0;
            function update()
            {
                i++;
                var numbers_of_family_member_in_array = 5
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedname = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedname;
            }