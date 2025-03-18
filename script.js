
document.addEventListener("DOMContentLoaded", function() {
    const originalTitle = document.title; 
    const animatedTitles = ["i", "in", "ins","inst","insta","instak","instaki","instakil","instakill","instakil","instaki","instak","insta","inst","ins","in","i"];
    let index = 0;

    setInterval(() => {
        
        document.title = animatedTitles[index];
        index = (index + 1) % animatedTitles.length; 
    }, 1300); 
});
