class Form {
    constructor(){

    }
    display(){
        var title = createElement('h1')//h1-h6
        title.html("CAR RACING GAME")
        title.position(400,150)

        var input = createInput("").attribute("placeholder", "Name");
        input.position(350,300);

        var button = createButton("PLAY");
        button.position(500,500);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            playerCount += 1;

            player.updateCount(playerCount);
            player.update(name);

            var greeting= createElement('h3');
            greeting.position(500,300);
            greeting.html("Hello "+name);

        })

    }
}