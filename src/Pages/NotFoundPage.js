
export default function NotFound() {
    return (
        <div className="container-fluid not-found-page">
            <div className="col text-center">
                <h2 className="mt-4">Uh oh! Looks like you're lost!</h2>
                <p>Sometimes exploring dungeons can be tricky... why don't you take this map and find your way home?</p>
            </div>
            <div className="flex-container" id="d-map">
                <img id="d-map-img" src="https://i.pinimg.com/originals/6a/78/79/6a7879a42ad6a6eb0862cc1f3bf09c8c.jpg" 
                alt="DungeonMap" useMap="#DungeonMap"></img>
                <map name="DungeonMap">
                <area shape="default" href="/home"></area>
            </map>
            </div>
        </div>
    )
  }