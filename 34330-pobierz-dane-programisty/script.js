$(document).ready(function() {
   
    $('#get-data').click(function() {
        
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function(data) {
                
                let dataContainer = $('<div id="dane-programisty"></div>');

                let name = $('<p></p>').text(`Name: ${data.imie}`);
                let surname = $('<p></p>').text(`Surname: ${data.nazwisko}`);
                let occupation = $('<p></p>').text(`Occupation: ${data.zawod}`);
                let company = $('<p></p>').text(`Company: ${data.firma}`);

                dataContainer.append(name);
                dataContainer.append(surname);
                dataContainer.append(occupation);
                dataContainer.append(company);

                $('body').append(dataContainer);
                
            });

    });

});