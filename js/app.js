    //const title = "My first Blog Post";
    //const content = "This is my first post";

$('#flashMessage').hide();

$('#previewButton').click(function(){ // the click method binds an event handler to the "click" JavaScript event, or trigger that event on an element.
    const title = $('#blogTitleInput').val(); // the val method Sets or returns the value of form fields
    const content = $('#blogContentInput').val();
    
     $('#blogTitlePreview').text(title); // I inserted the title variable into the #blogTitlePreview ID using the text method
    $('#blogContentPreview').html(content); //We can also pass strings inside the methods
                                                                             //html renders html elements while text does not
    $('#flashMessage')
      
       .slideDown(1000)
       .delay(3000)    
       .slideUp(); //we can chain methods together if they target the same element
});                                                                            