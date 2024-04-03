import { FAVORITE } from '../interfaces/FAVORITE';
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private favorites: FAVORITE[] = [];

  constructor(){
    this.loadFavoritesFromLocalStorage();
  }

  getFavorites(){
    return this.favorites;
  }

  addFavorite(value: string){
    const favorite: FAVORITE = { name: value };

    if (!this.favorites.some((el) => el.name === value)) {
      this.favorites.push(favorite);
      this.updateLocalStorageFavorites();
    }
  }

  delFavorite(value: string){
    const index = this.favorites.findIndex((el) => el.name === value);
    this.favorites.splice(index, 1);
    this.updateLocalStorageFavorites()
  }

  private updateLocalStorageFavorites(){
    localStorage.setItem('favorites', JSON.stringify(this.getFavorites()))
  }

  private loadFavoritesFromLocalStorage(){
    const storedFavorites = localStorage.getItem('favorites');

    if(storedFavorites){
      this.favorites.push(...JSON.parse(storedFavorites))
    }
  }

}
