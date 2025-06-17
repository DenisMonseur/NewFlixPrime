import { toast } from "sonner"

export function AddToFavorites(item) {
    // array can't be empty or .some will crash
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [] 

    //added a mediatype to differenciate movie.id and serie.id
    const duplicate = storedFavorites.some(fav => fav.id === item.id && fav.mediaType === item.mediaType)

    if(!duplicate){
        storedFavorites.unshift(item)
        localStorage.setItem("favorites", JSON.stringify(storedFavorites))
        console.log((item, "added to favorites"));
        toast.success(`Added to favorites`)

    } else {
        console.log(item, "already in favorites");
        toast.error("Already in favorites")
    }
}