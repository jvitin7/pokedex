import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PokemonCategoriesComponent } from './components/pokemon-categories/pokemon-categories.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonComponent } from './components/pokemon-list/pokemon/pokemon.component';
import { PokemonService } from './services/pokemon.service';
import { TypeFiltersComponent } from './components/pokemon-categories/type-filters/type-filters.component';
import { PokemonFiltersComponent } from './components/pokemon-categories/pokemon-filters/pokemon-filters.component';
import { PokemonSearchComponent } from './components/pokemon-categories/pokemon-search/pokemon-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonCategoriesComponent,
    PokemonListComponent,
    PokemonComponent,
    PokemonSearchComponent,
    TypeFiltersComponent,
    PokemonFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
