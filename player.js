class Player {
    constructor(){
        
    }
    update(name){
        var playerindex = "player"+playerCount;
        database.ref(playerindex).set({name:name})

    }
    updateCount(count){
        database.ref('/').update({playerCount:count})
    }
    getCount(){
        database.ref('playerCount').on("value",function(data){
            playerCount = data.val()
        })
    }
}